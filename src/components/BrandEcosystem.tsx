import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cafeImg from "@/assets/cafe.jpg";
import agroImg from "@/assets/agro-processing.jpg";
import dairyImg from "@/assets/dairy.jpg";
import eventsImg from "@/assets/hotel-2.jpg";

const MotionLink = motion(Link);

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
    to: "/agro-processing",
  },
  {
    title: "Dairy Products",
    description: "Fresh and carefully processed dairy.",
    image: dairyImg,
    to: "/dairy-products",
  },
  {
    title: "Mamokacha Gara",
    description: "Host memorable gatherings in our unique venue.",
    image: eventsImg,
    to: "/events",
  },
] as const;

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ecosystemItems.map((item, i) => (
            <MotionLink
              key={item.title}
              to={item.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              aria-label={`${item.title}: ${item.description}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/40 transition-colors duration-500 group-hover:bg-espresso/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="mb-2 font-serif text-2xl text-background">{item.title}</h3>
                <p className="font-sans text-sm text-background/80">{item.description}</p>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandEcosystem;
