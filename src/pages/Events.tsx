import { motion } from "framer-motion";
import { Calendar, Users, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import eventsGaraImg from "@/assets/events-gara.jpg";
import eventsVenueImg from "@/assets/events-venue.jpg";

const eventTypes = [
  { icon: Users, title: "Private Events", description: "Intimate gatherings with bespoke coffee experiences and catering." },
  { icon: Calendar, title: "Coffee Tastings", description: "Guided cupping sessions exploring Ethiopian coffee origins and profiles." },
  { icon: Star, title: "Corporate Events", description: "Professional meetings and team events in an inspiring setting." },
  { icon: MapPin, title: "Cultural Gatherings", description: "Celebrate Ethiopian heritage with traditional coffee ceremonies." },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${eventsGaraImg})` }} />
        <div className="absolute inset-0 bg-espresso/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Mamokacha Gara</p>
          <h1 className="text-4xl md:text-6xl font-serif text-background mb-4">
            Host Unforgettable Moments
          </h1>
          <p className="text-background/80 font-sans text-base md:text-lg max-w-xl mx-auto mb-8">
            An exclusive event venue where Ethiopian hospitality meets modern elegance.
          </p>
          <Button variant="gold" size="lg">Book an Event</Button>
        </motion.div>
      </section>

      {/* Event Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Event Experiences</h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((et, i) => (
              <motion.div
                key={et.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 border border-border hover:border-accent transition-colors duration-300"
              >
                <et.icon className="mx-auto text-accent mb-4" size={28} />
                <h3 className="font-serif text-lg text-foreground mb-2">{et.title}</h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{et.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Showcase */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={eventsVenueImg} alt="Mamokacha Gara venue" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">The Venue</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Mamokacha Gara</h2>
            <div className="gold-divider !mx-0 mb-6" />
            <p className="font-sans text-muted-foreground leading-relaxed mb-4">
              Mamokacha Gara is our dedicated event space designed for memorable gatherings. Whether it's a private dinner, a coffee tasting, or a corporate retreat, the venue blends warm Ethiopian hospitality with contemporary elegance.
            </p>
            <ul className="space-y-3 mb-8">
              {["Capacity: up to 80 guests", "Full catering with Mamokacha menu", "Audio-visual equipment", "Custom coffee ceremony experiences"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg">Inquire Now</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
