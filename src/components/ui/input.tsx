import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * SprouX Input
 *
 * Figma: [SprouX - DS] Foundation & Component (node 2250:904)
 *
 * Properties:
 *   Roundness:              Default (single option)
 *   Size:                   Large (40px) | Regular (36px) | Small (32px) | Mini (24px)
 *   State:                  Default | Focus | Error | Error Focus | Disabled → native states
 *   Value:                  Empty | Placeholder | Value → native states
 *   Show Decoration Left:   boolean → decorationLeft prop
 *   Show Decoration Right:  boolean → decorationRight prop
 *
 * Decoration slots accept <DecorationInput> children for icon, text, avatar, etc.
 * When decorations are present, Input renders as a wrapper div + inner input.
 * When no decorations, Input renders as a plain input element (Shadcn-compatible).
 */
const inputVariants = cva(
  "flex w-full bg-input border border-border text-foreground transition-colors file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        lg: "h-size-lg rounded-lg typo-paragraph-sm",
        default: "h-size-md rounded-lg typo-paragraph-sm",
        sm: "h-size-sm rounded-lg typo-paragraph-sm",
        xs: "h-size-xs rounded-sm typo-paragraph-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

/** Gap between decorations and text content, per size (Figma spec) */
const gapBySize = {
  lg: "gap-sm",       // 12px
  default: "gap-xs",  // 8px
  sm: "gap-2xs",      // 6px
  xs: "gap-3xs",      // 4px
} as const

/** Horizontal padding per size (Figma spec) */
const pxBySize = {
  lg: "px-md",        // 16px
  default: "px-sm",   // 12px
  sm: "px-xs",        // 8px
  xs: "px-2xs",       // 6px
} as const

/* Focus & error styles — shared between plain input and wrapper modes */
const focusClasses =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
const errorClasses =
  "aria-invalid:border-destructive-border aria-invalid:focus-visible:ring-ring-error"
/* Wrapper uses focus-within instead of focus-visible */
const wrapperFocusClasses =
  "focus-within:ring-[3px] focus-within:ring-ring"
const wrapperErrorClasses =
  "[&:has(input[aria-invalid])]:border-destructive-border [&:has(input[aria-invalid])]:focus-within:ring-ring-error"

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    decorationLeft?: React.ReactNode
    decorationRight?: React.ReactNode
  }

function Input({
  className,
  size,
  type = "text",
  decorationLeft,
  decorationRight,
  ...props
}: InputProps) {
  const sizeKey = size ?? "default"
  const hasDecoration = !!decorationLeft || !!decorationRight

  /* ── Plain mode: no decorations → bare <input> (backwards compatible) ── */
  if (!hasDecoration) {
    return (
      <input
        data-slot="input"
        type={type}
        className={cn(
          inputVariants({ size }),
          pxBySize[sizeKey],
          focusClasses,
          errorClasses,
          "items-center overflow-clip",
          className
        )}
        {...props}
      />
    )
  }

  /* ── Wrapper mode: decorations present → div wrapper + inner input ── */
  return (
    <div
      data-slot="input"
      className={cn(
        inputVariants({ size }),
        pxBySize[sizeKey],
        gapBySize[sizeKey],
        wrapperFocusClasses,
        wrapperErrorClasses,
        "items-center overflow-clip",
        /* Pass aria-invalid to wrapper for error styling */
        props["aria-invalid"] && "border-destructive-border",
        className
      )}
    >
      {decorationLeft}
      <input
        data-slot="input-field"
        type={type}
        className="flex-1 min-w-0 bg-transparent outline-none text-inherit placeholder:text-muted-foreground disabled:cursor-not-allowed [font:inherit] [letter-spacing:inherit] [line-height:inherit]"
        {...props}
      />
      {decorationRight}
    </div>
  )
}

export { Input, inputVariants }
