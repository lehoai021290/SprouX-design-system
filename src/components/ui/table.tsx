import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * SprouX Table (Data Table)
 *
 * Figma: [SprouX - DS] Foundation & Component
 *   - Table Header (19:6472): Content (Text|Sortable|Checkbox|Empty), Alignment (Left|Right),
 *     State (Default|Hover|Active), Show Tooltip, Show border
 *   - Table Cell (19:6314): Content (Text 1/2 Lines|Actions|Checkbox|Badge|Buttons|Avatar|Input|etc.),
 *     Alignment (Left|Right), State (Default|Hover|Active|Selected)
 *
 * Specs:
 *   Header: h=48, pad=[8,8,8,8] (p-xs), text 14px/600 (font-semibold), border-bottom 1px --border
 *   Cell: h=48, pad=[8,8,8,8] (p-xs), text 14px/400, border-bottom 1px --border
 *   Row hover: bg=--accent  |  Row selected: bg=--accent-selected
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-auto">
      <table
        data-slot="table"
        className={cn("w-full caption-bottom typo-paragraph-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 typo-paragraph-sm [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border transition-colors hover:bg-accent data-[state=selected]:bg-accent-selected",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      scope="col"
      className={cn(
        "h-[48px] p-xs text-left align-middle typo-paragraph-sm-bold text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-xs align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-md text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
}
