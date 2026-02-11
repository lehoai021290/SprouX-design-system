import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Plus,
  Trash2,
  ChevronRight,
  Settings,
  Copy,
  Check,
  ArrowRight,
  Download,
  Mail,
  Loader2,
  ExternalLink,
  Search,
  Eye,
  EyeOff,
  User,
  Lock,
} from "lucide-react"

/* ================================================================
   Shared UI helpers (local to preview — not part of the DS)
   ================================================================ */

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="relative group">
      <pre className="bg-slate-950 text-slate-100 rounded-lg p-4 text-xs leading-relaxed overflow-x-auto font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 text-slate-400 hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? (
          <Check className="size-3.5" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
    </div>
  )
}

function Example({
  title,
  description,
  children,
  code,
}: {
  title: string
  description?: string
  children: React.ReactNode
  code: string
}) {
  const [showCode, setShowCode] = useState(false)
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="px-6 pt-5 pb-2 space-y-1">
        <h3 className="font-body font-semibold text-sm">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-xs leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="px-6 pb-5 pt-3 flex flex-wrap items-center gap-3 bg-background">
        {children}
      </div>
      <div className="border-t border-border">
        <button
          onClick={() => setShowCode(!showCode)}
          className="w-full flex items-center justify-between px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-slate-50 transition-colors font-mono"
        >
          <span>{showCode ? "Hide code" : "Show code"}</span>
          <ChevronRight
            className={`size-3.5 transition-transform ${showCode ? "rotate-90" : ""}`}
          />
        </button>
        {showCode && <CodeBlock code={code} />}
      </div>
    </div>
  )
}

function DoItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 rounded-xl border-2 border-green-500 overflow-hidden">
      <div className="bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
        Do
      </div>
      <div className="p-4 space-y-2 text-xs text-foreground">{children}</div>
    </div>
  )
}

function DontItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 rounded-xl border-2 border-red-500 overflow-hidden">
      <div className="bg-red-50 px-4 py-2 text-xs font-semibold text-red-700">
        Don't
      </div>
      <div className="p-4 space-y-2 text-xs text-foreground">{children}</div>
    </div>
  )
}

/* ================================================================
   Component: Button Docs
   ================================================================ */

