"use client";

import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { DollarSign, CreditCard, Smartphone, RefreshCw, FileText, Clock, Zap, Shield, Receipt } from "lucide-react";

const features = [
  { icon: CreditCard, title: "Online Payments", description: "Collect credit card and ACH payments online. Send payment links via text or email—customers pay in seconds." },
  { icon: RefreshCw, title: "Automatic Payments", description: "Charge stored cards or bank accounts automatically when the job is done. Perfect for recurring work." },
  { icon: Smartphone, title: "Tap to Pay", description: "Accept contactless payments with just your phone. No card reader needed—Apple Pay, Google Pay, and tap-to-pay cards." },
  { icon: FileText, title: "Professional Invoices", description: "Generate branded invoices automatically upon job completion. Include line items, photos, and payment terms." },
  { icon: Clock, title: "Payment Reminders", description: "Automated payment reminders for outstanding invoices. Reduce collections time without awkward follow-ups." },
  { icon: Zap, title: "Instant Payouts", description: "Get your money fast with next-day or same-day deposit options. No more waiting for checks to clear." },
  { icon: Shield, title: "Secure Processing", description: "PCI-compliant payment processing with bank-grade encryption. Protect your customers and your business." },
  { icon: Receipt, title: "Financial Reporting", description: "Track revenue, outstanding invoices, and payment trends. Real-time financial visibility across your business." },
  { icon: DollarSign, title: "Flexible Pricing", description: "Support deposits, progress payments, and final invoices. Handle any payment structure your business needs." },
];

const stats = [
  { value: "4x", label: "Faster payment collection" },
  { value: "50%", label: "Fewer overdue invoices" },
  { value: "2 days", label: "Average time to get paid" },
  { value: "$0", label: "Hardware cost for tap-to-pay" },
];

const FieldServiceGetPaid = () => {
  return (
    <>
      <ProductPageHero
        badge="Get Paid Faster"
        icon={DollarSign}
        title="Get Paid 4x Faster,"
        highlight="Zero Hassle"
        description="Make payments easy for you and your customers. Accept payments online, in-person, or automatically—no more chasing checks."
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
        title="Save time and"
        highlight="get paid fast"
        description="Every tool you need to collect payments quickly and professionally."
        features={features}
        columns={3}
      />

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="From job complete to"
            highlight="money in the bank"
            description="A seamless payment experience for you and your customers."
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Job Done", description: "Tech marks job complete in the app" },
                { step: "2", title: "Invoice Sent", description: "Branded invoice auto-generated and sent" },
                { step: "3", title: "Customer Pays", description: "One-click payment via text or email link" },
                { step: "4", title: "Money Deposited", description: "Funds hit your account next business day" },
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

      <CTASection
        title="Stop chasing payments,"
        highlight="start collecting"
        description="See how Servinix makes getting paid effortless."
      />
    </>
  );
};

export default FieldServiceGetPaid;
