import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cafeImg from "@/assets/cafe-interior.jpg";
import agroImg from "@/assets/agro-processing.jpg";
import dairyImg from "@/assets/dairy.jpg";
import eventsImg from "@/assets/events-venue.jpg";

const ecosystemItems = [
  {
    title: "Coffee Shops",
    description: "Experience Mamokacha across our cafés.",
    image: cafeImg,
    to: "/cafes",
  },
  {
    title: "Agro Processing",
    description: "Quality production rooted in Ethiopian agriculture.",
    image: agroImg,
    to: "/about",
  },
  {
    title: "Dairy Products",
    description: "Fresh and carefully processed dairy.",
    image: dairyImg,
    to: "/about",
  },
  {
    title: "Mamokacha Gara",
    description: "Host memorable gatherings in our unique venue.",
    image: eventsImg,
    to: "/events",
  },
];

const BrandEcosystem = () => {
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
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Our Ecosystem</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">The Mamokacha World</h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecosystemItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={item.to} className="group block relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-espresso/40 group-hover:bg-espresso/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-serif text-2xl text-background mb-2">{item.title}</h3>
                  <p className="text-sm font-sans text-background/80">{item.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandEcosystem;
