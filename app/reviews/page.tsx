"use client";

import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Star, Send, MessageSquare, TrendingUp, Shield, Bot, BarChart3, Globe, Bell } from "lucide-react";

const features = [
  { icon: Send, title: "Automated Review Invites", description: "Automatically send text-based review requests after every completed job. No manual follow-up needed." },
  { icon: Bot, title: "AI-Powered Responses", description: "AI generates personalized, thoughtful responses to every review—positive or negative—in your brand voice." },
  { icon: TrendingUp, title: "Rank Higher on Google", description: "More 5-star reviews boost your local search ranking. 93% of customers say reviews impact their buying decisions." },
  { icon: Globe, title: "Multi-Platform Support", description: "Collect and manage reviews across Google, Facebook, Yelp, and industry-specific platforms from one dashboard." },
  { icon: Shield, title: "Negative Review Interception", description: "Unhappy customers are routed to a private feedback form first, giving you a chance to resolve issues before they go public." },
  { icon: BarChart3, title: "Review Analytics", description: "Track review volume, average rating, sentiment trends, and response times across all platforms." },
  { icon: MessageSquare, title: "Review Widgets", description: "Showcase your best reviews on your website with customizable widgets that build instant trust." },
  { icon: Bell, title: "Instant Notifications", description: "Get alerted immediately when new reviews come in. Never miss feedback—respond quickly to maintain your reputation." },
  { icon: Star, title: "Review Campaigns", description: "Run targeted campaigns to past customers for review collection. Re-engage your happiest customers." },
];

const stats = [
  { value: "2x", label: "More reviews collected" },
  { value: "93%", label: "Say reviews impact buying" },
  { value: "4.8★", label: "Average customer rating" },
  { value: "< 1hr", label: "Average response time" },
];

const Reviews = () => {
  return (
    <>
      <ProductPageHero
        badge="Reviews"
        icon={Star}
        title="Get More Reviews in"
        highlight="Less Time"
        description="Double your Google reviews with automated, AI-powered review collection. Build trust, rank higher, and win more customers on autopilot."
      />

      {/* Stats */}
      <section className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        badge="Features"
        title="Your reputation,"
        highlight="on autopilot"
        description="Everything you need to collect, manage, and leverage customer reviews to grow your business."
        features={features}
        columns={3}
      />

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="From job complete to"
            highlight="5-star review"
            description="A simple, automated system that turns every completed job into a reputation-building opportunity."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Job Completed", description: "Technician marks the job done in Servinix. The review process kicks off automatically." },
                { step: "2", title: "Smart Invite Sent", description: "Customer receives a personalized text with a direct link to leave a review on Google." },
                { step: "3", title: "AI Responds", description: "When reviews come in, AI crafts a personalized response in your brand voice and posts it." },
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
        title="Build a reputation that"
        highlight="wins business"
        description="See how automated review collection can transform your online presence."
      />
    </>
  );
};

export default Reviews;
