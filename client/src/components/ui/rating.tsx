import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  rating: number;
  reviews?: number;
  className?: string;
  showCount?: boolean;
}

export function Rating({ rating, reviews, className = "", showCount = true }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="flex text-yellow-500">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-current" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-current" />}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
      {showCount && reviews && (
        <span className="text-sm font-medium text-muted-foreground">
          ({reviews} reviews)
        </span>
      )}
    </div>
  );
}
