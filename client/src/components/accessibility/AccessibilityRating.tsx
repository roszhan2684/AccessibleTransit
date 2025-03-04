import { Star } from "lucide-react";

interface AccessibilityRatingProps {
  rating: number;
}

export function AccessibilityRating({ rating }: AccessibilityRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-medium mr-2">Accessibility Rating:</span>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
