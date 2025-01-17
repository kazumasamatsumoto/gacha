import { SpaceBackground } from "@/components/space-background";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpaceBackground />
          <MainNav />
          <div className="relative z-10 pt-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
