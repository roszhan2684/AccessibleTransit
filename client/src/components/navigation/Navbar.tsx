import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Bus, Phone, Home } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link href="/">
          <a className="text-2xl font-bold flex items-center gap-2 hover:text-primary transition-colors">
            <Users className="h-6 w-6 animate-bounce" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Synergy Squad
            </span>
          </a>
        </Link>

        <div className="flex gap-2">
          <Link href="/">
            <Button 
              variant={location === "/" ? "secondary" : "ghost"}
              className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Home className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Home
            </Button>
          </Link>

          <Link href="/routes">
            <Button 
              variant={location === "/routes" ? "secondary" : "ghost"}
              className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Bus className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Routes
            </Button>
          </Link>

          <Link href="/emergency">
            <Button 
              variant={location === "/emergency" ? "secondary" : "ghost"}
              className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Emergency
            </Button>
          </Link>

          <Link href="/profile">
            <Button 
              variant={location === "/profile" ? "secondary" : "ghost"}
              className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Users className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Team
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}