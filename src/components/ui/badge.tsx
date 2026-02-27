import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * SprouX Badge
 *
 * Figma: [SprouX - DS] Foundation & Component
 * Component sets: Badge/label (19:6979), Badge/Round (4428:6150), Badge/Dot (4428:7546)
 *
 * Status tags, notification counts, labels.
 * Variants: primary | secondary | outline | ghost | destructive | emphasis | success | warning
 * Levels: primary (solid) | secondary (subtle)
 * Sizes: sm | default | lg
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent shrink-0 w-fit whitespace-nowrap transition-colors focus:outline-none focus:ring-[3px] focus:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground",
        outline:
          "bg-background border-border text-foreground",
        ghost:
          "bg-background text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground",
        emphasis:
          "bg-emphasis text-emphasis-foreground",
        success:
          "bg-success text-success-foreground",
        warning:
          "bg-warning text-warning-foreground",
      },
      level: {
        primary: "",
        secondary: "",
      },
      size: {
        sm: "h-lg px-2xs gap-1 typo-paragraph-mini-bold [&>svg]:size-sm",
        default: "h-xl px-xs gap-1 typo-paragraph-mini-bold [&>svg]:size-sm",
        lg: "h-[28px] px-sm gap-2xs py-3xs typo-paragraph-sm-medium [&>svg]:size-md",
      },
    },
    compoundVariants: [
      /* --- Level=Secondary overrides --- */
      { level: "secondary", variant: "default", className: "bg-primary-subtle text-primary-subtle-foreground" },
      { level: "secondary", variant: "secondary", className: "bg-secondary text-secondary-foreground" },
      { level: "secondary", variant: "outline", className: "bg-background border-border text-ghost-foreground" },
      { level: "secondary", variant: "ghost", className: "bg-background text-ghost-foreground" },
      { level: "secondary", variant: "destructive", className: "bg-destructive-subtle text-destructive-subtle-foreground" },
      { level: "secondary", variant: "emphasis", className: "bg-emphasis-subtle text-emphasis-subtle-foreground" },
      { level: "secondary", variant: "success", className: "bg-success-subtle text-success-subtle-foreground" },
      { level: "secondary", variant: "warning", className: "bg-warning-subtle text-warning-subtle-foreground" },
      /* --- Level=Primary: Regular/Small use bold (600), Large uses medium (500) --- */
      /* (default typo classes handle this: sm/default = mini-bold, lg = sm-medium) */
      /* --- Level=Secondary: all sizes use regular weight (400) --- */
      { level: "secondary", size: "sm", className: "typo-paragraph-mini" },
      { level: "secondary", size: "default", className: "typo-paragraph-mini" },
      { level: "secondary", size: "lg", className: "typo-paragraph-sm" },
    ],
    defaultVariants: {
      variant: "default",
      level: "primary",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  level,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, level, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
