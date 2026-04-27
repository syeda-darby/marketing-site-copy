"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().max(2000).optional(),
  smsConsent: z.boolean(),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Demo request received!", description: "We'll be in touch within 24 hours." });
    setFormData({ name: "", company: "", email: "", phone: "", message: "", smsConsent: false });
    setIsSubmitting(false);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="container relative mx-auto px-4 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Book a <span className="text-gradient">Demo</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              See how Servinix can transform your service business. Schedule a personalized demo with our team.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to see how Servinix can streamline your operations? Fill out the form and we'll schedule a personalized demo based on your business needs.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a href="mailto:hello@servinix.com" className="text-muted-foreground hover:text-primary transition-colors">hello@servinix.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <a href="tel:+18005551234" className="text-muted-foreground hover:text-primary transition-colors">(800) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <div className="font-semibold text-foreground">Office</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl border border-border/50 bg-card">
                <h3 className="font-heading font-semibold text-foreground mb-3">What to expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" />30-minute personalized demo</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" />See features relevant to your business</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" />Get answers to your questions</li>
                  <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-primary" />Learn about pricing and implementation</li>
                </ul>
              </div>
            </div>

            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl border border-border/50 bg-card p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Request a Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} className={errors.name ? "border-destructive" : ""} placeholder="John Smith" />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="ABC Services" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={errors.email ? "border-destructive" : ""} placeholder="john@example.com" />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(555) 555-5555" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your business and what you're looking to achieve..." />
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-background">
                    <Checkbox id="smsConsent" checked={formData.smsConsent} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, smsConsent: checked === true }))} />
                     <Label htmlFor="smsConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                       I agree to receive SMS messages from Servinix related to demos, scheduling, account updates, and service communications. Message frequency may vary. Message and data rates may apply. Reply STOP to unsubscribe and HELP for help. View our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
                    </Label>
                  </div>
                  <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (<>Request Demo <Send className="ml-2 h-4 w-4" /></>)}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
