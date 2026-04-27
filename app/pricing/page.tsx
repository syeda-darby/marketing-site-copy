"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle. If you upgrade mid-cycle, we'll prorate the difference.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all plans include a 14-day free trial with full access to features. No credit card required to start.",
  },
  {
    question: "What's included in fleet tracking?",
    answer: "Fleet tracking includes real-time GPS location, route history, driver behavior monitoring, geofencing, and ETA updates. Hardware trackers can be purchased separately or you can use our mobile app for tracking.",
  },
  {
    question: "How does AI voice pricing work?",
    answer: "AI voice minutes are included based on your plan. Starter includes 100 minutes/month, Growth includes 500 minutes, and Professional includes 2,000 minutes. Additional minutes are available at competitive rates.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, annual billing saves you 20% compared to monthly billing. Contact us for details.",
  },
  {
    question: "What tools does Servinix replace?",
    answer: "Servinix can replace your fleet tracking subscription, field service software, customer communication tools, review management, and AI phone answering services. Most customers consolidate 3-5 separate subscriptions.",
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts required. All plans are month-to-month with annual options available for additional savings.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most customers are fully operational within 1-2 weeks. Our onboarding team helps with data migration, training, and configuration.",
  },
];

const Pricing = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight"
            >
              All the essentials — without paying for{" "}
              <span className="text-gradient">three separate platforms</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto"
            >
              Many service businesses end up paying for separate systems for fleet tracking, job management, and customer communication. Servinix combines these capabilities into one platform with simpler economics.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-16 lg:mt-20 max-w-3xl mx-auto">
            <img src="/images/pricing-triangle.png" alt="Servinix combines Fleet GPS Tracking, Field Service Management, and Personal AI Assistant into one platform at half the cost" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently asked"
            highlight="questions"
            description="Everything you need to know about Servinix pricing and plans."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-border/50 rounded-xl px-6 bg-card"
              >
                <summary className="flex flex-1 items-center justify-between py-4 font-heading font-semibold text-foreground cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-left">{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="pb-4 text-sm text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-base px-10 py-6">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
