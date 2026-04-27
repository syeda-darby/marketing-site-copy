import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Servinix — AI-Native Operating System for Service Businesses",
    template: "%s | Servinix",
  },
  description:
    "Unify fleet GPS tracking, field service management, and customer communication into one AI-native platform. Enterprise-grade functionality without enterprise complexity.",
  metadataBase: new URL("https://servinix.com"),
  openGraph: {
    type: "website",
    url: "https://servinix.com",
    title: "Servinix — AI-Native Operating System for Service Businesses",
    description:
      "Unify fleet GPS tracking, field service management, and customer communication into one AI-native platform. Enterprise-grade functionality without enterprise complexity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servinix — AI-Native Operating System for Service Businesses",
    description:
      "Unify fleet GPS tracking, field service management, and customer communication into one AI-native platform. Enterprise-grade functionality without enterprise complexity.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
