import { motion } from "framer-motion";
import { Milk, Snowflake, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dairyHero from "@/assets/dairy.jpg";

const highlights = [
  {
    icon: Milk,
    title: "Fresh & local",
    description: "We partner with trusted dairies to bring you milk, cream, and cultured products that meet our standards.",
  },
  {
    icon: Snowflake,
    title: "Cold chain care",
    description: "Temperature-controlled handling from delivery to your café drink—so every cup tastes clean and sweet.",
  },
  {
    icon: Heart,
    title: "Crafted for café",
    description: "Our baristas use these ingredients in lattes, cappuccinos, and specialty drinks across Mamokacha locations.",
  },
  {
    icon: Sparkles,
    title: "Quality you can taste",
    description: "Regular audits and consistent sourcing mean reliable flavor in every pour.",
  },
];

const DairyProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative flex h-[55vh] min-h-[22rem] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dairyHero})` }}
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6 text-center"
        >
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-accent">Our Ecosystem</p>
          <h1 className="mb-4 font-serif text-4xl text-background md:text-6xl">Dairy Products</h1>
          <p className="mx-auto max-w-xl font-sans text-base text-background/85 md:text-lg">
            Fresh and carefully processed dairy—chosen to complement Ethiopian coffee in every cup we serve.
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-lg leading-relaxed text-muted-foreground"
          >
            Mamokacha’s dairy program supports the drinks you love—silky steamed milk, rich cream, and ingredients
            that let coffee shine. We prioritize freshness, food safety, and partners who share our values.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center md:mb-16"
          >
            <p className="mb-4 font-sans text-xs uppercase tracking-widest text-accent">Why it matters</p>
            <h2 className="mb-4 font-serif text-3xl text-foreground md:text-5xl">In every cup</h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border bg-background/80 p-8 text-center transition-colors hover:border-accent/60"
              >
                <Icon className="mx-auto mb-4 text-accent" size={28} strokeWidth={1.5} />
                <h3 className="mb-2 font-serif text-lg text-foreground">{h.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{h.description}</p>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 font-sans text-muted-foreground leading-relaxed">
              Taste our dairy in handcrafted drinks at any Mamokacha café—or browse the full menu for pairings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-none border-foreground" asChild>
                <Link to="/cafes">Find a Café</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DairyProducts;
