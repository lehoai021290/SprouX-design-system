import * as React from "react"
import { Toaster as Sonner } from "sonner"
import {
  CircleCheck,
  Info,
  Loader2,
  OctagonX,
  TriangleAlert,
} from "lucide-react"

/**
 * SprouX Sonner (Toast)
 *
 * Figma: [SprouX - DS] Foundation & Component — node 295:240815
 *
 * Toast notifications via sonner library.
 * Place <Toaster /> at root, trigger with toast() function.
 *
 * Uses `unstyled` to strip all sonner defaults — SprouX tokens applied
 * entirely via classNames so real toast() output matches Explore Behavior.
 */

/** Shared class config — single source of truth for both Toaster and docs preview */
const toastClassNames = {
  toast:
    "group toast flex items-center gap-sm bg-card border border-border rounded-[var(--radius-10)] p-md shadow w-[356px]",
  title: "typo-paragraph-sm-bold text-foreground",
  description: "typo-paragraph-sm text-muted-foreground mt-3xs",
  actionButton:
    "shrink-0 bg-primary text-primary-foreground typo-paragraph-mini-bold rounded-lg px-xs py-3xs min-h-[24px] cursor-pointer",
  cancelButton:
    "shrink-0 bg-muted text-muted-foreground typo-paragraph-mini-bold rounded-lg px-xs py-3xs min-h-[24px] border border-border cursor-pointer",
}

/** Shared icon map — single source of truth */
const toastIcons = {
  success: <CircleCheck className="size-xl text-emerald-600 shrink-0" />,
  info: <Info className="size-xl text-blue-500 shrink-0" />,
  warning: <TriangleAlert className="size-xl text-amber-500 shrink-0" />,
  error: <OctagonX className="size-xl text-destructive shrink-0" />,
  loading: <Loader2 className="size-xl text-muted-foreground animate-spin shrink-0" />,
}

function Toaster(props: React.ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      data-slot="sonner-toaster"
      className="toaster group"
      icons={toastIcons}
      toastOptions={{
        unstyled: true,
        classNames: toastClassNames,
      }}
      {...props}
    />
  )
}

export { Toaster, toastClassNames, toastIcons }
