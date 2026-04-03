# Báo cáo: Hướng đi Hand-off Design → Dev với Figma MCP

> **Dự án**: SprouX Design System
> **Ngày**: 2026-03-30
> **Mục tiêu**: Đánh giá 3 hướng hand-off khả thi qua Figma MCP, tìm hướng phù hợp cho team design
> **Phương pháp**: Thực nghiệm trên auth flow (6 screens, 19+ edge cases) làm test case đại diện

---

## Phần 1: Figma MCP Tools — Tổng quan năng lực

### 1.1 Toàn bộ MCP Tools (16 tools)

> **Lưu ý**: Các tool đánh dấu **NEW 27/3** là mới release trong đợt cập nhật Figma MCP ngày 27/3/2026.

| # | Tool | Chức năng | Loại | Mới? |
|---|------|----------|------|------|
| 1 | **`use_figma`** | Chạy JavaScript trong file Figma qua Plugin API. Tạo/sửa/xóa mọi object (page, frame, component, variant, variable, style, text, image). Tool chính cho mọi thao tác write. | **Write** | **NEW 27/3** |
| 2 | **`generate_figma_design`** | Capture web page (localhost/external) → Figma layers. Inject capture script → serialize DOM → tạo Figma file. Hỗ trợ `newFile`, `existingFile`, `clipboard` output modes. | **Capture** | **NEW 27/3** |
| 3 | **`get_design_context`** | Tool chính cho design-to-code. Trả về reference code (React+Tailwind), screenshot, metadata từ 1 Figma node. Hỗ trợ Code Connect snippets. | **Read** | |
| 4 | **`get_screenshot`** | Chụp screenshot 1 node bất kỳ trong Figma file. | **Read** | |
| 5 | **`get_metadata`** | Lấy cấu trúc node tree (XML) — ID, type, name, position, size. Overview nhanh. | **Read** | |
| 6 | **`get_variable_defs`** | Lấy variable definitions (tokens) gắn với 1 node — color, spacing, font, radius. | **Read** | |
| 7 | **`search_design_system`** | Tìm component, variable, style trong tất cả DS libraries đã publish theo text query. | **Read** | |
| 8 | **`create_new_file`** | Tạo file Figma/FigJam mới trong team. Cần `planKey` từ `whoami`. | **Write** | **NEW 27/3** |
| 9 | **`generate_diagram`** | Tạo diagram trong FigJam bằng Mermaid.js (flowchart, sequence, gantt, state). | **Write** | **NEW 27/3** |
| 10 | **`whoami`** | Kiểm tra user authenticated — email, team, plan, quyền. | **Auth** | |
| 11 | **`get_code_connect_map`** | Đọc mapping Figma node ↔ code component (Code Connect). | **Read** | |
| 12 | **`get_code_connect_suggestions`** | AI gợi ý link Figma node → code component. | **Read** | **NEW 27/3** |
| 13 | **`add_code_connect_map`** | Tạo 1 mapping Code Connect (hỗ trợ template + templateDataJson). | **Write** | **NEW 27/3** |
| 14 | **`send_code_connect_mappings`** | Lưu bulk Code Connect mappings (hỗ trợ template). | **Write** | **NEW 27/3** |
| 15 | **`create_design_system_rules`** | Generate DS rules/prompt từ repo hiện tại. | **Config** | **NEW 27/3** |
| 16 | **`get_figjam`** | Đọc nội dung FigJam node, generate UI code từ FigJam. | **Read** | |

### 1.2 Phân nhóm theo use-case

| Use-case | Tools |
|----------|-------|
| **Inspect/đọc Figma** | `get_design_context`, `get_screenshot`, `get_metadata`, `get_variable_defs` |
| **Tạo/sửa trong Figma** | `use_figma`, `create_new_file`, `generate_diagram` |
| **Capture web → Figma** | `generate_figma_design` **(NEW 27/3)** |
| **Tìm DS assets** | `search_design_system` |
| **Code Connect (Figma ↔ Code)** | `get_code_connect_map`, `get_code_connect_suggestions` **(NEW)**, `add_code_connect_map` **(NEW)**, `send_code_connect_mappings` **(NEW)** |
| **Auth & Config** | `whoami`, `create_design_system_rules` **(NEW 27/3)** |

