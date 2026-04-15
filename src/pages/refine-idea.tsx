/**
 * Let's Refine Your Idea — Desktop
 *
 * Figma: [SprouX - Working iDea] (node 2117:2736)
 *
 * Page where users choose between AI Assistant (conversational)
 * or Self-Guided Framework (structured form) to refine their idea.
 */
import { Check, CircleCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { TitlePage } from "@/components/ui/title"

// ─── Feature List Item ───

function FeatureItem({
  children,
  variant = "success",
}: {
  children: React.ReactNode
  variant?: "success" | "muted"
}) {
  return (
    <div className="flex items-start gap-xs">
      <div
        className={`flex items-center justify-center rounded-full size-lg shrink-0 ${
          variant === "success" ? "bg-success" : "bg-accent"
        }`}
      >
        <Check
          className={`size-md ${
            variant === "success" ? "text-white" : "text-muted-foreground"
          }`}
        />
      </div>
      <p className="typo-paragraph-sm text-foreground">{children}</p>
    </div>
  )
}

// ─── Option Card ───

type OptionCardProps = {
  title: string
  subtitle: string
  description: string
  features: string[]
  bestFor: string
  buttonLabel: string
  variant: "primary" | "outline"
}

function OptionCard({
  title,
  subtitle,
  description,
  features,
  bestFor,
  buttonLabel,
  variant,
}: OptionCardProps) {
  const isPrimary = variant === "primary"

  return (
    <div className="flex-1 flex flex-col bg-card rounded-lg border border-border overflow-clip">
      {/* Header */}
      <div className="flex flex-col gap-xs items-center text-center p-lg">
        <h3 className="typo-heading-3 text-foreground">{title}</h3>
        <p className="typo-paragraph-base text-muted-foreground">{subtitle}</p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-xl border-y border-border px-lg py-lg">
        <p className="typo-paragraph-base-medium text-foreground">{description}</p>

        <div className="flex flex-col gap-sm">
          {features.map((feature) => (
            <FeatureItem
              key={feature}
              variant={isPrimary ? "success" : "muted"}
            >
              {feature}
            </FeatureItem>
          ))}
        </div>

        {/* Best for banner */}
        <div
          className={`rounded-lg px-sm py-xs ${
            isPrimary
              ? "bg-success-subtle"
              : "bg-card-subtle"
          }`}
        >
          <p
            className={`typo-paragraph-sm-semibold ${
              isPrimary
                ? "text-success-subtle-foreground"
                : "text-foreground"
            }`}
          >
            {bestFor}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-lg">
        <Button
          variant={isPrimary ? "default" : "outline"}
          className="w-full"
        >
          {buttonLabel}
          <ArrowRight />
        </Button>
      </div>
    </div>
  )
}

// ─── Page ───

export default function RefineIdeaPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <header className="flex items-center justify-between h-[60px] px-2xl bg-card border-b border-border shrink-0">
        <div className="flex items-center gap-xs">
          <img
            src="/sproux-logo.svg"
            alt="SprouX"
            className="h-xl"
          />
        </div>
        <Button variant="outline" size="sm">
          Exit
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center pb-xl flex-1">
        {/* Title */}
        <div className="w-full max-w-[800px] pt-2xl px-2xl pb-md">
          <TitlePage
            title="Let's refine your idea"
            subtitle="Turn your vague concept into a structured, market-ready plan in 15-20 minutes."
          />
        </div>

        {/* Body */}
        <div className="w-full max-w-[800px] px-2xl flex flex-col gap-md">
          {/* Emphasis Alert */}
          <Alert variant="emphasis" icon={CircleCheck}>
            <AlertTitle>Most creators prefer the AI Assistant</AlertTitle>
            <AlertDescription>
              The conversational approach helps you think through aspects of your
              idea you might not have considered. You'll reach the same refined
              concept faster, with more insights along the way.
            </AlertDescription>
          </Alert>

          {/* Option Cards */}
          <div className="flex gap-md">
            <OptionCard
              title="AI Assistant"
              subtitle="Conversational"
              description="Chat with our AI to explore your idea through guided questions"
              features={[
                "Personalized follow-ups",
                "Adaptive conversation",
                "15-20 minutes",
              ]}
              bestFor="Best for: Exploring your idea interactively"
              buttonLabel="Start with AI"
              variant="primary"
            />
            <OptionCard
              title="Self-Guided Framework"
              subtitle="Structured"
              description="Complete a structured form with all questions visible upfront"
              features={[
                "See the full path ahead",
                "Work at your own pace",
                "30-40 minutes",
              ]}
              bestFor="Best for: Those who prefer structure"
              buttonLabel="Use self-guided"
              variant="outline"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
