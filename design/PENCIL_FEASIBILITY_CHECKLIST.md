# Checklist Đánh Giá Khả Thi: Pencil Thay Thế Figma

**Dự án:** SprouX Design System
**Ngày:** 2026-03-30
**Nguồn:** Báo cáo kỹ thuật Claude Code + Báo cáo trải nghiệm thực tế team UI/UX

---

## A. PHƯƠNG ÁN KHẢ THI

### A1. Pencil thay thế HOÀN TOÀN Figma

| # | Tiêu chí | Đạt? | Ghi chú |
|---|----------|------|---------|
| 1 | Foundation tokens migrate được | ⚠️ | Migrate được nhưng thiếu nhiều, phải prompt nhiều lần, tokens gắn sai, tổ chức không theo nhóm |
| 2 | Text Styles hoạt động | ❌ | Pencil không có reusable Text Styles — phải set inline mỗi lần |
| 3 | Effect Styles hoạt động | ❌ | Pencil không có reusable Effect Styles — phải set inline mỗi lần |
| 4 | Component library publish & sync | ❌ | Không có publish mechanism — phải copy thủ công, update thủ công khi DS thay đổi |
| 5 | Import .fig file | ❌ | Không hỗ trợ — chỉ đọc qua Figma API Link nhưng không đọc được variables |
| 6 | Prototype & interaction | ❌ | Hoàn toàn không có |
| 7 | Real-time collaboration | ❌ | Single user only |
| 8 | Dev Mode inspect | ❌ | Không có — dev không extract measurements/CSS |
| 9 | Stakeholder review | ❌ | Không share link, không comments |

**Kết luận A1:** ❌ **KHÔNG KHẢ THI** — Quá nhiều tính năng thiết yếu không có.

---

### A2. Pencil thay thế Figma CHO DEV WORKFLOW (designer vẫn dùng Figma)

| # | Tiêu chí | Đạt? | Ghi chú |
|---|----------|------|---------|
| 1 | Dev tự mockup nhanh trước khi code | ✅ | AI-assisted, cùng IDE, rất nhanh |
| 2 | Token accuracy khớp code | ✅ | Cùng variable names, cùng repo |
| 3 | Component instances hoạt động | ✅ | `ref` system + `descendants` override |
| 4 | Git version control | ✅ | `.pen` file trong repo, branch/PR native |
| 5 | Cross-file library (import) | ⚠️ | Có `imports` nhưng không auto-sync khi library update — phải re-import |
| 6 | Token tiêu thụ khi đọc Figma | ⚠️ | Tốn token đáng kể, % token tụt mạnh |
| 7 | File management/dashboard | ❌ | Không có — chỉ thấy `.pen` files trong workspace |

**Kết luận A2:** ⚠️ **KHẢ THI CÓ ĐIỀU KIỆN** — Phù hợp cho solo dev hoặc team nhỏ (≤3 người), dev tự design + code.

---

### A3. Pencil bổ trợ Figma (Hybrid)

| # | Tiêu chí | Đạt? | Ghi chú |
|---|----------|------|---------|
| 1 | Figma = design exploration + review | ✅ | Giữ nguyên workflow hiện tại |
| 2 | Pencil = code-aligned rapid mockup | ✅ | Dev dùng khi cần mockup nhanh |
| 3 | Pencil = token verification | ✅ | Verify design ↔ code token match |
| 4 | Pencil = SaaS template generation | ✅ | AI batch generate screens |
| 5 | Không tăng overhead cho designer | ✅ | Designer không cần học Pencil |
| 6 | Không tăng overhead cho dev | ✅ | Dev đã ở trong VS Code |

**Kết luận A3:** ✅ **KHẢ THI** — Phương án rủi ro thấp nhất, benefit rõ ràng.

---

## B. YẾU ĐIỂM PHẢI XỬ LÝ (nếu chọn A2 hoặc A3)

### B1. Yếu điểm nghiêm trọng (phải có workaround)

| # | Yếu điểm | Impact | Workaround | Effort |
|---|----------|--------|------------|--------|
| 1 | **Variable migrate thiếu/sai** — token bị gắn sai, thiếu nhiều, phải prompt nhiều lần | Cao | Claude Code MCP script chuẩn hóa — đã build script migrate ~430 tokens chính xác | Đã xong |
| 2 | **Variable không tổ chức theo nhóm** — Pencil sort alphabetical, không có collection/group | Trung bình | Dùng naming prefix (`--spacing-*`, `--layout-*`, `--typo-*`) — chấp nhận alpha sort | Không giải quyết được |
| 3 | **Component không import từ Figma** — phải build thủ công | Cao | Claude Code MCP batch build — đã build 86 components từ code specs trong ~75 phút | Đã xong (Tier 0-2), Tier 3-4 cần thêm |
| 4 | **Library không publish/sync** — update DS phải copy thủ công | Cao | Dùng `imports` (file-level) + script update khi DS thay đổi | Cần build script |
| 5 | **Token tiêu thụ cao khi đọc Figma** — % token tụt mạnh | Trung bình | Tránh đọc Figma trực tiếp — export JSON trước, dùng JSON làm input | Process change |

