import type { Route } from "@shared/schema";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accessibility, Eye, Volume2 } from "lucide-react";
import { AccessibilityRating } from "../accessibility/AccessibilityRating";

interface RouteCardProps {
  route: Route;
  onSelect: (route: Route) => void;
}

export function RouteCard({ route, onSelect }: RouteCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <h3 className="text-xl font-semibold">
          {route.startLocation} → {route.endLocation}
        </h3>
        <p className="text-muted-foreground">{route.distance} miles</p>
      </CardHeader>

      <CardContent>
        <div className="flex gap-4 mb-4">
          {route.wheelchairAccessible && (
            <div className="flex items-center gap-1">
              <Accessibility className="h-5 w-5 text-primary" />
              <span>Wheelchair</span>
            </div>
          )}

          {route.visualAids && (
            <div className="flex items-center gap-1">
              <Eye className="h-5 w-5 text-primary" />
              <span>Visual Aids</span>
            </div>
          )}

          {route.audioAnnouncements && (
            <div className="flex items-center gap-1">
              <Volume2 className="h-5 w-5 text-primary" />
              <span>Audio</span>
            </div>
          )}
        </div>

        <AccessibilityRating rating={route.rating} />
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full"
          onClick={() => onSelect(route)}
        >
          Select Route
        </Button>
      </CardFooter>
    </Card>
  );
}