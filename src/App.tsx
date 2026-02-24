import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  CommandDialog,
} from "@/components/ui/command"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from "@/components/ui/date-picker"
import { Combobox } from "@/components/ui/combobox"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"
import { Spinner } from "@/components/ui/spinner"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu"
import {
  SidebarProvider,
  Sidebar as SidebarComponent,
  SidebarContent as SidebarComponentContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader as SidebarComponentHeader,
  SidebarFooter as SidebarComponentFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
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
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlertCircle,
  Terminal,
  Info,
  CreditCard,
  LogOut,
  LifeBuoy,
  Calculator,
  Calendar as CalendarIcon,
  Smile,
  ChevronsUpDown,
  Home,
} from "lucide-react"
import { icons as lucideIcons } from "lucide-react"

// Illustration SVGs
import illustNewDevice from "@/assets/illustrations/new-device.svg"
import illustPaymentSuccessful from "@/assets/illustrations/payment-successful.svg"
import illustSubmitted from "@/assets/illustrations/submitted.svg"
import illustMailSent from "@/assets/illustrations/mail-sent.svg"
import illustError from "@/assets/illustrations/error.svg"
import illustAuthen from "@/assets/illustrations/authen.svg"
import illustSuccess from "@/assets/illustrations/success.svg"
import illustEmpty from "@/assets/illustrations/empty.svg"
import illustLaunched from "@/assets/illustrations/launched.svg"
import illustSecurityOn from "@/assets/illustrations/security-on.svg"
import illustPayment from "@/assets/illustrations/payment.svg"
import illustWithdrawals from "@/assets/illustrations/withdrawals.svg"
import illustBackers from "@/assets/illustrations/backers.svg"
import illustIdea from "@/assets/illustrations/idea.svg"
import illustNotFound from "@/assets/illustrations/not-found.svg"
import illustEmail from "@/assets/illustrations/email.svg"

// Custom/social icon SVGs
import iconTiktok from "@/assets/icons/tiktok.svg"
import iconInstagram from "@/assets/icons/instagram.svg"
import iconYoutube from "@/assets/icons/youtube.svg"
import iconFacebook from "@/assets/icons/facebook.svg"
import iconEmailSocial from "@/assets/icons/email.svg"
import iconX from "@/assets/icons/x.svg"

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
          className="w-full flex items-center justify-between px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-mono"
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

function DoItem({ children, text }: { children?: React.ReactNode; text?: string }) {
  return (
    <div className="flex-1 rounded-xl border-2 border-green-500 overflow-hidden">
      <div className="bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
        Do
      </div>
      <div className="p-4 space-y-2 text-xs text-foreground">{text ?? children}</div>
    </div>
  )
}

function DontItem({ children, text }: { children?: React.ReactNode; text?: string }) {
  return (
    <div className="flex-1 rounded-xl border-2 border-red-500 overflow-hidden">
      <div className="bg-red-50 px-4 py-2 text-xs font-semibold text-red-700">
        Don't
      </div>
      <div className="p-4 space-y-2 text-xs text-foreground">{text ?? children}</div>
    </div>
  )
}

function ColorSwatch({ hex, label }: { hex: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  const isDark = (h: string) => {
    const c = h.replace("#", "")
    const r = parseInt(c.substring(0, 2), 16)
    const g = parseInt(c.substring(2, 4), 16)
    const b = parseInt(c.substring(4, 6), 16)
    return (r * 299 + g * 587 + b * 114) / 1000 < 128
  }
  return (
    <button
      onClick={handleCopy}
      className="flex flex-col items-center gap-1 group"
      title={`Copy ${hex}`}
    >
      <div
        className="w-full aspect-square rounded-lg border border-border relative overflow-hidden transition-transform group-hover:scale-105"
        style={{ backgroundColor: hex }}
      >
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Check className={`size-3.5 ${isDark(hex) ? "text-white" : "text-black"}`} />
          </div>
        )}
      </div>
      <span className="text-[10px] font-mono text-muted-foreground">{label}</span>
      <span className="text-[10px] font-mono text-muted-foreground/60">{hex}</span>
    </button>
  )
}

/* ================================================================
   Foundation: Colors
   ================================================================ */