function ButtonPropsTable() {
  const props = [
    {
      name: "variant",
      type: '"default" | "secondary" | "outline" | "ghost" | "ghost-muted" | "destructive" | "destructive-secondary"',
      default: '"default"',
      description: "The visual style of the button.",
    },
    {
      name: "size",
      type: '"lg" | "default" | "sm" | "xs" | "icon" | "icon-sm" | "icon-lg"',
      default: '"default"',
      description: "The size of the button.",
    },
    {
      name: "asChild",
      type: "boolean",
      default: "false",
      description:
        "When true, the button will render its child as the root element (using Radix Slot). Useful for rendering links styled as buttons.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description:
        "Disables the button, reducing opacity to 50% and preventing interaction.",
    },
    {
      name: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes to merge via cn() utility.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "—",
      description:
        "Button content. Supports text, icons (Lucide), or a combination.",
    },
    {
      name: "onClick",
      type: "(e: MouseEvent) => void",
      default: "—",
      description: "Click event handler.",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50 border-b border-border text-left">
            <th className="px-4 py-3 font-semibold">Prop</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Default</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">
                {p.name}
              </td>
              <td className="px-4 py-3 font-mono text-muted-foreground max-w-xs">
                {p.type}
              </td>
              <td className="px-4 py-3 font-mono">{p.default}</td>
              <td className="px-4 py-3 text-muted-foreground">
                {p.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ButtonTokensTable() {
  const tokens = [
    {
      token: "--primary",
      value: "hsl(175 77% 26%)",
      hex: "#0f766e",
      usage: "Primary button background",
    },
    {
      token: "--primary-foreground",
      value: "hsl(0 0% 100%)",
      hex: "#ffffff",
      usage: "Primary button text",
    },
    {
      token: "--destructive",
      value: "hsl(0 84% 60%)",
      hex: "#dc2626",
      usage: "Destructive button background",
    },
    {
      token: "--border",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Outline border, focus ring",
    },
    {
      token: "slate-200",
      value: "#e9e9e7",
      hex: "#e9e9e7",
      usage: "Secondary button background",
    },
    {
      token: "slate-700",
      value: "#6f6f6a",
      hex: "#6f6f6a",
      usage: "Ghost button text",
    },
    {
      token: "red-50",
      value: "#fef2f2",
      hex: "#fef2f2",
      usage: "Destructive secondary background",
    },
    {
      token: "red-200",
      value: "#fecaca",
      hex: "#fecaca",
      usage: "Destructive focus ring",
    },
    {
      token: "red-500",
      value: "#ef4444",
      hex: "#ef4444",
      usage: "Destructive secondary border",
    },
    {
      token: "--radius (rounded-lg)",
      value: "8px",
      hex: "—",
      usage: "Button border radius",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50 border-b border-border text-left">
            <th className="px-4 py-3 font-semibold">Token</th>
            <th className="px-4 py-3 font-semibold">Value</th>
            <th className="px-4 py-3 font-semibold">Swatch</th>
            <th className="px-4 py-3 font-semibold">Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.token} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">
                {t.token}
              </td>
              <td className="px-4 py-3 font-mono text-muted-foreground">
                {t.value}
              </td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div
                    className="size-5 rounded border border-border"
                    style={{ backgroundColor: t.hex }}
                  />
                )}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{t.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ButtonDocs() {
  return (
    <div className="space-y-12">
      {/* ---- Header ---- */}
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Actions
        </p>
        <h1 className="text-heading-3">Button</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          Buttons are used primarily for actions, such as "Add", "Close",
          "Cancel", or "Save". Plain buttons, which look similar to links, are
          used for less prominent actions or navigation.
        </p>
      </header>

      {/* ---- Installation ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Installation</h2>
        <CodeBlock
          code={`# Install dependencies
pnpm add @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react

# The component lives at:
# src/components/ui/button.tsx`}
        />
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"`}
        />
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        {/* Default */}
        <Example
          title="Default button"
          description="Use for primary actions in any context. For example, the main action in a dialog or the submit button in a form."
          code={`<Button>Save</Button>`}
        >
          <Button>Save</Button>
        </Example>

        {/* All variants */}
        <Example
          title="Variant"
          description="Buttons come in 7 variants to communicate the importance and nature of the action."
          code={`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="ghost-muted">Ghost Muted</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="destructive-secondary">Destructive Secondary</Button>`}
        >
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost-muted">Ghost Muted</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="destructive-secondary">
            Destructive Secondary
          </Button>
        </Example>

        {/* Secondary */}
        <Example
          title="Secondary button"
          description="Use for less prominent actions, or when placed alongside a primary button. For example, a 'Cancel' action paired with 'Save'."
          code={`<Button>Save</Button>
<Button variant="secondary">Cancel</Button>`}
        >
          <Button>Save</Button>
          <Button variant="secondary">Cancel</Button>
        </Example>

        {/* Outline */}
        <Example
          title="Outline button"
          description="Use for actions that need a visible boundary but aren't the main call to action. Works well on colored or patterned backgrounds."
          code={`<Button variant="outline">Configure</Button>`}
        >
          <Button variant="outline">Configure</Button>
        </Example>

        {/* Ghost */}
        <Example
          title="Ghost button"
          description="Use for tertiary actions that should be available but visually unobtrusive, such as toolbar actions or inline actions."
          code={`<Button variant="ghost">Edit</Button>
<Button variant="ghost-muted">More options</Button>`}
        >
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost-muted">More options</Button>
        </Example>

        {/* Destructive */}
        <Example
          title="Destructive button"
          description="Use for actions that are irreversible or have significant consequences, like deleting a resource."
          code={`<Button variant="destructive">Delete account</Button>
<Button variant="destructive-secondary">Remove</Button>`}
        >
          <Button variant="destructive">Delete account</Button>
          <Button variant="destructive-secondary">Remove</Button>
        </Example>

        {/* Sizes */}
        <Example
          title="Size"
          description="Buttons support 4 content sizes (lg, default, sm, xs) and 3 icon-only sizes (icon-lg, icon, icon-sm)."
          code={`<Button size="lg">Large (40px)</Button>
<Button size="default">Regular (36px)</Button>
<Button size="sm">Small (32px)</Button>
<Button size="xs">Mini (24px)</Button>`}
        >
          <Button size="lg">Large (40px)</Button>
          <Button size="default">Regular (36px)</Button>
          <Button size="sm">Small (32px)</Button>
          <Button size="xs">Mini (24px)</Button>
        </Example>

        {/* With icon */}
        <Example
          title="Button with icon"
          description="Place icons before the label to clarify meaning, or after to indicate direction. Icons are automatically sized to 20px (regular) or 16px (mini)."
          code={`<Button><Plus /> Add item</Button>
<Button variant="secondary"><Download /> Export</Button>
<Button variant="outline"><Mail /> Send email</Button>
<Button variant="secondary">Next <ArrowRight /></Button>`}
        >
          <Button>
            <Plus /> Add item
          </Button>
          <Button variant="secondary">
            <Download /> Export
          </Button>
          <Button variant="outline">
            <Mail /> Send email
          </Button>
          <Button variant="secondary">
            Next <ArrowRight />
          </Button>
        </Example>

        {/* Icon only */}
        <Example
          title="Icon-only button"
          description="Use for compact UIs like toolbars. Always provide an aria-label for accessibility."
          code={`<Button size="icon-lg" aria-label="Add"><Plus /></Button>
<Button size="icon" aria-label="Add"><Plus /></Button>
<Button size="icon-sm" aria-label="Add"><Plus /></Button>

<Button variant="outline" size="icon" aria-label="Settings"><Settings /></Button>
<Button variant="ghost" size="icon" aria-label="Settings"><Settings /></Button>
<Button variant="destructive" size="icon" aria-label="Delete"><Trash2 /></Button>`}
        >
          <Button size="icon-lg" aria-label="Add">
            <Plus />
          </Button>
          <Button size="icon" aria-label="Add">
            <Plus />
          </Button>
          <Button size="icon-sm" aria-label="Add">
            <Plus />
          </Button>
          <span className="w-px h-6 bg-border" />
          <Button variant="outline" size="icon" aria-label="Settings">
            <Settings />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Settings">
            <Settings />
          </Button>
          <Button variant="destructive" size="icon" aria-label="Delete">
            <Trash2 />
          </Button>
        </Example>

        {/* Disabled */}
        <Example
          title="Disabled state"
          description="Disabled buttons have 50% opacity and prevent pointer events. Use sparingly — prefer hiding actions that aren't available."
          code={`<Button disabled>Primary</Button>
<Button variant="secondary" disabled>Secondary</Button>
<Button variant="outline" disabled>Outline</Button>
<Button variant="destructive" disabled>Destructive</Button>`}
        >
          <Button disabled>Primary</Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Outline
          </Button>
          <Button variant="destructive" disabled>
            Destructive
          </Button>
        </Example>

        {/* Loading (pattern) */}
        <Example
          title="Loading state (pattern)"
          description="Combine disabled prop with a spinner icon to indicate an in-progress action."
          code={`<Button disabled>
  <Loader2 className="animate-spin" />
  Saving...
</Button>`}
        >
          <Button disabled>
            <Loader2 className="animate-spin" />
            Saving...
          </Button>
        </Example>

        {/* As link */}
        <Example
          title="As link (asChild)"
          description="Use asChild to render as an <a> or router Link while keeping button styles. Useful for navigation that should look like an action."
          code={`<Button asChild>
  <a href="/dashboard">Go to dashboard</a>
</Button>
<Button variant="outline" asChild>
  <a href="https://example.com" target="_blank" rel="noopener">
    External link <ExternalLink />
  </a>
</Button>`}
        >
          <Button asChild>
            <a href="#">Go to dashboard</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener">
              External link <ExternalLink />
            </a>
          </Button>
        </Example>

        {/* Full width */}
        <Example
          title="Full width button"
          description="Use className to stretch to container width. Common in mobile layouts, modals, or form footers."
          code={`<Button className="w-full">Submit form</Button>
<Button variant="secondary" className="w-full">Cancel</Button>`}
        >
          <div className="w-full space-y-2">
            <Button className="w-full">Submit form</Button>
            <Button variant="secondary" className="w-full">
              Cancel
            </Button>
          </div>
        </Example>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Button extends all native{" "}
          <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">
            {"<button>"}
          </code>{" "}
          HTML attributes in addition to the following:
        </p>
        <ButtonPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">
            src/index.css
          </code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <ButtonTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Variant selection</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Use <strong>primary</strong> for the single most important
                action on the page.
              </p>
              <p>
                Use <strong>secondary</strong> or <strong>outline</strong> for
                supporting actions alongside a primary button.
              </p>
              <p>
                Use <strong>destructive</strong> only for irreversible or
                high-consequence actions (delete, remove, revoke).
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use multiple primary buttons in the same section — it
                dilutes the visual hierarchy.
              </p>
              <p>
                Don't use destructive styling for reversible actions like
                "Cancel" or "Close".
              </p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content guidelines</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Use clear, concise verbs:{" "}
                <strong>"Save"</strong>, <strong>"Delete"</strong>,{" "}
                <strong>"Add item"</strong>.
              </p>
              <p>Use sentence case: "Add item" not "Add Item".</p>
              <p>
                Keep labels short — 1–3 words. Move detail to surrounding
                context.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use vague labels like "Click here", "Submit", or "OK"
                without context.
              </p>
              <p>
                Don't include articles: "Save" not "Save the document".
              </p>
              <p>
                Don't end button labels with punctuation.
              </p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">
            Buttons vs Links
          </h3>
          <div className="rounded-xl border border-border p-5 text-xs space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">Buttons</strong> perform an
              action (submit form, open modal, trigger process). They use{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                {"<button>"}
              </code>{" "}
              semantically.
            </p>
            <p>
              <strong className="text-foreground">Links</strong> navigate to a
              new page or location. They use{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                {"<a>"}
              </code>{" "}
              semantically.
            </p>
            <p>
              If you need a link that looks like a button, use{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                asChild
              </code>{" "}
              with an anchor tag. This preserves the correct semantics while
              applying button styles.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">
          Figma Component Mapping
        </h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Reference for mapping Figma component properties to code props, based
          on the{" "}
          <strong>
            [SprouX - DS] Foundation & Component
          </strong>{" "}
          file (node 9:1071).
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Figma Property</th>
                <th className="px-4 py-3 font-semibold">Figma Value</th>
                <th className="px-4 py-3 font-semibold">Code Prop</th>
                <th className="px-4 py-3 font-semibold">Code Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Variant", "Primary", "variant", '"default"'],
                ["Variant", "Secondary", "variant", '"secondary"'],
                ["Variant", "Outline", "variant", '"outline"'],
                ["Variant", "Ghost", "variant", '"ghost"'],
                ["Variant", "Ghost Muted", "variant", '"ghost-muted"'],
                ["Variant", "Destructive", "variant", '"destructive"'],
                [
                  "Variant",
                  "Destructive Secondary",
                  "variant",
                  '"destructive-secondary"',
                ],
                ["Size", "Large (40px)", "size", '"lg"'],
                ["Size", "Regular (36px)", "size", '"default"'],
                ["Size", "Small (32px)", "size", '"sm"'],
                ["Size", "Mini (24px)", "size", '"xs"'],
                ["State", "Default", "—", "default"],
                ["State", "Hover & Active", "—", "CSS :hover / :active"],
                ["State", "Focus", "—", "CSS :focus-visible"],
                ["State", "Disabled", "disabled", "true"],
                ["Show Left Icon", "true", "children", "<Icon /> Label"],
                ["Show Right Icon", "true", "children", "Label <Icon />"],
              ].map(([figProp, figVal, codeProp, codeVal], i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2.5 font-semibold">{figProp}</td>
                  <td className="px-4 py-2.5">{figVal}</td>
                  <td className="px-4 py-2.5 font-mono text-primary">
                    {codeProp}
                  </td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">
                    {codeVal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 text-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Keyboard support
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pr-6 py-2 font-semibold">Key</th>
                    <th className="pr-6 py-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-slate-100 border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Tab
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Move focus to the button
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-slate-100 border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Enter
                      </kbd>{" "}
                      /{" "}
                      <kbd className="bg-slate-100 border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Space
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Activate the button
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Labeling
            </h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                Icon-only buttons <strong>must</strong> include{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-label
                </code>{" "}
                describing the action.
              </li>
              <li>
                For buttons that control expandable content, use{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-expanded
                </code>{" "}
                and{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-controls
                </code>.
              </li>
              <li>
                For toggle buttons, use{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-pressed
                </code>{" "}
                to indicate the current state.
              </li>
              <li>
                Links opening in a new tab should include a visual indicator
                (e.g., ExternalLink icon) and{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  rel="noopener"
                </code>.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Focus indicator
            </h3>
            <p className="text-muted-foreground">
              All buttons display a visible <strong>3px ring</strong> on{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                :focus-visible
              </code>
              . The ring uses{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                --border (#e9e9e7)
              </code>{" "}
              for standard variants and{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                red-200 (#fecaca)
              </code>{" "}
              for destructive variants. This meets WCAG 2.1 focus visibility
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">ButtonGroup</p>
              <p className="text-muted-foreground mt-0.5">
                Groups related buttons together with consistent spacing.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">IconButton</p>
              <p className="text-muted-foreground mt-0.5">
                Dedicated icon-only button with required aria-label. Use{" "}
                <code className="font-mono">Button size="icon"</code> as
                alternative.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Link</p>
              <p className="text-muted-foreground mt-0.5">
                For navigation that should look like a text link, not a
                button.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Component: Input Docs
   ================================================================ */

function InputPropsTable() {
  const props = [
    {
      name: "size",
      type: '"lg" | "default" | "sm" | "xs"',
      default: '"default"',
      description: "The size of the input. lg=40px, default=36px, sm=32px, xs=24px.",
    },
    {
      name: "type",
      type: "string",
      default: '"text"',
      description: 'HTML input type — "text", "email", "password", "number", "search", "tel", "url", etc.',
    },
    {
      name: "placeholder",
      type: "string",
      default: "—",
      description: "Hint text displayed when the input is empty.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the input, reducing opacity to 50% and preventing interaction.",
    },
    {
      name: "aria-invalid",
      type: "boolean",
      default: "false",
      description: "Marks the input as invalid, applying a red border and red focus ring.",
    },
    {
      name: "className",
      type: "string",
      default: "—",
      description: "Additional CSS classes to merge via cn() utility.",
    },
    {
      name: "value / defaultValue",
      type: "string",
      default: "—",
      description: "Controlled or uncontrolled value for the input.",
    },
    {
      name: "onChange",
      type: "(e: ChangeEvent) => void",
      default: "—",
      description: "Change event handler fired on every keystroke.",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50 border-b border-border text-left">
            <th className="px-4 py-3 font-semibold">Prop</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Default</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">
                {p.name}
              </td>
              <td className="px-4 py-3 font-mono text-muted-foreground max-w-xs">
                {p.type}
              </td>
              <td className="px-4 py-3 font-mono">{p.default}</td>
              <td className="px-4 py-3 text-muted-foreground">
                {p.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function InputTokensTable() {
  const tokens = [
    {
      token: "--input",
      value: "hsl(0 0% 100%)",
      hex: "#ffffff",
      usage: "Input background",
    },
    {
      token: "--border",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Input border, focus ring",
    },
    {
      token: "--foreground",
      value: "hsl(60 4% 14%)",
      hex: "#252522",
      usage: "Input text value",
    },
    {
      token: "--muted-foreground",
      value: "hsl(60 2% 68%)",
      hex: "#afafab",
      usage: "Placeholder text",
    },
    {
      token: "red-500",
      value: "#ef4444",
      hex: "#ef4444",
      usage: "Error state border",
    },
    {
      token: "red-200",
      value: "#fecaca",
      hex: "#fecaca",
      usage: "Error state focus ring",
    },
    {
      token: "--radius (rounded-lg)",
      value: "8px",
      hex: "—",
      usage: "Border radius (lg/default/sm sizes)",
    },
    {
      token: "--radius (rounded-sm)",
      value: "4px",
      hex: "—",
      usage: "Border radius (xs/mini size)",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-slate-50 border-b border-border text-left">
            <th className="px-4 py-3 font-semibold">Token</th>
            <th className="px-4 py-3 font-semibold">Value</th>
            <th className="px-4 py-3 font-semibold">Swatch</th>
            <th className="px-4 py-3 font-semibold">Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.token} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">
                {t.token}
              </td>
              <td className="px-4 py-3 font-mono text-muted-foreground">
                {t.value}
              </td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div
                    className="size-5 rounded border border-border"
                    style={{ backgroundColor: t.hex }}
                  />
                )}
              </td>
              <td className="px-4 py-3 text-muted-foreground">{t.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function InputDocs() {
  const [showPw, setShowPw] = useState(false)

  return (
    <div className="space-y-12">
      {/* ---- Header ---- */}
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="text-heading-3">Input</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          A text input field that allows users to enter and edit a single line
          of text. Supports multiple sizes and states including focus, error,
          and disabled.
        </p>
      </header>

      {/* ---- Installation ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Installation</h2>
        <CodeBlock
          code={`# Install dependencies (if not already installed)
pnpm add class-variance-authority clsx tailwind-merge

# The component lives at:
# src/components/ui/input.tsx`}
        />
        <CodeBlock
          code={`import { Input } from "@/components/ui/input"`}
        />
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        {/* Default */}
        <Example
          title="Default input"
          description="The basic input with placeholder text. This is the most common usage for single-line text entry."
          code={`<Input placeholder="Enter your name" />`}
        >
          <Input placeholder="Enter your name" className="max-w-sm" />
        </Example>

        {/* Sizes */}
        <Example
          title="Size"
          description="Inputs come in 4 sizes to match the context: Large (40px), Regular (36px), Small (32px), and Mini (24px). Mini uses a smaller border radius (4px vs 8px)."
          code={`<Input size="lg" placeholder="Large (40px)" />
<Input size="default" placeholder="Regular (36px)" />
<Input size="sm" placeholder="Small (32px)" />
<Input size="xs" placeholder="Mini (24px)" />`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Input size="lg" placeholder="Large (40px)" />
            <Input size="default" placeholder="Regular (36px)" />
            <Input size="sm" placeholder="Small (32px)" />
            <Input size="xs" placeholder="Mini (24px)" />
          </div>
        </Example>

        {/* With value */}
        <Example
          title="With value"
          description="Input displaying an entered value. The text uses foreground color (#252522) in Geist Regular weight."
          code={`<Input defaultValue="john@example.com" />`}
        >
          <Input defaultValue="john@example.com" className="max-w-sm" />
        </Example>

        {/* Error state */}
        <Example
          title="Error state"
          description="Use aria-invalid to indicate validation errors. The border turns red-500 and the focus ring becomes red-200. Pair with an error message below the input."
          code={`<div className="space-y-1.5">
  <Input aria-invalid placeholder="Email address" />
  <p className="text-xs text-red-500">
    Please enter a valid email address.
  </p>
</div>`}
        >
          <div className="max-w-sm space-y-1.5">
            <Input aria-invalid placeholder="Email address" />
            <p className="text-xs text-red-500">
              Please enter a valid email address.
            </p>
          </div>
        </Example>

        {/* Error with value */}
        <Example
          title="Error with value"
          description="Error state with an invalid value entered. Click the input to see the red focus ring."
          code={`<div className="space-y-1.5">
  <Input aria-invalid defaultValue="not-an-email" />
  <p className="text-xs text-red-500">
    Please enter a valid email address.
  </p>
</div>`}
        >
          <div className="max-w-sm space-y-1.5">
            <Input aria-invalid defaultValue="not-an-email" />
            <p className="text-xs text-red-500">
              Please enter a valid email address.
            </p>
          </div>
        </Example>

        {/* Disabled */}
        <Example
          title="Disabled state"
          description="Disabled inputs have 50% opacity and a not-allowed cursor. Use when the field isn't relevant to the current context."
          code={`<Input disabled placeholder="Disabled input" />
<Input disabled defaultValue="Disabled with value" />`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Input disabled placeholder="Disabled input" />
            <Input disabled defaultValue="Disabled with value" />
          </div>
        </Example>

        {/* Input types */}
        <Example
          title="Input types"
          description="Input supports all native HTML input types. The type prop defaults to 'text'."
          code={`<Input type="email" placeholder="Email" />
<Input type="number" placeholder="Quantity" />
<Input type="search" placeholder="Search..." />
<Input type="tel" placeholder="Phone number" />
<Input type="url" placeholder="https://example.com" />`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Input type="email" placeholder="Email" />
            <Input type="number" placeholder="Quantity" />
            <Input type="search" placeholder="Search..." />
            <Input type="tel" placeholder="Phone number" />
            <Input type="url" placeholder="https://example.com" />
          </div>
        </Example>

        {/* File input */}
        <Example
          title="File input"
          description="File inputs are supported with transparent file button styling. The file button inherits medium font-weight and foreground color."
          code={`<Input type="file" />`}
        >
          <Input type="file" className="max-w-sm" />
        </Example>

        {/* With icon (composition pattern) */}
        <Example
          title="With icon (composition pattern)"
          description="Wrap Input in a relative container and position icons absolutely. This is a composition pattern — the Input component itself doesn't have icon slots."
          code={`<div className="relative max-w-sm">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search..." />
</div>

<div className="relative max-w-sm">
  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Username" />
</div>`}
        >
          <div className="w-full max-w-sm space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search..." />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input className="pl-9" placeholder="Username" />
            </div>
          </div>
        </Example>

        {/* Password toggle (composition pattern) */}
        <Example
          title="Password with toggle (composition pattern)"
          description="A common pattern pairing Input with a toggle button for password visibility. The button is positioned absolutely on the right side."
          code={`const [showPw, setShowPw] = useState(false)

<div className="relative max-w-sm">
  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input
    type={showPw ? "text" : "password"}
    className="pl-9 pr-9"
    placeholder="Password"
    defaultValue="mysecretpw"
  />
  <button
    type="button"
    onClick={() => setShowPw(!showPw)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
  >
    {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
  </button>
</div>`}
        >
          <div className="relative max-w-sm w-full">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type={showPw ? "text" : "password"}
              className="pl-9 pr-9"
              placeholder="Password"
              defaultValue="mysecretpw"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </Example>

        {/* With label */}
        <Example
          title="With label"
          description="Always pair inputs with a visible label for accessibility. Use htmlFor to link the label to the input's id."
          code={`<div className="space-y-1.5 max-w-sm">
  <label htmlFor="email" className="text-sm font-medium">
    Email address
  </label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
        >
          <div className="space-y-1.5 max-w-sm w-full">
            <label htmlFor="email-demo" className="text-sm font-medium">
              Email address
            </label>
            <Input id="email-demo" type="email" placeholder="you@example.com" />
          </div>
        </Example>

        {/* Form example */}
        <Example
          title="Form example"
          description="A typical form layout combining Input with labels, helper text, and error messages."
          code={`<form className="space-y-4 max-w-sm">
  <div className="space-y-1.5">
    <label htmlFor="name" className="text-sm font-medium">Name</label>
    <Input id="name" placeholder="Your full name" />
  </div>
  <div className="space-y-1.5">
    <label htmlFor="email" className="text-sm font-medium">Email</label>
    <Input id="email" type="email" placeholder="you@example.com" aria-invalid />
    <p className="text-xs text-red-500">Email is required.</p>
  </div>
  <Button type="submit" className="w-full">Submit</Button>
</form>`}
        >
          <form className="space-y-4 max-w-sm w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label htmlFor="form-name" className="text-sm font-medium">Name</label>
              <Input id="form-name" placeholder="Your full name" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-email" className="text-sm font-medium">Email</label>
              <Input id="form-email" type="email" placeholder="you@example.com" aria-invalid />
              <p className="text-xs text-red-500">Email is required.</p>
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Example>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Input extends all native{" "}
          <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">
            {"<input>"}
          </code>{" "}
          HTML attributes (except <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">size</code>, which is replaced by the variant prop) in addition to the following:
        </p>
        <InputPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono">
            src/index.css
          </code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <InputTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Labels & placeholders</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Always use a visible <strong>label</strong> above the input.
                Placeholder is a hint, not a replacement for labels.
              </p>
              <p>
                Use descriptive placeholder text like{" "}
                <strong>"you@example.com"</strong> rather than just{" "}
                <strong>"Enter value"</strong>.
              </p>
              <p>
                Link the label to the input via{" "}
                <code className="bg-slate-100 px-1 rounded font-mono text-[10px]">
                  htmlFor
                </code>{" "}
                + <code className="bg-slate-100 px-1 rounded font-mono text-[10px]">id</code>.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't rely solely on placeholder text as the label — it
                disappears once the user starts typing.
              </p>
              <p>
                Don't use placeholder text for critical instructions or
                required format information.
              </p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Validation & errors</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Use <code className="bg-slate-100 px-1 rounded font-mono text-[10px]">aria-invalid</code>{" "}
                to trigger error styling. Pair with a descriptive error message below.
              </p>
              <p>
                Validate on blur or form submission, not on every keystroke
                (unless you're doing real-time search).
              </p>
              <p>
                Explain <strong>how</strong> to fix the error, not just what's
                wrong.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use color alone to indicate errors — always include
                text.
              </p>
              <p>
                Don't show errors before the user has interacted with the
                field.
              </p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Size selection</h3>
          <div className="rounded-xl border border-border p-5 text-xs space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">Large (40px)</strong> —
              Use in spacious layouts, hero forms, or landing page inputs.
            </p>
            <p>
              <strong className="text-foreground">Regular (36px)</strong> —
              Default size. Use in most forms and data entry contexts.
            </p>
            <p>
              <strong className="text-foreground">Small (32px)</strong> —
              Use in compact layouts, table inline editing, or toolbars.
            </p>
            <p>
              <strong className="text-foreground">Mini (24px)</strong> —
              Use in dense UIs like data grids, filters, or tags.
              Note: Mini uses 4px border radius instead of 8px.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">
          Figma Component Mapping
        </h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Reference for mapping Figma component properties to code props, based
          on the{" "}
          <strong>
            [SprouX - DS] Foundation & Component
          </strong>{" "}
          file (node 2250:904).
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Figma Property</th>
                <th className="px-4 py-3 font-semibold">Figma Value</th>
                <th className="px-4 py-3 font-semibold">Code Prop</th>
                <th className="px-4 py-3 font-semibold">Code Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Size", "Large (40px)", "size", '"lg"'],
                ["Size", "Regular (36px)", "size", '"default"'],
                ["Size", "Small (32px)", "size", '"sm"'],
                ["Size", "Mini (24px)", "size", '"xs"'],
                ["State", "Default", "—", "default"],
                ["State", "Focus", "—", "CSS :focus-visible"],
                ["State", "Error", "aria-invalid", "true"],
                ["State", "Error + Focus", "aria-invalid", "true + :focus-visible"],
                ["State", "Disabled", "disabled", "true"],
                ["Content", "Placeholder", "placeholder", '"Hint text"'],
                ["Content", "Value", "value / defaultValue", '"Entered text"'],
                ["Font", "Geist Regular 14/20", "—", "text-sm (font-normal)"],
                ["Font", "Geist Regular 12/16", "—", "text-xs (xs size)"],
                ["Show Left Icon", "true", "—", "Compose: icon + pl-9"],
                ["Show Right Icon", "true", "—", "Compose: icon + pr-9"],
              ].map(([figProp, figVal, codeProp, codeVal], i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-0"
                >
                  <td className="px-4 py-2.5 font-semibold">{figProp}</td>
                  <td className="px-4 py-2.5">{figVal}</td>
                  <td className="px-4 py-2.5 font-mono text-primary">
                    {codeProp}
                  </td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">
                    {codeVal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 text-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Keyboard support
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pr-6 py-2 font-semibold">Key</th>
                    <th className="pr-6 py-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-slate-100 border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Tab
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Move focus to / from the input
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-slate-100 border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Ctrl+A
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Select all text in the input
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Labeling
            </h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                Every input <strong>must</strong> have an associated{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  {"<label>"}
                </code>{" "}
                using{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  htmlFor
                </code>{" "}
                + <code className="bg-slate-100 px-1 rounded font-mono">id</code>.
              </li>
              <li>
                If a visible label isn't possible, use{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-label
                </code>{" "}
                or{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-labelledby
                </code>.
              </li>
              <li>
                Link error messages to the input using{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-describedby
                </code>{" "}
                so screen readers announce the error.
              </li>
              <li>
                Use{" "}
                <code className="bg-slate-100 px-1 rounded font-mono">
                  aria-invalid="true"
                </code>{" "}
                to programmatically mark invalid inputs.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Focus indicator
            </h3>
            <p className="text-muted-foreground">
              All inputs display a visible <strong>3px ring</strong> on{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                :focus-visible
              </code>
              . The ring uses{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                --border (#e9e9e7)
              </code>{" "}
              for the default state and{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                red-200 (#fecaca)
              </code>{" "}
              when{" "}
              <code className="bg-slate-100 px-1 rounded font-mono">
                aria-invalid
              </code>{" "}
              is set. This meets WCAG 2.1 focus visibility requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Textarea</p>
              <p className="text-muted-foreground mt-0.5">
                Multi-line text input for longer content like descriptions or messages.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Select</p>
              <p className="text-muted-foreground mt-0.5">
                Dropdown selection for choosing from predefined options.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-slate-100 px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Button</p>
              <p className="text-muted-foreground mt-0.5">
                Often paired with Input in forms for submit actions.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Navigation & Layout
   ================================================================ */

const components = [
  { id: "button", label: "Button", category: "Actions" },
  { id: "input", label: "Input", category: "Forms" },
] as const

type ComponentId = (typeof components)[number]["id"]

function App() {
  const [active, setActive] = useState<ComponentId>("input")

  const categories = [...new Set(components.map((c) => c.category))]

  return (
    <div className="min-h-screen bg-slate-50 text-foreground flex">
      {/* ---- Sidebar ---- */}
      <aside className="w-56 shrink-0 border-r border-border bg-background p-4 space-y-6 sticky top-0 h-screen overflow-y-auto">
        <div className="space-y-1">
          <h2 className="font-heading font-bold text-sm tracking-tight">
            SprouX DS
          </h2>
          <p className="text-[10px] text-muted-foreground font-mono">
            Design System
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="space-y-1">
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider px-2">
              {cat}
            </p>
            {components
              .filter((c) => c.category === cat)
              .map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`w-full text-left px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    active === c.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-slate-100"
                  }`}
                >
                  {c.label}
                </button>
              ))}
          </div>
        ))}
      </aside>

      {/* ---- Content ---- */}
      <main className="flex-1 max-w-4xl mx-auto px-8 py-12">
        {active === "button" && <ButtonDocs />}
        {active === "input" && <InputDocs />}
      </main>
    </div>
  )
}

export default App
