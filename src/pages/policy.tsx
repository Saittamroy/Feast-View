import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Policy() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="font-heading text-4xl font-bold mb-8">Return & Refund Policy</h1>
          
          <div className="prose prose-stone dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-3">1. Order Cancellations</h2>
              <p className="text-muted-foreground leading-relaxed">
                We accept cancellations within 5 minutes of placing an order. Since our food is prepared fresh, we cannot accept cancellations once the kitchen has begun preparing your meal. Please contact us immediately at +1 (555) 123-4567 if you need to cancel.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">2. Quality Issues</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Saffron & Spice, we take pride in the quality of our food. If you receive a dish that is incorrect, incomplete, or not up to our standards, please notify us immediately upon delivery or within 30 minutes of pickup. We will replace the item or provide a refund for the specific dish.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">3. Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Refunds for eligible cancellations or quality issues will be processed to the original method of payment within 3-5 business days. For cash orders, refunds will be provided as store credit or cash upon your next visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">4. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our policy, please contact us at hello@saffronandspice.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
