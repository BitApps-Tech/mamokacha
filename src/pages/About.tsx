import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import coffeeFarmImg from "@/assets/coffee-farm.jpg";
import coffeeCeremonyImg from "@/assets/coffee-ceremony.jpg";
import roastingImg from "@/assets/roasting.jpg";
import cafeImg from "@/assets/cafe-interior.jpg";

const timeline = [
  { year: "2015", title: "The Seed is Planted", description: "Mamokacha was born from a deep love for Ethiopian coffee heritage and a vision to share it with the world." },
  { year: "2017", title: "First Café Opens", description: "Our flagship café opened its doors in Addis Ababa, bringing specialty coffee culture to the heart of Ethiopia." },
  { year: "2019", title: "Roasting Mastery", description: "We launched our own roasting facility, perfecting small-batch roast profiles for every origin." },
  { year: "2021", title: "Growing the Ecosystem", description: "Mamokacha expanded into agro-processing, dairy, and event hosting — building a complete coffee ecosystem." },
  { year: "2024", title: "A Global Vision", description: "Today, Mamokacha stands as a premium Ethiopian brand with multiple cafés and a growing international presence." },
];

const values = [
  { title: "Heritage", description: "Every cup honors generations of Ethiopian coffee tradition and craftsmanship." },
  { title: "Quality", description: "We source, roast, and serve only the finest specialty-grade Ethiopian coffee." },
  { title: "Hospitality", description: "Warmth and care define every Mamokacha experience — from farm to cup." },
  { title: "Innovation", description: "We blend tradition with modern techniques to push the boundaries of coffee excellence." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${coffeeFarmImg})` }} />
        <div className="absolute inset-0 bg-espresso/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-serif text-background mb-4">Rooted in Heritage</h1>
          <p className="text-background/80 font-sans text-base md:text-lg max-w-xl mx-auto">
            The story of Mamokacha is a story of Ethiopia — its land, its people, and its coffee.
          </p>
        </motion.div>
      </section>

      {/* Story Split */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={coffeeCeremonyImg} alt="Ethiopian coffee ceremony" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">The Beginning</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Where Coffee Was Born</h2>
            <div className="gold-divider !mx-0 mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              Ethiopia is the birthplace of coffee. For centuries, the coffee ceremony has been a cornerstone of Ethiopian culture — a ritual of hospitality, connection, and community.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              Mamokacha was founded to honor this heritage while reimagining it for the modern world. We believe that exceptional coffee deserves exceptional presentation — and that every cup should tell a story.
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed">
              From sourcing beans directly from Ethiopian farmers to crafting each drink with precision and care, Mamokacha bridges tradition and innovation in every sip.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Our Values</h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">The Mamokacha Timeline</h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-accent font-serif text-2xl">{item.year}</span>
                  <h3 className="font-serif text-xl text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-full bg-accent border-4 border-background absolute left-1/2 -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roasting & Café Images */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden group"
          >
            <img src={roastingImg} alt="Coffee roasting" className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-espresso/40 flex items-end p-8">
              <h3 className="font-serif text-2xl text-background">Craft Roasting</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden group"
          >
            <img src={cafeImg} alt="Mamokacha café" className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-espresso/40 flex items-end p-8">
              <h3 className="font-serif text-2xl text-background">Modern Café Culture</h3>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
