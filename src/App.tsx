import React, { useState, useEffect, useMemo, useRef } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
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
import { Badge, BadgeRound, BadgeDot } from "@/components/ui/badge"
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
  BreadcrumbEllipsis,
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
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
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
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
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
  Bell,
  Info,
  CircleCheck,
  TriangleAlert,
  CreditCard,
  LogOut,
  LifeBuoy,
  Calculator,
  Calendar as CalendarIcon,
  Smile,
  ChevronsUpDown,
  Home,
  Moon,
  Sun,
  Github,
  ArrowUp,
  X,
  Bug,
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
      <pre className="bg-slate-950 text-slate-100 rounded-b-xl p-md text-xs leading-relaxed overflow-x-auto font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute top-xs right-xs p-1.5 rounded-md text-xs font-mono flex items-center gap-1 transition-all ${
          copied
            ? "bg-green-700 text-white"
            : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
        }`}
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  )
}

/** Installation section with labeled code blocks */
function InstallationCopyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="relative group">
      <pre className="bg-slate-950 text-slate-100 p-md text-xs leading-relaxed overflow-x-auto font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute top-xs right-xs p-1.5 rounded-md text-xs font-mono flex items-center gap-1 transition-all opacity-0 group-hover:opacity-100 ${
          copied
            ? "bg-green-700 text-white opacity-100"
            : "bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white"
        }`}
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  )
}

function InstallationSection({ deps, importCode }: { deps: string; importCode: string }) {
  return (
    <section id="installation" className="space-y-md pt-3xl">
      <h2 className="font-heading font-semibold text-xl">Installation</h2>
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="px-md py-xs border-b border-border bg-muted/50">
          <span className="text-xs font-medium text-muted-foreground">Dependencies</span>
        </div>
        <InstallationCopyBlock code={deps} />
        <div className="px-md py-xs border-t border-border bg-muted/50">
          <span className="text-xs font-medium text-muted-foreground">Import</span>
        </div>
        <InstallationCopyBlock code={importCode} />
      </div>
    </section>
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
    <div className="rounded-xl border border-border overflow-hidden bg-background flex flex-col">
      <div className="px-xl pt-md pb-2xs border-b border-border bg-muted/50 space-y-2xs">
        <h3 className="font-body font-semibold text-sm">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-xs leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="px-xl py-lg flex flex-wrap items-center gap-sm bg-background flex-1">
        {children}
      </div>
      <div className="border-t border-border mt-auto">
        <button
          onClick={() => setShowCode(!showCode)}
          className="w-full flex items-center justify-between px-md py-xs text-xs text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors font-mono"
        >
          <span>{showCode ? "Hide code" : "View code"}</span>
          <ChevronRight
            className={`size-3.5 transition-transform duration-150 ${showCode ? "rotate-90" : ""}`}
          />
        </button>
        {showCode && <CodeBlock code={code} />}
      </div>
    </div>
  )
}

function DoItem({ children, text }: { children?: React.ReactNode; text?: string }) {
  return (
    <div className="flex-1 rounded-xl border-2 border-green-600 overflow-hidden">
      <div className="bg-green-600/10 px-md py-2xs text-xs font-semibold text-green-700 dark:text-green-400 flex items-center gap-2xs">
        <Check className="size-3" />
        Do
      </div>
      <div className="p-md space-y-2 text-xs text-foreground">{text ?? children}</div>
    </div>
  )
}

function DontItem({ children, text }: { children?: React.ReactNode; text?: string }) {
  return (
    <div className="flex-1 rounded-xl border-2 border-destructive overflow-hidden">
      <div className="bg-destructive/10 px-md py-2xs text-xs font-semibold text-destructive flex items-center gap-2xs">
        <span className="font-mono">&#x2715;</span>
        Don't
      </div>
      <div className="p-md space-y-2 text-xs text-foreground">{text ?? children}</div>
    </div>
  )
}

