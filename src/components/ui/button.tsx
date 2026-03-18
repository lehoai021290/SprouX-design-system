import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/**
 * SprouX Button
 *
 * Figma: [SprouX - DS] Foundation & Component (node 9:1071)
 * Shadcn: @shadcn/button (Slot pattern + CVA)
 *
 * Figma Variant Properties:
 *   Variant:    Primary | Secondary | Outline | Ghost | Ghost Muted | Destructive | Destructive Secondary
 *   Size:       Large (40px) | Regular (36px) | Small (32px) | Mini (24px)
 *   State:      Default | Hover & Active | Focus | Disabled
 *   Show left icon / Show right icon: Boolean (instance swap)
 *
 * Code Variant Mapping:
 *   default → Primary, secondary → Secondary, outline → Outline,
 *   ghost → Ghost, ghost-muted → Ghost Muted,
 *   destructive → Destructive, destructive-secondary → Destructive Secondary
 *
 * Code Size Mapping:
 *   lg → Large, default → Regular, sm → Small, xs → Mini,
 *   icon-lg / icon / icon-sm / icon-xs → Icon Button variants (see IconButton below)
 *
 * Merged specs (Shadcn structure + Figma tokens):
 *   Container: rounded-lg (8px), gap-xs (8px) or gap-2xs (6px)
 *   Text:      typo-paragraph-small-semibold (14/20 ls:0.07) for lg/default/sm
 *              typo-paragraph-mini-semibold (12/16 ls:0.18) for xs
 *   Icon:      size-md (16px) all sizes
 *   Disabled:  opacity-50
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover focus-visible:focus-ring",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-hover focus-visible:bg-secondary-hover focus-visible:focus-ring",
        outline:
          "border border-border bg-outline text-foreground hover:bg-outline-hover active:bg-outline-hover focus-visible:focus-ring focus-visible:border-border-strong",
        ghost:
          "bg-ghost text-ghost-foreground hover:bg-ghost-hover hover:text-foreground active:bg-ghost-hover active:text-foreground focus-visible:focus-ring",
        "ghost-muted":
          "bg-ghost text-ghost-foreground hover:bg-ghost-hover hover:text-foreground active:bg-ghost-hover active:text-foreground focus-visible:focus-ring",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive active:bg-destructive focus-visible:focus-ring-error",
        "destructive-secondary":
          "bg-destructive-subtle text-destructive-subtle-foreground border border-destructive-border hover:bg-destructive-subtle active:bg-destructive-subtle focus-visible:focus-ring-error",
      },
      size: {
        lg: "h-size-lg px-xl py-0 gap-xs typo-paragraph-small-semibold [&_svg:not([class*='size-'])]:size-md",
        default: "h-size-md px-md py-0 gap-xs typo-paragraph-small-semibold [&_svg:not([class*='size-'])]:size-md",
        sm: "h-size-sm px-sm py-0 gap-2xs typo-paragraph-small-semibold [&_svg:not([class*='size-'])]:size-md",
        xs: "h-size-xs px-xs py-0 gap-2xs typo-paragraph-mini-semibold [&_svg:not([class*='size-'])]:size-md",
        /* ── Icon Button sizes (Figma: 4838:17100)
              Regular=36×36 icon=20, Large=40×40 icon=20,
              Small=32×32 icon=18, Mini=24×24 r=4 icon=16
              All: p=0 gap=0 (icon centered by flexbox) ── */
        icon: "size-size-md p-0 gap-0 [&_svg:not([class*='size-'])]:size-lg",
        "icon-lg": "size-size-lg p-0 gap-0 [&_svg:not([class*='size-'])]:size-lg",
        "icon-sm": "size-size-sm p-0 gap-0 [&_svg:not([class*='size-'])]:size-[18px]",
        "icon-xs": "size-size-xs p-0 gap-0 !rounded-sm [&_svg:not([class*='size-'])]:size-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

/**
 * SprouX Icon Button
 *
 * Figma: [SprouX - DS] Foundation & Component (node 4838:17100)
 *
 * Figma Variant Properties:
 *   Variant:    Primary | Secondary | Outline | Ghost | Ghost Muted | Destructive
 *   Size:       Large (40×40) | Regular (36×36) | Small (32×32) | Mini (24×24)
 *   Roundness:  Default (r=8, r=4 for Mini) | Round (rounded-full)
 *   State:      Default | Hover & Active | Focus | Disabled
 *   Icon:       Instance swap (⮑ Left icon)
 *
 * Dimensions & padding per size:
 *   Large:   40×40, pad=10, icon=20×20, r=8
 *   Regular: 36×36, pad=8,  icon=20×20, r=8
 *   Small:   32×32, pad=7,  icon=18×18, r=8
 *   Mini:    24×24, pad=4,  icon=16×16, r=4
 *
 * Usage: <IconButton variant="outline" size="sm"><ChevronLeft /></IconButton>
 *        <IconButton variant="ghost"><X /></IconButton>
 *        <IconButton variant="secondary" round><Search /></IconButton>
 */
type IconButtonSize = "lg" | "default" | "sm" | "xs"

const iconSizeMap: Record<IconButtonSize, ButtonProps["size"]> = {
  lg: "icon-lg",
  default: "icon",
  sm: "icon-sm",
  xs: "icon-xs",
}

function IconButton({
  size = "default",
  round = false,
  className,
  ...props
}: Omit<ButtonProps, "size" | "asChild"> & {
  size?: IconButtonSize
  round?: boolean
}) {
  return (
    <Button
      data-slot="icon-button"
      size={iconSizeMap[size]}
      className={cn(round && "!rounded-full", className)}
      {...props}
    />
  )
}

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export { Button, IconButton, buttonVariants, type ButtonProps }
