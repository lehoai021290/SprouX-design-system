import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/**
 * SprouX Alert
 *
 * Figma: [SprouX - DS] Foundation & Component (node 58:5416)
 * Shadcn: @shadcn/alert (native div)
 *
 * Inline feedback message for neutral, error, success, warning, emphasis.
 *
 * Variants (Figma):
 *   Type:         Neutral | Error | Success | Warning | Emphasis
 *   Dismissable:  False | True
 *   In Card:      False | True
 *   Show Title:   True | False
 *   Show Subtitle:True | False
 *   Show Icon:    true | false
 *   Show Action:  True | False   → AlertAction with Button secondary sm
 *   Show Secondary Action: True | False → Button outline sm inside AlertAction
 *
 * Merged specs (Shadcn structure + Figma tokens):
 *   Container:  py-sm (12px) px-md (16px), gap-md (16px) outer
 *               rounded-lg (8px), border 1px
 *   Icon:       size-md (16px), absolute left-md top-[14px] (center-aligned to 20px text line)
 *   Title:      typo-paragraph-small-semibold (Geist 600 14/20 ls:0.07px)
 *   Description:typo-paragraph-small (Geist 400 14/20 ls:0.07px)
 *   Gap:        icon-to-text gap-sm (12px), title-to-desc gap-0, text-to-action gap-xs (8px)
 *   Action:     flex row, gap-xs (8px), items-center
 *     Button Primary:   Button secondary sm (neutral) / destructive sm (error)
 *     Button Secondary: Button outline sm
 *   Dismiss:    IconButton ghost xs (24×24), absolute right-[7px] top-[9px], Icon X 16px
 *
 *   Neutral:        bg-card, border-border, text-foreground, desc: text-foreground-subtle
 *   Neutral inCard: bg-card-subtle, border-transparent, py-xs px-sm (same text)
 *   Other inCard:   border-transparent, py-xs px-sm (keep variant bg)
 *   Error:    bg-destructive-subtle, border-destructive-border, text-destructive-subtle-foreground
 *   Success:  bg-success-subtle, border-success-border, text-success-subtle-foreground
 *   Warning:  bg-warning-subtle, border-warning-border, text-warning-subtle-foreground
 *   Emphasis: bg-emphasis-subtle, border-emphasis-border, text-emphasis-subtle-foreground
 */
const alertVariants = cva(
  "relative w-full rounded-lg border py-sm px-md [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-md [&>svg]:top-[14px] [&>svg]:size-md",
  {
    variants: {
      variant: {
        default:
          "bg-card border-border text-foreground [&>svg]:text-foreground *:data-[slot=alert-description]:text-foreground-subtle",
        destructive:
          "bg-destructive-subtle border-destructive-border text-destructive-subtle-foreground [&>svg]:text-destructive-subtle-foreground",
        success:
          "bg-success-subtle border-success-border text-success-subtle-foreground [&>svg]:text-success-subtle-foreground",
        warning:
          "bg-warning-subtle border-warning-border text-warning-subtle-foreground [&>svg]:text-warning-subtle-foreground",
        emphasis:
          "bg-emphasis-subtle border-emphasis-border text-emphasis-subtle-foreground [&>svg]:text-emphasis-subtle-foreground",
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
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    /** Use when Alert sits inside a Card — removes border, tightens padding, neutral uses card-subtle bg */
    inCard?: boolean
  }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant }),
        inCard && [
          "border-transparent py-xs px-sm [&>svg]:left-sm [&>svg]:top-[10px]",
          (!variant || variant === "default") && "bg-card-subtle",
        ],
        className
      )}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("typo-paragraph-small-semibold", className)}
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
      className={cn("typo-paragraph-small [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

/**
 * AlertAction — action buttons inside Alert (real Button instances).
 *
 * Figma: Action frame (flex row, gap-xs 8px, items-center)
 *   Button Primary → Button secondary sm (neutral) / destructive sm (error)
 *   Button Secondary → Button outline sm
 *
 * Usage:
 *   <AlertAction actionLabel="Resend email" />
 *   <AlertAction actionLabel="Retry" secondaryLabel="Cancel" actionVariant="destructive" />
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
  /** Label for the primary action button */
  actionLabel: string
  /** Label for the secondary action button (optional) */
  secondaryLabel?: string
  /** Variant for the primary action: "secondary" (neutral) or "destructive" (error) */
  actionVariant?: "secondary" | "destructive"
  /** Handler for primary action button click */
  onAction?: () => void
  /** Handler for secondary action button click */
  onSecondaryAction?: () => void
}) {
  return (
    <div
      data-slot="alert-action"
      className={cn("flex items-center gap-xs pt-xs", className)}
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
 * AlertDismiss — close/dismiss button for Alert.
 *
 * Figma: .Button Icon close (node 3039:13813)
 *   Size: 24×24 (min-h + min-w), p-3xs (4px), rounded-sm (4px)
 *   Icon: X 16×16, color inherits from Alert variant (text-current)
 *   Background: transparent (no bg), hover: opacity-100
 *   Position: absolute right-[7px] top-[9px]
 *
 * Usage:
 *   <Alert>
 *     ...
 *     <AlertDismiss onClick={() => setVisible(false)} />
 *   </Alert>
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
        "absolute right-[7px] top-[9px] inline-flex items-center justify-center min-h-size-xs min-w-size-xs size-size-xs !p-3xs rounded-sm text-current opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:focus-ring transition-opacity cursor-pointer",
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
