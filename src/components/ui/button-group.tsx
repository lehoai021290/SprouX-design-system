import * as React from "react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

/**
 * SprouX Button Group
 *
 * Figma: [SprouX - DS] Foundation & Component (node 784:82792, 784:87178)
 *
 * Two component sets on Figma:
 *   1. Button Group (784:82792) — text buttons with optional left/right icons
 *   2. Button Group Icon Button (784:87178) — icon-only buttons
 *
 * Figma "Button Group" properties:
 *   Skin:             Outlined | Ghost                → variant: "outline" | "ghost"
 *   Size:             Large | Regular | Small          → size: "lg" | "default" | "sm"
 *   Position:         Left | Middle | Right | Single   → auto via CSS :first-child/:last-child
 *   State:            Default | Focus | Hover | Disabled → native button states
 *   Show left icon:   True | False                     → showLeftIcon boolean
 *   Show right icon:  True | False                     → showRightIcon boolean
 *   Left icon:        Instance swap                    → leftIcon ReactNode
 *   Right icon:       Instance swap                    → rightIcon ReactNode
 *
 * Figma "Button Group Icon Button" properties:
 *   Skin:             Outlined | Ghost                → variant: "outline" | "ghost"
 *   Size:             Large | Default | Small          → size: "lg" | "default" | "sm"
 *   Position:         Left | Middle | Right | Single   → auto via CSS
 *   State:            Default | Focus | Disabled | Hover → native button states
 *   Icon:             Instance swap                    → children (icon ReactNode)
 */

type ButtonGroupContextValue = {
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
}

const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({})

function ButtonGroup({
  className,
  variant = "outline",
  size,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
}) {
  return (
    <div
      role="group"
      data-slot="button-group"
      className={cn(
        "inline-flex flex-row",
        "[&>*:not(:first-child):not(:last-child)]:rounded-none",
        "[&>*:first-child]:rounded-r-none",
        "[&>*:last-child]:rounded-l-none",
        "[&>*:not(:first-child)]:border-l-0",
        className
      )}
      {...props}
    >
      <ButtonGroupContext.Provider value={{ variant, size }}>
        {children}
      </ButtonGroupContext.Provider>
    </div>
  )
}

function ButtonGroupItem({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  const context = React.useContext(ButtonGroupContext)

  return (
    <Button
      data-slot="button-group-item"
      variant={variant || context.variant}
      size={size || context.size}
      className={cn(className)}
      {...props}
    />
  )
}

export { ButtonGroup, ButtonGroupItem, ButtonGroupContext }
