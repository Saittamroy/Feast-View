import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { MenuGrid } from "@/components/menu-grid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuGrid />
        
        {/* Banner Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden text-center md:text-left">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
                   style={{ 
                     backgroundImage: 'radial-gradient(circle at 10px 10px, white 2px, transparent 0)', 
                     backgroundSize: '40px 40px' 
                   }}>
              </div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                    Book a Table for a <br/>
                    <span className="text-secondary">Royal Dining</span> Experience
                  </h2>
                  <p className="text-white/80 text-lg max-w-md mx-auto md:mx-0">
                    Reserve your spot today and enjoy 20% off on your first dine-in experience. Limited seats available.
                  </p>
                  <button className="bg-white text-primary hover:bg-secondary font-bold py-4 px-8 rounded-full shadow-lg transition-colors text-lg">
                    Book Reservation
                  </button>
                </div>
                
                {/* Decorative Visual */}
                <div className="hidden md:block relative h-64">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
