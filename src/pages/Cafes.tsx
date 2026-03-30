import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cafeImg1 from "@/assets/cafe-location-1.jpg";
import cafeImg2 from "@/assets/cafe-location-2.jpg";
import cafeInteriorImg from "@/assets/cafe-interior.jpg";

const locations = [
  {
    name: "Mamokacha Bole",
    address: "Bole Road, Addis Ababa",
    phone: "+251 11 234 5678",
    hours: "Mon–Sun: 7:00 AM – 10:00 PM",
    image: cafeImg1,
    features: ["Full Menu", "Outdoor Seating", "WiFi", "Private Events"],
  },
  {
    name: "Mamokacha Sarbet",
    address: "Sarbet Area, Addis Ababa",
    phone: "+251 11 345 6789",
    hours: "Mon–Sun: 6:30 AM – 9:30 PM",
    image: cafeImg2,
    features: ["Specialty Coffee Bar", "Pastry Counter", "WiFi", "Parking"],
  },
  {
    name: "Mamokacha Atlas",
    address: "Atlas Area, Addis Ababa",
    phone: "+251 11 456 7890",
    hours: "Mon–Sat: 7:00 AM – 9:00 PM",
    image: cafeInteriorImg,
    features: ["Brunch Menu", "Meeting Room", "WiFi", "Drive-through"],
  },
];

/** Where each amenity label navigates (menu, events, or contact with context). */
const featureHref: Record<string, string> = {
  "Full Menu": "/menu",
  "Outdoor Seating": "/contact?inquiry=outdoor-seating",
  WiFi: "/contact?inquiry=wifi",
  "Private Events": "/events",
  "Specialty Coffee Bar": "/menu",
  "Pastry Counter": "/menu",
  Parking: "/contact?inquiry=parking",
  "Brunch Menu": "/menu",
  "Meeting Room": "/contact?inquiry=meeting-room",
  "Drive-through": "/contact?inquiry=drive-through",
};

const Cafes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cafeImg1})` }} />
        <div className="absolute inset-0 bg-espresso/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Visit Us</p>
          <h1 className="text-4xl md:text-6xl font-serif text-background mb-4">Our Cafés</h1>
          <p className="text-background/80 font-sans text-base md:text-lg max-w-xl mx-auto">
            Experience Mamokacha at one of our thoughtfully designed locations.
          </p>
        </motion.div>
      </section>

      {/* Locations */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-24">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <img src={loc.image} alt={loc.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </div>
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">{loc.name}</h2>
                <div className="gold-divider !mx-0 my-6" />
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent mt-0.5 shrink-0" size={18} />
                    <span className="font-sans text-sm text-muted-foreground">{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-accent mt-0.5 shrink-0" size={18} />
                    <span className="font-sans text-sm text-muted-foreground">{loc.hours}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-accent mt-0.5 shrink-0" size={18} />
                    <span className="font-sans text-sm text-muted-foreground">{loc.phone}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {loc.features.map((f) => (
                    <Link
                      key={f}
                      to={featureHref[f] ?? "/contact"}
                      className="inline-block rounded-sm border border-border px-4 py-2 font-sans text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      {f}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cafes;
