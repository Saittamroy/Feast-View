import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroDish } from "@/lib/dummy-data";
import { Rating } from "@/components/ui/rating";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] lg:h-[80vh] bg-secondary/30 flex items-center py-12 lg:py-0 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 px-3 py-1 rounded-full text-sm font-medium tracking-wide">
                #1 Chef's Recommendation
              </Badge>
              <div className="h-px w-12 bg-primary/20" />
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-foreground">
              Taste the <span className="text-primary italic">Royal</span> <br />
              Legacy of India
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
              Experience the authentic flavors of our signature {heroDish.name}, prepared with secret spices passed down through generations.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{heroDish.preparationTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">{heroDish.calories} kcal</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm font-bold">{heroDish.rating}</span>
                <span className="text-xs text-muted-foreground">({heroDish.reviews}+)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                Order Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/50 border-primary/20 hover:bg-white hover:text-primary">
                View Full Menu
              </Button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Price Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute top-0 right-10 lg:right-20 z-20 bg-white p-2 rounded-full shadow-xl"
            >
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary flex flex-col items-center justify-center bg-background">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Only</span>
                <span className="text-2xl font-bold text-primary">${Math.floor(heroDish.price)}</span>
                <sup className="text-xs font-bold -mt-4 ml-8">99</sup>
              </div>
            </motion.div>

            <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-black/20 rounded-full blur-2xl transform translate-y-10 scale-90" />
              <img
                src={heroDish.image}
                alt={heroDish.name}
                className="w-full h-full object-contain drop-shadow-2xl animate-[spin_60s_linear_infinite]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
