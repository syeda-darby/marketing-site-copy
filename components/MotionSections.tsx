import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Industry {
  icon: React.ElementType;
  name: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  features: Feature[];
  benefits: Benefit[];
  industries: Industry[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}

const MotionSections = ({ features, benefits, industries, testimonials, faqs }: Props) => {
  return (
    <>
      {/* Core Features */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Platform"
            title="Everything your service business needs,"
            highlight="unified."
            description="Stop juggling disconnected tools. Servinix brings fleet tracking, job management, and customer communication into one intelligent platform."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <motion.a
                key={feature.title}
                href={feature.link}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary block"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Why Servinix"
            title="Built for companies that operate in the"
            highlight="physical world."
            description="Enterprise-grade visibility, automation, and intelligence—without enterprise cost, contracts, or complexity."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div key={benefit.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="Purpose-built for"
            highlight="service businesses"
            description="From HVAC to pest control, Servinix is designed for the unique needs of field service operations."
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-border/50 bg-card hover:border-primary/30 transition-colors"
              >
                <industry.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{industry.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="text-sm text-primary hover:underline">
              See all industries →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by service businesses"
            highlight="nationwide"
            description="See what our customers say about transforming their operations with Servinix."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-background"
              >
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently asked"
            highlight="questions"
            description="Everything you need to know about Servinix."
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
      <section className="py-24 lg:py-32 relative overflow-hidden bg-card">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Ready to transform your{" "}
              <span className="text-gradient">operations?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              See how Servinix can reduce manual work, improve accountability, and accelerate your growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-base px-10 py-6">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MotionSections;
