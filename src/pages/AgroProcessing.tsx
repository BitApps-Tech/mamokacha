import { motion } from "framer-motion";
import { Leaf, Factory, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agroHero from "@/assets/agro-processing.jpg";

const pillars = [
  {
    icon: Leaf,
    title: "Farm to facility",
    description: "We work closely with Ethiopian growers, selecting cherries at peak ripeness for consistent quality.",
  },
  {
    icon: Factory,
    title: "Modern processing",
    description: "Washing, drying, and sorting are handled with care—balancing tradition with calibrated equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Quality at every step",
    description: "Batch tracking, cupping, and sensory checks ensure only the best lots move forward.",
  },
  {
    icon: Truck,
    title: "Transparent supply",
    description: "From parchment to export-ready beans, logistics are coordinated for freshness and traceability.",
  },
];

const AgroProcessing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative flex h-[55vh] min-h-[22rem] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${agroHero})` }}
        />
        <div className="absolute inset-0 bg-espresso/55" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6 text-center"
        >
          <p className="mb-4 font-sans text-xs uppercase tracking-widest text-accent">Our Ecosystem</p>
          <h1 className="mb-4 font-serif text-4xl text-background md:text-6xl">Agro Processing</h1>
          <p className="mx-auto max-w-xl font-sans text-base text-background/85 md:text-lg">
            Quality production rooted in Ethiopian agriculture—from harvest handling to export-ready coffee.
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
            Mamokacha’s agro-processing line connects farmers, washing stations, and our roastery. We invest in
            training, fair partnerships, and infrastructure so that Ethiopian coffee can shine on the world stage
            while supporting livelihoods at home.
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
            <p className="mb-4 font-sans text-xs uppercase tracking-widest text-accent">How we operate</p>
            <h2 className="mb-4 font-serif text-3xl text-foreground md:text-5xl">From field to cup</h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border bg-background/80 p-8 text-center transition-colors hover:border-accent/60"
              >
                <Icon className="mx-auto mb-4 text-accent" size={28} strokeWidth={1.5} />
                <h3 className="mb-2 font-serif text-lg text-foreground">{p.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{p.description}</p>
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
              Explore our café and retail coffee—every bag reflects the same standards we uphold at origin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/shop">Shop Coffee</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-none border-foreground" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgroProcessing;
