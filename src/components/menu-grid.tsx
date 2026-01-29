import { menuItems } from "@/lib/dummy-data";
import { MenuCard } from "@/components/menu-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Rice", "Chicken", "Vegetarian"];

export function MenuGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All"
    ? menuItems
    : menuItems.filter(item => item.category === activeTab);

  return (
    <section className="py-20 bg-background" id="menu">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Delicious Offerings</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">Our Special Menu</h2>
          <p className="text-muted-foreground text-lg">
            Explore our curated selection of authentic dishes, each prepared with passion and the finest ingredients.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-secondary/30 h-auto p-1 rounded-full gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <motion.div
             layout
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </motion.div>
        </Tabs>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block border-b-2 border-primary text-primary font-bold text-lg pb-1 hover:text-primary/80 transition-colors">
            View All Dishes
          </a>
        </div>
      </div>
    </section>
  );
}
