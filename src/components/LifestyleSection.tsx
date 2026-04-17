import { motion } from "framer-motion";
import morning from "@/assets/lifestyle-morning.jpg";
import desk from "@/assets/lifestyle-desk.jpg";
import workout from "@/assets/lifestyle-workout.jpg";
import social from "@/assets/lifestyle-social.jpg";
import gift from "@/assets/lifestyle-gift.jpg";
import aesthetic from "@/assets/lifestyle-aesthetic.jpg";

const cells = [
  { img: morning, label: "MORNING RESET", span: "col-span-2 row-span-2", accent: "rgba(200,168,75,0.25)" },
  { img: desk, label: "MIDDAY FOCUS", span: "col-span-1", accent: "rgba(27,94,54,0.25)" },
  { img: workout, label: "POST-WORKOUT", span: "col-span-1", accent: "rgba(139,26,26,0.25)" },
  { img: social, label: "WITHOUT THE ALCOHOL", span: "col-span-1 row-span-1", accent: "rgba(212,134,10,0.25)" },
  { img: gift, label: "GIFTING", span: "col-span-1", accent: "rgba(194,0,110,0.25)" },
  { img: aesthetic, label: "JUST BECAUSE", span: "col-span-1", accent: "rgba(91,26,140,0.25)" },
];

const LifestyleSection = () => (
  <section className="bg-foreground py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-[11px] tracking-section text-gold mb-6"
      >
        03 — RITUAL
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-cream text-[clamp(40px,7vw,64px)] leading-[1.05] mb-16"
      >
        BUILT FOR EVERY
        <br />
        PART OF YOUR DAY.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[280px]">
        {cells.map((cell, i) => (
          <motion.div
            key={cell.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative rounded-lg overflow-hidden group cursor-pointer ${
              i === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={cell.img}
              alt={cell.label}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
              style={{ background: `linear-gradient(to top, ${cell.accent} 0%, transparent 60%)` }}
            />
            {/* Label */}
            <div className="absolute inset-0 flex items-end p-6">
              <span className="font-display text-cream text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                {cell.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LifestyleSection;
