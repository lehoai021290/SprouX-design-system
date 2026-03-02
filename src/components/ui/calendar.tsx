import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

/**
 * SprouX Calendar
 *
 * Figma: [SprouX - DS] Foundation & Component
 *   - Calendar (4820:5638): card wrapper p=16 r=8
 *   - Date Picker (288:119954): Type (Basic|Range), Style (1 Month|2 Month|Year and Month|Only Month|Only Year), Size (Small|Large|Custom days)
 *   - Date Picker / Header (264:29273): Type matches Style — text for 1 Month/2 Months, Select dropdowns for Year and Month/Only Month/Only Year
 *   - Date Picker / Day (781:40922): 32×32 (Small) | 48×48 (Large/Custom)
 *
 * Figma Calendar component = card wrapper (p=16, r=8, bg-card, border)
 *   containing a Date Picker instance (header + grid).
 *
 * Grid (Size=Small): Day 32×32, Weekday 32×32, 7×32=224px
 * Grid (Size=Large): Day 48×48, Weekday 48×32, 7×48=336px
 * Row gap: 1px vertical, 0px horizontal. Header-to-grid gap: 16px.
 *
 * captionLayout maps to Header Style:
 *   "label"           → 1 Month / 2 Months (text title)
 *   "dropdown"        → Year and Month (month+year selects)
 *   "dropdown-months" → Only Year (month text + year select → rdp reverses naming)
 *   "dropdown-years"  → Only Month (month select + year text → rdp reverses naming)
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
      className={cn("p-md", className)}
      classNames={{
        /* ── Layout (Size=Small: 7×32=224px grid) ── */
        months: "relative flex flex-col sm:flex-row gap-md",
        month: "flex flex-col gap-md",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        week: "flex w-full mt-[1px]",

        /* ── Header (Figma: Date Picker / Header 264:29273) ── */
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

        /* ── Header dropdowns (Style=Year and Month / Only Month / Only Year)
              Figma uses Select & Combobox instances: r=8, h=32, px=8, gap=6 ── */
        dropdowns: "flex items-center gap-xs",
        dropdown_root: "relative",
        dropdown:
          "appearance-none bg-input border border-border rounded-lg h-2xl px-xs pr-lg typo-paragraph-sm font-normal cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        months_dropdown:
          "appearance-none bg-input border border-border rounded-lg h-2xl px-xs pr-lg typo-paragraph-sm font-normal cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        years_dropdown:
          "appearance-none bg-input border border-border rounded-lg h-2xl px-xs pr-lg typo-paragraph-sm font-normal cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",

        /* ── Weekday Name (Figma: 32×32, 12px/400) ── */
        weekday:
          "text-muted-foreground w-[32px] h-[32px] font-normal text-[12px] leading-[16px] flex items-center justify-center",

        /* ── Day cell wrapper (32×32 grid cell) ── */
        day: cn(
          "relative p-0 text-center typo-paragraph-sm focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-sm [&:has(>.day-range-start)]:rounded-l-sm first:[&:has([aria-selected])]:rounded-l-sm last:[&:has([aria-selected])]:rounded-r-sm"
            : "[&:has([aria-selected])]:rounded-sm"
        ),

        /* ── Day button (Figma: 32×32 r=4) ── */
        day_button:
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm size-[32px] typo-paragraph-sm font-normal bg-card text-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:pointer-events-none",

        /* ── Day states ── */
        selected:
          "[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary [&>button]:hover:text-primary-foreground rounded-sm",
        range_start:
          "day-range-start [&>button]:rounded-l-sm [&>button]:rounded-r-none",
        range_end:
          "day-range-end [&>button]:rounded-r-sm [&>button]:rounded-l-none",
        range_middle:
          "[&>button]:aria-selected:bg-accent [&>button]:aria-selected:text-foreground [&>button]:aria-selected:rounded-none [&>button]:aria-selected:hover:bg-accent/80",
        today: "relative z-10 ring-inset ring-1 ring-primary/40 rounded-sm",
        outside:
          "day-outside text-muted-foreground/40 [&>button]:text-muted-foreground/40 [&>button]:aria-selected:text-primary-foreground/70",
        disabled:
          "[&>button]:bg-card [&>button]:text-muted-foreground [&>button]:opacity-50 [&>button]:pointer-events-none",
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
