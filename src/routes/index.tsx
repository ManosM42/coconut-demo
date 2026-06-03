import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, Martini, Wind, Music4, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import bar from "@/assets/bar-interior.jpg";
import barNight from "@/assets/bar-night.jpg";
import { IceDropAnimation } from "@/components/IceDropAnimation";
import { GallerySlider } from "@/components/GallerySlider";
import { MapEmbed } from "@/components/MapEmbed";
import { Reviews } from "@/components/Reviews";
import barCocktail from "@/assets/bar-cocktail.jpg";
import barShisha from "@/assets/bar-shisha.jpg";
import barCrowd from "@/assets/bar-crowd.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const fadeUp = {
  initial: { opacity: 0, y: isMobile ? 14 : 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: isMobile ? 0.45 : 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ─── Parallax Section — same pattern as Plastelina ───────── */
function ParallaxSection({
  img,
  children,
  className = "",
  overlayColor = "rgba(10,10,15)",
  overlayOpacity = 0.72,
}: {
  img: string;
  children: React.ReactNode;
  className?: string;
  overlayColor?: string;
  overlayOpacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["-12%", "12%"]
  );
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax bg */}
      <motion.div
        style={{
          y,
          backgroundImage: `url(${img})`,
          willChange: isMobile ? "auto" : "transform",
        }}
        className="absolute inset-[-15%] bg-cover bg-center"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${overlayColor},${overlayOpacity + 0.1}) 0%, ${overlayColor},${overlayOpacity}) 60%, ${overlayColor},${overlayOpacity + 0.1}) 100%)`,
          background: `rgba(10,10,15,${overlayOpacity})`,
        }}
      />
      {/* Grain — desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

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

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden bg-[#0a0a0f]" style={{ height: "100dvh" }}>
        <img
          src={bar}
          alt="Coconut Bar interior at night"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-[#0a0a0f]" />
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,15,0.6)_80%)]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-xs md:text-sm tracking-[0.4em] text-neon-pink mb-6"
          >
            {t("hero.eyebrow")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="font-display text-[18vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.85] tracking-wider text-white text-glow-pink"
          >
            COCONUT<br /><span className="text-white/90">BAR</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-serif italic text-lg md:text-2xl text-white/80 mt-6 max-w-xl"
          >
            "{t("hero.sub")}"
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Link to="/menu"
              className="bg-neon-pink hover:bg-neon-pink/90 text-white font-mono text-xs tracking-[0.25em] uppercase px-7 py-3.5 rounded-full glow-pink-sm hover:glow-pink transition-all active:scale-95">
              {t("hero.cta1")}
            </Link>
            <Link to="/contact"
              className="border border-white/40 hover:border-white text-white font-mono text-xs tracking-[0.25em] uppercase px-7 py-3.5 rounded-full backdrop-blur-sm hover:bg-white/5 transition-all active:scale-95">
              {t("hero.cta2")}
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bob">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* ── VIBE + GALLERY — bar-interior.jpg background ── */}
      <ParallaxSection img={bar} overlayOpacity={0.78} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-7xl tracking-wider text-white">{t("vibe.title")}</h2>
            <p className="font-serif italic text-white/70 mt-4 max-w-2xl mx-auto text-lg">{t("vibe.desc")}</p>
          </motion.div>
        </div>
        <motion.div {...fadeUp} className="max-w-7xl mx-auto px-5 md:px-10 mb-16">
          <IceDropAnimation />
        </motion.div>
        <motion.div {...fadeUp} className="text-center mb-14">
          <h2 className="font-display text-5xl md:text-7xl tracking-wider text-white">{t("gallery.title")}</h2>
          <p className="font-serif italic text-white/70 mt-4 max-w-2xl mx-auto text-lg">{t("gallery.desc")}</p>
        </motion.div>
        <motion.div {...fadeUp} className="pl-5 md:pl-10">
          <GallerySlider />
        </motion.div>
      </ParallaxSection>

      {/* ── REVIEWS — bar-interior.jpg continues ── */}
      <ParallaxSection img={bar} overlayOpacity={0.82} className="py-20 md:py-28">
        <motion.div {...fadeUp}>
          <Reviews />
        </motion.div>
      </ParallaxSection>

      {/* ── INFO STRIP — bar-night.jpg background ── */}
<ParallaxSection img={barNight} overlayOpacity={0.75} className="py-20 md:py-28">
  <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        icon: Martini,
        img: barCocktail,
        title: t("info.cocktails"),
        desc: t("info.cocktailsDesc"),
      },
      {
        icon: Wind,
        img: barShisha,
        title: t("info.shisha"),
        desc: t("info.shishaDesc"),
      },
      {
        icon: Music4,
        img: barCrowd,
        title: t("info.dj"),
        desc: t("info.djDesc"),
      },
    ].map(({ icon: Icon, img, title, desc }, i) => (
      <motion.div
        key={i}
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: isMobile ? 0 : i * 0.1 }}
        className="group relative overflow-hidden rounded-2xl"
        style={{ minHeight: "380px" }}
      >
        {/* Photo background */}
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark gradient — heavier at bottom so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        {/* Neon pink border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,20,147,0.5)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full p-8 text-center"
          style={{ minHeight: "380px" }}
        >
          {/* Big icon */}
          <div className="mb-5 text-white drop-shadow-lg">
            <Icon
              strokeWidth={1}
              style={{ width: "52px", height: "52px", color: "var(--neon-pink)" }}
            />
          </div>

          <h3
            className="font-display text-3xl tracking-wider text-white mb-2"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.8)" }}
          >
            {title}
          </h3>
          <p
            className="text-sm text-white/80 leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
          >
            {desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</ParallaxSection>

      {/* ── CATEGORIES — bar-night.jpg continues ── */}
      <ParallaxSection img={barNight} overlayOpacity={0.80} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.h2
            {...fadeUp}
            className="font-display text-5xl md:text-7xl tracking-wider text-center mb-14 text-white"
          >
            {t("offer.title")}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c, i) => (
              <motion.div
                key={c.key} {...fadeUp}
                transition={{ ...fadeUp.transition, delay: isMobile ? 0 : i * 0.08 }}
              >
                <Link to="/menu" className="block group">
                  <div className="glass rounded-2xl p-7 h-full hover:-translate-y-1 hover:glow-pink-sm hover:border-neon-pink/40 transition-all duration-300">
                    <div
                      className="w-12 h-12 rounded-full mb-5 opacity-80 group-hover:opacity-100 transition"
                      style={{ background: c.color, boxShadow: `0 0 30px ${c.color}` }}
                    />
                    <h3 className="font-display text-2xl tracking-wider mb-4 text-white">{c.title}</h3>
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
      </ParallaxSection>

      {/* ── MAP — bar-night.jpg continues ── */}
      <ParallaxSection img={barNight} overlayOpacity={0.85} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <motion.h2
            {...fadeUp}
            className="font-display text-5xl md:text-7xl tracking-wider text-center mb-10 text-white"
          >
            {t("find.title")}
          </motion.h2>
          <motion.div {...fadeUp}>
            <MapEmbed className="h-[480px]" />
            <p className="text-center font-mono text-xs tracking-[0.2em] uppercase text-white/70 mt-6">
              {t("find.addr")}
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

    </div>
  );
}