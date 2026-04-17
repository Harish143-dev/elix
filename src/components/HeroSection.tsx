import { motion } from "framer-motion";
import canHops from "@/assets/hero-hops.png";
import canRosa from "@/assets/hero-rosa.png";
import canSulaimani from "@/assets/hero-sulaimani.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ backgroundColor: '#131313' }}>
      {/* Ambient radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(200,168,75,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-20 lg:pt-0">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gold-rule mb-6" />
          <p className="font-functional text-[11px] tracking-wide-brand uppercase text-gold mb-3">
            Heaven's Elix · Kombucha
          </p>

          <h1
            className="font-display text-cream leading-[0.85] mb-4"
            style={{ fontSize: "clamp(80px, 14vw, 140px)" }}
          >
            THIS IS A
            <br />
            LIVING DRINK.
          </h1>

          <p className="font-editorial italic text-stone text-[22px] leading-relaxed max-w-[480px] mb-10">
            Raw. Fermented. Made properly.
            <br />
            For people who care about what they drink.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-block font-functional text-[10px] tracking-label uppercase font-medium bg-gold text-foreground px-8 py-3.5 rounded-sm transition-opacity hover:opacity-90"
            >
              Shop Flavours
            </a>
            <a
              href="#why-kombucha"
              className="inline-block font-functional text-[10px] tracking-label uppercase font-medium border border-linen text-cream px-8 py-3.5 rounded-sm hover:bg-cream/5 transition-colors"
            >
              What is Kombucha?
            </a>
          </div>
        </motion.div>

        {/* Right — Cans */}
        <motion.div
          className="relative flex justify-center items-end lg:items-center h-[400px] lg:h-[600px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={canRosa}
            alt="Rosa Kombucha"
            className="absolute z-10 w-[220px] h-auto lg:w-[320px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            style={{ left: "0%", bottom: "5%" }}
            animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={canSulaimani}
            alt="Sulaimani Kombucha"
            className="absolute z-20 w-[220px] h-auto lg:w-[320px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            style={{ left: "28%", bottom: "12%" }}
            animate={{ y: [0, -6, 0], rotate: [1, -2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.img
            src={canHops}
            alt="Hops Kombucha"
            className="absolute z-30 w-[220px] h-auto lg:w-[320px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            style={{ left: "54%", bottom: "0%" }}
            animate={{ y: [0, -10, 0], rotate: [-1, 3, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 md:left-12">
        <div className="w-[1px] h-10 bg-gold animate-pulse-line" />
      </div>
    </section>
  );
};

export default HeroSection;
