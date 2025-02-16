"use client";

import { ThemeProvider } from "next-themes";
import Header from "./_components/header";
import Footer from "./_components/footer";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
