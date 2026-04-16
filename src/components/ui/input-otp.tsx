import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Minus } from "lucide-react"

import { cn } from "@/lib/utils"

/**
 * SprouX Input OTP
 *
 * Figma: [SprouX - DS] Foundation & Component (node 140:11468)
 *
 * Properties:
 *   Size:      Large (40px) | Default (36px) | Small (32px) | Mini (24px)
 *   Position:  Left | Middle | Right → handled by first:/last: CSS
 *   State:     Empty | Placeholder | Value | Focus | Error | Error Focus | Disabled → native states
 *
 * Multi-cell one-time-password input built on input-otp.
 */

type OtpSize = "lg" | "default" | "sm" | "xs"

const OTPSizeContext = React.createContext<OtpSize>("default")

/** Slot dimension per size */
const slotSizeClass = {
  lg: "size-size-lg",       // 40px
  default: "size-size-md",  // 36px
  sm: "size-size-sm",       // 32px
  xs: "size-size-xs",       // 24px
} as const

/** Border radius per size — Left position */
const radiusLeftClass = {
  lg: "first:rounded-l-lg",   // 8px
  default: "first:rounded-l-lg",
  sm: "first:rounded-l-md",   // 6px
  xs: "first:rounded-l-sm",   // 4px
} as const

/** Border radius per size — Right position */
const radiusRightClass = {
  lg: "last:rounded-r-lg",
  default: "last:rounded-r-lg",
  sm: "last:rounded-r-md",
  xs: "last:rounded-r-sm",
} as const

/** Text style per size */
const textClass = {
  lg: "typo-paragraph-sm",     // 14px
  default: "typo-paragraph-sm",
  sm: "typo-paragraph-sm",
  xs: "typo-paragraph-xs",   // 12px
} as const

/** Caret height per size */
const caretClass = {
  lg: "h-md",      // 16px
  default: "h-md",
  sm: "h-sm",      // 12px
  xs: "h-xs",      // 8px
} as const

function InputOTP({
  className,
  containerClassName,
  inputSize = "default",
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
  inputSize?: OtpSize
}) {
  return (
    <OTPSizeContext.Provider value={inputSize}>
      <OTPInput
        data-slot="input-otp"
        containerClassName={cn(
          "flex items-center gap-xs has-disabled:opacity-50",
          containerClassName
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
      />
    </OTPSizeContext.Provider>
  )
}

function InputOTPGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
  const size = React.useContext(OTPSizeContext)

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        /* Base */
        "relative flex items-center justify-center border-y border-r border-border bg-input text-foreground transition-all first:border-l",
        /* Size */
        slotSizeClass[size],
        textClass[size],
        /* Radius — Left & Right positions */
        radiusLeftClass[size],
        radiusRightClass[size],
        /* Focus: border-strong + ring */
        isActive && "z-10 border-border-strong ring-[3px] ring-ring",
        /* Error: via aria-invalid on parent OTPInput */
        "aria-invalid:border-destructive-border",
        /* Error + Focus */
        isActive && "aria-invalid:ring-ring-error",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className={cn("w-px animate-caret-blink bg-foreground duration-1000", caretClass[size])} />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <Minus aria-hidden="true" />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