function ColorsDocs() {
  const shadeLabels = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]

  const palettes: { name: string; shades: string[] }[] = [
    { name: "Slate", shades: ["#f7f7f6", "#f3f3f2", "#e9e9e7", "#dadad7", "#c6c6c2", "#afafab", "#8f8f8a", "#6f6f6a", "#4f4f4a", "#2f2f2b", "#252522"] },
    { name: "Neutral", shades: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"] },
    { name: "Zinc", shades: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"] },
    { name: "Stone", shades: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"] },
    { name: "Teal", shades: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"] },
    { name: "Emerald", shades: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"] },
    { name: "Green", shades: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"] },
    { name: "Red", shades: ["#fef2f2", "#ffe2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"] },
    { name: "Amber", shades: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"] },
    { name: "Orange", shades: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"] },
    { name: "Yellow", shades: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"] },
    { name: "Blue", shades: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"] },
    { name: "Cyan", shades: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"] },
    { name: "Sky", shades: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"] },
    { name: "Indigo", shades: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"] },
    { name: "Violet", shades: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"] },
    { name: "Purple", shades: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"] },
    { name: "Pink", shades: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"] },
    { name: "Rose", shades: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"] },
    { name: "Lime", shades: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"] },
  ]

  const groups = [
    { name: "Neutrals", items: ["Slate", "Neutral", "Zinc", "Stone"] },
    { name: "Brand", items: ["Teal", "Emerald", "Green"] },
    { name: "Feedback", items: ["Red", "Amber", "Orange", "Yellow"] },
    { name: "Accent", items: ["Blue", "Cyan", "Sky", "Indigo", "Violet", "Purple", "Pink", "Rose", "Lime"] },
  ]

  const semanticTokens = [
    { token: "--background", light: "#ffffff", dark: "#252522", usage: "Page background" },
    { token: "--foreground", light: "#252522", dark: "#f7f7f6", usage: "Primary text color" },
    { token: "--primary", light: "#0f766e", dark: "#0d9488", usage: "Brand primary / CTA buttons" },
    { token: "--primary-hover", light: "#0d9488", dark: "#0f766e", usage: "Primary hover state" },
    { token: "--secondary", light: "#e9e9e7", dark: "#4f4f4a", usage: "Secondary button background" },
    { token: "--muted", light: "#f3f3f2", dark: "#4f4f4a", usage: "Muted backgrounds (cards, badges)" },
    { token: "--muted-foreground", light: "#afafab", dark: "#c6c6c2", usage: "Secondary/placeholder text" },
    { token: "--destructive", light: "#dc2626", dark: "#7f2d2d", usage: "Error / destructive actions" },
    { token: "--border", light: "#e9e9e7", dark: "#4f4f4a", usage: "Default borders" },
    { token: "--border-strong", light: "#afafab", dark: "#6f6f6a", usage: "Emphasized borders" },
    { token: "--ring", light: "#e9e9e7", dark: "#4f4f4a", usage: "Focus ring" },
    { token: "--ring-error", light: "#fecaca", dark: "#6b2e2e", usage: "Error focus ring" },
  ]

  return (
    <div className="space-y-12">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Colors
        </p>
        <h1 className="text-heading-3">Colors</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          The SprouX color system provides 20 palettes with 11 shades each,
          plus semantic tokens for light and dark themes. Click any swatch to
          copy its hex value.
        </p>
      </header>

      {/* Color Palettes */}
      {groups.map((group) => (
        <section key={group.name} className="space-y-6">
          <h2 className="font-heading font-semibold text-xl">{group.name}</h2>
          {group.items.map((paletteName) => {
            const palette = palettes.find((p) => p.name === paletteName)!
            return (
              <div key={paletteName} className="space-y-2">
                <h3 className="font-body font-semibold text-sm">{paletteName}</h3>
                <div className="grid grid-cols-11 gap-2">
                  {palette.shades.map((hex, i) => (
                    <ColorSwatch key={i} hex={hex} label={shadeLabels[i]} />
                  ))}
                </div>
              </div>
            )
          })}
        </section>
      ))}

      {/* Semantic Colors */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Semantic Tokens</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          These tokens adapt automatically between light and dark mode.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Token</th>
                <th className="px-4 py-3 font-semibold">Light</th>
                <th className="px-4 py-3 font-semibold">Dark</th>
                <th className="px-4 py-3 font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              {semanticTokens.map((t) => (
                <tr key={t.token} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">
                    {t.token}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="size-5 rounded border border-border" style={{ backgroundColor: t.light }} />
                      <span className="font-mono text-muted-foreground">{t.light}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="size-5 rounded border border-border" style={{ backgroundColor: t.dark }} />
                      <span className="font-mono text-muted-foreground">{t.dark}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Usage Guidelines</h2>
        <div className="flex gap-4">
          <DoItem>
            <p>Use <strong>semantic tokens</strong> (--primary, --border) for theme-aware colors.</p>
            <p>Use palette shades for illustrations, charts, or decorative elements only.</p>
            <p>Ensure sufficient contrast between text and background (WCAG AA minimum).</p>
          </DoItem>
          <DontItem>
            <p>Don't hardcode hex values — always reference CSS variables or Tailwind classes.</p>
            <p>Don't use palette colors directly for UI elements like buttons or borders.</p>
            <p>Don't mix warm (Slate) and cool (Zinc) neutrals in the same component.</p>
          </DontItem>
        </div>
      </section>

      {/* CSS Reference */}
      <section className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">CSS Reference</h2>
        <CodeBlock
          code={`/* Tailwind utility classes */
<div className="bg-primary text-primary-foreground" />
<div className="text-muted-foreground" />
<div className="border-border" />

/* CSS variables (for custom styles) */
.custom {
  background: hsl(var(--primary));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}

/* Direct palette access */
<div className="bg-teal-700" />  /* Brand primary */
<div className="bg-red-600" />   /* Error/destructive */`}
        />
      </section>
    </div>
  )
}

/* ================================================================
   Foundation: Typography
   ================================================================ */

function TypographyDocs() {
  const headings = [
    { class: "text-heading-1", label: "Heading 1", font: "Fraunces", weight: "600", size: "48px", lineHeight: "48px", letterSpacing: "-1.5px" },
    { class: "text-heading-2", label: "Heading 2", font: "Fraunces", weight: "600", size: "32px", lineHeight: "38.4px", letterSpacing: "-1.2px" },
    { class: "text-heading-3", label: "Heading 3", font: "Fraunces", weight: "600", size: "24px", lineHeight: "28.8px", letterSpacing: "-1px" },
    { class: "text-heading-4", label: "Heading 4", font: "Fraunces", weight: "600", size: "20px", lineHeight: "24px", letterSpacing: "-0.5px" },
    { class: "text-heading-5", label: "Heading 5", font: "Fraunces", weight: "600", size: "16px", lineHeight: "20px", letterSpacing: "-0.3px" },
  ]

  const bodyStyles = [
    { class: "text-paragraph-lg", label: "Paragraph Large", font: "Geist", weight: "400", size: "18px", lineHeight: "28px", letterSpacing: "0" },
    { class: "text-paragraph", label: "Paragraph", font: "Geist", weight: "400", size: "16px", lineHeight: "24px", letterSpacing: "0" },
    { class: "text-paragraph-sm", label: "Paragraph Small", font: "Geist", weight: "400", size: "14px", lineHeight: "20px", letterSpacing: "0.07px" },
    { class: "text-paragraph-sm-bold", label: "Paragraph Small Bold", font: "Geist", weight: "600", size: "14px", lineHeight: "20px", letterSpacing: "0.07px" },
    { class: "text-paragraph-mini", label: "Paragraph Mini", font: "Geist", weight: "400", size: "12px", lineHeight: "16px", letterSpacing: "0.18px" },
    { class: "text-paragraph-mini-bold", label: "Paragraph Mini Bold", font: "Geist", weight: "600", size: "12px", lineHeight: "16px", letterSpacing: "0.18px" },
  ]

  const allStyles = [...headings, ...bodyStyles]

  return (
    <div className="space-y-12">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Typography
        </p>
        <h1 className="text-heading-3">Typography</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          SprouX uses two typefaces: <strong>Fraunces</strong> for headings and
          display text, and <strong>Geist</strong> for body copy and UI elements.
          The type scale is designed for clarity and hierarchy.
        </p>
      </header>

      {/* Font Families */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Font Families</h2>
        <div className="grid grid-cols-3 gap-6">
          <Example
            title="Fraunces (Headings)"
            description="Variable optical-size serif used for headings H1-H5. Semibold weight (600)."
            code={`font-family: var(--font-heading);
/* "Fraunces", Georgia, serif */`}
          >
            <p className="font-heading text-2xl font-semibold">
              Aa Bb Cc Dd Ee
            </p>
          </Example>
          <Example
            title="Geist (Body)"
            description="Neo-grotesque sans-serif by Vercel. Used for all body text, labels, and UI copy."
            code={`font-family: var(--font-body);
/* "Geist", system-ui, sans-serif */`}
          >
            <p className="font-body text-2xl">
              Aa Bb Cc Dd Ee
            </p>
          </Example>
          <Example
            title="Font loading"
            description="Both fonts are loaded via Google Fonts in index.css."
            code={`@import url('...Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700...');
@import url('...Geist:wght@400;500;600;700...');`}
          >
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>Fraunces:</strong> 400, 500, 600, 700</p>
              <p><strong>Geist:</strong> 400, 500, 600, 700</p>
            </div>
          </Example>
        </div>
      </section>

      {/* Heading Scale */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Heading Scale</h2>
        <div className="space-y-4">
          {headings.map((h) => (
            <div key={h.class} className="flex items-baseline gap-4 pb-4 border-b border-border last:border-0">
              <code className="text-[10px] font-mono text-muted-foreground w-32 shrink-0">{h.class}</code>
              <p className={h.class}>The quick brown fox</p>
              <span className="text-[10px] font-mono text-muted-foreground ml-auto shrink-0">
                {h.size}/{h.lineHeight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Body Text Scale */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Body Text Scale</h2>
        <div className="space-y-4">
          {bodyStyles.map((b) => (
            <div key={b.class} className="flex items-baseline gap-4 pb-4 border-b border-border last:border-0">
              <code className="text-[10px] font-mono text-muted-foreground w-44 shrink-0">{b.class}</code>
              <p className={b.class}>The quick brown fox jumps over the lazy dog.</p>
              <span className="text-[10px] font-mono text-muted-foreground ml-auto shrink-0">
                {b.size}/{b.lineHeight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Type Scale Reference Table */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Type Scale Reference</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Class</th>
                <th className="px-4 py-3 font-semibold">Font</th>
                <th className="px-4 py-3 font-semibold">Weight</th>
                <th className="px-4 py-3 font-semibold">Size</th>
                <th className="px-4 py-3 font-semibold">Line Height</th>
                <th className="px-4 py-3 font-semibold">Letter Spacing</th>
              </tr>
            </thead>
            <tbody>
              {allStyles.map((s) => (
                <tr key={s.class} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">{s.class}</td>
                  <td className="px-4 py-3">{s.font}</td>
                  <td className="px-4 py-3 font-mono">{s.weight}</td>
                  <td className="px-4 py-3 font-mono">{s.size}</td>
                  <td className="px-4 py-3 font-mono">{s.lineHeight}</td>
                  <td className="px-4 py-3 font-mono">{s.letterSpacing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Usage Examples</h2>
        <div className="grid grid-cols-3 gap-6">
          <Example
            title="Page title"
            description="Use Heading 1 or 2 for page-level titles."
            code={`<h1 className="text-heading-2">Dashboard</h1>
<p className="text-paragraph-sm text-muted-foreground">
  Welcome back, here's your overview.
</p>`}
          >
            <div>
              <h3 className="text-heading-2">Dashboard</h3>
              <p className="text-paragraph-sm text-muted-foreground">Welcome back, here's your overview.</p>
            </div>
          </Example>
          <Example
            title="Section header"
            description="Use Heading 4 or 5 for section titles within a page."
            code={`<h2 className="text-heading-4">Recent Activity</h2>`}
          >
            <h3 className="text-heading-4">Recent Activity</h3>
          </Example>
          <Example
            title="Card content"
            description="Combine paragraph sizes for content hierarchy."
            code={`<p className="text-paragraph-sm-bold">Order #12345</p>
<p className="text-paragraph-sm text-muted-foreground">
  Shipped on Feb 10, 2026
</p>
<p className="text-paragraph-mini text-muted-foreground">
  Tracking: 1Z999AA10123456784
</p>`}
          >
            <div className="space-y-0.5">
              <p className="text-paragraph-sm-bold">Order #12345</p>
              <p className="text-paragraph-sm text-muted-foreground">Shipped on Feb 10, 2026</p>
              <p className="text-paragraph-mini text-muted-foreground">Tracking: 1Z999AA10123456784</p>
            </div>
          </Example>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6 pb-12">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="flex gap-4">
          <DoItem>
            <p>Use <strong>Fraunces</strong> exclusively for headings (H1-H5) and display text.</p>
            <p>Use <strong>Geist</strong> for all body copy, labels, buttons, and form elements.</p>
            <p>Maintain consistent heading hierarchy — don't skip levels (H1 then H3).</p>
          </DoItem>
          <DontItem>
            <p>Don't use Fraunces for body text or UI elements — it's designed for display sizes.</p>
            <p>Don't mix font weights arbitrarily — stick to the defined scale.</p>
            <p>Don't use raw pixel sizes — always use the utility classes (.text-heading-*, .text-paragraph-*).</p>
          </DontItem>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Foundation: Spacing
   ================================================================ */

function SpacingDocs() {
  const spacingScale = [
    { name: "3xs", value: "2px", css: "--spacing-3xs", tailwind: "p-3xs, m-3xs, gap-3xs" },
    { name: "2xs", value: "4px", css: "--spacing-2xs", tailwind: "p-2xs, m-2xs, gap-2xs" },
    { name: "xs", value: "8px", css: "--spacing-xs", tailwind: "p-xs, m-xs, gap-xs" },
    { name: "sm", value: "12px", css: "--spacing-sm", tailwind: "p-sm, m-sm, gap-sm" },
    { name: "md", value: "16px", css: "--spacing-md", tailwind: "p-md, m-md, gap-md" },
    { name: "lg", value: "20px", css: "--spacing-lg", tailwind: "p-lg, m-lg, gap-lg" },
    { name: "xl", value: "24px", css: "--spacing-xl", tailwind: "p-xl, m-xl, gap-xl" },
    { name: "2xl", value: "32px", css: "--spacing-2xl", tailwind: "p-2xl, m-2xl, gap-2xl" },
    { name: "3xl", value: "40px", css: "--spacing-3xl", tailwind: "p-3xl, m-3xl, gap-3xl" },
    { name: "4xl", value: "48px", css: "--spacing-4xl", tailwind: "p-4xl, m-4xl, gap-4xl" },
  ]

  return (
    <div className="space-y-12">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Spacing
        </p>
        <h1 className="text-heading-3">Spacing</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          A consistent spacing scale based on a 4px grid, ranging from 2px to
          48px. Used for padding, margins, gaps, and layout composition.
        </p>
      </header>

      {/* Visual Scale */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Visual Scale</h2>
        <div className="space-y-3">
          {spacingScale.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <code className="text-xs font-mono text-muted-foreground w-12 shrink-0 text-right">{s.name}</code>
              <div
                className="h-6 rounded bg-primary/20 border border-primary/30"
                style={{ width: s.value }}
              />
              <span className="text-xs font-mono text-muted-foreground">{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-3 gap-6">
          <Example
            title="Padding"
            description="Apply consistent internal spacing to containers."
            code={`<div className="p-xs">8px padding</div>
<div className="p-md">16px padding</div>
<div className="p-xl">24px padding</div>`}
          >
            <div className="space-y-2 w-full">
              {[
                { cls: "p-xs", label: "p-xs (8px)" },
                { cls: "p-md", label: "p-md (16px)" },
                { cls: "p-xl", label: "p-xl (24px)" },
              ].map((item) => (
                <div key={item.cls} className={`${item.cls} bg-primary/10 border border-primary/20 rounded-lg`}>
                  <div className="bg-primary/20 rounded text-[10px] font-mono px-2 py-1">{item.label}</div>
                </div>
              ))}
            </div>
          </Example>
          <Example
            title="Gap"
            description="Control spacing between flex/grid children."
            code={`<div className="flex gap-xs">...</div>
<div className="flex gap-md">...</div>
<div className="flex gap-xl">...</div>`}
          >
            <div className="space-y-3 w-full">
              {[
                { cls: "gap-xs", label: "gap-xs (8px)" },
                { cls: "gap-md", label: "gap-md (16px)" },
                { cls: "gap-xl", label: "gap-xl (24px)" },
              ].map((item) => (
                <div key={item.cls}>
                  <p className="text-[10px] font-mono text-muted-foreground mb-1">{item.label}</p>
                  <div className={`flex ${item.cls}`}>
                    <div className="size-6 rounded bg-primary/30" />
                    <div className="size-6 rounded bg-primary/30" />
                    <div className="size-6 rounded bg-primary/30" />
                  </div>
                </div>
              ))}
            </div>
          </Example>
          <Example
            title="Margin"
            description="Control external spacing around elements."
            code={`<div className="mb-xs">margin-bottom 8px</div>
<div className="mb-md">margin-bottom 16px</div>
<div className="mb-xl">margin-bottom 24px</div>`}
          >
            <div className="w-full">
              {[
                { cls: "mb-xs", label: "mb-xs (8px)" },
                { cls: "mb-md", label: "mb-md (16px)" },
                { cls: "mb-xl", label: "mb-xl (24px)" },
              ].map((item) => (
                <div key={item.cls} className={item.cls}>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-1.5 text-[10px] font-mono">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Example>
        </div>
      </section>

      {/* Token Reference Table */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Token Reference</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Value</th>
                <th className="px-4 py-3 font-semibold">CSS Variable</th>
                <th className="px-4 py-3 font-semibold">Tailwind Classes</th>
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((s) => (
                <tr key={s.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-mono text-primary font-semibold">{s.name}</td>
                  <td className="px-4 py-3 font-mono">{s.value}</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{s.css}</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{s.tailwind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6 pb-12">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="flex gap-4">
          <DoItem>
            <p>Use spacing tokens consistently — avoid arbitrary pixel values.</p>
            <p>Use smaller values (3xs-xs) for tight UI elements like icon buttons and badges.</p>
            <p>Use larger values (xl-4xl) for section-level separation and page layout.</p>
          </DoItem>
          <DontItem>
            <p>Don't use inconsistent spacing within the same component (e.g., 12px top, 15px bottom).</p>
            <p>Don't use spacing tokens for width/height — they're designed for gaps and insets.</p>
            <p>Don't skip too many scale steps in the same context (e.g., 3xs next to 4xl).</p>
          </DontItem>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Foundation: Border Radius
   ================================================================ */

function BorderRadiusDocs() {
  const radii = [
    { name: "sm", value: "4px", css: "--radius-sm", tailwind: "rounded-sm", usage: "Mini inputs, badges, tags" },
    { name: "md", value: "6px", css: "--radius-md", tailwind: "rounded-md", usage: "Small buttons, tooltips" },
    { name: "lg", value: "8px", css: "--radius-lg", tailwind: "rounded-lg", usage: "Default buttons, inputs, cards" },
    { name: "xl", value: "12px", css: "--radius-xl", tailwind: "rounded-xl", usage: "Large cards, modals, popovers" },
  ]

  return (
    <div className="space-y-12">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Border Radius
        </p>
        <h1 className="text-heading-3">Border Radius</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          A 4-step radius scale based on a base value of 8px (--radius). All
          values are derived from this base to maintain visual consistency.
        </p>
      </header>

      {/* Visual Scale */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Visual Scale</h2>
        <div className="flex gap-8 items-end">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-3">
              <div
                className="size-20 bg-primary/15 border-2 border-primary/40"
                style={{ borderRadius: r.value }}
              />
              <div className="text-center">
                <p className="text-xs font-mono font-semibold">{r.name}</p>
                <p className="text-[10px] font-mono text-muted-foreground">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Examples */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-3 gap-6">
          <Example
            title="Small (4px)"
            description="Used for compact elements like mini inputs, tags, and badges."
            code={`<span className="rounded-sm bg-muted px-2 py-0.5 text-xs">Badge</span>
<input className="rounded-sm ..." />`}
          >
            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-muted px-2 py-0.5 text-xs">Badge</span>
              <span className="rounded-sm bg-primary/15 border border-primary/30 px-3 py-1 text-xs">Tag</span>
            </div>
          </Example>
          <Example
            title="Medium (6px)"
            description="Used for small buttons, dropdowns, and tooltips."
            code={`<button className="rounded-md bg-secondary px-3 py-1.5 text-xs">
  Small action
</button>`}
          >
            <button className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium">
              Small action
            </button>
          </Example>
          <Example
            title="Large (8px) — Default"
            description="The base radius. Used for standard buttons, inputs, and cards."
            code={`<Button>Default button</Button>
<Input placeholder="Default input" />`}
          >
            <div className="flex items-center gap-2">
              <Button size="sm">Button</Button>
              <Input placeholder="Input" className="max-w-[140px]" size="sm" />
            </div>
          </Example>
        </div>
      </section>

      {/* Token Reference Table */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Token Reference</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Value</th>
                <th className="px-4 py-3 font-semibold">CSS Variable</th>
                <th className="px-4 py-3 font-semibold">Tailwind Class</th>
                <th className="px-4 py-3 font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              {radii.map((r) => (
                <tr key={r.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-mono text-primary font-semibold">{r.name}</td>
                  <td className="px-4 py-3 font-mono">{r.value}</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{r.css}</td>
                  <td className="px-4 py-3 font-mono text-muted-foreground">{r.tailwind}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6 pb-12">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="flex gap-4">
          <DoItem>
            <p>Use <strong>rounded-lg</strong> (8px) as the default for most UI elements.</p>
            <p>Use <strong>rounded-sm</strong> (4px) for mini/compact elements (xs size inputs).</p>
            <p>Use <strong>rounded-xl</strong> (12px) for prominent containers like modals and large cards.</p>
          </DoItem>
          <DontItem>
            <p>Don't use <strong>rounded-full</strong> on rectangular elements — it creates pill shapes inconsistent with the system.</p>
            <p>Don't mix radius values within the same component (e.g., 4px top, 12px bottom).</p>
            <p>Don't use arbitrary radius values — stick to the 4-step scale.</p>
          </DontItem>
        </div>
      </section>
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
          <tr className="bg-muted border-b border-border text-left">
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
      token: "--primary-hover",
      value: "hsl(175 84% 32%)",
      hex: "#0d9488",
      usage: "Primary button hover/active",
    },
    {
      token: "--secondary",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Secondary button background",
    },
    {
      token: "--secondary-foreground",
      value: "hsl(60 5% 17%)",
      hex: "#2f2f2b",
      usage: "Secondary button text",
    },
    {
      token: "--secondary-hover",
      value: "hsl(60 4% 95.3%)",
      hex: "#f3f3f2",
      usage: "Secondary / Outline hover/active",
    },
    {
      token: "--ghost-foreground",
      value: "hsl(60 3% 42%)",
      hex: "#6f6f6a",
      usage: "Ghost button text",
    },
    {
      token: "--ghost-hover",
      value: "hsl(0 0% 0% / 0.05)",
      hex: "rgba(0,0,0,0.05)",
      usage: "Ghost button hover/active",
    },
    {
      token: "--destructive",
      value: "hsl(0 72% 51%)",
      hex: "#dc2626",
      usage: "Destructive button background",
    },
    {
      token: "--destructive-subtle",
      value: "hsl(0 86% 97%)",
      hex: "#fef2f2",
      usage: "Destructive secondary background",
    },
    {
      token: "--destructive-border",
      value: "hsl(0 84% 60%)",
      hex: "#ef4444",
      usage: "Destructive secondary border",
    },
    {
      token: "--ring",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Focus ring (standard variants)",
    },
    {
      token: "--ring-error",
      value: "hsl(0 93% 89%)",
      hex: "#fecaca",
      usage: "Focus ring (destructive variants)",
    },
    {
      token: "--border",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Outline button border",
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
          <tr className="bg-muted border-b border-border text-left">
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

/* ================================================================
   Icons (Foundation)
   ================================================================ */

const allLucideIcons = Object.entries(lucideIcons)
  .filter(([name]) => !["createLucideIcon", "defaultAttributes", "icons"].includes(name))
  .map(([name, component]) => ({ name, icon: component as React.ComponentType<{ className?: string }> }))

const ICONS_PER_PAGE = 120

const socialIcons = [
  { name: "TikTok", src: iconTiktok },
  { name: "Instagram", src: iconInstagram },
  { name: "YouTube", src: iconYoutube },
  { name: "Facebook", src: iconFacebook },
  { name: "Email", src: iconEmailSocial },
  { name: "X (Twitter)", src: iconX },
]

function IconsDocs() {
  const [iconSearch, setIconSearch] = useState("")
  const [page, setPage] = useState(0)

  const filteredIcons = useMemo(
    () =>
      iconSearch.trim()
        ? allLucideIcons.filter((i) =>
            i.name.toLowerCase().includes(iconSearch.toLowerCase())
          )
        : allLucideIcons,
    [iconSearch]
  )

  const totalPages = Math.ceil(filteredIcons.length / ICONS_PER_PAGE)
  const pagedIcons = filteredIcons.slice(
    page * ICONS_PER_PAGE,
    (page + 1) * ICONS_PER_PAGE
  )

  // Reset page when search changes
  useEffect(() => { setPage(0) }, [iconSearch])

  return (
    <div className="space-y-12">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Icons
        </p>
        <h1 className="text-heading-3">Icons</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          SprouX uses <strong>Lucide React</strong> as the primary icon library ({allLucideIcons.length} icons),
          plus a set of custom social/brand icons exported from Figma.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`// Lucide icons (primary library)\nimport { Home, Search, Plus, Check } from "lucide-react"\n\n// Custom social icons (SVG imports)\nimport tiktokIcon from "@/assets/icons/tiktok.svg"\nimport instagramIcon from "@/assets/icons/instagram.svg"`} />
      </section>

      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Icon Sizes</h2>
        <p className="text-sm text-muted-foreground">
          Three standard sizes are used across the design system, matching the Figma token scale.
        </p>
        <div className="flex items-end gap-8">
          {[
            { label: "size-md (16px)", cls: "size-md", desc: "Buttons (xs), inline text" },
            { label: "size-lg (20px)", cls: "size-lg", desc: "Default buttons, nav items" },
            { label: "size-xl (24px)", cls: "size-xl", desc: "Headers, standalone icons" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <Home className={s.cls} />
              <span className="text-xs font-mono text-muted-foreground">{s.label}</span>
              <span className="text-[10px] text-muted-foreground">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Lucide Icon Catalog</h2>
        <p className="text-sm text-muted-foreground">
          All {allLucideIcons.length} icons from the Lucide library. Search or browse by page.
        </p>
        <div className="flex items-center gap-3">
          <Input
            placeholder="Search icons..."
            value={iconSearch}
            onChange={(e) => setIconSearch(e.target.value)}
            className="max-w-xs"
          />
          <span className="text-xs text-muted-foreground">
            {filteredIcons.length} icon{filteredIcons.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-1">
          {pagedIcons.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="flex flex-col items-center gap-1.5 rounded-lg p-2 hover:bg-muted transition-colors cursor-default"
                title={item.name}
              >
                <Icon className="size-lg" />
                <span className="text-[9px] text-muted-foreground truncate w-full text-center">
                  {item.name}
                </span>
              </div>
            )
          })}
          {filteredIcons.length === 0 && (
            <p className="col-span-full text-sm text-muted-foreground py-8 text-center">
              No icons match &ldquo;{iconSearch}&rdquo;
            </p>
          )}
        </div>
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              Previous
            </Button>
            <span className="text-xs text-muted-foreground">
              Page {page + 1} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
            >
              Next
            </Button>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Custom / Social Icons</h2>
        <p className="text-sm text-muted-foreground">
          Brand and social icons exported from the Figma design system as SVGs.
        </p>
        <div className="grid grid-cols-6 gap-4">
          {socialIcons.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 hover:bg-muted transition-colors"
            >
              <img src={item.src} alt={item.name} className="size-lg" />
              <span className="text-xs text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Usage Guidelines</h2>
        <div className="flex gap-4">
          <DoItem>
            Use semantic icon names that describe the action (e.g., Trash2 for delete).
            Keep icon sizes consistent within a context.
            Use currentColor for icon fill to inherit text color.
            Add aria-hidden="true" for decorative icons.
          </DoItem>
          <DontItem>
            Don't mix icon libraries — stick to Lucide for UI icons.
            Don't use icons smaller than 16px (size-md).
            Don't use colored icons in text-heavy interfaces.
            Don't rely solely on icons without text labels for critical actions.
          </DontItem>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Illustrations (Foundation)
   ================================================================ */

const illustrations = [
  { name: "New Device", src: illustNewDevice, usage: "Onboarding, device setup" },
  { name: "Payment Successful", src: illustPaymentSuccessful, usage: "Transaction confirmation" },
  { name: "Submitted", src: illustSubmitted, usage: "Form submission success" },
  { name: "Mail Sent", src: illustMailSent, usage: "Email confirmation" },
  { name: "Error", src: illustError, usage: "Error states, failed operations" },
  { name: "Authentication", src: illustAuthen, usage: "Login, 2FA, identity verification" },
  { name: "Success", src: illustSuccess, usage: "General success state" },
  { name: "Empty", src: illustEmpty, usage: "Empty states, no data" },
  { name: "Launched", src: illustLaunched, usage: "Product launch, go-live" },
  { name: "Security On", src: illustSecurityOn, usage: "Security enabled, protected" },
  { name: "Payment", src: illustPayment, usage: "Payment processing, checkout" },
  { name: "Withdrawals", src: illustWithdrawals, usage: "Fund withdrawal, payout" },
  { name: "Backers", src: illustBackers, usage: "Supporters, community" },
  { name: "Idea", src: illustIdea, usage: "Suggestions, brainstorming" },
  { name: "Not Found", src: illustNotFound, usage: "404, missing page" },
  { name: "Email", src: illustEmail, usage: "Email-related features" },
]

function IllustrationsDocs() {
  return (
    <div className="space-y-12">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Illustrations
        </p>
        <h1 className="text-heading-3">Illustrations</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          {illustrations.length} illustration assets from the SprouX Figma design system.
          Used for empty states, success/error screens, onboarding, and feature highlights.
          Each illustration follows a circular safezone rule for consistent visual alignment.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import illustSuccess from "@/assets/illustrations/success.svg"\nimport illustError from "@/assets/illustrations/error.svg"\nimport illustEmpty from "@/assets/illustrations/empty.svg"\n\n// Usage\n<img src={illustSuccess} alt="Success" className="w-48" />`} />
      </section>

      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Safezone Rule</h2>
        <div className="rounded-xl border border-border p-6 bg-muted/30 max-w-lg">
          <div className="flex items-center gap-4">
            <div className="size-24 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
              <span className="text-[10px] text-muted-foreground text-center leading-tight">
                Safezone<br />circle
              </span>
            </div>
            <p className="text-xs text-muted-foreground flex-1">
              The primary visual should be scaled as large as possible while remaining
              fully contained within the safezone circle. This ensures consistent sizing
              across all illustration placements.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {illustrations.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-border p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="size-32 flex items-center justify-center">
                <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-center space-y-0.5">
                <p className="text-xs font-medium">{item.name}</p>
                <p className="text-[10px] text-muted-foreground">{item.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Usage Guidelines</h2>
        <div className="flex gap-4">
          <DoItem>
            Use illustrations for empty states, onboarding, and confirmation screens.
            Keep illustrations centered with adequate whitespace.
            Use the correct illustration for the context (e.g., "empty" for no-data, "error" for failures).
            Maintain consistent sizing (w-32 to w-48) across placements.
          </DoItem>
          <DontItem>
            Don't use illustrations as decorative filler — each has a specific purpose.
            Don't resize illustrations below 80px where details become unclear.
            Don't combine multiple illustrations in the same view.
            Don't modify the illustration colors outside the design system palette.
          </DontItem>
        </div>
      </section>
    </div>
  )
}

function ButtonDocs() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const handleAsyncSave = async () => {
    setLoading(true)
    setSaved(false)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

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

        <div className="grid grid-cols-3 gap-6">
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

        {/* onClick handler */}
        <Example
          title="Click handler (onClick)"
          description="Pass an onClick handler to respond to user interaction. The component forwards all native button events."
          code={`const [count, setCount] = useState(0)

<Button onClick={() => setCount((c) => c + 1)}>
  Clicked {count} times
</Button>
<Button variant="secondary" onClick={() => setCount(0)}>
  Reset
</Button>`}
        >
          <Button onClick={() => setCount((c) => c + 1)}>
            Clicked {count} times
          </Button>
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Example>

        {/* Async loading */}
        <Example
          title="Async action (loading pattern)"
          description="A real-world pattern: disable the button and show a spinner during an async operation, then show success feedback."
          code={`const [loading, setLoading] = useState(false)
const [saved, setSaved] = useState(false)

const handleAsyncSave = async () => {
  setLoading(true)
  setSaved(false)
  await new Promise((r) => setTimeout(r, 1500))
  setLoading(false)
  setSaved(true)
  setTimeout(() => setSaved(false), 2000)
}

<Button onClick={handleAsyncSave} disabled={loading}>
  {loading ? (
    <><Loader2 className="animate-spin" /> Saving...</>
  ) : saved ? (
    <><Check /> Saved!</>
  ) : (
    "Save changes"
  )}
</Button>`}
        >
          <Button onClick={handleAsyncSave} disabled={loading}>
            {loading ? (
              <><Loader2 className="animate-spin" /> Saving...</>
            ) : saved ? (
              <><Check /> Saved!</>
            ) : (
              "Save changes"
            )}
          </Button>
        </Example>

        {/* Confirm destructive */}
        <Example
          title="Confirm destructive action"
          description="A two-step confirmation pattern for dangerous actions. First click reveals the confirm button, second click executes."
          code={`const [confirmed, setConfirmed] = useState(false)

{!confirmed ? (
  <Button
    variant="destructive-secondary"
    onClick={() => setConfirmed(true)}
  >
    <Trash2 /> Delete project
  </Button>
) : (
  <div className="flex gap-2 items-center">
    <span className="text-xs text-red-500 font-medium">Are you sure?</span>
    <Button
      variant="destructive"
      onClick={() => {
        alert("Deleted!")
        setConfirmed(false)
      }}
    >
      Yes, delete
    </Button>
    <Button variant="secondary" onClick={() => setConfirmed(false)}>
      Cancel
    </Button>
  </div>
)}`}
        >
          {!confirmed ? (
            <Button
              variant="destructive-secondary"
              onClick={() => setConfirmed(true)}
            >
              <Trash2 /> Delete project
            </Button>
          ) : (
            <div className="flex gap-2 items-center">
              <span className="text-xs text-red-500 font-medium">Are you sure?</span>
              <Button
                variant="destructive"
                onClick={() => {
                  alert("Deleted!")
                  setConfirmed(false)
                }}
              >
                Yes, delete
              </Button>
              <Button variant="secondary" onClick={() => setConfirmed(false)}>
                Cancel
              </Button>
            </div>
          )}
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Button extends all native{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
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
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
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
              <code className="bg-muted px-1 rounded font-mono">
                {"<button>"}
              </code>{" "}
              semantically.
            </p>
            <p>
              <strong className="text-foreground">Links</strong> navigate to a
              new page or location. They use{" "}
              <code className="bg-muted px-1 rounded font-mono">
                {"<a>"}
              </code>{" "}
              semantically.
            </p>
            <p>
              If you need a link that looks like a button, use{" "}
              <code className="bg-muted px-1 rounded font-mono">
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
              <tr className="bg-muted border-b border-border text-left">
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Tab
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Move focus to the button
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Enter
                      </kbd>{" "}
                      /{" "}
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
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
                <code className="bg-muted px-1 rounded font-mono">
                  aria-label
                </code>{" "}
                describing the action.
              </li>
              <li>
                For buttons that control expandable content, use{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-expanded
                </code>{" "}
                and{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-controls
                </code>.
              </li>
              <li>
                For toggle buttons, use{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-pressed
                </code>{" "}
                to indicate the current state.
              </li>
              <li>
                Links opening in a new tab should include a visual indicator
                (e.g., ExternalLink icon) and{" "}
                <code className="bg-muted px-1 rounded font-mono">
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
              <code className="bg-muted px-1 rounded font-mono">
                :focus-visible
              </code>
              . The ring uses{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --border (#e9e9e7)
              </code>{" "}
              for standard variants and{" "}
              <code className="bg-muted px-1 rounded font-mono">
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
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
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
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
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
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
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
          <tr className="bg-muted border-b border-border text-left">
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
      usage: "Input border",
    },
    {
      token: "--border-strong",
      value: "hsl(60 2% 68%)",
      hex: "#afafab",
      usage: "Border when focused + has value",
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
      token: "--ring",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Focus ring (default state)",
    },
    {
      token: "--destructive-border",
      value: "hsl(0 84% 60%)",
      hex: "#ef4444",
      usage: "Error state border",
    },
    {
      token: "--ring-error",
      value: "hsl(0 93% 89%)",
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
          <tr className="bg-muted border-b border-border text-left">
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

function FocusBlurDemo() {
  const [focused, setFocused] = useState(false)
  return (
    <div className="max-w-sm w-full space-y-2">
      <Input
        placeholder="Click to focus, click away to blur"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <p className="text-xs text-muted-foreground">
        Status: {focused ? "Focused" : "Not focused"}
      </p>
    </div>
  )
}

function InputDocs() {
  const [showPw, setShowPw] = useState(false)
  const [controlled, setControlled] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors: { name?: string; email?: string } = {}
    if (!formData.name.trim()) errors.name = "Name is required."
    if (!formData.email.trim()) errors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Please enter a valid email address."
    setFormErrors(errors)
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true)
      setTimeout(() => setFormSubmitted(false), 3000)
    }
  }

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

        <div className="grid grid-cols-3 gap-6">
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

        {/* Controlled input */}
        <Example
          title="Controlled input (onChange)"
          description="Use value + onChange for controlled inputs. The component forwards all native input events (onChange, onFocus, onBlur, onKeyDown, etc.)."
          code={`const [controlled, setControlled] = useState("")

<Input
  value={controlled}
  onChange={(e) => setControlled(e.target.value)}
  placeholder="Type something..."
/>
<p className="text-xs text-muted-foreground">
  Value: "{controlled}" ({controlled.length} chars)
</p>`}
        >
          <div className="max-w-sm w-full space-y-2">
            <Input
              value={controlled}
              onChange={(e) => setControlled(e.target.value)}
              placeholder="Type something..."
            />
            <p className="text-xs text-muted-foreground">
              Value: "{controlled}" ({controlled.length} chars)
            </p>
          </div>
        </Example>

        {/* Uncontrolled with defaultValue */}
        <Example
          title="Uncontrolled (defaultValue)"
          description="Use defaultValue for uncontrolled inputs when you only need the value on submit, not on every keystroke."
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

        {/* With icon — interactive search */}
        <Example
          title="With icon — interactive search (composition)"
          description="Wrap Input in a relative container and position icons absolutely. This example shows a working search input with real-time filtering."
          code={`const [searchQuery, setSearchQuery] = useState("")
const items = ["Dashboard", "Settings", "Profile", "Billing", "Notifications"]
const filtered = items.filter((i) =>
  i.toLowerCase().includes(searchQuery.toLowerCase())
)

<div className="relative max-w-sm">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input
    className="pl-9"
    placeholder="Search pages..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>
{searchQuery && (
  <ul className="text-xs space-y-1">
    {filtered.map((item) => <li key={item}>{item}</li>)}
    {filtered.length === 0 && <li className="text-muted-foreground">No results</li>}
  </ul>
)}`}
        >
          <div className="w-full max-w-sm space-y-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                className="pl-9"
                placeholder="Search pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {searchQuery && (
              <ul className="text-xs space-y-1 px-1">
                {["Dashboard", "Settings", "Profile", "Billing", "Notifications"]
                  .filter((i) => i.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item) => (
                    <li key={item} className="py-1 px-2 rounded hover:bg-muted">{item}</li>
                  ))}
                {["Dashboard", "Settings", "Profile", "Billing", "Notifications"]
                  .filter((i) => i.toLowerCase().includes(searchQuery.toLowerCase()))
                  .length === 0 && (
                  <li className="py-1 px-2 text-muted-foreground">No results</li>
                )}
              </ul>
            )}
          </div>
        </Example>

        {/* With icon — static */}
        <Example
          title="With icon — username (composition)"
          description="Another icon composition pattern with a user icon on the left."
          code={`<div className="relative max-w-sm">
  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Username" />
</div>`}
        >
          <div className="relative max-w-sm w-full">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Username" />
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

        {/* Interactive form with validation */}
        <Example
          title="Form with validation (fully interactive)"
          description="A complete form with real validation on submit. Try submitting empty or with an invalid email — errors appear dynamically. This is ready to copy into your project."
          code={`const [formData, setFormData] = useState({ name: "", email: "" })
const [formErrors, setFormErrors] = useState<{ name?: string; email?: string }>({})
const [formSubmitted, setFormSubmitted] = useState(false)

const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  const errors: { name?: string; email?: string } = {}
  if (!formData.name.trim()) errors.name = "Name is required."
  if (!formData.email.trim()) errors.email = "Email is required."
  else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email))
    errors.email = "Please enter a valid email address."
  setFormErrors(errors)
  if (Object.keys(errors).length === 0) {
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }
}

<form onSubmit={handleFormSubmit} className="space-y-4 max-w-sm">
  <div className="space-y-1.5">
    <label htmlFor="name" className="text-sm font-medium">Name</label>
    <Input
      id="name"
      placeholder="Your full name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      aria-invalid={!!formErrors.name || undefined}
    />
    {formErrors.name && <p className="text-xs text-red-500">{formErrors.name}</p>}
  </div>
  <div className="space-y-1.5">
    <label htmlFor="email" className="text-sm font-medium">Email</label>
    <Input
      id="email"
      type="email"
      placeholder="you@example.com"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      aria-invalid={!!formErrors.email || undefined}
    />
    {formErrors.email && <p className="text-xs text-red-500">{formErrors.email}</p>}
  </div>
  <Button type="submit" className="w-full">
    {formSubmitted ? <><Check /> Submitted!</> : "Submit"}
  </Button>
</form>`}
        >
          <form onSubmit={handleFormSubmit} className="space-y-4 max-w-sm w-full">
            <div className="space-y-1.5">
              <label htmlFor="form-name" className="text-sm font-medium">Name</label>
              <Input
                id="form-name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                aria-invalid={!!formErrors.name || undefined}
              />
              {formErrors.name && <p className="text-xs text-red-500">{formErrors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-email" className="text-sm font-medium">Email</label>
              <Input
                id="form-email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                aria-invalid={!!formErrors.email || undefined}
              />
              {formErrors.email && <p className="text-xs text-red-500">{formErrors.email}</p>}
            </div>
            <Button type="submit" className="w-full">
              {formSubmitted ? <><Check /> Submitted!</> : "Submit"}
            </Button>
          </form>
        </Example>

        {/* onKeyDown handler */}
        <Example
          title="Keyboard events (onKeyDown)"
          description="Use onKeyDown for keyboard shortcuts like Enter to submit. All native keyboard events are forwarded."
          code={`<Input
  placeholder="Press Enter to alert"
  onKeyDown={(e) => {
    if (e.key === "Enter") alert("Enter pressed! Value: " + e.currentTarget.value)
  }}
/>`}
        >
          <Input
            className="max-w-sm"
            placeholder="Press Enter to alert"
            onKeyDown={(e) => {
              if (e.key === "Enter") alert("Enter pressed! Value: " + e.currentTarget.value)
            }}
          />
        </Example>

        {/* onFocus / onBlur */}
        <Example
          title="Focus & blur events (onFocus / onBlur)"
          description="Use onFocus and onBlur for focus-dependent logic like showing hints or triggering validation."
          code={`const [focused, setFocused] = useState(false)

<Input
  placeholder="Click to focus, click away to blur"
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
/>
<p className="text-xs text-muted-foreground">
  Status: {focused ? "Focused ✓" : "Not focused"}
</p>`}
        >
          <FocusBlurDemo />
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Input extends all native{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            {"<input>"}
          </code>{" "}
          HTML attributes (except <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">size</code>, which is replaced by the variant prop) in addition to the following:
        </p>
        <InputPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
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
                <code className="bg-muted px-1 rounded font-mono text-[10px]">
                  htmlFor
                </code>{" "}
                + <code className="bg-muted px-1 rounded font-mono text-[10px]">id</code>.
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
                Use <code className="bg-muted px-1 rounded font-mono text-[10px]">aria-invalid</code>{" "}
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
              <tr className="bg-muted border-b border-border text-left">
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Tab
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Move focus to / from the input
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
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
                <code className="bg-muted px-1 rounded font-mono">
                  {"<label>"}
                </code>{" "}
                using{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  htmlFor
                </code>{" "}
                + <code className="bg-muted px-1 rounded font-mono">id</code>.
              </li>
              <li>
                If a visible label isn't possible, use{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-label
                </code>{" "}
                or{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-labelledby
                </code>.
              </li>
              <li>
                Link error messages to the input using{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-describedby
                </code>{" "}
                so screen readers announce the error.
              </li>
              <li>
                Use{" "}
                <code className="bg-muted px-1 rounded font-mono">
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
              <code className="bg-muted px-1 rounded font-mono">
                :focus-visible
              </code>
              . The ring uses{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --border (#e9e9e7)
              </code>{" "}
              for the default state and{" "}
              <code className="bg-muted px-1 rounded font-mono">
                red-200 (#fecaca)
              </code>{" "}
              when{" "}
              <code className="bg-muted px-1 rounded font-mono">
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
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
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
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
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
   Component: Textarea Docs
   ================================================================ */

function TextareaPropsTable() {
  const props = [
    {
      name: "placeholder",
      type: "string",
      default: "—",
      description: "Hint text displayed when the textarea is empty.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the textarea, reducing opacity to 50% and preventing interaction.",
    },
    {
      name: "aria-invalid",
      type: "boolean",
      default: "false",
      description: "Marks the textarea as invalid, applying a red border and red focus ring.",
    },
    {
      name: "rows",
      type: "number",
      default: "—",
      description: "Number of visible text rows. Browser default is typically 2. Use for fixed-height textareas.",
    },
    {
      name: "maxLength",
      type: "number",
      default: "—",
      description: "Maximum number of characters allowed. Pair with a character counter for UX.",
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
      description: "Controlled or uncontrolled value for the textarea.",
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
          <tr className="bg-muted border-b border-border text-left">
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

function TextareaTokensTable() {
  const tokens = [
    {
      token: "--input",
      value: "hsl(0 0% 100%)",
      hex: "#ffffff",
      usage: "Textarea background",
    },
    {
      token: "--border",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Textarea border",
    },
    {
      token: "--border-strong",
      value: "hsl(60 2% 68%)",
      hex: "#afafab",
      usage: "Border when focused + has value",
    },
    {
      token: "--foreground",
      value: "hsl(60 4% 14%)",
      hex: "#252522",
      usage: "Textarea text value",
    },
    {
      token: "--muted-foreground",
      value: "hsl(60 2% 68%)",
      hex: "#afafab",
      usage: "Placeholder text",
    },
    {
      token: "--ring",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Focus ring (default state)",
    },
    {
      token: "--destructive-border",
      value: "hsl(0 84% 60%)",
      hex: "#ef4444",
      usage: "Error state border",
    },
    {
      token: "--ring-error",
      value: "hsl(0 93% 89%)",
      hex: "#fecaca",
      usage: "Error state focus ring",
    },
    {
      token: "--radius (rounded-lg)",
      value: "8px",
      hex: "—",
      usage: "Border radius",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-muted border-b border-border text-left">
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

function TextareaDocs() {
  const [controlled, setControlled] = useState("")
  const maxLen = 200
  const [charCount, setCharCount] = useState("")
  const [feedback, setFeedback] = useState("")
  const [feedbackError, setFeedbackError] = useState("")
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim()) {
      setFeedbackError("Please enter your feedback.")
      return
    }
    setFeedbackError("")
    setFeedbackSubmitted(true)
    setTimeout(() => {
      setFeedbackSubmitted(false)
      setFeedback("")
    }, 3000)
  }

  return (
    <div className="space-y-12">
      {/* ---- Header ---- */}
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="text-heading-3">Textarea</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          A multi-line text input for longer content like descriptions,
          messages, or comments. Supports the same states as Input: focus,
          error, and disabled.
        </p>
      </header>

      {/* ---- Installation ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Installation</h2>
        <CodeBlock
          code={`# Install dependencies (if not already installed)
pnpm add clsx tailwind-merge

# The component lives at:
# src/components/ui/textarea.tsx`}
        />
        <CodeBlock
          code={`import { Textarea } from "@/components/ui/textarea"`}
        />
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-3 gap-6">
        {/* Default */}
        <Example
          title="Default textarea"
          description="The basic textarea with placeholder text. This is the most common usage for multi-line text entry."
          code={`<Textarea placeholder="Type your message here." />`}
        >
          <Textarea placeholder="Type your message here." className="max-w-sm" />
        </Example>

        {/* Controlled */}
        <Example
          title="Controlled textarea (onChange)"
          description="Use value + onChange for controlled textareas. The component forwards all native textarea events."
          code={`const [controlled, setControlled] = useState("")

<Textarea
  value={controlled}
  onChange={(e) => setControlled(e.target.value)}
  placeholder="Type something..."
/>
<p className="text-xs text-muted-foreground">
  {controlled.length} characters
</p>`}
        >
          <div className="max-w-sm w-full space-y-2">
            <Textarea
              value={controlled}
              onChange={(e) => setControlled(e.target.value)}
              placeholder="Type something..."
            />
            <p className="text-xs text-muted-foreground">
              {controlled.length} characters
            </p>
          </div>
        </Example>

        {/* With defaultValue */}
        <Example
          title="Uncontrolled (defaultValue)"
          description="Use defaultValue for uncontrolled textareas when you only need the value on submit."
          code={`<Textarea defaultValue="This is pre-filled content that the user can edit." />`}
        >
          <Textarea
            defaultValue="This is pre-filled content that the user can edit."
            className="max-w-sm"
          />
        </Example>

        {/* With rows */}
        <Example
          title="Custom rows"
          description="Use the rows prop to control the visible height. Default browser behavior is ~2 rows."
          code={`<Textarea rows={3} placeholder="3 rows" />
<Textarea rows={6} placeholder="6 rows" />`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Textarea rows={3} placeholder="3 rows" />
            <Textarea rows={6} placeholder="6 rows" />
          </div>
        </Example>

        {/* Character counter */}
        <Example
          title="Character counter (pattern)"
          description="Pair maxLength with a live counter to give users feedback on remaining characters."
          code={`const maxLen = 200
const [charCount, setCharCount] = useState("")

<div className="space-y-1.5">
  <Textarea
    value={charCount}
    onChange={(e) => setCharCount(e.target.value)}
    maxLength={maxLen}
    placeholder="Write a short bio..."
  />
  <p className="text-xs text-muted-foreground text-right">
    {charCount.length}/{maxLen}
  </p>
</div>`}
        >
          <div className="max-w-sm w-full space-y-1.5">
            <Textarea
              value={charCount}
              onChange={(e) => setCharCount(e.target.value)}
              maxLength={maxLen}
              placeholder="Write a short bio..."
            />
            <p className="text-xs text-muted-foreground text-right">
              {charCount.length}/{maxLen}
            </p>
          </div>
        </Example>

        {/* Error state */}
        <Example
          title="Error state"
          description="Use aria-invalid to indicate validation errors. The border turns red-500 and the focus ring becomes red-200."
          code={`<div className="space-y-1.5">
  <Textarea aria-invalid placeholder="Describe the issue..." />
  <p className="text-xs text-red-500">
    Description is required.
  </p>
</div>`}
        >
          <div className="max-w-sm space-y-1.5">
            <Textarea aria-invalid placeholder="Describe the issue..." />
            <p className="text-xs text-red-500">
              Description is required.
            </p>
          </div>
        </Example>

        {/* Error with value */}
        <Example
          title="Error with value"
          description="Error state with content. Click the textarea to see the red focus ring."
          code={`<div className="space-y-1.5">
  <Textarea aria-invalid defaultValue="Too short." />
  <p className="text-xs text-red-500">
    Description must be at least 20 characters.
  </p>
</div>`}
        >
          <div className="max-w-sm space-y-1.5">
            <Textarea aria-invalid defaultValue="Too short." />
            <p className="text-xs text-red-500">
              Description must be at least 20 characters.
            </p>
          </div>
        </Example>

        {/* Disabled */}
        <Example
          title="Disabled state"
          description="Disabled textareas have 50% opacity and a not-allowed cursor."
          code={`<Textarea disabled placeholder="Disabled textarea" />
<Textarea disabled defaultValue="Disabled with content" />`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Textarea disabled placeholder="Disabled textarea" />
            <Textarea disabled defaultValue="Disabled with content" />
          </div>
        </Example>

        {/* With label */}
        <Example
          title="With label"
          description="Always pair textareas with a visible label for accessibility. Use htmlFor to link the label."
          code={`<div className="space-y-1.5 max-w-sm">
  <label htmlFor="message" className="text-sm font-medium">
    Message
  </label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`}
        >
          <div className="space-y-1.5 max-w-sm w-full">
            <label htmlFor="msg-demo" className="text-sm font-medium">
              Message
            </label>
            <Textarea id="msg-demo" placeholder="Type your message here." />
          </div>
        </Example>

        {/* With label + helper text */}
        <Example
          title="With label + helper text"
          description="Add helper text below the textarea for format guidance or constraints."
          code={`<div className="space-y-1.5 max-w-sm">
  <label htmlFor="bio" className="text-sm font-medium">Bio</label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
  <p className="text-xs text-muted-foreground">
    Brief description for your profile. Max 300 characters.
  </p>
</div>`}
        >
          <div className="space-y-1.5 max-w-sm w-full">
            <label htmlFor="bio-demo" className="text-sm font-medium">Bio</label>
            <Textarea id="bio-demo" placeholder="Tell us about yourself..." />
            <p className="text-xs text-muted-foreground">
              Brief description for your profile. Max 300 characters.
            </p>
          </div>
        </Example>

        {/* Resize control */}
        <Example
          title="Resize control"
          description="Use CSS resize utilities to control whether the user can resize the textarea."
          code={`<Textarea placeholder="Resize both (default)" />
<Textarea className="resize-none" placeholder="No resize" />
<Textarea className="resize-y" placeholder="Vertical only" />`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Textarea placeholder="Resize both (default)" rows={2} />
            <Textarea className="resize-none" placeholder="No resize" rows={2} />
            <Textarea className="resize-y" placeholder="Vertical only" rows={2} />
          </div>
        </Example>

        {/* Form with validation */}
        <Example
          title="Feedback form (fully interactive)"
          description="A complete feedback form with validation. Try submitting empty to see the error state."
          code={`const [feedback, setFeedback] = useState("")
const [feedbackError, setFeedbackError] = useState("")
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (!feedback.trim()) {
    setFeedbackError("Please enter your feedback.")
    return
  }
  setFeedbackError("")
  setSubmitted(true)
  setTimeout(() => { setSubmitted(false); setFeedback("") }, 3000)
}

<form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
  <div className="space-y-1.5">
    <label htmlFor="feedback" className="text-sm font-medium">
      Feedback
    </label>
    <Textarea
      id="feedback"
      placeholder="What can we improve?"
      value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
      aria-invalid={!!feedbackError || undefined}
      rows={4}
    />
    {feedbackError && (
      <p className="text-xs text-red-500">{feedbackError}</p>
    )}
  </div>
  <Button type="submit" className="w-full">
    {submitted ? <><Check /> Sent!</> : "Send feedback"}
  </Button>
</form>`}
        >
          <form onSubmit={handleFeedbackSubmit} className="space-y-4 max-w-sm w-full">
            <div className="space-y-1.5">
              <label htmlFor="feedback-demo" className="text-sm font-medium">
                Feedback
              </label>
              <Textarea
                id="feedback-demo"
                placeholder="What can we improve?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                aria-invalid={!!feedbackError || undefined}
                rows={4}
              />
              {feedbackError && (
                <p className="text-xs text-red-500">{feedbackError}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              {feedbackSubmitted ? <><Check /> Sent!</> : "Send feedback"}
            </Button>
          </form>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Textarea extends all native{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            {"<textarea>"}
          </code>{" "}
          HTML attributes in addition to the following:
        </p>
        <TextareaPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            src/index.css
          </code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <TextareaTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">When to use Textarea vs Input</h3>
          <div className="rounded-xl border border-border p-5 text-xs space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">Textarea</strong> — Use for
              multi-line content: descriptions, comments, messages, feedback,
              bio fields, or any text that may span multiple lines.
            </p>
            <p>
              <strong className="text-foreground">Input</strong> — Use for
              single-line values: names, emails, passwords, search queries,
              phone numbers, or any short-form text.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Labels & guidance</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Always use a visible <strong>label</strong> above the textarea.
              </p>
              <p>
                Provide a character limit and counter when there's a maximum
                length constraint.
              </p>
              <p>
                Use helper text to clarify expectations (e.g., "Max 300
                characters" or "Markdown supported").
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use placeholder text as a substitute for a label — it
                disappears on input.
              </p>
              <p>
                Don't use a textarea for single-line fields like name or email
                — use Input instead.
              </p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Sizing & resize</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Set a sensible <strong>rows</strong> value to match the expected
                content length (3-4 for comments, 6-8 for descriptions).
              </p>
              <p>
                Use <code className="bg-muted px-1 rounded font-mono text-[10px]">resize-y</code>{" "}
                or <code className="bg-muted px-1 rounded font-mono text-[10px]">resize-none</code>{" "}
                to prevent horizontal resizing that can break layouts.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use very small textareas (1-2 rows) — if the content is
                that short, use an Input.
              </p>
              <p>
                Don't allow unrestricted resize without{" "}
                <code className="bg-muted px-1 rounded font-mono text-[10px]">max-w</code>{" "}
                / <code className="bg-muted px-1 rounded font-mono text-[10px]">max-h</code>{" "}
                constraints in constrained layouts.
              </p>
            </DontItem>
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
          file (node 2256:175).
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Figma Property</th>
                <th className="px-4 py-3 font-semibold">Figma Value</th>
                <th className="px-4 py-3 font-semibold">Code Prop</th>
                <th className="px-4 py-3 font-semibold">Code Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Roundness", "Default (8px)", "—", "rounded-lg (default)"],
                ["State", "Default", "—", "default"],
                ["State", "Focus", "—", "CSS :focus-visible"],
                ["State", "Error", "aria-invalid", "true"],
                ["State", "Error Focus", "aria-invalid", "true + :focus-visible"],
                ["State", "Disabled", "disabled", "true"],
                ["Value", "Empty", "—", "no value"],
                ["Value", "Placeholder", "placeholder", '"Type your message here."'],
                ["Value", "Value", "value / defaultValue", '"Entered text"'],
                ["Font", "Geist Regular 14/20", "—", "text-sm (font-normal)"],
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Tab
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Move focus to / from the textarea
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Enter
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Insert a new line (does not submit forms by default)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Ctrl+A
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Select all text in the textarea
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
                Every textarea <strong>must</strong> have an associated{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  {"<label>"}
                </code>{" "}
                using{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  htmlFor
                </code>{" "}
                + <code className="bg-muted px-1 rounded font-mono">id</code>.
              </li>
              <li>
                If a visible label isn't possible, use{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-label
                </code>{" "}
                or{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-labelledby
                </code>.
              </li>
              <li>
                Link error messages to the textarea using{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-describedby
                </code>{" "}
                so screen readers announce the error.
              </li>
              <li>
                Use{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-invalid="true"
                </code>{" "}
                to programmatically mark invalid textareas.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Focus indicator
            </h3>
            <p className="text-muted-foreground">
              All textareas display a visible <strong>3px ring</strong> on{" "}
              <code className="bg-muted px-1 rounded font-mono">
                :focus-visible
              </code>
              . The ring uses{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --border (#e9e9e7)
              </code>{" "}
              for the default state and{" "}
              <code className="bg-muted px-1 rounded font-mono">
                red-200 (#fecaca)
              </code>{" "}
              when{" "}
              <code className="bg-muted px-1 rounded font-mono">
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
              <p className="font-semibold text-foreground">Input</p>
              <p className="text-muted-foreground mt-0.5">
                Single-line text input for short-form data entry.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Select</p>
              <p className="text-muted-foreground mt-0.5">
                Dropdown selection for choosing from predefined options.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Button</p>
              <p className="text-muted-foreground mt-0.5">
                Often paired with Textarea in forms for submit actions.
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
   Component: Select Docs
   ================================================================ */

function SelectPropsTable() {
  const props = [
    {
      name: "Select (Root)",
      type: "",
      default: "",
      description: "",
    },
    {
      name: "value",
      type: "string",
      default: "—",
      description: "The controlled value of the select.",
    },
    {
      name: "defaultValue",
      type: "string",
      default: "—",
      description: "The default value for uncontrolled usage.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      default: "—",
      description: "Callback when the selected value changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the entire select.",
    },
    {
      name: "open / onOpenChange",
      type: "boolean / (open: boolean) => void",
      default: "—",
      description: "Controlled open state of the dropdown.",
    },
    {
      name: "SelectTrigger",
      type: "",
      default: "",
      description: "",
    },
    {
      name: "size",
      type: '"lg" | "default" | "sm" | "xs"',
      default: '"default"',
      description: "The size of the trigger. Matches Input sizes.",
    },
    {
      name: "aria-invalid",
      type: "boolean",
      default: "false",
      description: "Marks the trigger as invalid with error styling.",
    },
    {
      name: "SelectItem",
      type: "",
      default: "",
      description: "",
    },
    {
      name: "value (item)",
      type: "string",
      default: "required",
      description: "The value submitted when this item is selected.",
    },
    {
      name: "disabled (item)",
      type: "boolean",
      default: "false",
      description: "Prevents this item from being selected.",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-muted border-b border-border text-left">
            <th className="px-4 py-3 font-semibold">Prop</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Default</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) =>
            p.type === "" ? (
              <tr key={p.name} className="border-b border-border bg-muted/50">
                <td className="px-4 py-2 font-mono text-xs font-bold text-foreground" colSpan={4}>
                  {p.name}
                </td>
              </tr>
            ) : (
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
            )
          )}
        </tbody>
      </table>
    </div>
  )
}

function SelectTokensTable() {
  const tokens = [
    {
      token: "--input",
      value: "hsl(0 0% 100%)",
      hex: "#ffffff",
      usage: "Trigger background",
    },
    {
      token: "--border",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Trigger & dropdown border",
    },
    {
      token: "--foreground",
      value: "hsl(60 4% 14%)",
      hex: "#252522",
      usage: "Selected value text",
    },
    {
      token: "--muted-foreground",
      value: "hsl(60 2% 68%)",
      hex: "#afafab",
      usage: "Placeholder text & chevron",
    },
    {
      token: "--muted",
      value: "hsl(60 4% 95.3%)",
      hex: "#f3f3f2",
      usage: "Item hover/focus background",
    },
    {
      token: "--ring",
      value: "hsl(60 5% 91%)",
      hex: "#e9e9e7",
      usage: "Focus ring (default state)",
    },
    {
      token: "--destructive-border",
      value: "hsl(0 84% 60%)",
      hex: "#ef4444",
      usage: "Error state border",
    },
    {
      token: "--ring-error",
      value: "hsl(0 93% 89%)",
      hex: "#fecaca",
      usage: "Error state focus ring",
    },
    {
      token: "--background",
      value: "hsl(0 0% 100%)",
      hex: "#ffffff",
      usage: "Dropdown content background",
    },
    {
      token: "--radius (rounded-lg)",
      value: "8px",
      hex: "—",
      usage: "Trigger & dropdown border radius",
    },
    {
      token: "--radius (rounded-md)",
      value: "6px",
      hex: "—",
      usage: "Item border radius",
    },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-muted border-b border-border text-left">
            <th className="px-4 py-3 font-semibold">Token</th>
            <th className="px-4 py-3 font-semibold">Value</th>
            <th className="px-4 py-3 font-semibold">Swatch</th>
            <th className="px-4 py-3 font-semibold">Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.token + t.usage} className="border-b border-border last:border-0">
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

function SelectDocs() {
  const [controlled, setControlled] = useState("")
  const [formRole, setFormRole] = useState("")
  const [formDept, setFormDept] = useState("")
  const [formErrors, setFormErrors] = useState<{ role?: string; dept?: string }>({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errors: { role?: string; dept?: string } = {}
    if (!formRole) errors.role = "Please select a role."
    if (!formDept) errors.dept = "Please select a department."
    setFormErrors(errors)
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true)
      setTimeout(() => setFormSubmitted(false), 3000)
    }
  }

  return (
    <div className="space-y-12">
      {/* ---- Header ---- */}
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="text-heading-3">Select</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          A dropdown control for selecting a single option from a list. Built on
          Radix UI Select for full keyboard navigation, accessibility, and
          portal-based positioning.
        </p>
      </header>

      {/* ---- Installation ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Installation</h2>
        <CodeBlock
          code={`# Install dependencies
pnpm add @radix-ui/react-select class-variance-authority clsx tailwind-merge lucide-react

# The component lives at:
# src/components/ui/select.tsx`}
        />
        <CodeBlock
          code={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`}
        />
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-3 gap-6">
        {/* Default */}
        <Example
          title="Default select"
          description="The basic select with placeholder text. Click to see the dropdown with options."
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
    <SelectItem value="mango">Mango</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectContent>
          </Select>
        </Example>

        {/* Sizes */}
        <Example
          title="Size"
          description="Selects come in 4 sizes to match Input: Large (40px), Regular (36px), Small (32px), and Mini (24px)."
          code={`<Select>
  <SelectTrigger size="lg">
    <SelectValue placeholder="Large (40px)" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>

<Select>
  <SelectTrigger size="default">
    <SelectValue placeholder="Regular (36px)" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>

<Select>
  <SelectTrigger size="sm">
    <SelectValue placeholder="Small (32px)" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>

<Select>
  <SelectTrigger size="xs">
    <SelectValue placeholder="Mini (24px)" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Select>
              <SelectTrigger size="lg">
                <SelectValue placeholder="Large (40px)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger size="default">
                <SelectValue placeholder="Regular (36px)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger size="sm">
                <SelectValue placeholder="Small (32px)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger size="xs">
                <SelectValue placeholder="Mini (24px)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Example>

        {/* Controlled */}
        <Example
          title="Controlled (onValueChange)"
          description="Use value + onValueChange for controlled selects."
          code={`const [controlled, setControlled] = useState("")

<Select value={controlled} onValueChange={setControlled}>
  <SelectTrigger>
    <SelectValue placeholder="Choose a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="utc">UTC</SelectItem>
    <SelectItem value="est">Eastern (EST)</SelectItem>
    <SelectItem value="cst">Central (CST)</SelectItem>
    <SelectItem value="pst">Pacific (PST)</SelectItem>
  </SelectContent>
</Select>
<p>Selected: {controlled || "none"}</p>`}
        >
          <div className="max-w-sm w-full space-y-2">
            <Select value={controlled} onValueChange={setControlled}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="est">Eastern (EST)</SelectItem>
                <SelectItem value="cst">Central (CST)</SelectItem>
                <SelectItem value="pst">Pacific (PST)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Selected: {controlled || "none"}
            </p>
          </div>
        </Example>

        {/* With default value */}
        <Example
          title="Default value"
          description="Use defaultValue for uncontrolled selects with a pre-selected option."
          code={`<Select defaultValue="medium">
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="low">Low priority</SelectItem>
    <SelectItem value="medium">Medium priority</SelectItem>
    <SelectItem value="high">High priority</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select defaultValue="medium">
            <SelectTrigger className="max-w-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low priority</SelectItem>
              <SelectItem value="medium">Medium priority</SelectItem>
              <SelectItem value="high">High priority</SelectItem>
            </SelectContent>
          </Select>
        </Example>

        {/* With groups */}
        <Example
          title="Grouped options"
          description="Use SelectGroup and SelectLabel to organize options into categories. Use SelectSeparator between groups."
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a role" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Engineering</SelectLabel>
      <SelectItem value="frontend">Frontend Developer</SelectItem>
      <SelectItem value="backend">Backend Developer</SelectItem>
      <SelectItem value="fullstack">Fullstack Developer</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Design</SelectLabel>
      <SelectItem value="ux">UX Designer</SelectItem>
      <SelectItem value="ui">UI Designer</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Engineering</SelectLabel>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="fullstack">Fullstack Developer</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Design</SelectLabel>
                <SelectItem value="ux">UX Designer</SelectItem>
                <SelectItem value="ui">UI Designer</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Example>

        {/* Disabled items */}
        <Example
          title="Disabled items"
          description="Individual items can be disabled to prevent selection while remaining visible."
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a plan" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="free">Free</SelectItem>
    <SelectItem value="pro">Pro</SelectItem>
    <SelectItem value="enterprise" disabled>Enterprise (Contact us)</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="Select a plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
              <SelectItem value="enterprise" disabled>Enterprise (Contact us)</SelectItem>
            </SelectContent>
          </Select>
        </Example>

        {/* Error state */}
        <Example
          title="Error state"
          description="Use aria-invalid on the trigger to show error styling. The border turns red and the focus ring becomes red-200."
          code={`<div className="space-y-1.5">
  <Select>
    <SelectTrigger aria-invalid>
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
    </SelectContent>
  </Select>
  <p className="text-xs text-red-500">
    Please select a country.
  </p>
</div>`}
        >
          <div className="max-w-sm w-full space-y-1.5">
            <Select>
              <SelectTrigger aria-invalid>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-red-500">
              Please select a country.
            </p>
          </div>
        </Example>

        {/* Disabled */}
        <Example
          title="Disabled state"
          description="Disable the entire select to prevent interaction. The trigger shows 50% opacity."
          code={`<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select disabled>
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="Disabled select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
        </Example>

        {/* With label */}
        <Example
          title="With label"
          description="Always pair selects with a visible label for accessibility."
          code={`<div className="space-y-1.5 max-w-sm">
  <label className="text-sm font-medium">Country</label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
    </SelectContent>
  </Select>
</div>`}
        >
          <div className="space-y-1.5 max-w-sm w-full">
            <label className="text-sm font-medium">Country</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Example>

        {/* Long list */}
        <Example
          title="Long list with scroll"
          description="Lists with many items automatically show scroll indicators. Keyboard navigation works with arrow keys."
          code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a month" />
  </SelectTrigger>
  <SelectContent>
    {months.map((m) => (
      <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>
    ))}
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="max-w-sm">
              <SelectValue placeholder="Select a month" />
            </SelectTrigger>
            <SelectContent>
              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m) => (
                <SelectItem key={m} value={m.toLowerCase()}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Example>

        {/* Form with validation */}
        <Example
          title="Form with validation (fully interactive)"
          description="A complete form with two selects and validation. Try submitting without selecting to see errors."
          code={`const [formRole, setFormRole] = useState("")
const [formDept, setFormDept] = useState("")
const [formErrors, setFormErrors] = useState({})

const handleSubmit = (e) => {
  e.preventDefault()
  const errors = {}
  if (!formRole) errors.role = "Please select a role."
  if (!formDept) errors.dept = "Please select a department."
  setFormErrors(errors)
  if (Object.keys(errors).length === 0) { /* submit */ }
}

<form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
  <div className="space-y-1.5">
    <label className="text-sm font-medium">Role</label>
    <Select value={formRole} onValueChange={setFormRole}>
      <SelectTrigger aria-invalid={!!formErrors.role || undefined}>
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dev">Developer</SelectItem>
        <SelectItem value="designer">Designer</SelectItem>
        <SelectItem value="pm">Product Manager</SelectItem>
      </SelectContent>
    </Select>
    {formErrors.role && <p className="text-xs text-red-500">{formErrors.role}</p>}
  </div>
  ...
  <Button type="submit" className="w-full">Submit</Button>
</form>`}
        >
          <form onSubmit={handleFormSubmit} className="space-y-4 max-w-sm w-full">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Role</label>
              <Select value={formRole} onValueChange={setFormRole}>
                <SelectTrigger aria-invalid={!!formErrors.role || undefined}>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dev">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="pm">Product Manager</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.role && <p className="text-xs text-red-500">{formErrors.role}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Department</label>
              <Select value={formDept} onValueChange={setFormDept}>
                <SelectTrigger aria-invalid={!!formErrors.dept || undefined}>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.dept && <p className="text-xs text-red-500">{formErrors.dept}</p>}
            </div>
            <Button type="submit" className="w-full">
              {formSubmitted ? <><Check /> Submitted!</> : "Submit"}
            </Button>
          </form>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Select is a compound component built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            @radix-ui/react-select
          </code>
          . Key props by sub-component:
        </p>
        <SelectPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            src/index.css
          </code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <SelectTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">When to use Select vs other patterns</h3>
          <div className="rounded-xl border border-border p-5 text-xs space-y-2 text-muted-foreground">
            <p>
              <strong className="text-foreground">Select</strong> — Use when
              picking one option from 5-15 predefined choices (country, role,
              priority).
            </p>
            <p>
              <strong className="text-foreground">Radio Group</strong> — Use
              when there are 2-5 options and all should be visible at once.
            </p>
            <p>
              <strong className="text-foreground">Combobox</strong> — Use when
              the list is very long (50+) and users need to search/filter.
            </p>
            <p>
              <strong className="text-foreground">Input</strong> — Use for
              free-form text where predefined options don't cover all cases.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content & organization</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Use clear, concise labels for each option.
              </p>
              <p>
                Group related options with{" "}
                <code className="bg-muted px-1 rounded font-mono text-[10px]">SelectGroup</code>{" "}
                + <code className="bg-muted px-1 rounded font-mono text-[10px]">SelectLabel</code>{" "}
                when there are more than 7 items.
              </p>
              <p>
                Order options logically: alphabetical, by frequency, or by hierarchy.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use Select for yes/no or on/off choices — use a Switch or Checkbox instead.
              </p>
              <p>
                Don't put more than 15-20 items without grouping or search — use a Combobox.
              </p>
              <p>
                Don't use vague placeholder text like "Select" — be specific: "Select a country".
              </p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Form integration</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Always pair with a visible <strong>label</strong> above the trigger.
              </p>
              <p>
                Match Select size to adjacent Input sizes for visual consistency in forms.
              </p>
              <p>
                Show validation errors below the trigger, same as Input.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't rely on the placeholder as a label — it disappears when a value is selected.
              </p>
              <p>
                Don't mix Select sizes with different Input sizes in the same form row.
              </p>
            </DontItem>
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
          file (node 16:1732).
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
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
                ["State", "Error Focus", "aria-invalid", "true + :focus-visible"],
                ["State", "Disabled", "disabled", "true (on Select root)"],
                ["Value", "Placeholder", "—", '<SelectValue placeholder="..." />'],
                ["Value", "Value", "value / defaultValue", "string"],
                ["Lines", "1 Line", "—", "[&>span]:line-clamp-1"],
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
                  {[
                    ["Space / Enter", "Open dropdown or select focused item"],
                    ["Arrow Down", "Move focus to next item"],
                    ["Arrow Up", "Move focus to previous item"],
                    ["Home / End", "Move focus to first / last item"],
                    ["Escape", "Close dropdown without selecting"],
                    ["Type character", "Jump to first matching item"],
                  ].map(([key, action]) => (
                    <tr key={key} className="border-b border-border">
                      <td className="pr-6 py-2">
                        <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                          {key}
                        </kbd>
                      </td>
                      <td className="pr-6 py-2 text-muted-foreground">
                        {action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              ARIA & semantics
            </h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                Radix Select automatically applies{" "}
                <code className="bg-muted px-1 rounded font-mono">role="combobox"</code>{" "}
                to the trigger and{" "}
                <code className="bg-muted px-1 rounded font-mono">role="listbox"</code>{" "}
                to the content.
              </li>
              <li>
                Selected item is announced via{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-selected</code>.
              </li>
              <li>
                Always provide a visible label or{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-label</code>{" "}
                on the trigger for screen readers.
              </li>
              <li>
                Use{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-invalid</code>{" "}
                on the trigger to announce error state.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Focus indicator
            </h3>
            <p className="text-muted-foreground">
              The trigger displays a visible <strong>3px ring</strong> on{" "}
              <code className="bg-muted px-1 rounded font-mono">
                :focus-visible
              </code>
              . The ring uses{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --ring (#e9e9e7)
              </code>{" "}
              for the default state and{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --ring-error (#fecaca)
              </code>{" "}
              when{" "}
              <code className="bg-muted px-1 rounded font-mono">
                aria-invalid
              </code>{" "}
              is set. Dropdown items highlight with{" "}
              <code className="bg-muted px-1 rounded font-mono">
                bg-muted
              </code>{" "}
              on focus.
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
              <p className="font-semibold text-foreground">Input</p>
              <p className="text-muted-foreground mt-0.5">
                Single-line text input for free-form data entry.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Textarea</p>
              <p className="text-muted-foreground mt-0.5">
                Multi-line text input for longer content.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Combobox</p>
              <p className="text-muted-foreground mt-0.5">
                Searchable dropdown for large option lists with filtering.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Radio Group</p>
              <p className="text-muted-foreground mt-0.5">
                Visible choice group for 2-5 mutually exclusive options.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Checkbox Docs
   ================================================================ */

function CheckboxDocs() {
  const [checked1, setChecked1] = useState<boolean | "indeterminate">(false)
  const [items, setItems] = useState([
    { id: "terms", label: "Accept terms and conditions", checked: false },
    { id: "newsletter", label: "Subscribe to newsletter", checked: false },
    { id: "updates", label: "Receive product updates", checked: true },
  ])
  const [formError, setFormError] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const allChecked = items.every((i) => i.checked)
  const someChecked = items.some((i) => i.checked) && !allChecked

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i))
    )
  }

  const toggleAll = () => {
    const next = !allChecked
    setItems((prev) => prev.map((i) => ({ ...i, checked: next })))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const termsCheckbox = form.querySelector(
      'button[name="agree"]'
    ) as HTMLElement | null
    const isChecked = termsCheckbox?.getAttribute("data-state") === "checked"
    if (!isChecked) {
      setFormError("You must agree to the terms.")
      return
    }
    setFormError("")
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="space-y-12">
      {/* ---- Header ---- */}
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="text-heading-3">Checkbox</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          A 16×16 toggle for boolean or tri-state values. Supports checked,
          unchecked, and indeterminate states with full keyboard navigation.
        </p>
      </header>

      {/* ---- Installation ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Installation</h2>
        <CodeBlock
          code={`# Install dependencies
pnpm add @radix-ui/react-checkbox lucide-react

# The component lives at:
# src/components/ui/checkbox.tsx`}
        />
        <CodeBlock
          code={`import { Checkbox } from "@/components/ui/checkbox"`}
        />
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Default */}
          <Example
            title="Default checkbox"
            description="Basic unchecked checkbox. Click to toggle."
            code={`<Checkbox />`}
          >
            <Checkbox />
          </Example>

          {/* Checked by default */}
          <Example
            title="Default checked"
            description="Use defaultChecked for uncontrolled checkboxes that start checked."
            code={`<Checkbox defaultChecked />`}
          >
            <Checkbox defaultChecked />
          </Example>

          {/* Controlled */}
          <Example
            title="Controlled"
            description="Use checked + onCheckedChange for controlled state."
            code={`const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={(v) => setChecked(v as boolean)}
/>`}
          >
            <div className="flex items-center gap-2">
              <Checkbox
                checked={checked1 === true}
                onCheckedChange={(v) => setChecked1(v as boolean)}
                id="ctrl"
              />
              <label htmlFor="ctrl" className="text-sm cursor-pointer select-none">
                {checked1 ? "Checked" : "Unchecked"}
              </label>
            </div>
          </Example>

          {/* With label */}
          <Example
            title="With label"
            description="Pair with a <label> via matching id/htmlFor for accessible click targets."
            code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm">
    Accept terms and conditions
  </label>
</div>`}
          >
            <div className="flex items-center gap-2">
              <Checkbox id="terms-demo" />
              <label
                htmlFor="terms-demo"
                className="text-sm cursor-pointer select-none"
              >
                Accept terms and conditions
              </label>
            </div>
          </Example>

          {/* Indeterminate */}
          <Example
            title="Indeterminate"
            description='Use checked="indeterminate" for a mixed/partial state, commonly used in "select all" patterns.'
            code={`<Checkbox checked="indeterminate" />`}
          >
            <div className="flex items-center gap-2">
              <Checkbox checked="indeterminate" />
              <span className="text-sm text-muted-foreground">
                Indeterminate
              </span>
            </div>
          </Example>

          {/* Disabled */}
          <Example
            title="Disabled"
            description="Disabled checkboxes are non-interactive and visually dimmed."
            code={`<Checkbox disabled />
<Checkbox disabled defaultChecked />`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox disabled id="dis-off" />
                <label htmlFor="dis-off" className="text-sm text-muted-foreground">
                  Disabled
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox disabled defaultChecked id="dis-on" />
                <label htmlFor="dis-on" className="text-sm text-muted-foreground">
                  Disabled checked
                </label>
              </div>
            </div>
          </Example>

          {/* Error state */}
          <Example
            title="Error state"
            description="Use aria-invalid to show destructive styling for validation errors."
            code={`<Checkbox aria-invalid />
<Checkbox aria-invalid defaultChecked />`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox aria-invalid id="err-off" />
                <label htmlFor="err-off" className="text-sm text-destructive">
                  Error unchecked
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox aria-invalid defaultChecked id="err-on" />
                <label htmlFor="err-on" className="text-sm text-destructive">
                  Error checked
                </label>
              </div>
            </div>
          </Example>

          {/* Checkbox group */}
          <Example
            title="Checkbox group"
            description="Multiple checkboxes forming a selection group. Each item operates independently."
            code={`<fieldset className="space-y-2">
  <legend className="text-sm font-medium">
    Notifications
  </legend>
  <div className="flex items-center gap-2">
    <Checkbox id="email" defaultChecked />
    <label htmlFor="email">Email</label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="sms" />
    <label htmlFor="sms">SMS</label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="push" />
    <label htmlFor="push">Push</label>
  </div>
</fieldset>`}
          >
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium">Notifications</legend>
              <div className="flex items-center gap-2">
                <Checkbox id="g-email" defaultChecked />
                <label htmlFor="g-email" className="text-sm cursor-pointer select-none">
                  Email
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="g-sms" />
                <label htmlFor="g-sms" className="text-sm cursor-pointer select-none">
                  SMS
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="g-push" />
                <label htmlFor="g-push" className="text-sm cursor-pointer select-none">
                  Push
                </label>
              </div>
            </fieldset>
          </Example>

          {/* Select all / indeterminate pattern */}
          <Example
            title="Select all (indeterminate)"
            description='A "select all" parent checkbox that shows indeterminate when some children are checked.'
            code={`const allChecked = items.every(i => i.checked)
const someChecked = items.some(i => i.checked) && !allChecked

<Checkbox
  checked={allChecked ? true : someChecked ? "indeterminate" : false}
  onCheckedChange={toggleAll}
/>
{items.map(i => (
  <Checkbox
    key={i.id}
    checked={i.checked}
    onCheckedChange={() => toggleItem(i.id)}
  />
))}`}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Checkbox
                  checked={
                    allChecked ? true : someChecked ? "indeterminate" : false
                  }
                  onCheckedChange={toggleAll}
                  id="select-all"
                />
                <label
                  htmlFor="select-all"
                  className="text-sm font-medium cursor-pointer select-none"
                >
                  Select all
                </label>
              </div>
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-2 pl-4">
                  <Checkbox
                    checked={item.checked}
                    onCheckedChange={() => toggleItem(item.id)}
                    id={`sa-${item.id}`}
                  />
                  <label
                    htmlFor={`sa-${item.id}`}
                    className="text-sm cursor-pointer select-none"
                  >
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </Example>

          {/* With description */}
          <Example
            title="With description"
            description="Label + supporting text for more context about what the checkbox controls."
            code={`<div className="flex gap-2">
  <Checkbox id="marketing" className="mt-0.5" />
  <div>
    <label htmlFor="marketing" className="text-sm font-medium">
      Marketing emails
    </label>
    <p className="text-xs text-muted-foreground">
      Receive emails about new products and features.
    </p>
  </div>
</div>`}
          >
            <div className="flex gap-2">
              <Checkbox id="marketing-demo" className="mt-0.5" />
              <div>
                <label
                  htmlFor="marketing-demo"
                  className="text-sm font-medium cursor-pointer select-none"
                >
                  Marketing emails
                </label>
                <p className="text-xs text-muted-foreground">
                  Receive emails about new products and features.
                </p>
              </div>
            </div>
          </Example>

          {/* Form with validation */}
          <Example
            title="Form with validation"
            description="Checkbox in a form that requires agreement before submission."
            code={`<form onSubmit={handleSubmit}>
  <Checkbox name="agree" aria-invalid={!!error} />
  <label>I agree to the terms</label>
  {error && <p className="text-destructive">{error}</p>}
  <Button type="submit">Submit</Button>
</form>`}
          >
            <form
              onSubmit={handleFormSubmit}
              className="space-y-3 max-w-xs w-full"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  name="agree"
                  aria-invalid={!!formError}
                  id="form-agree"
                />
                <label
                  htmlFor="form-agree"
                  className={`text-sm cursor-pointer select-none ${
                    formError ? "text-destructive" : ""
                  }`}
                >
                  I agree to the terms
                </label>
              </div>
              {formError && (
                <p className="text-xs text-destructive">{formError}</p>
              )}
              <Button type="submit" size="sm">
                {formSubmitted ? "Submitted!" : "Submit"}
              </Button>
            </form>
          </Example>

          {/* Custom styling */}
          <Example
            title="Custom size"
            description="Override size with className. The checkbox base is 16px (size-4)."
            code={`<Checkbox className="size-5 rounded" />
<Checkbox className="size-6 rounded-md" />`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox className="size-5 rounded" defaultChecked id="sz-md" />
                <label htmlFor="sz-md" className="text-sm">20px</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="size-6 rounded-md" defaultChecked id="sz-lg" />
                <label htmlFor="sz-lg" className="text-sm">24px</label>
              </div>
            </div>
          </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Extends <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
          Radix CheckboxPrimitive.Root</code> — all native props forwarded.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-2 font-medium">Prop</th>
                <th className="text-left px-4 py-2 font-medium">Type</th>
                <th className="text-left px-4 py-2 font-medium">Default</th>
                <th className="text-left px-4 py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">checked</td>
                <td className="px-4 py-2 font-mono text-xs">boolean | "indeterminate"</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Controlled checked state</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">defaultChecked</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">false</td>
                <td className="px-4 py-2 text-muted-foreground">Initial checked state (uncontrolled)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">onCheckedChange</td>
                <td className="px-4 py-2 font-mono text-xs">{"(checked: boolean | \"indeterminate\") => void"}</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Called when checked state changes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">disabled</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">false</td>
                <td className="px-4 py-2 text-muted-foreground">Disables the checkbox</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">name</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Form field name</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">value</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 text-muted-foreground">"on"</td>
                <td className="px-4 py-2 text-muted-foreground">Value submitted with forms</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">required</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">false</td>
                <td className="px-4 py-2 text-muted-foreground">Marks the checkbox as required</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">aria-invalid</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Triggers error styling (destructive border & fill)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">className</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Additional CSS classes merged via cn()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-2 font-medium">Token</th>
                <th className="text-left px-4 py-2 font-medium">Role</th>
                <th className="text-left px-4 py-2 font-medium">CSS Variable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">border</td>
                <td className="px-4 py-2 text-muted-foreground">Unchecked border</td>
                <td className="px-4 py-2 font-mono text-xs">--border</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">input</td>
                <td className="px-4 py-2 text-muted-foreground">Unchecked background</td>
                <td className="px-4 py-2 font-mono text-xs">--input</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">primary</td>
                <td className="px-4 py-2 text-muted-foreground">Checked background & border</td>
                <td className="px-4 py-2 font-mono text-xs">--primary</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">primary-foreground</td>
                <td className="px-4 py-2 text-muted-foreground">Check icon color</td>
                <td className="px-4 py-2 font-mono text-xs">--primary-foreground</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">ring</td>
                <td className="px-4 py-2 text-muted-foreground">Focus ring</td>
                <td className="px-4 py-2 font-mono text-xs">--ring</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">destructive</td>
                <td className="px-4 py-2 text-muted-foreground">Error checked fill</td>
                <td className="px-4 py-2 font-mono text-xs">--destructive</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">destructive-border</td>
                <td className="px-4 py-2 text-muted-foreground">Error unchecked border</td>
                <td className="px-4 py-2 font-mono text-xs">--destructive-border</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">ring-error</td>
                <td className="px-4 py-2 text-muted-foreground">Error focus ring</td>
                <td className="px-4 py-2 font-mono text-xs">--ring-error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Always pair with a visible <label> linked via id/htmlFor for accessibility." />
          <DontItem text="Don't use a checkbox for actions — use a Switch or Button instead." />
          <DoItem text="Use indeterminate for 'select all' when some but not all children are checked." />
          <DontItem text="Don't use indeterminate to mean 'no value' — leave it unchecked instead." />
          <DoItem text="Group related checkboxes in a <fieldset> with a <legend>." />
          <DontItem text="Don't use checkboxes for mutually exclusive options — use Radio Group." />
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Figma Mapping</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-2 font-medium">Figma Property</th>
                <th className="text-left px-4 py-2 font-medium">Code Prop</th>
                <th className="text-left px-4 py-2 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Checked = False</td>
                <td className="px-4 py-2 font-mono text-xs">checked=&#123;false&#125;</td>
                <td className="px-4 py-2 text-muted-foreground">Default unchecked state</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Checked = True</td>
                <td className="px-4 py-2 font-mono text-xs">checked=&#123;true&#125;</td>
                <td className="px-4 py-2 text-muted-foreground">Shows check icon</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Checked = Indeterminate</td>
                <td className="px-4 py-2 font-mono text-xs">checked="indeterminate"</td>
                <td className="px-4 py-2 text-muted-foreground">Shows minus icon</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">State = Default</td>
                <td className="px-4 py-2 font-mono text-xs">—</td>
                <td className="px-4 py-2 text-muted-foreground">Resting state</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">State = Focus</td>
                <td className="px-4 py-2 font-mono text-xs">:focus-visible</td>
                <td className="px-4 py-2 text-muted-foreground">3px ring</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">State = Error</td>
                <td className="px-4 py-2 font-mono text-xs">aria-invalid</td>
                <td className="px-4 py-2 text-muted-foreground">Destructive colors</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">State = Disabled</td>
                <td className="px-4 py-2 font-mono text-xs">disabled</td>
                <td className="px-4 py-2 text-muted-foreground">50% opacity, no-pointer</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          Figma component set: <code className="bg-muted px-1.5 py-0.5 rounded">node 16:1790</code> in [SprouX - DS] Foundation & Component
        </p>
      </section>

      {/* ---- Accessibility ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>Built on Radix Checkbox — renders a native <code className="text-xs bg-muted px-1.5 py-0.5 rounded">button</code> with <code className="text-xs bg-muted px-1.5 py-0.5 rounded">role="checkbox"</code>.</li>
          <li>Supports <code className="text-xs bg-muted px-1.5 py-0.5 rounded">aria-checked="true" | "false" | "mixed"</code> automatically.</li>
          <li><code className="text-xs bg-muted px-1.5 py-0.5 rounded">Space</code> key toggles the checkbox (native button behavior).</li>
          <li>Always pair with a visible <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<label>"}</code> or <code className="text-xs bg-muted px-1.5 py-0.5 rounded">aria-label</code>.</li>
          <li>Error state uses <code className="text-xs bg-muted px-1.5 py-0.5 rounded">aria-invalid</code> for screen reader announcements.</li>
          <li>Focus ring is 3px with <code className="text-xs bg-muted px-1.5 py-0.5 rounded">--ring</code> token, meeting WCAG 2.4.7.</li>
        </ul>
      </section>

      {/* ---- Related Components ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-lg border border-border divide-y divide-border">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Switch</p>
              <p className="text-muted-foreground mt-0.5">
                Toggle for on/off settings where the change takes immediate effect.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Radio Group</p>
              <p className="text-muted-foreground mt-0.5">
                For mutually exclusive choices where only one option can be selected.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Toggle</p>
              <p className="text-muted-foreground mt-0.5">
                A pressable button that toggles between two states.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Switch Docs
   ================================================================ */

function SwitchDocs() {
  const [checked, setChecked] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false,
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="space-y-12">
      {/* ---- Header ---- */}
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="text-heading-3">Switch</h1>
        <p className="text-paragraph-sm text-muted-foreground max-w-2xl">
          A toggle control for binary on/off settings. Unlike Checkbox, the
          switch implies an immediate effect — the setting takes effect as soon
          as it is toggled.
        </p>
      </header>

      {/* ---- Installation ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Installation</h2>
        <CodeBlock
          code={`# Install dependencies
pnpm add @radix-ui/react-switch

# The component lives at:
# src/components/ui/switch.tsx`}
        />
        <CodeBlock
          code={`import { Switch } from "@/components/ui/switch"`}
        />
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-6">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-3 gap-6">
          {/* Default */}
          <Example
            title="Default switch"
            description="Basic unchecked switch. Click to toggle."
            code={`<Switch />`}
          >
            <Switch />
          </Example>

          {/* Default checked */}
          <Example
            title="Default checked"
            description="Use defaultChecked for uncontrolled switches that start in the on state."
            code={`<Switch defaultChecked />`}
          >
            <Switch defaultChecked />
          </Example>

          {/* Controlled */}
          <Example
            title="Controlled"
            description="Use checked + onCheckedChange for controlled state."
            code={`const [checked, setChecked] = useState(false)

<Switch
  checked={checked}
  onCheckedChange={setChecked}
/>`}
          >
            <div className="flex items-center gap-3">
              <Switch
                checked={checked}
                onCheckedChange={setChecked}
                id="ctrl-switch"
              />
              <label htmlFor="ctrl-switch" className="text-sm cursor-pointer select-none">
                {checked ? "On" : "Off"}
              </label>
            </div>
          </Example>

          {/* With label */}
          <Example
            title="With label"
            description="Pair with a <label> via matching id/htmlFor for accessible click targets."
            code={`<div className="flex items-center gap-3">
  <Switch id="airplane" />
  <label htmlFor="airplane" className="text-sm">
    Airplane Mode
  </label>
</div>`}
          >
            <div className="flex items-center gap-3">
              <Switch id="airplane-demo" />
              <label
                htmlFor="airplane-demo"
                className="text-sm cursor-pointer select-none"
              >
                Airplane Mode
              </label>
            </div>
          </Example>

          {/* Disabled */}
          <Example
            title="Disabled"
            description="Disabled switches are non-interactive and visually dimmed to 50% opacity."
            code={`<Switch disabled />
<Switch disabled defaultChecked />`}
          >
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Switch disabled id="dis-off-sw" />
                <label htmlFor="dis-off-sw" className="text-sm text-muted-foreground">
                  Disabled off
                </label>
              </div>
              <div className="flex items-center gap-3">
                <Switch disabled defaultChecked id="dis-on-sw" />
                <label htmlFor="dis-on-sw" className="text-sm text-muted-foreground">
                  Disabled on
                </label>
              </div>
            </div>
          </Example>

          {/* With description */}
          <Example
            title="With description"
            description="Label + supporting text for more context about what the switch controls."
            code={`<div className="flex items-center justify-between">
  <div>
    <label htmlFor="dark" className="text-sm font-medium">
      Dark mode
    </label>
    <p className="text-xs text-muted-foreground">
      Switch between light and dark themes.
    </p>
  </div>
  <Switch id="dark" />
</div>`}
          >
            <div className="flex items-center justify-between gap-4 max-w-xs w-full">
              <div>
                <label
                  htmlFor="dark-demo"
                  className="text-sm font-medium cursor-pointer select-none"
                >
                  Dark mode
                </label>
                <p className="text-xs text-muted-foreground">
                  Switch between light and dark themes.
                </p>
              </div>
              <Switch
                id="dark-demo"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </Example>

          {/* Settings list */}
          <Example
            title="Settings list"
            description="Multiple switches in a settings-style layout with labels and descriptions."
            code={`<div className="divide-y divide-border">
  {settings.map(s => (
    <div key={s.id} className="flex items-center justify-between py-3">
      <div>
        <label>{s.label}</label>
        <p>{s.description}</p>
      </div>
      <Switch checked={s.checked} onCheckedChange={...} />
    </div>
  ))}
</div>`}
          >
            <div className="divide-y divide-border max-w-xs w-full">
              <div className="flex items-center justify-between gap-4 py-3">
                <div>
                  <label
                    htmlFor="set-email"
                    className="text-sm font-medium cursor-pointer select-none"
                  >
                    Email notifications
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Receive email alerts
                  </p>
                </div>
                <Switch
                  id="set-email"
                  checked={notifications.email}
                  onCheckedChange={(v) =>
                    setNotifications((p) => ({ ...p, email: v }))
                  }
                />
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <div>
                  <label
                    htmlFor="set-push"
                    className="text-sm font-medium cursor-pointer select-none"
                  >
                    Push notifications
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Browser push alerts
                  </p>
                </div>
                <Switch
                  id="set-push"
                  checked={notifications.push}
                  onCheckedChange={(v) =>
                    setNotifications((p) => ({ ...p, push: v }))
                  }
                />
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <div>
                  <label
                    htmlFor="set-mkt"
                    className="text-sm font-medium cursor-pointer select-none"
                  >
                    Marketing emails
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Product news & offers
                  </p>
                </div>
                <Switch
                  id="set-mkt"
                  checked={notifications.marketing}
                  onCheckedChange={(v) =>
                    setNotifications((p) => ({ ...p, marketing: v }))
                  }
                />
              </div>
            </div>
          </Example>

          {/* In a card */}
          <Example
            title="Card layout"
            description="Switch used inside a card component for feature toggles."
            code={`<div className="rounded-lg border p-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="font-medium">Auto-save</p>
      <p className="text-xs text-muted-foreground">
        Automatically save changes
      </p>
    </div>
    <Switch defaultChecked />
  </div>
</div>`}
          >
            <div className="rounded-lg border border-border bg-background p-4 max-w-xs w-full">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Auto-save</p>
                  <p className="text-xs text-muted-foreground">
                    Automatically save changes as you type
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Example>

          {/* Form usage */}
          <Example
            title="Form with switch"
            description="Switch inside a form. The name and value are submitted with the form data."
            code={`<form onSubmit={handleSubmit}>
  <Switch name="newsletter" />
  <label>Subscribe to newsletter</label>
  <Button type="submit">Save</Button>
</form>`}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setFormSubmitted(true)
                setTimeout(() => setFormSubmitted(false), 3000)
              }}
              className="space-y-3 max-w-xs w-full"
            >
              <div className="flex items-center gap-3">
                <Switch name="newsletter" id="form-newsletter" />
                <label
                  htmlFor="form-newsletter"
                  className="text-sm cursor-pointer select-none"
                >
                  Subscribe to newsletter
                </label>
              </div>
              <Button type="submit" size="sm">
                {formSubmitted ? "Saved!" : "Save preferences"}
              </Button>
            </form>
          </Example>

          {/* Right-to-left label */}
          <Example
            title="Label on left"
            description="Place the label before the switch for left-to-right reading flow in settings panels."
            code={`<label className="flex items-center justify-between w-full">
  <span className="text-sm font-medium">Wi-Fi</span>
  <Switch />
</label>`}
          >
            <label className="flex items-center justify-between max-w-xs w-full cursor-pointer">
              <span className="text-sm font-medium select-none">Wi-Fi</span>
              <Switch />
            </label>
          </Example>

          {/* Compact inline */}
          <Example
            title="Compact inline"
            description="Switch used inline with text in a more compact layout."
            code={`<p className="text-sm flex items-center gap-2">
  Show completed tasks <Switch defaultChecked />
</p>`}
          >
            <p className="text-sm flex items-center gap-2">
              Show completed tasks <Switch defaultChecked />
            </p>
          </Example>

          {/* Custom size */}
          <Example
            title="Custom size"
            description="Override dimensions with className. The default is 33×18px per Figma spec."
            code={`{/* Larger */}
<Switch className="h-6 w-11 [&>span]:size-5
  [&>span]:data-[state=checked]:translate-x-5" />`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Switch
                  className="h-6 w-11 [&>span]:size-5 [&>span]:data-[state=checked]:translate-x-5"
                  defaultChecked
                />
                <span className="text-sm">Large (44×24)</span>
              </div>
            </div>
          </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="text-paragraph-sm text-muted-foreground">
          Extends <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
          Radix SwitchPrimitive.Root</code> — all native props forwarded.
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-2 font-medium">Prop</th>
                <th className="text-left px-4 py-2 font-medium">Type</th>
                <th className="text-left px-4 py-2 font-medium">Default</th>
                <th className="text-left px-4 py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">checked</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Controlled checked state</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">defaultChecked</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">false</td>
                <td className="px-4 py-2 text-muted-foreground">Initial checked state (uncontrolled)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">onCheckedChange</td>
                <td className="px-4 py-2 font-mono text-xs">{"(checked: boolean) => void"}</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Called when checked state changes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">disabled</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">false</td>
                <td className="px-4 py-2 text-muted-foreground">Disables the switch</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">required</td>
                <td className="px-4 py-2 font-mono text-xs">boolean</td>
                <td className="px-4 py-2 text-muted-foreground">false</td>
                <td className="px-4 py-2 text-muted-foreground">Marks the switch as required for forms</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">name</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Form field name</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">value</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 text-muted-foreground">"on"</td>
                <td className="px-4 py-2 text-muted-foreground">Value submitted with forms</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">className</td>
                <td className="px-4 py-2 font-mono text-xs">string</td>
                <td className="px-4 py-2 text-muted-foreground">—</td>
                <td className="px-4 py-2 text-muted-foreground">Additional CSS classes merged via cn()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-2 font-medium">Token</th>
                <th className="text-left px-4 py-2 font-medium">Role</th>
                <th className="text-left px-4 py-2 font-medium">CSS Variable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">input</td>
                <td className="px-4 py-2 text-muted-foreground">Unchecked track background</td>
                <td className="px-4 py-2 font-mono text-xs">--input</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">primary</td>
                <td className="px-4 py-2 text-muted-foreground">Checked track background</td>
                <td className="px-4 py-2 font-mono text-xs">--primary</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">background</td>
                <td className="px-4 py-2 text-muted-foreground">Thumb color (always white)</td>
                <td className="px-4 py-2 font-mono text-xs">--background</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">ring</td>
                <td className="px-4 py-2 text-muted-foreground">Focus ring (3px spread)</td>
                <td className="px-4 py-2 font-mono text-xs">--ring</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Switch for settings that take immediate effect (e.g. dark mode, notifications)." />
          <DontItem text="Don't use Switch when the change requires a form submission — use Checkbox instead." />
          <DoItem text="Always pair with a visible label describing what the switch controls." />
          <DontItem text="Don't use a switch for agreeing to terms — use a Checkbox." />
          <DoItem text="Place the switch to the right of its label in settings panels for consistent scan pattern." />
          <DontItem text="Don't use Switch for mutually exclusive options — use Radio Group instead." />
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Figma Mapping</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-2 font-medium">Figma Property</th>
                <th className="text-left px-4 py-2 font-medium">Code Prop</th>
                <th className="text-left px-4 py-2 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Checked? = False</td>
                <td className="px-4 py-2 font-mono text-xs">checked=&#123;false&#125;</td>
                <td className="px-4 py-2 text-muted-foreground">Neutral track, thumb left</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">Checked? = True</td>
                <td className="px-4 py-2 font-mono text-xs">checked=&#123;true&#125;</td>
                <td className="px-4 py-2 text-muted-foreground">Primary track, thumb right</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">State = Default</td>
                <td className="px-4 py-2 font-mono text-xs">—</td>
                <td className="px-4 py-2 text-muted-foreground">Resting state</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">State = Focus</td>
                <td className="px-4 py-2 font-mono text-xs">:focus-visible</td>
                <td className="px-4 py-2 text-muted-foreground">3px ring via box-shadow</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-xs">State = Disabled</td>
                <td className="px-4 py-2 font-mono text-xs">disabled</td>
                <td className="px-4 py-2 text-muted-foreground">50% opacity, no pointer</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          Figma component set: <code className="bg-muted px-1.5 py-0.5 rounded">node 16:1801</code> in [SprouX - DS] Foundation & Component.
          Track 33×18px, thumb 16×16px circle, 1px inset padding, 12px border-radius (pill).
        </p>
      </section>

      {/* ---- Accessibility ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>Built on Radix Switch — renders a native <code className="text-xs bg-muted px-1.5 py-0.5 rounded">button</code> with <code className="text-xs bg-muted px-1.5 py-0.5 rounded">role="switch"</code>.</li>
          <li>Supports <code className="text-xs bg-muted px-1.5 py-0.5 rounded">aria-checked="true" | "false"</code> automatically.</li>
          <li><code className="text-xs bg-muted px-1.5 py-0.5 rounded">Space</code> key toggles the switch (native button behavior).</li>
          <li>Always pair with a visible <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{"<label>"}</code> or <code className="text-xs bg-muted px-1.5 py-0.5 rounded">aria-label</code>.</li>
          <li>Focus ring is 3px with <code className="text-xs bg-muted px-1.5 py-0.5 rounded">--ring</code> token, meeting WCAG 2.4.7.</li>
          <li>Color contrast between checked (teal-700) and unchecked (neutral) tracks clearly communicates state.</li>
        </ul>
      </section>

      {/* ---- Related Components ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-lg border border-border divide-y divide-border">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Checkbox</p>
              <p className="text-muted-foreground mt-0.5">
                For form fields where the change is applied on submit, not immediately.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Radio Group</p>
              <p className="text-muted-foreground mt-0.5">
                For mutually exclusive choices where only one option can be selected.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Toggle</p>
              <p className="text-muted-foreground mt-0.5">
                A pressable button that toggles between two visual states.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Label Docs
   ================================================================ */

function LabelDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      {/* ---- Header ---- */}
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          Forms
        </p>
        <h1 className="text-heading-3">Label</h1>
        <p className="text-paragraph-md text-muted-foreground">
          Renders an accessible label associated with form controls. Supports required indicator and disabled state via peer utilities.
        </p>
      </section>

      {/* ---- Import ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example
          title="Import"
          code={`import { Label } from "@/components/ui/label"`}
        >
          <p className="text-xs text-muted-foreground italic">
            Import statement only — see examples below.
          </p>
        </Example>
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Label htmlFor="email">Email address</Label>\n<Input id="email" type="email" placeholder="you@example.com" />`}>
          <div className="space-y-2">
            <Label htmlFor="email-demo">Email address</Label>
            <Input id="email-demo" type="email" placeholder="you@example.com" />
          </div>
        </Example>

        <Example title="With Checkbox" code={`<div className="flex items-center gap-2">\n  <Checkbox id="terms" />\n  <Label htmlFor="terms">Accept terms and conditions</Label>\n</div>`}>
          <div className="flex items-center gap-2">
            <Checkbox id="terms-demo" />
            <Label htmlFor="terms-demo">Accept terms and conditions</Label>
          </div>
        </Example>

        <Example title="With Switch" code={`<div className="flex items-center gap-2">\n  <Switch id="notifications" />\n  <Label htmlFor="notifications">Enable notifications</Label>\n</div>`}>
          <div className="flex items-center gap-2">
            <Switch id="notifications-demo" />
            <Label htmlFor="notifications-demo">Enable notifications</Label>
          </div>
        </Example>

        <Example title="Disabled (via peer)" code={`<div className="space-y-2">\n  <Input id="disabled" disabled placeholder="Disabled input" />\n  <Label htmlFor="disabled">Disabled field</Label>\n</div>`}>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-demo" disabled />
            <Label htmlFor="disabled-demo">Disabled option</Label>
          </div>
        </Example>
      </section>

      {/* ---- API Reference ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono text-xs">htmlFor</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Associates the label with a form control by ID.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Additional CSS classes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs">ReactNode</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Label text content.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Always pair every form control with a visible Label linked via htmlFor/id." />
          <DontItem text="Don't use placeholder text as a replacement for a Label." />
          <DoItem text="Keep label text short and descriptive — users should know what to enter at a glance." />
          <DontItem text="Don't use Label for non-form elements — use a heading or paragraph instead." />
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-lg border border-border divide-y divide-border">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Input</p>
              <p className="text-muted-foreground mt-0.5">
                Text input field — pair with Label for accessibility.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Checkbox</p>
              <p className="text-muted-foreground mt-0.5">
                Checkbox control — pair with Label for click-to-toggle.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Form</p>
              <p className="text-muted-foreground mt-0.5">
                Full form wrapper with validation — includes built-in label support.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Slider Docs
   ================================================================ */

function SliderDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Forms</p>
        <h1 className="text-heading-3">Slider</h1>
        <p className="text-paragraph-md text-muted-foreground">
          A range input that allows users to select a value or range by dragging a thumb along a track. Supports single and dual thumb.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example title="Import" code={`import { Slider } from "@/components/ui/slider"`}>
          <p className="text-xs text-muted-foreground italic">Import statement only — see examples below.</p>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Slider defaultValue={[50]} max={100} step={1} />`}>
          <Slider defaultValue={[50]} max={100} step={1} className="w-60" />
        </Example>

        <Example title="With min/max/step" code={`<Slider defaultValue={[25]} min={0} max={100} step={5} />`}>
          <Slider defaultValue={[25]} min={0} max={100} step={5} className="w-60" />
        </Example>

        <Example title="Range (dual thumb)" code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}>
          <Slider defaultValue={[25, 75]} max={100} step={1} className="w-60" />
        </Example>

        <Example title="Disabled" code={`<Slider defaultValue={[50]} disabled />`}>
          <Slider defaultValue={[50]} max={100} disabled className="w-60" />
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">number[]</td>
                <td className="p-3 font-mono text-xs">[0]</td>
                <td className="p-3">Initial value(s). Use 2 values for range mode.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">number[]</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Controlled value(s).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">(value: number[]) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Callback when value changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">min</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">0</td>
                <td className="p-3">Minimum value.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">max</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">100</td>
                <td className="p-3">Maximum value.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">step</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">1</td>
                <td className="p-3">Step increment.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3">Disables the slider.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Slider for numeric ranges like volume, price, or brightness." />
          <DontItem text="Don't use Slider when precise numeric input is needed — use Input type='number' instead." />
          <DoItem text="Show the current value label alongside the slider for clarity." />
          <DontItem text="Don't use too many steps — keep the slider experience smooth." />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-lg border border-border divide-y divide-border">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Input</p>
              <p className="text-muted-foreground mt-0.5">Use for precise numeric values where typing is preferred.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Progress</p>
              <p className="text-muted-foreground mt-0.5">Read-only progress indicator — use when the value is not user-controlled.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Planned</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Toggle Docs
   ================================================================ */

function ToggleDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Forms</p>
        <h1 className="text-heading-3">Toggle</h1>
        <p className="text-paragraph-md text-muted-foreground">
          A two-state button that can be toggled on or off. Commonly used for formatting options like bold, italic, underline.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example title="Import" code={`import { Toggle } from "@/components/ui/toggle"`}>
          <p className="text-xs text-muted-foreground italic">Import statement only — see examples below.</p>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Toggle aria-label="Toggle bold">\n  <Bold className="size-4" />\n</Toggle>`}>
          <Toggle aria-label="Toggle bold"><Bold className="size-4" /></Toggle>
        </Example>

        <Example title="Outline variant" code={`<Toggle variant="outline" aria-label="Toggle italic">\n  <Italic className="size-4" />\n</Toggle>`}>
          <Toggle variant="outline" aria-label="Toggle italic"><Italic className="size-4" /></Toggle>
        </Example>

        <Example title="With text" code={`<Toggle aria-label="Toggle italic">\n  <Italic className="size-4" />\n  Italic\n</Toggle>`}>
          <Toggle aria-label="Toggle italic"><Italic className="size-4" />Italic</Toggle>
        </Example>

        <Example title="Sizes" code={`<Toggle size="sm" aria-label="Bold"><Bold className="size-4" /></Toggle>\n<Toggle size="default" aria-label="Bold"><Bold className="size-4" /></Toggle>\n<Toggle size="lg" aria-label="Bold"><Bold className="size-4" /></Toggle>`}>
          <div className="flex items-center gap-2">
            <Toggle size="sm" aria-label="Bold"><Bold className="size-4" /></Toggle>
            <Toggle size="default" aria-label="Bold"><Bold className="size-4" /></Toggle>
            <Toggle size="lg" aria-label="Bold"><Bold className="size-4" /></Toggle>
          </div>
        </Example>

        <Example title="Disabled" code={`<Toggle disabled aria-label="Bold"><Bold className="size-4" /></Toggle>`}>
          <Toggle disabled aria-label="Bold"><Bold className="size-4" /></Toggle>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">"default" | "outline"</td>
                <td className="p-3 font-mono text-xs">"default"</td>
                <td className="p-3">Visual style of the toggle.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs">"sm" | "default" | "lg"</td>
                <td className="p-3 font-mono text-xs">"default"</td>
                <td className="p-3">Size of the toggle button.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">pressed</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Controlled pressed state.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">onPressedChange</td>
                <td className="p-3 font-mono text-xs">(pressed: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Callback when pressed state changes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Always provide an aria-label when using icon-only toggles." />
          <DontItem text="Don't use Toggle for navigation — use Tabs or Buttons instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Toggle Group Docs
   ================================================================ */

function ToggleGroupDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Forms</p>
        <h1 className="text-heading-3">Toggle Group</h1>
        <p className="text-paragraph-md text-muted-foreground">
          A group of toggle buttons supporting single or multiple selection. Ideal for toolbar actions, text formatting, view modes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example title="Import" code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`}>
          <p className="text-xs text-muted-foreground italic">Import statement only — see examples below.</p>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Single selection" code={`<ToggleGroup type="single" defaultValue="center">\n  <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>

        <Example title="Multiple selection" code={`<ToggleGroup type="multiple" defaultValue={["bold"]}>\n  <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>

        <Example title="Outline variant" code={`<ToggleGroup type="single" variant="outline" defaultValue="left">\n  <ToggleGroupItem value="left" aria-label="Left"><AlignLeft className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="center" aria-label="Center"><AlignCenter className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="right" aria-label="Right"><AlignRight className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="single" variant="outline" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Left"><AlignLeft className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center"><AlignCenter className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right"><AlignRight className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>

        <Example title="Small size" code={`<ToggleGroup type="multiple" size="sm">\n  <ToggleGroupItem value="bold"><Bold className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="italic"><Italic className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="underline"><Underline className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="multiple" size="sm">
            <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <h3 className="font-heading font-semibold text-lg">ToggleGroup</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono text-xs">type</td>
                <td className="p-3 font-mono text-xs">"single" | "multiple"</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Selection mode (required).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">"default" | "outline"</td>
                <td className="p-3 font-mono text-xs">"default"</td>
                <td className="p-3">Applied to all items.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs">"sm" | "default" | "lg"</td>
                <td className="p-3 font-mono text-xs">"default"</td>
                <td className="p-3">Applied to all items.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use type='single' for mutually exclusive options like text alignment." />
          <DontItem text="Don't mix Toggle and ToggleGroup in the same toolbar — pick one pattern." />
          <DoItem text="Use type='multiple' for independent formatting options like bold + italic + underline." />
          <DontItem text="Don't use ToggleGroup for navigation — use Tabs instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Card Docs
   ================================================================ */

function CardDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Card</h1>
        <p className="text-paragraph-md text-muted-foreground">Content container with composable sub-components: Header, Title, Description, Content, Footer.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="Default" code={`<Card className="w-[350px]">\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card description goes here.</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card content area.</p>\n  </CardContent>\n  <CardFooter>\n    <Button>Action</Button>\n  </CardFooter>\n</Card>`}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Card content area.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </Example>

        <Example title="Simple card" code={`<Card className="p-md">\n  <p>Simple card with just padding.</p>\n</Card>`}>
          <Card className="p-md w-[350px]">
            <p className="text-sm">Simple card with just padding.</p>
          </Card>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Sub-components</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Component</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">Card</td><td className="p-3">Root container with border, shadow, and rounded corners.</td></tr>
              <tr><td className="p-3 font-mono text-xs">CardHeader</td><td className="p-3">Top section with padding, contains Title and Description.</td></tr>
              <tr><td className="p-3 font-mono text-xs">CardTitle</td><td className="p-3">Bold heading text.</td></tr>
              <tr><td className="p-3 font-mono text-xs">CardDescription</td><td className="p-3">Muted description text.</td></tr>
              <tr><td className="p-3 font-mono text-xs">CardContent</td><td className="p-3">Main content area.</td></tr>
              <tr><td className="p-3 font-mono text-xs">CardFooter</td><td className="p-3">Bottom section for actions.</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Avatar Docs
   ================================================================ */

function AvatarDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Avatar</h1>
        <p className="text-paragraph-md text-muted-foreground">User avatar with image and fallback support (initials or icon).</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="With image" code={`<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" alt="User" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Example>

        <Example title="Fallback initials" code={`<Avatar>\n  <AvatarFallback>TN</AvatarFallback>\n</Avatar>`}>
          <div className="flex gap-3">
            <Avatar><AvatarFallback>TN</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
            <Avatar><AvatarFallback><User className="size-4" /></AvatarFallback></Avatar>
          </div>
        </Example>

        <Example title="Sizes" code={`<Avatar className="size-8">...</Avatar>\n<Avatar className="size-10">...</Avatar>\n<Avatar className="size-14">...</Avatar>`}>
          <div className="flex items-center gap-3">
            <Avatar className="size-8"><AvatarFallback className="text-xs">S</AvatarFallback></Avatar>
            <Avatar className="size-10"><AvatarFallback>MD</AvatarFallback></Avatar>
            <Avatar className="size-14"><AvatarFallback className="text-lg">LG</AvatarFallback></Avatar>
          </div>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Always provide a fallback (initials or icon) for when the image fails to load." />
          <DontItem text="Don't use Avatar for decorative images — use a regular img tag." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Progress Docs
   ================================================================ */

function ProgressDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Progress</h1>
        <p className="text-paragraph-md text-muted-foreground">Progress bar indicating completion status. Supports determinate values (0-100).</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="25%" code={`<Progress value={25} />`}>
          <Progress value={25} className="w-60" />
        </Example>
        <Example title="50%" code={`<Progress value={50} />`}>
          <Progress value={50} className="w-60" />
        </Example>
        <Example title="75%" code={`<Progress value={75} />`}>
          <Progress value={75} className="w-60" />
        </Example>
        <Example title="100%" code={`<Progress value={100} />`}>
          <Progress value={100} className="w-60" />
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Prop</th><th className="text-left p-3 font-semibold">Type</th><th className="text-left p-3 font-semibold">Default</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">value</td><td className="p-3 font-mono text-xs">number</td><td className="p-3 font-mono text-xs">0</td><td className="p-3">Current progress (0–100).</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Alert Docs
   ================================================================ */

function AlertDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Alert</h1>
        <p className="text-paragraph-md text-muted-foreground">Inline alert messages for info, warning, error, and success feedback.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="Default" code={`<Alert>\n  <Terminal className="size-4" />\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can add components to your app using the CLI.</AlertDescription>\n</Alert>`}>
          <Alert>
            <Terminal className="size-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Destructive" code={`<Alert variant="destructive">\n  <AlertCircle className="size-4" />\n  <AlertTitle>Error</AlertTitle>\n  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>\n</Alert>`}>
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Info" code={`<Alert>\n  <Info className="size-4" />\n  <AlertTitle>Information</AlertTitle>\n  <AlertDescription>This feature is currently in beta.</AlertDescription>\n</Alert>`}>
          <Alert>
            <Info className="size-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This feature is currently in beta.</AlertDescription>
          </Alert>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Prop</th><th className="text-left p-3 font-semibold">Type</th><th className="text-left p-3 font-semibold">Default</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">variant</td><td className="p-3 font-mono text-xs">"default" | "destructive"</td><td className="p-3 font-mono text-xs">"default"</td><td className="p-3">Visual style of the alert.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Alert for persistent, inline messages related to a page section." />
          <DontItem text="Don't use Alert for transient notifications — use Toast instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Badge Docs
   ================================================================ */

function BadgeDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Badge</h1>
        <p className="text-paragraph-md text-muted-foreground">Status tags, labels, and notification counts.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="Variants" code={`<Badge>Default</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="outline">Outline</Badge>\n<Badge variant="destructive">Destructive</Badge>`}>
          <div className="flex gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Prop</th><th className="text-left p-3 font-semibold">Type</th><th className="text-left p-3 font-semibold">Default</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">variant</td><td className="p-3 font-mono text-xs">"default" | "secondary" | "outline" | "destructive"</td><td className="p-3 font-mono text-xs">"default"</td><td className="p-3">Visual style.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Badge for status indicators, counts, or category labels." />
          <DontItem text="Don't use Badge for interactive actions — use Button instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Separator Docs
   ================================================================ */

function SeparatorDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Separator</h1>
        <p className="text-paragraph-md text-muted-foreground">Visually separates content with a horizontal or vertical line.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="Horizontal" code={`<Separator />`}>
          <div className="space-y-4 w-60">
            <p className="text-sm">Content above</p>
            <Separator />
            <p className="text-sm">Content below</p>
          </div>
        </Example>
        <Example title="Vertical" code={`<Separator orientation="vertical" />`}>
          <div className="flex items-center gap-4 h-8">
            <span className="text-sm">Left</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Right</span>
          </div>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Prop</th><th className="text-left p-3 font-semibold">Type</th><th className="text-left p-3 font-semibold">Default</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">orientation</td><td className="p-3 font-mono text-xs">"horizontal" | "vertical"</td><td className="p-3 font-mono text-xs">"horizontal"</td><td className="p-3">Direction of the divider.</td></tr>
              <tr><td className="p-3 font-mono text-xs">decorative</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">true</td><td className="p-3">If true, hides from screen readers.</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Skeleton Docs
   ================================================================ */

function SkeletonDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Skeleton</h1>
        <p className="text-paragraph-md text-muted-foreground">Loading placeholder with a pulse animation. Use to indicate content is being loaded.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="Card skeleton" code={`<div className="flex items-center gap-4">\n  <Skeleton className="size-12 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-[200px]" />\n    <Skeleton className="h-4 w-[160px]" />\n  </div>\n</div>`}>
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[160px]" />
            </div>
          </div>
        </Example>
        <Example title="Text block" code={`<div className="space-y-2">\n  <Skeleton className="h-4 w-full" />\n  <Skeleton className="h-4 w-4/5" />\n  <Skeleton className="h-4 w-3/5" />\n</div>`}>
          <div className="space-y-2 w-60">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Match the skeleton shape and size to the actual content it replaces." />
          <DontItem text="Don't use Skeleton for instant content — it should only appear during loading." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Table Docs
   ================================================================ */

function TableDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Data Display</p>
        <h1 className="text-heading-3">Table</h1>
        <p className="text-paragraph-md text-muted-foreground">Data table with composable sub-components for header, body, footer, rows, and cells.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <Example title="Default" code={`<Table>\n  <TableCaption>A list of recent invoices.</TableCaption>\n  <TableHeader>\n    <TableRow>\n      <TableHead className="w-[100px]">Invoice</TableHead>\n      <TableHead>Status</TableHead>\n      <TableHead>Method</TableHead>\n      <TableHead className="text-right">Amount</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell className="font-medium">INV001</TableCell>\n      <TableCell>Paid</TableCell>\n      <TableCell>Credit Card</TableCell>\n      <TableCell className="text-right">$250.00</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`}>
          <Table>
            <TableCaption>A list of recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell><Badge variant="secondary">Paid</Badge></TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Sub-components</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Component</th><th className="text-left p-3 font-semibold">HTML</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">Table</td><td className="p-3 font-mono text-xs">table</td><td className="p-3">Root container with overflow scroll wrapper.</td></tr>
              <tr><td className="p-3 font-mono text-xs">TableHeader</td><td className="p-3 font-mono text-xs">thead</td><td className="p-3">Header section.</td></tr>
              <tr><td className="p-3 font-mono text-xs">TableBody</td><td className="p-3 font-mono text-xs">tbody</td><td className="p-3">Body section.</td></tr>
              <tr><td className="p-3 font-mono text-xs">TableFooter</td><td className="p-3 font-mono text-xs">tfoot</td><td className="p-3">Footer section.</td></tr>
              <tr><td className="p-3 font-mono text-xs">TableRow</td><td className="p-3 font-mono text-xs">tr</td><td className="p-3">Row with hover and selected states.</td></tr>
              <tr><td className="p-3 font-mono text-xs">TableHead</td><td className="p-3 font-mono text-xs">th</td><td className="p-3">Header cell.</td></tr>
              <tr><td className="p-3 font-mono text-xs">TableCell</td><td className="p-3 font-mono text-xs">td</td><td className="p-3">Data cell.</td></tr>
              <tr><td className="p-3 font-mono text-xs">TableCaption</td><td className="p-3 font-mono text-xs">caption</td><td className="p-3">Table description text.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use TableCaption to describe the table content for accessibility." />
          <DontItem text="Don't nest tables — flatten data or use expandable rows instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Dialog Docs
   ================================================================ */

function DialogDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Overlay & Feedback</p>
        <h1 className="text-heading-3">Dialog</h1>
        <p className="text-paragraph-md text-muted-foreground">Modal dialog with overlay. Interrupts the user with important content and expects a response.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example title="Import" code={`import {\n  Dialog, DialogTrigger, DialogContent,\n  DialogHeader, DialogFooter,\n  DialogTitle, DialogDescription,\n} from "@/components/ui/dialog"`}>
          <p className="text-xs text-muted-foreground italic">Import statement only — see examples below.</p>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Dialog>\n  <DialogTrigger asChild>\n    <Button variant="outline">Edit Profile</Button>\n  </DialogTrigger>\n  <DialogContent className="sm:max-w-[425px]">\n    <DialogHeader>\n      <DialogTitle>Edit profile</DialogTitle>\n      <DialogDescription>Make changes to your profile here.</DialogDescription>\n    </DialogHeader>\n    <div className="grid gap-4 py-4">\n      <div className="grid grid-cols-4 items-center gap-4">\n        <Label htmlFor="name" className="text-right">Name</Label>\n        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />\n      </div>\n    </div>\n    <DialogFooter>\n      <Button type="submit">Save changes</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`}>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Username</Label>
                  <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Dialog for forms and complex interactions that need user focus." />
          <DontItem text="Don't use Dialog for simple confirmations — use Alert Dialog instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Alert Dialog Docs
   ================================================================ */

function AlertDialogDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Overlay & Feedback</p>
        <h1 className="text-heading-3">Alert Dialog</h1>
        <p className="text-paragraph-md text-muted-foreground">Modal for confirmations and destructive actions. Cannot be dismissed by clicking outside.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  AlertDialog,\n  AlertDialogTrigger,\n  AlertDialogContent,\n  AlertDialogHeader,\n  AlertDialogFooter,\n  AlertDialogTitle,\n  AlertDialogDescription,\n  AlertDialogAction,\n  AlertDialogCancel,\n} from "@/components/ui/alert-dialog"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Destructive Confirmation" code={`<AlertDialog>\n  <AlertDialogTrigger asChild>\n    <Button variant="destructive">Delete Account</Button>\n  </AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\n      <AlertDialogDescription>\n        This action cannot be undone.\n      </AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancel</AlertDialogCancel>\n      <AlertDialogAction>Continue</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`}>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Alert Dialog for destructive or irreversible actions." />
          <DontItem text="Don't use for simple info display — use Dialog or Toast instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Sheet Docs
   ================================================================ */

function SheetDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Overlay & Feedback</p>
        <h1 className="text-heading-3">Sheet</h1>
        <p className="text-paragraph-md text-muted-foreground">Slide-out panel from any edge of the screen. Great for navigation, filters, or detail views.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Right (Default)" code={`<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="outline">Open Sheet</Button>\n  </SheetTrigger>\n  <SheetContent>\n    <SheetHeader>\n      <SheetTitle>Edit profile</SheetTitle>\n      <SheetDescription>Make changes to your profile.</SheetDescription>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`}>
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Right</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="sheet-name" className="text-right">Name</Label>
                    <Input id="sheet-name" defaultValue="Pedro Duarte" className="col-span-3" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Left</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Browse sections of the app.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Top</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Notifications</SheetTitle>
                  <SheetDescription>Recent notifications panel.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Quick Actions</SheetTitle>
                  <SheetDescription>Common actions.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Sheet for supplementary content that doesn't need a full page." />
          <DontItem text="Don't put complex multi-step flows in a Sheet — use a page instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Drawer Docs
   ================================================================ */

function DrawerDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Overlay & Feedback</p>
        <h1 className="text-heading-3">Drawer</h1>
        <p className="text-paragraph-md text-muted-foreground">Mobile-first bottom drawer with swipe-to-close. Built on vaul.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Drawer>\n  <DrawerTrigger asChild>\n    <Button variant="outline">Open Drawer</Button>\n  </DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader className="text-left">\n      <DrawerTitle>Move Goal</DrawerTitle>\n      <DrawerDescription>Set your daily activity goal.</DrawerDescription>\n    </DrawerHeader>\n    <div className="p-4">\n      <p>Drawer body content goes here.</p>\n    </div>\n    <DrawerFooter>\n      <Button>Submit</Button>\n      <DrawerClose asChild>\n        <Button variant="outline">Cancel</Button>\n      </DrawerClose>\n    </DrawerFooter>\n  </DrawerContent>\n</Drawer>`}>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">350</div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Drawer on mobile for actions and confirmations." />
          <DontItem text="Don't use Drawer on desktop where Dialog or Sheet is more appropriate." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Popover Docs
   ================================================================ */

function PopoverDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Overlay & Feedback</p>
        <h1 className="text-heading-3">Popover</h1>
        <p className="text-paragraph-md text-muted-foreground">Floating content panel anchored to a trigger. For rich interactive content.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  Popover,\n  PopoverTrigger,\n  PopoverContent,\n} from "@/components/ui/popover"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">Open Popover</Button>\n  </PopoverTrigger>\n  <PopoverContent className="w-80">\n    <div className="grid gap-4">\n      <div className="space-y-2">\n        <h4 className="font-medium leading-none">Dimensions</h4>\n        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>\n      </div>\n      <div className="grid gap-2">\n        <div className="grid grid-cols-3 items-center gap-4">\n          <Label htmlFor="width">Width</Label>\n          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />\n        </div>\n      </div>\n    </div>\n  </PopoverContent>\n</Popover>`}>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="pop-width">Width</Label>
                    <Input id="pop-width" defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="pop-height">Height</Label>
                    <Input id="pop-height" defaultValue="25px" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Popover for interactive floating content like forms or settings." />
          <DontItem text="Don't use Popover for simple text hints — use Tooltip instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Tooltip Docs
   ================================================================ */

function TooltipDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Overlay & Feedback</p>
        <h1 className="text-heading-3">Tooltip</h1>
        <p className="text-paragraph-md text-muted-foreground">Informational popup shown on hover or focus. For brief, non-interactive hints.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  Tooltip,\n  TooltipTrigger,\n  TooltipContent,\n  TooltipProvider,\n} from "@/components/ui/tooltip"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger asChild>\n      <Button variant="outline">Hover me</Button>\n    </TooltipTrigger>\n    <TooltipContent>\n      <p>Add to library</p>\n    </TooltipContent>\n  </Tooltip>\n</TooltipProvider>`}>
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to library</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon"><Plus className="size-4" /></Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Add new item</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon"><Settings className="size-4" /></Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Tooltip for icon-only buttons to provide accessible labels." />
          <DontItem text="Don't put interactive content inside Tooltip — use Popover instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Toast (Sonner) Docs
   ================================================================ */

function ToastDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Overlay & Feedback</p>
        <h1 className="text-heading-3">Toast (Sonner)</h1>
        <p className="text-paragraph-md text-muted-foreground">Non-intrusive notification toasts. Uses the sonner library.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example title="Import" code={`import { toast } from "sonner"\nimport { Toaster } from "@/components/ui/sonner"\n\n// Place <Toaster /> at app root`}>
          <p className="text-xs text-muted-foreground italic">Import statement only — see examples below.</p>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Variants" code={`toast("Default notification")\ntoast.success("Success!")\ntoast.error("Something went wrong")\ntoast.warning("Careful!")\ntoast.info("FYI...")`}>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => toast("Event has been created")}>Default</Button>
            <Button variant="outline" onClick={() => toast.success("Profile updated successfully")}>Success</Button>
            <Button variant="outline" onClick={() => toast.error("Something went wrong")}>Error</Button>
            <Button variant="outline" onClick={() => toast.warning("Please review your changes")}>Warning</Button>
            <Button variant="outline" onClick={() => toast.info("New version available")}>Info</Button>
          </div>
        </Example>

        <Example title="With Description" code={`toast("Event Created", {\n  description: "Friday, February 10, 2024 at 5:57 PM",\n})`}>
          <Button variant="outline" onClick={() => toast("Event Created", { description: "Friday, February 10, 2024 at 5:57 PM" })}>
            With Description
          </Button>
        </Example>

        <Example title="With Action" code={`toast("File deleted", {\n  action: { label: "Undo", onClick: () => console.log("Undo") },\n})`}>
          <Button variant="outline" onClick={() => toast("File deleted", { action: { label: "Undo", onClick: () => console.log("Undo") } })}>
            With Action
          </Button>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use toast for non-blocking feedback (saved, deleted, sent, etc.)." />
          <DontItem text="Don't use toast for critical actions — use Alert Dialog for confirmations." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Tabs Docs
   ================================================================ */

function TabsDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Navigation</p>
        <h1 className="text-heading-3">Tabs</h1>
        <p className="text-paragraph-md text-muted-foreground">Tabbed interface for switching between different views or content panels.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Tabs defaultValue="account" className="w-[400px]">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n    <TabsTrigger value="password">Password</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">\n    <Card>\n      <CardHeader>\n        <CardTitle>Account</CardTitle>\n        <CardDescription>Make changes to your account.</CardDescription>\n      </CardHeader>\n      <CardContent className="space-y-2">\n        <div className="space-y-1">\n          <Label htmlFor="tab-name">Name</Label>\n          <Input id="tab-name" defaultValue="Pedro Duarte" />\n        </div>\n      </CardContent>\n    </Card>\n  </TabsContent>\n</Tabs>`}>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>Make changes to your account here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="tab-name">Name</Label>
                    <Input id="tab-name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="tab-username">Username</Label>
                    <Input id="tab-username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="tab-current">Current password</Label>
                    <Input id="tab-current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="tab-new">New password</Label>
                    <Input id="tab-new" type="password" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Tabs for content that is related but independent." />
          <DontItem text="Don't use Tabs for sequential steps — use a Stepper pattern instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Breadcrumb Docs
   ================================================================ */

function BreadcrumbDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Navigation</p>
        <h1 className="text-heading-3">Breadcrumb</h1>
        <p className="text-paragraph-md text-muted-foreground">Breadcrumb navigation trail showing the user's location in a hierarchy.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  Breadcrumb,\n  BreadcrumbList,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from "@/components/ui/breadcrumb"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/components">Components</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Always include the current page as the last non-linked item." />
          <DontItem text="Don't make the current page a link — it should be plain text." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Pagination Docs
   ================================================================ */

function PaginationDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Navigation</p>
        <h1 className="text-heading-3">Pagination</h1>
        <p className="text-paragraph-md text-muted-foreground">Page navigation with previous/next and numbered links.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  Pagination,\n  PaginationContent,\n  PaginationItem,\n  PaginationLink,\n  PaginationPrevious,\n  PaginationNext,\n  PaginationEllipsis,\n} from "@/components/ui/pagination"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">1</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#" isActive>2</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">3</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationEllipsis />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationNext href="#" />\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>`}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Highlight the current page for clear context." />
          <DontItem text="Don't show too many page numbers — use ellipsis for large ranges." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Dropdown Menu Docs
   ================================================================ */

function DropdownMenuDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Navigation</p>
        <h1 className="text-heading-3">Dropdown Menu</h1>
        <p className="text-paragraph-md text-muted-foreground">Contextual menu triggered by a button. Supports labels, separators, checkbox items, sub-menus, and keyboard shortcuts.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  DropdownMenu,\n  DropdownMenuTrigger,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuLabel,\n  DropdownMenuSeparator,\n  DropdownMenuShortcut,\n  DropdownMenuGroup,\n  DropdownMenuSub,\n  DropdownMenuSubTrigger,\n  DropdownMenuSubContent,\n} from "@/components/ui/dropdown-menu"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Open</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent className="w-56">\n    <DropdownMenuLabel>My Account</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuGroup>\n      <DropdownMenuItem>\n        <User className="mr-2 size-4" /> Profile\n        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>\n      </DropdownMenuItem>\n      <DropdownMenuItem>\n        <Settings className="mr-2 size-4" /> Settings\n        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>\n      </DropdownMenuItem>\n    </DropdownMenuGroup>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>\n      <LogOut className="mr-2 size-4" /> Log out\n    </DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 size-4" /> Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 size-4" /> Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 size-4" /> Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <User className="mr-2 size-4" /> Invite users
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem><Mail className="mr-2 size-4" /> Email</DropdownMenuItem>
                    <DropdownMenuItem><Plus className="mr-2 size-4" /> More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 size-4" /> Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 size-4" /> Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Group related items and use separators for clarity." />
          <DontItem text="Don't nest sub-menus more than one level deep." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Command Docs
   ================================================================ */

function CommandDocs() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Navigation</p>
        <h1 className="text-heading-3">Command</h1>
        <p className="text-paragraph-md text-muted-foreground">Command palette with search. Built on cmdk. Use as inline menu or as a dialog.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  Command,\n  CommandInput,\n  CommandList,\n  CommandEmpty,\n  CommandGroup,\n  CommandItem,\n  CommandShortcut,\n  CommandSeparator,\n  CommandDialog,\n} from "@/components/ui/command"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Inline" code={`<Command className="rounded-lg border shadow-md">\n  <CommandInput placeholder="Type a command or search..." />\n  <CommandList>\n    <CommandEmpty>No results found.</CommandEmpty>\n    <CommandGroup heading="Suggestions">\n      <CommandItem><CalendarIcon className="mr-2 size-4" /> Calendar</CommandItem>\n      <CommandItem><Smile className="mr-2 size-4" /> Search Emoji</CommandItem>\n      <CommandItem><Calculator className="mr-2 size-4" /> Calculator</CommandItem>\n    </CommandGroup>\n    <CommandSeparator />\n    <CommandGroup heading="Settings">\n      <CommandItem><User className="mr-2 size-4" /> Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>\n      <CommandItem><Settings className="mr-2 size-4" /> Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>`}>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem><CalendarIcon className="mr-2 size-4" /> Calendar</CommandItem>
                <CommandItem><Smile className="mr-2 size-4" /> Search Emoji</CommandItem>
                <CommandItem><Calculator className="mr-2 size-4" /> Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem><User className="mr-2 size-4" /> Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>
                <CommandItem><Settings className="mr-2 size-4" /> Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </Example>

        <Example title="Dialog (⌘J)" code={`<CommandDialog open={open} onOpenChange={setOpen}>\n  <CommandInput placeholder="Type a command or search..." />\n  <CommandList>\n    <CommandEmpty>No results found.</CommandEmpty>\n    <CommandGroup heading="Suggestions">\n      <CommandItem>Calendar</CommandItem>\n      <CommandItem>Search Emoji</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</CommandDialog>`}>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>J
              </kbd>
            </p>
            <Button variant="outline" onClick={() => setOpen(true)}>Open Command Palette</Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem><CalendarIcon className="mr-2 size-4" /> Calendar</CommandItem>
                  <CommandItem><Smile className="mr-2 size-4" /> Search Emoji</CommandItem>
                  <CommandItem><Calculator className="mr-2 size-4" /> Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem><User className="mr-2 size-4" /> Profile</CommandItem>
                  <CommandItem><Settings className="mr-2 size-4" /> Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Command for searchable lists and keyboard-first interactions." />
          <DontItem text="Don't put too many items without grouping — use headings to organize." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Accordion Docs
   ================================================================ */

function AccordionDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Layout</p>
        <h1 className="text-heading-3">Accordion</h1>
        <p className="text-paragraph-md text-muted-foreground">Vertically collapsible content sections. Single or multiple items can be open.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  Accordion,\n  AccordionItem,\n  AccordionTrigger,\n  AccordionContent,\n} from "@/components/ui/accordion"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Single (default)" code={`<Accordion type="single" collapsible className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>Is it styled?</AccordionTrigger>\n    <AccordionContent>Yes. It comes with SprouX default styles.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-3">\n    <AccordionTrigger>Is it animated?</AccordionTrigger>\n    <AccordionContent>Yes. It's animated by default with smooth transitions.</AccordionContent>\n  </AccordionItem>\n</Accordion>`}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It comes with SprouX default styles that match the design system.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It's animated by default with smooth open/close transitions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>

        <Example title="Multiple" code={`<Accordion type="multiple" className="w-full">\n  ...\n</Accordion>`}>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I open multiple?</AccordionTrigger>
              <AccordionContent>Yes. Set type="multiple" to allow multiple items open at once.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>Each item toggles independently.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Accordion for FAQ sections and collapsible settings." />
          <DontItem text="Don't nest Accordions inside Accordions — keep the hierarchy flat." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Collapsible Docs
   ================================================================ */

function CollapsibleDocs() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Layout</p>
        <h1 className="text-heading-3">Collapsible</h1>
        <p className="text-paragraph-md text-muted-foreground">Toggle visibility of a content section. Simpler than Accordion for single-item toggling.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  Collapsible,\n  CollapsibleTrigger,\n  CollapsibleContent,\n} from "@/components/ui/collapsible"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">\n  <div className="flex items-center justify-between space-x-4 px-4">\n    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>\n    <CollapsibleTrigger asChild>\n      <Button variant="ghost" size="sm">\n        <ChevronsUpDown className="size-4" />\n        <span className="sr-only">Toggle</span>\n      </Button>\n    </CollapsibleTrigger>\n  </div>\n  <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>\n  <CollapsibleContent className="space-y-2">\n    <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>\n    <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@stitches/react</div>\n  </CollapsibleContent>\n</Collapsible>`}>
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ChevronsUpDown className="size-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>
              <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@stitches/react</div>
            </CollapsibleContent>
          </Collapsible>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Collapsible for toggling a single section of content." />
          <DontItem text="Don't use Collapsible for multiple expandable items — use Accordion." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Scroll Area Docs
   ================================================================ */

function ScrollAreaDocs() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Layout</p>
        <h1 className="text-heading-3">Scroll Area</h1>
        <p className="text-paragraph-md text-muted-foreground">Custom scrollbar overlay for constrained regions. Cross-browser consistent.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Vertical" code={`<ScrollArea className="h-72 w-48 rounded-md border">\n  <div className="p-4">\n    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>\n    {tags.map((tag) => (\n      <div key={tag} className="text-sm">{tag}</div>\n    ))}\n  </div>\n</ScrollArea>`}>
          <ScrollArea className="h-72 w-48 rounded-md border border-border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use ScrollArea for constrained containers with lots of content." />
          <DontItem text="Don't use ScrollArea where native scroll is sufficient." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Calendar Docs
   ================================================================ */

function CalendarDocs() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Forms</p>
        <h1 className="text-heading-3">Calendar</h1>
        <p className="text-paragraph-md text-muted-foreground">Date picker calendar component built on react-day-picker v9.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import { Calendar } from "@/components/ui/calendar"`} />
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Single Date" code={`<Calendar\n  mode="single"\n  selected={date}\n  onSelect={setDate}\n  className="rounded-md border"\n/>`}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-border"
          />
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Calendar for date range selection and scheduling UIs." />
          <DontItem text="Don't use Calendar inline when a Date Picker popover is more space-efficient." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Date Picker Docs
   ================================================================ */

function DatePickerDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Forms</p>
        <h1 className="text-heading-3">Date Picker</h1>
        <p className="text-paragraph-md text-muted-foreground">Date selection using a Calendar in a Popover. Compact input pattern.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example title="Import" code={`import { DatePicker } from "@/components/ui/date-picker"`}>
          <p className="text-xs text-muted-foreground italic">Import statement only — see examples below.</p>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<DatePicker />`}>
          <DatePicker />
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use DatePicker for form fields where a single date is needed." />
          <DontItem text="Don't use DatePicker for date ranges — compose Calendar with custom UI." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Combobox Docs
   ================================================================ */

function ComboboxDocs() {
  const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]

  return (
    <div className="space-y-12 max-w-4xl">
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Forms</p>
        <h1 className="text-heading-3">Combobox</h1>
        <p className="text-paragraph-md text-muted-foreground">Searchable select dropdown. Composition of Command + Popover.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example title="Import" code={`import { Combobox } from "@/components/ui/combobox"`}>
          <p className="text-xs text-muted-foreground italic">Import statement only — see examples below.</p>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`const frameworks = [\n  { value: "next", label: "Next.js" },\n  { value: "sveltekit", label: "SvelteKit" },\n  { value: "nuxt", label: "Nuxt.js" },\n  { value: "remix", label: "Remix" },\n  { value: "astro", label: "Astro" },\n]\n\n<Combobox\n  options={frameworks}\n  placeholder="Select framework..."\n  searchPlaceholder="Search framework..."\n/>`}>
          <Combobox
            options={frameworks}
            placeholder="Select framework..."
            searchPlaceholder="Search framework..."
          />
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">options</td><td className="p-3 font-mono text-xs">ComboboxOption[]</td><td className="p-3 font-mono text-xs">—</td><td className="p-3">Array of {`{ value, label }`} objects.</td></tr>
              <tr><td className="p-3 font-mono text-xs">value</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td><td className="p-3">Controlled selected value.</td></tr>
              <tr><td className="p-3 font-mono text-xs">onValueChange</td><td className="p-3 font-mono text-xs">(value: string) =&gt; void</td><td className="p-3 font-mono text-xs">—</td><td className="p-3">Callback when value changes.</td></tr>
              <tr><td className="p-3 font-mono text-xs">placeholder</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">"Select option..."</td><td className="p-3">Placeholder text.</td></tr>
              <tr><td className="p-3 font-mono text-xs">searchPlaceholder</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">"Search..."</td><td className="p-3">Search input placeholder.</td></tr>
              <tr><td className="p-3 font-mono text-xs">emptyText</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">"No results found."</td><td className="p-3">Text when no results match.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Combobox when you have more than 7 options to search through." />
          <DontItem text="Don't use Combobox for less than 5 options — use Select instead." />
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Radio Group Docs
   ================================================================ */

function RadioGroupDocs() {
  return (
    <div className="space-y-12 max-w-4xl">
      {/* ---- Header ---- */}
      <section className="space-y-4">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          Forms
        </p>
        <h1 className="text-heading-3">Radio Group</h1>
        <p className="text-paragraph-md text-muted-foreground">
          A set of checkable buttons — known as radio buttons — where only one can be checked at a time.
        </p>
      </section>

      {/* ---- Import ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Import</h2>
        <Example
          title="Import"
          code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\nimport { Label } from "@/components/ui/label"`}
        >
          <p className="text-xs text-muted-foreground italic">
            Import statement only — see examples below.
          </p>
        </Example>
      </section>

      {/* ---- Examples ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <Example title="Default" code={`<RadioGroup defaultValue="option-1">\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="option-1" id="r1" />\n    <Label htmlFor="r1">Option One</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="option-2" id="r2" />\n    <Label htmlFor="r2">Option Two</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="option-3" id="r3" />\n    <Label htmlFor="r3">Option Three</Label>\n  </div>\n</RadioGroup>`}>
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Option One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Option Two</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="r3" />
              <Label htmlFor="r3">Option Three</Label>
            </div>
          </RadioGroup>
        </Example>

        <Example title="Horizontal" code={`<RadioGroup defaultValue="sm" className="flex gap-4">\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="sm" id="size-sm" />\n    <Label htmlFor="size-sm">Small</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="md" id="size-md" />\n    <Label htmlFor="size-md">Medium</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="lg" id="size-lg" />\n    <Label htmlFor="size-lg">Large</Label>\n  </div>\n</RadioGroup>`}>
          <RadioGroup defaultValue="sm" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="sm" id="size-sm" />
              <Label htmlFor="size-sm">Small</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="md" id="size-md" />
              <Label htmlFor="size-md">Medium</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="lg" id="size-lg" />
              <Label htmlFor="size-lg">Large</Label>
            </div>
          </RadioGroup>
        </Example>

        <Example title="Disabled" code={`<RadioGroup defaultValue="active" disabled>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="active" id="d1" />\n    <Label htmlFor="d1">Active</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="inactive" id="d2" />\n    <Label htmlFor="d2">Inactive</Label>\n  </div>\n</RadioGroup>`}>
          <RadioGroup defaultValue="active" disabled>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="active" id="d1" />
              <Label htmlFor="d1">Active</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="inactive" id="d2" />
              <Label htmlFor="d2">Inactive</Label>
            </div>
          </RadioGroup>
        </Example>
      </section>

      {/* ---- API Reference ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">API Reference</h2>

        <h3 className="font-heading font-semibold text-lg">RadioGroup</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Initially selected value (uncontrolled).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Selected value (controlled).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs">(value: string) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Callback when selection changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3">Disables all radio items.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-heading font-semibold text-lg mt-6">RadioGroupItem</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="text-left p-3 font-semibold">Prop</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Default</th>
                <th className="text-left p-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3">Unique value for this radio item (required).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3">Disables this specific item.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="grid grid-cols-2 gap-6">
          <DoItem text="Use Radio Group for mutually exclusive choices (e.g. size, plan, payment method)." />
          <DontItem text="Don't use Radio Group for on/off toggles — use Switch or Checkbox instead." />
          <DoItem text="Always pair each RadioGroupItem with a visible Label." />
          <DontItem text="Don't use Radio Group when multiple selections are allowed — use Checkbox group." />
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-lg border border-border divide-y divide-border">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Checkbox</p>
              <p className="text-muted-foreground mt-0.5">
                For multiple selections — use when more than one option can be selected.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Select</p>
              <p className="text-muted-foreground mt-0.5">
                Dropdown selection — use when there are many options or limited space.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-teal-50 text-teal-700 px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Toggle Group</p>
              <p className="text-muted-foreground mt-0.5">
                Button-style single/multiple selection with visual emphasis.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Planned
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Input OTP
   ================================================================ */

function InputOTPDocs() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-heading-3 mb-1">Input OTP</h1>
        <p className="text-muted-foreground text-sm">
          Multi-cell one-time-password input. Built on <code className="text-xs bg-muted px-1 py-0.5 rounded">input-otp</code>.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  InputOTP,\n  InputOTPGroup,\n  InputOTPSlot,\n  InputOTPSeparator,\n} from "@/components/ui/input-otp"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-5">Examples</h2>

        <Example
          title="Basic 6-digit OTP"
          description="Standard 6-cell OTP input with separator."
          code={`<InputOTP maxLength={6}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n    <InputOTPSlot index={1} />\n    <InputOTPSlot index={2} />\n  </InputOTPGroup>\n  <InputOTPSeparator />\n  <InputOTPGroup>\n    <InputOTPSlot index={3} />\n    <InputOTPSlot index={4} />\n    <InputOTPSlot index={5} />\n  </InputOTPGroup>\n</InputOTP>`}
        >
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </Example>

        <Example
          title="4-digit OTP"
          description="Compact 4-cell variant."
          code={`<InputOTP maxLength={4}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n    <InputOTPSlot index={1} />\n    <InputOTPSlot index={2} />\n    <InputOTPSlot index={3} />\n  </InputOTPGroup>\n</InputOTP>`}
        >
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </Example>
      </section>
    </div>
  )
}

/* ================================================================
   Spinner
   ================================================================ */

function SpinnerDocs() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-heading-3 mb-1">Spinner</h1>
        <p className="text-muted-foreground text-sm">
          Animated loading indicator. Three sizes: sm (16px), default (24px), lg (32px).
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import { Spinner } from "@/components/ui/spinner"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-5">Examples</h2>

        <Example
          title="Sizes"
          description="All three spinner sizes."
          code={`<Spinner size="sm" />\n<Spinner />\n<Spinner size="lg" />`}
        >
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </Example>

        <Example
          title="Custom color"
          description="Override the color with className."
          code={`<Spinner className="text-primary" />`}
        >
          <Spinner className="text-primary" />
          <Spinner className="text-destructive" />
        </Example>

        <Example
          title="With text"
          description="Combine with a loading label."
          code={`<div className="flex items-center gap-2">\n  <Spinner size="sm" />\n  <span className="text-sm text-muted-foreground">Loading...</span>\n</div>`}
        >
          <div className="flex items-center gap-2">
            <Spinner size="sm" />
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
        </Example>
      </section>
    </div>
  )
}

/* ================================================================
   Hover Card
   ================================================================ */

function HoverCardDocs() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-heading-3 mb-1">Hover Card</h1>
        <p className="text-muted-foreground text-sm">
          Rich preview card that appears on hover. Built on Radix HoverCard.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  HoverCard,\n  HoverCardTrigger,\n  HoverCardContent,\n} from "@/components/ui/hover-card"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-5">Examples</h2>

        <Example
          title="Basic hover card"
          description="Hover over the link to see a preview card."
          code={`<HoverCard>\n  <HoverCardTrigger asChild>\n    <a href="#" className="text-sm font-medium underline">@sproux</a>\n  </HoverCardTrigger>\n  <HoverCardContent>\n    <div className="space-y-2">\n      <h4 className="text-sm font-semibold">SprouX Design System</h4>\n      <p className="text-xs text-muted-foreground">\n        A comprehensive design system built with React, Tailwind CSS v4, and Radix UI.\n      </p>\n    </div>\n  </HoverCardContent>\n</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="#" className="text-sm font-medium underline">@sproux</a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">SprouX Design System</h4>
                <p className="text-xs text-muted-foreground">
                  A comprehensive design system built with React, Tailwind CSS v4, and Radix UI.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Example>
      </section>
    </div>
  )
}

/* ================================================================
   Aspect Ratio
   ================================================================ */

function AspectRatioDocs() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-heading-3 mb-1">Aspect Ratio</h1>
        <p className="text-muted-foreground text-sm">
          Constrains child content to a specified aspect ratio. Built on Radix Aspect Ratio.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import { AspectRatio } from "@/components/ui/aspect-ratio"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-5">Examples</h2>

        <Example
          title="16:9 ratio"
          description="Standard widescreen aspect ratio."
          code={`<div className="w-[300px]">\n  <AspectRatio ratio={16 / 9}>\n    <div className="flex size-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">\n      16:9\n    </div>\n  </AspectRatio>\n</div>`}
        >
          <div className="w-[300px]">
            <AspectRatio ratio={16 / 9}>
              <div className="flex size-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
                16:9
              </div>
            </AspectRatio>
          </div>
        </Example>

        <Example
          title="1:1 square"
          description="Perfect square ratio for avatars or icons."
          code={`<div className="w-[150px]">\n  <AspectRatio ratio={1}>\n    <div className="flex size-full items-center justify-center rounded-md bg-primary text-primary-foreground text-sm">\n      1:1\n    </div>\n  </AspectRatio>\n</div>`}
        >
          <div className="w-[150px]">
            <AspectRatio ratio={1}>
              <div className="flex size-full items-center justify-center rounded-md bg-primary text-primary-foreground text-sm">
                1:1
              </div>
            </AspectRatio>
          </div>
        </Example>

        <Example
          title="4:3 ratio"
          description="Classic photo/video ratio."
          code={`<div className="w-[250px]">\n  <AspectRatio ratio={4 / 3}>\n    <div className="flex size-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">\n      4:3\n    </div>\n  </AspectRatio>\n</div>`}
        >
          <div className="w-[250px]">
            <AspectRatio ratio={4 / 3}>
              <div className="flex size-full items-center justify-center rounded-md bg-muted text-sm text-muted-foreground">
                4:3
              </div>
            </AspectRatio>
          </div>
        </Example>
      </section>
    </div>
  )
}

/* ================================================================
   Context Menu
   ================================================================ */

function ContextMenuDocs() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-heading-3 mb-1">Context Menu</h1>
        <p className="text-muted-foreground text-sm">
          Right-click context menu. Built on Radix Context Menu.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  ContextMenu,\n  ContextMenuTrigger,\n  ContextMenuContent,\n  ContextMenuItem,\n  ContextMenuSeparator,\n  ContextMenuShortcut,\n  ContextMenuSub,\n  ContextMenuSubTrigger,\n  ContextMenuSubContent,\n} from "@/components/ui/context-menu"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-5">Examples</h2>

        <Example
          title="Basic context menu"
          description="Right-click the area below to open the menu."
          code={`<ContextMenu>\n  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">\n    Right click here\n  </ContextMenuTrigger>\n  <ContextMenuContent className="w-64">\n    <ContextMenuItem>Back <ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>\n    <ContextMenuItem>Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>\n    <ContextMenuItem>Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>\n    <ContextMenuSeparator />\n    <ContextMenuSub>\n      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>\n      <ContextMenuSubContent className="w-48">\n        <ContextMenuItem>Save Page As… <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut></ContextMenuItem>\n        <ContextMenuItem>Create Shortcut…</ContextMenuItem>\n        <ContextMenuItem>Name Window…</ContextMenuItem>\n      </ContextMenuSubContent>\n    </ContextMenuSub>\n    <ContextMenuSeparator />\n    <ContextMenuItem>Inspect</ContextMenuItem>\n  </ContextMenuContent>\n</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>Back <ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuItem>Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuItem>Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>Save Page As… <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut></ContextMenuItem>
                  <ContextMenuItem>Create Shortcut…</ContextMenuItem>
                  <ContextMenuItem>Name Window…</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>Inspect</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Example>
      </section>
    </div>
  )
}

/* ================================================================
   Sidebar
   ================================================================ */

function SidebarDocs() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h1 className="text-heading-3 mb-1">Sidebar</h1>
        <p className="text-muted-foreground text-sm">
          Application sidebar navigation. Supports collapsible, icon-only, and mobile-responsive modes.
          The most complex layout component in the design system.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-heading-5">Import</h2>
        <CodeBlock code={`import {\n  SidebarProvider,\n  Sidebar,\n  SidebarContent,\n  SidebarGroup,\n  SidebarGroupLabel,\n  SidebarGroupContent,\n  SidebarMenu,\n  SidebarMenuItem,\n  SidebarMenuButton,\n  SidebarHeader,\n  SidebarFooter,\n  SidebarTrigger,\n  SidebarInset,\n} from "@/components/ui/sidebar"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-5">Examples</h2>

        <Example
          title="Basic sidebar"
          description="A simple sidebar with grouped menu items. Toggle with the button or ⌘B."
          code={`<SidebarProvider>\n  <Sidebar>\n    <SidebarHeader>\n      <h3 className="text-sm font-semibold px-2">My App</h3>\n    </SidebarHeader>\n    <SidebarContent>\n      <SidebarGroup>\n        <SidebarGroupLabel>Navigation</SidebarGroupLabel>\n        <SidebarGroupContent>\n          <SidebarMenu>\n            <SidebarMenuItem>\n              <SidebarMenuButton>Dashboard</SidebarMenuButton>\n            </SidebarMenuItem>\n            <SidebarMenuItem>\n              <SidebarMenuButton>Settings</SidebarMenuButton>\n            </SidebarMenuItem>\n          </SidebarMenu>\n        </SidebarGroupContent>\n      </SidebarGroup>\n    </SidebarContent>\n  </Sidebar>\n  <SidebarInset>\n    <header className="flex items-center gap-2 p-4 border-b">\n      <SidebarTrigger />\n      <span className="text-sm">Page Content</span>\n    </header>\n  </SidebarInset>\n</SidebarProvider>`}
        >
          <div className="w-full border rounded-lg overflow-hidden h-[300px]">
            <SidebarProvider>
              <SidebarComponent>
                <SidebarComponentHeader>
                  <h3 className="text-sm font-semibold px-2">My App</h3>
                </SidebarComponentHeader>
                <SidebarComponentContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>Dashboard</SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>Settings</SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>Profile</SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarComponentContent>
                <SidebarComponentFooter>
                  <p className="text-xs text-muted-foreground px-2">v1.0.0</p>
                </SidebarComponentFooter>
              </SidebarComponent>
              <SidebarInset>
                <header className="flex items-center gap-2 p-4 border-b border-border">
                  <SidebarTrigger />
                  <span className="text-sm">Page Content</span>
                </header>
                <div className="p-4 text-sm text-muted-foreground">
                  Main content area. Toggle sidebar with the button or ⌘B.
                </div>
              </SidebarInset>
            </SidebarProvider>
          </div>
        </Example>
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-5">Features</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>Collapsible modes: offcanvas, icon-only, none</li>
          <li>Variants: sidebar, floating, inset</li>
          <li>Left or right side positioning</li>
          <li>Mobile responsive (uses Sheet on small screens)</li>
          <li>Keyboard shortcut (⌘B) to toggle</li>
          <li>Tooltip support when collapsed to icon mode</li>
          <li>Composable sub-components for menus, groups, headers, footers</li>
        </ul>
      </section>
    </div>
  )
}

/* ================================================================
   Navigation & Layout
   ================================================================ */

const components = [
  { id: "colors", label: "Colors", category: "Foundation" },
  { id: "typography", label: "Typography", category: "Foundation" },
  { id: "spacing", label: "Spacing", category: "Foundation" },
  { id: "border-radius", label: "Border Radius", category: "Foundation" },
  { id: "icons", label: "Icons", category: "Foundation" },
  { id: "illustrations", label: "Illustrations", category: "Foundation" },
  { id: "button", label: "Button", category: "Actions" },
  { id: "input", label: "Input", category: "Forms" },
  { id: "textarea", label: "Textarea", category: "Forms" },
  { id: "select", label: "Select", category: "Forms" },
  { id: "checkbox", label: "Checkbox", category: "Forms" },
  { id: "switch", label: "Switch", category: "Forms" },
  { id: "label", label: "Label", category: "Forms" },
  { id: "radio-group", label: "Radio Group", category: "Forms" },
  { id: "toggle", label: "Toggle", category: "Forms" },
  { id: "toggle-group", label: "Toggle Group", category: "Forms" },
  { id: "slider", label: "Slider", category: "Forms" },
  { id: "card", label: "Card", category: "Data Display" },
  { id: "badge", label: "Badge", category: "Data Display" },
  { id: "avatar", label: "Avatar", category: "Data Display" },
  { id: "progress", label: "Progress", category: "Data Display" },
  { id: "alert", label: "Alert", category: "Data Display" },
  { id: "separator", label: "Separator", category: "Data Display" },
  { id: "skeleton", label: "Skeleton", category: "Data Display" },
  { id: "table", label: "Table", category: "Data Display" },
  { id: "dialog", label: "Dialog", category: "Overlay & Feedback" },
  { id: "alert-dialog", label: "Alert Dialog", category: "Overlay & Feedback" },
  { id: "sheet", label: "Sheet", category: "Overlay & Feedback" },
  { id: "drawer", label: "Drawer", category: "Overlay & Feedback" },
  { id: "popover", label: "Popover", category: "Overlay & Feedback" },
  { id: "tooltip", label: "Tooltip", category: "Overlay & Feedback" },
  { id: "toast", label: "Toast (Sonner)", category: "Overlay & Feedback" },
  { id: "tabs", label: "Tabs", category: "Navigation" },
  { id: "breadcrumb", label: "Breadcrumb", category: "Navigation" },
  { id: "pagination", label: "Pagination", category: "Navigation" },
  { id: "dropdown-menu", label: "Dropdown Menu", category: "Navigation" },
  { id: "command", label: "Command", category: "Navigation" },
  { id: "accordion", label: "Accordion", category: "Layout" },
  { id: "collapsible", label: "Collapsible", category: "Layout" },
  { id: "scroll-area", label: "Scroll Area", category: "Layout" },
  { id: "calendar", label: "Calendar", category: "Forms" },
  { id: "date-picker", label: "Date Picker", category: "Forms" },
  { id: "combobox", label: "Combobox", category: "Forms" },
  { id: "input-otp", label: "Input OTP", category: "Forms" },
  { id: "spinner", label: "Spinner", category: "Data Display" },
  { id: "hover-card", label: "Hover Card", category: "Overlay & Feedback" },
  { id: "aspect-ratio", label: "Aspect Ratio", category: "Layout" },
  { id: "context-menu", label: "Context Menu", category: "Navigation" },
  { id: "sidebar", label: "Sidebar", category: "Layout" },
] as const

type ComponentId = (typeof components)[number]["id"]

function App() {
  const [active, setActive] = useState<ComponentId>("colors")

  const categories = [...new Set(components.map((c) => c.category))]

  return (
    <div className="min-h-screen bg-muted text-foreground">
      {/* ---- Sidebar (fixed) ---- */}
      <aside className="fixed left-0 top-0 w-56 h-screen border-r border-border bg-background p-4 space-y-6 overflow-y-auto z-10">
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
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {c.label}
                </button>
              ))}
          </div>
        ))}
      </aside>

      {/* ---- Content ---- */}
      <main className="ml-56 px-8 py-12">
        <div className="w-full">
          {active === "colors" && <ColorsDocs />}
          {active === "typography" && <TypographyDocs />}
          {active === "spacing" && <SpacingDocs />}
          {active === "border-radius" && <BorderRadiusDocs />}
          {active === "icons" && <IconsDocs />}
          {active === "illustrations" && <IllustrationsDocs />}
          {active === "button" && <ButtonDocs />}
          {active === "input" && <InputDocs />}
          {active === "textarea" && <TextareaDocs />}
          {active === "select" && <SelectDocs />}
          {active === "checkbox" && <CheckboxDocs />}
          {active === "switch" && <SwitchDocs />}
          {active === "label" && <LabelDocs />}
          {active === "radio-group" && <RadioGroupDocs />}
          {active === "toggle" && <ToggleDocs />}
          {active === "toggle-group" && <ToggleGroupDocs />}
          {active === "slider" && <SliderDocs />}
          {active === "card" && <CardDocs />}
          {active === "badge" && <BadgeDocs />}
          {active === "avatar" && <AvatarDocs />}
          {active === "progress" && <ProgressDocs />}
          {active === "alert" && <AlertDocs />}
          {active === "separator" && <SeparatorDocs />}
          {active === "skeleton" && <SkeletonDocs />}
          {active === "table" && <TableDocs />}
          {active === "dialog" && <DialogDocs />}
          {active === "alert-dialog" && <AlertDialogDocs />}
          {active === "sheet" && <SheetDocs />}
          {active === "drawer" && <DrawerDocs />}
          {active === "popover" && <PopoverDocs />}
          {active === "tooltip" && <TooltipDocs />}
          {active === "toast" && <ToastDocs />}
          {active === "tabs" && <TabsDocs />}
          {active === "breadcrumb" && <BreadcrumbDocs />}
          {active === "pagination" && <PaginationDocs />}
          {active === "dropdown-menu" && <DropdownMenuDocs />}
          {active === "command" && <CommandDocs />}
          {active === "accordion" && <AccordionDocs />}
          {active === "collapsible" && <CollapsibleDocs />}
          {active === "scroll-area" && <ScrollAreaDocs />}
          {active === "calendar" && <CalendarDocs />}
          {active === "date-picker" && <DatePickerDocs />}
          {active === "combobox" && <ComboboxDocs />}
          {active === "input-otp" && <InputOTPDocs />}
          {active === "spinner" && <SpinnerDocs />}
          {active === "hover-card" && <HoverCardDocs />}
          {active === "aspect-ratio" && <AspectRatioDocs />}
          {active === "context-menu" && <ContextMenuDocs />}
          {active === "sidebar" && <SidebarDocs />}
        </div>
      </main>
      <Toaster />
    </div>
  )
}

export default App
