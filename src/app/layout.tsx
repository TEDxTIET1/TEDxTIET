import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import StackedCircularFooter from "@/components/ui/stacked-circular-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stacked Circular Footer Demo",
  description: "21st.dev footer demo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StackedCircularFooter /> {/* 👈 Only footer, no other content */}
      </body>
    </html>
  )
}
