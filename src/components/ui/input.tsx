import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * SprouX Input
 *
 * Figma: [SprouX - DS] Foundation & Component (node 2250:904)
 *
 * Sizes:  lg (40px) | default (36px) | sm (32px) | xs/mini (24px)
 * States: default | focus | error (aria-invalid) | error+focus | disabled
 */
const inputVariants = cva(
  "flex w-full bg-input border border-border font-body font-normal text-foreground transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:not-placeholder-shown:border-border-strong disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive-border aria-invalid:focus-visible:ring-ring-error aria-invalid:focus-visible:not-placeholder-shown:border-destructive-border",
  {
    variants: {
      size: {
        lg: "h-10 px-4 rounded-lg text-sm tracking-[0.07px]",
        default: "h-9 px-3 rounded-lg text-sm tracking-[0.07px]",
        sm: "h-8 px-2 rounded-lg text-sm tracking-[0.07px]",
        xs: "h-6 px-1.5 rounded-sm text-xs tracking-[0.18px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Input({
  className,
  size,
  type = "text",
  ...props
}: Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
