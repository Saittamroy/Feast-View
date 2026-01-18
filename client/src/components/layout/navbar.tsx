import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-primary">Saffron<span className="text-foreground">&</span>Spice</span>
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "About", path: "/about" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" }
          ].map((link) => (
            <Link key={link.name} href={link.path}>
              <a className={`text-sm font-medium transition-colors ${isActive(link.path) ? "text-primary font-bold" : "text-foreground/80 hover:text-primary"}`}>
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-secondary/50">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-secondary/50">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full relative hover:bg-secondary/50 border-primary/20">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                {[
                  { name: "Home", path: "/" },
                  { name: "Our Menu", path: "/menu" },
                  { name: "About Us", path: "/about" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact", path: "/contact" }
                ].map((link) => (
                  <Link key={link.name} href={link.path}>
                    <a className="text-lg font-medium hover:text-primary transition-colors">{link.name}</a>
                  </Link>
                ))}
                <div className="h-px bg-border my-2"></div>
                <a href="#" className="text-lg font-medium">Login</a>
                <a href="#" className="text-lg font-medium">My Orders</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
