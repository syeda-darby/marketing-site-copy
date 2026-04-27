"use client";

import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Bot, Headphones, Clock, FileText, Users, Zap, Bell } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "Switch to Text", description: "Incoming callers can seamlessly switch to text by pressing any key. AI responds instantly, saving hours on the phone every week." },
  { icon: Bot, title: "AI Call Summaries", description: "Every call is transcribed and summarized by AI. Never miss important details—focus on the conversation, not note-taking." },
  { icon: Clock, title: "Missed Call Text Back", description: "Automatically text customers back when you miss their call. Keep leads warm and stop losing business to voicemail." },
  { icon: Headphones, title: "AI Receptionist", description: "Natural-sounding AI answers calls, understands customer needs, and takes action—booking appointments and routing calls." },
  { icon: FileText, title: "Call Transcription", description: "Every call is transcribed and searchable. Review conversations, train your team, and resolve disputes with full records." },
  { icon: Users, title: "Unified Inbox", description: "Calls, texts, and messages all in one place. See the full customer journey and never lose context." },
  { icon: Zap, title: "Smart Call Routing", description: "Route calls based on customer needs, agent skills, and availability. Reduce transfers and resolve issues faster." },
  { icon: Bell, title: "After-Hours Handling", description: "AI handles calls outside business hours. Take messages, book appointments, and capture leads while you sleep." },
  { icon: Phone, title: "VoIP Phone System", description: "Full-featured business phone system. Local and toll-free numbers, call forwarding, voicemail, and multi-line support." },
];

const stats = [
  { value: "24/7", label: "Always available" },
  { value: "0", label: "Missed calls" },
  { value: "60%", label: "Fewer lost leads" },
  { value: "$0", label: "Additional staff cost" },
];

const Phones = () => {
  return (
    <>
      <ProductPageHero
        badge="Phones"
        icon={Phone}
        title="Turn Every Call into"
        highlight="Revenue"
        description="A VoIP phone system built for service businesses. Manage calls, texts, and messages in one inbox—powered by AI that never misses a beat."
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
        title="Every call works"
        highlight="for you 24/7"
        description="AI-powered phone features that save time, capture leads, and keep customers happy."
        features={features}
        columns={3}
      />

      {/* ROI Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-background p-8 md:p-12 text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                The cost of a <span className="text-gradient">missed call</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                The average service call is worth $150-500. Miss 5 calls a day and you're losing $750-2,500 daily.
                Servinix Phones ensures every call is answered, every lead is captured, and every customer is helped.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-border/50 bg-card">
                  <div className="text-3xl font-bold text-gradient mb-2">$2,500</div>
                  <p className="text-sm text-muted-foreground">Potential daily revenue saved</p>
                </div>
                <div className="p-6 rounded-xl border border-border/50 bg-card">
                  <div className="text-3xl font-bold text-gradient mb-2">5hrs</div>
                  <p className="text-sm text-muted-foreground">Saved weekly with switch-to-text</p>
                </div>
                <div className="p-6 rounded-xl border border-border/50 bg-card">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Calls answered, always</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Never miss another"
        highlight="customer call"
        description="See how Servinix Phones can transform your phone operations with AI."
      />
    </>
  );
};

export default Phones;
