import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import chefImg from '@assets/generated_images/professional_indian_chef.png';
import interiorImg from '@assets/generated_images/warm_restaurant_interior.png';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={interiorImg} 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover brightness-[0.6]"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl md:text-7xl font-bold mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-white/90"
            >
              A journey of flavors, tradition, and passion for authentic Indian cuisine.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Mission</span>
              <h2 className="font-heading text-4xl font-bold">Bringing the Royal Flavors of India to Your Table</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Saffron & Spice, we believe that food is not just sustenance, but a celebration of culture and heritage. Our mission is to transport you to the vibrant streets and royal kitchens of India through our carefully crafted dishes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We source the finest spices directly from India and use fresh, locally sourced produce to create an unforgettable dining experience that honors traditional recipes while embracing modern culinary techniques.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={chefImg} alt="Our Head Chef" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl font-bold mb-4">Our Core Values</h2>
              <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Authenticity", desc: "We stay true to the roots of Indian culinary traditions, using age-old recipes and techniques." },
                { title: "Quality", desc: "We never compromise on ingredients. Only the freshest produce and premium spices make it to our kitchen." },
                { title: "Hospitality", desc: "In India, 'Atithi Devo Bhava' means 'The Guest is God'. We treat every customer like royalty." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-background p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-heading text-xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Come Taste the Difference</h2>
          <Button size="lg" className="rounded-full px-8 gap-2">
            Reserve a Table <ArrowRight className="w-4 h-4" />
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
