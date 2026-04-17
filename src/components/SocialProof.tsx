import { motion } from "framer-motion";

const testimonials = [
  { quote: "Pour it over ice. Watch it breathe.\nDrink it before it warms up — it's better cold and it knows it.", author: "ARJUN S.", location: "CHENNAI" },
  { quote: "I stopped drinking beer three months ago.\nThis is the only thing that fills that gap without trying too hard.", author: "MEERA K.", location: "BANGALORE" },
  { quote: "The Sulaimani tastes like my grandmother's kitchen\nif it were a drink. Specific, warm, unapologetic.", author: "ROHAN D.", location: "MUMBAI" },
  { quote: "Finally, a brand that doesn't yell about gut health\non the packaging. It just works.", author: "PRIYA T.", location: "DELHI" },
];

const SocialProof = () => (
  <section className="bg-foreground py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-cream text-[clamp(40px,7vw,56px)] leading-[1.05] mb-16"
      >
        PEOPLE DON'T GO BACK
        <br />
        AFTER THIS.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-charcoal rounded-lg p-8"
          >
            <p className="font-editorial italic text-cream text-lg leading-[1.7] whitespace-pre-line">
              "{t.quote}"
            </p>
            <p className="font-functional text-[11px] tracking-[0.15em] text-stone uppercase mt-6">
              — {t.author} · {t.location}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