### 1.3 Giới hạn phát hiện qua thực nghiệm

| Giới hạn | Ảnh hưởng |
|----------|-----------|
| `use_figma` code limit **50,000 chars/call** | Screen phức tạp cần 1 call riêng. Không embed được image base64 (~30K chars/ảnh) |
| `use_figma` sandbox **không có `fetch()`** | Không tải ảnh từ URL vào Figma. Không có `createImageAsync()` |
| `use_figma` **write permission phụ thuộc file** | Một số file không persist changes. Cần test trước bằng frame đơn giản |
| `generate_figma_design` **1 capture = 1 page** | Multi-page cần nhiều capture IDs tuần tự |
| `generate_figma_design` **capture DOM ≠ screenshot** | Output là Figma layers (editable) nhưng không pixel-perfect. Một số CSS không convert |
| **Variable binding cross-file** | File khác DS không có local variables. Phải scan component instances → lấy variable ID → bind thủ công |

---

## Phần 2: Ba hướng Hand-off — Thực nghiệm & Đánh giá

### Điều kiện tiên quyết chung

| Điều kiện | H1 | H2 | H3 | Ghi chú |
|-----------|:--:|:--:|:--:|---------|
| **DS Figma library** (components + variables + styles đã publish) | **BẮT BUỘC** | Không cần | Không cần | H1 tạo UI trực tiếp trên Figma từ DS library |
| **DS code component repo** (React/Vue/HTML components đã implement) | Không cần | **BẮT BUỘC** | **BẮT BUỘC** | H2 + H3 build UI từ HTML/React → cần DS components trong code |
| **Figma MCP token với edit permission** | **BẮT BUỘC** | Cần (cho capture output) | Cần (cho capture output) | `use_figma` cần write; `generate_figma_design` cần file đích |

**Tóm tắt**:
- **Hướng 1** phát triển UI flow **trực tiếp trên Figma** — không cần code, không cần HTML build. Chỉ cần DS Figma library đã publish.
- **Hướng 2 + 3** đều phải **build UI bằng code trước** (HTML/React dùng DS code components) rồi mới capture/chụp vào Figma. Do đó **bắt buộc có DS code component repo** đã implement đầy đủ.

---

### Hướng 1: Figma-native — Foundation binding + Component instances

> Tạo UI screens trực tiếp trong Figma bằng `use_figma`. Dùng DS component instances + bind foundation variables cho layout frames. **Không cần build HTML/code trước** — phát triển UI flow hoàn toàn trên Figma.

**MCP Tools sử dụng**:

| Tool | Vai trò |
|------|---------|
| `search_design_system` | Tìm component keys (Button, Input, Card, Alert...) |
| `use_figma` | Import components, tạo auto-layout, bind variables, swap variant, set text |
| `get_variable_defs` | Lấy danh sách variables trên node |
| `get_screenshot` | Verify từng screen |

**Quy trình**:
1. `search_design_system` → lấy component keys từ DS library
2. `use_figma` → scan variables (`getLocalVariablesAsync()` hoặc scan imported instances → `getVariableByIdAsync()`)
3. `use_figma` → build screen: auto-layout frames + component instances + variable bindings
4. Edge cases: clone screen gốc → `swapComponent()` (Input Default→Error), `setText()`, thêm nodes
5. `get_screenshot` → verify

**Cần chuẩn bị**:
- DS library đã publish (components + variables)
- File Figma có edit permission cho MCP token
- Ít nhất 1 screen gốc chất lượng cao (để clone cho edge cases)
- Component variant naming convention rõ ràng (VD: `State=Error, Size=Regular, Value=Empty`)

