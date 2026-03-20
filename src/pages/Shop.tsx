import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import signatureImg from "@/assets/product-signature.jpg";
import singleOriginImg from "@/assets/product-single-origin.jpg";
import espressoImg from "@/assets/product-espresso.jpg";
import subscriptionImg from "@/assets/product-subscription.jpg";

const filters = ["All", "Single Origin", "Blends", "Subscriptions"];

const products = [
  { name: "Mamokacha Signature Blend", category: "Blends", price: 850, roast: "Medium", notes: "Chocolate, caramel, citrus zest", weight: "250g", image: signatureImg },
  { name: "Yirgacheffe Single Origin", category: "Single Origin", price: 950, roast: "Light", notes: "Floral, jasmine, bergamot, tea-like body", weight: "250g", image: singleOriginImg },
  { name: "Guji Natural", category: "Single Origin", price: 900, roast: "Medium-Light", notes: "Blueberry, wine, dark chocolate", weight: "250g", image: singleOriginImg },
  { name: "Espresso Roast", category: "Blends", price: 780, roast: "Dark", notes: "Bold, smoky, bittersweet cocoa", weight: "250g", image: espressoImg },
  { name: "Sidamo Washed", category: "Single Origin", price: 920, roast: "Medium", notes: "Lemon, honey, silky body", weight: "250g", image: singleOriginImg },
  { name: "Monthly Subscription", category: "Subscriptions", price: 2400, roast: "Rotating", notes: "Curated selection delivered fresh monthly", weight: "2 × 250g", image: subscriptionImg },
  { name: "Harrar Bold", category: "Single Origin", price: 880, roast: "Medium-Dark", notes: "Dried fruit, spice, mocha", weight: "250g", image: espressoImg },
  { name: "Gift Subscription – 3 Months", category: "Subscriptions", price: 6900, roast: "Curated", notes: "3 months of premium Ethiopian coffee", weight: "2 × 250g/mo", image: subscriptionImg },
];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { addItem } = useCart();
  const filtered = activeFilter === "All" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${signatureImg})` }} />
        <div className="absolute inset-0 bg-espresso/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Online Store</p>
          <h1 className="text-4xl md:text-6xl font-serif text-background">Shop Coffee</h1>
        </motion.div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs tracking-widest uppercase font-sans font-medium px-6 py-3 border transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group hover-lift"
              >
                <div className="aspect-square overflow-hidden bg-card mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] tracking-widest uppercase font-sans text-accent">{product.roast} Roast</span>
                    <span className="text-muted-foreground/30">·</span>
                    <span className="text-[10px] tracking-widest uppercase font-sans text-muted-foreground">{product.weight}</span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground">{product.name}</h3>
                  <p className="font-sans text-xs text-muted-foreground">{product.notes}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-sans text-base font-medium text-foreground">{product.price.toLocaleString()} ETB</span>
                    <Button variant="gold" size="sm" className="h-9 px-4 py-0 text-[10px]">
                      <ShoppingBag size={14} className="mr-1" /> Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
