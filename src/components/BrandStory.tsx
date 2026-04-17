import { motion } from "framer-motion";

const principles = [
  { title: "LIVING, NOT PROCESSED", body: "Unpasteurised, naturally fermented. Sediment, effervescence, variation are features — not flaws." },
  { title: "ROOTED IN INDIA", body: "Brewed in Chennai. Heritage motifs, Indian sensory vocabulary. Cultural pride without pastiche." },
  { title: "NO SHORTCUTS", body: "90-day best-before. Refrigerated from day one. Every touchpoint made with care." },
  { title: "FOR PEOPLE WHO CARE", body: "Curious, discerning, fed up with category noise. They need to trust what they drink — not be lectured about it." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const BrandStory = () => (
  <section id="philosophy" className="bg-warm-white py-24 md:py-32">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <motion.p {...fadeUp} className="font-display text-[11px] tracking-section text-gold mb-10">
        01 — FOUNDATION
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <motion.h2
            {...fadeUp}
            className="font-display text-foreground leading-[1.05] mb-8"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            THIS IS A LIVING DRINK.
          </motion.h2>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="font-functional text-[15px] text-stone leading-[1.8] max-w-[560px]">
              Heaven's Elix is a Chennai-born kombucha brewery committed to doing one
              thing right: making a genuinely alive, fermented beverage without shortcuts.
              Every can is brewed slowly, unpasteurised, and kept cold from brewery to shelf.
            </p>
            <p className="font-functional text-[15px] text-stone leading-[1.8] max-w-[560px] mt-4">
              It is not a wellness trend. It is not a lifestyle product.
              <br />
              It is something made properly, for people who care about what they drink.
            </p>
          </motion.div>
        </div>

        {/* Right — Principles */}
        <div className="space-y-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-l-2 border-gold pl-5"
            >
              <h3 className="font-functional text-[13px] tracking-tag uppercase text-foreground font-medium mb-2">
                {p.title}
              </h3>
              <p className="font-functional text-[14px] text-stone leading-[1.7]">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BrandStory;
