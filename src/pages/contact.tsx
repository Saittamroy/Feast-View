import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about our menu, want to make a reservation, or just want to say hello.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Visit us for an unforgettable dining experience or contact us for catering inquiries.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Location</h3>
                      <p className="text-muted-foreground">123 Spice Garden Road<br/>Culinary District, NY 10012</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-muted-foreground">hello@saffronandspice.com</p>
                      <p className="text-muted-foreground">bookings@saffronandspice.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Opening Hours</h3>
                      <div className="grid grid-cols-2 gap-x-8 text-muted-foreground">
                        <span>Mon - Fri:</span>
                        <span>11:00 AM - 10:00 PM</span>
                        <span>Sat - Sun:</span>
                        <span>10:00 AM - 11:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-secondary/30 rounded-2xl h-64 w-full flex items-center justify-center border border-border">
                <span className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Google Map Placeholder
                </span>
              </div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border"
            >
              <h2 className="font-heading text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Reservation Inquiry" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full h-12 text-base font-semibold">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
