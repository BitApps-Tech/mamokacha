import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-card">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-4">Contact Us</h1>
          <div className="gold-divider mt-6" />
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2 block">First Name</label>
                  <input className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2 block">Last Name</label>
                  <input className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2 block">Email</label>
                <input type="email" className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2 block">Subject</label>
                <input className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2 block">Message</label>
                <textarea rows={5} className="w-full bg-transparent border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <Button variant="hero" size="lg" type="submit">Send Message</Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-serif text-foreground mb-6">Visit & Connect</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-sans text-sm font-medium text-foreground mb-1">Address</h3>
                    <p className="font-sans text-sm text-muted-foreground">Bole Road, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-sans text-sm font-medium text-foreground mb-1">Phone</h3>
                    <p className="font-sans text-sm text-muted-foreground">+251 11 234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-sans text-sm font-medium text-foreground mb-1">Email</h3>
                    <p className="font-sans text-sm text-muted-foreground">hello@mamokacha.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-accent mt-1 shrink-0" size={20} />
                  <div>
                    <h3 className="font-sans text-sm font-medium text-foreground mb-1">Hours</h3>
                    <p className="font-sans text-sm text-muted-foreground">Monday – Sunday: 7:00 AM – 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs tracking-widest uppercase font-sans text-accent mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] bg-card border border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-accent mb-2" size={32} />
                <p className="font-sans text-xs text-muted-foreground">Bole Road, Addis Ababa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
