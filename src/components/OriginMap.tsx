import { useState } from "react";
import { motion } from "framer-motion";

const regions = [
  {
    name: "Yirgacheffe",
    flavor: "Floral, citrus, tea-like body",
    altitude: "1,700 - 2,200m",
    processing: "Washed & Natural",
    description: "One of the most celebrated Ethiopian coffees in the world.",
    x: "55%", y: "65%",
  },
  {
    name: "Sidamo",
    flavor: "Berry, lemon, wine-like acidity",
    altitude: "1,500 - 2,200m",
    processing: "Washed",
    description: "Rich and complex flavors from southern Ethiopia.",
    x: "50%", y: "72%",
  },
  {
    name: "Guji",
    flavor: "Tropical fruit, jasmine, honey",
    altitude: "1,800 - 2,300m",
    processing: "Natural & Honey",
    description: "Emerging origin with exceptional cup quality.",
    x: "58%", y: "70%",
  },
  {
    name: "Harrar",
    flavor: "Blueberry, chocolate, wine",
    altitude: "1,500 - 2,100m",
    processing: "Natural / Dry",
    description: "Ancient coffee region with bold, fruity profiles.",
    x: "65%", y: "48%",
  },
  {
    name: "Limu",
    flavor: "Spice, wine, balanced sweetness",
    altitude: "1,400 - 2,000m",
    processing: "Washed",
    description: "Smooth and well-balanced western Ethiopian coffee.",
    x: "42%", y: "55%",
  },
];

const OriginMap = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Coffee Origins</p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            Discover Ethiopian Coffee
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-card rounded-sm overflow-hidden"
          >
            {/* Simplified Ethiopia shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-4/5 h-4/5">
                <path
                  d="M60,30 L90,25 L130,30 L160,50 L170,80 L165,110 L150,140 L130,160 L100,170 L70,165 L50,150 L35,120 L30,90 L40,60 Z"
                  fill="hsl(136,51%,24%)"
                  fillOpacity="0.15"
                  stroke="hsl(136,51%,24%)"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />
              </svg>
            </div>

            {/* Region dots */}
            {regions.map((region, i) => (
              <button
                key={region.name}
                onClick={() => setActive(i)}
                className={`absolute w-4 h-4 rounded-full transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
                  active === i
                    ? "bg-accent scale-150 shadow-lg"
                    : "bg-primary/60 hover:bg-primary hover:scale-125"
                }`}
                style={{ left: region.x, top: region.y }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-sans whitespace-nowrap text-foreground font-medium">
                  {region.name}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Region details */}
          <div className="flex flex-col gap-4">
            {regions.map((region, i) => (
              <motion.button
                key={region.name}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`text-left p-6 border transition-all duration-300 ${
                  active === i
                    ? "border-accent bg-card"
                    : "border-transparent hover:border-border"
                }`}
              >
                <h3 className="font-serif text-xl text-foreground mb-2">{region.name}</h3>
                <p className="text-sm font-sans text-accent mb-2">{region.flavor}</p>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-6 text-xs font-sans text-muted-foreground mt-3 mb-3">
                      <span>Altitude: {region.altitude}</span>
                      <span>Process: {region.processing}</span>
                    </div>
                    <p className="text-sm font-sans text-muted-foreground">{region.description}</p>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginMap;
