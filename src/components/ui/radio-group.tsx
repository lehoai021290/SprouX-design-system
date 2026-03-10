import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

/**
 * SprouX Radio
 *
 * Figma: [SprouX - DS] Foundation & Component — Radio (node 280:103567)
 *
 * Single selection from multiple options.
 * Pattern: outline circle + colored dot (NOT filled circle).
 * Size:   16×16px (matches Checkbox)
 * Dot:    8×8px, fill primary (error → destructive, disabled → muted-foreground)
 * States: default | focus | error (aria-invalid) | disabled
 */
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-sm", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "group peer size-md shrink-0 rounded-full border border-border-strong bg-input transition-colors",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:data-[state=checked]:opacity-30",
        "aria-invalid:border-destructive-border aria-invalid:focus-visible:ring-ring-error",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center"
      >
        <div className="size-xs rounded-full bg-primary group-aria-invalid:bg-destructive group-disabled:bg-muted-foreground" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
