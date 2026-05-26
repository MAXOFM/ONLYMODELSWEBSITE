import { Inter, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-code", display: "swap" });

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll").then(m => ({ default: m.SmoothScroll })), { ssr: false });

export const metadata: Metadata = {
  title: "OnlyModels — The Agency Creators Trust",
  description:
    "Scale your OnlyFans with the top 0.1% agency. AI-powered growth, dedicated U.S. chatters, and full transparency. Join the agency creators trust.",
  keywords: [
    "OnlyFans Agency",
    "OnlyFans Management",
    "Creator Growth",
    "OnlyModels",
    "OF Agency",
    "Creator Marketing",
    "OnlyFans Promotion",
    "OnlyFans Chatters",
  ],
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "OnlyModels — The Agency Creators Trust",
    description:
      "Scale your OnlyFans with the top 0.1% agency. AI-powered growth, dedicated U.S. chatters, and full transparency.",
    url: "https://onlymodels.ca",
    siteName: "OnlyModels",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OnlyModels — The Agency Creators Trust",
    description:
      "Scale your OnlyFans with the top 0.1% agency. AI-powered growth, dedicated U.S. chatters, and full transparency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('${THEME_STORAGE_KEY}') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script src="https://player.vimeo.com/api/player.js" defer></script>
      </head>
      <body className={`${inter.variable} ${outfit.variable} bg-background text-foreground antialiased`}>
        <CustomCursor />
        <SmoothScroll>
          <ThemeProvider>{children}</ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
