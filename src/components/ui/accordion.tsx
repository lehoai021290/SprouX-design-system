import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * SprouX Accordion
 *
 * Figma: [SprouX - DS] Foundation & Component (node 66:5034)
 * Shadcn: @shadcn/accordion (radix-ui/react-accordion)
 *
 * Vertically collapsible content sections.
 *
 * Variants (Accordion Trigger — Figma):
 *   State:    Default | Hover | Focus | Disable
 *   Type:     Open | Closed
 *   End Item: False | True
 *
 * Merged specs (Shadcn structure + Figma tokens):
 *   Item:     w-full, p-0, gap-0, border-b border-border, last:border-b-0
 *   Trigger:  w-full (flex-1), px-0, py-sm, gap-xs, rounded-lg, items-center
 *             Default: rounded-lg (Figma Content frame cornerRadius=8, token: rounded-lg)
 *             Hover: hover:underline (radius stays lg for all states)
 *             Focus: rounded-lg + focus-ring (DROP_SHADOW 3px --ring) + bg-ghost
 *   Label:    typo-paragraph-sm-semibold (Geist 600 14/20 ls:0.07px), text-foreground
 *   Icon:     size-md (16px), text-muted-foreground (#6f6f6a), rotates 180° on open
 *   Content:  w-full, px-0, pt-0, pb-sm (12px), gap-0, rounded-none, typo-paragraph-sm (Geist 400 14/20 ls:0.07px), text-foreground
 *   Border:   1px border-border, last:border-b-0 (End Item=True)
 *   Disabled: pointer-events-none opacity-50 (Shadcn convention)
 */
function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("group w-full p-0 gap-0 border-b border-border last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex font-body">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-xs px-0 py-sm rounded-lg typo-paragraph-sm-semibold text-foreground text-left transition-all outline-none hover:underline focus-visible:bg-ghost focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown aria-hidden="true" className="size-md shrink-0 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="w-full data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden typo-paragraph-sm text-foreground"
      {...props}
    >
      <div className={cn("w-full px-0 pt-0 pb-sm gap-xs rounded-none", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
