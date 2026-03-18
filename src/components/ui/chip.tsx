import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * SprouX Chip
 *
 * Figma: [SprouX - DS] Foundation & Component (node 4064:1074)
 *
 * Properties:
 *   States: Default | Hover | Selected  → selected prop + native hover
 *   Sizes:  md (32px) | sm (24px)       → size prop
 *   Styles: Default | Closable | Icon prefix | Icon prefix - Closable
 *           → closable prop + icon prop
 *
 * Specs (md):
 *   Container: rounded-full, border=--border (default) / --primary (selected, teal-600)
 *   Text: 14px/600, color=--muted-foreground (default+hover) / --foreground (selected)
 *   Padding: [12,0,12,0] default, [12,0,8,0] closable, [8,0,12,0] icon, [8,0,8,0] both
 *   Gap: 4px between icon/text/close
 *   Close icon: X 16×16, muted-foreground
 *   Prefix icon: 16×16, muted-foreground
 *
 * Specs (sm): same but h=24px
 */
function Chip({
  children,
  selected = false,
  size = "md",
  icon,
  closable = false,
  onClose,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  selected?: boolean
  size?: "md" | "sm"
  icon?: React.ReactNode
  closable?: boolean
  onClose?: () => void
}) {
  const hasIcon = !!icon
  const paddingClass =
    hasIcon && closable ? "pl-xs pr-xs"
    : hasIcon ? "pl-xs pr-sm"
    : closable ? "pl-sm pr-xs"
    : "px-sm"

  return (
    <button
      data-slot="chip"
      data-selected={selected || undefined}
      aria-pressed={selected}
      type="button"
      className={cn(
        "inline-flex items-center gap-[4px] rounded-full border typo-paragraph-small-semibold transition-colors",
        size === "sm" ? "h-size-xs" : "h-size-sm",
        selected
          ? "border-primary text-foreground"
          : "border-border text-muted-foreground hover:bg-accent",
        paddingClass,
        "[&_svg]:size-md [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {icon && <span className="text-muted-foreground">{icon}</span>}
      <span>{children}</span>
      {closable && (
        <button
          type="button"
          tabIndex={0}
          className="text-muted-foreground hover:text-foreground cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            onClose?.()
          }}
          aria-label="Remove"
        >
          <X className="size-md" />
        </button>
      )}
    </button>
  )
}

export { Chip }
