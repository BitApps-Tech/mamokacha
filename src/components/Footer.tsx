import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Mamokacha" className="h-10 w-10 rounded-full" />
              <span className="font-serif text-lg tracking-wider">MAMOKACHA</span>
            </div>
            <p className="text-sm font-sans text-cream/70 leading-relaxed">
              Rooted in Ethiopian coffee heritage and modern café culture.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans mb-6 text-accent">Explore</h4>
            <div className="flex flex-col gap-3">
              {["Our Story", "Cafés", "Menu", "Events"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm font-sans text-cream/70 hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans mb-6 text-accent">Shop</h4>
            <div className="flex flex-col gap-3">
              {["All Coffee", "Subscriptions", "Gift Cards", "Merchandise"].map((item) => (
                <Link
                  key={item}
                  to="/shop"
                  className="text-sm font-sans text-cream/70 hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-widest uppercase font-sans mb-6 text-accent">Stay Connected</h4>
            <p className="text-sm font-sans text-cream/70 mb-4">
              Subscribe for exclusive offers and coffee stories.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-cream/10 border border-cream/20 px-4 py-2 text-sm font-sans text-cream placeholder:text-cream/40 flex-1 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-espresso px-4 py-2 text-xs tracking-widest uppercase font-sans font-medium hover:bg-accent/90 transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-cream/50 hover:text-accent transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans text-cream/40">
            © 2026 Mamokacha Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-xs font-sans text-cream/40 hover:text-cream/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
