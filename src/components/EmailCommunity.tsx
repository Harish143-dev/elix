import { motion } from "framer-motion";
import { useState } from "react";
import logo from "@/assets/logo.png";

const EmailCommunity = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative bg-foreground py-24 md:py-40 overflow-hidden">
      {/* Subtle multi-flavour gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(139,26,26,0.06), rgba(27,94,54,0.06), rgba(212,134,10,0.06), rgba(194,0,110,0.06), rgba(91,26,140,0.06), transparent)",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-cream leading-[1.05] mb-6"
          style={{ fontSize: "clamp(56px, 10vw, 96px)" }}
        >
          JOIN THE
          <br />
          CULTURE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-editorial italic text-gold text-lg max-w-md mb-12"
        >
          Not a newsletter. Fermentation notes, flavour drops,
          and conversations worth having.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-end gap-4 max-w-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-1">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b border-linen text-cream font-functional text-sm pb-3 outline-none focus:border-gold transition-colors placeholder:text-stone"
            />
          </div>
          <button
            type="submit"
            className="font-functional text-[10px] tracking-label uppercase font-medium bg-gold text-foreground px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            Join →
          </button>
        </motion.form>
      </div>

      {/* Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-linen/20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="elix" className="w-auto h-20"/>
          </div>
          <p className="font-functional text-[11px] text-stone tracking-[0.1em]">
            Living, fermented, made properly. · Chennai, India
          </p>
          <p className="font-functional text-[10px] text-stone/50">
            © 2026 Heaven's Elix. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailCommunity;
