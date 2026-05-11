import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * SprouX Alert
 *
 * Figma: [SprouX - DS] Foundation & Component (node 58:5416)
 *
 * Structure (matches Figma element tree):
 *   Alert (root)        — relative, rounded-lg, border, py-sm, px-md
 *     └─ flex row       — gap-sm (12px), w-full  [Figma: AL depth 1]
 *          ├─ icon div  — shrink-0, mt-[2px]     [Figma: Aligner]
 *          └─ flex col  — gap-0, flex-1           [Figma: AL depth 2 + Text merged]
 *               ├─ AlertTitle       — typo-paragraph-sm-semibold
 *               ├─ AlertDescription — typo-paragraph-sm (gap-0 from title)
 *               └─ AlertAction      — mt-xs (8px gap from text) via data-slot
 *     └─ AlertDismiss   — absolute right-[7px] top-[9px]
 *
 * Color mapping:
 *   default:     bg-card, border-border, text-foreground, desc: text-foreground-subtle
 *   default inCard: bg-card-subtle, border-transparent, py-xs px-sm
 *   other inCard:   border-transparent, py-xs px-sm (keep variant bg)
 *   destructive: bg-destructive-subtle, border-destructive-border, text-destructive-subtle-foreground
 *   success:     bg-success-subtle, border-success-border, text-success-subtle-foreground
 *   warning:     bg-warning-subtle, border-warning-border, text-warning-subtle-foreground
 *   emphasis:    bg-emphasis-subtle, border-emphasis-border, text-emphasis-subtle-foreground
 */
const alertVariants = cva(
  "relative w-full rounded-lg border py-sm px-md gap-md",
  {
    variants: {
      variant: {
        default:
          "bg-card border-border text-foreground",
        destructive:
          "bg-destructive-subtle border-destructive-border text-destructive-subtle-foreground",
        success:
          "bg-success-subtle border-success-border text-success-subtle-foreground",
        warning:
          "bg-warning-subtle border-warning-border text-warning-subtle-foreground",
        emphasis:
          "bg-emphasis-subtle border-emphasis-border text-emphasis-subtle-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  inCard,
  icon: Icon,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    /** Use when Alert sits inside a Card — removes border, tightens padding */
    inCard?: boolean
    /** Lucide icon component (e.g., CircleAlert, Info). Renders in left icon slot. */
    icon?: React.ComponentType<{ className?: string }>
  }) {
  const isDefault = !variant || variant === "default"

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant }),
        inCard && [
          "border-transparent py-xs px-sm",
          isDefault && "bg-card-subtle",
        ],
        className
      )}
      {...props}
    >
      {/* Flex row: icon + content — matches Figma AL depth 1 */}
      <div className="flex gap-sm w-full">
        {Icon && (
          <div className="shrink-0 mt-[2px]">
            <Icon className="size-md" />
          </div>
        )}
        {/* Content column — gap-0 between title/desc, mt-xs on action via data-slot */}
        <div className={cn(
          "flex flex-1 flex-col gap-0 min-w-0",
          "*:data-[slot=alert-action]:mt-xs",
          isDefault && "*:data-[slot=alert-description]:text-foreground-subtle"
        )}>
          {children}
        </div>
      </div>
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("typo-paragraph-sm-semibold", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("typo-paragraph-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

/**
 * AlertAction — action buttons row.
 * Figma: Action frame (flex row, gap-xs 8px, items-center)
 */
function AlertAction({
  className,
  actionLabel,
  secondaryLabel,
  actionVariant = "secondary",
  onAction,
  onSecondaryAction,
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  actionLabel: string
  secondaryLabel?: string
  actionVariant?: "secondary" | "destructive"
  onAction?: () => void
  onSecondaryAction?: () => void
}) {
  return (
    <div
      data-slot="alert-action"
      className={cn("flex items-center gap-xs px-0 py-0 rounded-none", className)}
      {...props}
    >
      <Button variant={actionVariant} size="sm" onClick={onAction}>
        {actionLabel}
      </Button>
      {secondaryLabel && (
        <Button variant="outline" size="sm" onClick={onSecondaryAction}>
          {secondaryLabel}
        </Button>
      )}
    </div>
  )
}

/**
 * AlertDismiss — close button (absolute positioned).
 * Figma: .Button Icon close — 24×24, p-3xs, rounded-sm, absolute right-[7px] top-[9px]
 */
function AlertDismiss({
  className,
  ...props
}: Omit<React.ComponentProps<"button">, "children">) {
  return (
    <button
      type="button"
      data-slot="alert-dismiss"
      className={cn(
        "absolute right-[7px] top-[9px] inline-flex items-center justify-center size-size-xxs !p-3xs rounded-sm text-current opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:shadow-focus-ring transition-opacity cursor-pointer",
        className
      )}
      aria-label="Dismiss"
      {...props}
    >
      <X className="size-md" />
    </button>
  )
}

export {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
  AlertDismiss,
  alertVariants,
}
