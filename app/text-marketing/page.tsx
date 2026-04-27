"use client";

import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Send, Bot, Users, BarChart3, Zap, Clock, Target, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  { icon: Bot, title: "AI-Generated Messages", description: "AI creates personalized marketing texts tailored to each customer segment. Compelling copy in seconds, not hours." },
  { icon: Target, title: "Smart Segmentation", description: "Target specific customer groups based on service history, location, and behavior. Send the right message to the right people." },
  { icon: Zap, title: "One-Click Campaigns", description: "Launch text campaigns in minutes with ready-to-use templates. Seasonal promotions, maintenance reminders, and re-engagement." },
  { icon: MessageSquare, title: "Two-Way Conversations", description: "Customers can reply to marketing texts and your AI Employee responds instantly, turning messages into booked jobs." },
  { icon: Clock, title: "Scheduled Sends", description: "Schedule campaigns for optimal delivery times. Reach customers when they're most likely to engage and respond." },
  { icon: Users, title: "Contact Management", description: "Build and manage customer lists automatically from your job history. No manual imports or data entry needed." },
  { icon: BarChart3, title: "Campaign Analytics", description: "Track open rates, click-throughs, responses, and revenue generated from every campaign. Know your ROI." },
  { icon: TrendingUp, title: "Revenue Attribution", description: "See exactly how much revenue each campaign generates. Tie text marketing directly to booked jobs and payments." },
  { icon: Send, title: "Drip Campaigns", description: "Set up automated text sequences for onboarding, follow-ups, and seasonal outreach. Set it and forget it." },
];

const stats = [
  { value: "98%", label: "Text open rate" },
  { value: "45%", label: "Average response rate" },
  { value: "10x", label: "ROI on text campaigns" },
  { value: "< 3min", label: "Time to launch a campaign" },
];

const TextMarketing = () => {
  return (
    <>
      <ProductPageHero
        badge="Text Marketing"
        icon={Send}
        title="Personalized Marketing Texts That"
        highlight="Drive Sales"
        description="Create AI-powered text marketing campaigns with 98% open rates. Your AI Employee responds to every reply, turning messages into booked appointments."
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
        title="Text marketing that"
        highlight="actually converts"
        description="AI-powered campaigns that drive real revenue—not just opens and clicks."
        features={features}
        columns={3}
      />

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="From campaign to"
            highlight="booked job"
            description="Launch marketing campaigns that drive real results in minutes."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Pick Your Audience", description: "Select a customer segment or let AI suggest the best targets" },
                { step: "2", title: "AI Writes the Copy", description: "AI generates personalized messages based on customer context" },
                { step: "3", title: "Send & Engage", description: "Campaign goes out, AI Employee handles all replies instantly" },
                { step: "4", title: "Track Revenue", description: "See exactly which messages turned into booked jobs and revenue" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-xl border border-border/50 bg-background"
                >
                  <div className="text-3xl font-bold text-gradient mb-3">{item.step}</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Employee Integration */}
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
                Your AI Employee <span className="text-gradient">works 24/7</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                When customers reply to your marketing texts, your AI Employee jumps in immediately. It answers questions, qualifies interest, and books appointments—even at 2 AM.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">Instant</div>
                  <p className="text-sm text-muted-foreground">Reply to every response</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">Smart</div>
                  <p className="text-sm text-muted-foreground">Personalized to each customer</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gradient mb-2">Revenue</div>
                  <p className="text-sm text-muted-foreground">Tied directly to booked jobs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start driving revenue with"
        highlight="text marketing"
        description="See how AI-powered text campaigns can fill your schedule and grow your business."
      />
    </>
  );
};

export default TextMarketing;
