"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Rocket, MapPin, ClipboardList, Bot } from "lucide-react";

const values = [
  { icon: Target, title: "Operational Excellence", description: "We focus on the details that make service businesses run smoothly." },
  { icon: Lightbulb, title: "AI-Native Thinking", description: "Servinix is designed from the ground up to leverage intelligent automation." },
  { icon: Users, title: "Customer Partnership", description: "We work closely with service businesses to solve real operational challenges." },
  { icon: Rocket, title: "Continuous Innovation", description: "We continuously improve the platform with new capabilities and automation." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Rebuilding Field Service Software for the <span className="text-gradient">AI Era</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Servinix is the AI-native operating system for field service businesses, combining fleet tracking, field service management, and intelligent automation into one unified platform.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-10">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Backbone of the Real Economy */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">The Backbone of the Real Economy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Field service businesses power the real economy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                HVAC technicians, plumbers, electricians, and contractors keep homes comfortable, businesses running, and infrastructure working every day.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Yet the software they rely on was built for a different era — before AI, before connected vehicles, and before modern automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most service companies still run their operations across multiple disconnected systems:
              </p>
              <ul className="text-lg text-muted-foreground leading-relaxed mb-6 list-disc list-inside space-y-2">
                <li>scheduling software</li>
                <li>fleet tracking tools</li>
                <li>customer communication platforms</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Servinix was created to change that.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Servinix Platform */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">The Servinix Platform</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Servinix brings together the core systems that service businesses rely on every day into one operational platform.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Instead of stitching together multiple tools, service businesses can run their operations on a single system designed for the AI era.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: MapPin, title: "Fleet GPS Tracking", description: "Real-time vehicle visibility, route monitoring, and technician location intelligence." },
                { icon: ClipboardList, title: "Field Service Management", description: "Scheduling, dispatch, job tracking, estimates, and invoicing." },
                { icon: Bot, title: "AI Service Assistant", description: "Automation for customer communication, appointment scheduling, and service follow-ups." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg text-muted-foreground leading-relaxed text-center font-medium">
              Together these systems form the Servinix AI-native operations platform.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why We Built Servinix */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Why We Built Servinix</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our founders spent years working around field service operations and saw how fragmented the software landscape had become.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Service businesses were forced to juggle multiple subscriptions, manually move information between systems, and respond to customers using disconnected tools.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Existing solutions fell into two extremes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Basic scheduling tools lacked operational intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Enterprise systems were powerful but expensive and complex to implement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                There was nothing designed for growing service businesses that needed power without complexity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Servinix was built to close that gap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built for the AI Era */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Built for the AI Era</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most field service platforms were designed long before AI became practical for everyday operations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Servinix was built differently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our platform integrates AI directly into operational workflows so service businesses can automate communication, scheduling, and follow-ups.
              </p>
              <ul className="text-lg text-muted-foreground leading-relaxed mb-6 list-disc list-inside space-y-2">
                <li>AI responding to customer inquiries</li>
                <li>Automated appointment scheduling</li>
                <li>Quote follow-ups</li>
                <li>Technician arrival notifications</li>
                <li>Maintenance reminders</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Servinix AI understands real operational context because it connects directly to fleet data, job schedules, and customer history.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Servinix Architecture */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">The Servinix Architecture</h2>
            </motion.div>

            <div className="flex flex-col items-center gap-0">
              {[
                { icon: MapPin, label: "Fleet GPS Tracking" },
                { icon: ClipboardList, label: "Field Service Management" },
                { icon: Bot, label: "AI Service Assistant" },
              ].map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex flex-col items-center">
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-8 py-4 shadow-sm">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-heading text-lg font-semibold text-foreground">{item.label}</span>
                  </div>
                  <div className="h-8 w-px bg-border" />
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="rounded-xl border-2 border-primary bg-primary/5 px-10 py-5 shadow-md">
                <span className="font-heading text-xl font-bold text-primary">Servinix Platform</span>
              </motion.div>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-12 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Servinix connects the core systems service businesses rely on every day into one unified operational platform.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Economics of Software Are Changing */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">The Economics of Software Are Changing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For years, service businesses have been forced to pay thousands of dollars per month for fragmented software stacks that combine scheduling tools, communication systems, and fleet tracking platforms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                These prices were shaped by the traditional SaaS model where companies focused on maximizing gross margins rather than minimizing customer costs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Artificial intelligence is changing that.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As software becomes easier to build and automate, the cost of delivering powerful platforms should fall — not rise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Servinix is built with this belief at its core.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our goal is simple:
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                Deliver more capability than legacy platforms at dramatically better economics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We start by offering to beat your current software bill by 50% or more, and over time we intend to push that even further.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Principles" title="Our" highlight="Principles" description="" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><value.icon className="w-6 h-6" /></div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Join the Next Generation of Service Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Servinix is building the future of field service software. See how one AI-native platform can simplify operations and help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">Book Demo <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
              <Link href="/contact">
                <Button variant="hero-outline" size="lg" className="text-base px-10 py-6">Contact Sales</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
