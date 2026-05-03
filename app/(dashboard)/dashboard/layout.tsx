import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your shipments, track orders, and view logistics analytics.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
