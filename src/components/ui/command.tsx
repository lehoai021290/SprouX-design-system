import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * SprouX Command
 *
 * Figma: [SprouX - DS] Foundation & Component (node 66:5046)
 *   - Command Item (66:5600): State (Regular | Hover)
 *
 * Command palette / searchable menu. Built on cmdk.
 *
 * Figma specs:
 *   Container: r=12 (rounded-xl), border=--border, bg=--background, py=8 (py-xs)
 *   Input wrapper: border-b, px=8, pt=2 pb=6 (Spacer h=40). Input: h=32 (h-2xl), bg=transparent
 *   Search icon: size-md, --muted-foreground
 *   Separator: 1px --border
 *   List: pad=[4,0,4,0]
 *   Group label: 12px/400 --muted-foreground, pad=[8,8,8,8] (px-xs py-xs), h=32
 *   Item (Regular): r=6 (rounded-md), pad=[8,6,8,6], gap=8, text 14px/400 --foreground
 *   Item (Hover): fills=--accent
 */
function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-background py-xs text-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  children,
  ...props
}: React.ComponentProps<typeof Dialog>) {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <DialogTitle className="sr-only">Command</DialogTitle>
        <Command className="border-none [&_[cmdk-group-heading]]:px-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-xs [&_[cmdk-input-wrapper]_svg]:size-lg [&_[cmdk-input]]:h-size-lg [&_[cmdk-item]]:px-xs [&_[cmdk-item]]:py-[6px] [&_[cmdk-item]_svg]:size-lg">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div data-slot="command-input-wrapper" className="flex items-center border-b border-border px-xs pt-[2px] pb-[6px]" cmdk-input-wrapper="">
      <Search className="mr-xs size-md shrink-0 text-muted-foreground" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex h-size-sm w-full rounded-lg bg-transparent typo-paragraph-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
      {...props}
    />
  )
}

function CommandEmpty(
  props: React.ComponentProps<typeof CommandPrimitive.Empty>
) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-xl text-center typo-paragraph-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden px-[4px] py-0 text-foreground [&_[cmdk-group-heading]]:px-xs [&_[cmdk-group-heading]]:py-xs [&_[cmdk-group-heading]]:typo-paragraph-xs [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-xs rounded-md px-xs py-[6px] typo-paragraph-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-md [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("ml-auto typo-paragraph-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
