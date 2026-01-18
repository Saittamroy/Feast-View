import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The History of Biryani: A Royal Legacy",
    excerpt: "Discover the origins of India's most beloved dish, tracing its roots from Persian kitchens to the royal courts of the Mughals.",
    date: "Oct 12, 2025",
    author: "Chef Raj",
    category: "History",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "5 Spices Every Indian Kitchen Needs",
    excerpt: "Unlock the secrets of authentic Indian cooking with these five essential spices that form the backbone of our cuisine.",
    date: "Sep 28, 2025",
    author: "Priya Sharma",
    category: "Cooking Tips",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Why We Use Clay Pots for Cooking",
    excerpt: "Learn why traditional clay pot cooking enhances flavor, retains nutrients, and creates the perfect texture for our signature curries.",
    date: "Sep 15, 2025",
    author: "Chef Raj",
    category: "Tradition",
    image: "https://images.unsplash.com/photo-1626509653294-84d49a6d238c?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Celebrating Diwali with Sweets",
    excerpt: "Explore the variety of traditional Indian sweets prepared during the festival of lights and their cultural significance.",
    date: "Aug 30, 2025",
    author: "Team Saffron",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        <div className="bg-primary/5 py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Culinary Chronicles</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stories, recipes, and insights from the world of Indian cuisine.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur text-foreground hover:bg-background">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  
                  <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="link" className="p-0 h-auto justify-start text-primary font-semibold group/btn">
                    Read Article <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
