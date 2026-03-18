import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

/* ── Shared input trigger class (Figma: Input Size=Regular, r=8, h=36) ── */
const triggerClass =
  "flex h-9 items-center gap-xs rounded-lg border border-border bg-input px-sm typo-paragraph-small text-foreground transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"

/* ── Shared time input class (Figma: Time Picker Input 4838:14965, 90×36, r=8, no icons, px=12) ── */
const timeInputClass =
  "h-9 w-[90px] rounded-lg border border-border bg-input px-sm typo-paragraph-small text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"

/**
 * SprouX Date Picker Input
 *
 * Figma: [SprouX - DS] Foundation & Component (node 60:9340)
 *
 * Properties:
 *   State:      Placeholder | Value | Focus  → native states
 *   Show Label: True | False                 → label prop
 *
 * Input specs: 197×36 (input only) or 197×60 (with label), r=8, bg=input, border=border.
 * Decoration left: Calendar icon 16×16 (size-md).
 * Placeholder: "Pick a date" in muted-foreground.
 * Value: "Jan 20, 2025" (PPP format) in foreground.
 * Label: 14px/500 foreground.
 */
function DatePicker({
  date,
  onDateChange,
  label,
  className,
}: {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  label?: string
  className?: string
}) {
  const [selected, setSelected] = React.useState<Date | undefined>(date)

  const handleSelect = (day: Date | undefined) => {
    setSelected(day)
    onDateChange?.(day)
  }

  return (
    <div className={cn("flex flex-col gap-[4px]", className)}>
      {label && (
        <label className="typo-paragraph-small font-medium text-foreground">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            data-slot="date-picker-trigger"
            className={cn(
              triggerClass,
              "w-full sm:w-[197px]",
              !selected && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="size-md shrink-0" />
            <span className="flex-1 text-left">
              {selected ? format(selected, "PPP") : "Pick a date"}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto !p-0">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={handleSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

/**
 * SprouX Date Range Picker
 *
 * Figma: [SprouX - DS] Foundation & Component (node 288:119954, Type=Range)
 *
 * Date range selection using a 2-month Calendar in a Popover.
 * Trigger shows "Start – End" format or placeholder.
 */
function DateRangePicker({
  from,
  to,
  onRangeChange,
  label,
  className,
}: {
  from?: Date
  to?: Date
  onRangeChange?: (range: { from: Date | undefined; to: Date | undefined }) => void
  label?: string
  className?: string
}) {
  const [range, setRange] = React.useState<{
    from: Date | undefined
    to: Date | undefined
  }>({ from, to })

  const handleSelect = (selected: { from?: Date; to?: Date } | undefined) => {
    const newRange = { from: selected?.from, to: selected?.to }
    setRange(newRange)
    onRangeChange?.(newRange)
  }

  return (
    <div className={cn("flex flex-col gap-[4px]", className)}>
      {label && (
        <label className="typo-paragraph-small font-medium text-foreground">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            data-slot="date-range-picker-trigger"
            className={cn(
              triggerClass,
              !range.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="size-md shrink-0" />
            <span className="flex-1 text-left">
              {range.from ? (
                range.to ? (
                  `${format(range.from, "LLL dd, y")} – ${format(range.to, "LLL dd, y")}`
                ) : (
                  format(range.from, "LLL dd, y")
                )
              ) : (
                "Pick a date range"
              )}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto !p-0" align="start">
          <Calendar
            mode="range"
            selected={range.from ? { from: range.from, to: range.to } : undefined}
            onSelect={handleSelect}
            numberOfMonths={2}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

/**
 * SprouX Date & Time Picker
 *
 * Combines Calendar (single) + Time Picker Input in a Popover.
 *
 * Figma Time Picker Input (node 4838:14965):
 *   State:      Placeholder | Value | Focus  → native states
 *   Show Label: True | False                 → label prop
 *   Input: 124×36, r=8, bg=input, clock icon 16×16 decoration-left
 *   Placeholder: "00:00:00" muted-foreground  |  Value: "10:30:00" foreground
 */
function DateTimePicker({
  date,
  onDateTimeChange,
  label,
  timeLabel,
  className,
}: {
  date?: Date
  onDateTimeChange?: (date: Date | undefined) => void
  label?: string
  timeLabel?: string
  className?: string
}) {
  const [selected, setSelected] = React.useState<Date | undefined>(date)
  const [time, setTime] = React.useState(date ? format(date, "HH:mm") : "")

  const combine = (day: Date | undefined, t: string) => {
    if (!day) return day
    const d = new Date(day)
    if (t) {
      const [h, m] = t.split(":").map(Number)
      d.setHours(h, m, 0, 0)
    }
    return d
  }

  const handleDateSelect = (day: Date | undefined) => {
    const combined = combine(day, time)
    setSelected(combined)
    onDateTimeChange?.(combined)
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target.value
    setTime(t)
    if (selected) {
      const combined = combine(selected, t)
      setSelected(combined)
      onDateTimeChange?.(combined)
    }
  }

  return (
    <div className={cn("flex flex-col gap-[4px]", className)}>
      {label && (
        <label className="typo-paragraph-small font-medium text-foreground">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            data-slot="date-time-picker-trigger"
            className={cn(
              triggerClass,
              "w-full sm:w-[280px]",
              !selected && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="size-md shrink-0" />
            <span className="flex-1 text-left">
              {selected
                ? `${format(selected, "PPP")}${time ? ` ${time}` : ""}`
                : "Pick date & time"}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto !p-0">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={handleDateSelect}
            initialFocus
          />
          <div className="border-t border-border px-sm py-xs">
            <div className="flex flex-col gap-[4px]">
              {timeLabel && (
                <label className="typo-paragraph-small font-medium text-foreground">
                  {timeLabel}
                </label>
              )}
              <input
                type="time"
                value={time}
                onChange={handleTimeChange}
                placeholder="00:00"
                className={cn(timeInputClass, !time && "text-muted-foreground")}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

/**
 * SprouX Date Range & Time Picker
 *
 * Combines 2-month Calendar (range) + From/To Time Picker Inputs in a Popover.
 */
function DateRangeTimePicker({
  from,
  to,
  onRangeChange,
  label,
  className,
}: {
  from?: Date
  to?: Date
  onRangeChange?: (range: {
    from: Date | undefined
    to: Date | undefined
  }) => void
  label?: string
  className?: string
}) {
  const [range, setRange] = React.useState<{
    from: Date | undefined
    to: Date | undefined
  }>({ from, to })
  const [fromTime, setFromTime] = React.useState(from ? format(from, "HH:mm") : "")
  const [toTime, setToTime] = React.useState(to ? format(to, "HH:mm") : "")

  const withTime = (d: Date | undefined, t: string) => {
    if (!d) return d
    const out = new Date(d)
    if (t) {
      const [h, m] = t.split(":").map(Number)
      out.setHours(h, m, 0, 0)
    }
    return out
  }

  const handleSelect = (selected: { from?: Date; to?: Date } | undefined) => {
    const newRange = {
      from: withTime(selected?.from, fromTime),
      to: withTime(selected?.to, toTime),
    }
    setRange(newRange)
    onRangeChange?.(newRange)
  }

  const handleFromTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target.value
    setFromTime(t)
    if (range.from) {
      const newRange = { ...range, from: withTime(range.from, t) }
      setRange(newRange)
      onRangeChange?.(newRange)
    }
  }

  const handleToTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target.value
    setToTime(t)
    if (range.to) {
      const newRange = { ...range, to: withTime(range.to, t) }
      setRange(newRange)
      onRangeChange?.(newRange)
    }
  }

  return (
    <div className={cn("flex flex-col gap-[4px]", className)}>
      {label && (
        <label className="typo-paragraph-small font-medium text-foreground">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            data-slot="date-range-time-picker-trigger"
            className={cn(
              triggerClass,
              !range.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="size-md shrink-0" />
            <span className="flex-1 text-left">
              {range.from ? (
                range.to
                  ? `${format(range.from, "LLL dd, y")}${fromTime ? ` ${fromTime}` : ""} – ${format(range.to, "LLL dd, y")}${toTime ? ` ${toTime}` : ""}`
                  : `${format(range.from, "LLL dd, y")}${fromTime ? ` ${fromTime}` : ""}`
              ) : (
                "Pick date & time range"
              )}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto !p-0" align="start">
          <Calendar
            mode="range"
            selected={range.from ? { from: range.from, to: range.to } : undefined}
            onSelect={handleSelect}
            numberOfMonths={2}
            initialFocus
          />
          <div className="border-t border-border px-sm py-xs flex items-center gap-md">
            <div className="flex flex-col gap-[4px]">
              <label className="typo-paragraph-small font-medium text-foreground">From</label>
              <input
                type="time"
                value={fromTime}
                onChange={handleFromTime}
                placeholder="00:00"
                className={cn(timeInputClass, !fromTime && "text-muted-foreground")}
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label className="typo-paragraph-small font-medium text-foreground">To</label>
              <input
                type="time"
                value={toTime}
                onChange={handleToTime}
                placeholder="00:00"
                className={cn(timeInputClass, !toTime && "text-muted-foreground")}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { DatePicker, DateRangePicker, DateTimePicker, DateRangeTimePicker }
