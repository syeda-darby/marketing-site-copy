"use client";

import ProductPageHero from "@/components/ProductPageHero";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Navigation, Route, Camera, Shield, AlertTriangle, Smartphone, BarChart3, Fuel, Eye, Wifi, Bell, Video, Brain, Truck } from "lucide-react";

const trackingFeatures = [
  { icon: Navigation, title: "Live Vehicle Tracking", description: "See exact locations of all vehicles in real-time with 10-second refresh rates. Complete route visibility across your entire fleet." },
  { icon: Route, title: "Route Optimization", description: "AI-optimized routing reduces drive time between jobs. Save fuel and fit more jobs into every day." },
  { icon: Fuel, title: "Fuel & Mileage Reports", description: "Monitor fuel consumption, mileage, and idle time across your fleet. Identify cost savings opportunities instantly." },
  { icon: AlertTriangle, title: "Driver Safety Scores", description: "Track speeding, harsh braking, rapid acceleration, and distracted driving. Coach your team with data-driven insights." },
  { icon: Bell, title: "Geofencing & Alerts", description: "Set geographic boundaries and receive instant alerts when vehicles enter or exit designated areas." },
  { icon: Smartphone, title: "Mobile Fleet App", description: "Technicians check in and out of jobs via mobile. GPS automatically logs arrival, departure, and time on-site." },
  { icon: BarChart3, title: "Fleet Analytics Dashboard", description: "Comprehensive dashboards showing utilization, efficiency, vehicle health, and performance metrics." },
  { icon: Wifi, title: "ETA & Customer Updates", description: "Share real-time ETAs with customers automatically. Build trust with accurate arrival time notifications." },
  { icon: Truck, title: "Asset Tracking", description: "Track trailers, equipment, and high-value assets. Know where everything is, not just your vehicles." },
];

const dashcamFeatures = [
  { icon: Camera, title: "Dual-Facing AI Dashcams", description: "Road-facing and driver-facing cameras with AI-powered event detection. Capture what matters, automatically." },
  { icon: Brain, title: "AI Event Detection", description: "Automatically detect and flag risky driving events—hard braking, tailgating, distracted driving, and near-misses." },
  { icon: Video, title: "HD Video Recording", description: "Crystal-clear HD video with cloud storage. Review footage anytime from your dashboard or mobile app." },
  { icon: Shield, title: "Exonerate Your Drivers", description: "Protect your business from false claims and fraudulent lawsuits with indisputable video evidence." },
  { icon: Eye, title: "Driver Monitoring System", description: "AI detects drowsiness, phone use, and seatbelt violations in real-time. Instant in-cab alerts keep drivers safe." },
  { icon: AlertTriangle, title: "Advanced Driver Assistance", description: "Forward collision warnings, lane departure alerts, and following distance monitoring to prevent accidents." },
];

const stats = [
  { value: "40%", label: "Reduction in windshield time" },
  { value: "25%", label: "Fuel cost savings" },
  { value: "60%", label: "Fewer safety incidents" },
  { value: "2hrs", label: "Saved per tech daily" },
];

const GPSTracking = () => {
  return (
    <>
      <ProductPageHero
        badge="GPS Tracking & Dashcams"
        icon={MapPin}
        title="Complete Fleet Visibility with"
        highlight="AI-Powered Safety"
        description="Real-time GPS tracking paired with AI dashcams. Know where every vehicle is, optimize routes, and protect your drivers and business."
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
        badge="GPS Tracking"
        title="Know where your fleet is,"
        highlight="always"
        description="Enterprise-grade GPS tracking designed specifically for service businesses. Real-time visibility into every vehicle and asset."
        features={trackingFeatures}
        columns={3}
      />

      {/* Dashcam Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="AI Dashcams"
            title="Protect your drivers and"
            highlight="your business"
            description="AI-powered dual-facing dashcams that detect risky driving events, coach your drivers, and provide video evidence when you need it."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {dashcamFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-border/50 bg-background p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-card-gradient p-8 md:p-12 text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Integrated with <span className="text-gradient">Job Management</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                GPS and dashcam data aren't isolated—they're woven into Servinix. When a technician arrives at a job site, their location automatically updates the job status. Dispatchers see real-time positions alongside job details and dashcam feeds.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-border/50 bg-background">
                  <div className="text-3xl font-bold text-gradient mb-2">Simple</div>
                  <p className="text-sm text-muted-foreground">Plug-and-play install in minutes</p>
                </div>
                <div className="p-6 rounded-xl border border-border/50 bg-background">
                  <div className="text-3xl font-bold text-gradient mb-2">Unified</div>
                  <p className="text-sm text-muted-foreground">One dashboard for GPS + dashcams + jobs</p>
                </div>
                <div className="p-6 rounded-xl border border-border/50 bg-background">
                  <div className="text-3xl font-bold text-gradient mb-2">Smart</div>
                  <p className="text-sm text-muted-foreground">AI analyzes patterns to optimize operations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get complete visibility into your"
        highlight="fleet operations"
        description="See how GPS tracking and AI dashcams integrate with the full Servinix platform."
      />
    </>
  );
};

export default GPSTracking;
