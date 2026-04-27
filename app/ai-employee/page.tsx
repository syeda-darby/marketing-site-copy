"use client";

import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Calendar, Brain, Clock, Zap, Users, TrendingUp, Shield } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Instant Lead Response", description: "Your AI Employee responds to every lead in seconds—not minutes or hours. Convert more inquiries into booked jobs." },
  { icon: Calendar, title: "Appointment Scheduling", description: "AI books appointments directly into your calendar. Real-time availability, instant confirmations, and automated reminders." },
  { icon: Brain, title: "Business Context", description: "Trained on your specific services, pricing, and policies. Accurate, relevant responses every single time." },
  { icon: Clock, title: "24/7 Availability", description: "Never miss an after-hours lead again. Your AI Employee works nights, weekends, and holidays." },
  { icon: Zap, title: "Lead Qualification", description: "AI asks the right questions to qualify leads before they reach your team. Focus on high-value opportunities." },
  { icon: Users, title: "Multi-Channel", description: "Handles conversations across text, web chat, and social media. One AI for all your communication channels." },
  { icon: TrendingUp, title: "Sales Optimization", description: "AI follows up on quotes, re-engages cold leads, and upsells services—driving 30% more revenue." },
  { icon: Shield, title: "Human Handoff", description: "Seamlessly transfer complex conversations to your team with full context. AI knows when to escalate." },
  { icon: Bot, title: "Continuous Learning", description: "Gets smarter over time by learning from your business interactions and customer preferences." },
];

const stats = [
  { value: "30%", label: "More sales with AI" },
  { value: "190K+", label: "Appointments booked" },
  { value: "246K+", label: "Hours saved" },
  { value: "1M+", label: "After-hours leads handled" },
];

const capabilities = [
  "Respond to new leads instantly via text and web chat",
  "Book, reschedule, and cancel appointments",
  "Answer questions about your services and pricing",
  "Qualify leads and capture contact information",
  "Follow up on outstanding quotes and estimates",
  "Re-engage past customers for repeat business",
  "Handle after-hours inquiries professionally",
  "Send follow-up texts and appointment reminders",
];

const AIEmployee = () => {
  return (
    <>
      <ProductPageHero
        badge="AI Employee"
        icon={Bot}
        title="Get 30% More Sales with Your"
        highlight="AI Employee"
        description="Meet your new autonomous AI employee: responds to leads, schedules appointments, and sells with full business context—just like your best rep, but available 24/7."
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
        badge="Capabilities"
        title="The AI Employee built for"
        highlight="your business"
        description="Smart, reliable, and always on your team. Trained on your business context with industry expertise."
        features={features}
        columns={3}
      />

      {/* What AI Can Do */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="What It Does"
            title="Your AI Employee"
            highlight="handles it all"
            description="From first contact to booked appointment—your AI Employee manages the entire customer journey."
          />
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {capabilities.map((capability, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-background"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground">{capability}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-card-gradient p-8 md:p-12 text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                15% more likely to <span className="text-gradient">convert with AI</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Speed wins. When a lead gets an instant, personalized response, they're 15% more likely to convert. Your AI Employee ensures no lead waits—ever.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">Instant</div>
                  <p className="text-sm text-muted-foreground">Response time to every lead</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Always available, never calls in sick</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">$0</div>
                  <p className="text-sm text-muted-foreground">Additional payroll cost</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Put your AI Employee"
        highlight="to work"
        description="See how your AI Employee can respond to leads, book appointments, and drive sales—automatically."
      />
    </>
  );
};

export default AIEmployee;
