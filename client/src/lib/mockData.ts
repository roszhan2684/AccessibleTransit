import type { Route } from "@shared/schema";

export const mockRoutes: Route[] = [
  {
    id: 1,
    startLocation: "Downtown Transit Center",
    endLocation: "Medical District",
    distance: 5,
    wheelchairAccessible: true,
    visualAids: true,
    audioAnnouncements: true,
    rating: 4
  },
  {
    id: 2,
    startLocation: "Residential Heights",
    endLocation: "Shopping Complex",
    distance: 8,
    wheelchairAccessible: true,
    visualAids: false,
    audioAnnouncements: true,
    rating: 3
  },
  {
    id: 3,
    startLocation: "University Campus",
    endLocation: "Cultural Center",
    distance: 12,
    wheelchairAccessible: true,
    visualAids: true,
    audioAnnouncements: true,
    rating: 5
  }
];
