import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import roastingImg from "@/assets/roasting.jpg";

const RoastingSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-6">Craftsmanship</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              The Art of
              <br />
              <span className="italic">Roasting</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-8">
              At Mamokacha, roasting coffee is both science and craftsmanship. Each batch is
              carefully roasted to unlock the unique character of Ethiopian beans.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {["Small Batch Roasting", "Expert Roast Profiles", "Freshness Guaranteed"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <span className="text-sm font-sans text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/shop">Explore Our Coffee</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src={roastingImg}
              alt="Coffee roasting process"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoastingSection;
