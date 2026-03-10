import * as React from "react"
import { ArrowLeft, ChevronLeft } from "lucide-react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { TextButton } from "@/components/ui/text-button"

/**
 * SprouX Title System
 *
 * Figma: [SprouX - DS] Foundation & Component (node 2094:4361)
 *
 * Composable title components for Page, Section, Card, Input, Information,
 * InformationText, and TextValue contexts.
 *
 * Sub-components:
 *   TitlePage        — Page-level heading (Fraunces 600 30/32)
 *   TitleSection     — Section-level heading (Geist 600 16/24)
 *   TitleCard        — Card-level heading (Geist 600 14/20, foreground-subtle)
 *   TitleInput       — Input/form label (Geist 500 14/20)
 *   TitleInformation — Key-value label (Geist 600 16/24 or 400 14/20)
 *   InformationText  — Value display with highlight levels (Figma 3489:962)
 *   TextValue        — Subtle text value with optional tooltip underline (Figma 4491:3770)
 */

/* ----------------------------------------------------------------
   Title/Page
   Figma: 4290:3438
   Back:     TextButton instance — ArrowLeft 16px + "Page Back Title" text, primary color
   Title:    Fraunces SemiBold 30/32 -1px → typo-heading-2, text-foreground
   Tooltip:  Info icon 16px, muted-foreground — slot (ReactNode)
   Badge:    inline after title, slot (ReactNode)
   Decoration Right: slot (ReactNode) — maps to Right Decoration (Figma 18:1373)
   Subtitle: Geist Regular 16/24 → typo-paragraph, text-foreground-subtle
   Gap:      12px (sm) between back link, title group, and subtitle
   ---------------------------------------------------------------- */

type TitlePageProps = {
  title?: string
  subtitle?: React.ReactNode
  badge?: React.ReactNode
  tooltip?: React.ReactNode
  decoration?: React.ReactNode
  showBack?: boolean
  backLabel?: string
  onBack?: () => void
  className?: string
  children?: React.ReactNode
}

