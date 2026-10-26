import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { siteConfig } from "@/data/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Social image and canonical URLs need an absolute base, so they are omitted until it is configured.
const ogImages = siteUrl
  ? [{ url: "/og", width: 1200, height: 630, alt: siteConfig.title }]
  : undefined;

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: siteUrl, alternates: { canonical: "/" } }),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
    images: ogImages,
  },
  twitter: {
    card: ogImages ? "summary_large_image" : "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ogImages,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1020",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
