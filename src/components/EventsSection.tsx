import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EventBookingModal from "@/components/EventBookingModal";
import hotelBg from "@/assets/hotel-2.jpg";

const EventsSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${hotelBg})` }}
    >
      <EventBookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
      <div className="absolute inset-0 bg-espresso/70" aria-hidden />

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
          <Button variant="gold" size="lg" type="button" onClick={() => setBookingOpen(true)}>
            Book an Event
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
