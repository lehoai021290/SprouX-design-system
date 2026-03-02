import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

/**
 * SprouX Calendar
 *
 * Figma: [SprouX - DS] Foundation & Component (node 288:119954)
 *
 * Date picker calendar built on react-day-picker v9.
 * Figma variants: Type=Basic (1 month) | Type=Range (2 months side-by-side).
 *
 * Sub-components (Figma instances):
 * - Date Picker / Header (264:29273): nav buttons (Icon Button Outline Small 32×32 r=8) + title (14px/600)
 * - .Date Picker / Weekday Name (22:7455): 32×32 in grid, text 12px/400 muted-foreground
 * - Date Picker / Day (781:40922): Size=Small 32×32 r=4
 *   States: Default(bg-card), Hover(bg-accent), Selected(bg-primary text-primary-foreground),
 *           Disabled(bg-card text-muted-foreground opacity-50), Focus(bg-primary + ring)
 *   Position: Single(r=4 all), Start(r-left only), End(r-right only), Middle(r=0, selected=bg-accent text-foreground)
 *
 * Layout: container p-sm, header-to-grid gap=16px, row gap=1px, multi-month gap=16px.
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      className={cn("p-sm", className)}
      classNames={{
        /* ── Layout ── */
        months: "relative flex flex-col sm:flex-row gap-md",
        month: "flex flex-col gap-md",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        week: "flex w-full mt-[1px]",

        /* ── Header (Figma: Date Picker / Header) ── */
        month_caption: "flex justify-center items-center h-2xl",
        caption_label: "typo-paragraph-sm font-semibold",
        nav: "absolute top-0 inset-x-0 flex items-center justify-between z-10 h-2xl",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "size-2xl rounded-lg p-[7px]"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "size-2xl rounded-lg p-[7px]"
        ),

        /* ── Weekday Name (Figma: .Date Picker / Weekday Name 32×32) ── */
        weekday:
          "text-muted-foreground rounded-sm w-[32px] h-[32px] font-normal text-[12px] leading-[16px]",

        /* ── Day cell wrapper (Figma: Date Picker / Day — Position handling)
              rdp v9 applies ALL state classes (selected, disabled, range_middle…)
              to this <td>. The <button> inside carries bg/text styling. ── */
        day: cn(
          "relative p-0 text-center typo-paragraph-sm focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-sm [&:has(>.day-range-start)]:rounded-l-sm first:[&:has([aria-selected])]:rounded-l-sm last:[&:has([aria-selected])]:rounded-r-sm"
            : "[&:has([aria-selected])]:rounded-sm"
        ),

        /* ── Day button (Figma: Day Size=Small 32×32 r=4)
              Default: bg-card, hover: bg-accent
              Selected (Single/Start/End): bg-primary text-primary-foreground
              Selected (Middle): bg-accent text-foreground (via range_middle override)
              Disabled: bg-card text-muted-foreground opacity-50 ── */
        day_button:
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm size-[32px] typo-paragraph-sm font-normal bg-card text-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:pointer-events-none aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:hover:bg-primary aria-selected:hover:text-primary-foreground aria-selected:focus:bg-primary",

        /* ── Day states (Figma: Date Picker / Day States)
              Applied to <td>. Button uses aria-selected to pick up primary bg. ── */
        range_start: "day-range-start rounded-l-sm",
        range_end: "day-range-end rounded-r-sm",
        selected:
          "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground rounded-sm",
        today: "relative z-10 ring-1 ring-primary/40 rounded-sm",
        outside:
          "day-outside text-muted-foreground/40 [&>button]:text-muted-foreground/40 [&>button]:aria-selected:text-primary-foreground/70",
        disabled: "[&>button]:bg-card [&>button]:text-muted-foreground [&>button]:opacity-50 [&>button]:pointer-events-none",
        range_middle:
          "[&>button]:aria-selected:bg-accent [&>button]:aria-selected:text-foreground [&>button]:aria-selected:rounded-none [&>button]:aria-selected:hover:bg-accent/80",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight
          return <Icon aria-hidden="true" className="size-[18px]" />
        },
      }}
      {...props}
    />
  )
}

export { Calendar }
