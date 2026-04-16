import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis,
} from "@/components/ui/pagination"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Search, Plus, Home, FolderOpen, Truck,
  ArrowUpDown, HelpCircle,
} from "lucide-react"
import { TextButton } from "@/components/ui/text-button"

/* ─────────────────────────────────────────────
 * Types
 * ───────────────────────────────────────────── */
interface Campaign {
  id: number
  name: string
  deliveryStart: string
  daysLeft: number
  status: string
  backers: number
  raised: number
  milestone: string
  verified: number
  disputes: string
}

/* ─────────────────────────────────────────────
 * Mock data
 * ───────────────────────────────────────────── */
const campaigns: Campaign[] = [
  { id: 1, name: "Video Marketing Strategies for Startups", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 2, name: "Building an Effective Brand Identity Guide", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 3, name: "Mastering Social Media Strategies", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 4, name: "Ultimate Guide to Digital Marketing", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 5, name: "Ultimate Guide to Digital Marketing", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 6, name: "Ultimate Guide to Digital Marketing", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 7, name: "Ultimate Guide to Digital Marketing", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 8, name: "Ultimate Guide to Digital Marketing", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 9, name: "Ultimate Guide to Digital Marketing", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
  { id: 10, name: "Ultimate Guide to Digital Marketing", deliveryStart: "Dec 16, 2025", daysLeft: 16, status: "Delivery in progress", backers: 368, raised: 5500.00, milestone: "30%", verified: 168, disputes: "-" },
]

/* ─────────────────────────────────────────────
 * Sidebar
 * ───────────────────────────────────────────── */
const navItems = [
  { icon: Plus, label: "New concept", active: false },
  { icon: Home, label: "Home", active: false },
  { icon: FolderOpen, label: "My campaigns", active: false },
  { icon: Truck, label: "Delivery", active: true },
]

function AppSidebar() {
  return (
    <aside className="flex flex-col w-[240px] shrink-0 border-r border-border bg-card h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-xs px-md h-[60px] border-b border-border">
        <div className="flex items-center justify-center size-xl rounded-lg bg-primary">
          <span className="typo-paragraph-sm-bold text-primary-foreground">S</span>
        </div>
        <span className="typo-paragraph-sm-bold text-foreground">SprouX</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-3xs p-sm">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-xs px-sm py-xs rounded-lg cursor-pointer transition-colors typo-paragraph-sm ${
              item.active
                ? "bg-accent text-accent-foreground typo-paragraph-sm-medium"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <item.icon className="size-md" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

/* ─────────────────────────────────────────────
 * Top Bar
 * ───────────────────────────────────────────── */
function TopBar() {
  return (
    <header className="flex items-center justify-end gap-md px-lg h-[60px] border-b border-border bg-card">
      <TextButton variant="ghost" size="default">Discover</TextButton>
      <button className="flex items-center justify-center size-xl rounded-full text-muted-foreground hover:text-foreground cursor-pointer">
        <HelpCircle className="size-md" />
      </button>
      <Avatar className="size-xl">
        <AvatarFallback className="typo-paragraph-xs-bold bg-foreground text-background">CN</AvatarFallback>
      </Avatar>
    </header>
  )
}

/* ─────────────────────────────────────────────
 * KPI Card
 * ───────────────────────────────────────────── */
function KpiCard({ title, value, action }: { title: string; value: string; action?: React.ReactNode }) {
  return (
    <Card className="flex-1">
      <CardContent className="flex flex-col gap-xs p-lg">
        <span className="typo-paragraph-sm text-muted-foreground">{title}</span>
        <div className="flex items-center justify-between">
          <span className="typo-heading-3 text-foreground">{value}</span>
          {action}
        </div>
      </CardContent>
    </Card>
  )
}

/* ─────────────────────────────────────────────
 * Main Page
 * ───────────────────────────────────────────── */
function DeliveryPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filtered = campaigns.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === "all" || c.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="flex min-h-screen bg-card-subtle">
      <AppSidebar />

      <div className="flex flex-col flex-1">
        <TopBar />

        <main className="flex flex-col gap-xl p-xl">
          {/* Title */}
          <h1 className="typo-heading-2 text-foreground">Delivery campaigns</h1>

          {/* My Earnings */}
          <section className="flex flex-col gap-md">
            <div className="flex items-center justify-between">
              <h2 className="typo-paragraph-large-semibold text-foreground">My earnings</h2>
              <TextButton variant="primary" size="default">Transaction history</TextButton>
            </div>

            <div className="flex gap-md">
              <KpiCard title="Total raised" value="$6,000.00" />
              <KpiCard title="Total pending" value="$0.00" />
              <KpiCard
                title="Total available"
                value="$6,000.00"
                action={<Button variant="outline" size="default">Withdraw</Button>}
              />
            </div>
          </section>

          <Separator />

          {/* Campaigns */}
          <section className="flex flex-col gap-md">
            <h2 className="typo-paragraph-large-semibold text-foreground">Campaigns</h2>

            {/* Filters */}
            <div className="flex items-center justify-between gap-md">
              <div className="w-[320px]">
                <Input
                  placeholder="Search campaigns"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  decorationLeft={
                    <div className="flex items-center justify-center size-lg text-muted-foreground">
                      <Search className="size-md" />
                    </div>
                  }
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="Delivery in progress">Delivery in progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Disputed">Disputed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Table */}
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[220px]">
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Campaign name <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                    <TableHead>
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Delivery start <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                    <TableHead>
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Days left <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Backers <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                    <TableHead>
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Raised <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                    <TableHead>
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Milestone <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                    <TableHead>
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Verified <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                    <TableHead>
                      <span className="inline-flex items-center gap-3xs cursor-pointer">Disputes <ArrowUpDown className="size-sm opacity-50" /></span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((campaign) => (
                    <TableRow key={campaign.id} className="cursor-pointer">
                      <TableCell className="typo-paragraph-sm-medium text-foreground max-w-[220px] truncate">
                        {campaign.name}
                      </TableCell>
                      <TableCell>{campaign.deliveryStart}</TableCell>
                      <TableCell>{campaign.daysLeft}</TableCell>
                      <TableCell>
                        <Badge variant="emphasis" level="secondary" size="sm">{campaign.status}</Badge>
                      </TableCell>
                      <TableCell>{campaign.backers}</TableCell>
                      <TableCell>${campaign.raised.toLocaleString("en-US", { minimumFractionDigits: 2 })}</TableCell>
                      <TableCell>{campaign.milestone}</TableCell>
                      <TableCell>{campaign.verified}</TableCell>
                      <TableCell>{campaign.disputes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <span className="typo-paragraph-sm text-muted-foreground">Showing 1-10 of 100</span>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export { DeliveryPage }
