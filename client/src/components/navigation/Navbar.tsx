import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { User, Bus, Phone, Home } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold flex items-center gap-2">
            <Bus className="h-6 w-6" />
            TransitEase
          </a>
        </Link>
        
        <div className="flex gap-4">
          <Link href="/">
            <Button variant={location === "/" ? "secondary" : "ghost"}>
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          
          <Link href="/routes">
            <Button variant={location === "/routes" ? "secondary" : "ghost"}>
              <Bus className="mr-2 h-4 w-4" />
              Routes
            </Button>
          </Link>
          
          <Link href="/emergency">
            <Button variant={location === "/emergency" ? "secondary" : "ghost"}>
              <Phone className="mr-2 h-4 w-4" />
              Emergency
            </Button>
          </Link>
          
          <Link href="/profile">
            <Button variant={location === "/profile" ? "secondary" : "ghost"}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
