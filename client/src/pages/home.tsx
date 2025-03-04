import { TRANSIT_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Bus, Heart, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/90 via-primary to-primary-foreground/20 py-32 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Accessible Transit for Everyone
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Find and navigate accessible public transportation routes with ease.
            We're committed to making transit accessible for all.
          </p>
          <Link href="/routes">
            <Button size="lg" variant="secondary" className="group">
              <Bus className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Find Accessible Routes
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <Bus className="h-12 w-12 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Accessible Routes
            </h2>
            <p className="text-muted-foreground text-center">
              Find transit routes with wheelchair access, visual aids, and audio announcements.
              Plan your journey with confidence.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <Heart className="h-12 w-12 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Ride Credits
            </h2>
            <p className="text-muted-foreground text-center">
              Earn free ride credits and rewards for using accessible transit options.
              Travel more, pay less.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <Shield className="h-12 w-12 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Emergency Support
            </h2>
            <p className="text-muted-foreground text-center">
              24/7 emergency contact system for peace of mind during your journey.
              Help is always one tap away.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}