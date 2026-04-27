"use client";

import ProductPageHero from "@/components/ProductPageHero";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Building2, Thermometer, Droplets, Zap, Sparkles, Trees, Bug, Waves, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Industry {
  icon: LucideIcon;
  name: string;
  problems: string[];
  solutions: string[];
}

const industries: Industry[] = [
  {
    icon: Thermometer,
    name: "HVAC",
    problems: [
      "Seasonal demand spikes overwhelm scheduling",
      "Emergency calls during off-hours go unanswered",
      "Technicians waste time on inefficient routes",
      "Maintenance contracts slip through the cracks",
    ],
    solutions: [
      "AI scheduling handles demand spikes automatically",
      "24/7 AI voice answering captures every emergency call",
      "GPS routing reduces windshield time by 40%",
      "Automated reminders for recurring maintenance",
    ],
  },
  {
    icon: Droplets,
    name: "Plumbing",
    problems: [
      "Emergency calls are hard to triage and dispatch",
      "On-call rotation is difficult to manage",
      "Estimates and invoices are delayed",
      "Review collection is inconsistent",
    ],
    solutions: [
      "AI qualifies emergencies and dispatches nearest tech",
      "Automated on-call scheduling and notifications",
      "Mobile estimates and instant invoicing",
      "Automated review requests after every job",
    ],
  },
  {
    icon: Zap,
    name: "Electrical",
    problems: [
      "Complex jobs require specific technician skills",
      "Permit tracking is manual and error-prone",
      "Customer follow-ups fall through",
      "Inspection scheduling is chaotic",
    ],
    solutions: [
      "Skill-based dispatch matches jobs to qualified techs",
      "Digital permit tracking and reminders",
      "Automated follow-up sequences",
      "Integrated inspection scheduling",
    ],
  },
  {
    icon: Sparkles,
    name: "Cleaning Services",
    problems: [
      "High staff turnover disrupts schedules",
      "Quality control is inconsistent",
      "Recurring bookings are hard to manage",
      "Communication with clients is scattered",
    ],
    solutions: [
      "Easy reassignment when staff changes",
      "Photo documentation and checklists",
      "Automated recurring schedule management",
      "Unified client communication hub",
    ],
  },
  {
    icon: Trees,
    name: "Landscaping",
    problems: [
      "Seasonal crews are hard to coordinate",
      "Route efficiency varies by crew",
      "Weather disrupts schedules",
      "Estimating is time-consuming",
    ],
    solutions: [
      "Multi-crew scheduling and assignment",
      "Optimized routing for all crews",
      "Weather-aware rescheduling",
      "Quick property estimates with templates",
    ],
  },
  {
    icon: Bug,
    name: "Pest Control",
    problems: [
      "Recurring treatments require precise timing",
      "Chemical usage needs tracking",
      "Customer education is time-consuming",
      "Route density affects profitability",
    ],
    solutions: [
      "Automated scheduling for treatment cycles",
      "Digital product and chemical logging",
      "Automated customer communication",
      "Route optimization for density",
    ],
  },
  {
    icon: Waves,
    name: "Pool Service",
    problems: [
      "Weekly routes are inefficient",
      "Chemical readings need documentation",
      "Equipment repairs interrupt routes",
      "Seasonal demand fluctuates",
    ],
    solutions: [
      "Optimized weekly route planning",
      "Digital water chemistry logs",
      "Integrated repair scheduling",
      "Flexible capacity management",
    ],
  },
  {
    icon: Shield,
    name: "Security Services",
    problems: [
      "Installation schedules are complex",
      "Monitoring requires 24/7 response",
      "Service calls need quick dispatch",
      "Customer site documentation is critical",
    ],
    solutions: [
      "Multi-day project scheduling",
      "AI-powered 24/7 response",
      "Priority dispatch for service calls",
      "Comprehensive site documentation",
    ],
  },
];

const Industries = () => {
  return (
    <>
      <ProductPageHero
        badge="Industries"
        icon={Building2}
        title="Built for Businesses That"
        highlight="Operate in the Field"
        description="Servinix is purpose-built for home and field service companies. See how we solve the unique challenges of your industry."
      />

      {/* Industries Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-border/50 bg-card-gradient p-8 md:p-12"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <industry.icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{industry.name}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-destructive" />
                      Common Challenges
                    </h3>
                    <ul className="space-y-3">
                      {industry.problems.map((problem, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-destructive mt-1">&#x2715;</span>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      How Servinix Helps
                    </h3>
                    <ul className="space-y-3">
                      {industry.solutions.map((solution, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-primary mt-1">&#x2713;</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to transform your"
        highlight="operations?"
        description="See how Servinix can solve your industry's unique challenges."
      />
    </>
  );
};

export default Industries;
