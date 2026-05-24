import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronDown, Martini, Wind, Music4, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import bar from "@/assets/bar-interior.jpg";
import { IceDropAnimation } from "@/components/IceDropAnimation";
import { GallerySlider } from "@/components/GallerySlider";
import { MapEmbed } from "@/components/MapEmbed";
import { Reviews } from "@/components/Reviews";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Index() {
  const { t } = useTranslation();

  const categories = [
    { key: "cocktails", title: t("cat.cocktails"), items: ["Coconut Negroni", "Tropical Spritz", "Malia Mule"], color: "var(--neon-pink)" },
    { key: "mocktails", title: t("cat.mocktails"), items: ["Virgin Sunset", "Coconut Lemonade", "Mint & Berry"], color: "var(--neon-blue)" },
    { key: "shisha", title: t("cat.shisha"), items: ["Double Apple", "Blueberry Mint", "Watermelon Ice"], color: "var(--gold)" },
    { key: "food", title: t("cat.food"), items: ["Bruschetta", "Mezze Platter", "Loaded Fries"], color: "var(--neon-violet)" },
  ];

  return (
    <div className="bg-[#0a0a0f]">
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img src={bar} alt="Coconut Bar interior at night" className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-[#0a0a0f]" />
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,15,0.6)_80%)]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-xs md:text-sm tracking-[0.4em] text-neon-pink mb-6">
            {t("hero.eyebrow")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
            className="font-display text-[18vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.85] tracking-wider text-white text-glow-pink">
            COCONUT<br /><span className="text-white/90">BAR</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="font-serif italic text-lg md:text-2xl text-white/80 mt-6 max-w-xl">
            "{t("hero.sub")}"
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/menu"
              className="bg-neon-pink hover:bg-neon-pink/90 text-white font-mono text-xs tracking-[0.25em] uppercase px-7 py-3.5 rounded-full glow-pink-sm hover:glow-pink transition-all">
              {t("hero.cta1")}
            </Link>
            <Link to="/contact"
              className="border border-white/40 hover:border-white text-white font-mono text-xs tracking-[0.25em] uppercase px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/5 transition-all">
              {t("hero.cta2")}
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bob">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* VIBE */}
      <section className="relative py-24 md:py-32"
        style={{ background: "linear-gradient(to bottom, #0a0a0f, #12051a, #0a0a0f)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-7xl tracking-wider">{t("vibe.title")}</h2>
            <p className="font-serif italic text-white/70 mt-4 max-w-2xl mx-auto text-lg">{t("vibe.desc")}</p>
          </motion.div>
        </div>
        <motion.div {...fadeUp} className="max-w-7xl mx-auto px-5 md:px-10 mb-16">
          <IceDropAnimation />
        </motion.div>
        <motion.div {...fadeUp} className="text-center mb-14">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider">{t("gallery.title")}</h2>
          <p className="font-serif italic text-white/70 mt-4 max-w-2xl mx-auto text-lg">{t("gallery.desc")}</p>
        </motion.div>
        <motion.div {...fadeUp} className="pl-5 md:pl-10">
          <GallerySlider />
        </motion.div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "linear-gradient(to bottom, #0a0a0f, #12051a, #0a0a0f)" }}>
        <motion.div {...fadeUp}>
          <Reviews />
        </motion.div>
      </section>

      {/* INFO STRIP */}
      <section className="py-20 md:py-28"
        style={{ background: "linear-gradient(to bottom, #0a0a0f, #150a1a, #0a0a0f)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-3 gap-5">
          {[
            { icon: Martini, t: t("info.cocktails"), d: t("info.cocktailsDesc") },
            { icon: Wind, t: t("info.shisha"), d: t("info.shishaDesc") },
            { icon: Music4, t: t("info.dj"), d: t("info.djDesc") },
          ].map(({ icon: Icon, t: title, d }, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:border-neon-pink/40 transition-all">
              <Icon className="w-9 h-9 mx-auto text-neon-pink mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-2xl tracking-wider mb-2">{title}</h3>
              <p className="text-sm text-white/65">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 md:py-28"
        style={{ background: "linear-gradient(to bottom, #0a0a0f, #12051a, #0a0a0f)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-5xl md:text-7xl tracking-wider text-center mb-14">
            {t("offer.title")}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <motion.div key={c.key} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <Link to="/menu" className="block group">
                  <div className="glass rounded-2xl p-7 h-full hover:-translate-y-1 hover:glow-pink-sm hover:border-neon-pink/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full mb-5 opacity-80 group-hover:opacity-100 transition"
                      style={{ background: c.color, boxShadow: `0 0 30px ${c.color}` }} />
                    <h3 className="font-display text-2xl tracking-wider mb-4">{c.title}</h3>
                    <ul className="space-y-1.5 mb-6">
                      {c.items.map((it) => (
                        <li key={it} className="text-sm text-white/65 font-serif italic">{it}</li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.25em] uppercase text-neon-pink group-hover:gap-2.5 transition-all">
                      {t("offer.see")} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 md:py-28"
        style={{ background: "linear-gradient(to bottom, #0a0a0f, #0d0a15, #0a0a0f)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-5xl md:text-7xl tracking-wider text-center mb-10">
            {t("find.title")}
          </motion.h2>
          <motion.div {...fadeUp}>
            <MapEmbed className="h-[480px]" />
            <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-white/70 mt-6">
              {t("find.addr")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}