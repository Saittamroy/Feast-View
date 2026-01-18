import { motion } from "framer-motion";
import { Plus, Heart, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { MenuItem } from "@/lib/dummy-data";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/30">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-destructive shadow-sm"
        >
          <Heart className="w-4 h-4" />
        </Button>
        {item.isSpicy && (
          <Badge className="absolute top-3 left-3 bg-red-100 text-red-600 hover:bg-red-200 border-none px-2 py-1 flex items-center gap-1 shadow-sm">
            <Flame className="w-3 h-3 fill-current" /> Spicy
          </Badge>
        )}
        {item.isVegetarian && (
          <Badge className="absolute top-3 left-3 bg-green-100 text-green-700 hover:bg-green-200 border-none px-2 py-1 shadow-sm">
            Veg
          </Badge>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {item.name}
          </h3>
          <Rating rating={item.rating} showCount={false} className="scale-75 origin-right" />
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 min-h-[40px]">
          {item.description}
        </p>

        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">${item.price}</span>
            {item.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
            )}
          </div>
          <Button size="sm" className="rounded-full px-4 gap-1 hover:scale-105 transition-transform">
            Add <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