### B2. Yếu điểm trung bình (có workaround nhưng không hoàn hảo)

| # | Yếu điểm | Impact | Workaround |
|---|----------|--------|------------|
| 6 | **Text Styles không reusable** | Trung bình | Tạo reusable text component atoms (`SprouX/Text/H1`, `SprouX/Text/P-Small`...) |
| 7 | **Effect Styles không reusable** | Trung bình | Document shadow/ring specs trong Foundation Reference frame, apply inline |
| 8 | **Component variants là separate components** | Thấp | Naming convention `SprouX/Button/Regular/Primary` — visual grouping bằng tên |
| 9 | **Không có file dashboard** | Thấp | Tổ chức folder trong workspace: `design/library/`, `design/screens/` |
| 10 | **Font variable không resolve trong fontFamily** | Thấp | Dùng trực tiếp tên font ("Geist", "Fraunces") thay vì `$--font-heading` |

### B3. Yếu điểm khó giải quyết (phụ thuộc vào model AI)

| # | Yếu điểm | Ghi chú |
|---|----------|---------|
| 11 | **Chất lượng phụ thuộc AI model** | GPT-5.4 (Codex) cho kết quả lỗi nhiều. Claude Opus 4.6 cho kết quả chính xác hơn đáng kể |
| 12 | **Kết quả không deterministic** | Cùng prompt có thể ra kết quả khác nhau — cần verify mỗi lần |
| 13 | **Context window limit** | File lớn + nhiều variables → token consumption cao |

---

## C. NHỮNG GÌ PHẢI CHẤP NHẬN KHÔNG CÓ

> Nếu chuyển sang Pencil (A2), các tính năng sau **KHÔNG CÓ và KHÔNG CÓ workaround:**

| # | Tính năng | Figma có | Pencil | Ảnh hưởng |
|---|-----------|---------|--------|-----------|
| 1 | **Interactive Prototype** | Clickable flows, transitions, smart animate | ❌ Không có | Không thể demo flow cho stakeholder |
| 2 | **Real-time Multiplayer** | Nhiều người edit cùng lúc | ❌ Single user | Không pair-design được |
| 3 | **Comments & Review** | Comment trực tiếp trên design, resolve thread | ❌ Không có | Review phải qua PR/meeting |
| 4 | **Dev Mode Inspect** | Click element → xem spacing, CSS, tokens, assets | ❌ Không có | Dev phải đọc `.pen` file hoặc hỏi Claude |
| 5 | **Shareable Link** | Gửi URL → ai cũng xem được | ❌ File local | Phải share screen hoặc export screenshot |
| 6 | **Auto Measurements** | Hover giữa 2 elements → hiện khoảng cách | ❌ Không có | Phải dùng `snapshot_layout` tool |
| 7 | **Copy CSS** | Click → copy CSS/token code | ❌ Không có | Tokens đã khớp code nên ít cần |
| 8 | **Plugin Ecosystem** | 3000+ plugins (icons, charts, content...) | ❌ Không có | Chỉ có built-in Lucide/Material icons |
| 9 | **Design History UI** | Timeline visual, named versions | ❌ Phải dùng git log | Dev-friendly nhưng designer không quen |
| 10 | **Component Properties** | Boolean toggle, text override, instance swap trong panel | ❌ Không có | Override qua `descendants` (code-level) |
| 11 | **Figma Community** | Templates, UI kits, resources miễn phí | ❌ Không có | Tự build hoặc copy-paste từ Figma |
| 12 | **FigJam / Whiteboard** | Brainstorm, flow diagram, sticky notes | ❌ Không có | Dùng tool khác (Miro, Excalidraw) |

---

## D. CÔNG VIỆC CẦN LÀM (nếu quyết định đổi sang Pencil)

### Phase 1: Foundation hoàn thiện (1-2 ngày)

| # | Task | Status | Owner |
|---|------|--------|-------|
| D1 | Hoàn thiện foundation variables (đã ~430 tokens) | ✅ Done | Claude Code |
| D2 | Tạo Text Style atoms (10 reusable text components) | 🔲 Todo | Claude Code |
| D3 | Tạo Effect Style atoms (7 shadow + 6 ring components) | 🔲 Todo | Claude Code |
| D4 | Verify toàn bộ tokens khớp Figma export JSON | ⚠️ Partial | Claude Code |
| D5 | Document foundation trong README cho team | 🔲 Todo | Dev |

### Phase 2: Component Library hoàn thiện (3-5 ngày)

