import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-espresso/60" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-background leading-tight mb-6">
            Crafted with Quality.
            <br />
            <span className="italic">Served with Care.</span>
          </h1>
          <p className="text-background/80 font-sans text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Rooted in Ethiopian coffee heritage and modern café culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/about">Explore Our Story</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/shop">Shop Coffee</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-12 bg-background/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
