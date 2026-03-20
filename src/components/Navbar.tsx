import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/about" },
  { label: "Cafés", to: "/cafes" },
  { label: "Shop Coffee", to: "/shop" },
  { label: "Menu", to: "/menu" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Mamokacha" className="h-12 w-12 rounded-full" />
            <span
              className={`font-serif text-xl tracking-wider transition-colors duration-500 ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              MAMOKACHA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-xs tracking-widest uppercase font-sans font-medium transition-colors duration-300 hover:text-accent ${
                  scrolled ? "text-foreground" : "text-background"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className={`relative transition-colors duration-300 hover:text-accent ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-accent text-espresso text-[10px] font-sans font-bold rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden transition-colors ${
                scrolled ? "text-foreground" : "text-background"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-espresso flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-widest uppercase font-sans text-cream hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
