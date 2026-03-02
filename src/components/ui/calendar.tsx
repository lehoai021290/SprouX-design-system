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
 *   - Date Picker (288:119954): Type, Style, Size
 *   - Date Picker / Header (264:29273): [IconButton] [Caption] [IconButton] HORIZONTAL justify-between
 *   - Date Picker / Day (781:40922): 32×32 (Small) | 48×48 (Large/Custom)
 *
 * navLayout="around" places PreviousMonthButton and NextMonthButton
 * as direct children of Month (siblings of MonthCaption and MonthGrid).
 * CSS Grid on month positions: row 1 = [prev | caption | next], row 2 = [grid spanning all].
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
      navLayout="around"
      className={cn("p-md", className)}
      classNames={{
        /* ── Layout ── */
        months: "flex flex-col sm:flex-row gap-md",

        /* ── Month: CSS Grid to arrange header row + grid row
              navLayout="around" children order:
              [PreviousMonthButton?] [MonthCaption] [NextMonthButton?] [MonthGrid]
              Grid: row 1 = buttons + caption, row 2 = month grid ── */
        month: "grid grid-cols-[auto_1fr_auto] gap-y-md",

        month_grid: "col-span-full w-full border-collapse",
        weekdays: "flex",
        week: "flex w-full mt-[1px]",

        /* ── Header (Figma: 264:29273 — HORIZONTAL, justify-between, h=32)
              Buttons placed in grid col 1 & 3, caption in col 2 ── */
        month_caption:
          "col-start-2 row-start-1 flex items-center justify-center h-2xl",
        caption_label: "typo-paragraph-sm font-semibold",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "size-2xl rounded-lg p-[7px] col-start-1 row-start-1 self-center"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "size-2xl rounded-lg p-[7px] col-start-3 row-start-1 self-center"
        ),

        /* ── Header dropdowns (Figma: Select & Combobox r=8 h=32 px=8 gap=6) ── */
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
