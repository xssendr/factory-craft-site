import "@/styles/global.css";
  import { Inter } from 'next/font/google'
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Navbar } from "@/components/navbar";
import { Providers } from "./providers";

const font = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: {
    default: "FactoryCraft",
  },
  description: "favicon",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={font.className}>
      <head />
      <body
        className="min-h-screen bg-background font-sans antialiased"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col h-screen">
            <Navbar />
            { children }
          </div>
        </Providers>
      </body>
    </html>
  );
}
