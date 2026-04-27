import Link from "next/link";
import ServinixLogo from "./ServinixLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ServinixLogo />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              The AI-native operating system for field service businesses. Replace multiple tools with one unified platform.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: "Product Overview", href: "/product" },
                { label: "Fleet GPS & Dashcams", href: "/gps-tracking" },
                { label: "Field Service Management", href: "/field-service" },
                { label: "AI Service Assistant", href: "/ai-assistant" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Industries", href: "/industries" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
                { label: "Book Demo", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Servinix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
