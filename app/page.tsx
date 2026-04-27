"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import HomeBelowFold from "@/components/HomeBelowFold";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight animate-hero-fade-up [animation-delay:100ms]">
              The AI-Native Platform for{" "}
              <span className="text-gradient">Field Service Businesses</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-primary-foreground/70 animate-hero-fade-up [animation-delay:200ms]">
              Servinix combines fleet GPS tracking, field service management, and AI-powered assistants in one platform — helping service businesses run operations faster, respond to customers quicker, and eliminate the need for multiple disconnected tools.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-hero-fade-up [animation-delay:300ms]">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-8 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/product">
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-24 max-w-5xl mx-auto animate-hero-fade-up [animation-delay:500ms]">
            <div className="rounded-xl border border-border/50 overflow-hidden glow-primary">
              <picture>
                <source type="image/webp" srcSet="/images/hero-dashboard-mobile.webp 700w, /images/hero-dashboard-sm-opt.webp 768w, /images/hero-dashboard-opt.webp 1344w" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px" />
                <img src="/images/hero-dashboard.png" alt="Servinix platform dashboard showing fleet tracking and job management" className="w-full h-auto" loading="eager" fetchPriority="high" width={1344} height={768} />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <HomeBelowFold />
    </>
  );
};

export default Index;
