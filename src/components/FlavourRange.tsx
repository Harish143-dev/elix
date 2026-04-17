import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import canHibiscus from "@/assets/can-hibiscus.png";
import canHops from "@/assets/can-hops.png";
import canOriginal from "@/assets/can-original.png";
import canSulaimani from "@/assets/can-sulaimani.png";
import canRose from "@/assets/can-rose.png";
import canLavender from "@/assets/can-lavender.png";

interface Flavour {
  id: string;
  name: string;
  number: string;
  color: string;
  colorClass: string;
  mood: string;
  sweetness: number;
  sourness: number;
  florals: number;
  image: string;
}

const flavours: Flavour[] = [
  {
    id: "hibiscus", name: "HIBISCUS", number: "01", color: "#8B1A1A",
    colorClass: "text-flavour-hibiscus", mood: '"Sharp. Floral. Slightly wild."',
    sweetness: 3, sourness: 4, florals: 5, image: canHibiscus,
  },
  {
    id: "hops", name: "HOPS", number: "02", color: "#1B5E36",
    colorClass: "text-flavour-hops", mood: '"Bitter edge. Clean finish. For the curious ones."',
    sweetness: 2, sourness: 4, florals: 2, image: canHops,
  },
  {
    id: "original", name: "ORIGINAL", number: "03", color: "#2C2C2C",
    colorClass: "text-flavour-original", mood: '"The base. The beginning. Unapologetically pure."',
    sweetness: 3, sourness: 3, florals: 1, image: canOriginal,
  },
  {
    id: "sulaimani", name: "SULAIMANI", number: "04", color: "#D4860A",
    colorClass: "text-flavour-sulaimani", mood: '"Spiced. Warming. Rooted in something older."',
    sweetness: 3, sourness: 3, florals: 3, image: canSulaimani,
  },
  {
    id: "rosa", name: "ROSA", number: "05", color: "#C2006E",
    colorClass: "text-flavour-rosa", mood: '"Soft. Aromatic. Unexpectedly bold."',
    sweetness: 4, sourness: 2, florals: 5, image: canRose,
  },
  {
    id: "lavender", name: "LAVENDER", number: "06", color: "#5B1A8C",
    colorClass: "text-flavour-lavender", mood: '"Calm. Herbal. Built for the slow mornings."',
    sweetness: 3, sourness: 2, florals: 4, image: canLavender,
  },
];

const TasteBar = ({ label, value }: { label: string; value: number }) => (
  <div className="flex items-center gap-4">
    <span className="font-functional text-[11px] tracking-[0.1em] text-stone w-20">{label}</span>
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-xs ${i <= value ? "text-cream" : "text-stone/30"}`}>●</span>
      ))}
    </div>
  </div>
);

const FlavourRange = () => {
  const [active, setActive] = useState(0);
  const f = flavours[active];

  return (
    <section id="flavours" className="bg-background py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <p className="font-display text-[11px] tracking-section text-gold mb-6">02 — THE RANGE</p>
        <h2 className="font-display text-foreground text-[clamp(40px,7vw,56px)] leading-[1.05] mb-16">
          SIX FLAVOURS.
          <br />
          ONE CULTURE.
        </h2>

        {/* Flavour selector pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {flavours.map((fl, i) => (
            <button
              key={fl.id}
              onClick={() => setActive(i)}
              className={`font-functional text-[10px] tracking-label uppercase px-4 py-2 rounded-sm border transition-colors duration-200 ${
                active === i
                  ? "border-foreground bg-foreground text-cream"
                  : "border-linen text-stone hover:text-foreground"
              }`}
            >
              {fl.name}
            </button>
          ))}
        </div>

        {/* Active flavour panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] rounded-lg overflow-hidden"
          >
            {/* Left — flavour gradient + can */}
            <div
              className="relative flex items-center justify-center"
              style={{
                background: `linear-gradient(160deg, ${f.color}cc 0%, ${f.color} 100%)`,
              }}
            >
              <motion.img
                src={f.image}
                alt={f.name}
                className="w-auto object-cover relative z-10 drop-shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Right — info */}
            <div className="bg-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className={`font-display text-[11px] tracking-section uppercase mb-4 ${f.colorClass}`}>
                {f.number} — {f.name}
              </p>
              <h3 className="font-display text-cream text-[clamp(48px,8vw,80px)] leading-[0.85] mb-6">
                {f.name}
              </h3>
              <p className="font-editorial italic text-gold text-[22px] mb-8">{f.mood}</p>

              <div className="space-y-2 mb-8">
                <TasteBar label="Sweetness" value={f.sweetness} />
                <TasteBar label="Sourness" value={f.sourness} />
                <TasteBar label="Florals" value={f.florals} />
              </div>

              <p className="font-functional text-[11px] tracking-tag uppercase text-stone mb-8">
                250ML · Aluminium Can · 3–5G Sugar / 100ML
              </p>

              <button
                className="self-start font-functional text-[10px] tracking-label uppercase border px-6 py-3 rounded-sm text-cream transition-colors duration-200 hover:bg-cream/10"
                style={{ borderColor: f.color }}
              >
                Add to Cart →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FlavourRange;
