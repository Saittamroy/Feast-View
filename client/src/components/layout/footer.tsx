import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-primary">Saffron&Spice</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Authentic Indian cuisine prepared with traditional recipes and love. Experience the royal flavors of India.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/menu"><a className="hover:text-primary transition-colors">Our Menu</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Reservation</a></Link></li>
              <li><Link href="/blog"><a className="hover:text-primary transition-colors">Blog</a></Link></li>
              <li><Link href="/policy"><a className="hover:text-primary transition-colors">Return Policy</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Spice Garden Road,<br />Culinary District, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@saffronandspice.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-primary font-medium">
                <span>Sat - Sun</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-background/60">
          <p>© 2024 Saffron & Spice. All rights reserved. Designed for Food Lovers.</p>
        </div>
      </div>
    </footer>
  );
}
