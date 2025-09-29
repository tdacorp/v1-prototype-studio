import type { Metadata } from "next"
import { geistSans, geistMono } from "@/lib/fonts"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    template: "%s - TDACorp",
    default: "Home - TDACorp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
