import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

/**
 * SprouX Toggle Group
 *
 * Figma: [SprouX - DS] Foundation & Component
 *
 * A group of toggle buttons supporting single or multiple selection.
 * Items are visually connected (no gap, shared border-radius).
 * Figma Position: Left / Middle / Right / Single — handled via CSS.
 * Types: "single" (one at a time) | "multiple" (any number)
 * Sizes: default | sm | lg | mini (inherited from Toggle)
 */
const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(
        "flex items-center",
        // Outline variant: wrap with shared border, remove individual item borders
        variant === "outline" &&
          "rounded-lg border border-border [&_[data-slot=toggle-group-item]]:border-0 [&_[data-slot=toggle-group-item]]:border-r [&_[data-slot=toggle-group-item]]:border-border [&_[data-slot=toggle-group-item]:last-child]:border-r-0",
        // Mini size: use rounded-sm instead of rounded-lg
        size === "mini" && variant === "outline" && "rounded-sm",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        toggleVariants({
          variant: variant || context.variant,
          size: size || context.size,
        }),
        // Remove border-radius for connected group items
        "rounded-none first:rounded-l-lg last:rounded-r-lg",
        // Mini size override
        (size || context.size) === "mini" &&
          "first:rounded-l-sm last:rounded-r-sm",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
