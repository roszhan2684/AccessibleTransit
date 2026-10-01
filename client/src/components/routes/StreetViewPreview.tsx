import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Route } from '@shared/schema';

interface StreetViewPreviewProps {
  route: Route | null;
  className?: string;
}

export function StreetViewPreview({ route, className }: StreetViewPreviewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !route) return;

    // Initialize map
    if (!map.current) {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN || '';
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        pitch: 60,
        bearing: 0,
        zoom: 15
      });

      // Add 3D building layer
      map.current.on('style.load', () => {
        map.current?.addLayer({
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': ['get', 'height'],
            'fill-extrusion-base': ['get', 'min_height'],
            'fill-extrusion-opacity': 0.6
          }
        });
      });
    }

    // Add accessibility markers
    const markers = {
      wheelchair: route.wheelchairAccessible,
      visual: route.visualAids,
      audio: route.audioAnnouncements
    };

    Object.entries(markers).forEach(([type, enabled]) => {
      if (enabled) {
        new mapboxgl.Marker({
          color: '#ff0000',
          scale: 0.8
        })
        .setLngLat([-122.4194, 37.7749]) // Example coordinates - will be replaced with actual route coordinates
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${type} accessible</h3>`))
        .addTo(map.current!);
      }
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [route]);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-[400px] rounded-lg overflow-hidden ${className}`}
    />
  );
}