| # | Task | Status | Owner |
|---|------|--------|-------|
| D6 | Build Tier 0-2 components (86 reusable) | ✅ Done | Claude Code |
| D7 | Build Tier 3 — Overlay components (Dialog, Sheet, Dropdown, Select, Command, Toast) | 🔲 Todo | Claude Code |
| D8 | Build Tier 4 — Complex compounds (Combobox, Calendar, Sidebar, DataTable, Form) | 🔲 Todo | Claude Code |
| D9 | Verify ALL components khớp code specs via screenshot | 🔲 Todo | Claude Code + Dev |
| D10 | Tạo component catalog/index frame | 🔲 Todo | Claude Code |

### Phase 3: Workflow setup (2-3 ngày)

| # | Task | Status | Owner |
|---|------|--------|-------|
| D11 | Setup folder structure: `design/library/`, `design/screens/` | 🔲 Todo | Dev |
| D12 | Test `imports` system — screen file import từ library | 🔲 Todo | Claude Code |
| D13 | Tạo script/process cho library update propagation | 🔲 Todo | Dev |
| D14 | Document workflow: "Cách tạo screen mới với Pencil" | 🔲 Todo | Dev |
| D15 | Setup `.gitignore` rules cho `.pen` files (nếu cần) | 🔲 Todo | Dev |

### Phase 4: Pilot (1-2 tuần)

| # | Task | Status | Owner |
|---|------|--------|-------|
| D16 | Chọn 1 feature mới để pilot Pencil workflow | 🔲 Todo | Team |
| D17 | Design 2-3 screens hoàn chỉnh trong Pencil | 🔲 Todo | Dev |
| D18 | Code từ Pencil design (đánh giá handoff quality) | 🔲 Todo | Dev |
| D19 | So sánh thời gian Pencil vs Figma workflow | 🔲 Todo | Team |
| D20 | Retrospective — quyết định mở rộng hay quay lại Figma | 🔲 Todo | Team |

### Phase 5: Scale (nếu pilot thành công)

| # | Task | Status | Owner |
|---|------|--------|-------|
| D21 | Migrate remaining Figma screens sang Pencil (nếu cần) | 🔲 Todo | Team |
| D22 | Build CI check cho `.pen` file consistency | 🔲 Todo | Dev |
| D23 | Training team sử dụng Pencil + Claude Code MCP | 🔲 Todo | Lead |

---

## E. MA TRẬN QUYẾT ĐỊNH

### Chọn phương án dựa trên team profile:

| Nếu team... | Chọn | Lý do |
|-------------|------|-------|
| 1 designer + 1-2 dev, internal product | **A2 (Pencil thay Figma cho dev)** | Dev tự design + code, không cần prototype |
| Designer + dev team, internal product | **A3 (Hybrid)** | Designer giữ Figma, dev dùng Pencil bổ trợ |
| Team > 5, external stakeholders | **Giữ Figma** | Cần collaboration, prototype, share link |
| Solo dev, side project | **A2 (Pencil only)** | Nhanh nhất, không overhead |
| Agency, client handoff | **Giữ Figma** | Client cần xem prototype, không cài VS Code |

### SprouX team hiện tại:

| Factor | Thực tế |
|--------|---------|
| Team size | Nhỏ (designer + dev) |
| Stakeholder review | Internal |
| Prototype cần thiết? | Có (cho user testing) |
| Dev tự design? | Có (một số features) |

**Khuyến nghị cho SprouX: A3 (Hybrid)** — Figma cho design + review, Pencil cho dev rapid mockup + token verification.

---

## F. RỦI RO

| # | Rủi ro | Mức độ | Mitigation |
|---|--------|--------|------------|
| 1 | Pencil ngưng phát triển (early access) | Trung bình | `.pen` files vẫn là JSON — có thể parse/migrate |
| 2 | Pencil thay đổi pricing sau early access | Thấp | Evaluate lại khi có pricing, `.pen` files đã trong repo |
| 3 | AI model quality ảnh hưởng kết quả | Trung bình | Pin model version, verify output mỗi lần |
| 4 | Token consumption cao bất ngờ | Trung bình | Budget monitoring, batch operations, avoid Figma direct read |
| 5 | Library sync breaking khi DS update | Cao | Build automation script, test imports regularly |
| 6 | Team member không quen VS Code workflow | Thấp | Training session, document process |

---

## G. KẾT LUẬN

### Pencil ĐÁNG ĐỂ DÙNG cho:
- Dev rapid prototyping trong VS Code
- Token/component verification (design ↔ code)
- SaaS template batch generation
- Git-versioned design artifacts

### Pencil CHƯA ĐỦ ĐỂ thay thế Figma vì:
- Không có prototype, collaboration, inspect
- Library sync thủ công, không auto-publish
- Text/Effect styles không reusable
- Foundation migrate dễ lỗi, tốn effort verify
- Phụ thuộc AI model quality

### Hành động tiếp theo:
1. **Adopt A3 (Hybrid)** — rủi ro thấp, benefit rõ
2. Hoàn thiện Pencil component library (Tier 3-4)
3. Pilot 1 feature với hybrid workflow
4. Đánh giá lại sau 2-4 tuần