**Link test**:
- DS file (clone approach — chất lượng cao): https://www.figma.com/design/ihKZCnJS2UrsQzpzEFYI4u → page **[Gen] Auth Edge Cases** (23 screens)
- File mới (build from scratch + library bindings): https://www.figma.com/design/k2HHSJ7TsalsAisoIZ6tfJ → page **Auth Flow — Edge Cases** (24 screens)

| Ưu điểm | Nhược điểm |
|----------|-----------|
| 100% Figma-native — dev inspect spacing, tokens, props trực tiếp | Build from scratch chậm, code phức tạp |
| Foundation variables bound — đổi theme tự cập nhật | Plugin API quality thấp hơn manual Figma |
| Component instances link tới DS library, auto-update | Variable binding cross-file rất phức tạp |
| Dev Mode ready — code snippets, token values | Write permission không ổn định trên mọi file |
| Clone approach = pixel-perfect | Cần screen gốc chất lượng cao làm base |

**Phù hợp cho**: Tạo màn hình chính (happy path), design review, component showcase, theme testing.

**Rating**: ★★★★★ (clone) / ★★★☆☆ (from scratch)

---

### Hướng 2: HTML/React UI → Flat render trong Figma

> Build UI bằng code (React + DS components), capture web page vào Figma qua `generate_figma_design`. Output là Figma layers editable nhưng flat (không phải DS instances, không bind variables).

**MCP Tools sử dụng**:

| Tool | Vai trò |
|------|---------|
| `generate_figma_design` **(NEW 27/3)** | Capture web page → Figma layers |
| `use_figma` | (Optional) Thêm annotations sau capture |
| `create_new_file` **(NEW 27/3)** | Tạo file Figma đích |

**Quy trình**:
1. Build HTML/React page chứa UI screens (dùng DS components trong code)
2. Serve via dev server (localhost)
3. `generate_figma_design` (outputMode: `newFile`/`existingFile`) → nhận capture ID
4. Inject `<script src="https://mcp.figma.com/mcp/html-to-design/capture.js">` vào HTML
5. Mở URL với hash params → capture script serialize DOM
6. Poll status → `completed` → Figma file có layers

**Cần chuẩn bị**:
- **DS code component repo đã implement** (React/Vue/HTML) — BẮT BUỘC, vì UI được build từ code
- Dev server running (Vite, Next.js, http-server...)
- HTML page có capture script tag
- Capture script cần page load hoàn tất (images, fonts) trước khi serialize — dùng `figmadelay` param

**Link test**:
- Figma (flat capture từ HTML): https://www.figma.com/design/k2HHSJ7TsalsAisoIZ6tfJ — page **Auth Flow — Edge Cases** (24 screens, library components imported + variable bindings)

| Ưu điểm | Nhược điểm |
|----------|-----------|
| Visual accuracy cao — render từ browser thật | Flat layers — KHÔNG phải DS instances |
| Nhanh — 1 HTML page nhiều screens → 1 capture | Không có variable bindings — raw color values |
| Editable text/layout trong Figma | Không respond theme changes |
| Code = source of truth, không cần design lại | DOM serialization giới hạn (shadows, blur, gradients) |
| Annotations trong HTML → persist vào Figma | Capture fail nếu async content chưa load |

**Phù hợp cho**: Quick preview cho stakeholder, design QA từ code, paste vào presentation, early-stage validation.

**Rating**: ★★★★☆ (visual) / ★★☆☆☆ (DS integration)

---

### Hướng 3: HTML/React UI + Pixel-perfect Screenshots + Edge Case Documentation

> Build UI bằng code, chụp pixel-perfect screenshots bằng headless browser (Playwright), tạo handoff documentation page (screenshots + annotations chi tiết) → capture vào Figma.

**MCP Tools sử dụng**:

| Tool | Vai trò |
|------|---------|
| `generate_figma_design` **(NEW 27/3)** | Capture handoff HTML page → Figma |
| `use_figma` | (Optional) Polish annotations |
| `get_screenshot` | Verify capture result |

