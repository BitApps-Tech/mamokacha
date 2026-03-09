import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const frequencies = [
  { label: "Weekly", price: "$14" },
  { label: "Bi-Weekly", price: "$16" },
  { label: "Monthly", price: "$18" },
];

const SubscriptionSection = () => {
  const [selected, setSelected] = useState(2);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Subscription</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            Coffee Delivered to Your Door
          </h2>
          <div className="gold-divider mt-6 mb-8" />
          <p className="text-base font-sans text-muted-foreground max-w-xl mx-auto mb-12">
            Enjoy fresh Mamokacha coffee delivered regularly. Choose your frequency, roast, and grind.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {frequencies.map((freq, i) => (
            <button
              key={freq.label}
              onClick={() => setSelected(i)}
              className={`px-8 py-6 border transition-all duration-300 ${
                selected === i
                  ? "border-accent bg-card"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <p className="font-serif text-xl text-foreground mb-1">{freq.label}</p>
              <p className="text-2xl font-serif text-accent">{freq.price}<span className="text-sm text-muted-foreground font-sans">/bag</span></p>
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {["Free delivery", "Freshly roasted beans", "Flexible subscription", "Cancel anytime"].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check size={14} className="text-accent" />
              <span className="text-sm font-sans text-muted-foreground">{feature}</span>
            </div>
          ))}
        </motion.div>

        <Button variant="hero" size="lg">
          Start Your Coffee Journey
        </Button>
      </div>
    </section>
  );
};

export default SubscriptionSection;
