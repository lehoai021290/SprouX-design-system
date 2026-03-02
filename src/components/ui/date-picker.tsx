import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

/**
 * SprouX Date Picker
 *
 * Figma: [SprouX - DS] Foundation & Component (node 60:9340)
 *
 * Date selection using Calendar in a Popover.
 * Trigger uses Input component instance (Figma: Size=Regular, Roundness=Default, State=Default/Focus).
 * Input specs: h=36px, r=8px (radius-lg), gap=8px (xs), px=12px (sm), bg=input, border=border.
 * Decoration left: Calendar icon 16×16 (size-md).
 * States: Placeholder (muted-foreground), Value (foreground), Focus (ring).
 */
function DatePicker({
  date,
  onDateChange,
  className,
}: {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  className?: string
}) {
  const [selected, setSelected] = React.useState<Date | undefined>(date)

  const handleSelect = (day: Date | undefined) => {
    setSelected(day)
    onDateChange?.(day)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          data-slot="date-picker-trigger"
          className={cn(
            "flex h-9 w-full sm:w-[280px] items-center gap-xs rounded-lg border border-border bg-input px-sm typo-paragraph-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            !selected && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="size-md shrink-0" />
          <span className="flex-1 text-left">
            {selected ? format(selected, "PPP") : "Pick a date"}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
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
  className,
}: {
  from?: Date
  to?: Date
  onRangeChange?: (range: { from: Date | undefined; to: Date | undefined }) => void
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
    <Popover>
      <PopoverTrigger asChild>
        <button
          data-slot="date-range-picker-trigger"
          className={cn(
            "flex h-9 items-center gap-xs rounded-lg border border-border bg-input px-sm typo-paragraph-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            !range.from && "text-muted-foreground",
            className
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
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range.from ? { from: range.from, to: range.to } : undefined}
          onSelect={handleSelect}
          numberOfMonths={2}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

/**
 * SprouX Date & Time Picker
 *
 * Combines Calendar (single) + time input in a Popover.
 * Time input uses native <input type="time"> styled with SprouX tokens.
 */
function DateTimePicker({
  date,
  onDateTimeChange,
  className,
}: {
  date?: Date
  onDateTimeChange?: (date: Date | undefined) => void
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
    <Popover>
      <PopoverTrigger asChild>
        <button
          data-slot="date-time-picker-trigger"
          className={cn(
            "flex h-9 w-full sm:w-[280px] items-center gap-xs rounded-lg border border-border bg-input px-sm typo-paragraph-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            !selected && "text-muted-foreground",
            className
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
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleDateSelect}
          initialFocus
        />
        <div className="border-t border-border px-sm py-xs flex items-center gap-xs">
          <Clock className="size-md shrink-0 text-muted-foreground" />
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="flex-1 h-9 rounded-lg border border-border bg-input px-sm typo-paragraph-sm text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}

/**
 * SprouX Date Range & Time Picker
 *
 * Combines 2-month Calendar (range) + start/end time inputs in a Popover.
 */
function DateRangeTimePicker({
  from,
  to,
  onRangeChange,
  className,
}: {
  from?: Date
  to?: Date
  onRangeChange?: (range: {
    from: Date | undefined
    to: Date | undefined
  }) => void
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
    <Popover>
      <PopoverTrigger asChild>
        <button
          data-slot="date-range-time-picker-trigger"
          className={cn(
            "flex h-9 items-center gap-xs rounded-lg border border-border bg-input px-sm typo-paragraph-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            !range.from && "text-muted-foreground",
            className
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
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range.from ? { from: range.from, to: range.to } : undefined}
          onSelect={handleSelect}
          numberOfMonths={2}
          initialFocus
        />
        <div className="border-t border-border px-sm py-xs flex items-center gap-md">
          <div className="flex items-center gap-xs flex-1">
            <span className="typo-paragraph-sm text-muted-foreground shrink-0">From</span>
            <input
              type="time"
              value={fromTime}
              onChange={handleFromTime}
              className="flex-1 h-9 rounded-lg border border-border bg-input px-sm typo-paragraph-sm text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
            />
          </div>
          <div className="flex items-center gap-xs flex-1">
            <span className="typo-paragraph-sm text-muted-foreground shrink-0">To</span>
            <input
              type="time"
              value={toTime}
              onChange={handleToTime}
              className="flex-1 h-9 rounded-lg border border-border bg-input px-sm typo-paragraph-sm text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker, DateRangePicker, DateTimePicker, DateRangeTimePicker }
