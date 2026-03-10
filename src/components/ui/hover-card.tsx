import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

/**
 * SprouX Hover Card
 *
 * Figma: [SprouX - DS] Foundation & Component → Hover Card (303:246487)
 *
 * Rich preview card that appears on hover. Built on Radix HoverCard.
 *
 * Figma tokens:
 * - Content BG: --card (#ffffff / #252522)
 * - Content border: --border (#e9e9e7)
 * - Content radius: 8px (--radius-lg)
 * - Content padding: 8px (--spacing-xs)
 * - Content shadow: shadow (2 drop-shadows, same as Dialog/Drawer)
 * - Content inner gap: 8px (--spacing-xs)
 * - Content example gap: 16px (--spacing-md) between avatar + text
 */
function HoverCard(
  props: React.ComponentProps<typeof HoverCardPrimitive.Root>
) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger(
  props: React.ComponentProps<typeof HoverCardPrimitive.Trigger>
) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Content
      data-slot="hover-card-content"
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-64 rounded-lg border border-border bg-card p-xs text-foreground shadow outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  )
}

/** Shared class config — single source of truth for component + docs preview */
const hoverCardClassNames = {
  content: "w-64 rounded-lg border border-border bg-card p-xs text-foreground shadow",
}

export { HoverCard, HoverCardTrigger, HoverCardContent, hoverCardClassNames }
