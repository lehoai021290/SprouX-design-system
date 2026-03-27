import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { TextButton } from "@/components/ui/text-button"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { DecorationInput } from "@/components/ui/decoration-input"
import { useState } from "react"

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-card-subtle p-md">
      <div className="w-full max-w-[400px]">
        {/* Logo & welcome */}
        <div className="mb-xl flex flex-col items-center gap-xs">
          <div className="flex items-center gap-xs">
            <div className="flex size-3xl items-center justify-center rounded-lg bg-primary">
              <span className="typo-heading-3 text-primary-foreground">S</span>
            </div>
          </div>
          <h1 className="typo-heading-3 text-foreground">Welcome back</h1>
          <p className="typo-paragraph-small text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-lg p-xl">
            {/* Email */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                size="default"
                decorationLeft={
                  <DecorationInput type="icon">
                    <Mail />
                  </DecorationInput>
                }
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2xs">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                size="default"
                decorationLeft={
                  <DecorationInput type="icon">
                    <Lock />
                  </DecorationInput>
                }
                decorationRight={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="shrink-0 flex items-center justify-center size-lg p-0 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="size-md" /> : <Eye className="size-md" />}
                  </button>
                }
              />
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-xs">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="cursor-pointer">
                  Remember me
                </Label>
              </div>
              <TextButton variant="primary" size="default">
                Forgot password?
              </TextButton>
            </div>

            {/* Sign in button */}
            <Button variant="default" size="lg" className="w-full">
              Sign in
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-sm">
              <Separator className="flex-1" />
              <span className="typo-paragraph-mini text-muted-foreground">or</span>
              <Separator className="flex-1" />
            </div>

            {/* Social sign-in */}
            <Button variant="outline" size="lg" className="w-full">
              <svg className="size-md" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Button>

            {/* Sign up link */}
            <p className="typo-paragraph-small text-muted-foreground text-center">
              Don't have an account?{" "}
              <TextButton variant="primary" size="default">
                Sign up
              </TextButton>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export { SignInPage }
