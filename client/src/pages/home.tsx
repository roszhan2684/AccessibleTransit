import { TRANSIT_IMAGES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Bus, Heart, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Accessible Transit for Everyone
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find and navigate accessible public transportation routes with ease.
            We're committed to making transit accessible for all.
          </p>
          <Link href="/routes">
            <Button size="lg" variant="secondary">
              <Bus className="mr-2 h-5 w-5" />
              Find Accessible Routes
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Bus className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-3">
              Accessible Routes
            </h2>
            <p className="text-muted-foreground">
              Find transit routes with wheelchair access, visual aids, and audio announcements.
            </p>
          </div>

          <div className="text-center p-6">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-3">
              Ride Credits
            </h2>
            <p className="text-muted-foreground">
              Earn free ride credits and rewards for using accessible transit options.
            </p>
          </div>

          <div className="text-center p-6">
            <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-xl font-semibold mb-3">
              Emergency Support
            </h2>
            <p className="text-muted-foreground">
              24/7 emergency contact system for peace of mind during your journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
