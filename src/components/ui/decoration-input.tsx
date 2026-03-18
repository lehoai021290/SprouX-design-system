import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * SprouX Decoration Input
 *
 * Figma: [SprouX - DS] Foundation & Component (node 4755:1968)
 *
 * Polymorphic decoration slot used inside Input fields (left and right).
 * Subset of Right Decoration types, tailored for input context.
 *
 * Type variants:
 *   icon         — Single icon (16px) in p-[2px] wrapper
 *   text         — Text in foreground color (typo-paragraph-small)
 *   text-muted   — Text in muted-foreground color (typo-paragraph-small)
 *   icon-muted   — Icon in muted-foreground, size-lg padded
 *   avatar       — Pass <Avatar> component
 *   text-button  — Pass <TextButton> component
 *   payment-card — Payment card icons in flex row (gap-3xs)
 */

const decorationInputVariants = cva(
  "shrink-0 flex items-center relative",
  {
    variants: {
      type: {
        "icon": "justify-center size-lg p-0",
        "text": "flex-col h-lg justify-center typo-paragraph-small text-foreground",
        "text-muted": "flex-col h-lg justify-center typo-paragraph-small text-muted-foreground",
        "icon-muted": "justify-center size-lg p-0 text-muted-foreground",
        "avatar": "",
        "text-button": "flex-col h-lg justify-center",
        "payment-card": "gap-3xs",
      },
    },
    defaultVariants: {
      type: "icon",
    },
  }
)

type DecorationInputType =
  | "icon"
  | "text"
  | "text-muted"
  | "icon-muted"
  | "avatar"
  | "text-button"
  | "payment-card"

type DecorationInputProps = {
  type?: DecorationInputType
  children: React.ReactNode
  className?: string
}

function DecorationInput({
  type = "icon",
  children,
  className,
}: DecorationInputProps) {
  return (
    <div
      data-slot="decoration-input"
      className={cn(decorationInputVariants({ type }), className)}
    >
      {children}
    </div>
  )
}

export {
  DecorationInput,
  decorationInputVariants,
  type DecorationInputProps,
  type DecorationInputType,
}
