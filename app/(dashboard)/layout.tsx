import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

// Mock user for demo purposes
const mockUser = {
  email: "athlete@velpcamp.com",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <DashboardSidebar user={mockUser} />
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
