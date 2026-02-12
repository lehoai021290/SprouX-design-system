import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/**
 * SprouX Button
 *
 * Figma: [SprouX - DS] Foundation & Component (node 9:1071)
 *
 * Variants: default | secondary | outline | ghost | ghost-muted | destructive | destructive-secondary
 * Sizes:    lg (40px) | default (36px) | sm (32px) | xs/mini (24px) | icon | icon-sm | icon-lg
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold font-body transition-colors focus-visible:outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover focus-visible:ring-ring",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-hover focus-visible:bg-secondary-hover focus-visible:ring-ring",
        outline:
          "border border-border bg-outline-bg text-foreground hover:bg-outline-hover active:bg-outline-hover focus-visible:ring-ring focus-visible:border-border-strong",
        ghost:
          "bg-ghost text-ghost-foreground hover:bg-ghost-hover hover:text-foreground active:bg-ghost-hover active:text-foreground focus-visible:ring-ring",
        "ghost-muted":
          "bg-ghost text-ghost-foreground hover:bg-ghost-hover hover:text-foreground active:bg-ghost-hover active:text-foreground focus-visible:ring-ring",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive active:bg-destructive focus-visible:ring-ring-error",
        "destructive-secondary":
          "bg-destructive-subtle text-destructive-subtle-foreground border border-destructive-border hover:bg-destructive-subtle active:bg-destructive-subtle focus-visible:ring-ring-error",
      },
      size: {
        lg: "h-3xl px-xl gap-xs text-sm tracking-sm [&_svg:not([class*='size-'])]:size-md",
        default:
          "h-9 px-md gap-xs text-sm tracking-sm [&_svg:not([class*='size-'])]:size-md",
        sm: "h-2xl px-sm gap-2xs text-sm tracking-sm [&_svg:not([class*='size-'])]:size-md",
        xs: "h-xl px-xs gap-2xs text-xs tracking-xs [&_svg:not([class*='size-'])]:size-md",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-md",
        "icon-sm": "size-2xl [&_svg:not([class*='size-'])]:size-md",
        "icon-lg": "size-3xl [&_svg:not([class*='size-'])]:size-md",
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

export { Button, buttonVariants }
