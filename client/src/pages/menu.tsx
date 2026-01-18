import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MenuCard } from "@/components/menu-card";
import { menuItems } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Menu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [priceRange, setPriceRange] = useState([0, 30]);
  const [filters, setFilters] = useState({
    veg: false,
    spicy: false,
  });

  const categories = ["All", "Rice", "Chicken", "Vegetarian", "Dessert"];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesVeg = !filters.veg || item.isVegetarian;
    const matchesSpicy = !filters.spicy || item.isSpicy;

    return matchesSearch && matchesCategory && matchesPrice && matchesVeg && matchesSpicy;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setPriceRange([0, 30]);
    setFilters({ veg: false, spicy: false });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary/5 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Our Full Menu</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our extensive collection of authentic Indian delicacies.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center sticky top-20 z-30 bg-background/95 backdrop-blur py-4 -mx-4 px-4 md:mx-0 md:px-0 border-b md:border-none">
            
            {/* Categories - Desktop */}
            <div className="hidden md:flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search dishes..." 
                  className="pl-9 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full shrink-0">
                    <Filter className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Menu</SheetTitle>
                    <SheetDescription>Refine your search to find the perfect dish.</SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-8">
                    {/* Categories Mobile */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <Badge 
                            key={cat} 
                            variant={selectedCategory === cat ? "default" : "outline"}
                            className="cursor-pointer px-3 py-1"
                            onClick={() => setSelectedCategory(cat)}
                          >
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Price Range</h4>
                        <span className="text-sm text-muted-foreground">${priceRange[0]} - ${priceRange[1]}</span>
                      </div>
                      <Slider 
                        min={0} 
                        max={50} 
                        step={1} 
                        value={priceRange} 
                        onValueChange={setPriceRange}
                        className="py-4"
                      />
                    </div>

                    {/* Dietary */}
                    <div className="space-y-4">
                      <h4 className="font-medium">Dietary Preferences</h4>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="veg" 
                          checked={filters.veg}
                          onCheckedChange={(checked) => setFilters(prev => ({ ...prev, veg: checked as boolean }))}
                        />
                        <Label htmlFor="veg">Vegetarian Only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="spicy" 
                          checked={filters.spicy}
                          onCheckedChange={(checked) => setFilters(prev => ({ ...prev, spicy: checked as boolean }))}
                        />
                        <Label htmlFor="spicy">Spicy Only</Label>
                      </div>
                    </div>

                    <Button onClick={clearFilters} variant="outline" className="w-full">
                      Clear All Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No dishes found matching your criteria.</p>
              <Button variant="link" onClick={clearFilters} className="mt-2 text-primary">
                Clear filters to see all dishes
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
