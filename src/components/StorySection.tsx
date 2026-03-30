import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import storyImg from "@/assets/Mamo_Kacha-05332-scaled.jpg";

const StorySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src={storyImg}
              alt="Mamokacha coffee heritage"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-6">Our Heritage</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              The Mamokacha
              <br />
              <span className="italic">Story</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-8" />
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-6">
              Rooted in Ethiopian quality and hospitality, Mamokacha blends tradition,
              craftsmanship, and innovation to create exceptional coffee experiences.
            </p>
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-10">
              From the highland farms of Ethiopia to your cup, every bean tells a story
              of dedication, community, and the pursuit of perfection.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
