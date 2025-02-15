import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "LogoGenie - AI-Powered Logo Generation",
  description:
    "Create unique and professional logos for your brand with our AI-powered logo generator.",
  keywords: ["logo generator", "AI logo", "brand design", "logo maker"],
  authors: [{ name: "LogoGenie Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