**Tools ngoài MCP**:

| Tool | Vai trò |
|------|---------|
| **Playwright** | Headless browser — tự động navigate + trigger states → chụp screenshots |
| **Vite / http-server** | Serve HTML + screenshots |
| **Node.js script** | Orchestrate capture pipeline |

**Quy trình**:
1. Build full UI flow bằng React (tất cả screens + edge cases + mock data)
2. Serve via dev server
3. Playwright script tự động: navigate → trigger state (click, fill, submit) → chụp screenshot (1440x900)
4. Build HTML handoff page: grid cards = screenshot + state badge + trigger + specs + validation + test data
5. Serve handoff page → `generate_figma_design` → capture vào Figma

**Cần chuẩn bị**:
- **DS code component repo đã implement** — BẮT BUỘC, vì UI được build từ code
- Codebase với đầy đủ UI screens + edge case logic (validation, loading, error states)
- Mock data / test accounts cho mỗi edge case
- Playwright installed (`npx playwright install chromium`)
- Capture script (Node.js) định nghĩa danh sách screens + actions trigger từng state
- HTML template cho handoff page (grid layout, annotation format)
- Dev server running

**Link test**:
- Figma (screenshots + annotations): https://www.figma.com/design/BQ8x55f5AJlCoJfT9ySBov (19 screens + full edge case documentation)

| Ưu điểm | Nhược điểm |
|----------|-----------|
| Pixel-perfect — chụp mọi state (toast, spinner, focus, disabled) | Screenshots = images, dev không inspect tokens |
| Documentation đầy đủ nhất — trigger, specs, validation, test data | Không có variable bindings |
| Tự động hóa cao — Playwright script trigger mọi state | Không editable — sửa UI phải chạy lại pipeline |
| Self-contained — 1 Figma page chứa tất cả | Cần Playwright setup + maintenance capture script |
| Portable — zip gửi cho dev không dùng Figma | Large page, capture chậm (page nhiều ảnh) |
| Capture invisible states (loading, toast) mà Figma static khó thể hiện | Khi UI đổi phải rebuild handoff page |

**Phù hợp cho**: Hand-off dev (đặc biệt dev mới/remote), edge case documentation, QA checklist, flow phức tạp nhiều states.

**Rating**: ★★★★★ (documentation) / ★☆☆☆☆ (DS integration)

---

## Phần 3: So sánh tổng hợp

| Tiêu chí | H1: Figma-native | H2: HTML → Flat Figma | H3: Screenshots + Docs |
|----------|------------------|----------------------|----------------------|
| **Visual accuracy** | ★★★★☆ | ★★★★☆ | ★★★★★ |
| **DS integration** | ★★★★★ | ★★☆☆☆ | ★☆☆☆☆ |
| **Dev inspectable** | ★★★★★ | ★★★☆☆ | ★☆☆☆☆ |
| **Edge case coverage** | ★★☆☆☆ | ★★★☆☆ | ★★★★★ |
| **Automation** | ★★★☆☆ | ★★★★☆ | ★★★★★ |
| **Tốc độ tạo** | ★★☆☆☆ | ★★★★☆ | ★★★☆☆ |
| **Maintenance** | ★★★★★ | ★★★☆☆ | ★★☆☆☆ |
| **Portability** | ★★☆☆☆ | ★★☆☆☆ | ★★★★★ |
| **Theme support** | ★★★★★ | ★☆☆☆☆ | ★☆☆☆☆ |
| **Setup complexity** | ★★★☆☆ | ★★★★☆ | ★★☆☆☆ |

---

## Phần 4: Checklist chuẩn bị cho từng hướng

### Hướng 1 — Checklist (không cần DS code repo)

- [ ] DS Figma library đã publish (components + variables + styles)
- [ ] Figma file có **edit permission** cho MCP token (test bằng `use_figma` tạo 1 frame)
- [ ] Component variant naming convention nhất quán (`State=`, `Size=`, `Variant=`)
- [ ] Ít nhất 1 screen gốc chất lượng cao cho mỗi flow (để clone)
- [ ] Danh sách component keys cần dùng (từ `search_design_system`)
- [ ] Nếu cross-file: map sẵn variable IDs (scan từ component instances)