function FigmaMapping({
  id,
  nodeId,
  rows,
}: {
  id?: string
  nodeId?: string
  rows: [string, string, string, string][]
}) {
  return (
    <section id={id} className="space-y-4 pt-3xl">
      <h2 className="font-heading font-semibold text-xl">
        Figma Component Mapping
      </h2>
      <p className="typo-paragraph-sm text-muted-foreground">
        Reference for mapping Figma component properties to code props, based
        on the{" "}
        <strong>[SprouX - DS] Foundation & Component</strong>
        {nodeId && <> file (node {nodeId}).</>}
        {!nodeId && <> Figma file.</>}
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
            {rows.map(([figProp, figVal, codeProp, codeVal], i) => (
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
  )
}

type PlaygroundControl =
  | { type: "select"; label: string; prop: string; options: { label: string; value: string }[]; defaultValue: string }
  | { type: "switch"; label: string; prop: string; defaultValue: boolean }
  | { type: "text"; label: string; prop: string; defaultValue: string; placeholder?: string }

function Playground({
  controls,
  render,
}: {
  controls: PlaygroundControl[]
  render: (props: Record<string, any>) => React.ReactNode
}) {
  const [values, setValues] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {}
    for (const c of controls) initial[c.prop] = c.defaultValue
    return initial
  })
  const setValue = (prop: string, value: any) =>
    setValues((prev) => ({ ...prev, [prop]: value }))

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="bg-primary/5 p-4xl flex items-center justify-center min-h-[160px]">
        {render(values)}
      </div>
      {controls.length > 0 && (
        <div className="border-t border-border bg-muted/50 p-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
            {controls.map((control) => (
              <div key={control.prop} className="space-y-xs">
                <Label className="text-xs text-muted-foreground">
                  {control.label}
                </Label>
                {control.type === "select" && (
                  <Select
                    value={String(values[control.prop])}
                    onValueChange={(v) => setValue(control.prop, v)}
                  >
                    <SelectTrigger size="sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {control.options.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {o.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                {control.type === "switch" && (
                  <Switch
                    checked={!!values[control.prop]}
                    onCheckedChange={(v) => setValue(control.prop, v)}
                  />
                )}
                {control.type === "text" && (
                  <Input
                    size="sm"
                    value={String(values[control.prop])}
                    onChange={(e) => setValue(control.prop, e.target.value)}
                    placeholder={control.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

type TocSection = { id: string; label: string }

function TableOfContents({ sections }: { sections: TocSection[] }) {
  const [activeId, setActiveId] = useState<string>("")
  const sectionsRef = useRef(sections)
  sectionsRef.current = sections

  useEffect(() => {
    const root = document.getElementById("main-content")
    if (!root) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root,
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    )

    for (const section of sectionsRef.current) {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [sections])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    const root = document.getElementById("main-content")
    if (!el || !root) return
    const top = el.getBoundingClientRect().top + root.scrollTop - 80
    root.scrollTo({ top, behavior: "smooth" })
  }

  return (
    <nav className="hidden xl:block fixed right-8 top-24 w-56 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-xs px-sm">
        On this page
      </p>
      <ul className="space-y-0.5">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => handleClick(s.id)}
              className={[
                "w-full text-left px-sm py-1 text-xs rounded-md transition-colors border-l-2",
                activeId === s.id
                  ? "border-primary text-primary font-medium bg-primary/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
              ].join(" ")}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
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
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Colors
        </p>
        <h1 className="typo-heading-2">Colors</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
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
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Semantic Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
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
      <section className="space-y-6 pt-xl border-t border-border">
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
    { class: "typo-heading-1", label: "Heading 1", font: "Fraunces", weight: "600", size: "48px", lineHeight: "48px", letterSpacing: "-1.5px" },
    { class: "typo-heading-2", label: "Heading 2", font: "Fraunces", weight: "600", size: "30px", lineHeight: "32px", letterSpacing: "-1px" },
    { class: "typo-heading-3", label: "Heading 3", font: "Fraunces", weight: "600", size: "24px", lineHeight: "28.8px", letterSpacing: "-1px" },
    { class: "typo-heading-4", label: "Heading 4", font: "Geist", weight: "600", size: "20px", lineHeight: "24px", letterSpacing: "0" },
  ]

  const bodyStyles = [
    { class: "typo-paragraph-xl", label: "Extra Large", font: "Geist", weight: "400", size: "30px", lineHeight: "32px", letterSpacing: "-1px" },
    { class: "typo-paragraph-xl-medium", label: "Extra Large Medium", font: "Geist", weight: "500", size: "30px", lineHeight: "32px", letterSpacing: "-1px" },
    { class: "typo-paragraph-xl-bold", label: "Extra Large SemiBold", font: "Geist", weight: "600", size: "30px", lineHeight: "32px", letterSpacing: "-1px" },
    { class: "typo-paragraph-lg", label: "Large", font: "Geist", weight: "400", size: "20px", lineHeight: "24px", letterSpacing: "-1px" },
    { class: "typo-paragraph-lg-medium", label: "Large Medium", font: "Geist", weight: "500", size: "20px", lineHeight: "24px", letterSpacing: "-1px" },
    { class: "typo-paragraph-lg-bold", label: "Large SemiBold", font: "Geist", weight: "600", size: "20px", lineHeight: "24px", letterSpacing: "-1px" },
    { class: "typo-paragraph", label: "Regular", font: "Geist", weight: "400", size: "16px", lineHeight: "24px", letterSpacing: "0" },
    { class: "typo-paragraph-medium", label: "Regular Medium", font: "Geist", weight: "500", size: "16px", lineHeight: "24px", letterSpacing: "0" },
    { class: "typo-paragraph-bold", label: "Regular SemiBold", font: "Geist", weight: "600", size: "16px", lineHeight: "24px", letterSpacing: "0" },
    { class: "typo-paragraph-sm", label: "Small", font: "Geist", weight: "400", size: "14px", lineHeight: "20px", letterSpacing: "0.07px" },
    { class: "typo-paragraph-sm-medium", label: "Small Medium", font: "Geist", weight: "500", size: "14px", lineHeight: "20px", letterSpacing: "0.07px" },
    { class: "typo-paragraph-sm-bold", label: "Small SemiBold", font: "Geist", weight: "600", size: "14px", lineHeight: "20px", letterSpacing: "0.07px" },
    { class: "typo-paragraph-mini", label: "Mini", font: "Geist", weight: "400", size: "12px", lineHeight: "16px", letterSpacing: "0.18px" },
    { class: "typo-paragraph-mini-medium", label: "Mini Medium", font: "Geist", weight: "500", size: "12px", lineHeight: "16px", letterSpacing: "0.18px" },
    { class: "typo-paragraph-mini-bold", label: "Mini SemiBold", font: "Geist", weight: "600", size: "12px", lineHeight: "16px", letterSpacing: "0.18px" },
    { class: "typo-paragraph-tiny", label: "Tiny", font: "Geist", weight: "400", size: "10px", lineHeight: "12px", letterSpacing: "0.15px" },
    { class: "typo-paragraph-tiny-medium", label: "Tiny Medium", font: "Geist", weight: "500", size: "10px", lineHeight: "12px", letterSpacing: "0.15px" },
    { class: "typo-paragraph-tiny-bold", label: "Tiny SemiBold", font: "Geist", weight: "600", size: "10px", lineHeight: "12px", letterSpacing: "0.15px" },
    { class: "typo-monospaced", label: "Monospaced", font: "Geist Mono", weight: "400", size: "16px", lineHeight: "24px", letterSpacing: "0" },
  ]

  const allStyles = [...headings, ...bodyStyles]

  return (
    <div className="space-y-12">
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Typography
        </p>
        <h1 className="typo-heading-2">Typography</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          SprouX uses two typefaces: <strong>Fraunces</strong> for headings and
          display text, and <strong>Geist</strong> for body copy and UI elements.
          The type scale is designed for clarity and hierarchy.
        </p>
      </header>

      {/* Font Families */}
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Font Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
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
      <section className="space-y-6 pt-xl border-t border-border">
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
      <section className="space-y-6 pt-xl border-t border-border">
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
      <section className="space-y-4 pt-3xl">
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
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <Example
            title="Page title"
            description="Use Heading 1 or 2 for page-level titles."
            code={`<h1 className="typo-heading-2">Dashboard</h1>
<p className="typo-paragraph-sm text-muted-foreground">
  Welcome back, here's your overview.
</p>`}
          >
            <div>
              <h3 className="typo-heading-2">Dashboard</h3>
              <p className="typo-paragraph-sm text-muted-foreground">Welcome back, here's your overview.</p>
            </div>
          </Example>
          <Example
            title="Section header"
            description="Use Heading 4 or 5 for section titles within a page."
            code={`<h2 className="typo-heading-4">Recent Activity</h2>`}
          >
            <h3 className="typo-heading-4">Recent Activity</h3>
          </Example>
          <Example
            title="Card content"
            description="Combine paragraph sizes for content hierarchy."
            code={`<p className="typo-paragraph-sm-bold">Order #12345</p>
<p className="typo-paragraph-sm text-muted-foreground">
  Shipped on Feb 10, 2026
</p>
<p className="typo-paragraph-mini text-muted-foreground">
  Tracking: 1Z999AA10123456784
</p>`}
          >
            <div className="space-y-0.5">
              <p className="typo-paragraph-sm-bold">Order #12345</p>
              <p className="typo-paragraph-sm text-muted-foreground">Shipped on Feb 10, 2026</p>
              <p className="typo-paragraph-mini text-muted-foreground">Tracking: 1Z999AA10123456784</p>
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
            <p>Don't use raw pixel sizes — always use the utility classes (.typo-heading-*, .typo-paragraph-*).</p>
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
    { name: "3xs", value: "4px", css: "--spacing-3xs", tailwind: "p-3xs, m-3xs, gap-3xs" },
    { name: "2xs", value: "6px", css: "--spacing-2xs", tailwind: "p-2xs, m-2xs, gap-2xs" },
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
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Spacing
        </p>
        <h1 className="typo-heading-2">Spacing</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A consistent spacing scale based on a 4px grid, ranging from 2px to
          48px. Used for padding, margins, gaps, and layout composition.
        </p>
      </header>

      {/* Visual Scale */}
      <section className="space-y-6 pt-xl border-t border-border">
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
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
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
      <section className="space-y-4 pt-3xl">
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
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Border Radius
        </p>
        <h1 className="typo-heading-2">Border Radius</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A 4-step radius scale based on a base value of 8px (--radius). All
          values are derived from this base to maintain visual consistency.
        </p>
      </header>

      {/* Visual Scale */}
      <section className="space-y-6 pt-xl border-t border-border">
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
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
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
      <section className="space-y-4 pt-3xl">
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

/** Shared searchable icon picker — shows all Lucide icons via Command + Popover */
function IconPicker({ value, onChange, disabled, size = "sm" }: {
  value: string
  onChange: (name: string) => void
  disabled?: boolean
  size?: "sm" | "default"
}) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const filtered = useMemo(() => {
    if (!search) return allLucideIcons.slice(0, 60)
    const q = search.toLowerCase()
    return allLucideIcons.filter((i) => i.name.toLowerCase().includes(q)).slice(0, 60)
  }, [search])
  const SelectedIcon = allLucideIcons.find((i) => i.name === value)?.icon
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size={size} disabled={disabled} className="w-full justify-start gap-xs font-normal" role="combobox" aria-expanded={open}>
          {SelectedIcon ? <SelectedIcon className="size-md shrink-0 text-muted-foreground" /> : null}
          <span className="truncate text-muted-foreground">{value || "Select icon"}</span>
          <ChevronsUpDown className="ml-auto size-3 shrink-0 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0" align="start">
        <Command shouldFilter={false}>
          <CommandInput placeholder="Search icons..." value={search} onValueChange={setSearch} />
          <CommandList className="max-h-[240px]">
            <CommandEmpty>No icon found.</CommandEmpty>
            <CommandGroup>
              {filtered.map((item) => (
                <CommandItem key={item.name} value={item.name} onSelect={() => { onChange(item.name); setOpen(false); setSearch("") }}>
                  <item.icon className="size-md shrink-0 text-muted-foreground" />
                  <span className="truncate">{item.name}</span>
                  {item.name === value && <Check className="ml-auto size-3" />}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

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
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Icons
        </p>
        <h1 className="typo-heading-2">Icons</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          SprouX uses <strong>Lucide React</strong> as the primary icon library ({allLucideIcons.length} icons),
          plus a set of custom social/brand icons exported from Figma.
        </p>
      </header>

      <section className="space-y-3 pt-xl border-t border-border">
        <h2 className="typo-paragraph-bold">Import</h2>
        <CodeBlock code={`// Lucide icons (primary library)\nimport { Home, Search, Plus, Check } from "lucide-react"\n\n// Custom social icons (SVG imports)\nimport tiktokIcon from "@/assets/icons/tiktok.svg"\nimport instagramIcon from "@/assets/icons/instagram.svg"`} />
      </section>

      <section className="space-y-6 pt-xl border-t border-border">
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

      <section className="space-y-4 pt-3xl">
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

      <section className="space-y-4 pt-3xl">
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

      <section className="space-y-4 pt-3xl">
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
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Foundation / Illustrations
        </p>
        <h1 className="typo-heading-2">Illustrations</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          {illustrations.length} illustration assets from the SprouX Figma design system.
          Used for empty states, success/error screens, onboarding, and feature highlights.
          Each illustration follows a circular safezone rule for consistent visual alignment.
        </p>
      </header>

      <section className="space-y-3 pt-xl border-t border-border">
        <h2 className="typo-paragraph-bold">Import</h2>
        <CodeBlock code={`import illustSuccess from "@/assets/illustrations/success.svg"\nimport illustError from "@/assets/illustrations/error.svg"\nimport illustEmpty from "@/assets/illustrations/empty.svg"\n\n// Usage\n<img src={illustSuccess} alt="Success" className="w-48" />`} />
      </section>

      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Safezone Rule</h2>
        <div className="rounded-xl border border-border p-6 bg-muted/50 max-w-lg">
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

      <section className="space-y-6 pt-xl border-t border-border">
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

      <section className="space-y-4 pt-3xl">
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

function ButtonExploreBehavior() {
  const [variant, setVariant] = useState("default")
  const [size, setSize] = useState("default")
  const [state, setState] = useState("Default")
  const [showLeftIcon, setShowLeftIcon] = useState(false)
  const [showRightIcon, setShowRightIcon] = useState(false)
  const [leftIcon, setLeftIcon] = useState("Plus")
  const [rightIcon, setRightIcon] = useState("ArrowRight")

  const isDisabled = state === "Disabled"
  const isHover = state === "Hover & Active"
  const isFocus = state === "Focus"

  const LeftIconComp = allLucideIcons.find((i) => i.name === leftIcon)?.icon ?? Plus
  const RightIconComp = allLucideIcons.find((i) => i.name === rightIcon)?.icon ?? ArrowRight

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="bg-primary/5 p-4xl flex items-center justify-center min-h-[160px]">
        <div className={[
          "pointer-events-none",
          isHover ? "[&_[data-slot=button]]:ring-0" : "",
          isFocus ? "[&_[data-slot=button]]:ring-[3px] [&_[data-slot=button]]:ring-ring" : "",
        ].filter(Boolean).join(" ")}>
          <Button
            variant={variant as "default"}
            size={size as "default"}
            disabled={isDisabled}
            className={[
              isHover && (variant === "default" ? "bg-primary-hover" : ""),
              isHover && (variant === "secondary" ? "bg-secondary-hover" : ""),
              isHover && (variant === "outline" ? "bg-outline-hover" : ""),
              isHover && (variant === "ghost" || variant === "ghost-muted" ? "bg-ghost-hover text-foreground" : ""),
              isHover && (variant === "destructive" ? "bg-destructive" : ""),
              isHover && (variant === "destructive-secondary" ? "bg-destructive-subtle" : ""),
              isFocus && (variant === "destructive" || variant === "destructive-secondary")
                ? "!ring-ring-error" : "",
            ].filter(Boolean).join(" ")}
          >
            {showLeftIcon && <LeftIconComp />}
            Button
            {showRightIcon && <RightIconComp />}
          </Button>
        </div>
      </div>
      <div className="border-t border-border bg-muted/50 p-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-md">
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Variant</Label>
            <Select value={variant} onValueChange={setVariant}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Primary</SelectItem>
                <SelectItem value="secondary">Secondary</SelectItem>
                <SelectItem value="outline">Outline</SelectItem>
                <SelectItem value="ghost">Ghost</SelectItem>
                <SelectItem value="ghost-muted">Ghost Muted</SelectItem>
                <SelectItem value="destructive">Destructive</SelectItem>
                <SelectItem value="destructive-secondary">Destructive Secondary</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Size</Label>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="lg">Large (40px)</SelectItem>
                <SelectItem value="default">Regular (36px)</SelectItem>
                <SelectItem value="sm">Small (32px)</SelectItem>
                <SelectItem value="xs">Mini (24px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">State</Label>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Default">Default</SelectItem>
                <SelectItem value="Hover & Active">Hover & Active</SelectItem>
                <SelectItem value="Focus">Focus</SelectItem>
                <SelectItem value="Disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Show Left Icon</Label>
            <div className="pt-1">
              <Switch checked={showLeftIcon} onCheckedChange={setShowLeftIcon} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Show Right Icon</Label>
            <div className="pt-1">
              <Switch checked={showRightIcon} onCheckedChange={setShowRightIcon} />
            </div>
          </div>
          {showLeftIcon && (
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Left Icon</Label>
              <IconPicker value={leftIcon} onChange={setLeftIcon} size="sm" />
            </div>
          )}
          {showRightIcon && (
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Right Icon</Label>
              <IconPicker value={rightIcon} onChange={setRightIcon} size="sm" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const buttonSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

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
      <TableOfContents sections={buttonSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Actions
        </p>
        <h1 className="typo-heading-2">Button</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Buttons are used primarily for actions, such as "Add", "Close",
          "Cancel", or "Save". Plain buttons, which look similar to links, are
          used for less prominent actions or navigation.
        </p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <ButtonExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react`}
        importCode={`import { Button } from "@/components/ui/button"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Default */}
        <Example
          title="Default button"
          description="Use for primary actions in any context. The main action in a dialog or submit button in a form."
          code={`<Button>Save</Button>`}
        >
          <Button>Save</Button>
        </Example>

        {/* All variants */}
        <Example
          title="All variants"
          description="7 variants to communicate the importance and nature of the action."
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

        {/* Secondary + Primary pair */}
        <Example
          title="Primary + Secondary pair"
          description="Pair primary with secondary for action hierarchy. Common in dialogs and form footers."
          code={`<Button>Save</Button>
<Button variant="secondary">Cancel</Button>`}
        >
          <Button>Save</Button>
          <Button variant="secondary">Cancel</Button>
        </Example>

        {/* Outline + Ghost */}
        <Example
          title="Outline & Ghost"
          description="Lower emphasis options for secondary or toolbar-level actions."
          code={`<Button variant="outline">Configure</Button>
<Button variant="ghost">Edit</Button>
<Button variant="ghost-muted">More options</Button>`}
        >
          <Button variant="outline">Configure</Button>
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost-muted">More options</Button>
        </Example>

        {/* Destructive */}
        <Example
          title="Destructive actions"
          description="Use for irreversible or high-consequence actions like deleting a resource."
          code={`<Button variant="destructive">Delete account</Button>
<Button variant="destructive-secondary">Remove</Button>`}
        >
          <Button variant="destructive">Delete account</Button>
          <Button variant="destructive-secondary">Remove</Button>
        </Example>

        {/* Sizes */}
        <Example
          title="Sizes"
          description="4 content sizes: Large (40px), Regular (36px), Small (32px), Mini (24px)."
          code={`<Button size="lg">Large</Button>
<Button size="default">Regular</Button>
<Button size="sm">Small</Button>
<Button size="xs">Mini</Button>`}
        >
          <Button size="lg">Large</Button>
          <Button size="default">Regular</Button>
          <Button size="sm">Small</Button>
          <Button size="xs">Mini</Button>
        </Example>

        {/* With icon */}
        <Example
          title="With icon"
          description="Place icons before the label to clarify meaning, or after to indicate direction. Icons auto-size to 16px."
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
          title="Icon-only"
          description="3 icon-only sizes for compact UIs. Always provide aria-label for accessibility."
          code={`<Button size="icon-lg" aria-label="Add"><Plus /></Button>
<Button size="icon" aria-label="Add"><Plus /></Button>
<Button size="icon-sm" aria-label="Add"><Plus /></Button>

<span className="w-px h-6 bg-border" />

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
          description="50% opacity, no pointer events. Use sparingly — prefer hiding unavailable actions."
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
          title="Loading state"
          description="Combine disabled prop with a spinner icon to indicate in-progress action."
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
          description="Render as <a> or router Link while keeping button styles. Useful for navigation actions."
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
          title="Full width"
          description="Stretch to container width. Common in mobile layouts, modals, or form footers."
          code={`<div className="w-full space-y-2">\n  <Button className="w-full">Submit form</Button>\n  <Button variant="secondary" className="w-full">Cancel</Button>\n</div>`}
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
          title="Click handler"
          description="Forwards all native button events including onClick."
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
          title="Async action"
          description="Disable + spinner during async operation, then show success feedback."
          code={`const handleAsyncSave = async () => {
  setLoading(true)
  await new Promise((r) => setTimeout(r, 1500))
  setLoading(false); setSaved(true)
}

<Button onClick={handleAsyncSave} disabled={loading}>
  {loading ? <><Loader2 className="animate-spin" /> Saving...</>
   : saved ? <><Check /> Saved!</>
   : "Save changes"}
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
          title="Confirm destructive"
          description="Two-step confirmation pattern for dangerous actions."
          code={`const [confirmed, setConfirmed] = useState(false)

{!confirmed ? (
  <Button variant="destructive-secondary" onClick={() => setConfirmed(true)}>
    <Trash2 /> Delete project
  </Button>
) : (
  <div className="flex gap-2 items-center">
    <span className="text-xs text-red-500 font-medium">Are you sure?</span>
    <Button variant="destructive" onClick={() => { alert("Deleted!"); setConfirmed(false) }}>Yes, delete</Button>
    <Button variant="secondary" onClick={() => setConfirmed(false)}>Cancel</Button>
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
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Button extends all native{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            {"<button>"}
          </code>{" "}
          HTML attributes in addition to the following:
        </p>
        <ButtonPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
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
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Use clear, concise action verbs:{" "}
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
              <p>Don't end button labels with punctuation.</p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Use <strong>Primary</strong> for the single most important
                action per section — one primary CTA only.
              </p>
              <p>
                Use <strong>Secondary</strong> or <strong>Outline</strong> for
                supporting actions alongside a primary button.
              </p>
              <p>
                Use <strong>Destructive</strong> only for irreversible or
                high-consequence actions (delete, remove, revoke).
              </p>
              <p>
                Match button <strong>size</strong> to surrounding UI density:
                Regular for forms, Small/Mini for compact areas.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use multiple primary buttons in the same section — it
                dilutes visual hierarchy.
              </p>
              <p>
                Don't use destructive styling for reversible actions like
                "Cancel" or "Close".
              </p>
              <p>
                Don't use Ghost buttons without clear affordance — users may
                not recognize them as interactive.
              </p>
              <p>
                Don't use Button for inline text navigation — use Link instead.
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
      <FigmaMapping id="figma-mapping" nodeId="9:1071" rows={[
        ["Variant", "Primary", "variant", '"default"'],
        ["Variant", "Secondary", "variant", '"secondary"'],
        ["Variant", "Outline", "variant", '"outline"'],
        ["Variant", "Ghost", "variant", '"ghost"'],
        ["Variant", "Ghost Muted", "variant", '"ghost-muted"'],
        ["Variant", "Destructive", "variant", '"destructive"'],
        ["Variant", "Destructive Secondary", "variant", '"destructive-secondary"'],
        ["Size", "Large (40px)", "size", '"lg"'],
        ["Size", "Regular (36px)", "size", '"default"'],
        ["Size", "Small (32px)", "size", '"sm"'],
        ["Size", "Mini (24px)", "size", '"xs"'],
        ["Size", "Icon-only (40px)", "size", '"icon-lg"'],
        ["Size", "Icon-only (36px)", "size", '"icon"'],
        ["Size", "Icon-only (32px)", "size", '"icon-sm"'],
        ["State", "Default", "—", "default"],
        ["State", "Hover & Active", "—", "CSS :hover / :active"],
        ["State", "Focus", "—", "CSS :focus-visible"],
        ["State", "Disabled", "disabled", "true"],
        ["Show Left Icon", "true", "children", "<Icon /> Label"],
        ["Show Right Icon", "true", "children", "Label <Icon />"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
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
                --ring (#e9e9e7)
              </code>{" "}
              for standard variants and{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --ring-error (#fecaca)
              </code>{" "}
              for destructive variants. This meets WCAG 2.1 focus visibility
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Toggle</p>
              <p className="text-muted-foreground mt-0.5">
                For toggling between states (on/off). Use instead of Button when the action is a state toggle.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
              Available
            </span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">ButtonGroup</p>
              <p className="text-muted-foreground mt-0.5">
                Groups related buttons together with consistent spacing for segmented controls.
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
                For inline text navigation. Use instead of Ghost Button for navigation that should look like a link.
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

const inputSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

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
      <TableOfContents sections={inputSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="typo-heading-2">Input</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A text input field that allows users to enter and edit a single line
          of text. Supports multiple sizes and states including focus, error,
          and disabled.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Size", prop: "size", defaultValue: "default", options: [
            { label: "Large (40px)", value: "lg" },
            { label: "Default (36px)", value: "default" },
            { label: "Small (32px)", value: "sm" },
            { label: "Mini (24px)", value: "xs" },
          ]},
          { type: "switch", label: "Disabled", prop: "disabled", defaultValue: false },
          { type: "switch", label: "Error", prop: "error", defaultValue: false },
          { type: "text", label: "Placeholder", prop: "placeholder", defaultValue: "Type something…", placeholder: "Placeholder text" },
        ]}
        render={(p) => (
          <Input
            size={p.size}
            disabled={p.disabled}
            aria-invalid={p.error || undefined}
            placeholder={p.placeholder}
            className="max-w-xs"
          />
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add class-variance-authority clsx tailwind-merge`}
        importCode={`import { Input } from "@/components/ui/input"`}
      />

      {/* ---- Examples ---- */}
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
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
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Input extends all native{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            {"<input>"}
          </code>{" "}
          HTML attributes (except <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">size</code>, which is replaced by the variant prop) in addition to the following:
        </p>
        <InputPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
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
      <section className="space-y-6 pt-xl border-t border-border">
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
      <FigmaMapping nodeId="2250:904" rows={[
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
      ]} />

      {/* ---- Accessibility ---- */}
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
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

const textareaSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

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
      <TableOfContents sections={textareaSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="typo-heading-2">Textarea</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A multi-line text input for longer content like descriptions,
          messages, or comments. Supports the same states as Input: focus,
          error, and disabled.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "switch", label: "Disabled", prop: "disabled", defaultValue: false },
          { type: "switch", label: "Error", prop: "error", defaultValue: false },
          { type: "text", label: "Placeholder", prop: "placeholder", defaultValue: "Type your message here.", placeholder: "Placeholder text" },
        ]}
        render={(p) => (
          <Textarea
            disabled={p.disabled}
            aria-invalid={p.error || undefined}
            placeholder={p.placeholder}
            className="max-w-sm"
          />
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add clsx tailwind-merge`}
        importCode={`import { Textarea } from "@/components/ui/textarea"`}
      />

      {/* ---- Examples ---- */}
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
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
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Textarea extends all native{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            {"<textarea>"}
          </code>{" "}
          HTML attributes in addition to the following:
        </p>
        <TextareaPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
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
      <section className="space-y-6 pt-xl border-t border-border">
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
      <FigmaMapping nodeId="2256:175" rows={[
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
      ]} />

      {/* ---- Accessibility ---- */}
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
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

const selectSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

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
      <TableOfContents sections={selectSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="typo-heading-2">Select</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A dropdown control for selecting a single option from a list. Built on
          Radix UI Select for full keyboard navigation, accessibility, and
          portal-based positioning.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Size", prop: "size", defaultValue: "default", options: [
            { label: "Large (40px)", value: "lg" },
            { label: "Default (36px)", value: "default" },
            { label: "Small (32px)", value: "sm" },
            { label: "Mini (24px)", value: "xs" },
          ]},
          { type: "switch", label: "Disabled", prop: "disabled", defaultValue: false },
          { type: "switch", label: "Error", prop: "error", defaultValue: false },
        ]}
        render={(p) => (
          <Select disabled={p.disabled}>
            <SelectTrigger size={p.size} aria-invalid={p.error || undefined} className="w-[200px]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-select class-variance-authority clsx tailwind-merge lucide-react`}
        importCode={`import {\n  Select,\n  SelectContent,\n  SelectGroup,\n  SelectItem,\n  SelectLabel,\n  SelectSeparator,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/ui/select"`}
      />

      {/* ---- Examples ---- */}
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
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
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Select is a compound component built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            @radix-ui/react-select
          </code>
          . Key props by sub-component:
        </p>
        <SelectPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
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
      <section className="space-y-6 pt-xl border-t border-border">
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
      <FigmaMapping nodeId="16:1732" rows={[
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
      ]} />

      {/* ---- Accessibility ---- */}
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
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

function CheckboxExploreTab({ children, controls }: { children: React.ReactNode; controls: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden bg-background">
      <div className="p-4xl flex items-center justify-center min-h-[200px] bg-background">
        {children}
      </div>
      <div className="border-t border-border bg-muted/50 p-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
          {controls}
        </div>
      </div>
    </div>
  )
}

function CheckboxExploreBehavior() {
  // --- Checkbox ---
  const [cbChecked, setCbChecked] = useState("False")
  const [cbState, setCbState] = useState("Default")
  // --- Checkbox Group ---
  const [grpChecked, setGrpChecked] = useState("False")
  const [grpState, setGrpState] = useState("Default")
  // --- Rich ---
  const [richChecked, setRichChecked] = useState(false)
  const [richFlipped, setRichFlipped] = useState(false)
  const [richShowLine2, setRichShowLine2] = useState(false)
  // --- Rich Advanced ---
  const [raState, setRaState] = useState("Default")
  const [raIconSize, setRaIconSize] = useState("Regular")
  const [raIconName, setRaIconName] = useState("Mail")
  const [raRecommended, setRaRecommended] = useState(true)
  const [raSubTitle, setRaSubTitle] = useState(true)
  const [raSubTitle2, setRaSubTitle2] = useState(true)
  const [raSubTitle3, setRaSubTitle3] = useState(true)
  const [raDescription, setRaDescription] = useState(true)

  const RaIconComp = allLucideIcons.find((i) => i.name === raIconName)?.icon ?? Mail
  const raIsDisabled = raState === "Disabale" || raState === "Disabale Checked"
  const raIsSelected = raState === "Active" || raState === "Selected" || raState === "Selected - Hover" || raState === "Disabale Checked"
  const raIsHover = raState === "Hover" || raState === "Selected - Hover"

  return (
    <Tabs defaultValue="checkbox">
      <TabsList>
        <TabsTrigger value="checkbox">Checkbox</TabsTrigger>
        <TabsTrigger value="group">Group</TabsTrigger>
        <TabsTrigger value="rich">Rich</TabsTrigger>
        <TabsTrigger value="richAdvanced">Rich Advanced</TabsTrigger>
      </TabsList>

      {/* ---- Tab: Checkbox ---- */}
      <TabsContent value="checkbox" className="mt-md">
        <CheckboxExploreTab
          controls={<>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Checked?</Label>
              <Select value={cbChecked} onValueChange={setCbChecked}>
                <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="False">False</SelectItem>
                  <SelectItem value="True">True</SelectItem>
                  <SelectItem value="Indeterminate">Indeterminate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">State</Label>
              <Select value={cbState} onValueChange={setCbState}>
                <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Focus">Focus</SelectItem>
                  <SelectItem value="Error">Error</SelectItem>
                  <SelectItem value="Error Focus">Error Focus</SelectItem>
                  <SelectItem value="Disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>}
        >
          <Checkbox
            checked={cbChecked === "True" ? true : cbChecked === "Indeterminate" ? "indeterminate" as const : false}
            disabled={cbState === "Disabled"}
            aria-invalid={cbState === "Error" || cbState === "Error Focus" || undefined}
            className={[
              cbState === "Focus" ? "ring-[3px] ring-ring" : "",
              cbState === "Error Focus" ? "ring-[3px] ring-ring-error" : "",
            ].filter(Boolean).join(" ")}
          />
        </CheckboxExploreTab>
      </TabsContent>

      {/* ---- Tab: Checkbox Group ---- */}
      <TabsContent value="group" className="mt-md">
        <CheckboxExploreTab
          controls={<>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Checked?</Label>
              <Select value={grpChecked} onValueChange={setGrpChecked}>
                <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="False">False</SelectItem>
                  <SelectItem value="True">True</SelectItem>
                  <SelectItem value="Indeterminate">Indeterminate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">State</Label>
              <Select value={grpState} onValueChange={setGrpState}>
                <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Error">Error</SelectItem>
                  <SelectItem value="Disable">Disable</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>}
        >
          <div className={[
            "flex items-center gap-xs",
            grpState === "Disable" ? "opacity-50" : "",
          ].filter(Boolean).join(" ")}>
            <Checkbox
              checked={grpChecked === "True" ? true : grpChecked === "Indeterminate" ? "indeterminate" as const : false}
              disabled={grpState === "Disable"}
              aria-invalid={grpState === "Error" || undefined}
            />
            <Label className="typo-paragraph-sm text-muted-foreground">Label</Label>
          </div>
        </CheckboxExploreTab>
      </TabsContent>

      {/* ---- Tab: Rich (Figma 19:6351) ---- */}
      <TabsContent value="rich" className="mt-md">
        <CheckboxExploreTab
          controls={<>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Checked?</Label>
              <div className="pt-1">
                <Switch checked={richChecked} onCheckedChange={setRichChecked} />
              </div>
            </div>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Flipped</Label>
              <div className="pt-1">
                <Switch checked={richFlipped} onCheckedChange={setRichFlipped} />
              </div>
            </div>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Show Line 2</Label>
              <div className="pt-1">
                <Switch checked={richShowLine2} onCheckedChange={setRichShowLine2} />
              </div>
            </div>
          </>}
        >
          {/* Figma 19:6351: 240w, HORIZONTAL, gap=8, pad=12h/8v
              border=1px #e9e9e7 (--border), fill=#fff (--card), corner=10px
              Aligner(16×18.5, center checkbox) + AL(vertical, grow=1, Label + Secondary text) */}
          <div className={[
            "flex gap-xs px-sm py-xs w-[240px] rounded-[10px] border border-border bg-card",
            richFlipped ? "flex-row-reverse" : "",
          ].filter(Boolean).join(" ")}>
            <div className="shrink-0 flex items-center h-5">
              <Checkbox checked={richChecked} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="typo-paragraph-sm text-muted-foreground">Label</p>
              {richShowLine2 && (
                <p className="text-xs leading-[16px] text-muted-foreground">Secondary text</p>
              )}
            </div>
          </div>
        </CheckboxExploreTab>
      </TabsContent>

      {/* ---- Tab: Rich Advanced (Figma 2748:542) ---- */}
      <TabsContent value="richAdvanced" className="mt-md">
        <CheckboxExploreTab
          controls={<>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">State</Label>
              <Select value={raState} onValueChange={setRaState}>
                <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Hover">Hover</SelectItem>
                  <SelectItem value="Disabale">Disable</SelectItem>
                  <SelectItem value="Disabale Checked">Disable Checked</SelectItem>
                  <SelectItem value="Selected">Selected</SelectItem>
                  <SelectItem value="Selected - Hover">Selected - Hover</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Icon Size</Label>
              <Select value={raIconSize} onValueChange={setRaIconSize}>
                <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Regular">Regular</SelectItem>
                  <SelectItem value="Small">Small</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-xs">
              <Label className="text-xs text-muted-foreground">Icon</Label>
              <IconPicker value={raIconName} onChange={setRaIconName} size="sm" />
            </div>
            {raIconSize === "Regular" && (<>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Recommended</Label>
                <div className="pt-1">
                  <Switch checked={raRecommended} onCheckedChange={setRaRecommended} />
                </div>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Sub-Title</Label>
                <div className="pt-1">
                  <Switch checked={raSubTitle} onCheckedChange={setRaSubTitle} />
                </div>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Sub-Title 2</Label>
                <div className="pt-1">
                  <Switch checked={raSubTitle2} onCheckedChange={setRaSubTitle2} />
                </div>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Sub-Title 3</Label>
                <div className="pt-1">
                  <Switch checked={raSubTitle3} onCheckedChange={setRaSubTitle3} />
                </div>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Description</Label>
                <div className="pt-1">
                  <Switch checked={raDescription} onCheckedChange={setRaDescription} />
                </div>
              </div>
            </>)}
          </>}
        >
          {/* Figma Regular: 720w, gap=12, pad=16, corner=12, stroke=1 */}
          {/* Figma Small: 720w, gap=8, pad=16h/12v, corner=12, stroke=1 */}
          {raIconSize === "Regular" ? (
            <div className={[
              "flex gap-sm p-md rounded-xl border w-full max-w-[720px] transition-all",
              raIsSelected ? "border-border-strong" : "border-border",
              raIsDisabled ? "bg-muted" : "bg-card",
              raIsHover ? "shadow" : "",
            ].filter(Boolean).join(" ")}>
              <RaIconComp className="size-3xl shrink-0 text-foreground" />
              <div className="flex-1 min-w-0 space-y-xs">
                <div className="space-y-3xs">
                  <div className="flex items-center gap-sm">
                    <span className="font-semibold text-base leading-6 text-foreground flex-1">Landing Page</span>
                    {raRecommended && (
                      <span className="text-xs bg-[#eff6ff] text-[#2563eb] px-xs py-3xs rounded-full shrink-0">
                        Recommended
                      </span>
                    )}
                    <Checkbox checked={raIsSelected} disabled={raIsDisabled} className="shrink-0" />
                  </div>
                  {(raSubTitle || raSubTitle2 || raSubTitle3) && (
                    <div className="flex items-center gap-xs flex-wrap typo-paragraph-sm text-card-foreground">
                      {raSubTitle && <span>Auto-tracked landing page</span>}
                      {raSubTitle && raSubTitle2 && <span className="text-muted-foreground">•</span>}
                      {raSubTitle2 && <span>1-2 days</span>}
                      {(raSubTitle || raSubTitle2) && raSubTitle3 && <span className="text-muted-foreground">•</span>}
                      {raSubTitle3 && <span>22% audience interest</span>}
                    </div>
                  )}
                </div>
                {raDescription && (
                  <p className="typo-paragraph-sm text-muted-foreground">Includes SEO optimization, custom domain support, and integration with marketing tools.</p>
                )}
              </div>
            </div>
          ) : (
            <div className={[
              "flex items-center gap-xs px-md py-sm rounded-xl border w-full max-w-[720px] transition-all",
              raIsSelected ? "border-border-strong" : "border-border",
              raIsDisabled ? "bg-muted" : "bg-card",
              raIsHover ? "shadow" : "",
            ].filter(Boolean).join(" ")}>
              <RaIconComp className="size-lg shrink-0 text-muted-foreground" />
              <span className="typo-paragraph-sm text-foreground flex-1 min-w-0 truncate">Landing Page</span>
              <Checkbox checked={raIsSelected} disabled={raIsDisabled} className="shrink-0" />
            </div>
          )}
        </CheckboxExploreTab>
      </TabsContent>
    </Tabs>
  )
}

const checkboxSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

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
      <TableOfContents sections={checkboxSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="typo-heading-2">Checkbox</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A 16×16 toggle for boolean or tri-state values. Supports checked,
          unchecked, and indeterminate states with full keyboard navigation.
        </p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <CheckboxExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-checkbox lucide-react`}
        importCode={`import { Checkbox } from "@/components/ui/checkbox"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

          {/* Rich checkbox */}
          <Example
            title="Rich checkbox"
            description="Checkbox with label and secondary text in a bordered card — matches Figma Checkbox Group/Rich."
            code={`<div className="flex gap-xs px-sm py-xs rounded-[10px] border border-border bg-card w-[240px]">
  <div className="shrink-0 flex items-center h-5">
    <Checkbox id="rich" defaultChecked />
  </div>
  <div className="flex-1">
    <label htmlFor="rich" className="typo-paragraph-sm text-muted-foreground cursor-pointer">
      Marketing emails
    </label>
    <p className="text-xs leading-[16px] text-muted-foreground">
      Receive emails about new products, features, and more.
    </p>
  </div>
</div>`}
          >
            <div className="flex gap-xs px-sm py-xs rounded-[10px] border border-border bg-card w-[240px]">
              <div className="shrink-0 flex items-center h-5"><Checkbox id="rich-demo" defaultChecked /></div>
              <div className="flex-1">
                <label htmlFor="rich-demo" className="typo-paragraph-sm text-muted-foreground cursor-pointer select-none">
                  Marketing emails
                </label>
                <p className="text-xs leading-[16px] text-muted-foreground">
                  Receive emails about new products, features, and more.
                </p>
              </div>
            </div>
          </Example>

          {/* Rich flipped */}
          <Example
            title="Rich flipped"
            description="Rich checkbox with flipped layout — text on left, checkbox on right."
            code={`<div className="flex gap-xs px-sm py-xs rounded-[10px] border border-border bg-card w-[240px] flex-row-reverse">
  <div className="shrink-0 flex items-center h-5">
    <Checkbox id="flipped" />
  </div>
  <div className="flex-1">
    <label htmlFor="flipped" className="typo-paragraph-sm text-muted-foreground cursor-pointer">
      Push notifications
    </label>
    <p className="text-xs leading-[16px] text-muted-foreground">
      Get notified on your device.
    </p>
  </div>
</div>`}
          >
            <div className="flex gap-xs px-sm py-xs rounded-[10px] border border-border bg-card w-[240px] flex-row-reverse">
              <div className="shrink-0 flex items-center h-5"><Checkbox id="flipped-demo" /></div>
              <div className="flex-1">
                <label htmlFor="flipped-demo" className="typo-paragraph-sm text-muted-foreground cursor-pointer select-none">
                  Push notifications
                </label>
                <p className="text-xs leading-[16px] text-muted-foreground">
                  Get notified on your device.
                </p>
              </div>
            </div>
          </Example>

          {/* Rich Advanced card */}
          <Example
            title="Rich Advanced card"
            description="Card-style checkbox — matches Figma Checkbox Group/Rich Advanced (Regular)."
            code={`<div className="flex gap-sm p-md rounded-xl border border-border bg-card w-full">
  <Mail className="size-3xl shrink-0 text-foreground" />
  <div className="flex-1 min-w-0 space-y-xs">
    <div className="flex items-center gap-sm">
      <span className="font-semibold text-base leading-6 text-foreground flex-1">Landing Page</span>
      <span className="text-xs bg-[#eff6ff] text-[#2563eb] px-xs py-3xs rounded-full">Recommended</span>
      <Checkbox defaultChecked />
    </div>
    <div className="flex items-center gap-xs typo-paragraph-sm text-card-foreground">
      <span>Auto-tracked</span>
      <span className="text-muted-foreground">•</span>
      <span>1-2 days</span>
    </div>
    <p className="typo-paragraph-sm text-muted-foreground">SEO optimization and custom domain support.</p>
  </div>
</div>`}
          >
            <div className="flex gap-sm p-md rounded-xl border border-border bg-card w-full max-w-[480px]">
              <Mail className="size-3xl shrink-0 text-foreground" />
              <div className="flex-1 min-w-0 space-y-xs">
                <div className="flex items-center gap-sm">
                  <span className="font-semibold text-base leading-6 text-foreground flex-1">Landing Page</span>
                  <span className="text-xs bg-[#eff6ff] text-[#2563eb] px-xs py-3xs rounded-full shrink-0">Recommended</span>
                  <Checkbox defaultChecked className="shrink-0" />
                </div>
                <div className="flex items-center gap-xs typo-paragraph-sm text-card-foreground">
                  <span>Auto-tracked</span>
                  <span className="text-muted-foreground">•</span>
                  <span>1-2 days</span>
                </div>
                <p className="typo-paragraph-sm text-muted-foreground">SEO optimization and custom domain support.</p>
              </div>
            </div>
          </Example>

          {/* Rich Advanced small */}
          <Example
            title="Rich Advanced (small)"
            description="Compact card checkbox — matches Figma Checkbox Group/Rich Advanced (Small)."
            code={`<div className="flex items-center gap-xs px-md py-sm rounded-xl border border-border bg-card w-full">
  <Bug className="size-lg shrink-0 text-muted-foreground" />
  <span className="typo-paragraph-sm text-foreground flex-1">Bug Report</span>
  <Checkbox />
</div>`}
          >
            <div className="flex items-center gap-xs px-md py-sm rounded-xl border border-border bg-card w-full max-w-[480px]">
              <Bug className="size-lg shrink-0 text-muted-foreground" />
              <span className="typo-paragraph-sm text-foreground flex-1">Bug Report</span>
              <Checkbox className="shrink-0" />
            </div>
          </Example>

        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Extends{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            Radix CheckboxPrimitive.Root
          </code>{" "}
          — all native props forwarded.
        </p>
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
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">checked</td>
                <td className="px-4 py-3 font-mono">boolean | "indeterminate"</td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Controlled checked state</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">defaultChecked</td>
                <td className="px-4 py-3 font-mono">boolean</td>
                <td className="px-4 py-3 text-muted-foreground">false</td>
                <td className="px-4 py-3 text-muted-foreground">Initial checked state (uncontrolled)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">onCheckedChange</td>
                <td className="px-4 py-3 font-mono">{"(checked: boolean | \"indeterminate\") => void"}</td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Called when checked state changes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">disabled</td>
                <td className="px-4 py-3 font-mono">boolean</td>
                <td className="px-4 py-3 text-muted-foreground">false</td>
                <td className="px-4 py-3 text-muted-foreground">Disables the checkbox</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">name</td>
                <td className="px-4 py-3 font-mono">string</td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Form field name</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">value</td>
                <td className="px-4 py-3 font-mono">string</td>
                <td className="px-4 py-3 text-muted-foreground">"on"</td>
                <td className="px-4 py-3 text-muted-foreground">Value submitted with forms</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">required</td>
                <td className="px-4 py-3 font-mono">boolean</td>
                <td className="px-4 py-3 text-muted-foreground">false</td>
                <td className="px-4 py-3 text-muted-foreground">Marks the checkbox as required</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">aria-invalid</td>
                <td className="px-4 py-3 font-mono">boolean</td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Triggers error styling (destructive border & fill)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">className</td>
                <td className="px-4 py-3 font-mono">string</td>
                <td className="px-4 py-3 text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Additional CSS classes merged via cn()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">
            src/index.css
          </code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              {[
                { token: "--border", value: "var(--color-slate-200)", hex: "#e2e2e0", usage: "Unchecked border" },
                { token: "--input", value: "#ffffff", hex: "#ffffff", usage: "Unchecked background" },
                { token: "--primary", value: "var(--color-teal-700)", hex: "#0f766e", usage: "Checked background & border" },
                { token: "--primary-foreground", value: "#ffffff", hex: "#ffffff", usage: "Check icon color" },
                { token: "--ring", value: "var(--color-slate-200)", hex: "#e2e2e0", usage: "Focus ring" },
                { token: "--destructive", value: "var(--color-red-600)", hex: "#dc2626", usage: "Error checked fill" },
                { token: "--destructive-border", value: "var(--color-red-500)", hex: "#ef4444", usage: "Error unchecked border" },
                { token: "--ring-error", value: "var(--color-red-200)", hex: "#fecaca", usage: "Error focus ring" },
                { token: "--radius-sm", value: "4px", hex: "—", usage: "Checkbox border radius" },
              ].map((t) => (
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
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Labeling & Semantics</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Always pair with a visible{" "}
                <code className="bg-muted px-1 rounded font-mono">{"<label>"}</code>{" "}
                linked via <code className="bg-muted px-1 rounded font-mono">id</code> / <code className="bg-muted px-1 rounded font-mono">htmlFor</code>{" "}
                for accessibility.
              </p>
              <p>
                Group related checkboxes in a{" "}
                <code className="bg-muted px-1 rounded font-mono">{"<fieldset>"}</code>{" "}
                with a{" "}
                <code className="bg-muted px-1 rounded font-mono">{"<legend>"}</code>.
              </p>
              <p>
                Use clear, positive labels: <strong>"Enable notifications"</strong> not <strong>"Disable notifications"</strong>.
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use a checkbox for actions — use a <strong>Switch</strong> or{" "}
                <strong>Button</strong> instead.
              </p>
              <p>
                Don't use checkboxes for mutually exclusive options — use{" "}
                <strong>Radio Group</strong>.
              </p>
              <p>
                Don't nest checkboxes more than two levels deep — it creates confusing hierarchy.
              </p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Indeterminate State</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>
                Use <strong>indeterminate</strong> for "select all" when some but not
                all children are checked.
              </p>
              <p>
                Clicking an indeterminate checkbox should check all children (not uncheck them).
              </p>
            </DoItem>
            <DontItem>
              <p>
                Don't use indeterminate to mean "no value" — leave it unchecked instead.
              </p>
              <p>
                Don't use indeterminate on standalone checkboxes — it only makes sense with a parent–child relationship.
              </p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="16:1790" rows={[
        ["Checked", "False", "checked", "{false}"],
        ["Checked", "True", "checked", "{true}"],
        ["Checked", "Indeterminate", "checked", '"indeterminate"'],
        ["State", "Default", "—", "default"],
        ["State", "Focus", "—", "CSS :focus-visible (3px ring)"],
        ["State", "Error", "aria-invalid", "true (destructive colors)"],
        ["State", "Error Focus", "aria-invalid + focus", "ring-error + destructive"],
        ["State", "Disabled", "disabled", "true (50% opacity)"],
      ]} />

      <h3 className="font-body font-semibold text-sm pt-md">Checkbox Group</h3>
      <FigmaMapping nodeId="19:6040" rows={[
        ["Checked?", "False / True / Indeterminate", "checked", "boolean | \"indeterminate\""],
        ["State", "Default", "—", "default"],
        ["State", "Error", "aria-invalid", "true"],
        ["State", "Disable", "disabled", "true"],
      ]} />

      <h3 className="font-body font-semibold text-sm pt-md">Checkbox Group / Rich</h3>
      <FigmaMapping nodeId="19:6351" rows={[
        ["Checked?", "False / True", "checked", "boolean"],
        ["Flipped", "False / True", "className", "flex-row-reverse"],
        ["Show Line 2", "True / False", "children", "Secondary text visibility"],
      ]} />

      <h3 className="font-body font-semibold text-sm pt-md">Checkbox Group / Rich Advanced</h3>
      <FigmaMapping nodeId="2748:542" rows={[
        ["State", "Default / Active / Hover / ...", "—", "CSS states + selected"],
        ["Icon Size", "Regular / Small", "className", "size-3xl / size-2xl"],
        ["Icon", "Instance swap", "children", "Lucide icon component"],
        ["Recommended", "True / False", "children", "Badge visibility"],
        ["Sub-Title", "True / False", "children", "Line visibility"],
        ["Sub-Title 2", "True / False", "children", "Line visibility"],
        ["Sub-Title 3", "True / False", "children", "Line visibility"],
        ["Description", "True / False", "children", "Description visibility"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
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
                      Move focus to the checkbox
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">
                        Space
                      </kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">
                      Toggle the checkbox state
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
                Built on Radix Checkbox — renders a native{" "}
                <code className="bg-muted px-1 rounded font-mono">button</code>{" "}
                with{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  role="checkbox"
                </code>.
              </li>
              <li>
                Supports{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-checked="true" | "false" | "mixed"
                </code>{" "}
                automatically.
              </li>
              <li>
                Always pair with a visible{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  {"<label>"}
                </code>{" "}
                or{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-label
                </code>{" "}
                for screen readers.
              </li>
              <li>
                Error state uses{" "}
                <code className="bg-muted px-1 rounded font-mono">
                  aria-invalid
                </code>{" "}
                for screen reader announcements.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">
              Focus indicator
            </h3>
            <p className="text-muted-foreground">
              The checkbox displays a visible <strong>3px ring</strong> on{" "}
              <code className="bg-muted px-1 rounded font-mono">
                :focus-visible
              </code>
              . The ring uses{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --ring (#e2e2e0)
              </code>{" "}
              for standard state and{" "}
              <code className="bg-muted px-1 rounded font-mono">
                --ring-error (#fecaca)
              </code>{" "}
              for error state. This meets WCAG 2.1 focus visibility
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Switch</p>
              <p className="text-muted-foreground mt-0.5">
                Toggle for on/off settings where the change takes immediate effect.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
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
              Available
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
              Available
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

const switchSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

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
      <TableOfContents sections={switchSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="typo-heading-2">Switch</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A toggle control for binary on/off settings. Unlike Checkbox, the
          switch implies an immediate effect — the setting takes effect as soon
          as it is toggled.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "switch", label: "Checked", prop: "checked", defaultValue: false },
          { type: "switch", label: "Disabled", prop: "disabled", defaultValue: false },
        ]}
        render={(p) => (
          <div className="flex items-center gap-xs">
            <Switch id="playground-switch" checked={p.checked} disabled={p.disabled} />
            <Label htmlFor="playground-switch">{p.checked ? "On" : "Off"}</Label>
          </div>
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-switch`}
        importCode={`import { Switch } from "@/components/ui/switch"`}
      />

      {/* ---- Examples ---- */}
      <section className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
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
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Extends <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
          Radix SwitchPrimitive.Root</code> — all native props forwarded.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
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
      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
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
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
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
      <FigmaMapping nodeId="16:1801" rows={[
        ["Checked", "False", "checked", "{false} — neutral track, thumb left"],
        ["Checked", "True", "checked", "{true} — primary track, thumb right"],
        ["State", "Default", "—", "default"],
        ["State", "Focus", "—", "CSS :focus-visible (3px ring)"],
        ["State", "Disabled", "disabled", "true (50% opacity)"],
        ["Track Size", "33×18px", "—", "h-[18px] w-[33px]"],
        ["Thumb Size", "16×16px circle", "—", "size-md rounded-full"],
        ["Radius", "Pill (12px)", "—", "rounded-full"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section className="space-y-4 pt-3xl">
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
      <section className="space-y-4 pt-3xl">
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

const labelSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function LabelDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={labelSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="typo-heading-2">Label</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Renders an accessible label associated with form controls. Supports required indicator and disabled state via peer utilities.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => <Label>Email address</Label>} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-label`}
        importCode={`import { Label } from "@/components/ui/label"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Associate a label with an input using the htmlFor prop matching the input's id." code={`<Label htmlFor="email">Email address</Label>\n<Input id="email" type="email" placeholder="you@example.com" />`}>
          <div className="space-y-2">
            <Label htmlFor="email-demo">Email address</Label>
            <Input id="email-demo" type="email" placeholder="you@example.com" />
          </div>
        </Example>

        <Example title="With Checkbox" description="Clicking the label toggles the checkbox — no extra JavaScript needed." code={`<div className="flex items-center gap-2">\n  <Checkbox id="terms" />\n  <Label htmlFor="terms">Accept terms and conditions</Label>\n</div>`}>
          <div className="flex items-center gap-2">
            <Checkbox id="terms-demo" />
            <Label htmlFor="terms-demo">Accept terms and conditions</Label>
          </div>
        </Example>

        <Example title="With Switch" description="Works the same way as checkbox — clicking the label toggles the switch." code={`<div className="flex items-center gap-2">\n  <Switch id="notifications" />\n  <Label htmlFor="notifications">Enable notifications</Label>\n</div>`}>
          <div className="flex items-center gap-2">
            <Switch id="notifications-demo" />
            <Label htmlFor="notifications-demo">Enable notifications</Label>
          </div>
        </Example>

        <Example title="Disabled (via peer)" description="When the associated control is disabled, the label auto-dims via peer-disabled utility." code={`<div className="space-y-2">\n  <Input id="disabled" disabled placeholder="Disabled input" />\n  <Label htmlFor="disabled">Disabled field</Label>\n</div>`}>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-demo" disabled />
            <Label htmlFor="disabled-demo">Disabled option</Label>
          </div>
        </Example>
        </div>
      </section>

      {/* ---- API Reference ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
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
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">htmlFor</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">string</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Associates the label with a form control by ID.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">className</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">string</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">children</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Label text content.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono font-semibold">typo-paragraph-sm-medium</td><td className="px-4 py-3 font-mono text-muted-foreground">Geist 500 14/20</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Label text style</td></tr>
              <tr className="border-b border-border"><td className="px-4 py-3 font-mono font-semibold">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Label text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold">peer-disabled:opacity-50</td><td className="px-4 py-3 font-mono text-muted-foreground">50%</td><td className="px-4 py-3 text-muted-foreground">Disabled state opacity</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Pairing</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Always pair every form control with a visible Label linked via <code className="bg-muted px-1 rounded font-mono text-xs">htmlFor</code>/<code className="bg-muted px-1 rounded font-mono text-xs">id</code>.</p>
              <p>Keep label text short and descriptive — users should know what to enter at a glance.</p>
            </DoItem>
            <DontItem>
              <p>Don't use placeholder text as a replacement for a Label — placeholders disappear on focus.</p>
              <p>Don't use Label for non-form elements — use a heading or paragraph instead.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Click</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Focus the associated form control</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Label renders as a native <code className="bg-muted px-1 rounded font-mono">{"<label>"}</code> element with <code className="bg-muted px-1 rounded font-mono">htmlFor</code> linking to the control.</li>
              <li>Clicking the label focuses the associated control — no extra JS needed.</li>
              <li>When a control is disabled, the label automatically reduces opacity via <code className="bg-muted px-1 rounded font-mono">peer-disabled</code>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">
          Related Components
        </h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Input</p>
              <p className="text-muted-foreground mt-0.5">
                Text input field — pair with Label for accessibility.
              </p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">
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

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["State", "Default", "—", "default"],
        ["State", "Disabled", "—", "peer-disabled:opacity-50"],
        ["Font", "Geist Medium 14/20", "—", "text-sm font-medium"],
        ["Required Indicator", "Visible", "data-required", "Shows * indicator"],
      ]} />
    </div>
  )
}

/* ================================================================
   Slider Docs
   ================================================================ */

const sliderSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function SliderDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={sliderSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Forms</p>
        <h1 className="typo-heading-2">Slider</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A range input that allows users to select a value or range by dragging a thumb along a track. Supports single and dual thumb.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "switch", label: "Disabled", prop: "disabled", defaultValue: false },
        ]}
        render={(p) => <Slider defaultValue={[50]} max={100} step={1} disabled={p.disabled} className="w-60" />}
      />

      

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-slider`}
        importCode={`import { Slider } from "@/components/ui/slider"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="Default" description="Basic slider with a single thumb at the midpoint." code={`<Slider defaultValue={[50]} max={100} step={1} />`}>
            <Slider defaultValue={[50]} max={100} step={1} className="w-60" />
          </Example>

          <Example title="With min/max/step" description="Custom range boundaries and step increments for coarser selection." code={`<Slider defaultValue={[25]} min={0} max={100} step={5} />`}>
            <Slider defaultValue={[25]} min={0} max={100} step={5} className="w-60" />
          </Example>

          <Example title="Range (dual thumb)" description="Two thumbs to select a value range. Pass an array of two values." code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`}>
            <Slider defaultValue={[25, 75]} max={100} step={1} className="w-60" />
          </Example>

          <Example title="Disabled" description="Non-interactive state with reduced opacity." code={`<Slider defaultValue={[50]} disabled />`}>
            <Slider defaultValue={[50]} max={100} disabled className="w-60" />
          </Example>
        </div>
      </section>

      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
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
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">defaultValue</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">number[]</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">[0]</td>
                <td className="px-4 py-3 text-muted-foreground">Initial value(s). Use 2 values for range mode.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">value</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">number[]</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Controlled value(s).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">onValueChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">(value: number[]) =&gt; void</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Callback when value changes.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">min</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">number</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">0</td>
                <td className="px-4 py-3 text-muted-foreground">Minimum value.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">max</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">number</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">100</td>
                <td className="px-4 py-3 text-muted-foreground">Maximum value.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">step</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">number</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">1</td>
                <td className="px-4 py-3 text-muted-foreground">Step increment.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">disabled</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">boolean</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">false</td>
                <td className="px-4 py-3 text-muted-foreground">Disables the slider.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--primary</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Track filled range color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Track background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--background</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Thumb fill color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Thumb border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Focus ring (3px)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Slider when users need to select a value within a defined range.</p>
              <p>Display the current value next to the slider for clarity.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Slider for precise numeric input — use an Input with type="number" instead.</p>
              <p>Don't use Slider with extremely large ranges (e.g., 0–10000) without meaningful step increments.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Right</kbd> / <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Up</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Increase value by step</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Left</kbd> / <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Down</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Decrease value by step</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Home</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Set to minimum value</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">End</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Set to maximum value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Slider — fully keyboard accessible with arrow keys.</li>
              <li>Tab to focus the thumb, then use Arrow Left/Right (horizontal) or Up/Down (vertical) to adjust.</li>
              <li>Home/End keys jump to min/max values.</li>
              <li>Always provide an accessible label via <code className="bg-muted px-1 rounded font-mono">aria-label</code> or a visible Label.</li>
            </ul>
          </div>
        </div>
      </section>

            <section className="space-y-4 pt-3xl">
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

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Track Height", "6px", "—", "h-1.5"],
        ["Thumb Size", "16×16px", "—", "size-md rounded-full"],
        ["State", "Default", "—", "default"],
        ["State", "Focus", "—", "CSS :focus-visible (3px ring)"],
        ["State", "Disabled", "disabled", "true (opacity-50)"],
        ["Range", "Single thumb", "defaultValue", "[50]"],
        ["Range", "Dual thumb", "defaultValue", "[25, 75]"],
      ]} />
    </div>
  )
}

/* ================================================================
   Toggle Docs
   ================================================================ */

const toggleSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ToggleDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={toggleSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Forms</p>
        <h1 className="typo-heading-2">Toggle</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A two-state button that can be toggled on or off. Commonly used for formatting options like bold, italic, underline.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Variant", prop: "variant", defaultValue: "default", options: [
            { label: "Default", value: "default" },
            { label: "Outline", value: "outline" },
          ]},
          { type: "select", label: "Size", prop: "size", defaultValue: "default", options: [
            { label: "Large (40px)", value: "lg" },
            { label: "Default (36px)", value: "default" },
            { label: "Small (32px)", value: "sm" },
          ]},
          { type: "switch", label: "Pressed", prop: "pressed", defaultValue: false },
          { type: "switch", label: "Disabled", prop: "disabled", defaultValue: false },
        ]}
        render={(p) => (
          <Toggle
            variant={p.variant}
            size={p.size}
            pressed={p.pressed}
            disabled={p.disabled}
            aria-label="Toggle bold"
          >
            <Bold className="size-4" />
          </Toggle>
        )}
      />

      

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-toggle`}
        importCode={`import { Toggle } from "@/components/ui/toggle"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Basic toggle that switches between on and off states." code={`<Toggle aria-label="Toggle bold">\n  <Bold className="size-4" />\n</Toggle>`}>
          <Toggle aria-label="Toggle bold"><Bold className="size-4" /></Toggle>
        </Example>

        <Example title="Outline variant" description="Bordered variant for lower-emphasis toggles in toolbars." code={`<Toggle variant="outline" aria-label="Toggle italic">\n  <Italic className="size-4" />\n</Toggle>`}>
          <Toggle variant="outline" aria-label="Toggle italic"><Italic className="size-4" /></Toggle>
        </Example>

        <Example title="With text" description="Combine icon with text label for clarity." code={`<Toggle aria-label="Toggle italic">\n  <Italic className="size-4" />\n  Italic\n</Toggle>`}>
          <Toggle aria-label="Toggle italic"><Italic className="size-4" />Italic</Toggle>
        </Example>

        <Example title="Sizes" description="Three sizes to match surrounding UI density." code={`<Toggle size="sm" aria-label="Bold"><Bold className="size-4" /></Toggle>\n<Toggle size="default" aria-label="Bold"><Bold className="size-4" /></Toggle>\n<Toggle size="lg" aria-label="Bold"><Bold className="size-4" /></Toggle>`}>
          <div className="flex items-center gap-2">
            <Toggle size="sm" aria-label="Bold"><Bold className="size-4" /></Toggle>
            <Toggle size="default" aria-label="Bold"><Bold className="size-4" /></Toggle>
            <Toggle size="lg" aria-label="Bold"><Bold className="size-4" /></Toggle>
          </div>
        </Example>

        <Example title="Disabled" description="Non-interactive state with reduced opacity." code={`<Toggle disabled aria-label="Bold"><Bold className="size-4" /></Toggle>`}>
          <Toggle disabled aria-label="Bold"><Bold className="size-4" /></Toggle>
        </Example>
        </div>
      </section>

      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
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
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">variant</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"default" | "outline"</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"default"</td>
                <td className="px-4 py-3 text-muted-foreground">Visual style of the toggle.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">size</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"sm" | "default" | "lg"</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"default"</td>
                <td className="px-4 py-3 text-muted-foreground">Size of the toggle button.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">pressed</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">boolean</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Controlled pressed state.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">onPressedChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">(pressed: boolean) =&gt; void</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Callback when pressed state changes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Hover & pressed background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Pressed text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Default text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Focus ring (3px)</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Outline variant border</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Always provide <code className="bg-muted px-1 rounded font-mono text-xs">aria-label</code> when using icon-only toggles.</p>
              <p>Use Toggle for binary state changes: bold on/off, view mode grid/list.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Toggle for navigation — use <strong>Tabs</strong> or <strong>Button</strong> instead.</p>
              <p>Don't use Toggle when there are more than 2 states — use <strong>ToggleGroup</strong> or <strong>Select</strong>.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the toggle</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd> / <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Space</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Toggle pressed state</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Uses <code className="bg-muted px-1 rounded font-mono">aria-pressed</code> to communicate state to assistive technology.</li>
              <li>Tab to focus, Space or Enter to toggle.</li>
              <li>Icon-only toggles <strong>must</strong> have <code className="bg-muted px-1 rounded font-mono">aria-label</code>.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Variant", "Default", "variant", '"default"'],
        ["Variant", "Outline", "variant", '"outline"'],
        ["Size", "Large (40px)", "size", '"lg"'],
        ["Size", "Default (36px)", "size", '"default"'],
        ["Size", "Small (32px)", "size", '"sm"'],
        ["State", "Default", "—", "default"],
        ["State", "Hover", "—", "CSS :hover (bg-muted)"],
        ["State", "Pressed / On", "—", 'data-[state=on] (bg-muted)'],
        ["State", "Focus", "—", "CSS :focus-visible (3px ring)"],
        ["State", "Disabled", "disabled", "true (opacity-50)"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">ToggleGroup</p>
              <p className="text-muted-foreground mt-0.5">Groups multiple toggles with single/multiple selection mode.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Button</p>
              <p className="text-muted-foreground mt-0.5">Use when the action is not a toggle between two states.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Toggle Group Docs
   ================================================================ */

const toggleGroupSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ToggleGroupDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={toggleGroupSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Forms</p>
        <h1 className="typo-heading-2">Toggle Group</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A group of toggle buttons supporting single or multiple selection. Ideal for toolbar actions, text formatting, view modes.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Type", prop: "type", defaultValue: "single", options: [
            { label: "Single", value: "single" },
            { label: "Multiple", value: "multiple" },
          ]},
          { type: "select", label: "Variant", prop: "variant", defaultValue: "default", options: [
            { label: "Default", value: "default" },
            { label: "Outline", value: "outline" },
          ]},
          { type: "select", label: "Size", prop: "size", defaultValue: "default", options: [
            { label: "Large", value: "lg" },
            { label: "Default", value: "default" },
            { label: "Small", value: "sm" },
          ]},
        ]}
        render={(p) => {
          const items = (
            <>
              <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>
            </>
          )
          return p.type === "multiple" ? (
            <ToggleGroup type="multiple" variant={p.variant} size={p.size}>{items}</ToggleGroup>
          ) : (
            <ToggleGroup type="single" variant={p.variant} size={p.size} defaultValue="center">{items}</ToggleGroup>
          )
        }}
      />

      

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-toggle-group`}
        importCode={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Single selection" description="Mutually exclusive \u2014 only one item can be active at a time. Ideal for text alignment." code={`<ToggleGroup type="single" defaultValue="center">\n  <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>

        <Example title="Multiple selection" description="Independent toggles \u2014 any combination can be active. Ideal for text formatting." code={`<ToggleGroup type="multiple" defaultValue={["bold"]}>\n  <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>

        <Example title="Outline variant" description="Bordered variant matching the Toggle outline style." code={`<ToggleGroup type="single" variant="outline" defaultValue="left">\n  <ToggleGroupItem value="left" aria-label="Left"><AlignLeft className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="center" aria-label="Center"><AlignCenter className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="right" aria-label="Right"><AlignRight className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="single" variant="outline" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Left"><AlignLeft className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center"><AlignCenter className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right"><AlignRight className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>

        <Example title="Small size" description="Compact size for dense UIs and toolbars." code={`<ToggleGroup type="multiple" size="sm">\n  <ToggleGroupItem value="bold"><Bold className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="italic"><Italic className="size-4" /></ToggleGroupItem>\n  <ToggleGroupItem value="underline"><Underline className="size-4" /></ToggleGroupItem>\n</ToggleGroup>`}>
          <ToggleGroup type="multiple" size="sm">
            <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </Example>
        </div>
      </section>

      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <h3 className="font-heading font-semibold text-lg">ToggleGroup</h3>
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
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">type</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"single" | "multiple"</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Selection mode (required).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">variant</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"default" | "outline"</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"default"</td>
                <td className="px-4 py-3 text-muted-foreground">Applied to all items.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">size</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"sm" | "default" | "lg"</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">"default"</td>
                <td className="px-4 py-3 text-muted-foreground">Applied to all items.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Hover & pressed background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Pressed text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Outline variant border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Focus ring (3px)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Selection Mode</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use <code className="bg-muted px-1 rounded font-mono text-xs">type="single"</code> for mutually exclusive options like text alignment.</p>
              <p>Use <code className="bg-muted px-1 rounded font-mono text-xs">type="multiple"</code> for independent formatting options like bold + italic + underline.</p>
            </DoItem>
            <DontItem>
              <p>Don't mix standalone Toggle and ToggleGroup in the same toolbar — pick one pattern.</p>
              <p>Don't use ToggleGroup for navigation — use <strong>Tabs</strong> instead.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the group</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Left/Right</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Navigate between items</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd> / <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Space</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Toggle focused item</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Renders as a roving tabindex group — Tab moves focus to the group, Arrow keys navigate between items.</li>
              <li>Space or Enter toggles the focused item.</li>
              <li>type="single" enforces one selection; type="multiple" allows any combination.</li>
              <li>Always provide <code className="bg-muted px-1 rounded font-mono">aria-label</code> on each ToggleGroupItem.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Type", "Single", "type", '"single" — one at a time'],
        ["Type", "Multiple", "type", '"multiple" — any number'],
        ["Variant", "Default", "variant", '"default" (inherits Toggle)'],
        ["Variant", "Outline", "variant", '"outline" (inherits Toggle)'],
        ["Size", "Large (40px)", "size", '"lg"'],
        ["Size", "Default (36px)", "size", '"default"'],
        ["Size", "Small (32px)", "size", '"sm"'],
        ["State", "Default", "—", "default"],
        ["State", "Pressed / On", "—", "data-[state=on]"],
        ["State", "Disabled", "disabled", "true"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Toggle</p>
              <p className="text-muted-foreground mt-0.5">Single standalone toggle button.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Tabs</p>
              <p className="text-muted-foreground mt-0.5">For navigating between content panels (not toggling state).</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Card Docs
   ================================================================ */

const cardSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function CardDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={cardSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Card</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Content container with composable sub-components: Header, Title, Description, Content, Footer.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description text.</CardDescription>
          </CardHeader>
          <CardContent><p className="text-sm">Card content goes here.</p></CardContent>
        </Card>
      )} />



      
      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add clsx tailwind-merge`}
        importCode={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="Default" description="Full card with header, content, and footer sections." code={`<Card className="w-[350px]">\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card description goes here.</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card content area.</p>\n  </CardContent>\n  <CardFooter>\n    <Button>Action</Button>\n  </CardFooter>\n</Card>`}>
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

          <Example title="Simple card" description="Minimal card with just padding for light content." code={`<Card className="p-md">\n  <p>Simple card with just padding.</p>\n</Card>`}>
            <Card className="p-md w-[350px]">
              <p className="text-sm">Simple card with just padding.</p>
            </Card>
          </Example>
        </div>
      </section>

      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Sub-components</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Component</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-muted-foreground">Card</td><td className="px-4 py-3 text-muted-foreground">Root container with border, shadow, and rounded corners.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-muted-foreground">CardHeader</td><td className="px-4 py-3 text-muted-foreground">Top section with padding, contains Title and Description.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-muted-foreground">CardTitle</td><td className="px-4 py-3 text-muted-foreground">Bold heading text.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-muted-foreground">CardDescription</td><td className="px-4 py-3 text-muted-foreground">Muted description text.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-muted-foreground">CardContent</td><td className="px-4 py-3 text-muted-foreground">Main content area.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-muted-foreground">CardFooter</td><td className="px-4 py-3 text-muted-foreground">Bottom section for actions.</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Card background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Card text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Card border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-sm</td><td className="px-4 py-3 font-mono text-muted-foreground">0 1px 2px rgba(0,0,0,0.05)</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Card shadow</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--radius-xl</td><td className="px-4 py-3 font-mono text-muted-foreground">12px</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Card border radius</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use CardHeader with CardTitle + CardDescription for consistent content hierarchy.</p>
              <p>Use CardFooter for primary actions — buttons, links.</p>
            </DoItem>
            <DontItem>
              <p>Don't nest Cards inside Cards — it creates visual clutter.</p>
              <p>Don't make the entire card clickable unless it's a navigation card — add explicit action buttons.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Card is a purely presentational container — no ARIA roles required.</li>
              <li>Use semantic heading levels inside CardTitle (renders as h3 by default).</li>
              <li>If the card is interactive (clickable), wrap it with a link or button and add appropriate keyboard handling.</li>
            </ul>
          </div>
        </div>
      </section>

                  {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Container", "Card", "—", "rounded-xl border shadow-sm"],
        ["Sub-component", "Header", "CardHeader", "gap-2xs p-md"],
        ["Sub-component", "Title", "CardTitle", "font-semibold tracking-tight"],
        ["Sub-component", "Description", "CardDescription", "text-sm text-muted-foreground"],
        ["Sub-component", "Content", "CardContent", "p-md pt-0"],
        ["Sub-component", "Footer", "CardFooter", "flex items-center p-md pt-0"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Dialog</p>
              <p className="text-muted-foreground mt-0.5">Overlay card for focused interactions that require attention.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Sheet</p>
              <p className="text-muted-foreground mt-0.5">Slide-in panel for supplementary content.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Avatar Docs
   ================================================================ */

function AvatarPropsTable() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">Avatar</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Override size (size-8, size-10, size-xl) or shape (rounded-lg for roundrect).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">AvatarImage + AvatarFallback.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">AvatarImage</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">src</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Image URL. Falls back to AvatarFallback on error.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">alt</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Alt text for the image (required for accessibility).</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">AvatarFallback</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">delayMs</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Delay in ms before showing fallback (gives image time to load).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Initials text or icon element.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function AvatarTokensTable() {
  const tokens = [
    { token: "--muted", value: "#f3f3f2", hex: "#f3f3f2", usage: "Fallback background" },
    { token: "--border", value: "#e9e9e7", hex: "#e9e9e7", usage: "Avatar border (1px inside)" },
    { token: "--foreground", value: "#252522", hex: "#252522", usage: "Fallback text color" },
    { token: "--background", value: "#f7f7f6", hex: "#f7f7f6", usage: "Avatar Stack ring (separation)" },
    { token: "typo-paragraph-sm-bold", value: "Geist 600 14/20", hex: "—", usage: "Fallback text (Regular, Small)" },
    { token: "typo-paragraph-mini-bold", value: "Geist 600 12/16", hex: "—", usage: "Fallback text (Tiny)" },
    { token: "--size-10 (40px)", value: "40px", hex: "—", usage: "Regular size" },
    { token: "--size-8 (32px)", value: "32px", hex: "—", usage: "Small size" },
    { token: "--size-xl (24px)", value: "24px", hex: "—", usage: "Tiny size" },
    { token: "--size-lg (20px)", value: "20px", hex: "—", usage: "Extra Tiny size" },
    { token: "--radius-lg (8px)", value: "8px", hex: "—", usage: "Roundrect corner (Regular, Small)" },
    { token: "--radius-md (6px)", value: "6px", hex: "—", usage: "Roundrect corner (Tiny)" },
    { token: "--radius-sm (4px)", value: "4px", hex: "—", usage: "Roundrect corner (Extra Tiny)" },
    { token: "rounded-full", value: "9999px", hex: "—", usage: "Round (circle) shape" },
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
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">{t.token}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">{t.value}</td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div className="size-5 rounded border border-border" style={{ backgroundColor: t.hex }} />
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

function AvatarExploreBehavior() {
  const [value, setValue] = useState("Picture")
  const [size, setSize] = useState("Regular")
  const [roundness, setRoundness] = useState("Round")
  const [iconName, setIconName] = useState("User")

  const sizeClass: Record<string, string> = {
    "Regular": "size-10",
    "Small": "size-8",
    "Tiny": "size-xl",
    "Extra Tiny": "size-lg",
  }
  const textSizeClass: Record<string, string> = {
    "Regular": "",
    "Small": "text-xs",
    "Tiny": "text-[10px]",
    "Extra Tiny": "text-[8px]",
  }
  const iconSizeClass: Record<string, string> = {
    "Regular": "size-xl",
    "Small": "size-md",
    "Tiny": "size-sm",
    "Extra Tiny": "size-xs",
  }
  const shapeClass = roundness === "Round" ? "rounded-full" : "rounded-lg"
  const SelectedIcon = allLucideIcons.find((i) => i.name === iconName)?.icon ?? allLucideIcons.find((i) => i.name === "User")!.icon

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-background">
      <div className="p-4xl flex items-center justify-center min-h-[200px] bg-background">
        <Avatar key={value} className={[sizeClass[size], shapeClass].join(" ")}>
          {value === "Picture" && <AvatarImage src="https://github.com/shadcn.png" alt="User" />}
          <AvatarFallback className={[shapeClass, value === "Icon" ? "" : textSizeClass[size]].join(" ")}>
            {value === "Text" && "TN"}
            {value === "Icon" && <SelectedIcon className={iconSizeClass[size]} />}
            {value === "Picture" && "TN"}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="border-t border-border bg-muted/50 p-md flex flex-wrap items-center gap-md">
        <div className="flex items-center gap-xs">
          <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Value</label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="w-[120px] h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Picture" className="text-xs">Picture</SelectItem>
              <SelectItem value="Text" className="text-xs">Text</SelectItem>
              <SelectItem value="Icon" className="text-xs">Icon</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-xs">
          <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Size</label>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger className="w-[130px] h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Regular" className="text-xs">Regular (40px)</SelectItem>
              <SelectItem value="Small" className="text-xs">Small (32px)</SelectItem>
              <SelectItem value="Tiny" className="text-xs">Tiny (24px)</SelectItem>
              <SelectItem value="Extra Tiny" className="text-xs">Extra Tiny (20px)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-xs">
          <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Roundness</label>
          <Select value={roundness} onValueChange={setRoundness}>
            <SelectTrigger className="w-[130px] h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Round" className="text-xs">Round</SelectItem>
              <SelectItem value="Roundrect" className="text-xs">Roundrect</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-xs">
          <label className={["text-xs font-medium text-muted-foreground whitespace-nowrap", value !== "Icon" ? "opacity-50" : ""].join(" ")}>Icon</label>
          <IconPicker value={iconName} onChange={setIconName} disabled={value !== "Icon"} size="sm" />
        </div>
      </div>
    </div>
  )
}

const avatarSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function AvatarDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={avatarSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Avatar</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">User avatar with image and fallback support (initials or icon). Supports multiple sizes and round/roundrect shapes.</p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <AvatarExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-avatar clsx tailwind-merge`}
        importCode={`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="With Image" description="Image loads with fallback initials shown while loading." code={`<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" alt="User" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Example>

        <Example title="Fallback Initials & Icon" description="Text initials or icon when no image is available." code={`<div className="flex gap-3">\n  <Avatar>\n    <AvatarFallback>TN</AvatarFallback>\n  </Avatar>\n  <Avatar>\n    <AvatarFallback>AB</AvatarFallback>\n  </Avatar>\n  <Avatar>\n    <AvatarFallback>\n      <User className="size-4" />\n    </AvatarFallback>\n  </Avatar>\n</div>`}>
          <div className="flex gap-3">
            <Avatar><AvatarFallback>TN</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>AB</AvatarFallback></Avatar>
            <Avatar><AvatarFallback><User className="size-4" /></AvatarFallback></Avatar>
          </div>
        </Example>

        <Example title="Sizes" description="Regular (40px), Small (32px), Tiny (24px), Extra Tiny (20px)." code={`<div className="flex items-center gap-3">\n  <Avatar className="size-lg">\n    <AvatarFallback className="text-[8px]">XT</AvatarFallback>\n  </Avatar>\n  <Avatar className="size-xl">\n    <AvatarFallback className="text-[10px]">TN</AvatarFallback>\n  </Avatar>\n  <Avatar className="size-8">\n    <AvatarFallback className="text-xs">SM</AvatarFallback>\n  </Avatar>\n  <Avatar>\n    <AvatarFallback>RG</AvatarFallback>\n  </Avatar>\n</div>`}>
          <div className="flex items-center gap-3">
            <Avatar className="size-lg"><AvatarFallback className="text-[8px]">XT</AvatarFallback></Avatar>
            <Avatar className="size-xl"><AvatarFallback className="text-[10px]">TN</AvatarFallback></Avatar>
            <Avatar className="size-8"><AvatarFallback className="text-xs">SM</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>RG</AvatarFallback></Avatar>
          </div>
        </Example>

        <Example title="Roundrect Shape" description="Use rounded-lg for organization or team avatars." code={`<div className="flex items-center gap-3">\n  <Avatar className="rounded-lg">\n    <AvatarImage src="https://github.com/shadcn.png" alt="Team" />\n    <AvatarFallback className="rounded-lg">TM</AvatarFallback>\n  </Avatar>\n  <Avatar className="rounded-lg">\n    <AvatarFallback className="rounded-lg">ORG</AvatarFallback>\n  </Avatar>\n</div>`}>
          <div className="flex items-center gap-3">
            <Avatar className="rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="Team" />
              <AvatarFallback className="rounded-lg">TM</AvatarFallback>
            </Avatar>
            <Avatar className="rounded-lg">
              <AvatarFallback className="rounded-lg">ORG</AvatarFallback>
            </Avatar>
          </div>
        </Example>

        <Example title="Avatar Stack" description="Overlapping avatars with -8px spacing. Each avatar has a background-colored ring to create visual separation." code={`<div className="flex flex-col gap-4">\n  {/* Regular (40px) */}\n  <div className="flex -space-x-2">\n    <Avatar className="ring-1 ring-background">\n      <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />\n      <AvatarFallback>U1</AvatarFallback>\n    </Avatar>\n    <Avatar className="ring-1 ring-background">\n      <AvatarFallback>AB</AvatarFallback>\n    </Avatar>\n    <Avatar className="ring-1 ring-background">\n      <AvatarFallback>CD</AvatarFallback>\n    </Avatar>\n  </div>\n  {/* Small (32px) */}\n  <div className="flex -space-x-2">\n    <Avatar className="size-8 ring-1 ring-background">\n      <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />\n      <AvatarFallback>U1</AvatarFallback>\n    </Avatar>\n    <Avatar className="size-8 ring-1 ring-background">\n      <AvatarFallback>AB</AvatarFallback>\n    </Avatar>\n    <Avatar className="size-8 ring-1 ring-background">\n      <AvatarFallback>CD</AvatarFallback>\n    </Avatar>\n  </div>\n</div>`}>
          <div className="flex flex-col gap-4">
            <div className="flex -space-x-2">
              <Avatar className="ring-1 ring-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="ring-1 ring-background">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="ring-1 ring-background">
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex -space-x-2">
              <Avatar className="size-8 ring-1 ring-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="size-8 ring-1 ring-background">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="size-8 ring-1 ring-background">
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-avatar</code>.
          Supports all Radix Avatar props.
        </p>
        <AvatarPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <AvatarTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use for user profile representation, author attribution, and contact identification.</p>
              <p>Use <strong>Picture</strong> when image available, <strong>Text</strong> (initials) as fallback, <strong>Icon</strong> as generic placeholder.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Avatar for decorative images — use a regular img tag instead.</p>
              <p>Don't use Avatar for logo display — logos are not user identifiers.</p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Always provide <strong>AvatarFallback</strong> with initials or icon for when images fail to load.</p>
              <p>Use <strong>Round</strong> for user avatars (default), <strong>Roundrect</strong> for organization/team avatars.</p>
            </DoItem>
            <DontItem>
              <p>Don't use inconsistent sizes in the same context — keep all avatars in a group the same size.</p>
              <p>Don't omit the fallback — a broken image with no fallback looks unprofessional.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="18:1398" rows={[
        ["Value", "Picture", "AvatarImage", "Image fills container with aspect-square"],
        ["Value", "Text", "AvatarFallback", "Initials (typo-paragraph-sm-bold)"],
        ["Value", "Icon", "AvatarFallback", "Lucide icon inside fallback"],
        ["Size", "Regular (40px)", "—", "size-10 (default)"],
        ["Size", "Small (32px)", "className", "size-8"],
        ["Size", "Tiny (24px)", "className", "size-xl"],
        ["Size", "Extra Tiny (20px)", "className", "size-lg"],
        ["Roundness", "Round (circle)", "—", "rounded-full (default)"],
        ["Roundness", "Roundrect (Reg/Sm)", "className", "rounded-lg (8px)"],
        ["Roundness", "Roundrect (Tiny)", "className", "rounded-md (6px)"],
        ["Roundness", "Roundrect (XTiny)", "className", "rounded-sm (4px)"],
        ["Border", "#e9e9e7 1px inside", "—", "border border-border"],
        ["Fallback BG", "#f3f3f2", "—", "bg-muted"],
        ["Fallback Text", "#252522", "—", "text-foreground (inherited)"],
        ["Text (Reg/Sm)", "Geist 600 14/20", "—", "typo-paragraph-sm-bold"],
        ["Text (Tiny)", "Geist 600 12/16", "—", "typo-paragraph-mini-bold"],
        ["Text (XTiny)", "Geist 600 8/12", "—", "text-[8px] leading-3 (custom)"],
        ["Icon (Regular)", "24px", "—", "size-xl"],
        ["Icon (Small)", "20px", "—", "size-lg"],
        ["Icon (Tiny)", "16px", "—", "size-md"],
        ["Icon (XTiny)", "12px", "—", "size-sm"],
        ["Avatar Stack", "22:9509", "—", "flex -space-x-2 + ring-1 ring-background"],
        ["Stack Spacing", "-8px overlap", "—", "-space-x-2 (negative margin)"],
        ["Stack Ring", "#f7f7f6 1px", "—", "ring-1 ring-background"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">ARIA attributes</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                The image element uses{" "}
                <code className="bg-muted px-1 rounded font-mono">role="img"</code>{" "}
                automatically via Radix UI.
              </li>
              <li>
                Always provide a descriptive{" "}
                <code className="bg-muted px-1 rounded font-mono">alt</code>{" "}
                attribute on AvatarImage for screen readers.
              </li>
              <li>
                AvatarFallback is rendered as a{" "}
                <code className="bg-muted px-1 rounded font-mono">span</code>{" "}
                — initials are read by screen readers as text content.
              </li>
              <li>All ARIA attributes are managed automatically by Radix UI.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Image loading</h3>
            <p className="text-muted-foreground">
              Radix Avatar handles image loading states automatically. The fallback is shown
              immediately and replaced when the image loads. If the image fails,
              the fallback remains visible. Use{" "}
              <code className="bg-muted px-1 rounded font-mono">delayMs</code>{" "}
              on AvatarFallback to delay showing the fallback (useful for fast connections).
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Tooltip</p>
              <p className="text-muted-foreground mt-0.5">
                Wrap Avatar in Tooltip to show user name on hover.
              </p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Card</p>
              <p className="text-muted-foreground mt-0.5">
                Use Avatar inside Card headers for user-related content cards.
              </p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Hover Card</p>
              <p className="text-muted-foreground mt-0.5">
                Combine Avatar with HoverCard to show rich user profile preview on hover.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Progress Docs
   ================================================================ */

const progressSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ProgressDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={progressSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Progress</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Progress bar indicating completion status. Supports determinate values (0-100).</p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Value", prop: "value", defaultValue: "50", options: [
            { label: "0%", value: "0" },
            { label: "25%", value: "25" },
            { label: "50%", value: "50" },
            { label: "75%", value: "75" },
          ]},
        ]}
        render={(p) => <Progress value={Number(p.value)} className="w-60" />}
      />

      
      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-progress`}
        importCode={`import { Progress } from "@/components/ui/progress"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="25%" description="Quarter progress — early stage of a task." code={`<Progress value={25} />`}>
            <Progress value={25} className="w-60" />
          </Example>
          <Example title="50%" description="Half-way through — mid-point indicator." code={`<Progress value={50} />`}>
            <Progress value={50} className="w-60" />
          </Example>
          <Example title="75%" description="Nearly complete — approaching finish." code={`<Progress value={75} />`}>
            <Progress value={75} className="w-60" />
          </Example>
          <Example title="100%" description="Fully complete — task finished." code={`<Progress value={100} />`}>
            <Progress value={100} className="w-60" />
          </Example>
        </div>
      </section>

      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">value</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">0</td><td className="px-4 py-3 text-muted-foreground">Current progress (0–100).</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--primary</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Filled indicator color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Track background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--radius-full</td><td className="px-4 py-3 font-mono text-muted-foreground">9999px</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Track border radius</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Progress for determinate tasks where you can track percentage completion.</p>
              <p>Display a text label alongside (e.g., "75% complete") for clarity.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Progress for indeterminate tasks — use <strong>Spinner</strong> instead.</p>
              <p>Don't jump values abruptly — animate transitions for a smoother experience.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Progress — renders with <code className="bg-muted px-1 rounded font-mono">role="progressbar"</code>.</li>
              <li>Automatically sets <code className="bg-muted px-1 rounded font-mono">aria-valuenow</code>, <code className="bg-muted px-1 rounded font-mono">aria-valuemin</code>, and <code className="bg-muted px-1 rounded font-mono">aria-valuemax</code>.</li>
              <li>Add <code className="bg-muted px-1 rounded font-mono">aria-label</code> for non-obvious progress bars.</li>
            </ul>
          </div>
        </div>
      </section>

                  {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Track Height", "6px", "—", "h-1.5"],
        ["Track Color", "Muted", "—", "bg-muted"],
        ["Indicator Color", "Primary", "—", "bg-primary"],
        ["Value", "0–100", "value", "number (0–100)"],
        ["Radius", "Full (pill)", "—", "rounded-full"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Slider</p>
              <p className="text-muted-foreground mt-0.5">User-controlled range input — use when value is adjustable.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Spinner</p>
              <p className="text-muted-foreground mt-0.5">Indeterminate loading indicator for unknown progress.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Alert Docs
   ================================================================ */

function AlertPropsTable() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">Alert</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">variant</td><td className="px-4 py-3 font-mono text-muted-foreground">{'"default" | "destructive" | "success" | "warning" | "emphasis"'}</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Visual style matching the alert type.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Icon, AlertTitle, AlertDescription.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">AlertTitle</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Title text. Renders as div with typo-paragraph-sm-bold.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">AlertDescription</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Description text. Renders as div with typo-paragraph-sm.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function AlertTokensTable() {
  const tokens = [
    { token: "--background", value: "#ffffff", hex: "#ffffff", usage: "Neutral variant background" },
    { token: "--border", value: "#e9e9e7", hex: "#e9e9e7", usage: "Neutral variant border" },
    { token: "--foreground", value: "#252522", hex: "#252522", usage: "Neutral title text color" },
    { token: "--ghost-foreground", value: "#6f6f6a", hex: "#6f6f6a", usage: "Neutral description text color" },
    { token: "--destructive-subtle", value: "#fef2f2", hex: "#fef2f2", usage: "Error variant background" },
    { token: "--destructive-border", value: "#ef4444", hex: "#ef4444", usage: "Error variant border" },
    { token: "--destructive-subtle-fg", value: "#dc2626", hex: "#dc2626", usage: "Error text & icon color" },
    { token: "--success-subtle", value: "#f0fdf4", hex: "#f0fdf4", usage: "Success variant background" },
    { token: "--success-border", value: "#22c55e", hex: "#22c55e", usage: "Success variant border" },
    { token: "--success-subtle-fg", value: "#16a34a", hex: "#16a34a", usage: "Success text & icon color" },
    { token: "--warning-subtle", value: "#fffbeb", hex: "#fffbeb", usage: "Warning variant background" },
    { token: "--warning-border", value: "#f59e0b", hex: "#f59e0b", usage: "Warning variant border" },
    { token: "--warning-subtle-fg", value: "#d97706", hex: "#d97706", usage: "Warning text & icon color" },
    { token: "--emphasis-subtle", value: "#eff6ff", hex: "#eff6ff", usage: "Emphasis variant background" },
    { token: "--emphasis-border", value: "#3b82f6", hex: "#3b82f6", usage: "Emphasis variant border" },
    { token: "--emphasis-subtle-fg", value: "#2563eb", hex: "#2563eb", usage: "Emphasis text & icon color" },
    { token: "--radius-lg", value: "8px", hex: "—", usage: "Border radius (rounded-lg)" },
    { token: "--spacing-sm", value: "12px", hex: "—", usage: "Padding top/bottom (py-sm)" },
    { token: "--spacing-md", value: "16px", hex: "—", usage: "Padding left/right (px-md)" },
    { token: "--size-md", value: "16px", hex: "—", usage: "Icon size (size-md)" },
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
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">{t.token}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">{t.value}</td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div className="size-5 rounded border border-border" style={{ backgroundColor: t.hex }} />
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

function AlertExploreBehavior() {
  const [type, setType] = useState("default")
  const [icon, setIcon] = useState("")
  /* Figma: only Neutral type allows icon swap; others use fixed icon */
  const handleTypeChange = (v: string) => { setType(v); if (v !== "default") setIcon("") }
  const [showIcon, setShowIcon] = useState(true)
  const [showTitle, setShowTitle] = useState(true)
  const [showSubtitle, setShowSubtitle] = useState(true)
  const [dismissable, setDismissable] = useState(false)
  const [inCard, setInCard] = useState(false)
  const [showAction, setShowAction] = useState(false)
  const [showSecondaryAction, setShowSecondaryAction] = useState(false)
  /* Figma constraint: Secondary Action only available when Show Action is on */
  const handleShowActionChange = (v: boolean) => { setShowAction(v); if (!v) setShowSecondaryAction(false) }

  /* Figma default icon per type */
  const defaultIconName: Record<string, string> = {
    default: "Info",
    destructive: "CircleAlert",
    success: "CircleCheck",
    warning: "TriangleAlert",
    emphasis: "Info",
  }
  const activeIconName = icon || defaultIconName[type] || "Info"
  const ActiveIconComp = allLucideIcons.find((i) => i.name === activeIconName)?.icon
  const activeIcon = ActiveIconComp ? <ActiveIconComp className="size-md" /> : <Info className="size-md" />

  const titles: Record<string, string> = {
    default: "Heads up!",
    destructive: "Error",
    success: "Success",
    warning: "Warning",
    emphasis: "Information",
  }
  const descs: Record<string, string> = {
    default: "You can add components using the CLI.",
    destructive: "Your session has expired. Please log in again.",
    success: "Your changes have been saved successfully.",
    warning: "Your trial expires in 3 days. Upgrade to continue.",
    emphasis: "A new version is available. Update to get the latest features.",
  }

  /* Figma In Card spec handled by Alert inCard prop:
     - border-transparent, py-xs px-sm, neutral: bg-card-subtle */

  const alertContent = (
    <>
      {showIcon && activeIcon}
      {showTitle && <AlertTitle>{titles[type]}</AlertTitle>}
      {showSubtitle && <AlertDescription>{descs[type]}</AlertDescription>}
      {(showAction || showSecondaryAction) && (
        <div className="flex gap-xs mt-xs [&]:pl-7">
          {showAction && <Button size="sm" variant="secondary">Action</Button>}
          {showSecondaryAction && <Button size="sm" variant="outline">Cancel</Button>}
        </div>
      )}
      {dismissable && (
        <button className={["absolute text-current opacity-70 hover:opacity-100 transition-opacity", inCard ? "right-sm top-xs" : "right-md top-sm"].join(" ")} aria-label="Dismiss">
          <X className="size-md" />
        </button>
      )}
    </>
  )

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="p-4xl flex items-center justify-center min-h-[160px] bg-primary/5">
        {inCard ? (
          <div className="w-full max-w-lg rounded-xl border border-border bg-card p-lg shadow-sm">
            <p className="typo-paragraph-sm-bold mb-sm">Card title</p>
            <p className="typo-paragraph-sm text-ghost-foreground mb-md">Some card content that provides context for the alert below.</p>
            <Alert variant={type as "default" | "destructive" | "success" | "warning" | "emphasis"} inCard>
              {alertContent}
            </Alert>
          </div>
        ) : (
          <div className="w-full max-w-lg">
            <Alert variant={type as "default" | "destructive" | "success" | "warning" | "emphasis"}>
              {alertContent}
            </Alert>
          </div>
        )}
      </div>
      <div className="border-t border-border bg-muted/50 p-lg">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-md">
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Type</Label>
            <Select value={type} onValueChange={handleTypeChange}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Neutral</SelectItem>
                <SelectItem value="destructive">Error</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="emphasis">Emphasis</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Icon</Label>
            <IconPicker value={activeIconName} onChange={setIcon} disabled={type !== "default"} size="sm" />
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Dismissable</Label>
            <div className="pt-1">
              <Switch checked={dismissable} onCheckedChange={setDismissable} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">In Card</Label>
            <div className="pt-1">
              <Switch checked={inCard} onCheckedChange={setInCard} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Show Title</Label>
            <div className="pt-1">
              <Switch checked={showTitle} onCheckedChange={(v) => { setShowTitle(v); if (!v && !showSubtitle) setShowSubtitle(true) }} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Show Subtitle</Label>
            <div className="pt-1">
              <Switch checked={showSubtitle} onCheckedChange={(v) => { setShowSubtitle(v); if (!v && !showTitle) setShowTitle(true) }} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Show Icon</Label>
            <div className="pt-1">
              <Switch checked={showIcon} onCheckedChange={setShowIcon} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Show Action</Label>
            <div className="pt-1">
              <Switch checked={showAction} onCheckedChange={handleShowActionChange} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className={["text-xs text-muted-foreground text-nowrap", !showAction ? "opacity-50" : ""].join(" ")}>2nd Action</Label>
            <div className="pt-1">
              <Switch checked={showSecondaryAction} onCheckedChange={setShowSecondaryAction} disabled={!showAction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const alertSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function AlertDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={alertSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Feedback</p>
        <h1 className="typo-heading-2">Alert</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Inline alert messages for neutral, error, success, warning, and emphasis feedback.</p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <AlertExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add class-variance-authority clsx tailwind-merge lucide-react`}
        importCode={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Neutral" description="General-purpose notification with a neutral appearance." code={`<Alert>\n  <Info className="size-md" />\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can add components to your app using the CLI.</AlertDescription>\n</Alert>`}>
          <Alert>
            <Info className="size-md" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Error" description="Use for error messages that require user attention." code={`<Alert variant="destructive">\n  <AlertCircle className="size-md" />\n  <AlertTitle>Error</AlertTitle>\n  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>\n</Alert>`}>
          <Alert variant="destructive">
            <AlertCircle className="size-md" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Success" description="Confirm successful actions or operations." code={`<Alert variant="success">\n  <CircleCheck className="size-md" />\n  <AlertTitle>Success</AlertTitle>\n  <AlertDescription>Your changes have been saved successfully.</AlertDescription>\n</Alert>`}>
          <Alert variant="success">
            <CircleCheck className="size-md" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Warning" description="Warn users about potential issues or expiring resources." code={`<Alert variant="warning">\n  <TriangleAlert className="size-md" />\n  <AlertTitle>Warning</AlertTitle>\n  <AlertDescription>Your trial expires in 3 days. Upgrade to continue.</AlertDescription>\n</Alert>`}>
          <Alert variant="warning">
            <TriangleAlert className="size-md" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Your trial expires in 3 days. Upgrade to continue.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Emphasis" description="Highlight important information or announcements." code={`<Alert variant="emphasis">\n  <Info className="size-md" />\n  <AlertTitle>Information</AlertTitle>\n  <AlertDescription>A new version is available. Update to get the latest features.</AlertDescription>\n</Alert>`}>
          <Alert variant="emphasis">
            <Info className="size-md" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>A new version is available. Update to get the latest features.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Title Only" description="Alert with only a title, no description." code={`<Alert>\n  <Info className="size-md" />\n  <AlertTitle>New update available</AlertTitle>\n</Alert>`}>
          <Alert>
            <Info className="size-md" />
            <AlertTitle>New update available</AlertTitle>
          </Alert>
        </Example>

        <Example title="Description Only" description="Alert with only a description, no title." code={`<Alert variant="success">\n  <CircleCheck className="size-md" />\n  <AlertDescription>Your profile has been updated.</AlertDescription>\n</Alert>`}>
          <Alert variant="success">
            <CircleCheck className="size-md" />
            <AlertDescription>Your profile has been updated.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Without Icon" description="Alert without a leading icon." code={`<Alert>\n  <AlertTitle>Note</AlertTitle>\n  <AlertDescription>This is a simple alert without an icon.</AlertDescription>\n</Alert>`}>
          <Alert>
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>This is a simple alert without an icon.</AlertDescription>
          </Alert>
        </Example>

        <Example title="Dismissable" description="Alert with a dismiss button for user-closable messages." code={`<Alert className="pr-10">\n  <Info className="size-md" />\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>You can dismiss this notification.</AlertDescription>\n  <button className="absolute right-md top-sm text-current opacity-70 hover:opacity-100 transition-opacity" aria-label="Dismiss">\n    <X className="size-md" />\n  </button>\n</Alert>`}>
          <Alert className="pr-10">
            <Info className="size-md" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can dismiss this notification.</AlertDescription>
            <button className="absolute right-md top-sm text-current opacity-70 hover:opacity-100 transition-opacity" aria-label="Dismiss">
              <X className="size-md" />
            </button>
          </Alert>
        </Example>

        <Example title="In Card" description="Alert embedded inside a card — no border, card-subtle background, compact padding." code={`<div className="rounded-xl border border-border bg-card p-lg shadow-sm">\n  <p className="typo-paragraph-sm-bold mb-sm">Payment details</p>\n  <Alert inCard>\n    <Info className="size-md" />\n    <AlertDescription>Your card ending in 4242 will be charged.</AlertDescription>\n  </Alert>\n</div>`}>
          <div className="rounded-xl border border-border bg-card p-lg shadow-sm">
            <p className="typo-paragraph-sm-bold mb-sm">Payment details</p>
            <Alert inCard>
              <Info className="size-md" />
              <AlertDescription>Your card ending in 4242 will be charged.</AlertDescription>
            </Alert>
          </div>
        </Example>

        <Example title="Form Validation" description="Error alert summarizing multiple form validation issues." code={`<Alert variant="destructive">\n  <AlertCircle className="size-md" />\n  <AlertTitle>There were 2 errors with your submission</AlertTitle>\n  <AlertDescription>\n    <ul className="list-disc pl-4 mt-xs space-y-1">\n      <li>Email address is required</li>\n      <li>Password must be at least 8 characters</li>\n    </ul>\n  </AlertDescription>\n</Alert>`}>
          <Alert variant="destructive">
            <AlertCircle className="size-md" />
            <AlertTitle>There were 2 errors with your submission</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-4 mt-xs space-y-1">
                <li>Email address is required</li>
                <li>Password must be at least 8 characters</li>
              </ul>
            </AlertDescription>
          </Alert>
        </Example>

        <Example title="With Link" description="Alert description containing an inline link for user action." code={`<Alert variant="emphasis">\n  <Info className="size-md" />\n  <AlertTitle>New version available</AlertTitle>\n  <AlertDescription>\n    Version 2.0 is now available.{" "}\n    <a href="#" className="underline font-medium">View release notes</a>\n  </AlertDescription>\n</Alert>`}>
          <Alert variant="emphasis">
            <Info className="size-md" />
            <AlertTitle>New version available</AlertTitle>
            <AlertDescription>
              Version 2.0 is now available.{" "}
              <a href="#" className="underline font-medium">View release notes</a>
            </AlertDescription>
          </Alert>
        </Example>

        <Example title="With Actions" description="Alert with action buttons for user response. Matches Figma Action frame (sm buttons, gap-xs)." code={`<Alert>\n  <Info className="size-md" />\n  <AlertTitle>Confirm your email</AlertTitle>\n  <AlertDescription>We sent a verification link to your inbox.</AlertDescription>\n  <div className="flex gap-xs mt-xs [&]:pl-7">\n    <Button size="sm">Resend email</Button>\n    <Button size="sm" variant="outline">Change email</Button>\n  </div>\n</Alert>`}>
          <Alert>
            <Info className="size-md" />
            <AlertTitle>Confirm your email</AlertTitle>
            <AlertDescription>We sent a verification link to your inbox.</AlertDescription>
            <div className="flex gap-xs mt-xs [&]:pl-7">
              <Button size="sm">Resend email</Button>
              <Button size="sm" variant="outline">Change email</Button>
            </div>
          </Alert>
        </Example>

        <Example title="Error with Actions" description="Destructive alert with retry and dismiss actions." code={`<Alert variant="destructive" className="pr-10">\n  <AlertCircle className="size-md" />\n  <AlertTitle>Payment failed</AlertTitle>\n  <AlertDescription>Your card was declined. Please try another payment method.</AlertDescription>\n  <div className="flex gap-xs mt-xs [&]:pl-7">\n    <Button size="sm" variant="destructive">Retry payment</Button>\n    <Button size="sm" variant="outline">Cancel order</Button>\n  </div>\n  <button className="absolute right-md top-sm text-current opacity-70 hover:opacity-100 transition-opacity" aria-label="Dismiss">\n    <X className="size-md" />\n  </button>\n</Alert>`}>
          <Alert variant="destructive" className="pr-10">
            <AlertCircle className="size-md" />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>Your card was declined. Please try another payment method.</AlertDescription>
            <div className="flex gap-xs mt-xs [&]:pl-7">
              <Button size="sm" variant="destructive">Retry payment</Button>
              <Button size="sm" variant="outline">Cancel order</Button>
            </div>
            <button className="absolute right-md top-sm text-current opacity-70 hover:opacity-100 transition-opacity" aria-label="Dismiss">
              <X className="size-md" />
            </button>
          </Alert>
        </Example>

        <Example title="Success Dismissable" description="Dismissable success alert for confirmation messages." code={`<Alert variant="success" className="pr-10">\n  <CircleCheck className="size-md" />\n  <AlertTitle>Order confirmed!</AlertTitle>\n  <AlertDescription>\n    Your order #12345 has been placed.{" "}\n    <a href="#" className="underline font-medium">Track shipment</a>\n  </AlertDescription>\n  <button className="absolute right-md top-sm text-current opacity-70 hover:opacity-100 transition-opacity" aria-label="Dismiss">\n    <X className="size-md" />\n  </button>\n</Alert>`}>
          <Alert variant="success" className="pr-10">
            <CircleCheck className="size-md" />
            <AlertTitle>Order confirmed!</AlertTitle>
            <AlertDescription>
              Your order #12345 has been placed.{" "}
              <a href="#" className="underline font-medium">Track shipment</a>
            </AlertDescription>
            <button className="absolute right-md top-sm text-current opacity-70 hover:opacity-100 transition-opacity" aria-label="Dismiss">
              <X className="size-md" />
            </button>
          </Alert>
        </Example>

        <Example title="Warning with Link" description="Warning alert with inline link for immediate user action." code={`<Alert variant="warning">\n  <TriangleAlert className="size-md" />\n  <AlertTitle>Storage almost full</AlertTitle>\n  <AlertDescription>\n    You've used 90% of your storage.{" "}\n    <a href="#" className="underline font-medium">Upgrade plan</a>\n  </AlertDescription>\n</Alert>`}>
          <Alert variant="warning">
            <TriangleAlert className="size-md" />
            <AlertTitle>Storage almost full</AlertTitle>
            <AlertDescription>
              You've used 90% of your storage.{" "}
              <a href="#" className="underline font-medium">Upgrade plan</a>
            </AlertDescription>
          </Alert>
        </Example>

        <Example title="In Card Variants" description="Multiple alert types inside a card context using the inCard prop." code={`<div className="rounded-xl border border-border bg-card p-lg shadow-sm space-y-sm">\n  <p className="typo-paragraph-sm-bold">Account settings</p>\n  <Alert variant="warning" inCard>\n    <TriangleAlert className="size-md" />\n    <AlertDescription>Two-factor authentication is not enabled.</AlertDescription>\n  </Alert>\n  <Alert variant="success" inCard>\n    <CircleCheck className="size-md" />\n    <AlertDescription>Email verified successfully.</AlertDescription>\n  </Alert>\n</div>`}>
          <div className="rounded-xl border border-border bg-card p-lg shadow-sm space-y-sm">
            <p className="typo-paragraph-sm-bold">Account settings</p>
            <Alert variant="warning" inCard>
              <TriangleAlert className="size-md" />
              <AlertDescription>Two-factor authentication is not enabled.</AlertDescription>
            </Alert>
            <Alert variant="success" inCard>
              <CircleCheck className="size-md" />
              <AlertDescription>Email verified successfully.</AlertDescription>
            </Alert>
          </div>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Pure HTML <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">div</code> elements with{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">class-variance-authority</code> for variant styling.
        </p>
        <AlertPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          CSS custom properties used by the Alert component. All tokens support light and dark mode.
        </p>
        <AlertTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Alert for system messages requiring attention, form validation summaries, and important notifications.</p>
              <p>Choose the correct variant to match semantic meaning: <strong>destructive</strong> for failures, <strong>success</strong> for confirmations, <strong>warning</strong> for cautions.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Alert for transient messages — use Toast/Sonner instead.</p>
              <p>Don't use Alert for inline field errors — use Help Text component instead.</p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use <strong>dismissable</strong> alerts for non-critical notifications that users can acknowledge.</p>
              <p>Always include an icon to reinforce the semantic meaning of the alert type.</p>
            </DoItem>
            <DontItem>
              <p>Don't use the wrong severity color — <strong>emphasis</strong> is for informational highlights, not errors.</p>
              <p>Don't stack multiple alerts of the same type — consolidate into a single alert with a list.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="58:5416" rows={[
        ["Type", "Neutral", "variant", '"default"'],
        ["Type", "Error", "variant", '"destructive"'],
        ["Type", "Success", "variant", '"success"'],
        ["Type", "Warning", "variant", '"warning"'],
        ["Type", "Emphasis", "variant", '"emphasis"'],
        ["Sub-component", "Title", "AlertTitle", "typo-paragraph-sm-bold"],
        ["Sub-component", "Description", "AlertDescription", "typo-paragraph-sm"],
        ["Show Icon", "true/false", "children", "<Icon /> before AlertTitle"],
        ["Icon Size", "16×16px", "—", "[&>svg]:size-md"],
        ["Padding", "py:12px px:16px", "—", "py-sm px-md"],
        ["Border Radius", "8px", "—", "rounded-lg"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">ARIA attributes</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                Alert container uses{" "}
                <code className="bg-muted px-1 rounded font-mono">role="alert"</code>{" "}
                to announce content to screen readers.
              </li>
              <li>
                The <code className="bg-muted px-1 rounded font-mono">role="alert"</code> implicitly sets{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-live="assertive"</code> and{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-atomic="true"</code>.
              </li>
              <li>
                Screen readers will interrupt current speech to announce alert content when it appears in the DOM.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to interactive elements inside the alert (links, buttons)</td>
                  </tr>
                  <tr>
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Escape</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Dismiss the alert (when dismissable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Color contrast</h3>
            <p className="text-muted-foreground">
              All variant colors meet WCAG 2.1 AA contrast requirements. Title and description text
              colors are chosen to ensure readability against each variant's background.
              The component supports dark mode with adjusted colors maintaining the same contrast ratios.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Alert Dialog</p>
              <p className="text-muted-foreground mt-0.5">
                For critical confirmations that require user action. Blocks interaction until dismissed.
              </p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Sonner (Toast)</p>
              <p className="text-muted-foreground mt-0.5">
                For transient notifications that auto-dismiss. Use instead of Alert for temporary messages.
              </p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Help Text</p>
              <p className="text-muted-foreground mt-0.5">
                For inline field-level validation messages below form inputs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Badge Docs
   ================================================================ */

function BadgeExploreBehavior() {
  // Badge/Label state
  const [labelVariant, setLabelVariant] = useState("default")
  const [labelLevel, setLabelLevel] = useState("primary")
  const [labelSize, setLabelSize] = useState("default")
  const [labelState, setLabelState] = useState("Default")
  const [showIconLeft, setShowIconLeft] = useState(false)
  const [showIconRight, setShowIconRight] = useState(false)
  const [iconLeftName, setIconLeftName] = useState("Circle")
  const [iconRightName, setIconRightName] = useState("X")
  const [labelText, setLabelText] = useState("Badge")

  // Badge/Round state
  const [roundVariant, setRoundVariant] = useState("default")
  const [roundSize, setRoundSize] = useState("default")
  const [roundState, setRoundState] = useState("Default")
  const [roundType, setRoundType] = useState<"numeric" | "icon">("numeric")
  const [roundIconName, setRoundIconName] = useState("Bell")
  const [roundNumber, setRoundNumber] = useState("3")

  // Badge/Dot state
  const [dotVariant, setDotVariant] = useState("default")
  const [dotSize, setDotSize] = useState("default")

  const IconLeft = allLucideIcons.find((i) => i.name === iconLeftName)?.icon ?? allLucideIcons.find((i) => i.name === "Circle")!.icon
  const IconRight = allLucideIcons.find((i) => i.name === iconRightName)?.icon ?? allLucideIcons.find((i) => i.name === "X")!.icon
  const RoundIcon = allLucideIcons.find((i) => i.name === roundIconName)?.icon ?? allLucideIcons.find((i) => i.name === "Bell")!.icon

  return (
    <Tabs defaultValue="label">
      <TabsList>
        <TabsTrigger value="label">Label</TabsTrigger>
        <TabsTrigger value="round">Round</TabsTrigger>
        <TabsTrigger value="dot">Dot</TabsTrigger>
      </TabsList>

      {/* ── Badge/Label ── */}
      <TabsContent value="label" className="mt-md">
        <div className="rounded-xl border border-border overflow-hidden bg-background">
          <div className="p-4xl flex items-center justify-center min-h-[200px]">
            <Badge variant={labelVariant as any} level={labelLevel as any} size={labelSize as any} className={labelState === "Focus" ? "ring-[3px] ring-ring" : ""}>
              {showIconLeft && <IconLeft />}
              {labelText}
              {showIconRight && <IconRight />}
            </Badge>
          </div>
          <div className="border-t border-border bg-muted/50 p-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Variant</Label>
                <Select value={labelVariant} onValueChange={setLabelVariant}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="outline">Outline</SelectItem>
                    <SelectItem value="ghost">Ghost</SelectItem>
                    <SelectItem value="destructive">Destructive</SelectItem>
                    <SelectItem value="emphasis">Emphasis</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Level</Label>
                <Select value={labelLevel} onValueChange={setLabelLevel}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Size</Label>
                <Select value={labelSize} onValueChange={setLabelSize}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small (20px)</SelectItem>
                    <SelectItem value="default">Regular (24px)</SelectItem>
                    <SelectItem value="lg">Large (28px)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">State</Label>
                <Select value={labelState} onValueChange={setLabelState}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Default">Default</SelectItem>
                    <SelectItem value="Focus">Focus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Label</Label>
                <Input value={labelText} onChange={(e) => setLabelText(e.target.value)} className="h-8 text-xs" />
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Show Icon Left</Label>
                <div className="pt-1"><Switch checked={showIconLeft} onCheckedChange={setShowIconLeft} /></div>
              </div>
              <div className="space-y-xs">
                <Label className={["text-xs text-muted-foreground", !showIconLeft ? "opacity-50" : ""].join(" ")}>Icon Left</Label>
                <IconPicker value={iconLeftName} onChange={setIconLeftName} disabled={!showIconLeft} size="sm" />
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Show Icon Right</Label>
                <div className="pt-1"><Switch checked={showIconRight} onCheckedChange={setShowIconRight} /></div>
              </div>
              <div className="space-y-xs">
                <Label className={["text-xs text-muted-foreground", !showIconRight ? "opacity-50" : ""].join(" ")}>Icon Right</Label>
                <IconPicker value={iconRightName} onChange={setIconRightName} disabled={!showIconRight} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* ── Badge/Round ── */}
      <TabsContent value="round" className="mt-md">
        <div className="rounded-xl border border-border overflow-hidden bg-background">
          <div className="p-4xl flex items-center justify-center min-h-[200px]">
            <BadgeRound variant={roundVariant as any} size={roundSize as any} className={roundState === "Focus" ? "ring-[3px] ring-ring" : ""}>
              {roundType === "numeric" ? roundNumber : <RoundIcon />}
            </BadgeRound>
          </div>
          <div className="border-t border-border bg-muted/50 p-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Variant</Label>
                <Select value={roundVariant} onValueChange={setRoundVariant}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="outline">Outline</SelectItem>
                    <SelectItem value="ghost">Ghost</SelectItem>
                    <SelectItem value="destructive">Destructive</SelectItem>
                    <SelectItem value="emphasis">Emphasis</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Size</Label>
                <Select value={roundSize} onValueChange={setRoundSize}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small (20px)</SelectItem>
                    <SelectItem value="default">Regular (24px)</SelectItem>
                    <SelectItem value="lg">Large (28px)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">State</Label>
                <Select value={roundState} onValueChange={setRoundState}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Default">Default</SelectItem>
                    <SelectItem value="Focus">Focus</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Type</Label>
                <Select value={roundType} onValueChange={(v) => setRoundType(v as any)}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="numeric">Numeric</SelectItem>
                    <SelectItem value="icon">Icon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {roundType === "numeric" ? (
                <div className="space-y-xs">
                  <Label className="text-xs text-muted-foreground">Number</Label>
                  <Input value={roundNumber} onChange={(e) => setRoundNumber(e.target.value)} className="h-8 text-xs" />
                </div>
              ) : (
                <div className="space-y-xs">
                  <Label className="text-xs text-muted-foreground">Icon</Label>
                  <IconPicker value={roundIconName} onChange={setRoundIconName} size="sm" />
                </div>
              )}
            </div>
          </div>
        </div>
      </TabsContent>

      {/* ── Badge/Dot ── */}
      <TabsContent value="dot" className="mt-md">
        <div className="rounded-xl border border-border overflow-hidden bg-background">
          <div className="p-4xl flex items-center justify-center min-h-[200px]">
            <BadgeDot variant={dotVariant as any} size={dotSize as any} />
          </div>
          <div className="border-t border-border bg-muted/50 p-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Variant</Label>
                <Select value={dotVariant} onValueChange={setDotVariant}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Primary</SelectItem>
                    <SelectItem value="secondary">Secondary</SelectItem>
                    <SelectItem value="destructive">Destructive</SelectItem>
                    <SelectItem value="emphasis">Emphasis</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-xs">
                <Label className="text-xs text-muted-foreground">Size</Label>
                <Select value={dotSize} onValueChange={setDotSize}>
                  <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small (4px)</SelectItem>
                    <SelectItem value="default">Regular (8px)</SelectItem>
                    <SelectItem value="lg">Large (12px)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function BadgePropsTable() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">Badge (Label)</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">variant</td><td className="px-4 py-3 font-mono text-muted-foreground">"default" | "secondary" | "outline" | "ghost" | "destructive" | "emphasis" | "success" | "warning"</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Color variant matching Figma Variant property.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">level</td><td className="px-4 py-3 font-mono text-muted-foreground">"primary" | "secondary"</td><td className="px-4 py-3 font-mono text-muted-foreground">"primary"</td><td className="px-4 py-3 text-muted-foreground">Primary = solid fill (strong emphasis), Secondary = subtle fill.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">size</td><td className="px-4 py-3 font-mono text-muted-foreground">"sm" | "default" | "lg"</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Small (20px), Regular (24px), Large (28px).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">{"Label text + optional SVG icons (auto-sized via [&>svg])."}</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">BadgeRound</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">variant</td><td className="px-4 py-3 font-mono text-muted-foreground">"default" | "secondary" | "outline" | "ghost" | "destructive" | "emphasis" | "success" | "warning"</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Color variant. Primary level only (no secondary level).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">size</td><td className="px-4 py-3 font-mono text-muted-foreground">"sm" | "default" | "lg"</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Small (20×20), Regular (24×24), Large (28×28).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">{"Numeric text (\"3\", \"99+\") or SVG icon."}</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">BadgeDot</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">variant</td><td className="px-4 py-3 font-mono text-muted-foreground">"default" | "secondary" | "destructive" | "emphasis" | "success" | "warning"</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Color variant. 6 options (no outline/ghost).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">size</td><td className="px-4 py-3 font-mono text-muted-foreground">"sm" | "default" | "lg"</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Small (4px), Regular (8px), Large (12px).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">aria-label</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">"status indicator"</td><td className="px-4 py-3 text-muted-foreground">Accessible label since dot has no visible text.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function BadgeTokensTable() {
  const tokens = [
    { token: "--primary / --primary-foreground", value: "#0f766e / #ffffff", hex: "#0f766e", usage: "Default variant (primary level)" },
    { token: "--primary-subtle / -foreground", value: "#f0fdfa / #0f766e", hex: "#f0fdfa", usage: "Default variant (secondary level)" },
    { token: "--secondary / -foreground", value: "#e9e9e7 / #2f2f2b", hex: "#e9e9e7", usage: "Secondary variant" },
    { token: "--destructive / -foreground", value: "#dc2626 / #ffffff", hex: "#dc2626", usage: "Destructive variant (primary level)" },
    { token: "--destructive-subtle / -foreground", value: "#fef2f2 / #dc2626", hex: "#fef2f2", usage: "Destructive variant (secondary level)" },
    { token: "--emphasis / -foreground", value: "#2563eb / #ffffff", hex: "#2563eb", usage: "Emphasis variant (primary level)" },
    { token: "--emphasis-subtle / -foreground", value: "#eff6ff / #2563eb", hex: "#eff6ff", usage: "Emphasis variant (secondary level)" },
    { token: "--success / -foreground", value: "#16a34a / #ffffff", hex: "#16a34a", usage: "Success variant (primary level)" },
    { token: "--success-subtle / -foreground", value: "#f0fdf4 / #16a34a", hex: "#f0fdf4", usage: "Success variant (secondary level)" },
    { token: "--warning / -foreground", value: "#d97706 / #ffffff", hex: "#d97706", usage: "Warning variant (primary level)" },
    { token: "--warning-subtle / -foreground", value: "#fffbeb / #d97706", hex: "#fffbeb", usage: "Warning variant (secondary level)" },
    { token: "--background / --border", value: "#ffffff / #e9e9e7", hex: "#ffffff", usage: "Outline & Ghost background + border" },
    { token: "--ghost-foreground", value: "#6f6f6a", hex: "#6f6f6a", usage: "Outline/Ghost secondary text" },
    { token: "rounded-full", value: "9999px", hex: "—", usage: "Pill shape (all badges)" },
    { token: "h-lg (20px)", value: "20px", hex: "—", usage: "Label/Round small size height" },
    { token: "h-xl (24px)", value: "24px", hex: "—", usage: "Label/Round regular size height" },
    { token: "h-[28px]", value: "28px", hex: "—", usage: "Label/Round large size height" },
    { token: "size-lg (20px)", value: "20×20px", hex: "—", usage: "Round small (fixed square)" },
    { token: "size-xl (24px)", value: "24×24px", hex: "—", usage: "Round regular (fixed square)" },
    { token: "size-[28px]", value: "28×28px", hex: "—", usage: "Round large (fixed square)" },
    { token: "size-3xs (4px)", value: "4×4px", hex: "—", usage: "Dot small" },
    { token: "size-xs (8px)", value: "8×8px", hex: "—", usage: "Dot regular" },
    { token: "size-sm (12px)", value: "12×12px", hex: "—", usage: "Dot large" },
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
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">{t.token}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">{t.value}</td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div className="size-5 rounded border border-border" style={{ backgroundColor: t.hex }} />
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

const badgeSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function BadgeDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={badgeSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Badge</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Status tags, notification counts, and category labels. Three shapes: Label (pill with text), Round (circular with number/icon), and Dot (minimal indicator). Supports up to 8 color variants × 3 sizes.</p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <BadgeExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add class-variance-authority clsx tailwind-merge`}
        importCode={`import { Badge, BadgeRound, BadgeDot } from "@/components/ui/badge"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="All Variants (Primary Level)" description="Solid fill badges for strong emphasis." code={`<div className="flex gap-2 flex-wrap">\n  <Badge>Primary</Badge>\n  <Badge variant="secondary">Secondary</Badge>\n  <Badge variant="outline">Outline</Badge>\n  <Badge variant="ghost">Ghost</Badge>\n  <Badge variant="destructive">Destructive</Badge>\n  <Badge variant="emphasis">Emphasis</Badge>\n  <Badge variant="success">Success</Badge>\n  <Badge variant="warning">Warning</Badge>\n</div>`}>
          <div className="flex gap-2 flex-wrap">
            <Badge>Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="emphasis">Emphasis</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </Example>

        <Example title="All Variants (Secondary Level)" description="Subtle fill badges for softer emphasis." code={`<div className="flex gap-2 flex-wrap">\n  <Badge level="secondary">Primary</Badge>\n  <Badge level="secondary" variant="secondary">Secondary</Badge>\n  <Badge level="secondary" variant="outline">Outline</Badge>\n  <Badge level="secondary" variant="ghost">Ghost</Badge>\n  <Badge level="secondary" variant="destructive">Destructive</Badge>\n  <Badge level="secondary" variant="emphasis">Emphasis</Badge>\n  <Badge level="secondary" variant="success">Success</Badge>\n  <Badge level="secondary" variant="warning">Warning</Badge>\n</div>`}>
          <div className="flex gap-2 flex-wrap">
            <Badge level="secondary">Primary</Badge>
            <Badge level="secondary" variant="secondary">Secondary</Badge>
            <Badge level="secondary" variant="outline">Outline</Badge>
            <Badge level="secondary" variant="ghost">Ghost</Badge>
            <Badge level="secondary" variant="destructive">Destructive</Badge>
            <Badge level="secondary" variant="emphasis">Emphasis</Badge>
            <Badge level="secondary" variant="success">Success</Badge>
            <Badge level="secondary" variant="warning">Warning</Badge>
          </div>
        </Example>

        <Example title="Sizes" description="Small (20px), Regular (24px), Large (28px)." code={`<div className="flex items-center gap-2">\n  <Badge size="sm">Small</Badge>\n  <Badge>Regular</Badge>\n  <Badge size="lg">Large</Badge>\n</div>`}>
          <div className="flex items-center gap-2">
            <Badge size="sm">Small</Badge>
            <Badge>Regular</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </Example>

        <Example title="With Icons" description="SVG icons auto-sized per size variant." code={`<div className="flex items-center gap-2">\n  <Badge><Info /> Active</Badge>\n  <Badge variant="destructive"><AlertCircle /> Error</Badge>\n  <Badge variant="success" level="secondary"><CircleCheck /> Done</Badge>\n</div>`}>
          <div className="flex items-center gap-2">
            <Badge><Info /> Active</Badge>
            <Badge variant="destructive"><AlertCircle /> Error</Badge>
            <Badge variant="success" level="secondary"><CircleCheck /> Done</Badge>
          </div>
        </Example>

        <Example title="Round — Numeric" description="Circular badges for notification counts." code={`<div className="flex items-center gap-2">\n  <BadgeRound size="sm">1</BadgeRound>\n  <BadgeRound>3</BadgeRound>\n  <BadgeRound size="lg">99</BadgeRound>\n  <BadgeRound variant="destructive">5</BadgeRound>\n  <BadgeRound variant="emphasis">12</BadgeRound>\n</div>`}>
          <div className="flex items-center gap-2">
            <BadgeRound size="sm">1</BadgeRound>
            <BadgeRound>3</BadgeRound>
            <BadgeRound size="lg">99</BadgeRound>
            <BadgeRound variant="destructive">5</BadgeRound>
            <BadgeRound variant="emphasis">12</BadgeRound>
          </div>
        </Example>

        <Example title="Round — Icon" description="Circular badges with icon content." code={`<div className="flex items-center gap-2">\n  <BadgeRound size="sm"><Bell /></BadgeRound>\n  <BadgeRound><Bell /></BadgeRound>\n  <BadgeRound size="lg"><Bell /></BadgeRound>\n  <BadgeRound variant="success"><CircleCheck /></BadgeRound>\n  <BadgeRound variant="warning"><AlertCircle /></BadgeRound>\n</div>`}>
          <div className="flex items-center gap-2">
            <BadgeRound size="sm"><Bell /></BadgeRound>
            <BadgeRound><Bell /></BadgeRound>
            <BadgeRound size="lg"><Bell /></BadgeRound>
            <BadgeRound variant="success"><CircleCheck /></BadgeRound>
            <BadgeRound variant="warning"><AlertCircle /></BadgeRound>
          </div>
        </Example>

        <Example title="Dot — All Variants" description="Small dot indicators for status." code={`<div className="flex items-center gap-2">\n  <BadgeDot />\n  <BadgeDot variant="secondary" />\n  <BadgeDot variant="destructive" />\n  <BadgeDot variant="emphasis" />\n  <BadgeDot variant="success" />\n  <BadgeDot variant="warning" />\n</div>`}>
          <div className="flex items-center gap-2">
            <BadgeDot />
            <BadgeDot variant="secondary" />
            <BadgeDot variant="destructive" />
            <BadgeDot variant="emphasis" />
            <BadgeDot variant="success" />
            <BadgeDot variant="warning" />
          </div>
        </Example>

        <Example title="Dot — Sizes" description="Small (4px), Regular (8px), Large (12px)." code={`<div className="flex items-center gap-2">\n  <BadgeDot size="sm" />\n  <BadgeDot />\n  <BadgeDot size="lg" />\n</div>`}>
          <div className="flex items-center gap-2">
            <BadgeDot size="sm" />
            <BadgeDot />
            <BadgeDot size="lg" />
          </div>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Renders a{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">{"<span>"}</code>{" "}
          element with CVA-driven variant classes.
        </p>
        <BadgePropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Tokens from{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code>{" "}
          sourced from Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <BadgeTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use <strong>Badge</strong> (label) for status indicators and category labels.</p>
              <p>Use <strong>BadgeRound</strong> for notification counts (numeric) or icon indicators.</p>
              <p>Use <strong>BadgeDot</strong> as a minimal status dot when text is unnecessary.</p>
              <p>Use semantic variants consistently: <strong>Success</strong> for positive, <strong>Warning</strong> for caution, <strong>Destructive</strong> for errors.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Badge for interactive actions — use Button instead.</p>
              <p>Don't use long text content inside badges — keep to 1-2 words.</p>
              <p>Don't use inconsistent color meanings across the same interface.</p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use <strong>Primary level</strong> for strong emphasis and key status (Badge label only).</p>
              <p>Use <strong>Secondary level</strong> for subtle, supplementary information (Badge label only).</p>
              <p>Use <strong>BadgeDot</strong> next to text labels or icons to indicate new/unread state.</p>
            </DoItem>
            <DontItem>
              <p>Don't mix too many badge variants in a single view — limit to 2-3.</p>
              <p>Don't use BadgeDot without a nearby text label for accessibility.</p>
              <p>Don't use BadgeRound for text content — use Badge (label) instead.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="19:6979" rows={[
        ["Level", "Primary", "level", "\"primary\" — solid fill, bold text"],
        ["Level", "Secondary", "level", "\"secondary\" — subtle fill, regular weight text"],
        ["Variant", "Primary", "variant", "\"default\" — bg-primary"],
        ["Variant", "Secondary", "variant", "\"secondary\" — bg-secondary"],
        ["Variant", "Outline", "variant", "\"outline\" — border-border + bg-background"],
        ["Variant", "Ghost", "variant", "\"ghost\" — bg-background, no border"],
        ["Variant", "Destructive", "variant", "\"destructive\" — bg-destructive"],
        ["Variant", "Emphasis", "variant", "\"emphasis\" — bg-emphasis"],
        ["Variant", "Success", "variant", "\"success\" — bg-success"],
        ["Variant", "Warning", "variant", "\"warning\" — bg-warning"],
        ["Size", "Regular (24px)", "size", "\"default\" — h-xl px-xs"],
        ["Size", "Small (20px)", "size", "\"sm\" — h-lg px-2xs"],
        ["Size", "Large (28px)", "size", "\"lg\" — h-[28px] px-sm py-3xs"],
        ["Shape", "Pill (9999px)", "—", "rounded-full"],
        ["Icon Left/Right", "Instance Swap", "children", "SVG auto-sized via [&>svg]:size-sm/md"],
        ["Text Primary Reg/Sm", "Geist 600 12/16", "—", "typo-paragraph-mini-bold"],
        ["Text Primary Lg", "Geist 500 14/20", "—", "typo-paragraph-sm-medium"],
        ["Text Secondary Reg/Sm", "Geist 400 12/16", "—", "typo-paragraph-mini"],
        ["Text Secondary Lg", "Geist 400 14/20", "—", "typo-paragraph-sm"],
        ["State", "Default / Focus", "—", "focus:ring-[3px] focus:ring-ring"],
        ["Gap Reg/Sm", "4px", "—", "gap-3xs"],
        ["Gap Lg", "6px", "—", "gap-2xs"],
      ]} />

      <FigmaMapping nodeId="4428:6150" rows={[
        ["Type", "Numberic / Icon", "children", "Number text or SVG icon"],
        ["Variant", "Primary…Warning", "variant", "Same 8 variants as Badge/Label (primary level only)"],
        ["Size", "Small (20×20)", "size", "\"sm\" — size-lg"],
        ["Size", "Regular (24×24)", "size", "\"default\" — size-xl"],
        ["Size", "Large (28×28)", "size", "\"lg\" — size-[28px]"],
        ["Shape", "Circle (9999px)", "—", "rounded-full"],
        ["Icon Sm/Reg", "12×12", "—", "[&>svg]:size-sm"],
        ["Icon Lg", "16×16", "—", "[&>svg]:size-md"],
        ["Text Sm/Reg", "Geist 600 12/16", "—", "typo-paragraph-mini-bold"],
        ["Text Lg", "Geist 500 14/20", "—", "typo-paragraph-sm-medium"],
        ["State", "Default / Focus", "—", "focus:ring-[3px] focus:ring-ring"],
        ["Icon Swap", "Instance Swap", "children", "SVG icon via children prop"],
      ]} />

      <FigmaMapping nodeId="4428:7546" rows={[
        ["Variant", "Primary", "variant", "\"default\" — bg-primary"],
        ["Variant", "Secondary", "variant", "\"secondary\" — bg-secondary"],
        ["Variant", "Destructive", "variant", "\"destructive\" — bg-destructive"],
        ["Variant", "Emphasis", "variant", "\"emphasis\" — bg-emphasis"],
        ["Variant", "Success", "variant", "\"success\" — bg-success"],
        ["Variant", "Warning", "variant", "\"warning\" — bg-warning"],
        ["Size", "Small (4px)", "size", "\"sm\" — size-3xs"],
        ["Size", "Regular (8px)", "size", "\"default\" — size-xs"],
        ["Size", "Large (12px)", "size", "\"lg\" — size-sm"],
        ["Shape", "Circle (9999px)", "—", "rounded-full"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Semantic HTML</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                Badge and BadgeRound render as{" "}
                <code className="bg-muted px-1 rounded font-mono">{"<span>"}</code>{" "}
                — purely decorative, not interactive.
              </li>
              <li>
                BadgeDot renders with{" "}
                <code className="bg-muted px-1 rounded font-mono">role="status"</code>{" "}
                and a default{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-label="status indicator"</code>.
                Always provide a descriptive aria-label.
              </li>
              <li>For notification counts (BadgeRound), add{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-label</code>{" "}
                for context (e.g. "3 new notifications").
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Color contrast</h3>
            <p className="text-muted-foreground">
              All Primary-level variants use white text on colored backgrounds, meeting WCAG AA contrast requirements.
              Secondary-level variants use colored text on subtle backgrounds — also AA compliant.
              Don't rely on color alone to convey meaning — pair with text or icons.
            </p>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Focus indicator</h3>
            <p className="text-muted-foreground">
              Focus state shows a 3px ring using{" "}
              <code className="bg-muted px-1 rounded font-mono">focus:ring-[3px] focus:ring-ring</code>.
              Only visible when badge is focused (e.g. inside focusable containers).
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Button</p>
              <p className="text-muted-foreground mt-0.5">Use Button for interactive actions. Badge is purely informational.</p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Alert</p>
              <p className="text-muted-foreground mt-0.5">Use Alert for longer status messages. Badge is for short labels.</p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Toggle</p>
              <p className="text-muted-foreground mt-0.5">Use Toggle for on/off state. Badge displays static status.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Separator Docs
   ================================================================ */

const separatorSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function SeparatorDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={separatorSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Separator</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Visually separates content with a horizontal or vertical line.</p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Orientation", prop: "orientation", defaultValue: "horizontal", options: [
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ]},
        ]}
        render={(p) => (
          p.orientation === "horizontal" ? (
            <div className="space-y-4 w-60">
              <p className="text-sm">Content above</p>
              <Separator />
              <p className="text-sm">Content below</p>
            </div>
          ) : (
            <div className="flex items-center gap-4 h-8">
              <span className="text-sm">Left</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Right</span>
            </div>
          )
        )}
      />

      
      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-separator`}
        importCode={`import { Separator } from "@/components/ui/separator"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="Horizontal" description="Default orientation — spans the full width of its container." code={`<Separator />`}>
            <div className="space-y-4 w-60">
              <p className="text-sm">Content above</p>
              <Separator />
              <p className="text-sm">Content below</p>
            </div>
          </Example>
          <Example title="Vertical" description="Use in toolbars or inline layouts to divide items side by side." code={`<Separator orientation="vertical" />`}>
            <div className="flex items-center gap-4 h-8">
              <span className="text-sm">Left</span>
              <Separator orientation="vertical" />
              <span className="text-sm">Right</span>
            </div>
          </Example>
        </div>
      </section>

      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">orientation</td><td className="px-4 py-3 font-mono text-muted-foreground">"horizontal" | "vertical"</td><td className="px-4 py-3 font-mono text-muted-foreground">"horizontal"</td><td className="px-4 py-3 text-muted-foreground">Direction of the divider.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">decorative</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">true</td><td className="px-4 py-3 text-muted-foreground">If true, hides from screen readers.</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Separator color</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Separator to visually divide related content sections.</p>
              <p>Use vertical orientation in toolbars and inline lists.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Separator purely for spacing — use CSS margin or padding instead.</p>
              <p>Don't overuse separators — too many visual dividers add clutter.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Separator — renders as <code className="bg-muted px-1 rounded font-mono">role="separator"</code> or <code className="bg-muted px-1 rounded font-mono">role="none"</code> when decorative.</li>
              <li>Set <code className="bg-muted px-1 rounded font-mono">decorative={false}</code> when the separator has semantic meaning for screen readers.</li>
            </ul>
          </div>
        </div>
      </section>

                  {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Orientation", "Horizontal", "orientation", '"horizontal" — h-px w-full'],
        ["Orientation", "Vertical", "orientation", '"vertical" — h-full w-px'],
        ["Color", "Border", "—", "bg-border"],
        ["Decorative", "true", "decorative", "true (hidden from screen readers)"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Card</p>
              <p className="text-muted-foreground mt-0.5">Content container — separators are often used within cards.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Skeleton Docs
   ================================================================ */

const skeletonSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function SkeletonDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={skeletonSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Skeleton</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Loading placeholder with a pulse animation. Use to indicate content is being loaded.</p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Shape", prop: "shape", defaultValue: "card", options: [
            { label: "Card", value: "card" },
            { label: "Text Block", value: "text" },
            { label: "Circle", value: "circle" },
          ]},
        ]}
        render={(p) =>
          p.shape === "card" ? (
            <div className="flex items-center gap-4">
              <Skeleton className="size-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[160px]" />
              </div>
            </div>
          ) : p.shape === "text" ? (
            <div className="space-y-2 w-60">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          ) : (
            <Skeleton className="size-16 rounded-full" />
          )
        }
      />

      
      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add clsx tailwind-merge`}
        importCode={`import { Skeleton } from "@/components/ui/skeleton"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="Card skeleton" description="Avatar with two text lines — typical user card placeholder." code={`<div className="flex items-center gap-4">\n  <Skeleton className="size-12 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-[200px]" />\n    <Skeleton className="h-4 w-[160px]" />\n  </div>\n</div>`}>
            <div className="flex items-center gap-4">
              <Skeleton className="size-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[160px]" />
              </div>
            </div>
          </Example>
          <Example title="Text block" description="Paragraph placeholder — staggered widths mimic natural text." code={`<div className="space-y-2">\n  <Skeleton className="h-4 w-full" />\n  <Skeleton className="h-4 w-4/5" />\n  <Skeleton className="h-4 w-3/5" />\n</div>`}>
            <div className="space-y-2 w-60">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          </Example>
        </div>
      </section>

      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes for sizing and shape (e.g., h-4 w-full, rounded-full).</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Skeleton background color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">animate-pulse</td><td className="px-4 py-3 font-mono text-muted-foreground">CSS keyframe</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Pulse animation</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">rounded-lg</td><td className="px-4 py-3 font-mono text-muted-foreground">8px</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Default border radius</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Loading UX</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Match skeleton shapes to the content they represent — text lines, circles for avatars, rectangles for images.</p>
              <p>Show skeletons immediately rather than a spinner for content-heavy pages.</p>
            </DoItem>
            <DontItem>
              <p>Don't show skeletons for more than 3-5 seconds — fall back to an error or timeout state.</p>
              <p>Don't use generic rectangles — match the actual layout for better perceived performance.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Skeleton is purely visual — hidden from assistive technology.</li>
              <li>Use <code className="bg-muted px-1 rounded font-mono">aria-busy="true"</code> on the parent container while loading.</li>
              <li>Add <code className="bg-muted px-1 rounded font-mono">aria-live="polite"</code> on the region to announce when content loads.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Animation", "Pulse", "—", "animate-pulse"],
        ["Shape", "Rounded", "—", "rounded-lg"],
        ["Color", "Muted", "—", "bg-muted"],
        ["Sizing", "Custom via className", "className", "h-4 w-[200px]"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Spinner</p>
              <p className="text-muted-foreground mt-0.5">Small inline loading indicator for buttons and actions.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Progress</p>
              <p className="text-muted-foreground mt-0.5">Determinate progress bar when percentage is known.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Table Docs
   ================================================================ */

const tableSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function TableDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={tableSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Table</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Data table with composable sub-components for header, body, footer, rows, and cells.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Table className="w-[400px]">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Item 1</TableCell><TableCell>Active</TableCell></TableRow>
            <TableRow><TableCell>Item 2</TableCell><TableCell>Pending</TableCell></TableRow>
          </TableBody>
        </Table>
      )} />

      
      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add clsx tailwind-merge`}
        importCode={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "@/components/ui/table"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="A data table displaying recent invoices with status badges and payment methods." code={`<Table>\n  <TableCaption>A list of recent invoices.</TableCaption>\n  <TableHeader>\n    <TableRow>\n      <TableHead className="w-[100px]">Invoice</TableHead>\n      <TableHead>Status</TableHead>\n      <TableHead>Method</TableHead>\n      <TableHead className="text-right">Amount</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell className="font-medium">INV001</TableCell>\n      <TableCell>Paid</TableCell>\n      <TableCell>Credit Card</TableCell>\n      <TableCell className="text-right">$250.00</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`}>
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
        </div>
      </section>

      <section className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Sub-components</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="border-b border-border bg-muted"><th className="text-left p-3 font-semibold">Component</th><th className="text-left p-3 font-semibold">HTML</th><th className="text-left p-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">Table</td><td className="px-4 py-3 font-mono text-muted-foreground">table</td><td className="px-4 py-3 text-muted-foreground">Root container with overflow scroll wrapper.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">TableHeader</td><td className="px-4 py-3 font-mono text-muted-foreground">thead</td><td className="px-4 py-3 text-muted-foreground">Header section.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">TableBody</td><td className="px-4 py-3 font-mono text-muted-foreground">tbody</td><td className="px-4 py-3 text-muted-foreground">Body section.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">TableFooter</td><td className="px-4 py-3 font-mono text-muted-foreground">tfoot</td><td className="px-4 py-3 text-muted-foreground">Footer section.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">TableRow</td><td className="px-4 py-3 font-mono text-muted-foreground">tr</td><td className="px-4 py-3 text-muted-foreground">Row with hover and selected states.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">TableHead</td><td className="px-4 py-3 font-mono text-muted-foreground">th</td><td className="px-4 py-3 text-muted-foreground">Header cell.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">TableCell</td><td className="px-4 py-3 font-mono text-muted-foreground">td</td><td className="px-4 py-3 text-muted-foreground">Data cell.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">TableCaption</td><td className="px-4 py-3 font-mono text-muted-foreground">caption</td><td className="px-4 py-3 text-muted-foreground">Table description text.</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Table background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Row borders</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Header & hover row background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Cell text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Caption text color</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Data Display</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use <code className="bg-muted px-1 rounded font-mono text-xs">TableCaption</code> to describe the table for screen readers.</p>
              <p>Use consistent column alignment — numbers right-aligned, text left-aligned.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Tables for layout — use CSS Grid or Flexbox instead.</p>
              <p>Don't display more than 10-15 columns — users can't scan wide tables.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus between interactive cells (links, buttons)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Keys</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Navigate between rows and columns (when grid role is used)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Renders native HTML table elements — inherits built-in semantics.</li>
              <li>Always include <code className="bg-muted px-1 rounded font-mono">TableCaption</code> for screen reader context.</li>
              <li>Use <code className="bg-muted px-1 rounded font-mono">scope="col"</code> on header cells (default via TableHead).</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Sub-component", "Table", "Table", "table root with overflow wrapper"],
        ["Sub-component", "Header", "TableHeader", "thead element"],
        ["Sub-component", "Body", "TableBody", "tbody element"],
        ["Sub-component", "Footer", "TableFooter", "tfoot element, bg-muted/50"],
        ["Sub-component", "Row", "TableRow", "tr with hover:bg-muted/50"],
        ["Sub-component", "Head cell", "TableHead", "th, h-3xl (40px), font-medium"],
        ["Sub-component", "Cell", "TableCell", "td, p-md padding"],
        ["Row State", "Hover", "—", "hover:bg-muted/50"],
        ["Row State", "Selected", "—", "data-[state=selected]:bg-muted"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Card</p>
              <p className="text-muted-foreground mt-0.5">Container for table with padding and border.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Pagination</p>
              <p className="text-muted-foreground mt-0.5">Page navigation for large datasets.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Dialog Docs
   ================================================================ */

const dialogSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function DialogDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={dialogSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Dialog</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Modal dialog with overlay. Interrupts the user with important content and expects a response.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Dialog>
          <DialogTrigger asChild><Button variant="outline">Open Dialog</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>This is a dialog description.</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )} />



      

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-dialog`}
        importCode={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="A dialog with form inputs for editing user profile information." code={`<Dialog>\n  <DialogTrigger asChild>\n    <Button variant="outline">Edit Profile</Button>\n  </DialogTrigger>\n  <DialogContent className="sm:max-w-[425px]">\n    <DialogHeader>\n      <DialogTitle>Edit profile</DialogTitle>\n      <DialogDescription>Make changes to your profile here.</DialogDescription>\n    </DialogHeader>\n    <div className="grid gap-4 py-4">\n      <div className="grid grid-cols-4 items-center gap-4">\n        <Label htmlFor="name" className="text-right">Name</Label>\n        <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />\n      </div>\n    </div>\n    <DialogFooter>\n      <Button type="submit">Save changes</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`}>
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

        <Example
          title="Confirmation dialog"
          description="Common pattern for confirming user actions before proceeding."
          code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Delete Item</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm deletion</DialogTitle>
      <DialogDescription>Are you sure you want to delete this item? This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Delete Item</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm deletion</DialogTitle>
                <DialogDescription>Are you sure you want to delete this item? This action cannot be undone.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Example>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Dialog content background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Dialog text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Dialog border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-lg</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation shadow</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Dialog elevation</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--radius-xl</td><td className="px-4 py-3 font-mono text-muted-foreground">12px</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Dialog border radius</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Dialog for forms and complex interactions that require user focus.</p>
              <p>Always include a clear title and description for screen readers.</p>
              <p>Place the primary action button on the right side of the footer.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Dialog for simple confirmations — use <strong>Alert Dialog</strong> instead.</p>
              <p>Don't open a Dialog from within another Dialog — use a Sheet or navigate instead.</p>
              <p>Don't make Dialogs too large — keep content focused and actionable.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Escape</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Close the dialog</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus between interactive elements (trapped inside dialog)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Dialog — traps focus inside when open.</li>
              <li>Escape key closes the dialog.</li>
              <li>Always include <code className="bg-muted px-1 rounded font-mono">DialogTitle</code> and <code className="bg-muted px-1 rounded font-mono">DialogDescription</code> for screen readers.</li>
              <li>Focus returns to trigger element when closed.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Overlay", "Black 80%", "—", "bg-black/80, fixed inset-0"],
        ["Content Width", "max-w-lg", "—", "sm:max-w-lg"],
        ["Animation", "Open", "—", "zoom-in-95, fade-in-0"],
        ["Animation", "Close", "—", "zoom-out-95, fade-out-0"],
        ["Sub-component", "Header", "DialogHeader", "flex flex-col gap-2xs"],
        ["Sub-component", "Footer", "DialogFooter", "flex flex-col-reverse sm:flex-row"],
        ["Sub-component", "Title", "DialogTitle", "text-lg font-semibold"],
        ["Sub-component", "Description", "DialogDescription", "text-sm text-muted-foreground"],
        ["Close Button", "X icon", "DialogClose", "top-right corner, size-md icon"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">AlertDialog</p>
              <p className="text-muted-foreground mt-0.5">Requires explicit confirmation — cannot be dismissed by clicking overlay.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Sheet</p>
              <p className="text-muted-foreground mt-0.5">Slide-in panel for larger content areas.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Drawer</p>
              <p className="text-muted-foreground mt-0.5">Bottom sheet for mobile-friendly interactions.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Alert Dialog Docs
   ================================================================ */

function AlertDialogPropsTable() {
  const renderTable = (title: string, props: { name: string; type: string; default: string; description: string }[]) => (
    <div className="space-y-2">
      <h3 className="font-body font-semibold text-sm">{title}</h3>
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
                <td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">{p.name}</td>
                <td className="px-4 py-3 font-mono text-muted-foreground max-w-xs">{p.type}</td>
                <td className="px-4 py-3 font-mono">{p.default}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      {renderTable("AlertDialog (Root)", [
        { name: "open", type: "boolean", default: "—", description: "Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", default: "—", description: "Callback when open state changes." },
        { name: "defaultOpen", type: "boolean", default: "false", description: "Initial open state (uncontrolled)." },
      ])}
      {renderTable("AlertDialogTrigger", [
        { name: "asChild", type: "boolean", default: "false", description: "Merge props onto child element instead of rendering a default button." },
        { name: "children", type: "React.ReactNode", default: "—", description: "Trigger element. When asChild is true, must be a single React element." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
      ])}
      {renderTable("AlertDialogPortal", [
        { name: "container", type: "HTMLElement", default: "document.body", description: "The container element to portal the overlay and content into." },
        { name: "forceMount", type: "boolean", default: "—", description: "Force mounting when controlled via animation libraries." },
      ])}
      {renderTable("AlertDialogOverlay", [
        { name: "className", type: "string", default: "—", description: "Additional CSS classes for the overlay backdrop." },
        { name: "forceMount", type: "boolean", default: "—", description: "Force mounting when controlled via animation libraries." },
      ])}
      {renderTable("AlertDialogContent", [
        { name: "className", type: "string", default: "—", description: "Additional CSS classes for the content panel." },
        { name: "forceMount", type: "boolean", default: "—", description: "Force mounting when controlled via animation libraries." },
        { name: "onOpenAutoFocus", type: "(e: Event) => void", default: "—", description: "Called when auto-focus happens on open. Call e.preventDefault() to prevent." },
        { name: "onCloseAutoFocus", type: "(e: Event) => void", default: "—", description: "Called when auto-focus returns on close. Call e.preventDefault() to prevent." },
        { name: "onEscapeKeyDown", type: "(e: KeyboardEvent) => void", default: "—", description: "Called when the Escape key is pressed. Call e.preventDefault() to prevent closing." },
      ])}
      {renderTable("AlertDialogHeader", [
        { name: "children", type: "React.ReactNode", default: "—", description: "Title and description elements." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes. Renders as a div (not a Radix primitive)." },
      ])}
      {renderTable("AlertDialogFooter", [
        { name: "children", type: "React.ReactNode", default: "—", description: "Action and cancel buttons." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes. Renders as a div. Stacks vertically on mobile, row on sm+." },
      ])}
      {renderTable("AlertDialogTitle", [
        { name: "children", type: "React.ReactNode", default: "—", description: "Title text content." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes. Default: typo-heading-4 text-foreground." },
      ])}
      {renderTable("AlertDialogDescription", [
        { name: "children", type: "React.ReactNode", default: "—", description: "Description text content." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes. Default: typo-paragraph-sm text-muted-foreground." },
      ])}
      {renderTable("AlertDialogAction", [
        { name: "variant", type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: "Button visual variant. Forwarded to the wrapping Button component." },
        { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Button size. Forwarded to the wrapping Button component." },
        { name: "children", type: "React.ReactNode", default: "—", description: "Button label text." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
        { name: "onClick", type: "(e: MouseEvent) => void", default: "—", description: "Click handler. Dialog closes automatically after the handler runs." },
      ])}
      {renderTable("AlertDialogCancel", [
        { name: "variant", type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"outline"', description: "Button visual variant. Forwarded to the wrapping Button component." },
        { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Button size. Forwarded to the wrapping Button component." },
        { name: "children", type: "React.ReactNode", default: "—", description: "Button label text." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
        { name: "onClick", type: "(e: MouseEvent) => void", default: "—", description: "Click handler. Dialog closes automatically after the handler runs." },
      ])}
    </div>
  )
}

function AlertDialogTokensTable() {
  const tokens = [
    { token: "--card", value: "#ffffff / #252522", hex: "#ffffff", usage: "Content background" },
    { token: "--border", value: "#e9e9e7 / #4f4f4a", hex: "#e9e9e7", usage: "Content border" },
    { token: "--foreground", value: "#252522 / #f7f7f6", hex: "#252522", usage: "Title text, icon color" },
    { token: "--muted-foreground", value: "#6f6f6a / #c6c6c2", hex: "#6f6f6a", usage: "Description text" },
    { token: "--spacing-xl", value: "24px", hex: "—", usage: "Content padding (all sides)" },
    { token: "--spacing-lg", value: "20px", hex: "—", usage: "Inner content gap (between sections)" },
    { token: "--spacing-xs", value: "8px", hex: "—", usage: "Header gap, footer button gap" },
    { token: "--radius-lg", value: "8px", hex: "—", usage: "Content border-radius (sm+)" },
  ]

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-muted border-b border-border text-left">
            <th className="px-4 py-3 font-semibold">Token</th>
            <th className="px-4 py-3 font-semibold">Value (Light / Dark)</th>
            <th className="px-4 py-3 font-semibold">Swatch</th>
            <th className="px-4 py-3 font-semibold">Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.token} className="border-b border-border last:border-0">
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">{t.token}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">{t.value}</td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div className="size-5 rounded border border-border" style={{ backgroundColor: t.hex }} />
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

/**
 * Explore Behavior — static variant preview matching Figma component 100%.
 *
 * Figma "Alert Dialog" component set properties (139:11941):
 *   Type:                    Desktop | Mobile         → Skip (responsive, web handles via sm: breakpoints)
 *   Responsive to:           Popup | Full Screen      → Skip (responsive variant)
 *   Show Icon:               True | False             → Switch ✅
 *   Show Title:              True | False             → Switch ✅
 *   Show Action:             True | False             → Switch ✅
 *   Show Action Secondary:   True | False             → Switch ✅
 *   Icon:                    instance swap            → Not exposed (default circle-alert)
 *   Slot:                    instance swap            → Not exposed (description content)
 */
function AlertDialogExploreBehavior() {
  const [type, setType] = useState<"Desktop" | "Mobile">("Desktop")
  const [responsiveTo] = useState("Popup")
  const [showIcon, setShowIcon] = useState(true)
  const [iconName, setIconName] = useState("CircleAlert")
  const [showTitle, setShowTitle] = useState(true)
  const [showAction, setShowAction] = useState(true)
  const [showActionSecondary, setShowActionSecondary] = useState(true)
  const [slotVariant, setSlotVariant] = useState<"text" | "congratulation">("text")
  const slotContent: Record<string, string> = {
    "text": "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    "congratulation": "Congratulations! Your account has been successfully created. Welcome aboard!",
  }
  const isSlotIllustration = slotVariant === "congratulation"
  /* Figma constraint: Secondary Action only available when Show Action is on */
  const handleShowActionChange = (v: boolean) => { setShowAction(v); if (!v) setShowActionSecondary(false) }
  /* Figma constraint: Congratulation slot auto-disables Icon, Title, Action (slot has its own button) */
  const handleSlotChange = (v: string) => {
    setSlotVariant(v as typeof slotVariant)
    if (v === "congratulation") {
      setShowIcon(false)
      setShowTitle(false)
      setShowAction(false)
      setShowActionSecondary(false)
    } else {
      setShowIcon(true)
      setShowTitle(true)
      setShowAction(true)
      setShowActionSecondary(true)
    }
  }
  const SelectedIcon = allLucideIcons.find((i) => i.name === iconName)?.icon ?? allLucideIcons.find((i) => i.name === "CircleAlert")!.icon
  const isMobile = type === "Mobile"

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="bg-primary/5 p-4xl flex items-center justify-center min-h-[200px]">
        <div className={["w-full bg-card border border-border rounded-xl p-xl shadow", isMobile ? "max-w-sm" : "max-w-lg"].join(" ")}>
          <div className="flex flex-col gap-lg">
            {/* Title area (Icon + Title text) */}
            {(showIcon || showTitle) && (
              <div className="flex flex-col gap-sm">
                {showIcon && (
                  <div className="size-[36px] rounded-full border border-border flex items-center justify-center">
                    <SelectedIcon className="size-md text-foreground" />
                  </div>
                )}
                {showTitle && (
                  <h3 className="typo-heading-4 text-foreground font-body">Are you absolutely sure?</h3>
                )}
              </div>
            )}
            {/* Slot / Description */}
            {isSlotIllustration && (
              <div className="flex justify-center">
                <img src={illustSuccess} alt="Congratulations" className="w-48" />
              </div>
            )}
            <p className={["typo-paragraph-sm", isSlotIllustration ? "text-muted-foreground text-center" : "text-foreground"].join(" ")}>{slotContent[slotVariant]}</p>
            {/* Button group */}
            {showAction && (
              <div className={["flex gap-xs", isMobile ? "flex-col" : "justify-end"].join(" ")}>
                {showActionSecondary && (
                  <Button variant="outline" size="default" className={isMobile ? "w-full" : ""}>Cancel</Button>
                )}
                <Button variant="default" size="default" className={isMobile ? "w-full" : ""}>Continue</Button>
              </div>
            )}
            {/* Congratulation slot has its own built-in button (not controlled by Show Action) */}
            {isSlotIllustration && !showAction && (
              <div className={["flex gap-xs", isMobile ? "flex-col" : "justify-end"].join(" ")}>
                <Button variant="default" size="default" className={isMobile ? "w-full" : ""}>Got it</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-muted/50 p-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {/* Row 1: Type, Responsive to, Show Icon, Icon */}
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Type</Label>
            <Select value={type} onValueChange={(v) => setType(v as "Desktop" | "Mobile")}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Desktop">Desktop</SelectItem>
                <SelectItem value="Mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Responsive to</Label>
            <Select value={responsiveTo} disabled>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Popup">Popup</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className={["text-xs text-muted-foreground", isSlotIllustration ? "opacity-50" : ""].join(" ")}>Show Icon</Label>
            <div className="pt-1">
              <Switch checked={showIcon} onCheckedChange={setShowIcon} disabled={isSlotIllustration} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className={["text-xs text-muted-foreground", !showIcon || isSlotIllustration ? "opacity-50" : ""].join(" ")}>Icon</Label>
            <IconPicker value={iconName} onChange={setIconName} disabled={!showIcon || isSlotIllustration} size="sm" />
          </div>
          {/* Row 2: Show Title, Show Action, Show Action Secondary, Slot */}
          <div className="space-y-xs">
            <Label className={["text-xs text-muted-foreground", isSlotIllustration ? "opacity-50" : ""].join(" ")}>Show Title</Label>
            <div className="pt-1">
              <Switch checked={showTitle} onCheckedChange={setShowTitle} disabled={isSlotIllustration} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className={["text-xs text-muted-foreground", isSlotIllustration ? "opacity-50" : ""].join(" ")}>Show Action</Label>
            <div className="pt-1">
              <Switch checked={showAction} onCheckedChange={handleShowActionChange} disabled={isSlotIllustration} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className={["text-xs text-muted-foreground", !showAction || isSlotIllustration ? "opacity-50" : ""].join(" ")}>Show Action Secondary</Label>
            <div className="pt-1">
              <Switch checked={showActionSecondary} onCheckedChange={setShowActionSecondary} disabled={!showAction || isSlotIllustration} />
            </div>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Slot</Label>
            <Select value={slotVariant} onValueChange={handleSlotChange}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="congratulation">Congratulation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

const alertDialogSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function AlertDialogDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={alertDialogSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Alert Dialog</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">A modal dialog that interrupts the user with important content and expects a response. Cannot be dismissed by clicking outside.</p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <AlertDialogExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-alert-dialog clsx tailwind-merge`}
        importCode={`import {\n  AlertDialog,\n  AlertDialogTrigger,\n  AlertDialogContent,\n  AlertDialogHeader,\n  AlertDialogFooter,\n  AlertDialogTitle,\n  AlertDialogDescription,\n  AlertDialogAction,\n  AlertDialogCancel,\n} from "@/components/ui/alert-dialog"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        {/* Static previews — dialog face visible without clicking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="Basic" description="Simple confirmation dialog with default action button." code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}>
            <div className="w-full border border-border rounded-xl bg-card p-xl shadow grid gap-lg pointer-events-none">
              <div className="flex flex-col gap-xs sm:text-left">
                <h3 className="typo-heading-4 text-foreground">Are you sure?</h3>
                <p className="typo-paragraph-sm text-muted-foreground">This action cannot be undone.</p>
              </div>
              <div className="flex flex-col-reverse gap-xs sm:flex-row sm:justify-end">
                <Button variant="outline">Cancel</Button>
                <Button>Continue</Button>
              </div>
            </div>
          </Example>

          <Example title="Destructive Confirmation" description="Use a destructive variant for delete or dangerous operations." code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete your account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete Account</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}>
            <div className="w-full border border-border rounded-xl bg-card p-xl shadow grid gap-lg pointer-events-none">
              <div className="flex flex-col gap-xs sm:text-left">
                <h3 className="typo-heading-4 text-foreground">Are you absolutely sure?</h3>
                <p className="typo-paragraph-sm text-muted-foreground">This will permanently delete your account and remove your data from our servers.</p>
              </div>
              <div className="flex flex-col-reverse gap-xs sm:flex-row sm:justify-end">
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </Example>

          <Example title="Without Description" description="Alert dialog with only a title — no additional description." code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Discard Changes</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep Editing</AlertDialogCancel>
      <AlertDialogAction>Discard</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}>
            <div className="w-full border border-border rounded-xl bg-card p-xl shadow grid gap-lg pointer-events-none">
              <div className="flex flex-col gap-xs sm:text-left">
                <h3 className="typo-heading-4 text-foreground">Discard unsaved changes?</h3>
              </div>
              <div className="flex flex-col-reverse gap-xs sm:flex-row sm:justify-end">
                <Button variant="outline">Keep Editing</Button>
                <Button>Discard</Button>
              </div>
            </div>
          </Example>

          <Example title="Logout Confirmation" description="Common pattern for confirming session-ending actions." code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Log Out</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Log out of your account?</AlertDialogTitle>
      <AlertDialogDescription>
        You will need to sign in again to access your dashboard and settings.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Stay Signed In</AlertDialogCancel>
      <AlertDialogAction>Log Out</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}>
            <div className="w-full border border-border rounded-xl bg-card p-xl shadow grid gap-lg pointer-events-none">
              <div className="flex flex-col gap-xs sm:text-left">
                <h3 className="typo-heading-4 text-foreground">Log out of your account?</h3>
                <p className="typo-paragraph-sm text-muted-foreground">You will need to sign in again to access your dashboard and settings.</p>
              </div>
              <div className="flex flex-col-reverse gap-xs sm:flex-row sm:justify-end">
                <Button variant="outline">Stay Signed In</Button>
                <Button>Log Out</Button>
              </div>
            </div>
          </Example>

          <Example title="Congratulation Slot" description="Illustration slot auto-disables Show Action — slot has its own built-in button. Title hidden, no Cancel." code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Congratulations</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <div className="flex flex-col items-center gap-lg text-center">
      <img src={illustSuccess} alt="Congratulations" className="w-48" />
      <AlertDialogDescription>
        Congratulations! Your account has been successfully created. Welcome aboard!
      </AlertDialogDescription>
    </div>
    <AlertDialogFooter>
      <AlertDialogAction>Got it</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}>
            <div className="w-full border border-border rounded-xl bg-card p-xl shadow grid gap-lg pointer-events-none">
              <div className="flex flex-col items-center gap-lg text-center">
                <img src={illustSuccess} alt="Congratulations" className="w-48" />
                <p className="typo-paragraph-sm text-muted-foreground">Congratulations! Your account has been successfully created. Welcome aboard!</p>
              </div>
              <div className="flex flex-col-reverse gap-xs sm:flex-row sm:justify-end">
                <Button>Got it</Button>
              </div>
            </div>
          </Example>
        </div>

        {/* Interactive demos — click to open real dialogs */}
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="px-md py-xs bg-muted/50 border-b border-border">
            <span className="text-xs font-medium text-muted-foreground">Interactive Demo</span>
          </div>
          <div className="p-lg flex flex-wrap gap-sm">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">Basic</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">Destructive</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">Delete Account</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">Without Description</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep Editing</AlertDialogCancel>
                  <AlertDialogAction>Discard</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">Logout</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Log out of your account?</AlertDialogTitle>
                  <AlertDialogDescription>You will need to sign in again to access your dashboard and settings.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Stay Signed In</AlertDialogCancel>
                  <AlertDialogAction>Log Out</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm">Congratulation Slot</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <div className="flex flex-col items-center gap-lg text-center">
                  <img src={illustSuccess} alt="Congratulations" className="w-48" />
                  <AlertDialogDescription>Congratulations! Your account has been successfully created. Welcome aboard!</AlertDialogDescription>
                </div>
                <AlertDialogFooter>
                  <AlertDialogAction>Got it</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-alert-dialog</code>.
          Supports all Radix AlertDialog props in addition to the following:
        </p>
        <AlertDialogPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <AlertDialogTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use a clear title that states the consequence of the action (e.g., "Delete your account?").</p>
              <p>Make the primary action the <strong>safest option</strong> — Cancel should be prominent.</p>
            </DoItem>
            <DontItem>
              <p>Don't use vague titles like "Are you sure?" without context — be specific about what will happen.</p>
              <p>Don't make the destructive action the visually dominant button.</p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Alert Dialog for <strong>destructive action confirmations</strong>, critical decisions, and blocking user flow.</p>
              <p>Always provide a <strong>cancel/escape</strong> option so the user can back out safely.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Alert Dialog for <strong>informational messages</strong> — use Dialog or Toast instead.</p>
              <p>Don't use for <strong>non-critical confirmations</strong> that don't require user attention.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="139:11941" rows={[
        ["Overlay", "Black 50%", "AlertDialogOverlay", "bg-black/50, fixed inset-0, z-50"],
        ["Content", "bg-card, border-border, p-xl, rounded-xl", "AlertDialogContent", "max-w-lg, shadow (Figma shadow-sm), gap-lg"],
        ["Title", "heading 4 (Geist/600 20px/24px)", "AlertDialogTitle", "typo-heading-4 text-foreground"],
        ["Description", "paragraph small (Geist/400 14px/20px)", "AlertDialogDescription", "typo-paragraph-sm text-muted-foreground"],
        ["Button Group", "flex, gap-xs, justify-end", "AlertDialogFooter", "flex-col-reverse sm:flex-row sm:justify-end gap-xs"],
        ["Action", "Button default variant", "AlertDialogAction", "Wraps Radix in Button via asChild"],
        ["Cancel", "Button outline variant", "AlertDialogCancel", "Wraps Radix in Button via asChild"],
        ["Behavior", "Non-dismissible", "—", "Cannot close by clicking overlay (Radix default)"],
        ["Animation", "Open / Close", "data-state", "zoom-in-95 / zoom-out-95, fade-in / fade-out"],
        ["Variants", "Type: Desktop/Mobile, Show Icon, Show Action", "—", "Figma-only variants for design exploration"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus between action and cancel buttons</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Shift</kbd>{" + "}
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus backwards between buttons</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd>{" / "}
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Space</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Activate the focused button (action or cancel)</td>
                  </tr>
                  <tr>
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Escape</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Close the dialog (same as cancel)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">ARIA attributes</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                The content uses{" "}
                <code className="bg-muted px-1 rounded font-mono">role="alertdialog"</code>{" "}
                to announce urgent content to screen readers.
              </li>
              <li>
                <code className="bg-muted px-1 rounded font-mono">aria-labelledby</code>{" "}
                references AlertDialogTitle for the dialog label.
              </li>
              <li>
                <code className="bg-muted px-1 rounded font-mono">aria-describedby</code>{" "}
                references AlertDialogDescription for additional context.
              </li>
              <li>Focus is trapped inside the dialog and auto-focused on the first interactive element.</li>
              <li>Overlay cannot be clicked to dismiss — users must take an explicit action.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Focus management</h3>
            <p className="text-muted-foreground">
              When opened, focus moves automatically to the first focusable element (typically the Cancel button).
              When closed, focus returns to the trigger element. Focus is <strong>trapped</strong> within the dialog
              — Tab and Shift+Tab cycle only through dialog buttons. This prevents users from accidentally interacting
              with the page behind the overlay.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5">
            <p className="font-semibold text-foreground">Dialog</p>
            <p className="text-muted-foreground mt-0.5">
              For general-purpose modal dialogs that can be dismissed by clicking outside. Use when content is informational, not confirmational.
            </p>
          </div>
          <div className="px-5 py-3.5">
            <p className="font-semibold text-foreground">Sheet</p>
            <p className="text-muted-foreground mt-0.5">
              Slide-out panel from the screen edge. Use for forms, settings, or content that doesn't require confirmation.
            </p>
          </div>
          <div className="px-5 py-3.5">
            <p className="font-semibold text-foreground">Sonner (Toast)</p>
            <p className="text-muted-foreground mt-0.5">
              For transient, non-blocking notifications. Use for success messages and status updates that don't require user action.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Sheet Docs
   ================================================================ */

const sheetSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function SheetDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={sheetSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Sheet</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Slide-out panel from any edge of the screen. Great for navigation, filters, or detail views.</p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Side", prop: "side", defaultValue: "right", options: [
            { label: "Right", value: "right" },
            { label: "Left", value: "left" },
            { label: "Top", value: "top" },
            { label: "Bottom", value: "bottom" },
          ]},
        ]}
        render={(p) => (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open {p.side} sheet</Button>
            </SheetTrigger>
            <SheetContent side={p.side as "right" | "left" | "top" | "bottom"}>
              <SheetHeader>
                <SheetTitle>Sheet ({p.side})</SheetTitle>
                <SheetDescription>This sheet slides in from the {p.side}.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        )}
      />

      
      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-dialog`}
        importCode={`import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Right (Default)" description="The most common side for supplementary content — settings, details, or edit forms." code={`<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="outline">Open Sheet</Button>\n  </SheetTrigger>\n  <SheetContent>\n    <SheetHeader>\n      <SheetTitle>Edit profile</SheetTitle>\n      <SheetDescription>Make changes to your profile.</SheetDescription>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`}>
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
        </Example>

        <Example title="Left Side" description="Ideal for navigation menus or sidebar-style content." code={`<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="outline">Left</Button>\n  </SheetTrigger>\n  <SheetContent side="left">\n    <SheetHeader>\n      <SheetTitle>Navigation</SheetTitle>\n      <SheetDescription>Browse sections of the app.</SheetDescription>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`}>
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
        </Example>

        <Example title="Top Side" description="Useful for notification banners or search panels." code={`<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="outline">Top</Button>\n  </SheetTrigger>\n  <SheetContent side="top">\n    <SheetHeader>\n      <SheetTitle>Notifications</SheetTitle>\n      <SheetDescription>Recent notifications panel.</SheetDescription>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`}>
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
        </Example>

        <Example title="Bottom Side" description="Great for quick actions or mobile-style bottom sheets." code={`<Sheet>\n  <SheetTrigger asChild>\n    <Button variant="outline">Bottom</Button>\n  </SheetTrigger>\n  <SheetContent side="bottom">\n    <SheetHeader>\n      <SheetTitle>Quick Actions</SheetTitle>\n      <SheetDescription>Common actions.</SheetDescription>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`}>
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
        </Example>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Sheet background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Sheet border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--shadow-lg</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation shadow</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Sheet elevation</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Sheet for supplementary content that doesn't warrant a full page — settings, filters, details.</p>
              <p>Always include a clear title via <code className="bg-muted px-1 rounded font-mono text-xs">SheetTitle</code> for screen readers.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Sheet for primary workflows — use a full page or Dialog instead.</p>
              <p>Don't overload Sheet content — keep it focused on a single task.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Escape</kbd> — Close the sheet.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Tab</kbd> — Move focus within sheet (trapped).</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Dialog — traps focus, Escape to close.</li>
              <li>Always include SheetTitle and SheetDescription for screen readers.</li>
              <li>Overlay click closes the sheet by default.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Side", "Right (default)", "side", '"right" — inset-y-0 right-0'],
        ["Side", "Left", "side", '"left" — inset-y-0 left-0'],
        ["Side", "Top", "side", '"top" — inset-x-0 top-0'],
        ["Side", "Bottom", "side", '"bottom" — inset-x-0 bottom-0'],
        ["Width", "3/4 viewport", "—", "w-3/4 sm:max-w-sm (left/right)"],
        ["Overlay", "Black 80%", "—", "bg-black/80"],
        ["Animation", "Slide in/out", "—", "slide-in-from-{side}"],
        ["Close Button", "X icon", "SheetClose", "focus-visible:ring-[3px]"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Dialog</p>
              <p className="text-muted-foreground mt-0.5">Centered modal for focused interactions.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Drawer</p>
              <p className="text-muted-foreground mt-0.5">Bottom sheet alternative for mobile.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Drawer Docs
   ================================================================ */

const drawerSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function DrawerDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={drawerSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Drawer</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Mobile-first bottom drawer with swipe-to-close. Built on vaul.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Drawer>
          <DrawerTrigger asChild><Button variant="outline">Open Drawer</Button></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>This is a drawer panel.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild><Button variant="outline">Close</Button></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )} />

      
      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add vaul`}
        importCode={`import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="A mobile-friendly bottom drawer with header, body content, and footer actions." code={`<Drawer>\n  <DrawerTrigger asChild>\n    <Button variant="outline">Open Drawer</Button>\n  </DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader className="text-left">\n      <DrawerTitle>Move Goal</DrawerTitle>\n      <DrawerDescription>Set your daily activity goal.</DrawerDescription>\n    </DrawerHeader>\n    <div className="p-4">\n      <p>Drawer body content goes here.</p>\n    </div>\n    <DrawerFooter>\n      <Button>Submit</Button>\n      <DrawerClose asChild>\n        <Button variant="outline">Cancel</Button>\n      </DrawerClose>\n    </DrawerFooter>\n  </DrawerContent>\n</Drawer>`}>
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
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Drawer background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Drawer border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Handle indicator color</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Drawer for mobile-friendly bottom sheets and quick actions.</p>
              <p>Include a drag handle for intuitive swipe-to-dismiss.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Drawer on desktop when a Dialog or Sheet would be more natural.</p>
              <p>Don't place critical content deep inside a Drawer — users may dismiss it accidentally.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Escape</kbd> — Close the drawer.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Tab</kbd> — Move focus within drawer.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Vaul — swipe-to-dismiss for touch devices.</li>
              <li>Focus is trapped inside when open.</li>
              <li>Always provide DrawerTitle for screen readers.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Position", "Bottom", "—", "fixed inset-x-0 bottom-0"],
        ["Handle Bar", "100×4px", "—", "w-[100px] h-2xs rounded-full bg-muted"],
        ["Top Radius", "10px", "—", "rounded-t-[10px]"],
        ["Overlay", "Black 80%", "—", "bg-black/80"],
        ["Gesture", "Swipe to close", "—", "vaul library built-in"],
        ["Scale Background", "true", "shouldScaleBackground", "true (default)"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Sheet</p>
              <p className="text-muted-foreground mt-0.5">Side panel for desktop layouts.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Dialog</p>
              <p className="text-muted-foreground mt-0.5">Centered modal alternative.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Popover Docs
   ================================================================ */

const popoverSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function PopoverDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={popoverSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Popover</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Floating content panel anchored to a trigger. For rich interactive content.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Popover>
          <PopoverTrigger asChild><Button variant="outline">Open Popover</Button></PopoverTrigger>
          <PopoverContent className="w-60"><p className="text-sm">Popover content goes here.</p></PopoverContent>
        </Popover>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-popover`}
        importCode={`import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Basic popover with form content anchored to a trigger button." code={`<Popover>\n  <PopoverTrigger asChild>\n    <Button variant="outline">Open Popover</Button>\n  </PopoverTrigger>\n  <PopoverContent className="w-80">\n    <div className="grid gap-4">\n      <div className="space-y-2">\n        <h4 className="font-medium leading-none">Dimensions</h4>\n        <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>\n      </div>\n      <div className="grid gap-2">\n        <div className="grid grid-cols-3 items-center gap-4">\n          <Label htmlFor="width">Width</Label>\n          <Input id="width" defaultValue="100%" className="col-span-2 h-8" />\n        </div>\n      </div>\n    </div>\n  </PopoverContent>\n</Popover>`}>
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
        </div>
      </section>


      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-popover</code>.
          All Radix Popover props are forwarded.
        </p>
        <div>
          <h3 className="font-body font-semibold text-sm mb-2">PopoverContent</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-3 font-mono text-primary">align</td><td className="px-4 py-3 font-mono text-muted-foreground">"start" | "center" | "end"</td><td className="px-4 py-3 font-mono text-muted-foreground">"center"</td><td className="px-4 py-3 text-muted-foreground">Alignment relative to trigger.</td></tr>
                <tr><td className="px-4 py-3 font-mono text-primary">sideOffset</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">4</td><td className="px-4 py-3 text-muted-foreground">Distance from trigger in pixels.</td></tr>
                <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes (e.g., w-80).</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Popover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Popover border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-md</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation shadow</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Popover shadow</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--radius-lg</td><td className="px-4 py-3 font-mono text-muted-foreground">8px</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Popover border radius</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Popover for interactive content like forms, filters, or selection panels.</p>
              <p>Keep popover content focused — one task or concept per popover.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Popover for static information — use <strong>Tooltip</strong> instead.</p>
              <p>Don't nest popovers — it creates confusing navigation patterns.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><code className="bg-muted px-1 rounded font-mono">Escape</code> — Close the popover.</li>
              <li><code className="bg-muted px-1 rounded font-mono">Tab</code> — Navigate inside popover.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Popover — focus is managed automatically.</li>
              <li>Escape closes the popover; focus returns to trigger.</li>
              <li>Content is portaled to avoid clipping issues.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Content Width", "288px", "—", "w-72"],
        ["Alignment", "Center (default)", "align", '"center"'],
        ["Side Offset", "4px", "sideOffset", "4"],
        ["Animation", "Open", "—", "zoom-in-95, fade-in-0"],
        ["Animation", "Close", "—", "zoom-out-95, fade-out-0"],
        ["Border", "Border", "—", "border border-border"],
        ["Shadow", "Medium", "—", "shadow-md"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Tooltip</p>
              <p className="text-muted-foreground mt-0.5">Non-interactive hover content — use for brief descriptions.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">DropdownMenu</p>
              <p className="text-muted-foreground mt-0.5">Menu of actions — use when popover contains a list of commands.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">HoverCard</p>
              <p className="text-muted-foreground mt-0.5">Hover-triggered preview card.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Tooltip Docs
   ================================================================ */

const tooltipSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function TooltipDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={tooltipSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Tooltip</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Informational popup shown on hover or focus. For brief, non-interactive hints.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
            <TooltipContent><p>Tooltip content</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-tooltip`}
        importCode={`import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Tooltip with various trigger positions and icon-only buttons." code={`<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger asChild>\n      <Button variant="outline">Hover me</Button>\n    </TooltipTrigger>\n    <TooltipContent>\n      <p>Add to library</p>\n    </TooltipContent>\n  </Tooltip>\n</TooltipProvider>`}>
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
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-tooltip</code>.
          All Radix Tooltip props are forwarded.
        </p>
        <div>
          <h3 className="font-body font-semibold text-sm mb-2">TooltipContent</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-3 font-mono text-primary">side</td><td className="px-4 py-3 font-mono text-muted-foreground">"top" | "right" | "bottom" | "left"</td><td className="px-4 py-3 font-mono text-muted-foreground">"top"</td><td className="px-4 py-3 text-muted-foreground">Preferred side of trigger.</td></tr>
                <tr><td className="px-4 py-3 font-mono text-primary">sideOffset</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">4</td><td className="px-4 py-3 text-muted-foreground">Distance from trigger in pixels.</td></tr>
                <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="font-body font-semibold text-sm mb-2">TooltipProvider</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-3 font-mono text-primary">delayDuration</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">700</td><td className="px-4 py-3 text-muted-foreground">Milliseconds before tooltip opens on hover.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--primary</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Tooltip background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--primary-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Tooltip text</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--radius-md</td><td className="px-4 py-3 font-mono text-muted-foreground">6px</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Tooltip border radius</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Tooltip for brief, supplementary information that clarifies an element's purpose.</p>
              <p>Keep tooltip text concise — one sentence or a few words.</p>
            </DoItem>
            <DontItem>
              <p>Don't put essential information only in Tooltips — some users can't hover (touch devices).</p>
              <p>Don't use Tooltip for interactive content — use <strong>Popover</strong> instead.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><code className="bg-muted px-1 rounded font-mono">Focus</code> — Show tooltip on keyboard focus.</li>
              <li><code className="bg-muted px-1 rounded font-mono">Escape</code> — Dismiss tooltip.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Tooltip is hover/focus triggered — not for essential information.</li>
              <li>Built on Radix Tooltip — manages <code className="bg-muted px-1 rounded font-mono">aria-describedby</code> automatically.</li>
              <li>Content is announced to screen readers when trigger receives focus.</li>
              <li>Wrap your app in <code className="bg-muted px-1 rounded font-mono">TooltipProvider</code> for shared delay configuration.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Background", "Primary", "—", "bg-primary text-primary-foreground"],
        ["Padding", "px-sm py-2xs", "—", "px-sm py-2xs"],
        ["Font", "Geist 12px", "—", "text-xs"],
        ["Radius", "6px", "—", "rounded-md"],
        ["Side Offset", "4px", "sideOffset", "4"],
        ["Animation", "Fade + zoom", "—", "fade-in-0, zoom-in-95"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Popover</p>
              <p className="text-muted-foreground mt-0.5">Interactive floating content — use when content includes form controls.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">HoverCard</p>
              <p className="text-muted-foreground mt-0.5">Rich preview card on hover.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Toast (Sonner) Docs
   ================================================================ */

const toastSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ToastDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={toastSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Toast (Sonner)</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Non-intrusive notification toasts. Uses the sonner library.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Button variant="outline" onClick={() => { import('sonner').then(m => m.toast("This is a toast notification")) }}>
          Show Toast
        </Button>
      )} />

      

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add sonner`}
        importCode={`import { Toaster } from "@/components/ui/sonner"\nimport { toast } from "sonner"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Variants" description="5 built-in variants for different feedback types: default, success, error, warning, and info." code={`toast("Default notification")\ntoast.success("Success!")\ntoast.error("Something went wrong")\ntoast.warning("Careful!")\ntoast.info("FYI...")`}>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => toast("Event has been created")}>Default</Button>
            <Button variant="outline" onClick={() => toast.success("Profile updated successfully")}>Success</Button>
            <Button variant="outline" onClick={() => toast.error("Something went wrong")}>Error</Button>
            <Button variant="outline" onClick={() => toast.warning("Please review your changes")}>Warning</Button>
            <Button variant="outline" onClick={() => toast.info("New version available")}>Info</Button>
          </div>
        </Example>

        <Example title="With Description" description="Add a secondary description line for extra context." code={`toast("Event Created", {\n  description: "Friday, February 10, 2024 at 5:57 PM",\n})`}>
          <Button variant="outline" onClick={() => toast("Event Created", { description: "Friday, February 10, 2024 at 5:57 PM" })}>
            With Description
          </Button>
        </Example>

        <Example title="With Action" description="Attach an action button for undo or follow-up operations." code={`toast("File deleted", {\n  action: { label: "Undo", onClick: () => console.log("Undo") },\n})`}>
          <Button variant="outline" onClick={() => toast("File deleted", { action: { label: "Undo", onClick: () => console.log("Undo") } })}>
            With Action
          </Button>
        </Example>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Toast background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Toast text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Toast border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-lg</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation shadow</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Toast shadow</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Notifications</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use toast for non-critical, temporary feedback: "Item saved", "Email sent".</p>
              <p>Keep messages concise — users should understand at a glance.</p>
            </DoItem>
            <DontItem>
              <p>Don't use toast for error messages that require user action — use <strong>Alert</strong> instead.</p>
              <p>Don't show too many toasts simultaneously — queue them.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><code className="bg-muted px-1 rounded font-mono">Escape</code> — dismisses the currently visible toast.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Uses <code className="bg-muted px-1 rounded font-mono">role="status"</code> — screen readers announce toast content.</li>
              <li>Action buttons in toasts are keyboard-focusable.</li>
              <li>Toasts auto-dismiss after a timeout — ensure content is not critical.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Style", "Background", "—", "bg-background text-foreground"],
        ["Style", "Border", "—", "border-border"],
        ["Style", "Shadow", "—", "shadow-lg"],
        ["Variant", "Default", "toast()", "Neutral toast"],
        ["Variant", "Success", "toast.success()", "Success with icon"],
        ["Variant", "Error", "toast.error()", "Error with icon"],
        ["Variant", "Warning", "toast.warning()", "Warning with icon"],
        ["Action Button", "Primary", "action", "bg-primary text-primary-foreground"],
        ["Cancel Button", "Muted", "cancel", "bg-muted text-muted-foreground"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Alert</p>
              <p className="text-muted-foreground mt-0.5">Persistent inline message — use when dismissal is not appropriate.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Dialog</p>
              <p className="text-muted-foreground mt-0.5">Blocking modal — use when user confirmation is required.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Tabs Docs
   ================================================================ */

const tabsSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function TabsDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={tabsSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Tabs</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Tabbed interface for switching between different views or content panels.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Tabs defaultValue="tab1" className="w-[300px]">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1"><p className="text-sm p-sm">Content for tab 1.</p></TabsContent>
          <TabsContent value="tab2"><p className="text-sm p-sm">Content for tab 2.</p></TabsContent>
        </Tabs>
      )} />



      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-tabs`}
        importCode={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Use defaultValue to set the initially active tab. Each tab panel renders independently." code={`<Tabs defaultValue="account" className="w-[400px]">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n    <TabsTrigger value="password">Password</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">\n    <Card>\n      <CardHeader>\n        <CardTitle>Account</CardTitle>\n        <CardDescription>Make changes to your account.</CardDescription>\n      </CardHeader>\n      <CardContent className="space-y-2">\n        <div className="space-y-1">\n          <Label htmlFor="tab-name">Name</Label>\n          <Input id="tab-name" defaultValue="Pedro Duarte" />\n        </div>\n      </CardContent>\n    </Card>\n  </TabsContent>\n</Tabs>`}>
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
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">TabsList background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--background</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Active tab background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Active tab text</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Inactive tab text</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Focus ring (3px)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Organization</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Tabs to organize related content into separate panels.</p>
              <p>Keep tab labels short — 1-2 words for scannability.</p>
              <p>Use <code className="bg-muted px-1 rounded font-mono text-xs">defaultValue</code> to set the initially active tab.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Tabs for sequential steps — use a Stepper pattern instead.</p>
              <p>Don't use too many tabs ({">"}5) — consider a dropdown or different layout.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><code className="bg-muted px-1 rounded font-mono">Tab</code> — moves focus to the active tab trigger in the tab list.</li>
              <li><code className="bg-muted px-1 rounded font-mono">Arrow Left</code> / <code className="bg-muted px-1 rounded font-mono">Arrow Right</code> — switches between tabs.</li>
              <li><code className="bg-muted px-1 rounded font-mono">Enter</code> / <code className="bg-muted px-1 rounded font-mono">Space</code> — activates the focused tab.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Tabs — full keyboard support with Arrow keys for tab navigation.</li>
              <li>Tab panels are associated via <code className="bg-muted px-1 rounded font-mono">aria-controls</code> and <code className="bg-muted px-1 rounded font-mono">aria-labelledby</code>.</li>
              <li>Only the active panel is in the tab order.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["List Height", "36px", "—", "h-9"],
        ["List Background", "Muted", "—", "bg-muted, rounded-lg"],
        ["Trigger State", "Active", "—", "data-[state=active]:bg-background shadow"],
        ["Trigger State", "Inactive", "—", "text-muted-foreground"],
        ["Trigger State", "Focus", "—", "focus-visible:ring-[3px]"],
        ["Trigger State", "Disabled", "disabled", "true (opacity-50)"],
        ["Content Spacing", "Top margin", "—", "mt-xs"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">ToggleGroup</p>
              <p className="text-muted-foreground mt-0.5">For toggling options without content panels.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Accordion</p>
              <p className="text-muted-foreground mt-0.5">Vertically stacked collapsible sections.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Breadcrumb Docs
   ================================================================ */

const breadcrumbSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function BreadcrumbExploreBehavior() {
  const [items, setItems] = useState("3")
  const [showEllipsis, setShowEllipsis] = useState(false)
  const [separator, setSeparator] = useState("chevron")

  const allItems = ["Home", "Dashboard", "Settings", "Account", "Profile"]
  const count = Math.min(parseInt(items) || 3, 5)

  const SepIcon = separator === "slash" ? () => <span>/</span> : ChevronRight

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-background">
      <div className="p-4xl flex items-center justify-center min-h-[200px]">
        <Breadcrumb>
          <BreadcrumbList>
            {showEllipsis && count > 2 ? (
              <>
                <BreadcrumbItem><BreadcrumbLink href="#">{allItems[0]}</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator><SepIcon /></BreadcrumbSeparator>
                <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
                <BreadcrumbSeparator><SepIcon /></BreadcrumbSeparator>
                <BreadcrumbItem><BreadcrumbPage>{allItems[count - 1]}</BreadcrumbPage></BreadcrumbItem>
              </>
            ) : (
              allItems.slice(0, count).map((item, i) => (
                <React.Fragment key={item}>
                  {i > 0 && <BreadcrumbSeparator><SepIcon /></BreadcrumbSeparator>}
                  <BreadcrumbItem>
                    {i === count - 1
                      ? <BreadcrumbPage>{item}</BreadcrumbPage>
                      : <BreadcrumbLink href="#">{item}</BreadcrumbLink>}
                  </BreadcrumbItem>
                </React.Fragment>
              ))
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="border-t border-border bg-muted/50 p-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Items</Label>
            <Select value={items} onValueChange={setItems}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Separator</Label>
            <Select value={separator} onValueChange={setSeparator}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="chevron">ChevronRight</SelectItem>
                <SelectItem value="slash">Slash (/)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Show Ellipsis</Label>
            <div className="pt-1"><Switch checked={showEllipsis} onCheckedChange={setShowEllipsis} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BreadcrumbPropsTable() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">Breadcrumb</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">BreadcrumbList content.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">...props</td><td className="px-4 py-3 font-mono text-muted-foreground">{"nav attributes"}</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">{"Renders <nav aria-label=\"breadcrumb\">."}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">BreadcrumbLink</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">asChild</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">{"Render as child element (Radix Slot) for router Links."}</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">href</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Navigation target URL.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">BreadcrumbPage</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Current page label text.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">{"Renders <span aria-current=\"page\"> with font-semibold text-foreground."}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">BreadcrumbSeparator</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">ChevronRight</td><td className="px-4 py-3 text-muted-foreground">Custom separator icon or text (e.g. "/" or custom SVG).</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function BreadcrumbTokensTable() {
  const tokens = [
    { token: "--muted-foreground", value: "#6f6f6a", hex: "#6f6f6a", usage: "Link text and separator icon color" },
    { token: "--foreground", value: "#252522", hex: "#252522", usage: "Current page text (BreadcrumbPage)" },
    { token: "gap-xs (8px)", value: "8px", hex: "—", usage: "Gap between breadcrumb items and separators" },
    { token: "typo-paragraph-sm", value: "Geist 400 14px/20px", hex: "—", usage: "Link and page text style" },
    { token: "font-semibold (600)", value: "600", hex: "—", usage: "Current page font weight" },
    { token: "[&>svg]:size-3.5", value: "14×14px", hex: "—", usage: "Separator icon size" },
    { token: "size-md (16px)", value: "16×16px", hex: "—", usage: "Ellipsis (MoreHorizontal) icon size" },
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
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">{t.token}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">{t.value}</td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div className="size-5 rounded border border-border" style={{ backgroundColor: t.hex }} />
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

function BreadcrumbDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={breadcrumbSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Breadcrumb</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Breadcrumb navigation trail showing the user's location in a hierarchy.</p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <BreadcrumbExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-slot clsx tailwind-merge lucide-react`}
        importCode={`import {\n  Breadcrumb, BreadcrumbList, BreadcrumbItem,\n  BreadcrumbLink, BreadcrumbPage,\n  BreadcrumbSeparator, BreadcrumbEllipsis\n} from "@/components/ui/breadcrumb"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="Default" description="Standard breadcrumb trail." code={`<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/components">Components</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`}>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Example>

          <Example title="With ellipsis" description="Collapsed middle items for deep hierarchies." code={`<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbEllipsis />\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Profile</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`}>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>Profile</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Example>

          <Example title="Custom separator" description="Use a slash instead of ChevronRight." code={`<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator>/</BreadcrumbSeparator>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator>/</BreadcrumbSeparator>\n    <BreadcrumbItem>\n      <BreadcrumbPage>Guide</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`}>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem><BreadcrumbLink href="#">Docs</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem><BreadcrumbPage>Guide</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Breadcrumb is composed of multiple sub-components. Each extends its native HTML element props.
        </p>
        <BreadcrumbPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <BreadcrumbTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Navigation</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Start with a "Home" link and show the full path hierarchy.</p>
              <p>Use the last item as non-interactive (BreadcrumbPage) to indicate the current page.</p>
              <p>Use BreadcrumbEllipsis to collapse middle items when hierarchy exceeds 4-5 levels.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Breadcrumb as the sole navigation — it supplements primary navigation.</p>
              <p>Don't include the current page as a clickable link.</p>
              <p>Don't display more than 5 levels without truncation.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="68:7354" rows={[
        ["Separator", "ChevronRight (16×16)", "BreadcrumbSeparator", "[&>svg]:size-3.5 icon, customizable via children"],
        ["Link", "Geist 400 14px/20px", "BreadcrumbLink", "text-muted-foreground hover:text-foreground transition-colors"],
        ["Current Page", "Geist 600 14px/20px", "BreadcrumbPage", "font-semibold text-foreground, aria-current=page"],
        ["Gap", "8px", "BreadcrumbList", "gap-xs"],
        ["Ellipsis", "MoreHorizontal 16×16", "BreadcrumbEllipsis", "size-md icon, hidden from screen readers"],
        ["Layout", "Horizontal center", "BreadcrumbList", "flex flex-wrap items-center"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the next breadcrumb link</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Shift</kbd>{" + "}<kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the previous breadcrumb link</td>
                  </tr>
                  <tr>
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Navigate to the focused breadcrumb link</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Renders inside a <code className="bg-muted px-1 rounded font-mono">{"<nav>"}</code> element with <code className="bg-muted px-1 rounded font-mono">aria-label="breadcrumb"</code>.</li>
              <li>Current page uses <code className="bg-muted px-1 rounded font-mono">aria-current="page"</code>.</li>
              <li>Separators use <code className="bg-muted px-1 rounded font-mono">role="presentation" aria-hidden="true"</code>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">NavigationMenu</p>
              <p className="text-muted-foreground mt-0.5">Top-level site navigation.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Pagination</p>
              <p className="text-muted-foreground mt-0.5">Page-level navigation for lists.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Pagination Docs
   ================================================================ */

const paginationSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function PaginationDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={paginationSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Pagination</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Page navigation with previous/next and numbered links.</p>
      </header>

      {/* Interactive playground */}
      <Playground controls={[]} render={() => (
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add clsx tailwind-merge lucide-react`}
        importCode={`import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Standard pagination with previous/next buttons, numbered pages, and ellipsis." code={`<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">1</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#" isActive>2</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">3</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationEllipsis />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationNext href="#" />\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>`}>
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
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Hover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Active page text</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Inactive page text</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Pagination for large datasets that benefit from page-based browsing.</p>
              <p>Show ellipsis between distant page numbers for compact layouts.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Pagination for small lists — show all items or use "Load more".</p>
              <p>Don't use Pagination for real-time data streams — use infinite scroll instead.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the next pagination link</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Shift</kbd>{" + "}
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the previous pagination link</td>
                  </tr>
                  <tr>
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Navigate to the focused page</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Renders inside a <code className="bg-muted px-1 rounded font-mono">nav</code> element with <code className="bg-muted px-1 rounded font-mono">aria-label="pagination"</code>.</li>
              <li>Current page link has <code className="bg-muted px-1 rounded font-mono">aria-current="page"</code>.</li>
              <li>Previous/Next buttons include screen reader text.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Active Page", "Outline variant", "isActive", "true (outline button style)"],
        ["Inactive Page", "Ghost variant", "isActive", "false (ghost button style)"],
        ["Previous/Next", "With icon", "PaginationPrevious/Next", "ChevronLeft/Right icon"],
        ["Ellipsis", "Overflow", "PaginationEllipsis", "MoreHorizontal icon"],
        ["Icon Size", "16px", "—", "size-md"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Table</p>
              <p className="text-muted-foreground mt-0.5">Data table often paired with pagination.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Breadcrumb</p>
              <p className="text-muted-foreground mt-0.5">Hierarchical navigation.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Dropdown Menu Docs
   ================================================================ */

const dropdownMenuSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function DropdownMenuDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={dropdownMenuSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Dropdown Menu</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Contextual menu triggered by a button. Supports labels, separators, checkbox items, sub-menus, and keyboard shortcuts.</p>
      </header>

      <Playground controls={[]} render={() => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline">Open Menu</Button></DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User className="mr-2 size-4" /> Profile</DropdownMenuItem>
            <DropdownMenuItem><Settings className="mr-2 size-4" /> Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut className="mr-2 size-4" /> Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-dropdown-menu`}
        importCode={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Full-featured menu with labels, groups, sub-menus, shortcuts, and icons." code={`<DropdownMenu>\n  <DropdownMenuTrigger asChild>\n    <Button variant="outline">Open</Button>\n  </DropdownMenuTrigger>\n  <DropdownMenuContent className="w-56">\n    <DropdownMenuLabel>My Account</DropdownMenuLabel>\n    <DropdownMenuSeparator />\n    <DropdownMenuGroup>\n      <DropdownMenuItem>\n        <User className="mr-2 size-4" /> Profile\n        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>\n      </DropdownMenuItem>\n      <DropdownMenuItem>\n        <Settings className="mr-2 size-4" /> Settings\n        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>\n      </DropdownMenuItem>\n    </DropdownMenuGroup>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>\n      <LogOut className="mr-2 size-4" /> Log out\n    </DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}>
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
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Menu background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Menu border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Item hover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Item text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-md</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Menu shadow</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Group related actions with labels and separators for scannability.</p>
              <p>Use <code className="bg-muted px-1 rounded font-mono text-xs">DropdownMenuShortcut</code> to show keyboard shortcuts.</p>
            </DoItem>
            <DontItem>
              <p>Don't put more than 7-10 items in a single menu — use sub-menus or restructure.</p>
              <p>Don't use DropdownMenu for navigation — use <strong>NavigationMenu</strong> instead.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-4 font-semibold">Key</th>
                    <th className="pb-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Arrow Up / Down</td><td className="py-2">Navigate between menu items</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Enter / Space</td><td className="py-2">Select the focused item</td></tr>
                  <tr className="border-b border-border last:border-0"><td className="py-2 pr-4 font-mono">Escape</td><td className="py-2">Close the menu</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix DropdownMenu — full keyboard navigation.</li>
              <li>Arrow keys navigate items, Enter/Space activates, Escape closes.</li>
              <li>Type-ahead: typing a letter jumps to matching items.</li>
              <li>Checkbox and radio items communicate state via ARIA.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Content Min Width", "8rem", "—", "min-w-[8rem]"],
        ["Item Padding", "px-xs py-2xs", "—", "px-xs py-2xs text-sm"],
        ["Item State", "Focus", "—", "focus:bg-muted focus:text-foreground"],
        ["Item State", "Disabled", "disabled", "data-[disabled]:opacity-50"],
        ["Sub-menu", "Trigger", "DropdownMenuSubTrigger", "ChevronRight icon ml-auto"],
        ["Checkbox Item", "Checked", "DropdownMenuCheckboxItem", "Check icon indicator"],
        ["Radio Item", "Selected", "DropdownMenuRadioItem", "Circle icon indicator"],
        ["Shortcut", "Right-aligned", "DropdownMenuShortcut", "ml-auto text-xs opacity-60"],
        ["Icon Size", "16px", "—", "[&_svg]:size-md"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">ContextMenu</p>
              <p className="text-muted-foreground mt-0.5">Right-click context menu — same item pattern.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Menubar</p>
              <p className="text-muted-foreground mt-0.5">Horizontal menu bar with multiple dropdown menus.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Command</p>
              <p className="text-muted-foreground mt-0.5">Searchable command palette.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Command Docs
   ================================================================ */

const commandSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

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
    <div className="space-y-12">
      <TableOfContents sections={commandSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Command</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Command palette with search. Built on cmdk. Use as inline menu or as a dialog.</p>
      </header>

      <Playground controls={[]} render={() => (
        <Command className="rounded-lg border shadow-md w-[300px]">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem><CalendarIcon className="mr-2 size-4" /> Calendar</CommandItem>
              <CommandItem><Smile className="mr-2 size-4" /> Search Emoji</CommandItem>
              <CommandItem><Calculator className="mr-2 size-4" /> Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add cmdk@1.1.1`}
        importCode={`import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Inline" description="Embedded command menu with search, grouped items, and keyboard shortcuts." code={`<Command className="rounded-lg border shadow-md">\n  <CommandInput placeholder="Type a command or search..." />\n  <CommandList>\n    <CommandEmpty>No results found.</CommandEmpty>\n    <CommandGroup heading="Suggestions">\n      <CommandItem><CalendarIcon className="mr-2 size-4" /> Calendar</CommandItem>\n      <CommandItem><Smile className="mr-2 size-4" /> Search Emoji</CommandItem>\n      <CommandItem><Calculator className="mr-2 size-4" /> Calculator</CommandItem>\n    </CommandGroup>\n    <CommandSeparator />\n    <CommandGroup heading="Settings">\n      <CommandItem><User className="mr-2 size-4" /> Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>\n      <CommandItem><Settings className="mr-2 size-4" /> Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>`}>
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

        <Example title="Dialog (⌘J)" description="Command palette opened as a modal dialog, triggered by keyboard shortcut or button." code={`<CommandDialog open={open} onOpenChange={setOpen}>\n  <CommandInput placeholder="Type a command or search..." />\n  <CommandList>\n    <CommandEmpty>No results found.</CommandEmpty>\n    <CommandGroup heading="Suggestions">\n      <CommandItem>Calendar</CommandItem>\n      <CommandItem>Search Emoji</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</CommandDialog>`}>
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
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Command background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Command border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Item hover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Item text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Placeholder text</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Search UX</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use <code className="bg-muted px-1 rounded font-mono text-xs">CommandEmpty</code> to show a helpful message when no results match.</p>
              <p>Group related items with <code className="bg-muted px-1 rounded font-mono text-xs">CommandGroup</code> for scannability.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Command for navigation menus — use <strong>NavigationMenu</strong> or <strong>Breadcrumb</strong>.</p>
              <p>Don't display too many items at once — implement filtering or virtualization.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Down</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the next item</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Up</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the previous item</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Activate the selected item</td>
                  </tr>
                  <tr>
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Escape</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Close the command dialog</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on cmdk — uses <code className="bg-muted px-1 rounded font-mono">role="listbox"</code> for the list.</li>
              <li>Type to search filters items in real-time.</li>
              <li>Arrow keys navigate, Enter activates the selected item.</li>
              <li>CommandDialog combines Command with Dialog for Cmd+K patterns.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Input Height", "40px", "—", "h-3xl, bg-transparent"],
        ["Input Icon", "Search", "CommandInput", "Search icon, size-md"],
        ["List Max Height", "300px", "—", "max-h-[300px]"],
        ["Item State", "Selected", "—", "data-[selected=true]:bg-muted"],
        ["Item Padding", "px-xs py-2xs", "—", "px-xs py-2xs text-sm"],
        ["Group Heading", "Label", "CommandGroup", "px-xs py-2xs text-xs font-medium"],
        ["Empty State", "Centered", "CommandEmpty", "py-lg text-center text-sm"],
        ["Icon Size", "16px", "—", "[&_svg]:size-md"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">DropdownMenu</p>
              <p className="text-muted-foreground mt-0.5">Simple action menu without search.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Combobox</p>
              <p className="text-muted-foreground mt-0.5">Searchable select for form fields.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Accordion Docs
   ================================================================ */

function AccordionPropsTable() {
  const renderTable = (title: string, props: { name: string; type: string; default: string; description: string }[]) => (
    <div className="space-y-2">
      <h3 className="font-body font-semibold text-sm">{title}</h3>
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
                <td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">{p.name}</td>
                <td className="px-4 py-3 font-mono text-muted-foreground max-w-xs">{p.type}</td>
                <td className="px-4 py-3 font-mono">{p.default}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      {renderTable("Accordion", [
        { name: "type", type: '"single" | "multiple"', default: "—", description: "Whether one or multiple items can be open at once." },
        { name: "collapsible", type: "boolean", default: "false", description: 'When type="single", allows closing the open item by clicking its trigger.' },
        { name: "defaultValue", type: "string | string[]", default: "—", description: "The value(s) of the item(s) open by default (uncontrolled)." },
        { name: "value", type: "string | string[]", default: "—", description: "The controlled value(s) of the open item(s)." },
        { name: "onValueChange", type: "(value) => void", default: "—", description: "Callback when the open item(s) change." },
        { name: "disabled", type: "boolean", default: "false", description: "Disables all items in the accordion." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes for the root element." },
      ])}
      {renderTable("AccordionItem", [
        { name: "value", type: "string", default: "—", description: "Unique identifier for the item (required)." },
        { name: "disabled", type: "boolean", default: "false", description: "Disables this specific item." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
      ])}
      {renderTable("AccordionTrigger", [
        { name: "children", type: "React.ReactNode", default: "—", description: "Trigger label content." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes." },
      ])}
      {renderTable("AccordionContent", [
        { name: "children", type: "React.ReactNode", default: "—", description: "Content shown when the item is open." },
        { name: "className", type: "string", default: "—", description: "Additional CSS classes for the inner wrapper." },
      ])}
    </div>
  )
}

function AccordionTokensTable() {
  const tokens = [
    { token: "--foreground", value: "hsl(60 6% 14%)", hex: "#252522", usage: "Trigger label & content text" },
    { token: "--ghost-foreground", value: "hsl(60 3% 42%)", hex: "#6f6f6a", usage: "Chevron icon color" },
    { token: "--border", value: "hsl(60 5% 91%)", hex: "#e9e9e7", usage: "Item bottom border" },
    { token: "--ring", value: "hsl(60 5% 91%)", hex: "#e9e9e7", usage: "Focus ring (3px)" },
    { token: "--radius-lg", value: "8px", hex: "—", usage: "Focus state border-radius" },
    { token: "--spacing-xs", value: "8px", hex: "—", usage: "Trigger gap between label & icon" },
    { token: "--spacing-sm", value: "12px", hex: "—", usage: "Trigger vertical padding, content bottom padding" },
    { token: "--size-md", value: "16px", hex: "—", usage: "Chevron icon size" },
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
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">{t.token}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">{t.value}</td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div className="size-5 rounded border border-border" style={{ backgroundColor: t.hex }} />
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

/**
 * Explore Behavior — static variant preview matching Figma component 100%:
 *   State:    Default | Hover | Focus | Disable
 *   Type:     Open | Closed
 *   End Item: False | True
 *
 * Uses real Accordion component but with pointer-events-none to prevent
 * interactive states (hover/focus/click) from overriding the controlled preview.
 * Native hover:underline and focus-visible:ring are neutralized via CSS overrides.
 */
function AccordionExploreBehavior() {
  const [state, setState] = useState("Default")
  const [type, setType] = useState("Closed")
  const [endItem, setEndItem] = useState(false)

  const isDisable = state === "Disable"
  const isHover = state === "Hover"
  const isFocus = state === "Focus"
  // Disable forces Closed per Figma (no Open variant for Disable)
  const effectiveValue = isDisable ? undefined : type === "Open" ? "preview" : undefined

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="bg-primary/5 p-4xl flex items-center justify-center min-h-[160px]">
        {/* pointer-events-none: prevent interactive states; visual overrides for Figma states
            ring-focus is a custom CSS class (not Tailwind utility), so use shadow arbitrary for focus ring */}
        <div className={[
          "w-full max-w-md pointer-events-none",
          "[&_[data-slot=accordion-trigger]]:hover:no-underline",
          isHover ? "[&_[data-slot=accordion-trigger]]:underline [&_[data-slot=accordion-trigger]]:rounded-lg" : "",
          isFocus ? "[&_[data-slot=accordion-trigger]]:rounded-lg [&_[data-slot=accordion-trigger]]:shadow-[0_0_0_3px_var(--ring)]" : "",
          endItem ? "" : "[&_[data-slot=accordion-item]]:!border-b",
        ].filter(Boolean).join(" ")}>
          <Accordion
            type="single"
            collapsible
            value={effectiveValue}
            disabled={isDisable}
          >
            <AccordionItem
              value="preview"
              className={endItem ? "last:border-b-0" : ""}
            >
              <AccordionTrigger>Accordion trigger label</AccordionTrigger>
              <AccordionContent>
                This is the accordion content area. It expands when the trigger is activated.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="border-t border-border bg-muted/50 p-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">State</Label>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Default">Default</SelectItem>
                <SelectItem value="Hover">Hover</SelectItem>
                <SelectItem value="Focus">Focus</SelectItem>
                <SelectItem value="Disable">Disable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Type</Label>
            <Select value={isDisable ? "Closed" : type} onValueChange={setType} disabled={isDisable}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">End Item</Label>
            <div className="pt-1">
              <Switch checked={endItem} onCheckedChange={setEndItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const accordionSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function AccordionDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={accordionSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Layout</p>
        <h1 className="typo-heading-2">Accordion</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Vertically collapsible content sections. Single or multiple items can be open.</p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <AccordionExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-accordion lucide-react clsx tailwind-merge`}
        importCode={`import {\n  Accordion,\n  AccordionItem,\n  AccordionTrigger,\n  AccordionContent,\n} from "@/components/ui/accordion"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Single (default)" description="Only one item can be open at a time. Set collapsible to allow closing the open item." code={`<Accordion type="single" collapsible className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>Is it styled?</AccordionTrigger>\n    <AccordionContent>Yes. It comes with SprouX default styles.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-3">\n    <AccordionTrigger>Is it animated?</AccordionTrigger>\n    <AccordionContent>Yes. It's animated by default with smooth transitions.</AccordionContent>\n  </AccordionItem>\n</Accordion>`}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It comes with SprouX default styles.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It's animated by default with smooth transitions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>

        <Example title="Multiple" description="Multiple items can be open simultaneously. Each item toggles independently." code={`<Accordion type="multiple" className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Can I open multiple?</AccordionTrigger>\n    <AccordionContent>Yes. Set type="multiple" to allow it.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>How does it work?</AccordionTrigger>\n    <AccordionContent>Each item toggles independently.</AccordionContent>\n  </AccordionItem>\n</Accordion>`}>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can I open multiple?</AccordionTrigger>
              <AccordionContent>Yes. Set type="multiple" to allow it.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>Each item toggles independently.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>

        <Example title="Default Open" description="Use defaultValue to pre-expand an item on mount." code={`<Accordion type="single" collapsible defaultValue="item-1" className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>What is your return policy?</AccordionTrigger>\n    <AccordionContent>You can return items within 30 days of purchase for a full refund.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2">\n    <AccordionTrigger>How long does shipping take?</AccordionTrigger>\n    <AccordionContent>Standard shipping takes 5-7 business days.</AccordionContent>\n  </AccordionItem>\n</Accordion>`}>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>You can return items within 30 days of purchase for a full refund.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does shipping take?</AccordionTrigger>
              <AccordionContent>Standard shipping takes 5-7 business days.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>

        <Example title="Disabled" description="Use the disabled prop on AccordionItem to prevent interaction. The disabled item appears faded and cannot be expanded." code={`<Accordion type="single" collapsible className="w-full">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-2" disabled>\n    <AccordionTrigger>Is it styled?</AccordionTrigger>\n    <AccordionContent>Yes. It comes with SprouX default styles.</AccordionContent>\n  </AccordionItem>\n  <AccordionItem value="item-3">\n    <AccordionTrigger>Is it animated?</AccordionTrigger>\n    <AccordionContent>Yes. It's animated by default with smooth transitions.</AccordionContent>\n  </AccordionItem>\n</Accordion>`}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" disabled>
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>Yes. It comes with SprouX default styles.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It's animated by default with smooth transitions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-accordion</code>.
          Supports all Radix Accordion props in addition to the following:
        </p>
        <AccordionPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code>{" "}
          and sourced from the Figma file{" "}
          <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <AccordionTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Accordion for FAQ sections, collapsible settings, and long lists of related content.</p>
              <p>Keep trigger labels concise and descriptive — users scan quickly.</p>
            </DoItem>
            <DontItem>
              <p>Don't hide critical information inside collapsed sections that users must see.</p>
              <p>Don't use vague labels like "More" or "Details" — be specific about what's inside.</p>
            </DontItem>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Structure</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use <strong>type="single"</strong> when items are related and one answer is expected at a time.</p>
              <p>Use <strong>defaultValue</strong> to pre-expand the most relevant item.</p>
            </DoItem>
            <DontItem>
              <p>Don't nest Accordions inside Accordions — keep the hierarchy flat.</p>
              <p>Don't use Accordion for content that should always be visible — use a plain list instead.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="66:5034" rows={[
        ["State", "Default / Hover / Focus / Disable", "—", "Hover: underline. Focus: rounded-lg + ring-focus. Disable: opacity-50"],
        ["Type", "Open / Closed", "data-state", "Chevron rotates 180° on open, content slides down"],
        ["End Item", "True / False", "—", "last:border-b-0 removes bottom border on last item"],
        ["Trigger", "flex, gap-xs, py-sm", "AccordionTrigger", "Horizontal flex, 8px gap, 12px py, no radius (0 default)"],
        ["Label", "Paragraph Small SemiBold (14/20 ls:0.07)", "children", "typo-paragraph-sm-bold text-foreground"],
        ["Icon", "chevron-down 16×16", "ChevronDown", "size-md text-ghost-foreground, rotates 180° on open"],
        ["Content", "Paragraph Small (14/20 ls:0.07), pb-sm", "AccordionContent", "typo-paragraph-sm text-foreground, pb-sm"],
        ["Border", "1px --border", "AccordionItem", "border-b border-border (hidden on last item)"],
        ["Focus Ring", "0 0 0 3px --ring", "—", "focus-visible:rounded-lg focus-visible:ring-focus outline-none"],
        ["Disabled", "opacity-50", "disabled", "disabled:pointer-events-none disabled:opacity-50 (Shadcn)"],
        ["Animation", "Open / Close", "—", "animate-accordion-down / animate-accordion-up"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the next accordion trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Shift</kbd>{" + "}
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the previous accordion trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd>{" / "}
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Space</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Toggle the focused accordion item open/closed</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Down</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the next trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Up</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the previous trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Home</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the first trigger</td>
                  </tr>
                  <tr>
                    <td className="pr-6 py-2">
                      <kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">End</kbd>
                    </td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus to the last trigger</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">ARIA attributes</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                Each trigger uses{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-expanded</code>{" "}
                to indicate open/closed state.
              </li>
              <li>
                Each trigger has{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-controls</code>{" "}
                pointing to its associated content panel.
              </li>
              <li>
                Content panels use{" "}
                <code className="bg-muted px-1 rounded font-mono">role="region"</code>{" "}
                with{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-labelledby</code>{" "}
                referencing the trigger.
              </li>
              <li>All ARIA attributes are managed automatically by Radix UI.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Focus indicator</h3>
            <p className="text-muted-foreground">
              Triggers display a visible <strong>3px ring</strong> on{" "}
              <code className="bg-muted px-1 rounded font-mono">:focus-visible</code>{" "}
              with{" "}
              <code className="bg-muted px-1 rounded font-mono">rounded-lg</code>{" "}
              border-radius. The ring uses{" "}
              <code className="bg-muted px-1 rounded font-mono">--ring (#e9e9e7)</code>.
              This meets WCAG 2.1 focus visibility requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Collapsible</p>
              <p className="text-muted-foreground mt-0.5">
                For toggling a single section of content. Simpler alternative when you don't need multiple items.
              </p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Tabs</p>
              <p className="text-muted-foreground mt-0.5">
                For switching between mutually exclusive content panels. Use instead of accordion when content is equally important.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Collapsible Docs
   ================================================================ */

const collapsibleSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function CollapsibleDocs() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-12">
      <TableOfContents sections={collapsibleSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Layout</p>
        <h1 className="typo-heading-2">Collapsible</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Toggle visibility of a content section. Simpler than Accordion for single-item toggling.</p>
      </header>

      <Playground controls={[]} render={() => (
        <Collapsible className="w-[300px]">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">Toggle items</Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="rounded-md border px-4 py-2 text-sm">Item 1</div>
            <div className="rounded-md border px-4 py-2 text-sm">Item 2</div>
          </CollapsibleContent>
        </Collapsible>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-collapsible`}
        importCode={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Controlled collapsible with a chevron trigger and animated content reveal." code={`<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">\n  <div className="flex items-center justify-between space-x-4 px-4">\n    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>\n    <CollapsibleTrigger asChild>\n      <Button variant="ghost" size="sm">\n        <ChevronsUpDown className="size-4" />\n        <span className="sr-only">Toggle</span>\n      </Button>\n    </CollapsibleTrigger>\n  </div>\n  <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@radix-ui/primitives</div>\n  <CollapsibleContent className="space-y-2">\n    <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@radix-ui/colors</div>\n    <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">@stitches/react</div>\n  </CollapsibleContent>\n</Collapsible>`}>
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
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-collapsible</code>.
          Supports all Radix Collapsible props in addition to the following:
        </p>
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
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">open</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Controlled open state.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">defaultOpen</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Initial open state (uncontrolled).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">onOpenChange</td><td className="px-4 py-3 font-mono text-muted-foreground">(open: boolean) =&gt; void</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Callback when open state changes.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">disabled</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Prevents interaction with the collapsible.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">asChild</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Merge props onto child element (Trigger/Content).</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Content border (when styled)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Collapsible for progressive disclosure — showing secondary content on demand.</p>
              <p>Use a clear trigger (e.g., chevron icon) to indicate expandability.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Collapsible for navigation menus — use <strong>Accordion</strong> or <strong>NavigationMenu</strong>.</p>
              <p>Don't hide critical information inside collapsed sections.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><code className="bg-muted px-1 rounded font-mono">Enter</code> / <code className="bg-muted px-1 rounded font-mono">Space</code> — Toggle the collapsible open/close.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Collapsible — manages <code className="bg-muted px-1 rounded font-mono">aria-expanded</code> on trigger.</li>
              <li>Enter/Space toggles the collapsible content.</li>
              <li>Content animates in/out — hidden from DOM when collapsed.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["State", "Open", "open", "true — content visible"],
        ["State", "Closed", "open", "false — content hidden"],
        ["Sub-component", "Trigger", "CollapsibleTrigger", "Toggle button"],
        ["Sub-component", "Content", "CollapsibleContent", "Animated visibility"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Accordion</p>
              <p className="text-muted-foreground mt-0.5">Multiple collapsible sections in a group with exclusive opening.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Scroll Area Docs
   ================================================================ */

const scrollAreaSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ScrollAreaDocs() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

  return (
    <div className="space-y-12">
      <TableOfContents sections={scrollAreaSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Layout</p>
        <h1 className="typo-heading-2">Scroll Area</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Custom scrollbar overlay for constrained regions. Cross-browser consistent.</p>
      </header>

      <Playground controls={[]} render={() => (
        <ScrollArea className="h-[200px] w-[300px] rounded-md border p-4">
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i} className="text-sm">Item {i + 1} — Scroll to see more content below.</p>
            ))}
          </div>
        </ScrollArea>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-scroll-area`}
        importCode={`import { ScrollArea } from "@/components/ui/scroll-area"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Vertical" description="Vertical scrollable list with custom scrollbar and separator between items." code={`<ScrollArea className="h-72 w-48 rounded-md border">\n  <div className="p-4">\n    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>\n    {tags.map((tag) => (\n      <div key={tag} className="text-sm">{tag}</div>\n    ))}\n  </div>\n</ScrollArea>`}>
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
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-scroll-area</code>.
          Supports all Radix ScrollArea props in addition to the following:
        </p>
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
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">type</td><td className="px-4 py-3 font-mono text-muted-foreground">"auto" | "always" | "scroll" | "hover"</td><td className="px-4 py-3 font-mono text-muted-foreground">"hover"</td><td className="px-4 py-3 text-muted-foreground">Scrollbar visibility behavior.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">scrollHideDelay</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">600</td><td className="px-4 py-3 text-muted-foreground">Delay (ms) before hiding scrollbar after scrolling stops.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">dir</td><td className="px-4 py-3 font-mono text-muted-foreground">"ltr" | "rtl"</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Reading direction for horizontal scroll.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">orientation</td><td className="px-4 py-3 font-mono text-muted-foreground">"vertical" | "horizontal"</td><td className="px-4 py-3 font-mono text-muted-foreground">"vertical"</td><td className="px-4 py-3 text-muted-foreground">Scrollbar axis orientation.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes for the scroll area root.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Scrollbar track border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Scrollbar thumb (hover)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use ScrollArea for consistent cross-browser scroll behavior with custom styled scrollbars.</p>
              <p>Set a fixed height/width to create a scrollable container.</p>
            </DoItem>
            <DontItem>
              <p>Don't hide scrollbars completely — users need visual indication of scrollable content.</p>
              <p>Don't use ScrollArea for the full page — it's meant for contained regions.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><code className="bg-muted px-1 rounded font-mono">Arrow keys</code> — Scroll content vertically/horizontally.</li>
              <li><code className="bg-muted px-1 rounded font-mono">Tab</code> — Move focus to the scroll area.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix ScrollArea — provides custom scrollbar styling while maintaining keyboard scrolling.</li>
              <li>Content remains natively scrollable via keyboard (Tab, Arrow keys, Page Up/Down).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Orientation", "Vertical (default)", "orientation", '"vertical" — w-2.5 scrollbar'],
        ["Orientation", "Horizontal", "orientation", '"horizontal" — h-2.5 scrollbar'],
        ["Thumb", "Rounded pill", "—", "rounded-full bg-border"],
        ["Viewport", "Full coverage", "—", "overflow-hidden rounded-[inherit]"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Table</p>
              <p className="text-muted-foreground mt-0.5">Wrap tables in ScrollArea for horizontal overflow.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Calendar Docs
   ================================================================ */

const calendarSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function CalendarDocs() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-12">
      <TableOfContents sections={calendarSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Forms</p>
        <h1 className="typo-heading-2">Calendar</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Date picker calendar component built on react-day-picker v9.</p>
      </header>

      <Playground controls={[]} render={() => <Calendar className="rounded-md border" />} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add react-day-picker`}
        importCode={`import { Calendar } from "@/components/ui/calendar"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Single Date" description="Select a single date with visual month layout and day-of-week headers." code={`<Calendar\n  mode="single"\n  selected={date}\n  onSelect={setDate}\n  className="rounded-md border"\n/>`}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-border"
          />
        </Example>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--primary</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Selected day background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--primary-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Selected day text</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Today highlight background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Outside month days text</td></tr>
            </tbody>
          </table>
        </div>
      </section>

            <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Date Selection</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Calendar for date selection with visual context (day of week, month layout).</p>
              <p>Show today's date visually distinguished from other dates.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Calendar for date ranges spanning years — use a date input instead.</p>
              <p>Don't disable dates without explaining why (add a tooltip or message).</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Keys</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Navigate between days in the calendar grid</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Enter</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Select the focused date</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Page Up / Down</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Navigate to previous / next month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on react-day-picker — full keyboard navigation.</li>
              <li>Arrow keys move between days, Page Up/Down changes months.</li>
              <li>Selected dates are announced via screen readers.</li>
            </ul>
          </div>
        </div>
      </section>

            {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Mode", "Single", "mode", '"single" — pick one date'],
        ["Mode", "Range", "mode", '"range" — pick start/end'],
        ["Day Cell Size", "32px", "—", "size-2xl square"],
        ["State", "Selected", "—", "bg-primary text-primary-foreground"],
        ["State", "Today", "—", "bg-muted text-foreground"],
        ["State", "Outside Month", "—", "text-muted-foreground opacity-50"],
        ["State", "Disabled", "disabled", "opacity-50"],
        ["State", "Range Middle", "—", "bg-muted rounded-none"],
        ["Navigation", "Prev/Next", "—", "ChevronLeft/Right buttons"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">DatePicker</p>
              <p className="text-muted-foreground mt-0.5">Calendar inside a popover with input trigger.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Date Picker Docs
   ================================================================ */

const datePickerSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function DatePickerExploreBehavior() {
  const [inputState, setInputState] = useState<"Placeholder" | "Value" | "Focus">("Placeholder")
  const [calendarType, setCalendarType] = useState<"Basic" | "Range">("Basic")
  const [selectedDate] = useState(new Date())
  const rangeFrom = new Date(2025, 0, 15)
  const rangeTo = new Date(2025, 1, 14)

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      {/* ── Static preview: Input + Calendar rendered inline (modal pattern) ── */}
      <div className="bg-primary/5 p-4xl flex flex-col items-center justify-center gap-xs min-h-[200px]">
        {/* Date Picker Input preview */}
        <div
          className={cn(
            "flex h-9 items-center gap-xs rounded-lg border bg-input px-sm typo-paragraph-sm transition-colors",
            calendarType === "Basic" ? "w-[280px]" : "w-auto min-w-[280px]",
            inputState === "Focus"
              ? "border-border ring-[3px] ring-ring"
              : "border-border",
            inputState === "Value" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          <CalendarIcon className="size-md shrink-0" />
          <span className="flex-1 text-left whitespace-nowrap">
            {inputState === "Value"
              ? calendarType === "Range"
                ? `${format(rangeFrom, "LLL dd, y")} – ${format(rangeTo, "LLL dd, y")}`
                : format(selectedDate, "PPP")
              : calendarType === "Range"
                ? "Pick a date range"
                : "Pick a date"}
          </span>
        </div>

        {/* Calendar preview */}
        <div className="mt-xs overflow-x-auto">
          {calendarType === "Range" ? (
            <Calendar
              mode="range"
              selected={inputState === "Value" ? { from: rangeFrom, to: rangeTo } : undefined}
              numberOfMonths={2}
              showOutsideDays
              className="rounded-xl border border-border bg-card shadow"
            />
          ) : (
            <Calendar
              mode="single"
              selected={inputState === "Value" ? selectedDate : undefined}
              numberOfMonths={1}
              showOutsideDays
              className="rounded-xl border border-border bg-card shadow"
            />
          )}
        </div>
      </div>

      {/* ── Controls panel ── */}
      <div className="border-t border-border bg-muted/50 p-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">Type</Label>
            <Select value={calendarType} onValueChange={(v) => setCalendarType(v as "Basic" | "Range")}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Basic">Basic</SelectItem>
                <SelectItem value="Range">Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-xs">
            <Label className="text-xs text-muted-foreground">State</Label>
            <Select value={inputState} onValueChange={(v) => setInputState(v as "Placeholder" | "Value" | "Focus")}>
              <SelectTrigger size="sm"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Placeholder">Placeholder</SelectItem>
                <SelectItem value="Value">Value</SelectItem>
                <SelectItem value="Focus">Focus</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

function DatePickerPropsTable() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">DatePicker</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">date</td><td className="px-4 py-3 font-mono text-muted-foreground">Date</td><td className="px-4 py-3 font-mono text-muted-foreground">undefined</td><td className="px-4 py-3 text-muted-foreground">Controlled selected date.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">onDateChange</td><td className="px-4 py-3 font-mono text-muted-foreground">{"(date: Date | undefined) => void"}</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Callback when a date is selected or cleared.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes for the input trigger.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-body font-semibold text-sm mb-2">DateRangePicker</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">from</td><td className="px-4 py-3 font-mono text-muted-foreground">Date</td><td className="px-4 py-3 font-mono text-muted-foreground">undefined</td><td className="px-4 py-3 text-muted-foreground">Initial start date of the range.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">to</td><td className="px-4 py-3 font-mono text-muted-foreground">Date</td><td className="px-4 py-3 font-mono text-muted-foreground">undefined</td><td className="px-4 py-3 text-muted-foreground">Initial end date of the range.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">onRangeChange</td><td className="px-4 py-3 font-mono text-muted-foreground">{"(range: { from: Date | undefined; to: Date | undefined }) => void"}</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Callback when the date range changes.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes for the input trigger.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function DatePickerTokensTable() {
  const tokens = [
    { token: "--card", value: "#ffffff", hex: "#ffffff", usage: "Popover background" },
    { token: "--border", value: "#e9e9e7", hex: "#e9e9e7", usage: "Input and popover border" },
    { token: "--primary", value: "#0f766e", hex: "#0f766e", usage: "Selected day background" },
    { token: "--primary-foreground", value: "#ffffff", hex: "#ffffff", usage: "Selected day text" },
    { token: "--muted-foreground", value: "#6f6f6a", hex: "#6f6f6a", usage: "Placeholder text and calendar nav icons" },
    { token: "--accent", value: "#e9e9e7", hex: "#e9e9e7", usage: "Hovered day background" },
    { token: "--input", value: "var(--color-slate-50)", hex: "#f7f7f6", usage: "Input trigger background" },
    { token: "--ring", value: "var(--color-teal-300)", hex: "#5eead4", usage: "Focus ring on input trigger" },
    { token: "w-[280px]", value: "280px", hex: "—", usage: "Input trigger width" },
    { token: "h-9 (36px)", value: "36px", hex: "—", usage: "Input trigger height (default)" },
    { token: "size-md (16px)", value: "16×16px", hex: "—", usage: "Calendar icon size" },
    { token: "size-[48px]", value: "48×48px", hex: "—", usage: "Day cell size" },
    { token: "size-2xl (32px)", value: "32×32px", hex: "—", usage: "Nav button size" },
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
              <td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">{t.token}</td>
              <td className="px-4 py-3 font-mono text-muted-foreground">{t.value}</td>
              <td className="px-4 py-3">
                {t.hex !== "—" && (
                  <div className="size-5 rounded border border-border" style={{ backgroundColor: t.hex }} />
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

function DatePickerDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={datePickerSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Forms</p>
        <h1 className="typo-heading-2">Date Picker</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Date selection using a Calendar in a Popover. Compact input pattern.</p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <DatePickerExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add react-day-picker @radix-ui/react-popover date-fns`}
        importCode={`import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Example title="Default" description="Click the input to open a calendar popover." code={`<DatePicker />`}>
            <DatePicker />
          </Example>

          <Example title="With pre-selected date" description="Pass an initial date value." code={`<DatePicker date={new Date()} />`}>
            <DatePicker date={new Date()} />
          </Example>

          <Example title="With callback" description="Handle date selection with onDateChange." code={`<DatePicker\n  onDateChange={(date) => console.log(date)}\n/>`}>
            <DatePicker onDateChange={(d) => console.log(d)} />
          </Example>

          <Example title="Date Range" description="Select a start and end date with a 2-month calendar." code={`<DateRangePicker />`}>
            <DateRangePicker />
          </Example>

          <Example title="Date Range with pre-selected" description="Pass initial from/to dates." code={`<DateRangePicker\n  from={new Date(2025, 0, 15)}\n  to={new Date(2025, 1, 14)}\n/>`}>
            <DateRangePicker from={new Date(2025, 0, 15)} to={new Date(2025, 1, 14)} />
          </Example>

          <Example title="Date Range with callback" description="Handle range selection with onRangeChange." code={`<DateRangePicker\n  onRangeChange={(range) => console.log(range)}\n/>`}>
            <DateRangePicker onRangeChange={(r) => console.log(r)} />
          </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          DatePicker and DateRangePicker compose an Input-style trigger + Popover + Calendar internally.
        </p>
        <DatePickerPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
        <DatePickerTokensTable />
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use DatePicker when users need to select a date with both visual calendar and text display.</p>
              <p>Format the displayed date clearly using locale-appropriate format (e.g. PPP from date-fns).</p>
              <p>Provide a clear placeholder label like "Pick a date" when no date is selected.</p>
            </DoItem>
            <DontItem>
              <p>Don't use DatePicker for time-only selection — use a time picker instead.</p>
              <p>Don't use DatePicker for date range selection — use DateRangePicker instead.</p>
              <p>Don't place multiple DatePickers side-by-side without clear labels.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <h3 className="font-body font-semibold text-sm mt-6">Date Picker Input</h3>
      <FigmaMapping id="figma-mapping" nodeId="60:9340" rows={[
        ["State", "Placeholder", "—", "text-muted-foreground, 'Pick a date' text"],
        ["State", "Value", "—", "text-foreground, formatted date (PPP)"],
        ["State", "Focus", "—", "ring-[3px] ring-ring, border-border"],
        ["Trigger", "Input-style field", "button", "h-9 (36px), bg-input, border-border, rounded-lg, w-[280px], px-sm"],
        ["Icon", "Calendar (16×16)", "CalendarIcon", "size-md, gap-xs from text"],
      ]} />

      <h3 className="font-body font-semibold text-sm mt-6">Date Picker (Calendar)</h3>
      <FigmaMapping nodeId="288:119954" rows={[
        ["Type", "Basic", "Calendar", "numberOfMonths={1}, mode='single' (default)"],
        ["Type", "Range", "Calendar", "numberOfMonths={2}, mode='range', gap-md between months"],
        ["Popover", "Card container", "PopoverContent", "w-auto p-0, rounded border"],
      ]} />

      <h3 className="font-body font-semibold text-sm mt-6">Date Picker / Day</h3>
      <FigmaMapping nodeId="781:40922" rows={[
        ["Size", "Large (48×48)", "day_button", "size-[48px] rounded-sm p-xs"],
        ["State", "Default", "day_button", "bg-transparent text-foreground"],
        ["State", "Hover & Active", "day_button", "bg-accent text-foreground"],
        ["State", "Selected", "day_button", "bg-primary text-primary-foreground"],
        ["State", "Disabled", "day_button", "text-muted-foreground opacity-50"],
        ["Position", "Single", "day_button", "rounded-sm (all corners)"],
        ["Position", "Start", "day", "rounded-l-sm (left corners only)"],
        ["Position", "Middle", "day", "no border-radius, bg-accent when in range"],
        ["Position", "End", "day", "rounded-r-sm (right corners only)"],
      ]} />

      <h3 className="font-body font-semibold text-sm mt-6">Date Picker / Header</h3>
      <FigmaMapping nodeId="264:29273" rows={[
        ["Type", "1 Month", "month_caption", "Single month title, prev/next nav buttons"],
        ["Type", "2 Months", "months", "Two month grids side-by-side, gap-md (16px)"],
        ["Nav", "Prev/Next buttons", "button_previous/next", "size-2xl (32px), rounded-lg, border, p-[7px]"],
        ["Title", "Month Year", "caption_label", "typo-paragraph-sm font-semibold (Geist 600 14px)"],
        ["Weekday", "Su Mo Tu...", "weekday", "text-[12px] w-[48px] h-[32px] text-muted-foreground"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
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
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Space / Enter</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Open the calendar popover</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Escape</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Close the calendar popover</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Arrow Keys</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Navigate between days when calendar is open</td>
                  </tr>
                  <tr>
                    <td className="pr-6 py-2"><kbd className="bg-muted border border-border rounded px-1.5 py-0.5 text-[10px] font-mono">Tab</kbd></td>
                    <td className="pr-6 py-2 text-muted-foreground">Move focus between month navigation and day grid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Combines Input-style trigger + Popover + Calendar — all Radix-managed accessibility.</li>
              <li>Trigger announces selected date to screen readers via button semantics.</li>
              <li>Calendar grid uses proper ARIA roles for dates and navigation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Calendar</p>
              <p className="text-muted-foreground mt-0.5">Standalone calendar without popover.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Input</p>
              <p className="text-muted-foreground mt-0.5">Manual date text input.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Popover</p>
              <p className="text-muted-foreground mt-0.5">Floating container for the calendar.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Combobox Docs
   ================================================================ */

const comboboxSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ComboboxDocs() {
  const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ]

  return (
    <div className="space-y-12">
      <TableOfContents sections={comboboxSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Forms</p>
        <h1 className="typo-heading-2">Combobox</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">Searchable select dropdown. Composition of Command + Popover.</p>
      </header>

      <Playground controls={[]} render={() => (
        <Combobox
          options={[
            { value: "next", label: "Next.js" },
            { value: "sveltekit", label: "SvelteKit" },
            { value: "nuxt", label: "Nuxt.js" },
            { value: "remix", label: "Remix" },
            { value: "astro", label: "Astro" },
          ]}
          placeholder="Select framework..."
          searchPlaceholder="Search framework..."
        />
      )} />

      

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add cmdk@1.1.1 @radix-ui/react-popover`}
        importCode={`import { Combobox } from "@/components/ui/combobox"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Searchable dropdown with a list of framework options." code={`const frameworks = [\n  { value: "next", label: "Next.js" },\n  { value: "sveltekit", label: "SvelteKit" },\n  { value: "nuxt", label: "Nuxt.js" },\n  { value: "remix", label: "Remix" },\n  { value: "astro", label: "Astro" },\n]\n\n<Combobox\n  options={frameworks}\n  placeholder="Select framework..."\n  searchPlaceholder="Search framework..."\n/>`}>
          <Combobox
            options={frameworks}
            placeholder="Select framework..."
            searchPlaceholder="Search framework..."
          />
        </Example>
        </div>
      </section>

      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
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
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">options</td><td className="px-4 py-3 font-mono text-muted-foreground">ComboboxOption[]</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Array of {`{ value, label }`} objects.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">value</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Controlled selected value.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">onValueChange</td><td className="px-4 py-3 font-mono text-muted-foreground">(value: string) =&gt; void</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Callback when value changes.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">placeholder</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">"Select option..."</td><td className="px-4 py-3 text-muted-foreground">Placeholder text.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">searchPlaceholder</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">"Search..."</td><td className="px-4 py-3 text-muted-foreground">Search input placeholder.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">emptyText</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">"No results found."</td><td className="px-4 py-3 text-muted-foreground">Text when no results match.</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Popover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Item hover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Text color</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Search & Select</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Combobox when users need to search through a large list of options.</p>
              <p>Show an empty state message when no results match the search query.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Combobox for short lists (&lt;5 items) — use <strong>Select</strong> instead.</p>
              <p>Don't pre-populate the search field — let users type their query.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Enter</kbd> / <kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Space</kbd> — Open the popover.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Arrow Up/Down</kbd> — Navigate options.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Enter</kbd> — Select highlighted option.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Escape</kbd> — Close the popover.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Combines Popover + Command — searchable dropdown with keyboard navigation.</li>
              <li>Type to filter options, Arrow keys to navigate, Enter to select.</li>
              <li>Selected value is announced to screen readers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Trigger", "Outline button", "—", "Button variant=outline, w-[200px]"],
        ["Icon", "ChevronsUpDown", "—", "ChevronsUpDown icon, size-md"],
        ["Popover Width", "200px", "—", "w-[200px] (matches button)"],
        ["Search", "Command input", "searchPlaceholder", "Search input inside popover"],
        ["Selected", "Check icon", "—", "Check icon, size-md"],
        ["Empty State", "Text", "emptyText", '"No results found."'],
        ["Options", "Array", "options", "{ value, label }[]"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Select</p>
              <p className="text-muted-foreground mt-0.5">Simple dropdown without search.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Command</p>
              <p className="text-muted-foreground mt-0.5">Full command palette with groups.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Radio Group Docs
   ================================================================ */

const radioGroupSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function RadioGroupDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={radioGroupSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">
          Components / Forms
        </p>
        <h1 className="typo-heading-2">Radio Group</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A set of checkable buttons — known as radio buttons — where only one can be checked at a time.
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "switch", label: "Disabled", prop: "disabled", defaultValue: false },
        ]}
        render={(p) => (
          <RadioGroup defaultValue="option-1" disabled={p.disabled}>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="pg-r1" />
              <Label htmlFor="pg-r1">Option One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="pg-r2" />
              <Label htmlFor="pg-r2">Option Two</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="pg-r3" />
              <Label htmlFor="pg-r3">Option Three</Label>
            </div>
          </RadioGroup>
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-radio-group`}
        importCode={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example title="Default" description="Vertical radio group with three options." code={`<RadioGroup defaultValue="option-1">\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="option-1" id="r1" />\n    <Label htmlFor="r1">Option One</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="option-2" id="r2" />\n    <Label htmlFor="r2">Option Two</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="option-3" id="r3" />\n    <Label htmlFor="r3">Option Three</Label>\n  </div>\n</RadioGroup>`}>
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

        <Example title="Horizontal" description="Horizontal layout using flex on the group." code={`<RadioGroup defaultValue="sm" className="flex gap-4">\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="sm" id="size-sm" />\n    <Label htmlFor="size-sm">Small</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="md" id="size-md" />\n    <Label htmlFor="size-md">Medium</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="lg" id="size-lg" />\n    <Label htmlFor="size-lg">Large</Label>\n  </div>\n</RadioGroup>`}>
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

        <Example title="Disabled" description="All items disabled via the group prop." code={`<RadioGroup defaultValue="active" disabled>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="active" id="d1" />\n    <Label htmlFor="d1">Active</Label>\n  </div>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="inactive" id="d2" />\n    <Label htmlFor="d2">Inactive</Label>\n  </div>\n</RadioGroup>`}>
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
        </div>
      </section>

      {/* ---- API Reference ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>

        <h3 className="font-heading font-semibold text-lg">RadioGroup</h3>
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
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">defaultValue</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">string</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Initially selected value (uncontrolled).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">value</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">string</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Selected value (controlled).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">onValueChange</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">(value: string) =&gt; void</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Callback when selection changes.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">disabled</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">boolean</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">false</td>
                <td className="px-4 py-3 text-muted-foreground">Disables all radio items.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-heading font-semibold text-lg mt-6">RadioGroupItem</h3>
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
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 font-mono text-primary">value</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">string</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">—</td>
                <td className="px-4 py-3 text-muted-foreground">Unique value for this radio item (required).</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-primary">disabled</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">boolean</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">false</td>
                <td className="px-4 py-3 text-muted-foreground">Disables this specific item.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--primary</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Selected indicator fill</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Radio border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Focus ring (3px)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Selection</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use RadioGroup for mutually exclusive choices where all options should be visible.</p>
              <p>Always pair each <code className="bg-muted px-1 rounded font-mono text-xs">RadioGroupItem</code> with a <code className="bg-muted px-1 rounded font-mono text-xs">Label</code>.</p>
            </DoItem>
            <DontItem>
              <p>Don't use RadioGroup for more than 5-7 options — use <strong>Select</strong> or <strong>Combobox</strong> instead.</p>
              <p>Don't use RadioGroup for on/off toggles — use <strong>Switch</strong> or <strong>Checkbox</strong>.</p>
            </DontItem>
          </div>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Arrow Up/Down</kbd> — Move selection between items.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Arrow Left/Right</kbd> — Move selection (horizontal layout).</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Tab</kbd> — Move focus to/from the radio group.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix RadioGroup — renders with <code className="bg-muted px-1 rounded font-mono">role="radiogroup"</code>.</li>
              <li>Arrow keys move selection between items (roving focus).</li>
              <li>Each item has <code className="bg-muted px-1 rounded font-mono">role="radio"</code> with <code className="bg-muted px-1 rounded font-mono">aria-checked</code>.</li>
              <li>Always pair with Label for each option.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section className="space-y-4 pt-3xl">
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

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Item Size", "16×16px", "—", "size-md"],
        ["State", "Default", "—", "border-border-strong bg-input"],
        ["State", "Checked", "—", "data-[state=checked]:border-primary bg-primary"],
        ["State", "Focus", "—", "focus-visible:ring-[3px] ring-ring"],
        ["State", "Error", "aria-invalid", "destructive border + ring-error"],
        ["State", "Disabled", "disabled", "opacity-50"],
        ["Indicator", "Circle", "—", "size-2.5 fill-primary-foreground"],
        ["Group Gap", "Gap sm", "—", "gap-sm"],
      ]} />
    </div>
  )
}

/* ================================================================
   Input OTP
   ================================================================ */

const inputOTPSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function InputOTPDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={inputOTPSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Forms</p>
        <h1 className="typo-heading-2">Input OTP</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Multi-cell one-time-password input. Built on <code className="text-xs bg-muted px-1 py-0.5 rounded">input-otp</code>.
        </p>
      </header>

      <Playground controls={[]} render={() => (
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
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add input-otp`}
        importCode={`import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>

        <h3 className="font-heading font-semibold text-lg">InputOTP</h3>
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
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">maxLength</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Total number of OTP slots (required).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">value</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Controlled OTP value.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">onChange</td><td className="px-4 py-3 font-mono text-muted-foreground">(value: string) =&gt; void</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Callback when OTP value changes.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">disabled</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Disables all input slots.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-heading font-semibold text-lg mt-6">InputOTPSlot</h3>
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
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">index</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Zero-based slot position (required).</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Slot border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Focus ring</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Input text color</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Verification</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Auto-focus the first input slot on mount for immediate entry.</p>
              <p>Auto-submit when all digits are filled for faster verification.</p>
            </DoItem>
            <DontItem>
              <p>Don't use OTP input for passwords — use a standard password field.</p>
              <p>Don't require more than 6 digits — longer codes increase error rates.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Arrow Left/Right</kbd> — Move between slots.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Backspace</kbd> — Clear current slot and move to previous.</li>
              <li><kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Ctrl+V</kbd> / <kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">Cmd+V</kbd> — Paste OTP code from clipboard.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on input-otp — renders as a single <code className="bg-muted px-1 rounded font-mono">input</code> element for screen readers.</li>
              <li>Paste support for OTP codes from clipboard.</li>
              <li>Arrow keys move between slots.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Cell Size", "32×32px", "—", "size-3xl"],
        ["Cell Border", "Shared borders", "—", "border-y border-r, first:border-l"],
        ["Cell Radius", "First/Last rounded", "—", "first:rounded-l-md last:rounded-r-md"],
        ["Active State", "Ring", "—", "ring-[3px] ring-ring"],
        ["Caret", "Blinking", "—", "animate-caret-blink duration-1000"],
        ["Separator", "Minus icon", "InputOTPSeparator", "Minus icon between groups"],
        ["Gap", "Between cells", "—", "gap-xs"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Input</p>
              <p className="text-muted-foreground mt-0.5">Standard text input for general purpose.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Spinner
   ================================================================ */

const spinnerSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function SpinnerDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={spinnerSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Data Display</p>
        <h1 className="typo-heading-2">Spinner</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Animated loading indicator. Three sizes: sm (16px), default (24px), lg (32px).
        </p>
      </header>

      {/* Interactive playground */}
      <Playground
        controls={[
          { type: "select", label: "Size", prop: "size", defaultValue: "default", options: [
            { label: "Small (16px)", value: "sm" },
            { label: "Default (24px)", value: "default" },
            { label: "Large (32px)", value: "lg" },
          ]},
          { type: "select", label: "Color", prop: "color", defaultValue: "", options: [
            { label: "Default", value: "" },
            { label: "Primary", value: "text-primary" },
            { label: "Destructive", value: "text-destructive" },
          ]},
        ]}
        render={(p) => <Spinner size={p.size} className={p.color || undefined} />}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add clsx tailwind-merge`}
        importCode={`import { Spinner } from "@/components/ui/spinner"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example
          title="Sizes"
          description="All three spinner sizes side by side."
          code={`<Spinner size="sm" />\n<Spinner />\n<Spinner size="lg" />`}
        >
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
        </Example>

        <Example
          title="Custom color"
          description="Override the color with a text utility class."
          code={`<Spinner className="text-primary" />`}
        >
          <Spinner className="text-primary" />
          <Spinner className="text-destructive" />
        </Example>

        <Example
          title="With text"
          description="Combine with a loading label for clarity."
          code={`<div className="flex items-center gap-2">\n  <Spinner size="sm" />\n  <span className="text-sm text-muted-foreground">Loading...</span>\n</div>`}
        >
          <div className="flex items-center gap-2">
            <Spinner size="sm" />
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
        </Example>

        <Example
          title="Inside button"
          description="Show a spinner inside a disabled button during async actions."
          code={`<Button disabled>\n  <Spinner size="sm" />\n  Saving...\n</Button>`}
        >
          <Button disabled>
            <Spinner size="sm" />
            Saving...
          </Button>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Spinner renders an SVG element. Supports all native SVG attributes in addition to the following:
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">size</td><td className="px-4 py-3 font-mono text-muted-foreground">"sm" | "default" | "lg"</td><td className="px-4 py-3 font-mono text-muted-foreground">"default"</td><td className="px-4 py-3 text-muted-foreground">Spinner diameter: sm (16px), default (24px), lg (32px).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes. Use text color utilities to change spinner color.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Spinner color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">animate-spin</td><td className="px-4 py-3 font-mono text-muted-foreground">CSS keyframe</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Rotation animation</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Loading</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Spinner for indeterminate loading states where progress can't be measured.</p>
              <p>Place the spinner near the content it represents (e.g., inside a button, next to a form).</p>
            </DoItem>
            <DontItem>
              <p>Don't use Spinner for determinate progress — use <strong>Progress</strong> bar instead.</p>
              <p>Don't show a spinner for operations under 300ms — the flash is more distracting than helpful.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Size", "Small (16px)", "size", '"sm" — size-md'],
        ["Size", "Default (24px)", "size", '"default" — size-xl'],
        ["Size", "Large (32px)", "size", '"lg" — size-2xl'],
        ["Animation", "Spin", "—", "animate-spin"],
        ["Color", "Muted foreground", "—", "text-muted-foreground"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Renders with <code className="bg-muted px-1 rounded font-mono">role="status"</code> and <code className="bg-muted px-1 rounded font-mono">aria-label="Loading"</code>.</li>
              <li>Screen readers announce "Loading" when the spinner appears.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
            <p className="text-muted-foreground">
              Spinner is a purely visual indicator — it has no keyboard interaction. Focus management should be handled by the parent component (e.g., a button that triggered the loading state).
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Skeleton</p>
              <p className="text-muted-foreground mt-0.5">Content placeholder with pulse animation.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Progress</p>
              <p className="text-muted-foreground mt-0.5">Determinate progress bar.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Hover Card
   ================================================================ */

const hoverCardSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function HoverCardDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={hoverCardSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Overlay & Feedback</p>
        <h1 className="typo-heading-2">Hover Card</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Rich preview card that appears on hover. Built on Radix HoverCard.
        </p>
      </header>

      <Playground controls={[]} render={() => (
        <HoverCard>
          <HoverCardTrigger asChild><Button variant="ghost">Hover me</Button></HoverCardTrigger>
          <HoverCardContent className="w-60">
            <p className="text-sm">This content appears when you hover over the trigger.</p>
          </HoverCardContent>
        </HoverCard>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-hover-card`}
        importCode={`import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example
          title="Basic hover card"
          description="Hover over the link to see a rich preview card."
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

        <Example
          title="With avatar"
          description="User profile preview with avatar on hover."
          code={`<HoverCard>\n  <HoverCardTrigger asChild>\n    <Button variant="ghost">@designer</Button>\n  </HoverCardTrigger>\n  <HoverCardContent className="w-72">\n    <div className="flex gap-3">\n      <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">D</div>\n      <div className="space-y-1">\n        <h4 className="text-sm font-semibold">Designer</h4>\n        <p className="text-xs text-muted-foreground">Design system engineer. Building components one token at a time.</p>\n      </div>\n    </div>\n  </HoverCardContent>\n</HoverCard>`}
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost">@designer</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">D</div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Designer</h4>
                  <p className="text-xs text-muted-foreground">Design system engineer. Building components one token at a time.</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-hover-card</code>.
          Supports all Radix HoverCard props.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="font-body font-semibold text-sm mb-2">HoverCard</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 font-mono text-primary">openDelay</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">700</td><td className="px-4 py-3 text-muted-foreground">Milliseconds before the hover card opens.</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-primary">closeDelay</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">300</td><td className="px-4 py-3 text-muted-foreground">Milliseconds before the hover card closes.</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-primary">open</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Controlled open state.</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-primary">onOpenChange</td><td className="px-4 py-3 font-mono text-muted-foreground">(open: boolean) =&gt; void</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Called when open state changes.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="font-body font-semibold text-sm mb-2">HoverCardContent</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-xs">
                <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 font-mono text-primary">align</td><td className="px-4 py-3 font-mono text-muted-foreground">"start" | "center" | "end"</td><td className="px-4 py-3 font-mono text-muted-foreground">"center"</td><td className="px-4 py-3 text-muted-foreground">Horizontal alignment relative to trigger.</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-primary">sideOffset</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">4</td><td className="px-4 py-3 text-muted-foreground">Distance from the trigger in pixels.</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes for the content panel.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Card background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Card border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-md</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Card shadow</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Content Preview</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use HoverCard for rich previews of linked content (user profiles, article summaries).</p>
              <p>Keep hover card content concise — it's a preview, not a full page.</p>
            </DoItem>
            <DontItem>
              <p>Don't put interactive elements (buttons, forms) inside HoverCard — use <strong>Popover</strong> instead.</p>
              <p>Don't rely on HoverCard for essential information — touch users can't hover.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Content Width", "256px", "—", "w-64"],
        ["Alignment", "Center (default)", "align", '"center"'],
        ["Side Offset", "4px", "sideOffset", "4"],
        ["Animation", "Open", "—", "zoom-in-95, fade-in-0"],
        ["Animation", "Close", "—", "zoom-out-95, fade-out-0"],
        ["Border", "Border", "—", "border border-border"],
        ["Shadow", "Medium", "—", "shadow-md"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Content appears on hover/focus — not for essential information.</li>
              <li>Touch devices may not trigger hover — provide alternative access.</li>
              <li>Content is portaled to avoid clipping.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>HoverCard opens when the trigger receives focus via <code className="bg-muted px-1 rounded font-mono">Tab</code>.</li>
              <li>Card dismisses when focus moves away from trigger and content.</li>
              <li>No additional keyboard shortcuts needed — Radix handles focus management.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Tooltip</p>
              <p className="text-muted-foreground mt-0.5">Simple text tooltip — use for brief descriptions.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Popover</p>
              <p className="text-muted-foreground mt-0.5">Click-triggered interactive floating content.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Aspect Ratio
   ================================================================ */

function AspectRatioPropsTable() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-sm mb-2">AspectRatio</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Prop</th><th className="px-4 py-3 font-semibold">Type</th><th className="px-4 py-3 font-semibold">Default</th><th className="px-4 py-3 font-semibold">Description</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">ratio</td><td className="px-4 py-3 font-mono text-muted-foreground">number</td><td className="px-4 py-3 font-mono text-muted-foreground">1</td><td className="px-4 py-3 text-muted-foreground">The desired width-to-height ratio (e.g., 16/9, 4/3, 1).</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">children</td><td className="px-4 py-3 font-mono text-muted-foreground">ReactNode</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Content to render inside the aspect ratio container.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">className</td><td className="px-4 py-3 font-mono text-muted-foreground">string</td><td className="px-4 py-3 font-mono text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Additional CSS classes applied to the container.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">asChild</td><td className="px-4 py-3 font-mono text-muted-foreground">boolean</td><td className="px-4 py-3 font-mono text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Merge props onto the child element instead of rendering a wrapper div.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function AspectRatioExploreBehavior() {
  const [ratio, setRatio] = useState("16 / 9")

  const ratioMap: Record<string, number> = {
    "16 / 9": 16 / 9,
    "4 / 3": 4 / 3,
    "1 / 1": 1,
    "21 / 9": 21 / 9,
    "3 / 4": 3 / 4,
    "9 / 16": 9 / 16,
  }

  const ratioLabel: Record<string, string> = {
    "16 / 9": "16:9",
    "4 / 3": "4:3",
    "1 / 1": "1:1",
    "21 / 9": "21:9",
    "3 / 4": "3:4",
    "9 / 16": "9:16",
  }

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-background">
      <div className="p-xl flex items-center justify-center min-h-[300px] bg-background">
        <div className="w-[320px]">
          <AspectRatio ratio={ratioMap[ratio]} className="bg-muted rounded-lg flex items-center justify-center border border-border">
            <div className="text-center">
              <p className="typo-paragraph-bold text-foreground">{ratioLabel[ratio]}</p>
              <p className="typo-paragraph-sm text-muted-foreground">
                {Math.round(320)}×{Math.round(320 / ratioMap[ratio])}px
              </p>
            </div>
          </AspectRatio>
        </div>
      </div>
      <div className="border-t border-border bg-muted/50 p-md flex flex-wrap items-center gap-md">
        <div className="flex items-center gap-xs">
          <label className="text-xs font-medium text-muted-foreground whitespace-nowrap">Ratio</label>
          <Select value={ratio} onValueChange={setRatio}>
            <SelectTrigger className="w-[140px] h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.keys(ratioMap).map((r) => (
                <SelectItem key={r} value={r} className="text-xs">{ratioLabel[r]} ({r})</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

const aspectRatioSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function AspectRatioDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={aspectRatioSections} />

      {/* ---- Header ---- */}
      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Layout</p>
        <h1 className="typo-heading-2">Aspect Ratio</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Constrains child content to a specified width-to-height ratio. Built on Radix Aspect Ratio primitive.
        </p>
      </header>

      {/* ---- Explore Behavior ---- */}
      <section id="explore-behavior" className="space-y-4">
        <h2 className="font-heading font-semibold text-xl">Explore Behavior</h2>
        <AspectRatioExploreBehavior />
      </section>

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-aspect-ratio`}
        importCode={`import { AspectRatio } from "@/components/ui/aspect-ratio"`}
      />

      {/* ---- Examples ---- */}
      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example
          title="16:9 Widescreen"
          description="Standard widescreen ratio for videos and hero images."
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
          title="1:1 Square"
          description="Perfect square for avatars, thumbnails, or profile images."
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
          title="4:3 Classic"
          description="Classic photo and older video format ratio."
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

        <Example
          title="With Image"
          description="Image fills the aspect ratio container using object-cover."
          code={`<div className="w-[300px]">\n  <AspectRatio ratio={16 / 9}>\n    <img\n      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"\n      alt="Photo by Drew Beamer"\n      className="size-full rounded-md object-cover"\n    />\n  </AspectRatio>\n</div>`}
        >
          <div className="w-[300px]">
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Photo by Drew Beamer"
                className="size-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-aspect-ratio</code>.
          Supports all Radix AspectRatio props.
        </p>
        <AspectRatioPropsTable />
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Aspect Ratio is a layout utility wrapper — it has no visual styling tokens of its own. The Radix primitive renders an unstyled container that constrains children to the given ratio. All visual styling (background, border, radius, etc.) should be applied to the child content.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead><tr className="bg-muted border-b border-border text-left"><th className="px-4 py-3 font-semibold">Element</th><th className="px-4 py-3 font-semibold">Token</th><th className="px-4 py-3 font-semibold">Notes</th></tr></thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary">Container</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">No visual tokens. Renders as unstyled <code className="bg-muted px-1 rounded font-mono">div</code> with padding-bottom for ratio.</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary">Child content</td><td className="px-4 py-3 text-muted-foreground">Apply via className</td><td className="px-4 py-3 text-muted-foreground">Use <code className="bg-muted px-1 rounded font-mono">size-full</code>, <code className="bg-muted px-1 rounded font-mono">object-cover</code>, <code className="bg-muted px-1 rounded font-mono">rounded-md</code> on child elements as needed.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Layout</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use AspectRatio to maintain consistent proportions for images and videos.</p>
              <p>Common ratios: 16/9 for video, 1/1 for avatars, 4/3 for photos.</p>
            </DoItem>
            <DontItem>
              <p>Don't use AspectRatio for text content — it's designed for media.</p>
              <p>Don't override the aspect ratio with fixed height/width on the child element.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" nodeId="842:52053" rows={[
        ["Ratio", "16:9 (Widescreen)", "ratio", "{16 / 9}"],
        ["Ratio", "4:3 (Classic)", "ratio", "{4 / 3}"],
        ["Ratio", "1:1 (Square)", "ratio", "{1}"],
        ["Ratio", "21:9 (Ultrawide)", "ratio", "{21 / 9}"],
        ["Container", "Radix primitive", "AspectRatio", "Constrains child to width/height ratio"],
        ["Child Content", "Image / Video / Placeholder", "children", "size-full object-cover for images"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">ARIA attributes</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>
                AspectRatio is a layout utility — it does not add ARIA roles or attributes.
              </li>
              <li>
                Ensure images inside include descriptive{" "}
                <code className="bg-muted px-1 rounded font-mono">alt</code>{" "}
                text for screen readers.
              </li>
              <li>
                For decorative images, use{" "}
                <code className="bg-muted px-1 rounded font-mono">alt=""</code>{" "}
                with{" "}
                <code className="bg-muted px-1 rounded font-mono">aria-hidden="true"</code>.
              </li>
              <li>
                Video content should include captions and a text alternative.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Responsive behavior</h3>
            <p className="text-muted-foreground">
              AspectRatio maintains the specified ratio at any container width. Content scales
              proportionally as the viewport changes, preventing layout shift and content distortion.
            </p>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard support</h3>
            <p className="text-muted-foreground">
              AspectRatio is a presentational layout wrapper — it has no keyboard interaction. Any focusable content inside (links, buttons, videos) retains its own keyboard behavior.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Avatar</p>
              <p className="text-muted-foreground mt-0.5">
                Uses 1:1 aspect ratio internally for profile images. Prefer Avatar for user photos.
              </p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Card</p>
              <p className="text-muted-foreground mt-0.5">
                Combine AspectRatio inside Card for media cards with consistent image proportions.
              </p>
            </div>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Skeleton</p>
              <p className="text-muted-foreground mt-0.5">
                Use Skeleton inside AspectRatio as a loading placeholder that maintains the correct ratio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Context Menu
   ================================================================ */

const contextMenuSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ContextMenuDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={contextMenuSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Context Menu</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Right-click context menu. Built on Radix Context Menu.
        </p>
      </header>

      <Playground controls={[]} render={() => (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[120px] w-[250px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )} />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-context-menu`}
        importCode={`import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from "@/components/ui/context-menu"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example
          title="Basic context menu"
          description="Right-click the area below to open the menu. Includes sub-menus and shortcuts."
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
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>
        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Usage</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use ContextMenu for secondary actions that complement visible controls.</p>
              <p>Mirror common actions users expect from right-click menus.</p>
            </DoItem>
            <DontItem>
              <p>Don't put essential actions only in the context menu — they're not discoverable on touch devices.</p>
              <p>Don't use ContextMenu for primary navigation or workflows.</p>
            </DontItem>
          </div>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Menu background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Menu border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Item hover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-md</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Menu shadow</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-4 font-semibold">Key</th>
                    <th className="pb-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Arrow Up / Down</td><td className="py-2">Navigate between menu items</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Enter</td><td className="py-2">Select the focused item</td></tr>
                  <tr className="border-b border-border last:border-0"><td className="py-2 pr-4 font-mono">Escape</td><td className="py-2">Close the menu</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix ContextMenu — triggered by right-click or long-press.</li>
              <li>Arrow keys navigate items, Enter/Space activates.</li>
              <li>Always provide alternative access to context menu actions (e.g., toolbar buttons).</li>
            </ul>
          </div>
        </div>
      </section>

                  {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Trigger", "Right-click area", "ContextMenuTrigger", "Any element as trigger"],
        ["Content Min Width", "8rem", "—", "min-w-[8rem]"],
        ["Item Padding", "px-xs py-2xs", "—", "px-xs py-2xs text-sm"],
        ["Item State", "Focus", "—", "focus:bg-muted focus:text-foreground"],
        ["Item State", "Disabled", "disabled", "data-[disabled]:opacity-50"],
        ["Sub-menu", "Trigger", "ContextMenuSubTrigger", "ChevronRight icon ml-auto"],
        ["Checkbox Item", "Checked", "ContextMenuCheckboxItem", "Check icon indicator"],
        ["Radio Item", "Selected", "ContextMenuRadioItem", "Circle icon indicator"],
        ["Shortcut", "Right-aligned", "ContextMenuShortcut", "ml-auto text-xs"],
        ["Icon Size", "16px", "—", "[&_svg]:size-md"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">DropdownMenu</p>
              <p className="text-muted-foreground mt-0.5">Click-triggered dropdown menu.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Menubar</p>
              <p className="text-muted-foreground mt-0.5">Horizontal menu bar.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Sidebar
   ================================================================ */

const navigationMenuSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function NavigationMenuDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={navigationMenuSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Navigation Menu</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Top-level site navigation with animated dropdown content panels.
          Built on Radix Navigation Menu for full keyboard and screen reader support.
        </p>
      </header>

      <Playground
        controls={[
          { type: "select", label: "Viewport", prop: "viewport", defaultValue: "true", options: [
            { label: "With viewport", value: "true" },
            { label: "Without viewport", value: "false" },
          ]},
        ]}
        render={() => (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="#">
                          <div className="mb-2 mt-4 typo-paragraph-bold">SprouX DS</div>
                          <p className="typo-paragraph-mini text-muted-foreground">Beautifully designed components built with Radix UI and Tailwind CSS.</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted" href="#">
                          <div className="typo-paragraph-sm-bold">Introduction</div>
                          <p className="typo-paragraph-mini text-muted-foreground">Re-usable components built using Radix UI and Tailwind CSS.</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted" href="#">
                          <div className="typo-paragraph-sm-bold">Installation</div>
                          <p className="typo-paragraph-mini text-muted-foreground">How to install dependencies and structure your app.</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {[
                      { title: "Alert Dialog", desc: "A modal dialog that interrupts the user." },
                      { title: "Hover Card", desc: "For sighted users to preview content." },
                      { title: "Progress", desc: "Displays an indicator of completion." },
                      { title: "Tabs", desc: "Organize content into tabbed panels." },
                    ].map(({ title, desc }) => (
                      <li key={title}>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted" href="#">
                            <div className="typo-paragraph-sm-bold">{title}</div>
                            <p className="typo-paragraph-mini text-muted-foreground">{desc}</p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-navigation-menu`}
        importCode={`import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example
          title="With dropdown content"
          description="Navigation items with rich dropdown panels containing links."
          code={`<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>\n      <NavigationMenuContent>\n        <ul className="grid gap-3 p-4 w-[400px]">\n          <li>\n            <NavigationMenuLink asChild>\n              <a href="/docs">Introduction</a>\n            </NavigationMenuLink>\n          </li>\n        </ul>\n      </NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted" href="#">
                          <div className="typo-paragraph-sm-bold">Introduction</div>
                          <p className="typo-paragraph-mini text-muted-foreground">Re-usable components for your applications.</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>

        <Example
          title="Simple link"
          description="A plain link styled as a navigation trigger using navigationMenuTriggerStyle."
          code={`<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">\n        Documentation\n      </NavigationMenuLink>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-navigation-menu</code>.
          Supports all Radix NavigationMenu props.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Component</th>
                <th className="px-4 py-3 font-semibold">Prop</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Default</th>
                <th className="px-4 py-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">NavigationMenu</td><td className="px-4 py-3 font-mono">value</td><td className="px-4 py-3 text-muted-foreground">string</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Controlled active item value</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">NavigationMenu</td><td className="px-4 py-3 font-mono">onValueChange</td><td className="px-4 py-3 text-muted-foreground">{"(value: string) => void"}</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Callback when active value changes</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">NavigationMenuTrigger</td><td className="px-4 py-3 font-mono">children</td><td className="px-4 py-3 text-muted-foreground">ReactNode</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Trigger label text</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">NavigationMenuContent</td><td className="px-4 py-3 font-mono">children</td><td className="px-4 py-3 text-muted-foreground">ReactNode</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Dropdown content panel</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">NavigationMenuLink</td><td className="px-4 py-3 font-mono">asChild</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Merge props onto child element</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">NavigationMenuLink</td><td className="px-4 py-3 font-mono">active</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Marks the link as currently active</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--background</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Trigger background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Hover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#252522</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#252522" }} /></td><td className="px-4 py-3 text-muted-foreground">Active text color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">#afafab</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#afafab" }} /></td><td className="px-4 py-3 text-muted-foreground">Default trigger text</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Viewport/content background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Viewport border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Focus ring (3px)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Navigation</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use NavigationMenu for primary site navigation with dropdown menus.</p>
              <p>Keep top-level items to 5-7 for scannability.</p>
            </DoItem>
            <DontItem>
              <p>Don't deeply nest sub-menus — flatten the hierarchy or use a different pattern.</p>
              <p>Don't use NavigationMenu for in-page section navigation — use <strong>Tabs</strong> instead.</p>
            </DontItem>
          </div>
        </div>
      </section>

      <FigmaMapping id="figma-mapping" rows={[
        ["—", "—", "viewport", "true | false (controls viewport rendering)"],
        ["Trigger", "Ghost Button", "NavigationMenuTrigger", "Button with ChevronDown icon"],
        ["Content", "Dropdown Panel", "NavigationMenuContent", "Animated dropdown content"],
        ["Link", "Text Link", "NavigationMenuLink", "Navigation link with hover states"],
        ["Indicator", "Arrow", "NavigationMenuIndicator", "Visual arrow pointing to active item"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-4 font-semibold">Key</th>
                    <th className="pb-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Arrow Left / Right</td><td className="py-2">Navigate between trigger items</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Enter / Space</td><td className="py-2">Open or close dropdown content</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Tab</td><td className="py-2">Move focus between triggers</td></tr>
                  <tr className="border-b border-border last:border-0"><td className="py-2 pr-4 font-mono">Escape</td><td className="py-2">Close the open panel</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix NavigationMenu — full keyboard support.</li>
              <li>Tab moves between trigger items, Enter/Space opens content.</li>
              <li>Arrow keys navigate within open content panel.</li>
              <li>Escape closes the open panel.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Menubar</p>
              <p className="text-muted-foreground mt-0.5">Horizontal bar with dropdown menus for app-level actions.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Breadcrumb</p>
              <p className="text-muted-foreground mt-0.5">Hierarchical path navigation.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Tabs</p>
              <p className="text-muted-foreground mt-0.5">Content panel switching.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

const menubarSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function MenubarDocs() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)
  const [person, setPerson] = useState("pedro")

  return (
    <div className="space-y-12">
      <TableOfContents sections={menubarSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Navigation</p>
        <h1 className="typo-heading-2">Menubar</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A horizontal menu bar with dropdown menus, checkbox items, radio groups, and sub-menus.
          Follows desktop application menu patterns (File, Edit, View).
        </p>
      </header>

      <Playground
        controls={[]}
        render={() => (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Print... <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>Show Bookmarks <MenubarShortcut>⌘⇧B</MenubarShortcut></MenubarCheckboxItem>
                <MenubarCheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>Show Full URLs</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>Reload <MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
                <MenubarItem inset disabled>Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value={person} onValueChange={setPerson}>
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="pedro">Pedro</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add @radix-ui/react-menubar`}
        importCode={`import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from "@/components/ui/menubar"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example
          title="Basic menubar"
          description="A standard menubar with File, Edit, View menus featuring shortcuts, sub-menus, checkbox and radio items."
          code={`<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>File</MenubarTrigger>\n    <MenubarContent>\n      <MenubarItem>\n        New Tab <MenubarShortcut>⌘T</MenubarShortcut>\n      </MenubarItem>\n      <MenubarItem>\n        New Window <MenubarShortcut>⌘N</MenubarShortcut>\n      </MenubarItem>\n      <MenubarSeparator />\n      <MenubarSub>\n        <MenubarSubTrigger>Share</MenubarSubTrigger>\n        <MenubarSubContent>\n          <MenubarItem>Email link</MenubarItem>\n          <MenubarItem>Messages</MenubarItem>\n        </MenubarSubContent>\n      </MenubarSub>\n      <MenubarSeparator />\n      <MenubarItem>\n        Print... <MenubarShortcut>⌘P</MenubarShortcut>\n      </MenubarItem>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>`}
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Print... <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@radix-ui/react-menubar</code>.
          Supports all Radix Menubar props.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Component</th>
                <th className="px-4 py-3 font-semibold">Prop</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Default</th>
                <th className="px-4 py-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">MenubarTrigger</td><td className="px-4 py-3 font-mono">children</td><td className="px-4 py-3 text-muted-foreground">ReactNode</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Trigger label text</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">MenubarItem</td><td className="px-4 py-3 font-mono">inset</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Adds left padding for alignment with checkbox/radio items</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">MenubarItem</td><td className="px-4 py-3 font-mono">disabled</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Prevents interaction and dims the item</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">MenubarCheckboxItem</td><td className="px-4 py-3 font-mono">checked</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Controlled checked state</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">MenubarRadioGroup</td><td className="px-4 py-3 font-mono">value</td><td className="px-4 py-3 text-muted-foreground">string</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Controlled selected radio value</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">MenubarSubTrigger</td><td className="px-4 py-3 font-mono">inset</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Adds left padding for alignment</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--background</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Bar background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Bar & menu border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--card</td><td className="px-4 py-3 font-mono text-muted-foreground">#ffffff</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#ffffff" }} /></td><td className="px-4 py-3 text-muted-foreground">Dropdown background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--muted</td><td className="px-4 py-3 font-mono text-muted-foreground">#f7f7f6</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#f7f7f6" }} /></td><td className="px-4 py-3 text-muted-foreground">Item hover background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-xs</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Bar shadow</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--shadow-md</td><td className="px-4 py-3 font-mono text-muted-foreground">elevation</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Dropdown shadow</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Application Menus</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Menubar for desktop-style application menus (File, Edit, View).</p>
              <p>Show keyboard shortcuts next to menu items for power users.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Menubar for website navigation — use <strong>NavigationMenu</strong> instead.</p>
              <p>Don't put more than 7 top-level menu items — group related items into sub-menus.</p>
            </DontItem>
          </div>
        </div>
      </section>

      <FigmaMapping id="figma-mapping" rows={[
        ["—", "—", "—", "No Figma component — code-only, follows DropdownMenu pattern"],
        ["Root", "Bar container", "Menubar", "h-9, border, rounded-md, shadow-xs"],
        ["Trigger", "Menu name", "MenubarTrigger", "Font-semibold, rounded-sm"],
        ["Content", "Dropdown", "MenubarContent", "border, bg-card, shadow-md, animated"],
        ["Item", "Menu item", "MenubarItem", "inset prop for indentation"],
        ["Shortcut", "Kbd hint", "MenubarShortcut", "Right-aligned muted text"],
        ["Separator", "Divider", "MenubarSeparator", "h-px bg-border"],
        ["CheckboxItem", "Toggle item", "MenubarCheckboxItem", "Check icon indicator"],
        ["RadioItem", "Radio item", "MenubarRadioItem", "Circle icon indicator"],
        ["Sub", "Sub-menu", "MenubarSub + SubTrigger + SubContent", "Nested dropdown"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-4 font-semibold">Key</th>
                    <th className="pb-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Arrow Left / Right</td><td className="py-2">Navigate between menus</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Arrow Up / Down</td><td className="py-2">Navigate between menu items</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Enter</td><td className="py-2">Select the focused item</td></tr>
                  <tr className="border-b border-border last:border-0"><td className="py-2 pr-4 font-mono">Escape</td><td className="py-2">Close the open menu</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Built on Radix Menubar — full keyboard navigation.</li>
              <li>Arrow Left/Right moves between menus, Up/Down navigates items.</li>
              <li>Enter/Space activates items, Escape closes menus.</li>
              <li>Shortcuts are announced by screen readers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">NavigationMenu</p>
              <p className="text-muted-foreground mt-0.5">Site-level navigation with content panels.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">DropdownMenu</p>
              <p className="text-muted-foreground mt-0.5">Single dropdown menu.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

const resizableSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function ResizableDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={resizableSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Layout</p>
        <h1 className="typo-heading-2">Resizable</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Resizable panel groups with draggable handles. Supports horizontal and vertical layouts
          with optional grip indicators. Built on react-resizable-panels.
        </p>
      </header>

      <Playground
        controls={[
          { type: "select", label: "Orientation", prop: "orientation", defaultValue: "horizontal", options: [
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ]},
          { type: "switch", label: "With handle", prop: "withHandle", defaultValue: true },
        ]}
        render={(p) => (
          <div className="w-full max-w-md">
            <ResizablePanelGroup
              orientation={p.orientation as "horizontal" | "vertical"}
              className={`rounded-lg border border-border ${p.orientation === "vertical" ? "min-h-[200px]" : ""}`}
            >
              <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6">
                  <span className="typo-paragraph-sm-bold">One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle={p.withHandle as boolean} />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6">
                  <span className="typo-paragraph-sm-bold">Two</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add react-resizable-panels`}
        importCode={`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"`}
      />

      <section id="examples" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Examples</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Example
          title="Horizontal"
          description="Two resizable panels side by side with a drag handle."
          code={`<ResizablePanelGroup orientation="horizontal" className="rounded-lg border">\n  <ResizablePanel defaultSize={50}>\n    <div className="flex h-[200px] items-center justify-center p-6">\n      <span className="font-semibold">One</span>\n    </div>\n  </ResizablePanel>\n  <ResizableHandle withHandle />\n  <ResizablePanel defaultSize={50}>\n    <div className="flex h-[200px] items-center justify-center p-6">\n      <span className="font-semibold">Two</span>\n    </div>\n  </ResizablePanel>\n</ResizablePanelGroup>`}
        >
          <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border border-border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="typo-paragraph-sm-bold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="typo-paragraph-sm-bold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>

        <Example
          title="Vertical"
          description="Stacked panels with vertical resizing."
          code={`<ResizablePanelGroup orientation="vertical" className="min-h-[200px] rounded-lg border">\n  <ResizablePanel defaultSize={25}>\n    <div className="flex h-full items-center justify-center p-6">\n      <span className="font-semibold">Header</span>\n    </div>\n  </ResizablePanel>\n  <ResizableHandle withHandle />\n  <ResizablePanel defaultSize={75}>\n    <div className="flex h-full items-center justify-center p-6">\n      <span className="font-semibold">Content</span>\n    </div>\n  </ResizablePanel>\n</ResizablePanelGroup>`}
        >
          <ResizablePanelGroup orientation="vertical" className="max-w-md min-h-[200px] rounded-lg border border-border">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="typo-paragraph-sm-bold">Header</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="typo-paragraph-sm-bold">Content</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>

        <Example
          title="Three panels"
          description="Three panels with handles between each."
          code={`<ResizablePanelGroup orientation="horizontal" className="rounded-lg border">\n  <ResizablePanel defaultSize={25}>\n    <div className="flex h-[200px] items-center justify-center p-6">\n      <span className="font-semibold">Sidebar</span>\n    </div>\n  </ResizablePanel>\n  <ResizableHandle />\n  <ResizablePanel defaultSize={50}>\n    <div className="flex h-[200px] items-center justify-center p-6">\n      <span className="font-semibold">Content</span>\n    </div>\n  </ResizablePanel>\n  <ResizableHandle />\n  <ResizablePanel defaultSize={25}>\n    <div className="flex h-[200px] items-center justify-center p-6">\n      <span className="font-semibold">Details</span>\n    </div>\n  </ResizablePanel>\n</ResizablePanelGroup>`}
        >
          <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border border-border">
            <ResizablePanel defaultSize={25}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="typo-paragraph-sm-bold">Sidebar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="typo-paragraph-sm-bold">Content</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="typo-paragraph-sm-bold">Details</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Example>
        </div>
      </section>

      {/* ---- Props ---- */}
      <section id="props" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Props</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          Built on{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">react-resizable-panels</code>.
          Supports all react-resizable-panels props.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-muted border-b border-border text-left">
                <th className="px-4 py-3 font-semibold">Component</th>
                <th className="px-4 py-3 font-semibold">Prop</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Default</th>
                <th className="px-4 py-3 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">ResizablePanelGroup</td><td className="px-4 py-3 font-mono">orientation</td><td className="px-4 py-3 text-muted-foreground">"horizontal" | "vertical"</td><td className="px-4 py-3 text-muted-foreground">"horizontal"</td><td className="px-4 py-3 text-muted-foreground">Layout direction of the panel group</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">ResizablePanel</td><td className="px-4 py-3 font-mono">defaultSize</td><td className="px-4 py-3 text-muted-foreground">number</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Initial size as percentage (0-100)</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">ResizablePanel</td><td className="px-4 py-3 font-mono">minSize</td><td className="px-4 py-3 text-muted-foreground">number</td><td className="px-4 py-3 text-muted-foreground">10</td><td className="px-4 py-3 text-muted-foreground">Minimum panel size as percentage</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">ResizablePanel</td><td className="px-4 py-3 font-mono">maxSize</td><td className="px-4 py-3 text-muted-foreground">number</td><td className="px-4 py-3 text-muted-foreground">—</td><td className="px-4 py-3 text-muted-foreground">Maximum panel size as percentage</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">ResizablePanel</td><td className="px-4 py-3 font-mono">collapsible</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Allow panel to collapse fully</td></tr>
              <tr><td className="px-4 py-3 font-mono text-primary font-semibold whitespace-nowrap">ResizableHandle</td><td className="px-4 py-3 font-mono">withHandle</td><td className="px-4 py-3 text-muted-foreground">boolean</td><td className="px-4 py-3 text-muted-foreground">false</td><td className="px-4 py-3 text-muted-foreground">Show visible grip indicator on handle</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--border</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Handle line color</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--ring</td><td className="px-4 py-3 font-mono text-muted-foreground">#e9e9e7</td><td className="px-4 py-3"><div className="size-5 rounded border border-border" style={{ backgroundColor: "#e9e9e7" }} /></td><td className="px-4 py-3 text-muted-foreground">Handle focus ring</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Best Practices ---- */}
      <section id="best-practices" className="space-y-6 pt-xl border-t border-border">
        <h2 className="font-heading font-semibold text-xl">Best Practices</h2>

        <div className="space-y-4">
          <h3 className="font-body font-semibold text-sm">Layout</h3>
          <div className="flex gap-4">
            <DoItem>
              <p>Use Resizable for split-pane layouts where users need to adjust panel sizes.</p>
              <p>Set <code className="bg-muted px-1 rounded font-mono text-xs">minSize</code> / <code className="bg-muted px-1 rounded font-mono text-xs">maxSize</code> to prevent panels from collapsing completely.</p>
            </DoItem>
            <DontItem>
              <p>Don't use Resizable for simple responsive layouts — use CSS Grid or Flexbox.</p>
              <p>Don't use more than 3-4 panels — it becomes hard to manage on smaller screens.</p>
            </DontItem>
          </div>
        </div>
      </section>

      <FigmaMapping id="figma-mapping" rows={[
        ["Orientation", "Vertical", "direction", '"vertical"'],
        ["Orientation", "Horizontal", "direction", '"horizontal"'],
        ["Handle", "Divider line", "ResizableHandle", "bg-border, 1px"],
        ["Handle", "Grip dots", "withHandle", "true — shows GripVertical icon"],
        ["Panel", "Content area", "ResizablePanel", "defaultSize (percentage)"],
      ]} />

      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Keyboard Support</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-2 pr-4 font-semibold">Key</th>
                    <th className="pb-2 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Tab</td><td className="py-2">Focus the resize handle</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Arrow Left / Right</td><td className="py-2">Resize horizontal panels</td></tr>
                  <tr className="border-b border-border"><td className="py-2 pr-4 font-mono">Arrow Up / Down</td><td className="py-2">Resize vertical panels</td></tr>
                  <tr className="border-b border-border last:border-0"><td className="py-2 pr-4 font-mono">Home / End</td><td className="py-2">Collapse or expand panel to min/max</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>Handles are keyboard focusable — Tab to focus, Arrow keys to resize.</li>
              <li>Use <code className="bg-muted px-1 rounded font-mono">withHandle</code> prop for a visible drag indicator.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Separator</p>
              <p className="text-muted-foreground mt-0.5">Static divider when resize is not needed.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

const sidebarSections: TocSection[] = [
  { id: "explore-behavior", label: "Explore Behavior" },
  { id: "installation", label: "Installation" },
  { id: "examples", label: "Examples" },
  { id: "props", label: "Props" },
  { id: "design-tokens", label: "Design Tokens" },
  { id: "best-practices", label: "Best Practices" },
  { id: "figma-mapping", label: "Figma Mapping" },
  { id: "accessibility", label: "Accessibility" },
  { id: "related", label: "Related Components" },
]

function SidebarDocs() {
  return (
    <div className="space-y-12">
      <TableOfContents sections={sidebarSections} />

      <header className="space-y-md pb-3xl">
        <p className="text-xs text-muted-foreground font-mono tracking-wide uppercase">Components / Layout</p>
        <h1 className="typo-heading-2">Sidebar</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          Application sidebar navigation. Supports collapsible, icon-only, and mobile-responsive modes.
          The most complex layout component in the design system.
        </p>
      </header>

      <Playground
        controls={[
          { type: "select", label: "Side", prop: "side", defaultValue: "left", options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ]},
          { type: "select", label: "Variant", prop: "variant", defaultValue: "sidebar", options: [
            { label: "Sidebar", value: "sidebar" },
            { label: "Floating", value: "floating" },
            { label: "Inset", value: "inset" },
          ]},
        ]}
        render={(p) => (
          <div className="text-sm text-muted-foreground italic">
            Sidebar preview requires full page context. See examples below.
            <br />Current: side={p.side}, variant={p.variant}
          </div>
        )}
      />

      {/* ---- Installation ---- */}
      <InstallationSection
        deps={`pnpm add clsx tailwind-merge lucide-react`}
        importCode={`import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"`}
      />

      <section className="space-y-4 pt-3xl">
        <h2 className="typo-paragraph-bold">Examples</h2>

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

      <section className="space-y-4 pt-3xl">
        <h2 className="typo-paragraph-bold">Features</h2>
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


      {/* ---- Design Tokens ---- */}
      <section id="design-tokens" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Design Tokens</h2>
        <p className="typo-paragraph-sm text-muted-foreground">
          These tokens are defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> and sourced from the Figma file <strong>[SprouX - DS] Foundation & Component</strong>.
        </p>
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
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--sidebar</td><td className="px-4 py-3 font-mono text-muted-foreground">var(--background)</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Sidebar background</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--sidebar-foreground</td><td className="px-4 py-3 font-mono text-muted-foreground">var(--foreground)</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Sidebar text</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--sidebar-border</td><td className="px-4 py-3 font-mono text-muted-foreground">var(--border)</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Sidebar border</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--sidebar-ring</td><td className="px-4 py-3 font-mono text-muted-foreground">var(--ring)</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Focus ring</td></tr>
              <tr className="border-b border-border last:border-0"><td className="px-4 py-3 font-mono font-semibold whitespace-nowrap">--sidebar-muted</td><td className="px-4 py-3 font-mono text-muted-foreground">var(--muted)</td><td className="px-4 py-3"></td><td className="px-4 py-3 text-muted-foreground">Hover background</td></tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* ---- Accessibility ---- */}
      <section id="accessibility" className="space-y-4 pt-3xl">
        <h2 className="font-heading font-semibold text-xl">Accessibility</h2>
        <div className="space-y-3 typo-paragraph-sm text-muted-foreground">
          <div className="rounded-xl border border-border p-5 space-y-3 text-xs">
            <h3 className="font-body font-semibold text-sm text-foreground">Labeling</h3>
            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground">
              <li>SidebarTrigger toggles sidebar visibility.</li>
              <li>Menu items are keyboard navigable — Tab moves between items.</li>
              <li>Collapsible sidebar uses <code className="bg-muted px-1 rounded font-mono">aria-expanded</code> on the trigger.</li>
            </ul>
          </div>
        </div>
      </section>

                  {/* ---- Figma Mapping ---- */}
      <FigmaMapping id="figma-mapping" rows={[
        ["Width", "Expanded", "—", "16rem (256px)"],
        ["Width", "Icon only", "—", "3rem (48px)"],
        ["Width", "Mobile", "—", "18rem (288px)"],
        ["Side", "Left (default)", "side", '"left"'],
        ["Side", "Right", "side", '"right"'],
        ["Variant", "Sidebar", "variant", '"sidebar" — fixed'],
        ["Variant", "Floating", "variant", '"floating" — rounded, shadow'],
        ["Variant", "Inset", "variant", '"inset" — inside content'],
        ["Collapsible", "Offcanvas", "collapsible", '"offcanvas" — slides away'],
        ["Collapsible", "Icon", "collapsible", '"icon" — shrinks to icons'],
        ["Collapsible", "None", "collapsible", '"none" — always expanded'],
        ["Keyboard", "Toggle", "—", "⌘B / Ctrl+B"],
        ["Mobile", "Sheet overlay", "—", "Sheet on < 768px"],
      ]} />

      {/* ---- Related Components ---- */}
      <section id="related" className="space-y-4 pb-12">
        <h2 className="font-heading font-semibold text-xl">Related Components</h2>
        <div className="rounded-xl border border-border divide-y divide-border text-xs">
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">NavigationMenu</p>
              <p className="text-muted-foreground mt-0.5">Top-level horizontal navigation.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
          <div className="px-5 py-3.5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-foreground">Sheet</p>
              <p className="text-muted-foreground mt-0.5">Overlay panel for mobile sidebar.</p>
            </div>
            <span className="text-muted-foreground text-[10px] font-mono bg-muted px-2 py-0.5 rounded">Available</span>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ================================================================
   Navigation & Layout
   ================================================================ */

const foundations = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "border-radius", label: "Border Radius" },
  { id: "icons", label: "Icons" },
  { id: "illustrations", label: "Illustrations" },
] as const

const components = [
  { id: "accordion", label: "Accordion" },
  { id: "alert", label: "Alert" },
  { id: "alert-dialog", label: "Alert Dialog" },
  { id: "aspect-ratio", label: "Aspect Ratio" },
  { id: "avatar", label: "Avatar" },
  { id: "badge", label: "Badge" },
  { id: "breadcrumb", label: "Breadcrumb" },
  { id: "button", label: "Button" },
  { id: "calendar", label: "Calendar" },
  { id: "card", label: "Card" },
  { id: "checkbox", label: "Checkbox" },
  { id: "collapsible", label: "Collapsible" },
  { id: "combobox", label: "Combobox" },
  { id: "command", label: "Command" },
  { id: "context-menu", label: "Context Menu" },
  { id: "date-picker", label: "Date Picker" },
  { id: "menubar", label: "Menubar" },
  { id: "navigation-menu", label: "Navigation Menu" },
  { id: "dialog", label: "Dialog" },
  { id: "drawer", label: "Drawer" },
  { id: "dropdown-menu", label: "Dropdown Menu" },
  { id: "hover-card", label: "Hover Card" },
  { id: "input", label: "Input" },
  { id: "input-otp", label: "Input OTP" },
  { id: "label", label: "Label" },
  { id: "pagination", label: "Pagination" },
  { id: "popover", label: "Popover" },
  { id: "progress", label: "Progress" },
  { id: "radio-group", label: "Radio Group" },
  { id: "resizable", label: "Resizable" },
  { id: "scroll-area", label: "Scroll Area" },
  { id: "select", label: "Select" },
  { id: "separator", label: "Separator" },
  { id: "sheet", label: "Sheet" },
  { id: "sidebar", label: "Sidebar" },
  { id: "skeleton", label: "Skeleton" },
  { id: "slider", label: "Slider" },
  { id: "spinner", label: "Spinner" },
  { id: "switch", label: "Switch" },
  { id: "table", label: "Table" },
  { id: "tabs", label: "Tabs" },
  { id: "textarea", label: "Textarea" },
  { id: "toast", label: "Toast (Sonner)" },
  { id: "toggle", label: "Toggle" },
  { id: "toggle-group", label: "Toggle Group" },
  { id: "tooltip", label: "Tooltip" },
] as const

type ComponentId = (typeof foundations)[number]["id"] | (typeof components)[number]["id"]

/* ================================================================
   Components Grid (Home page)
   ================================================================ */

function ComponentsGrid({ onNavigate }: { onNavigate: (id: ComponentId) => void }) {
  const renderGrid = (items: ReadonlyArray<{ id: ComponentId; label: string }>) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-md">
      {items.map(c => (
        <button
          key={c.id}
          onClick={() => onNavigate(c.id)}
          className="group text-left rounded-xl border border-border overflow-hidden bg-background hover:shadow-md transition-all"
        >
          <div className="h-36 bg-muted/50 flex items-center justify-center">
            <span className="text-2xl font-heading font-bold text-muted-foreground/30 group-hover:scale-110 transition-transform">
              {c.label.charAt(0)}
            </span>
          </div>
          <div className="p-md border-t border-border">
            <p className="font-medium text-sm">{c.label}</p>
          </div>
        </button>
      ))}
    </div>
  )

  return (
    <div className="space-y-3xl">
      <div className="space-y-sm">
        <h1 className="typo-heading-2">SprouX Design System</h1>
        <p className="typo-paragraph text-muted-foreground max-w-3xl">
          A comprehensive design system with foundations and 43 components built with
          React 19, Tailwind CSS v4, Radix UI primitives, and more.
        </p>
      </div>

      <div className="space-y-lg">
        <h2 className="typo-heading-4">Foundations</h2>
        {renderGrid(foundations)}
      </div>

      <div className="space-y-lg">
        <h2 className="typo-heading-4">Components</h2>
        {renderGrid(components)}
      </div>
    </div>
  )
}

/* ================================================================
   App Shell
   ================================================================ */

function App() {
  const [active, setActiveRaw] = useState<ComponentId | null>(() => {
    const hash = window.location.hash.slice(1)
    return hash ? (hash as ComponentId) : null
  })
  const setActive = (id: ComponentId | null) => {
    setActiveRaw(id)
    window.location.hash = id ? id : ""
  }
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    const stored = localStorage.getItem("sproux-dark-mode")
    if (stored !== null) return stored === "true"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })
  const [searchOpen, setSearchOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("sproux-dark-mode", String(dark))
  }, [dark])

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.slice(1)
      setActiveRaw(hash ? (hash as ComponentId) : null)
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  useEffect(() => {
    const main = document.getElementById("main-content")
    if (!main) return
    const onScroll = () => setShowScrollTop(main.scrollTop > 400)
    main.addEventListener("scroll", onScroll)
    return () => main.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.getElementById("main-content")?.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })
  }, [active])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ---- Top Navigation Bar ---- */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border/50 flex items-center justify-between px-xl z-20">
        <div className="flex items-center gap-sm">
          <button onClick={() => setActive(null)} className="flex items-center gap-sm hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-heading font-bold text-sm">S</div>
            <span className="font-heading font-semibold text-lg">SprouX</span>
          </button>
        </div>

        <nav className="flex items-center gap-xs">
          <button onClick={() => setActive(null)}
            className="px-lg py-xs rounded-full text-sm font-medium transition-colors bg-primary/10 text-primary">
            Components
          </button>
        </nav>

        <div className="flex items-center gap-xs">
          <button onClick={() => setSearchOpen(true)}
            className="flex items-center gap-sm px-lg py-xs rounded-full border border-border text-muted-foreground hover:text-foreground text-sm transition-colors">
            <Search className="size-md" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="ml-sm text-xs bg-muted px-xs py-0.5 rounded hidden sm:inline">⌘K</kbd>
          </button>
          <button onClick={() => setDark(d => !d)}
            className="p-xs rounded-full hover:bg-muted transition-colors"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <Sun className="size-lg" /> : <Moon className="size-lg" />}
          </button>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
            className="p-xs rounded-full hover:bg-muted transition-colors text-foreground">
            <Github className="size-lg" />
          </a>
        </div>
      </header>

      {/* ---- Sidebar (Foundations + Components, conditional) ---- */}
      {active !== null && (
        <aside className="fixed left-0 top-16 w-[260px] h-[calc(100vh-4rem)] bg-background border-r border-border/50 overflow-y-auto z-10">
          <nav className="p-md space-y-lg">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-xs px-sm">Foundations</p>
              <div className="flex flex-col gap-0.5">
                {foundations.map(c => (
                  <button key={c.id} onClick={() => setActive(c.id)}
                    className={`w-full text-left px-sm py-1 rounded-md text-sm transition-colors ${
                      active === c.id
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-xs px-sm">Components</p>
              <div className="flex flex-col gap-0.5">
                {components.map(c => (
                  <button key={c.id} onClick={() => setActive(c.id)}
                    className={`w-full text-left px-sm py-1 rounded-md text-sm transition-colors ${
                      active === c.id
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </aside>
      )}

      {/* ---- Main Content ---- */}
      <main id="main-content" className={`${active !== null ? "ml-[260px]" : ""} pt-16 h-screen overflow-y-auto`}>
        <div className={`mx-auto px-2xl py-3xl ${active !== null ? "max-w-5xl" : "max-w-6xl"}`}>
          {active === null && <ComponentsGrid onNavigate={setActive} />}
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
          {active === "navigation-menu" && <NavigationMenuDocs />}
          {active === "menubar" && <MenubarDocs />}
          {active === "resizable" && <ResizableDocs />}
          {active === "sidebar" && <SidebarDocs />}
        </div>
      </main>

      {/* ---- Search Command Palette ---- */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Foundations">
            {foundations.map(c => (
              <CommandItem key={c.id} onSelect={() => { setActive(c.id); setSearchOpen(false) }}>
                {c.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Components">
            {components.map(c => (
              <CommandItem key={c.id} onSelect={() => { setActive(c.id); setSearchOpen(false) }}>
                {c.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <Toaster />

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => document.getElementById("main-content")?.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-xl right-xl z-50 p-sm rounded-full bg-foreground text-background shadow-lg hover:opacity-80 transition-opacity"
          title="Scroll to top"
        >
          <ArrowUp className="size-md" />
        </button>
      )}
    </div>
  )
}

export default App
