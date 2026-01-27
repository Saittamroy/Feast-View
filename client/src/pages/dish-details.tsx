import { useRoute } from "wouter";
import { menuItems, heroDish } from "@/lib/dummy-data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Flame, Clock, Leaf, ArrowLeft, Plus, Minus, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import NotFound from "@/pages/not-found";
import { getWhatsAppLink, createOrderMessage } from "@/lib/whatsapp";

export default function DishDetails() {
  const [match, params] = useRoute("/menu/:id");
  const [quantity, setQuantity] = useState(1);

  if (!match) return <NotFound />;

  const allItems = [heroDish, ...menuItems];
  const item = allItems.find(i => i.id === params.id);

  if (!item) return <NotFound />;

  const whatsappLink = getWhatsAppLink(createOrderMessage(item.name, item.price, quantity));

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary pl-0" onClick={() => history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Menu
          </Button>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image Side */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary/20 shadow-xl">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
              <Button 
                size="icon" 
                className="absolute top-6 right-6 rounded-full bg-white text-foreground hover:text-red-500 hover:bg-white shadow-lg"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Info Side */}
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="outline" className="text-primary border-primary/20 px-3 py-1 text-sm uppercase tracking-wide">
                    {item.category}
                  </Badge>
                  {item.isSpicy && (
                    <Badge className="bg-red-100 text-red-600 hover:bg-red-200 border-none px-3 py-1 flex items-center gap-1">
                      <Flame className="w-3 h-3 fill-current" /> Spicy
                    </Badge>
                  )}
                  {item.isVegetarian && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none px-3 py-1 flex items-center gap-1">
                      <Leaf className="w-3 h-3 fill-current" /> Veg
                    </Badge>
                  )}
                </div>

                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{item.name}</h1>
                <Rating rating={item.rating} reviews={item.reviews} className="mb-6" />
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex gap-8 py-6 border-y border-border">
                {item.preparationTime && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground uppercase font-bold tracking-wide">Prep Time</span>
                      <span className="font-medium">{item.preparationTime}</span>
                    </div>
                  </div>
                )}
                {item.calories && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground uppercase font-bold tracking-wide">Calories</span>
                      <span className="font-medium">{item.calories} kcal</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-primary">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through ml-3">${item.originalPrice}</span>
                  )}
                </div>

                <div className="flex items-center gap-4 bg-secondary/30 rounded-full p-1">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="rounded-full w-10 h-10 hover:bg-background"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="rounded-full w-10 h-10 hover:bg-background"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/20 bg-[#25D366] hover:bg-[#128C7E] text-white">
                    Order on WhatsApp - ${(item.price * quantity).toFixed(2)} <MessageCircle className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
