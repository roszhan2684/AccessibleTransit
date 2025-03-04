import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Route } from "@shared/schema";
import { RouteCard } from "@/components/routes/RouteCard";
import { Input } from "@/components/ui/input";
import { mockRoutes } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

export default function Routes() {
  const [search, setSearch] = useState("");
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Find Accessible Routes</h1>

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
        >
          Wheelchair Access
        </Button>

        <Button
          variant={filters.visual ? "secondary" : "outline"}
          onClick={() => setFilters(f => ({ ...f, visual: !f.visual }))}
        >
          Visual Aids
        </Button>

        <Button
          variant={filters.audio ? "secondary" : "outline"}
          onClick={() => setFilters(f => ({ ...f, audio: !f.audio }))}
        >
          Audio Announcements
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRoutes.map(route => (
          <RouteCard
            key={route.id}
            route={route}
            onSelect={() => {
              // Handle route selection
              console.log("Selected route:", route);
            }}
          />
        ))}
      </div>
    </div>
  );
}