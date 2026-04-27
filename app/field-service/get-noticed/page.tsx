"use client";

import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Megaphone, Globe, Star, Search, FileText, Palette, Share2, Users, TrendingUp } from "lucide-react";

const features = [
  { icon: Globe, title: "Professional Website", description: "Get a polished, mobile-friendly website that showcases your services, reviews, and booking options—no design skills needed." },
  { icon: Star, title: "Review Management", description: "Automatically request reviews after every job. Showcase your best reviews to build trust with new customers." },
  { icon: Search, title: "Local SEO", description: "Rank higher in local search results. Optimized Google Business Profile and consistent NAP across directories." },
  { icon: FileText, title: "Professional Quotes", description: "Send branded, professional quotes that make you look like the obvious choice. Track when customers view them." },
  { icon: Palette, title: "Branded Communications", description: "Every email, text, and invoice carries your brand. Professional appearance builds customer confidence." },
  { icon: Share2, title: "Referral Program", description: "Turn happy customers into your best marketing channel with automated referral tracking and rewards." },
  { icon: Users, title: "Customer Database", description: "Build a complete customer database with service history, preferences, and communication records." },
  { icon: TrendingUp, title: "Marketing Analytics", description: "See which channels drive the most leads. Track your marketing ROI and double down on what works." },
  { icon: Megaphone, title: "Automated Follow-Ups", description: "Stay top of mind with automated maintenance reminders, seasonal promotions, and re-engagement campaigns." },
];

const socialProof = [
  { stat: "3x", description: "More 5-star reviews collected" },
  { stat: "70%", description: "Of customers check reviews before booking" },
  { stat: "45%", description: "More repeat business with follow-ups" },
];

const FieldServiceGetNoticed = () => {
  return (
    <>
      <ProductPageHero
        badge="Get Noticed"
        icon={Megaphone}
        title="Get Found, Get Trusted,"
        highlight="Get Chosen"
        description="Make it easy for customers to find you, trust you, and choose you over your competitors. Build an online presence that wins business on autopilot."
      />

      {/* Social Proof Stats */}
      <section className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {socialProof.map((item, i) => (
              <motion.div
                key={item.description}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{item.stat}</div>
                <div className="mt-2 text-sm text-muted-foreground">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        badge="Features"
        title="Build trust and win"
        highlight="more business"
        description="Everything you need to stand out from the competition and become the obvious choice for customers."
        features={features}
        columns={3}
      />

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="From invisible to"
            highlight="unforgettable"
            description="A simple system to build your reputation and win more customers."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Complete a Job", description: "Your technician finishes the work and marks the job complete in Servinix." },
                { step: "2", title: "Automated Outreach", description: "Customer instantly receives a branded review request via text. Happy customers leave 5-star reviews." },
                { step: "3", title: "Win More Business", description: "New customers find you through reviews and your professional online presence. The cycle continues." },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center p-6 rounded-xl border border-border/50 bg-background"
                >
                  <div className="text-4xl font-bold text-gradient mb-4">{item.step}</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start winning more"
        highlight="customers"
        description="See how Servinix helps you build trust, get found, and grow your business."
      />
    </>
  );
};

export default FieldServiceGetNoticed;
