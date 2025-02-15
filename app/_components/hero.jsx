"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [logoName, setLogoName] = useState("");
  return (
    <section className="py-24 md:py-32">
      <div className="container flex flex-col items-center text-center space-y-8">
        <div className="flex items-center justify-center space-x-2 px-4 py-1.5 text-sm font-medium rounded-full bg-muted">
          <span className="text-primary">AI-Powered Logo Generation</span>
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Perfect Logos for Apps,
          <br />
          Businesses, and Websites
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Craft unique and professional logos effortlessly with our AI-powered
          tool. Perfect for apps, businesses, websites, and more!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
          <Input
            placeholder="Enter your logo name"
            className="h-12 text-base"
            onChange={(e) => setLogoName(e?.target.value)}
          />
          <Link href={"/create?title=" + logoName}>
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          No credit card required • Free plan available
        </p>
      </div>
    </section>
  );
}