### Hướng 2 — Checklist (cần DS code repo)

- [ ] **DS code component repo** đã implement đầy đủ (React/Vue/HTML)
- [ ] UI pages/flows đã build bằng DS code components
- [ ] Dev server configured + running
- [ ] HTML page có `<script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async>`
- [ ] Fonts loaded (Geist, Inter...) — capture cần fonts render xong
- [ ] Images loaded — dùng `figmadelay=3000`+ nếu page có nhiều ảnh
- [ ] Test capture trước với 1 page đơn giản

### Hướng 3 — Checklist (cần DS code repo + Playwright)

- [ ] **DS code component repo** đã implement đầy đủ (React/Vue/HTML)
- [ ] UI pages/flows đã build với đầy đủ edge case logic (validation, loading, error states)
- [ ] Mock data / test accounts cho từng edge case
- [ ] `npx playwright install chromium`
- [ ] Capture script (Node.js/Playwright) — danh sách screens + trigger actions
- [ ] HTML handoff page template (grid layout + annotation cards)
- [ ] Dev server serving cả app + screenshots
- [ ] Handoff page có capture script tag
- [ ] Test capture thành công trước khi tạo full pipeline

---

## Phần 5: Khuyến nghị cho team design

### Chiến lược kết hợp (Recommended)

| Giai đoạn | Hướng | Ai dùng | Mục đích |
|-----------|-------|---------|----------|
| **Design & Review** | H1 | Designer + Stakeholder | Inspect tokens, test theme, review component usage |
| **Dev Handoff** | H3 | Developer | Edge cases, triggers, validation rules — không cần Figma Pro |
| **Quick Preview** | H2 | PM + QA | Xem nhanh UI từ code, paste vào presentation |
| **Implementation** | Source code | Developer | Code đã implement, là source of truth |

### Khi nào dùng hướng nào

| Tình huống | Hướng |
|-----------|-------|
| Tạo UI mới, cần designer review | **H1** |
| Hand-off cho dev (đặc biệt dev mới/remote) | **H3** |
| Demo nhanh cho stakeholder | **H2** |
| Component đã có, cần thêm edge cases | **H1 clone** |
| Flow phức tạp nhiều states (10+ edge cases) | **H3** |
| Cần theme switching preview | **H1** |
| CI/CD automated design QA | **H2** hoặc **H3** |

### Rủi ro cần lưu ý

| Rủi ro | Ảnh hưởng | Giảm thiểu |
|--------|-----------|------------|
| `use_figma` write permission fail | Không tạo được screens trên file shared | Test trước, ưu tiên file owner tạo |
| `generate_figma_design` phụ thuộc capture.js | Break nếu Figma đổi API | Pin version, có fallback screenshot |
| Variable binding cross-file phức tạp | Tốn thời gian setup | Ưu tiên làm trong DS file gốc |
| Playwright script maintenance | Break khi UI đổi structure | Dùng stable selectors (id, data-testid) |
| Large handoff pages | Capture chậm/fail | Chia thành nhiều pages theo flow |

---

## Phần 6: Kết luận

**Figma MCP (đặc biệt với các tools mới 27/3/2026) đủ mạnh cho cả 3 hướng hand-off.** Mỗi hướng phục vụ mục đích khác nhau — không có hướng nào thay thế hoàn toàn hướng kia.

**Đề xuất roadmap cho team**:
1. **Ngắn hạn**: Dùng **H1 clone** cho screens chính + **H3** cho edge case documentation
2. **Trung hạn**: Setup **Code Connect** (`add_code_connect_map` NEW) — bridge Figma ↔ codebase
3. **Dài hạn**: CI/CD pipeline tự động **H2** + **H3** — mỗi PR có Figma preview + edge case screenshots
