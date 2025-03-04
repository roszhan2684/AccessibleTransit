import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Route } from "@shared/schema";
import { RouteCard } from "@/components/routes/RouteCard";
import { Input } from "@/components/ui/input";
import { mockRoutes } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Routes() {
  const [search, setSearch] = useState("");
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    wheelchair: false,
    visual: false,
    audio: false
  });

  // In a real app, this would fetch from the API
  const { data: routes = mockRoutes } = useQuery<Route[]>({
    queryKey: ["/api/routes"],
  });

  const filteredRoutes = routes.filter(route => {
    const matchesSearch = route.startLocation.toLowerCase().includes(search.toLowerCase()) ||
                         route.endLocation.toLowerCase().includes(search.toLowerCase());

    const matchesFilters = (!filters.wheelchair || route.wheelchairAccessible) &&
                          (!filters.visual || route.visualAids) &&
                          (!filters.audio || route.audioAnnouncements);

    return matchesSearch && matchesFilters;
  });

  const handleRouteSelect = (route: Route) => {
    setSelectedRoute(route);
    toast({
      title: "Route Selected",
      description: `You've selected the route from ${route.startLocation} to ${route.endLocation}. Your journey is being prepared.`,
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 p-8 text-white mb-8">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-4">Find Accessible Routes</h1>
          <p className="text-lg opacity-90">
            Discover routes that match your accessibility needs, powered by our synergy squad community.
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search routes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 w-full"
          />
        </div>

        <Button
          variant={filters.wheelchair ? "secondary" : "outline"}
          onClick={() => setFilters(f => ({ ...f, wheelchair: !f.wheelchair }))}
          className="group transition-colors duration-300"
        >
          Wheelchair Access
        </Button>

        <Button
          variant={filters.visual ? "secondary" : "outline"}
          onClick={() => setFilters(f => ({ ...f, visual: !f.visual }))}
          className="group transition-colors duration-300"
        >
          Visual Aids
        </Button>

        <Button
          variant={filters.audio ? "secondary" : "outline"}
          onClick={() => setFilters(f => ({ ...f, audio: !f.audio }))}
          className="group transition-colors duration-300"
        >
          Audio Announcements
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoutes.map(route => (
          <RouteCard
            key={route.id}
            route={route}
            isSelected={selectedRoute?.id === route.id}
            onSelect={() => handleRouteSelect(route)}
          />
        ))}
      </div>
    </div>
  );
}