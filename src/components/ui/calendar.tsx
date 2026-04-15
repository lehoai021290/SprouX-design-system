import * as React from "react"
import { DayPicker } from "react-day-picker"
import type { DayButtonProps } from "react-day-picker"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

/**
 * SprouX Calendar
 *
 * Figma: [SprouX - DS] Foundation & Component
 *   - Calendar (4820:5638): card wrapper p=16 r=8
 *   - Date Picker (288:119954): Type, Style, Size
 *   - Date Picker / Header (264:29273): [IconButton 32×32] [Caption] [IconButton 32×32]
 *   - Day Cell (781:40922): 32×32 (Small) | 48×48 (Large/Custom)
 *
 * navLayout="around": PreviousMonthButton + NextMonthButton as children of Month.
 * CSS Grid on month: row 1 = [prev | caption | next], row 2 = [grid col-span-full].
 *
 * Dropdown component (Dropdown.js) renders:
 *   <span.dropdown_root>
 *     <select.dropdown />           ← interactive, visually hidden (opacity-0 absolute)
 *     <span.caption_label>          ← display text + Chevron icon
 *       "March" <Chevron down />
 *     </span>
 *   </span>
 *
 * captionLayout mapping:
 *   "label"           → 1 Month / 2 Months (text title)
 *   "dropdown"        → Year and Month (both selects)
 *   "dropdown-months" → Only Month (month select + year text)
 *   "dropdown-years"  → Only Year (year select + month text)
 */

/**
 * DayCell — Custom DayButton component (Figma 781:40922)
 *
 * Maps react-day-picker modifiers to Figma Day Cell states:
 *   Position: range_start → Start, range_end → End, range_middle → Middle,
 *             selected (single) → Single, default → Default
 *   State: selected, disabled, outside, today, focused → matching Figma states
 *
 * Position=Middle uses bg-accent (not bg-primary) per Figma spec.
 */
function DayCell({
  day,
  modifiers,
  className,
  ...props
}: DayButtonProps) {
  const {
    selected,
    disabled,
    outside,
    today,
    range_start,
    range_end,
    range_middle,
  } = modifiers

  const isMiddle = !!range_middle
  const isRangeEndpoint = !!range_start || !!range_end

  /* ── Position → border-radius ── */
  const posClass = range_start
    ? "rounded-l-sm rounded-r-none"
    : range_end
    ? "rounded-r-sm rounded-l-none"
    : isMiddle
    ? "rounded-none"
    : "rounded-sm"

  /* ── State → bg + text + effects ── */
  let stateClass: string
  if (disabled) {
    stateClass = isMiddle
      ? "bg-accent text-foreground opacity-50"
      : "bg-card text-muted-foreground opacity-50"
  } else if (outside) {
    stateClass = "bg-background text-foreground opacity-40"
  } else if (selected || isRangeEndpoint) {
    stateClass = isMiddle
      ? "bg-accent text-foreground hover:bg-accent/80"
      : "bg-primary text-primary-foreground hover:bg-primary"
  } else if (today) {
    stateClass = "bg-card text-foreground border border-brand-border"
  } else {
    stateClass = isMiddle
      ? "bg-accent text-foreground hover:bg-accent/80"
      : "bg-card text-foreground hover:bg-accent hover:text-foreground"
  }

  return (
    <button
      data-slot="day-cell"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap size-size-sm typo-paragraph-sm font-normal transition-colors",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
        posClass,
        stateClass,
        className
      )}
      disabled={disabled || outside}
      aria-disabled={disabled || outside || undefined}
      tabIndex={disabled || outside ? -1 : 0}
      {...props}
    />
  )
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      navLayout="around"
      formatters={{
        formatMonthDropdown: (month) =>
          month.toLocaleString("en-US", { month: "short" }),
        ...formatters,
      }}
      className={cn("p-md", className)}
      classNames={{
        /* ── Layout ── */
        months: "flex flex-col sm:flex-row gap-md",

        /* ── Month: CSS Grid — row 1 = header, row 2 = grid ── */
        month: "grid grid-cols-[auto_1fr_auto] gap-y-md",
        month_grid: "col-span-full w-full border-collapse",
        weekdays: "flex",
        week: "flex w-full mt-[1px]",

        /* ── Header (Figma: 264:29273)
              NavButtons = Icon Button Outline 32×32 r=8 p=7 ── */
        month_caption:
          "col-start-2 row-start-1 flex items-center justify-center h-size-sm",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "!size-size-sm rounded-lg p-[7px] col-start-1 row-start-1 self-center"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "!size-size-sm rounded-lg p-[7px] col-start-3 row-start-1 self-center"
        ),

        /* ── Caption label: visible in "label" mode as title,
              visible in "dropdown" mode as display text inside dropdown_root.
              In dropdown_root context: styled as Select trigger (r=8 h=32 px=8 border) ── */
        caption_label:
          "typo-paragraph-sm-semibold inline-flex items-center gap-[6px]",

        /* ── Dropdowns container ── */
        dropdowns: "flex items-center gap-xs",

        /* ── Each dropdown: root wraps <select> + <span.caption_label>
              Select is hidden (opacity-0 absolute), caption_label is the visible trigger
              styled as Figma Select & Combobox (r=8 h=32 px=8 gap=6 border) ── */
        dropdown_root:
          "relative inline-flex items-center bg-input border border-border rounded-lg h-size-sm px-xs",
        dropdown: "absolute inset-0 w-full opacity-0 cursor-pointer",
        months_dropdown: "absolute inset-0 w-full opacity-0 cursor-pointer",
        years_dropdown: "absolute inset-0 w-full opacity-0 cursor-pointer",

        /* ── Chevron icon (used in nav buttons AND dropdown indicators) ── */
        chevron: "size-[18px]",

        /* ── Weekday Name (Figma: 32×32, 12px/400) ── */
        weekday:
          "text-muted-foreground w-size-sm h-size-sm font-normal text-[12px] leading-[16px] flex items-center justify-center",

        /* ── Day cell wrapper ── */
        day: cn(
          "relative p-0 text-center focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-sm [&:has(>.day-range-start)]:rounded-l-sm first:[&:has([aria-selected])]:rounded-l-sm last:[&:has([aria-selected])]:rounded-r-sm"
            : "[&:has([aria-selected])]:rounded-sm"
        ),

        /* ── Day states (applied to wrapper <td>, DayCell handles visual) ── */
        selected: "rounded-sm",
        range_start: "day-range-start",
        range_end: "day-range-end",
        range_middle: "",
        today: "relative z-10",
        outside: "day-outside",
        disabled: "",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          if (orientation === "down") {
            return <ChevronDown aria-hidden="true" className="size-md text-muted-foreground" />
          }
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight
          return <Icon aria-hidden="true" className="size-[18px]" />
        },
        DayButton: DayCell,
        ...components,
      }}
      {...props}
    />
  )
}

export { Calendar, DayCell }
