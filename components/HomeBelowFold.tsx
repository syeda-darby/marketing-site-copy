import Link from "next/link";
import { motion } from "framer-motion";
import PlatformTriangle from "@/components/PlatformTriangle";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import {
  MapPin, Wrench, MessageSquare, Brain, ArrowRight,
  Zap, Eye, TrendingUp, Shield, Clock,
  Building2, Thermometer, Droplets, Bug, Trees,
  Waves, ShieldCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const features = [
  { icon: MapPin, title: "GPS Tracking & Dashcams", description: "Real-time visibility into every vehicle and asset. AI dashcams, driver safety scores, and route optimization.", link: "/gps-tracking" },
  { icon: Wrench, title: "Field Service Management", description: "Schedule, dispatch, and manage jobs from one place. From work orders to invoicing—streamlined.", link: "/field-service" },
  { icon: MessageSquare, title: "AI Employee", description: "Your autonomous AI employee that responds, schedules, and sells—24/7, just like your best rep.", link: "/ai-employee" },
  { icon: Brain, title: "Reviews & Marketing", description: "Automated review collection, text marketing campaigns, and reputation management on autopilot.", link: "/reviews" },
];

const stats = [
  { value: "40%", label: "Less manual work" },
  { value: "3x", label: "Faster response time" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "2hrs", label: "Saved per tech per day" },
];


const industries = [
  { icon: Thermometer, name: "HVAC", slug: "hvac", description: "Heating, ventilation, and air conditioning service management." },
  { icon: Droplets, name: "Plumbing", slug: "plumbing", description: "Residential and commercial plumbing operations." },
  { icon: Zap, name: "Electrical", slug: "electrical", description: "Electrical contracting and maintenance services." },
  { icon: Building2, name: "Commercial Cleaning", slug: "commercial-cleaning", description: "Janitorial and facility cleaning operations." },
  { icon: Trees, name: "Landscaping", slug: "landscaping", description: "Lawn care, landscaping, and grounds maintenance." },
  { icon: Waves, name: "Pool Service", slug: "pool-service", description: "Pool maintenance, repair, and cleaning services." },
  { icon: ShieldCheck, name: "Security Systems", slug: "security-systems", description: "Security system installation and monitoring." },
  { icon: Bug, name: "Pest Control", slug: "pest-control", description: "Pest management and extermination services." },
];

const testimonials = [
  { quote: "Servinix replaced three different tools we were using. Now everything is in one place and actually talks to each other.", author: "Mike R.", role: "Owner, Comfort Air HVAC" },
  { quote: "The AI missed-call text back alone has probably saved us $10,000 in leads we would have lost.", author: "Sarah T.", role: "Operations Manager, ProPlumb" },
  { quote: "Our techs save at least 2 hours a day with the optimized routing and mobile app.", author: "James K.", role: "Dispatch Manager, Green Lawn Care" },
];

const faqs = [
  { question: "What makes Servinix different from other FSM tools?", answer: "Servinix is AI-native from the ground up. While other tools bolt on AI features, our platform is built around intelligent automation. Plus, we combine fleet tracking, FSM, and customer communication in one platform—most competitors only do one of these." },
  { question: "How long does implementation take?", answer: "Most customers are fully operational within 1-2 weeks. Our onboarding team handles data migration, training, and configuration. We don't leave you to figure it out alone." },
  { question: "Do I need to buy GPS hardware?", answer: "Not necessarily. Our mobile app provides GPS tracking, or you can use third-party hardware trackers. We support both approaches." },
  { question: "Can Servinix integrate with my existing tools?", answer: "Yes, we integrate with popular accounting software (QuickBooks, Xero), payment processors, and other business tools. Professional and Enterprise plans include API access for custom integrations." },
  { question: "Is there a contract?", answer: "No long-term contracts required. All plans are month-to-month. We earn your business every month." },
];

const HomeBelowFold = () => {
  return (
    <>
      {/* Stats */}
      <section className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Essential Systems */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Platform"
            title="Three Essential Systems."
            highlight="One Platform."
            description="Most service businesses end up stitching together multiple tools — one for fleet tracking, another for dispatch and job management, and yet another for customer communication. Servinix brings these essential capabilities together into one unified platform."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <PlatformTriangle />
            <p className="mt-8 text-center text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              One platform instead of three separate systems — designed for simplicity and better economics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unified Platform Cards */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Platform"
            title="A Unified Platform for"
            highlight="Service Operations"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Fleet GPS Tracking", description: "Track vehicles in real time, improve routing efficiency, reduce fuel costs, and gain visibility into field operations.", link: "/fleet-gps" },
              { icon: Wrench, title: "Field Service Management", description: "Schedule jobs, dispatch technicians, track work progress, and manage service workflows from a single system.", link: "/field-service-management" },
              { icon: Brain, title: "AI Assistant", description: "Use AI to handle customer communication, job follow-ups, reminders, and support tasks so your team can focus on the work that matters.", link: "/ai-assistant" },
            ].map((card, i) => (
              <Link key={card.title} href={card.link}>
                <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Servinix */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Benefits"
            title="Why Service Businesses Choose"
            highlight="Servinix"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Replace multiple tools with one platform" },
              { icon: Shield, title: "Reduce operational complexity" },
              { icon: Clock, title: "Improve dispatch and response times" },
              { icon: Eye, title: "Increase visibility across vehicles, jobs, and teams" },
              { icon: Brain, title: "Automate routine communication with AI" },
              { icon: TrendingUp, title: "Scale operations without adding administrative overhead" },
            ].map((benefit, i) => (
              <motion.div key={benefit.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground pt-2">{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="How Servinix"
            highlight="Works"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Connect Your Operations", description: "Bring together vehicles, technicians, customers, and jobs into one connected system." },
              { step: "02", title: "Run Daily Operations", description: "Schedule work, dispatch teams, track vehicles, and manage service workflows from a unified platform." },
              { step: "03", title: "Automate With AI", description: "Let AI assistants handle reminders, follow-ups, and customer responses to keep operations running smoothly." },
            ].map((item, i) => (
              <motion.div key={item.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-heading font-bold text-lg mb-5">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Product" title="Everything your service business needs," highlight="unified." description="Stop juggling disconnected tools. Servinix brings fleet tracking, job management, and customer communication into one intelligent platform." />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <Link key={feature.title} href={feature.link}>
                <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="group rounded-xl border border-border/50 bg-card-gradient p-8 hover:border-primary/30 transition-all duration-300 hover:glow-primary h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Industries */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Industries" title="Industries We" highlight="Serve" description="Servinix is designed for field service businesses that manage technicians, vehicles, and customer jobs every day." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, i) => (
              <Link key={industry.name} href={`/industries/${industry.slug}`}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-xl border border-border/50 bg-card-gradient p-6 hover:border-primary/30 transition-all duration-300 hover:glow-primary text-center h-full">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{industry.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{industry.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Testimonials" title="Trusted by service businesses" highlight="nationwide" description="See what our customers say about transforming their operations with Servinix." />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-xl border border-border/50 bg-background">
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
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="FAQ" title="Frequently asked" highlight="questions" description="Everything you need to know about Servinix." />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              See How Servinix Simplifies{" "}
              <span className="text-gradient">Service Operations</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Discover how one unified platform can replace multiple tools and help your service business run more efficiently.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="text-base px-10 py-6">
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-base px-10 py-6">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomeBelowFold;
