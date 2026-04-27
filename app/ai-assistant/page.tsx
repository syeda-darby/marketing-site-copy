"use client";

import { motion } from "framer-motion";
import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { Bot, Zap, CalendarCheck, MessageSquareText, PhoneMissed, BrainCircuit, Clock, Users, TrendingUp, CheckCircle2, MapPin, Navigation, Bell, ArrowRight, PhoneIncoming, BarChart3, Wrench } from "lucide-react";

const aiCards = [
  {
    icon: Zap,
    title: "Respond to Leads Instantly",
    description: "When a customer calls, texts, or messages your business, the AI Assistant responds immediately — answering questions and capturing the opportunity before competitors do.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Appointments Automatically",
    description: "The AI can check technician availability and book service appointments without human intervention.",
  },
  {
    icon: MessageSquareText,
    title: "Follow Up on Quotes",
    description: "AI automatically follows up with customers who received estimates but haven't responded.",
  },
  {
    icon: PhoneMissed,
    title: "Never Miss a Call",
    description: "After-hours calls, missed calls, and online inquiries are handled automatically so no opportunity is lost.",
  },
];

const automationExamples = [
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "A customer messages your business. The AI asks a few questions and schedules a technician automatically.",
  },
  {
    icon: PhoneMissed,
    title: "Missed Call Recovery",
    description: "If a customer calls after hours, the AI responds and schedules the job.",
  },
  {
    icon: TrendingUp,
    title: "Estimate Follow-Ups",
    description: "AI contacts customers who haven't responded to quotes and helps close more jobs.",
  },
];

const operationBullets = [
  "Tell customers when technicians will arrive",
  "Schedule jobs based on technician availability",
  "Send reminders and confirmations",
  "Answer common service questions",
  "Follow up on maintenance and repairs",
];

const gpsBullets = [
  "Tell customers when technicians are on the way",
  "Provide real-time ETA updates",
  "Notify customers if a technician is running late",
  "Automatically send arrival alerts",
  'Reduce inbound "Where is my technician?" calls',
];

const alwaysWorkingBullets = [
  "Works day and night",
  "Handles multiple conversations at once",
  "Scales without hiring staff",
  "Keeps technicians' schedules full",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const AIAssistant = () => {
  return (
    <>
      <ProductPageHero
        badge="AI Assistant"
        icon={Bot}
        title="Meet Your AI"
        highlight="Service Assistant"
        description="Your service business shouldn't miss calls, leads, or opportunities. Servinix AI Assistant works 24/7 to communicate with customers, schedule appointments, answer questions, and generate more booked jobs."
      />

      {/* What the AI Assistant Does */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="What the AI Assistant"
            highlight="Does"
            description="The Servinix AI Assistant answers customers, schedules jobs, follows up on estimates, and keeps technicians busy — automatically."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aiCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Than a Chatbot */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <BrainCircuit className="h-4 w-4" />
                AI That Understands Your Operations
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                More Than a <span className="text-gradient">Chatbot</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Because Servinix AI connects to your fleet tracking, job schedules, and customer history, it understands the real context of your operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border/50 bg-background p-8 md:p-10"
            >
              <ul className="space-y-4">
                {operationBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI That Knows Where Your Technicians Are */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <MapPin className="h-4 w-4" />
                GPS-Connected AI
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                AI That Knows Where Your <span className="text-gradient">Technicians Are</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Because Servinix AI connects directly to fleet GPS tracking and job schedules, it understands the real-time status of your field operations.
              </p>
              <p className="mt-3 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Unlike generic chatbots, the AI Assistant knows where technicians are, what jobs they are working on, and when they will arrive.
              </p>
            </motion.div>

            {/* Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border border-border/50 bg-background p-8 md:p-10 mb-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-4 md:gap-2">
                <div className="flex flex-col items-center text-center md:col-span-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <PhoneIncoming className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Customer</span>
                  <span className="text-xs text-muted-foreground">Asks for ETA</span>
                </div>
                <div className="hidden md:flex items-center justify-center md:col-span-1">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col items-center text-center md:col-span-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <Bot className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-medium text-foreground">AI Assistant</span>
                  <span className="text-xs text-muted-foreground">Processes request</span>
                </div>
                <div className="hidden md:flex items-center justify-center md:col-span-1">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col items-center text-center md:col-span-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <Navigation className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-medium text-foreground">GPS Location</span>
                  <span className="text-xs text-muted-foreground">Real-time tracking</span>
                </div>
                <div className="hidden md:flex items-center justify-center md:col-span-1">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col items-center text-center md:col-span-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <Bell className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-medium text-foreground">ETA Sent</span>
                  <span className="text-xs text-muted-foreground">Auto-response</span>
                </div>
              </div>
            </motion.div>

            {/* Bullet List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-border/50 bg-background p-8 md:p-10 max-w-3xl mx-auto"
            >
              <ul className="space-y-4">
                {gpsBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      <FeatureSection
        badge="Automation Examples"
        title="See AI in"
        highlight="Action"
        description="Real scenarios where Servinix AI Assistant drives results for service businesses."
        features={automationExamples}
        columns={3}
      />

      {/* Turn Operational Signals Into Booked Jobs */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              badge="Proactive Revenue"
              title="Turn Operational Signals Into"
              highlight="Booked Jobs"
              description="Servinix AI continuously monitors service history, vehicle routes, and customer activity to identify opportunities to generate more work automatically."
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto -mt-10 mb-16"
            >
              Instead of waiting for customers to call, the platform proactively reaches out when a service opportunity appears.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: CalendarCheck,
                  title: "Maintenance Reminders",
                  description: "AI contacts customers when annual or seasonal maintenance is due.",
                },
                {
                  icon: TrendingUp,
                  title: "Quote Follow-Ups",
                  description: "AI follows up automatically with customers who received estimates but have not responded.",
                },
                {
                  icon: Wrench,
                  title: "Technician Nearby",
                  description: "When a technician is already in a neighborhood, AI can offer nearby customers a quick inspection or service visit.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group rounded-xl border border-border/50 bg-background p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-lg font-medium text-gradient"
            >
              Servinix transforms operational data into automated revenue opportunities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Always Working */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Clock className="h-4 w-4" />
                Always Working for Your Business
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Your 24/7 Digital <span className="text-gradient">Service Representative</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The Servinix AI Assistant works across voice, SMS, and messaging channels to ensure every customer gets a fast response.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border/50 bg-background p-8 md:p-10"
            >
              <ul className="space-y-4">
                {alwaysWorkingBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Put AI to Work for Your"
        highlight="Service Business"
        description="See how Servinix AI Assistant can respond to customers, schedule jobs, and generate more revenue automatically."
        primaryCTA="Book Demo"
        secondaryCTA="Contact Sales"
        secondaryLink="/contact"
      />
    </>
  );
};

export default AIAssistant;
