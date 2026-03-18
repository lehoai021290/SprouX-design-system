import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * SprouX Label
 *
 * Figma: [SprouX - DS] Foundation & Component — Label (103:9453)
 *
 * Renders an accessible label associated with form controls.
 * Two sizes per Figma: Small (14/20) and Regular (16/24).
 * Auto-dims when associated control is disabled via peer-disabled.
 */
const labelVariants = cva(
  "text-foreground select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "typo-paragraph-small-medium",
        default: "typo-paragraph-medium",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
)

function Label({
  className,
  size,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ size }), className)}
      {...props}
    />
  )
}

export { Label, labelVariants }
