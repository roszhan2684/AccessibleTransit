import { TRANSIT_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Heart, Shield, ArrowRight, Bus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-600 via-yellow-500 to-black py-32 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Team Synergy Squad
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Together we make transit accessible for everyone. Join our community
            of riders, drivers, and supporters working in perfect harmony.
          </p>
          <Link href="/routes">
            <Button size="lg" variant="secondary" className="group">
              <Users className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Join Our Squad
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
              Squad Routes
            </h2>
            <p className="text-muted-foreground text-center">
              Our team ensures every route is accessible and comfortable.
              Travel with confidence, supported by our community.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <Heart className="h-12 w-12 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Team Rewards
            </h2>
            <p className="text-muted-foreground text-center">
              Earn credits together! The more we help each other,
              the more rewards we all receive. Unity in motion.
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <Shield className="h-12 w-12 mx-auto mb-6 text-primary animate-pulse" />
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Squad Support
            </h2>
            <p className="text-muted-foreground text-center">
              Our team has your back 24/7. Emergency assistance,
              friendly support, and community care all in one.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}