import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Shop", "Flavours", "Why Kombucha", "Philosophy", "Journal"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
          scrolled
            ? "bg-foreground border-b border-linen/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="relative flex items-center">
            <div className="absolute -top-4 -bottom-2 -left-3 -right-3 bg-foreground/90 rounded-b-xl backdrop-blur-sm" />
            <img src={logo} alt="Heaven's ELIX" className="relative z-10 h-14 md:h-18 w-auto object-fill" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="font-functional text-[10px] tracking-label uppercase text-stone hover:text-cream transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            <button className="font-functional text-[10px] tracking-label uppercase text-stone hover:text-cream transition-colors duration-200">
              Search
            </button>
            <button className="font-functional text-[10px] tracking-label uppercase text-cream transition-colors duration-200">
              Cart (0)
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(true)}
          >
            <span className="w-5 h-[1px] bg-cream" />
            <span className="w-5 h-[1px] bg-cream" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground flex flex-col justify-center px-8"
          >
            <button
              className="absolute top-6 right-6 text-cream font-functional text-sm"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-5xl text-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.toUpperCase()}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-8 right-8 flex gap-6">
              <span className="font-functional text-[10px] tracking-label uppercase text-stone">Search</span>
              <span className="font-functional text-[10px] tracking-label uppercase text-cream">Cart (0)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
