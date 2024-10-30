import "@/styles/global.css";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "FactoryCraft",
    template: "%s | FactoryCraft",
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