function TitlePage({
  title,
  subtitle,
  badge,
  tooltip,
  decoration,
  showBack,
  backLabel = "Page Back Title",
  onBack,
  className,
  children,
}: TitlePageProps) {
  return (
    <div
      data-slot="title-page"
      className={cn("flex flex-col gap-sm", className)}
    >
      {showBack && (
        <TextButton
          data-slot="title-back"
          variant="primary"
          size="default"
          onClick={onBack}
          className="self-start"
        >
          <ArrowLeft />
          {backLabel}
        </TextButton>
      )}
      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-sm">
          <div className="flex items-center gap-sm min-w-0">
            {title && (
              <h1 className="typo-heading-2 text-foreground">
                {title}
              </h1>
            )}
            {tooltip}
            {badge}
          </div>
          {decoration && (
            <div data-slot="title-decoration" className="shrink-0 ml-auto">{decoration}</div>
          )}
        </div>
        {subtitle && (
          <div data-slot="title-subtitle" className="typo-paragraph text-foreground-subtle">
            {subtitle}
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

/* ----------------------------------------------------------------
   Title/Section
   Figma: 2715:8384
   Properties: Show Title, Show Bage, Show decoration right, Show Description, Show Tooltip, Size
   Title:       Geist SemiBold 16/24 → typo-paragraph-bold, text-foreground
   Tooltip:     Info icon 16px, muted-foreground — slot (ReactNode)
   Badge:       inline after tooltip, slot (ReactNode)
   Decoration:  Right decoration slot (ReactNode) — maps to Right Decoration (Figma 18:1373)
   Description: Geist Regular 14/20 → typo-paragraph-sm, text-foreground-subtle
   Gap:         4px (3xs) between title row and description
   Min-height:  32px (2xl) for title row
   RULE:        When title is absent, the entire title row hides (only description remains)
   ---------------------------------------------------------------- */

type TitleSectionProps = {
  title?: string
  description?: string
  tooltip?: React.ReactNode
  badge?: React.ReactNode
  decoration?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

function TitleSection({
  title,
  description,
  tooltip,
  badge,
  decoration,
  className,
  children,
}: TitleSectionProps) {
  return (
    <div
      data-slot="title-section"
      className={cn("flex flex-col gap-3xs", className)}
    >
      {title && (
        <div className="flex items-center gap-xs min-h-2xl">
          <div className="flex flex-1 items-center gap-xs min-w-0">
            <span className="typo-paragraph-bold text-foreground">
              {title}
            </span>
            {tooltip}
            {badge}
          </div>
          {decoration && (
            <div data-slot="title-decoration" className="shrink-0">{decoration}</div>
          )}
        </div>
      )}
      {description && (
        <p className="typo-paragraph-sm text-foreground-subtle">{description}</p>
      )}
      {children}
    </div>
  )
}

/* ----------------------------------------------------------------
   Title/Card
   Figma: 2575:5379
   Properties: Show Back, Show Badge, Show decoration right, Show Description, Show Tooltip, Spacing
   Title:       Geist SemiBold 14/20 → typo-paragraph-sm-bold, text-foreground-subtle
   Description: Geist Regular 14/20 → typo-paragraph-sm, text-foreground-subtle
   Back:        chevron-left 16px, foreground color
   Badge:       inline after title, slot (ReactNode)
   Decoration:  Right decoration slot (ReactNode) — maps to Right Decoration (Figma 18:1373)
   Tooltip:     Dashed underline on title text (boolean, NOT info icon)
   Gap:         4px (3xs) between back+group, 8px (xs) in title row
   Min-height:  32px (2xl) for title row
   Spacing:     16px or 24px variant (padding context)
   ---------------------------------------------------------------- */

type TitleCardProps = {
  title?: string
  description?: string
  badge?: React.ReactNode
  showTooltip?: boolean
  decoration?: React.ReactNode
  showBack?: boolean
  onBack?: () => void
  className?: string
  children?: React.ReactNode
}

function TitleCard({
  title,
  description,
  badge,
  showTooltip,
  decoration,
  showBack,
  onBack,
  className,
  children,
}: TitleCardProps) {
  return (
    <div
      data-slot="title-card"
      className={cn("flex gap-3xs items-start", className)}
    >
      {showBack && (
        <button
          data-slot="title-back"
          type="button"
          onClick={onBack}
          className="flex items-center justify-center size-2xl shrink-0 text-foreground hover:text-foreground/80 transition-colors"
        >
          <ChevronLeft className="size-md" />
        </button>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-xs min-h-2xl">
          <div className="flex flex-1 items-center gap-xs min-w-0">
            {title && (
              <span className={cn(
                "typo-paragraph-sm-bold text-foreground-subtle",
                showTooltip && "underline decoration-dashed underline-offset-4"
              )}>
                {title}
              </span>
            )}
            {badge}
          </div>
          {decoration && (
            <div data-slot="title-decoration" className="shrink-0">{decoration}</div>
          )}
        </div>
        {description && (
          <p className="typo-paragraph-sm text-foreground-subtle">{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Title/Input
   Figma: 2071:30664
   Properties: Type (Required/Optional), Size (Normal/Small), Show decoration right
   Label:      Geist Medium 14/20 (Normal) → typo-paragraph-sm-medium
               Geist Medium 12/16 (Small) → typo-paragraph-mini-medium
   Color:      text-foreground
   Decoration: Geist Regular 14/20 → typo-paragraph-sm, text-muted-foreground
   Layout:     flex items-baseline justify-between
   ---------------------------------------------------------------- */

type TitleInputProps = {
  label: string
  type?: "required" | "optional"
  size?: "normal" | "small"
  decoration?: React.ReactNode
  className?: string
}

function TitleInput({
  label,
  type = "required",
  size = "normal",
  decoration,
  className,
}: TitleInputProps) {
  return (
    <div
      data-slot="title-input"
      className={cn("flex items-baseline justify-between", className)}
    >
      <div className="flex items-center gap-3xs">
        <span className={cn(
          "text-foreground",
          size === "normal" ? "typo-paragraph-sm-medium" : "typo-paragraph-mini-medium"
        )}>
          {label}
        </span>
        {type === "optional" && (
          <span className={cn(
            "text-foreground",
            size === "normal" ? "typo-paragraph-sm-medium" : "typo-paragraph-mini-medium"
          )}>
            (Optional)
          </span>
        )}
      </div>
      {decoration && (
        <div data-slot="title-decoration" className="typo-paragraph-sm text-muted-foreground">
          {decoration}
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------
   Title/Information
   Figma: 2718:9628
   Properties: Level (Large/Default), Show decoration right, Show Icon Prefix, Show Tooltip
   Large:      Geist SemiBold 16/24 → typo-paragraph-bold, text-foreground
   Default:    Geist Regular 14/20 → typo-paragraph-sm, text-foreground
   Icon:       prefix icon in bordered circle (24px, border-border, rounded-full)
   Tooltip:    Dashed underline on label text (boolean, NOT info icon)
   Decoration: Geist Regular 14/20 → typo-paragraph-sm, text-muted-foreground
   Gap:        16px (md) between label and decoration
   ---------------------------------------------------------------- */

type TitleInformationProps = {
  label: string
  level?: "large" | "default"
  icon?: React.ReactNode
  showTooltip?: boolean
  decoration?: React.ReactNode
  className?: string
}

function TitleInformation({
  label,
  level = "default",
  icon,
  showTooltip,
  decoration,
  className,
}: TitleInformationProps) {
  return (
    <div
      data-slot="title-information"
      className={cn("flex items-center gap-md", className)}
    >
      <div className="flex flex-1 items-center gap-3xs min-w-0">
        {icon && (
          <span className="flex items-center justify-center size-xl shrink-0 border border-border rounded-full">
            {icon}
          </span>
        )}
        <span className={cn(
          "text-foreground",
          level === "large" ? "typo-paragraph-bold" : "typo-paragraph-sm",
          showTooltip && "underline decoration-dashed underline-offset-4"
        )}>
          {label}
        </span>
      </div>
      {decoration && (
        <div data-slot="title-decoration" className="shrink-0 typo-paragraph-sm text-muted-foreground">
          {decoration}
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------
   Information Text
   Figma: 3489:962
   Properties: Highlight Value (Default/Medium/High), Align Text (Left/Right)
   Default:    Geist Regular 14/20 → typo-paragraph-sm, text-foreground
   Medium:     Geist SemiBold 16/24 → typo-paragraph-bold, text-foreground
   High:       Geist SemiBold 30/32 -1px → typo-paragraph-xl-bold, text-foreground
   Align:      text-left or text-right
   ---------------------------------------------------------------- */

const informationTextVariants = cva(
  "text-foreground min-w-0 flex-1",
  {
    variants: {
      highlight: {
        default: "typo-paragraph-sm",
        medium: "typo-paragraph-bold",
        high: "typo-paragraph-xl-bold",
      },
      align: {
        left: "text-left",
        right: "text-right",
      },
    },
    defaultVariants: {
      highlight: "default",
      align: "left",
    },
  }
)

type InformationTextProps = {
  children: React.ReactNode
  highlight?: "default" | "medium" | "high"
  align?: "left" | "right"
  moreInfo?: React.ReactNode
  className?: string
}

function InformationText({
  children,
  highlight = "default",
  align = "left",
  moreInfo,
  className,
}: InformationTextProps) {
  return (
    <div
      data-slot="information-text"
      className={cn("flex items-start gap-3xs", className)}
    >
      <p className={cn(informationTextVariants({ highlight, align }))}>
        {children}
      </p>
      {moreInfo && (
        <div className="shrink-0 flex items-center p-4xs">
          {moreInfo}
        </div>
      )}
    </div>
  )
}

/* ----------------------------------------------------------------
   Text Value
   Figma: 4491:3770
   Properties: Show Tooltip (True/False)
   Text:       Geist Regular 14/20 → typo-paragraph-sm, text-foreground-subtle
   Tooltip:    Dashed underline on text (boolean)
   ---------------------------------------------------------------- */

type TextValueProps = {
  children: React.ReactNode
  showTooltip?: boolean
  className?: string
}

function TextValue({
  children,
  showTooltip,
  className,
}: TextValueProps) {
  return (
    <span
      data-slot="text-value"
      className={cn(
        "typo-paragraph-sm text-foreground-subtle",
        showTooltip && "underline decoration-dashed underline-offset-4",
        className
      )}
    >
      {children}
    </span>
  )
}

/* ----------------------------------------------------------------
   Right Decoration
   Figma: 18:1373
   Polymorphic decoration slot used by Title/Section, Title/Card,
   Title/Input, Title/Information, and other components.

   Type variants:
     icon             — Single icon (16px) in p-4xs wrapper
     text             — Text in foreground color (typo-paragraph-sm)
     text-muted       — Text in muted-foreground color (typo-paragraph-sm)
     icon-muted       — Icon in muted-foreground, size-lg padded
     deco-icon-primary — Icon in primary bg, rounded-sm, size-lg
     deco-icon-outline — Icon in bordered box, rounded-sm, size-lg
     avatar           — Pass <Avatar> component
     switch           — Pass <Switch> component
     text-button      — Pass <TextButton> component
     button           — Pass <Button> component
     button-group     — Multiple buttons in flex row
     tabs             — Pass <Tabs> component
     select           — Pass <Select> component
     text-select      — Text label + <Select> in flex row
     count-character  — "0/{max} characters" counter
     count-word       — "0/{max} words" counter
     badge            — Pass <Badge> component
     icon-button      — Pass icon button with border
     filter           — Chip filter group
   ---------------------------------------------------------------- */

const rightDecorationVariants = cva(
  "shrink-0 flex items-center relative",
  {
    variants: {
      type: {
        "icon": "p-4xs",
        "text": "typo-paragraph-sm text-foreground",
        "text-muted": "typo-paragraph-sm text-muted-foreground",
        "icon-muted": "justify-center p-xs size-lg text-muted-foreground",
        "deco-icon-primary": "justify-center p-xs rounded-sm size-lg bg-primary text-primary-foreground overflow-clip",
        "deco-icon-outline": "justify-center p-xs rounded-sm size-lg border border-border",
        "avatar": "",
        "switch": "gap-md",
        "text-button": "",
        "button": "",
        "button-group": "gap-xs",
        "tabs": "",
        "select": "",
        "text-select": "gap-md",
        "count-character": "gap-4xs typo-paragraph-sm text-muted-foreground",
        "count-word": "gap-4xs typo-paragraph-sm text-muted-foreground",
        "badge": "",
        "icon-button": "",
        "filter": "gap-xl overflow-clip",
      },
    },
    defaultVariants: {
      type: "icon",
    },
  }
)

type RightDecorationType =
  | "icon"
  | "text"
  | "text-muted"
  | "icon-muted"
  | "deco-icon-primary"
  | "deco-icon-outline"
  | "avatar"
  | "switch"
  | "text-button"
  | "button"
  | "button-group"
  | "tabs"
  | "select"
  | "text-select"
  | "count-character"
  | "count-word"
  | "badge"
  | "icon-button"
  | "filter"

type RightDecorationProps = {
  type?: RightDecorationType
  children: React.ReactNode
  className?: string
}

function RightDecoration({
  type = "icon",
  children,
  className,
}: RightDecorationProps) {
  return (
    <div
      data-slot="right-decoration"
      className={cn(rightDecorationVariants({ type }), className)}
    >
      {children}
    </div>
  )
}

export {
  TitlePage,
  TitleSection,
  TitleCard,
  TitleInput,
  TitleInformation,
  InformationText,
  TextValue,
  RightDecoration,
  informationTextVariants,
  rightDecorationVariants,
  type TitlePageProps,
  type TitleSectionProps,
  type TitleCardProps,
  type TitleInputProps,
  type TitleInformationProps,
  type InformationTextProps,
  type TextValueProps,
  type RightDecorationProps,
  type RightDecorationType,
}
