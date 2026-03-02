import * as React from "react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

/**
 * SprouX Button Group
 *
 * Figma: [SprouX - DS] Foundation & Component
 *
 * Groups related buttons together with consistent spacing.
 * Supports connected (merged borders) and separated (gap) modes.
 *
 * Props:
 *   variant:     Inherits Button variants (default, secondary, outline, ghost, etc.)
 *   size:        Inherits Button sizes (lg, default, sm, xs)
 *   orientation: "horizontal" | "vertical"
 *   connected:   true = merged borders/radius, false = gap between buttons
 */

type ButtonGroupContextValue = {
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  connected?: boolean
  orientation?: "horizontal" | "vertical"
}

const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({})

function ButtonGroup({
  className,
  variant,
  size,
  orientation = "horizontal",
  connected = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  orientation?: "horizontal" | "vertical"
  connected?: boolean
}) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      data-connected={connected}
      className={cn(
        "inline-flex",
        orientation === "vertical" ? "flex-col" : "flex-row",
        !connected && (orientation === "vertical" ? "gap-xs" : "gap-xs"),
        connected && "[&>*:not(:first-child):not(:last-child)]:rounded-none",
        connected && orientation === "horizontal" && [
          "[&>*:first-child]:rounded-r-none",
          "[&>*:last-child]:rounded-l-none",
          "[&>*:not(:first-child)]:border-l-0",
        ],
        connected && orientation === "vertical" && [
          "[&>*:first-child]:rounded-b-none",
          "[&>*:last-child]:rounded-t-none",
          "[&>*:not(:first-child)]:border-t-0",
        ],
        className
      )}
      {...props}
    >
      <ButtonGroupContext.Provider value={{ variant, size, connected, orientation }}>
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
