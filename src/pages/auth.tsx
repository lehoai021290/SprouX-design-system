import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { TextButton } from "@/components/ui/text-button"
import { Alert, AlertTitle, AlertDescription, AlertDismiss } from "@/components/ui/alert"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Spinner } from "@/components/ui/spinner"
import { Progress } from "@/components/ui/progress"
import { DecorationInput } from "@/components/ui/decoration-input"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import {
  Eye, EyeOff, ArrowLeft, CheckCircle2, AlertCircle,
} from "lucide-react"

/* ────────────────────────────────────────────────────────────────────
 * Shared Layout
 * ──────────────────────────────────────────────────────────────────── */
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-card-subtle p-md">
      <div className="w-full" style={{ maxWidth: "25rem" }}>
        {children}
      </div>
      <Toaster position="top-right" />
    </div>
  )
}

function Logo() {
  return (
    <div className="flex size-3xl items-center justify-center rounded-lg bg-primary">
      <span className="typo-heading-3 text-primary-foreground">S</span>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg className="size-md" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3xs text-muted-foreground typo-paragraph-sm hover:text-foreground transition-colors cursor-pointer"
    >
      <ArrowLeft className="size-md" />
      Back
    </button>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Password strength
 * ──────────────────────────────────────────────────────────────────── */
function getPasswordStrength(pw: string) {
  let score = 0
  if (pw.length >= 8) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  const labels = ["Weak", "Fair", "Good", "Strong"] as const
  const colors = ["bg-destructive", "bg-warning", "bg-primary", "bg-success"] as const
  return { score, label: labels[Math.max(0, score - 1)] ?? "Weak", color: colors[Math.max(0, score - 1)] ?? "bg-destructive" }
}

function PasswordStrength({ password }: { password: string }) {
  if (!password) return null
  const { score, label } = getPasswordStrength(password)
  return (
    <div className="flex flex-col gap-3xs">
      <div className="flex gap-3xs">
        {[1, 2, 3, 4].map((i) => (
          <Progress key={i} value={i <= score ? 100 : 0} className="h-3xs flex-1" />
        ))}
      </div>
      <span className="typo-paragraph-xs text-muted-foreground">
        Password strength: {label}
      </span>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Validation helpers
 * ──────────────────────────────────────────────────────────────────── */
function validateEmail(email: string) {
  if (!email) return "Email is required"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email"
  return null
}

function validatePassword(pw: string) {
  if (!pw) return "Password is required"
  if (pw.length < 8) return "Password must be at least 8 characters"
  return null
}

function validateName(name: string) {
  if (!name) return "Name is required"
  if (name.length < 2) return "Name must be at least 2 characters"
  return null
}

/* ────────────────────────────────────────────────────────────────────
 * 1. SIGN IN
 * ──────────────────────────────────────────────────────────────────── */
function SignInScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const [globalError, setGlobalError] = useState<string | null>(null)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const emailErr = validateEmail(email)
      const pwErr = validatePassword(password)
      setErrors({ email: emailErr, password: pwErr })
      if (emailErr || pwErr) {
        toast.error("Please fix the errors", { description: [emailErr, pwErr].filter(Boolean).join(". ") })
        return
      }

      setLoading(true)
      setGlobalError(null)
      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        if (email === "locked@test.com") {
          setGlobalError("This account has been locked. Please contact support.")
          toast.error("Account locked", { description: "This account has been locked. Please contact support." })
        } else if (password !== "Password1!") {
          setGlobalError("Invalid email or password. Please try again.")
          toast.error("Sign in failed", { description: "Invalid email or password. Please try again." })
        } else {
          onNavigate("success")
        }
      }, 1500)
    },
    [email, password, onNavigate]
  )

  return (
    <AuthLayout>
      <div className="mb-xl flex flex-col items-center gap-xs">
        <Logo />
        <h1 className="typo-heading-3 text-foreground">Welcome back</h1>
        <p className="typo-paragraph-sm text-muted-foreground">
          Sign in to your account to continue
        </p>
      </div>

      <Card>
        <CardContent className="p-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
            {globalError && (
              <Alert variant="destructive" icon={AlertCircle}>
                <AlertTitle>Sign in failed</AlertTitle>
                <AlertDescription>{globalError}</AlertDescription>
                <AlertDismiss onClick={() => setGlobalError(null)} />
              </Alert>
            )}

            {/* Email */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="si-email">Email</Label>
              <Input
                id="si-email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email || undefined}
              />
              {errors.email && (
                <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.email}</span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="si-pw">Password</Label>
              <Input
                id="si-pw"
                type={showPw ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={!!errors.password || undefined}
                decorationRight={
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="cursor-pointer"
                    tabIndex={-1}
                  >
                    <DecorationInput type="icon-muted">
                      {showPw ? <EyeOff /> : <Eye />}
                    </DecorationInput>
                  </button>
                }
              />
              {errors.password && (
                <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.password}</span>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <Checkbox id="si-remember" />
                <Label htmlFor="si-remember" className="cursor-pointer">Remember me</Label>
              </div>
              <TextButton variant="primary" size="default" onClick={() => onNavigate("forgot")}>
                Forgot password?
              </TextButton>
            </div>

            {/* Submit */}
            <Button type="submit" variant="default" size="lg" className="w-full" disabled={loading}>
              {loading ? <Spinner size="sm" /> : "Sign in"}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-sm">
              <Separator className="flex-1" />
              <span className="typo-paragraph-xs text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            {/* Google */}
            <Button type="button" variant="outline" size="lg" className="w-full">
              <GoogleIcon />
              Continue with Google
            </Button>

            {/* Sign up */}
            <p className="typo-paragraph-sm text-muted-foreground text-center">
              Don&apos;t have an account?{" "}
              <TextButton variant="primary" size="default" onClick={() => onNavigate("signup")}>
                Sign up
              </TextButton>
            </p>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * 2. SIGN UP
 * ──────────────────────────────────────────────────────────────────── */
function SignUpScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void
}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const [globalError, setGlobalError] = useState<string | null>(null)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const nameErr = validateName(name)
      const emailErr = validateEmail(email)
      const pwErr = validatePassword(password)
      const agreeErr = !agreed ? "You must accept the terms" : null
      setErrors({ name: nameErr, email: emailErr, password: pwErr, agree: agreeErr })
      if (nameErr || emailErr || pwErr || agreeErr) {
        toast.error("Please fix the errors", { description: [nameErr, emailErr, pwErr, agreeErr].filter(Boolean).join(". ") })
        return
      }

      setLoading(true)
      setGlobalError(null)
      setTimeout(() => {
        setLoading(false)
        if (email === "taken@test.com") {
          setGlobalError("An account with this email already exists.")
          toast.error("Registration failed", { description: "An account with this email already exists." })
        } else {
          onNavigate("verify")
        }
      }, 1500)
    },
    [name, email, password, agreed, onNavigate]
  )

  return (
    <AuthLayout>
      <div className="mb-xl flex flex-col items-center gap-xs">
        <Logo />
        <h1 className="typo-heading-3 text-foreground">Create account</h1>
        <p className="typo-paragraph-sm text-muted-foreground">
          Get started with your free account
        </p>
      </div>

      <Card>
        <CardContent className="p-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
            {globalError && (
              <Alert variant="destructive" icon={AlertCircle}>
                <AlertTitle>Registration failed</AlertTitle>
                <AlertDescription>{globalError}</AlertDescription>
                <AlertDismiss onClick={() => setGlobalError(null)} />
              </Alert>
            )}

            {/* Name */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="su-name">Full name</Label>
              <Input
                id="su-name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={!!errors.name || undefined}
              />
              {errors.name && (
                <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="su-email">Email</Label>
              <Input
                id="su-email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email || undefined}
              />
              {errors.email && (
                <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.email}</span>
              )}
            </div>

            {/* Password + strength */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="su-pw">Password</Label>
              <Input
                id="su-pw"
                type={showPw ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={!!errors.password || undefined}
                decorationRight={
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="cursor-pointer"
                    tabIndex={-1}
                  >
                    <DecorationInput type="icon-muted">
                      {showPw ? <EyeOff /> : <Eye />}
                    </DecorationInput>
                  </button>
                }
              />
              {errors.password && (
                <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.password}</span>
              )}
              <PasswordStrength password={password} />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-xs">
              <Checkbox
                id="su-agree"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                aria-invalid={!!errors.agree || undefined}
              />
              <Label htmlFor="su-agree" className="cursor-pointer typo-paragraph-sm text-muted-foreground">
                I agree to the{" "}
                <TextButton variant="primary" size="default">Terms of Service</TextButton>
                {" "}and{" "}
                <TextButton variant="primary" size="default">Privacy Policy</TextButton>
              </Label>
            </div>
            {errors.agree && (
              <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.agree}</span>
            )}

            {/* Submit */}
            <Button type="submit" variant="default" size="lg" className="w-full" disabled={loading}>
              {loading ? <Spinner size="sm" /> : "Create account"}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-sm">
              <Separator className="flex-1" />
              <span className="typo-paragraph-xs text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            {/* Google */}
            <Button type="button" variant="outline" size="lg" className="w-full">
              <GoogleIcon />
              Continue with Google
            </Button>

            {/* Sign in link */}
            <p className="typo-paragraph-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <TextButton variant="primary" size="default" onClick={() => onNavigate("signin")}>
                Sign in
              </TextButton>
            </p>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * 3. FORGOT PASSWORD
 * ──────────────────────────────────────────────────────────────────── */
function ForgotPasswordScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void
}) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const emailErr = validateEmail(email)
      if (emailErr) { setError(emailErr); toast.error("Validation error", { description: emailErr }); return }

      setLoading(true)
      setError(null)
      setTimeout(() => {
        setLoading(false)
        setSent(true)
      }, 1500)
    },
    [email]
  )

  return (
    <AuthLayout>
      <div className="mb-xl flex flex-col items-center gap-xs">
        <Logo />
        <h1 className="typo-heading-3 text-foreground">
          {sent ? "Check your email" : "Forgot password?"}
        </h1>
        <p className="typo-paragraph-sm text-muted-foreground text-center">
          {sent
            ? `We sent a reset link to ${email}`
            : "No worries, we'll send you reset instructions"}
        </p>
      </div>

      <Card>
        <CardContent className="p-xl">
          {sent ? (
            <div className="flex flex-col gap-lg">
              <Alert variant="success">
                <CheckCircle2 className="size-md" />
                <AlertTitle>Email sent</AlertTitle>
                <AlertDescription>
                  Check your inbox and follow the link to reset your password. The link expires in 30 minutes.
                </AlertDescription>
              </Alert>

              <Button variant="default" size="lg" className="w-full" onClick={() => onNavigate("reset")}>
                Open email app
              </Button>

              <p className="typo-paragraph-sm text-muted-foreground text-center">
                Didn&apos;t receive the email?{" "}
                <TextButton
                  variant="primary"
                  size="default"
                  onClick={() => { setSent(false); setEmail("") }}
                >
                  Click to resend
                </TextButton>
              </p>

              <div className="flex justify-center">
                <BackButton onClick={() => onNavigate("signin")} />
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
              {/* Email */}
              <div className="flex flex-col gap-2xs">
                <Label htmlFor="fp-email">Email</Label>
                <Input
                  id="fp-email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!error || undefined}
                />
                {error && (
                  <span className="typo-paragraph-xs text-destructive-subtle-foreground">{error}</span>
                )}
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full" disabled={loading}>
                {loading ? <Spinner size="sm" /> : "Send reset link"}
              </Button>

              <div className="flex justify-center">
                <BackButton onClick={() => onNavigate("signin")} />
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * 4. RESET PASSWORD
 * ──────────────────────────────────────────────────────────────────── */
function ResetPasswordScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void
}) {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string | null>>({})
  const [done, setDone] = useState(false)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const pwErr = validatePassword(password)
      const confirmErr = !confirm ? "Please confirm your password" : confirm !== password ? "Passwords do not match" : null
      setErrors({ password: pwErr, confirm: confirmErr })
      if (pwErr || confirmErr) {
        toast.error("Please fix the errors", { description: [pwErr, confirmErr].filter(Boolean).join(". ") })
        return
      }

      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setDone(true)
      }, 1500)
    },
    [password, confirm]
  )

  if (done) {
    return (
      <AuthLayout>
        <div className="mb-xl flex flex-col items-center gap-xs">
          <div className="flex size-3xl items-center justify-center rounded-lg bg-success">
            <CheckCircle2 className="size-xl text-success-foreground" />
          </div>
          <h1 className="typo-heading-3 text-foreground">Password reset</h1>
          <p className="typo-paragraph-sm text-muted-foreground text-center">
            Your password has been successfully reset. You can now sign in with your new password.
          </p>
        </div>
        <Card>
          <CardContent className="p-xl">
            <Button variant="default" size="lg" className="w-full" onClick={() => onNavigate("signin")}>
              Back to sign in
            </Button>
          </CardContent>
        </Card>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout>
      <div className="mb-xl flex flex-col items-center gap-xs">
        <Logo />
        <h1 className="typo-heading-3 text-foreground">Set new password</h1>
        <p className="typo-paragraph-sm text-muted-foreground text-center">
          Must be at least 8 characters with uppercase, number, and symbol
        </p>
      </div>

      <Card>
        <CardContent className="p-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
            {/* New password */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="rp-pw">New password</Label>
              <Input
                id="rp-pw"
                type={showPw ? "text" : "password"}
                placeholder="Create a new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={!!errors.password || undefined}
                decorationRight={
                  <button type="button" onClick={() => setShowPw(!showPw)} className="cursor-pointer" tabIndex={-1}>
                    <DecorationInput type="icon-muted">
                      {showPw ? <EyeOff /> : <Eye />}
                    </DecorationInput>
                  </button>
                }
              />
              {errors.password && (
                <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.password}</span>
              )}
              <PasswordStrength password={password} />
            </div>

            {/* Confirm */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="rp-confirm">Confirm password</Label>
              <Input
                id="rp-confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                aria-invalid={!!errors.confirm || undefined}
                decorationRight={
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="cursor-pointer" tabIndex={-1}>
                    <DecorationInput type="icon-muted">
                      {showConfirm ? <EyeOff /> : <Eye />}
                    </DecorationInput>
                  </button>
                }
              />
              {errors.confirm && (
                <span className="typo-paragraph-xs text-destructive-subtle-foreground">{errors.confirm}</span>
              )}
            </div>

            <Button type="submit" variant="default" size="lg" className="w-full" disabled={loading}>
              {loading ? <Spinner size="sm" /> : "Reset password"}
            </Button>

            <div className="flex justify-center">
              <BackButton onClick={() => onNavigate("signin")} />
            </div>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * 5. EMAIL VERIFICATION (OTP)
 * ──────────────────────────────────────────────────────────────────── */
function VerifyEmailScreen({
  onNavigate,
}: {
  onNavigate: (screen: Screen) => void
}) {
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resendCooldown, setResendCooldown] = useState(0)

  const handleVerify = useCallback(() => {
    if (otp.length < 6) {
      setError("Please enter the full 6-digit code")
      toast.error("Incomplete code", { description: "Please enter the full 6-digit code." })
      return
    }
    setLoading(true)
    setError(null)
    setTimeout(() => {
      setLoading(false)
      if (otp === "000000") {
        setError("Invalid code. Please check and try again.")
        toast.error("Invalid code", { description: "Please check and try again." })
      } else if (otp === "999999") {
        setError("This code has expired. Please request a new one.")
        toast.error("Code expired", { description: "Please request a new one." })
      } else {
        onNavigate("success")
      }
    }, 1500)
  }, [otp, onNavigate])

  const handleResend = useCallback(() => {
    setResendCooldown(60)
    setError(null)
    const timer = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) { clearInterval(timer); return 0 }
        return prev - 1
      })
    }, 1000)
  }, [])

  return (
    <AuthLayout>
      <div className="mb-xl flex flex-col items-center gap-xs">
        <Logo />
        <h1 className="typo-heading-3 text-foreground">Verify your email</h1>
        <p className="typo-paragraph-sm text-muted-foreground text-center">
          We sent a 6-digit code to your email. Enter it below to verify your account.
        </p>
      </div>

      <Card>
        <CardContent className="p-xl">
          <div className="flex flex-col gap-lg">
            {error && (
              <Alert variant="destructive" icon={AlertCircle}>
                <AlertTitle>Verification failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                <AlertDismiss onClick={() => setError(null)} />
              </Alert>
            )}

            {/* OTP */}
            <div className="flex flex-col items-center gap-sm">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
                aria-invalid={!!error || undefined}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button
              variant="default"
              size="lg"
              className="w-full"
              disabled={loading || otp.length < 6}
              onClick={handleVerify}
            >
              {loading ? <Spinner size="sm" /> : "Verify email"}
            </Button>

            {/* Resend */}
            <p className="typo-paragraph-sm text-muted-foreground text-center">
              Didn&apos;t receive a code?{" "}
              {resendCooldown > 0 ? (
                <span className="typo-paragraph-sm-medium text-foreground">
                  Resend in {resendCooldown}s
                </span>
              ) : (
                <TextButton variant="primary" size="default" onClick={handleResend}>
                  Resend code
                </TextButton>
              )}
            </p>

            <div className="flex justify-center">
              <BackButton onClick={() => onNavigate("signin")} />
            </div>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * 6. SUCCESS
 * ──────────────────────────────────────────────────────────────────── */
function SuccessScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <AuthLayout>
      <div className="mb-xl flex flex-col items-center gap-xs">
        <div className="flex size-3xl items-center justify-center rounded-lg bg-success">
          <CheckCircle2 className="size-xl text-success-foreground" />
        </div>
        <h1 className="typo-heading-3 text-foreground">You&apos;re in!</h1>
        <p className="typo-paragraph-sm text-muted-foreground text-center">
          Your account is ready. Welcome to SprouX.
        </p>
      </div>
      <Card>
        <CardContent className="p-xl flex flex-col gap-md">
          <Button variant="default" size="lg" className="w-full">
            Go to dashboard
          </Button>
          <div className="flex justify-center">
            <BackButton onClick={() => onNavigate("signin")} />
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Router
 * ──────────────────────────────────────────────────────────────────── */
type Screen = "signin" | "signup" | "forgot" | "reset" | "verify" | "success"

function AuthFlow() {
  const [screen, setScreen] = useState<Screen>("signin")

  switch (screen) {
    case "signin":
      return <SignInScreen onNavigate={setScreen} />
    case "signup":
      return <SignUpScreen onNavigate={setScreen} />
    case "forgot":
      return <ForgotPasswordScreen onNavigate={setScreen} />
    case "reset":
      return <ResetPasswordScreen onNavigate={setScreen} />
    case "verify":
      return <VerifyEmailScreen onNavigate={setScreen} />
    case "success":
      return <SuccessScreen onNavigate={setScreen} />
  }
}

export { AuthFlow, SignInScreen, SignUpScreen, ForgotPasswordScreen, ResetPasswordScreen, VerifyEmailScreen }
