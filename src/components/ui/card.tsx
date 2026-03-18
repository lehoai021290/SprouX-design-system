import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * SprouX Card
 *
 * Figma: [SprouX - DS] Foundation & Component
 *
 * Component sets:
 *   - Card (179:29234): Show Title (True/False), Spacing (16px/24px)
 *     Container: r=8, border=--border, bg=--background
 *   - Card inner (2108:2660): Show Title (True/False), Spacing (16px/24px)
 *     Container: r=8, NO border, bg=--card-subtle
 *   - Title/Card (2575:5379): Back, Badge, Description, Decoration right, Spacing
 *
 * Spacing=16px: pad=16 → p-md  |  Spacing=24px: pad=24 → p-xl
 * Title/Card: pad=[16,16,16,0], gap=4
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-lg border border-border bg-background text-card-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardInner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-inner"
      className={cn(
        "rounded-lg bg-card-subtle text-card-subtle-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2xs p-md pb-0", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("typo-heading-4 text-foreground", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("typo-paragraph-small text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-md", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-md pt-0", className)}
      {...props}
    />
  )
}

export { Card, CardInner, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
