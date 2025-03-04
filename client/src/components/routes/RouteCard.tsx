import type { Route } from "@shared/schema";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accessibility, Eye, Volume2, ArrowRight } from "lucide-react";
import { AccessibilityRating } from "../accessibility/AccessibilityRating";
import { cn } from "@/lib/utils";

interface RouteCardProps {
  route: Route;
  isSelected?: boolean;
  onSelect: (route: Route) => void;
}

export function RouteCard({ route, isSelected, onSelect }: RouteCardProps) {
  return (
    <Card className={cn(
      "w-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
      "bg-gradient-to-br from-background to-muted/20",
      isSelected && "ring-2 ring-primary shadow-lg"
    )}>
      <CardHeader>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {route.startLocation} → {route.endLocation}
        </h3>
        <p className="text-muted-foreground flex items-center gap-2">
          <span className="font-medium text-lg">{route.distance}</span> miles
        </p>
      </CardHeader>

      <CardContent>
        <div className="flex gap-4 mb-6">
          {route.wheelchairAccessible && (
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Accessibility className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Wheelchair</span>
            </div>
          )}

          {route.visualAids && (
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Eye className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Visual Aids</span>
            </div>
          )}

          {route.audioAnnouncements && (
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Volume2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Audio</span>
            </div>
          )}
        </div>

        <AccessibilityRating rating={route.rating} />
      </CardContent>

      <CardFooter>
        <Button 
          className={cn(
            "w-full group/button",
            isSelected && "bg-gradient-to-r from-red-600 via-yellow-500 to-black hover:from-red-700 hover:via-yellow-600 hover:to-gray-900"
          )}
          onClick={() => onSelect(route)}
        >
          {isSelected ? "Selected" : "Select Route"}
          <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}