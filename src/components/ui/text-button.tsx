import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * SprouX Text Button
 *
 * Figma: [SprouX - DS] Foundation & Component (node 3010:49)
 *
 * Inline text button with optional left/right icons.
 * No background or padding — behaves like styled text.
 * Underline on hover, focus ring on focus.
 *
 * Variants:
 *   Type: primary | ghost
 *   Size: lg | default | mini
 */

const textButtonVariants = cva(
  "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:bg-background focus-visible:rounded-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:underline",
  {
    variants: {
      variant: {
        primary:
          "text-primary [&_svg]:text-primary",
        ghost:
          "text-ghost-foreground [&_svg]:text-ghost-foreground hover:text-foreground hover:[&_svg]:text-foreground",
      },
      size: {
        lg: "gap-2xs typo-paragraph-base [&_svg:not([class*='size-'])]:size-md",
        default: "gap-3xs typo-paragraph-sm [&_svg:not([class*='size-'])]:size-md",
        mini: "gap-3xs typo-paragraph-xs [&_svg:not([class*='size-'])]:size-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

type TextButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof textButtonVariants> & {
    asChild?: boolean
  }

function TextButton({
  className,
  variant,
  size,
  children,
  ...props
}: TextButtonProps) {
  return (
    <button
      data-slot="text-button"
      type="button"
      className={cn(textButtonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  )
}

export { TextButton, textButtonVariants, type TextButtonProps }
