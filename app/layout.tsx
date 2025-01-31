import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "~/utils/cn";
import { ThemeProvider } from "~/components/providers/theme-provider";
import { Navbar } from "~/components/navbar";
import { websiteName } from "~/constants/website-name";
import { Rice } from "~/components/rice";
import { LoadingBar } from "~/components/loading-bar";

const fira = Fira_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://graphicsprocessingunit.github.io"),
  title: `${websiteName}`,
  description: "This is my website",
  openGraph: {
    title: `🌴 ${websiteName}`,
    description: "This is my website",
    images: "/assets/palm_tree.png"
  },
  authors: [{ name: "Aaron", url: "https://graphicsprocessingunit.github.io" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={(cn(fira.className), "min-h-screen bg-neutral-200 dark:bg-neutral-900")}
        dir="ltr"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LoadingBar />
          <Navbar />
          {children}
          <Rice />
        </ThemeProvider>
      </body>
    </html>
  );
}
