import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

/**
 * SprouX Drawer
 *
 * Figma: [SprouX - DS] Foundation & Component → Drawer (151:12313)
 *
 * Mobile-first bottom drawer built on vaul.
 * Swipe to close, snap points, nested scrolling.
 *
 * Figma tokens:
 * - Content BG: --card (#ffffff / #252522)
 * - Content border: --border (#e9e9e7)
 * - Content radius: 8px (--radius-lg) — top corners only
 * - Content shadow: shadow (2 drop-shadows)
 * - Handle: 50×3px, r=2 (--radius-sm), fill --muted (#f3f3f2)
 * - Slot/Card padding: T:24 L:16 R:16 B:16 (xl/md/md/md)
 * - Inner gap: 24px (--spacing-xl)
 * - Title: heading 4 (Geist/600 20px/24px)
 * - Description: paragraph small (Geist/400 14px/20px)
 */
function Drawer({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return (
    <DrawerPrimitive.Root
      data-slot="drawer"
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  )
}

function DrawerTrigger(
  props: React.ComponentProps<typeof DrawerPrimitive.Trigger>
) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal(
  props: React.ComponentProps<typeof DrawerPrimitive.Portal>
) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose(
  props: React.ComponentProps<typeof DrawerPrimitive.Close>
) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn("fixed inset-0 z-50 bg-black/50", className)}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-lg border border-border bg-card shadow",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-md h-[3px] w-[50px] rounded-sm bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-xs p-md text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        "flex flex-col-reverse gap-xs p-md sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("typo-heading-4 text-foreground", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("typo-paragraph-small text-muted-foreground", className)}
      {...props}
    />
  )
}

/** Shared class config — single source of truth for component + docs preview */
const drawerClassNames = {
  content: "flex h-auto flex-col rounded-t-lg border border-border bg-card shadow",
  handle: "mx-auto mt-md h-[3px] w-[50px] rounded-sm bg-muted",
  header: "flex flex-col gap-xs p-md text-center sm:text-left",
  footer: "flex flex-col-reverse gap-xs p-md sm:flex-row sm:justify-end",
  title: "typo-heading-4 text-foreground",
  description: "typo-paragraph-small text-muted-foreground",
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  drawerClassNames,
}
