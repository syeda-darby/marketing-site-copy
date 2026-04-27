import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  highlight: string;
  description: string;
  primaryCTA?: string;
  primaryLink?: string;
  secondaryCTA?: string;
  secondaryLink?: string;
}

const CTASection = ({
  title,
  highlight,
  description,
  primaryCTA = "Book a Demo",
  primaryLink = "/contact",
  secondaryCTA,
  secondaryLink,
}: CTASectionProps) => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[150px]" />
      </div>
      <div className="container relative mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {title}{" "}
            <span className="text-gradient">{highlight}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryLink}>
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                {primaryCTA} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {secondaryCTA && secondaryLink && (
              <Link href={secondaryLink}>
                <Button variant="outline" size="lg" className="text-base px-10 py-6">
                  {secondaryCTA}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
