"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { useEffect } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Header() {
  useEffect(() => {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const buttons = document.querySelectorAll("button[data-section]");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const sectionId = button.getAttribute("data-section");
        scrollToSection(sectionId);
      });
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">LogoGenie</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <button
            data-section="features"
            className="text-muted-foreground hover:text-foreground"
          >
            Features
          </button>
          <button
            data-section="examples"
            className="text-muted-foreground hover:text-foreground"
          >
            Examples
          </button>
          <button
            data-section="pricing"
            className="text-muted-foreground hover:text-foreground"
          >
            Pricing
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <SignedOut>
            <SignInButton afterSignInUrl="/" afterSignUpUrl="/">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <SignInButton afterSignInUrl="/" afterSignUpUrl="/">
              <Button>Get Started</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn afterSignUpUrl="/" afterSignInUrl="/">
            <Button>Dashboard</Button>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
