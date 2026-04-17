import { motion } from "framer-motion";
import canHibiscus from "@/assets/can-hibiscus.png";
import canHops from "@/assets/can-hops.png";
import canOriginal from "@/assets/can-original.png";
import canSulaimani from "@/assets/can-sulaimani.png";
import canRose from "@/assets/can-rose.png";
import canLavender from "@/assets/can-lavender.png";

const products = [
  { name: "HIBISCUS", tag: "Hibiscus", benefit: "Sharp. Floral. Slightly wild.", price: 185, color: "#8B1A1A", img: canHibiscus },
  { name: "HOPS", tag: "Hops", benefit: "Bitter edge. Clean finish.", price: 185, color: "#1B5E36", img: canHops },
  { name: "ORIGINAL", tag: "Original", benefit: "Unapologetically pure.", price: 185, color: "#2C2C2C", img: canOriginal },
  { name: "SULAIMANI", tag: "Sulaimani", benefit: "Spiced. Warming.", price: 185, color: "#D4860A", img: canSulaimani },
  { name: "ROSA", tag: "Rosa", benefit: "Soft. Aromatic. Bold.", price: 185, color: "#C2006E", img: canRose },
  { name: "LAVENDER", tag: "Lavender", benefit: "Calm. Herbal.", price: 185, color: "#5B1A8C", img: canLavender },
];

const ShopModule = () => (
  <section id="shop" className="bg-warm-white py-24 md:py-32 border-b border-linen">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-[11px] tracking-section text-gold mb-6"
      >
        04 — SHOP
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-foreground text-[clamp(40px,7vw,56px)] leading-[1.05] mb-16"
      >
        START WITH A FLAVOUR.
        <br />
        STAY FOR ALL OF THEM.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-foreground rounded-lg overflow-hidden group"
            >
              <div className="relative h-[280px] flex items-center justify-center bg-secondary/50 overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-auto object-cover" />
              </div>
              <div className="p-5">
                <span className="font-functional text-[9px] tracking-tag uppercase" style={{ color: p.color }}>
                  {p.tag}
                </span>
                <h3 className="font-display text-cream text-[28px] leading-none mt-1">{p.name}</h3>
                <p className="font-editorial italic text-stone text-[14px] mt-1">{p.benefit}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-functional text-cream text-lg">₹{p.price}</span>
                  <button
                    className="font-functional text-[10px] tracking-label uppercase border border-secondary/30 text-cream px-4 py-2 rounded-sm transition-colors duration-200 hover:border-current"
                    style={{ ["--tw-border-opacity" as string]: 1 }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = p.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sticky sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-28 space-y-8">
            {/* Starter Pack */}
            <div className="bg-foreground rounded-lg p-6">
              <h3 className="font-display text-cream text-2xl">STARTER PACK</h3>
              <p className="font-functional text-stone text-sm mt-1">Try All 6 Flavours</p>
              <p className="font-editorial italic text-stone text-[16px] mt-3">
                ₹999 — <span className="text-cream">You save ₹111</span>
              </p>
              <button className="mt-4 w-full font-functional text-[10px] tracking-label uppercase font-medium bg-gold text-foreground px-6 py-3 rounded-sm hover:opacity-90 transition-opacity">
                Shop Starter Pack →
              </button>
            </div>

            {/* Subscribe */}
            <div className="bg-foreground rounded-lg p-6">
              <h3 className="font-display text-cream text-xl">SUBSCRIBE & SAVE</h3>
              <p className="font-functional text-[11px] tracking-[0.15em] text-stone mt-2">
                10% off every order. Never run out.
              </p>
              <button className="mt-4 w-full font-functional text-[10px] tracking-label uppercase border border-gold text-cream px-6 py-3 rounded-sm hover:bg-gold/10 transition-colors">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShopModule;
