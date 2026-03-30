import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bannerVid from "@/assets/banner-vid.mp4";
import heroPoster from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <>
      {/* Fixed background: stays behind the page; white sections scroll over it from below */}
      <div
        className="pointer-events-none fixed inset-0 z-0 h-screen w-full overflow-hidden"
        aria-hidden
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroPoster}
        >
          <source src={bannerVid} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-transparent">
        <div className="max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mx-auto mb-8 h-0.5 w-16 bg-accent" />
            <h1 className="mb-6 font-serif text-4xl leading-tight text-background md:text-6xl lg:text-7xl">
              Crafted with Quality.
              <br />
              <span className="italic">Served with Care.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-xl font-sans text-base leading-relaxed text-background/80 md:text-lg">
              Rooted in Ethiopian coffee heritage and modern café culture.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Explore Our Story</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/shop">Shop Coffee</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-12 w-px bg-background/40" />
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
