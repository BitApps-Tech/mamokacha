import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import espressoImg from "@/assets/menu-espresso.jpg";
import macchiatoImg from "@/assets/menu-macchiato.jpg";
import cappuccinoImg from "@/assets/menu-cappuccino.jpg";
import pastriesImg from "@/assets/menu-pastries.jpg";
import latteImg from "@/assets/latte-art.jpg";

const menuItems = [
  { name: "Espresso", description: "Pure, bold, traditional", image: espressoImg },
  { name: "Macchiato", description: "Ethiopian-style layered perfection", image: macchiatoImg },
  { name: "Cappuccino", description: "Velvety foam, balanced flavor", image: cappuccinoImg },
  { name: "Fresh Pastries", description: "Baked daily with care", image: pastriesImg },
  { name: "Latte Art", description: "Crafted by expert baristas", image: latteImg },
];

const MenuPreview = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Café Menu</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Taste the Experience</h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-32 h-32 md:w-40 md:h-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-1">{item.name}</h3>
              <p className="text-xs font-sans text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
