import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import espressoImg from "@/assets/menu-espresso.jpg";
import macchiatoImg from "@/assets/menu-macchiato.jpg";
import cappuccinoImg from "@/assets/menu-cappuccino.jpg";
import latteImg from "@/assets/latte-art.jpg";
import pouroverImg from "@/assets/menu-pourover.jpg";
import icedImg from "@/assets/menu-iced.jpg";
import pastriesImg from "@/assets/menu-pastries.jpg";
import breakfastImg from "@/assets/menu-breakfast.jpg";
import juiceImg from "@/assets/menu-juice.jpg";

const categories = ["Hot Coffee", "Cold Drinks", "Food", "Fresh Juice"];

const menuData: Record<string, Array<{ name: string; description: string; price: string; image: string }>> = {
  "Hot Coffee": [
    { name: "Espresso", description: "Pure Ethiopian single shot, bold and aromatic", price: "85 ETB", image: espressoImg },
    { name: "Macchiato", description: "Traditional Ethiopian-style, layered to perfection", price: "90 ETB", image: macchiatoImg },
    { name: "Cappuccino", description: "Velvety steamed milk with rich espresso", price: "120 ETB", image: cappuccinoImg },
    { name: "Café Latte", description: "Smooth espresso with silky steamed milk and latte art", price: "130 ETB", image: latteImg },
    { name: "Pour Over", description: "Hand-brewed single origin, highlighting delicate flavors", price: "150 ETB", image: pouroverImg },
    { name: "Americano", description: "Espresso lengthened with hot water, clean finish", price: "95 ETB", image: espressoImg },
  ],
  "Cold Drinks": [
    { name: "Iced Latte", description: "Chilled espresso with cold milk over ice", price: "140 ETB", image: icedImg },
    { name: "Cold Brew", description: "Slow-steeped for 18 hours, smooth and rich", price: "150 ETB", image: icedImg },
    { name: "Iced Macchiato", description: "Ethiopian macchiato served over ice", price: "110 ETB", image: icedImg },
    { name: "Coffee Frappe", description: "Blended iced coffee with cream", price: "160 ETB", image: icedImg },
  ],
  "Food": [
    { name: "Avocado Toast", description: "Sourdough, smashed avocado, poached eggs, microgreens", price: "220 ETB", image: breakfastImg },
    { name: "Croissant", description: "Freshly baked butter croissant, flaky and golden", price: "120 ETB", image: pastriesImg },
    { name: "Pastry Selection", description: "Daily rotating selection of artisan pastries", price: "100 ETB", image: pastriesImg },
    { name: "Breakfast Bowl", description: "Granola, yogurt, fresh fruits, and honey drizzle", price: "180 ETB", image: breakfastImg },
  ],
  "Fresh Juice": [
    { name: "Fresh Orange Juice", description: "Freshly squeezed, no additives", price: "100 ETB", image: juiceImg },
    { name: "Green Detox", description: "Spinach, apple, ginger, and lemon blend", price: "120 ETB", image: juiceImg },
    { name: "Tropical Mix", description: "Mango, pineapple, and passion fruit", price: "110 ETB", image: juiceImg },
  ],
};

const Menu = () => {
  const [active, setActive] = useState("Hot Coffee");
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cappuccinoImg})` }} />
        <div className="absolute inset-0 bg-espresso/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Café Menu</p>
          <h1 className="text-4xl md:text-6xl font-serif text-background">Our Menu</h1>
        </motion.div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs tracking-widest uppercase font-sans font-medium px-6 py-3 border transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {menuData[active].map((item) => (
                <div key={item.name} className="group">
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                    <span className="font-sans text-sm text-accent font-medium">{item.price}</span>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  <button
                    onClick={() => {
                      const priceNum = parseInt(item.price.replace(/[^\d]/g, ""));
                      addItem({
                        id: `menu-${item.name}`,
                        name: item.name,
                        price: priceNum,
                        image: item.image,
                        category: active,
                      });
                      toast.success(`${item.name} added to cart`);
                    }}
                    className="mt-3 flex items-center gap-2 text-[10px] tracking-widest uppercase font-sans font-medium text-primary hover:text-accent transition-colors active:scale-95"
                  >
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
