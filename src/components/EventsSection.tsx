import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import venueImg from "@/assets/events-venue.jpg";

const EventsSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${venueImg})` }}
      />
      <div className="absolute inset-0 bg-espresso/70" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-6">Mamokacha Gara</p>
          <h2 className="text-3xl md:text-5xl font-serif text-background mb-6 leading-tight">
            Host Unforgettable Moments
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-8" />
          <p className="text-base font-sans text-background/80 leading-relaxed mb-4">
            Perfect for private events, coffee gatherings, and corporate meetings.
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-sm font-sans text-background/60 mb-10">
            <span>Private Events</span>
            <span className="text-accent">•</span>
            <span>Coffee Gatherings</span>
            <span className="text-accent">•</span>
            <span>Corporate Meetings</span>
          </div>
          <Button variant="gold" size="lg" asChild>
            <Link to="/events">Book an Event</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
