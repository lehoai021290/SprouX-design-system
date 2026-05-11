import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * SprouX Toggle
 *
 * Figma: [SprouX - DS] Foundation & Component
 *
 * A two-state button that can be toggled on or off (e.g. bold, italic).
 * Variants: default (ghost) | outline
 * Sizes:    default (36px) | sm (32px) | lg (40px) | mini (24px)
 */
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-lg typo-paragraph-sm-semibold text-foreground [&_svg]:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-md",
  {
    variants: {
      variant: {
        default:
          "bg-ghost hover:bg-ghost-hover data-[state=on]:bg-ghost-hover",
        outline:
          "border border-border bg-transparent hover:bg-outline-hover data-[state=on]:bg-outline-hover",
      },
      size: {
        default: "h-size-md px-xs min-w-size-md gap-xs",
        sm: "h-size-sm px-2xs min-w-size-sm gap-2xs",
        lg: "h-size-lg px-sm min-w-size-lg gap-xs",
        mini: "h-size-xxs px-3xs min-w-size-xxs rounded-sm gap-3xs typo-paragraph-xs-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
