import { useState } from "react";
import { motion } from "framer-motion";
import ethiopiaMap from "@/assets/ethiopia-map.png";

const regions = [
  {
    name: "Yirgacheffe",
    flavor: "Floral, citrus, tea-like body",
    altitude: "1,700 - 2,200m",
    processing: "Washed & Natural",
    description: "One of the most celebrated Ethiopian coffees in the world.",
    x: "52%", y: "68%",
  },
  {
    name: "Sidamo",
    flavor: "Berry, lemon, wine-like acidity",
    altitude: "1,500 - 2,200m",
    processing: "Washed",
    description: "Rich and complex flavors from southern Ethiopia.",
    x: "48%", y: "72%",
  },
  {
    name: "Guji",
    flavor: "Tropical fruit, jasmine, honey",
    altitude: "1,800 - 2,300m",
    processing: "Natural & Honey",
    description: "Emerging origin with exceptional cup quality.",
    x: "56%", y: "74%",
  },
  {
    name: "Harrar",
    flavor: "Blueberry, chocolate, wine",
    altitude: "1,500 - 2,100m",
    processing: "Natural / Dry",
    description: "Ancient coffee region with bold, fruity profiles.",
    x: "68%", y: "42%",
  },
  {
    name: "Limu",
    flavor: "Spice, wine, balanced sweetness",
    altitude: "1,400 - 2,000m",
    processing: "Washed",
    description: "Smooth and well-balanced western Ethiopian coffee.",
    x: "38%", y: "52%",
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
              <svg viewBox="0 0 800 700" className="w-4/5 h-4/5">
                {/* Realistic Ethiopia outline */}
                <path
                  d="M290,50 L310,48 L340,52 L370,45 L400,40 L430,38 L460,42 L490,50 L520,55 L550,52 L580,60 L610,70 L640,85 L660,100 L680,120 L700,145 L715,170 L720,195 L718,220 L710,245 L700,265 L685,285 L670,300 L655,320 L640,340 L620,355 L600,370 L580,385 L560,400 L540,415 L520,425 L500,435 L480,445 L460,458 L440,470 L420,480 L400,490 L380,498 L360,505 L340,510 L320,515 L300,518 L280,520 L260,518 L240,512 L220,505 L200,495 L185,480 L170,462 L158,440 L148,418 L140,395 L135,370 L130,345 L128,320 L130,295 L135,270 L142,248 L150,228 L160,210 L172,192 L185,175 L198,160 L212,145 L228,130 L245,115 L260,100 L272,85 L280,70 L285,58 Z"
                  fill="hsl(var(--primary))"
                  fillOpacity="0.12"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeOpacity="0.35"
                />
                {/* Inner detail lines for topographic feel */}
                <path
                  d="M300,120 Q400,110 500,140 Q580,170 620,240 Q650,300 600,380 Q550,430 460,460 Q370,490 300,480 Q220,460 180,390 Q160,320 180,250 Q210,180 300,120 Z"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  strokeDasharray="4 4"
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
