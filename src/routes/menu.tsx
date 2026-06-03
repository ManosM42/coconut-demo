import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import bar from "@/assets/bar-interior.jpg";
import barNight from "@/assets/bar-night.jpg";
import barCocktail from "@/assets/bar-cocktail.jpg";
import barShisha from "@/assets/bar-shisha.jpg";
import barCrowd from "@/assets/bar-crowd.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Coconut Bar Malia" },
      { name: "description", content: "Explore cocktails, mocktails, premium shisha and food at Coconut Bar Malia." },
      { property: "og:title", content: "Menu — Coconut Bar Malia" },
      { property: "og:description", content: "Signature cocktails, shisha and bites in Malia, Crete." },
    ],
  }),
  component: MenuPage,
});

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

type Item = { name: string; desc?: string; price: string };

const cocktails: Item[] = [
  { name: "Coconut Negroni", desc: "Gin, Campari, coconut vermouth", price: "€10" },
  { name: "Malia Sunset", desc: "Tequila, grenadine, orange juice, lime", price: "€9" },
  { name: "Tropical Spritz", desc: "Aperol, mango juice, prosecco", price: "€9" },
  { name: "Blue Lagoon", desc: "Vodka, blue curaçao, lemonade", price: "€8" },
  { name: "Passion Mojito", desc: "White rum, passion fruit, mint, lime", price: "€9" },
  { name: "Espresso Martini", desc: "Vodka, Kahlúa, fresh espresso", price: "€10" },
  { name: "Piña Colada", desc: "White rum, coconut cream, pineapple", price: "€9" },
  { name: "Watermelon Daiquiri", desc: "Rum, fresh watermelon, lime", price: "€9" },
];
const mocktails: Item[] = [
  { name: "Virgin Sunset", price: "€6" },
  { name: "Coconut Lemonade", price: "€5" },
  { name: "Mint & Berry Cooler", price: "€5" },
  { name: "Sparkling / Still Water", price: "€2" },
  { name: "Fresh Orange Juice", price: "€4" },
  { name: "Soft Drinks", desc: "Coke, Sprite, Fanta", price: "€3" },
];
const shisha: Item[] = [
  { name: "Double Apple", price: "€18" },
  { name: "Blueberry Mint", price: "€18" },
  { name: "Watermelon Ice", price: "€19" },
  { name: "Peach Mango", price: "€19" },
  { name: "Grape Mint", price: "€18" },
  { name: "Lemon Ice", price: "€18" },
];
const food: Item[] = [
  { name: "Bruschetta Trio", price: "€7" },
  { name: "Mezze Platter", desc: "Hummus, pita, olives", price: "€10" },
  { name: "Loaded Fries", desc: "Cheese, jalapeños, sour cream", price: "€8" },
  { name: "Chicken Wings", desc: "6pcs, BBQ or buffalo", price: "€10" },
  { name: "Caprese Skewers", price: "€8" },
  { name: "Dessert of the Day", desc: "Ask our staff", price: "—" },
];

/* ─── Parallax Section ─────────────────────────────────────── */
function ParallaxSection({
  img,
  children,
  className = "",
  overlayOpacity = 0.80,
  id,
}: {
  img: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["-12%", "12%"]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, backgroundImage: `url(${img})`, willChange: isMobile ? "auto" : "transform" }}
        className="absolute inset-[-15%] bg-cover bg-center"
      />
      <div className="absolute inset-0" style={{ background: `rgba(10,10,15,${overlayOpacity})` }} />
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
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

/* ─── Menu Item Row — clean list style, not AI card ──────────── */
function MenuItem({ item, accent }: { item: Item; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex items-baseline justify-between gap-4 py-4 border-b transition-colors duration-200"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="flex-1 min-w-0">
        <span
          className="font-display text-lg md:text-xl tracking-wide text-white group-hover:text-white/90 transition-colors"
        >
          {item.name}
        </span>
        {item.desc && (
          <p className="font-serif italic text-xs text-white/40 mt-0.5">{item.desc}</p>
        )}
      </div>
      {/* Dotted line */}
      <div className="flex-1 border-b border-dotted border-white/15 mx-3 mb-1 hidden sm:block" />
      <span
        className="font-mono text-sm flex-shrink-0"
        style={{ color: accent }}
      >
        {item.price}
      </span>
    </motion.div>
  );
}

/* ─── Section Header ──────────────────────────────────────────── */
function MenuSectionHeader({
  eyebrow,
  title,
  accent,
  note,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  note?: string;
}) {
  return (
    <div className="text-center mb-12">
      <p className="font-mono text-[10px] tracking-[0.35em] mb-3" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h2
        className="font-display text-4xl md:text-6xl tracking-wider text-white"
        style={{ textShadow: `0 0 40px ${accent}55` }}
      >
        {title}
      </h2>
      {note && (
        <p className="font-serif italic text-white/45 text-sm mt-3">{note}</p>
      )}
      <div
        className="mx-auto mt-6 h-px w-16"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </div>
  );
}

function MenuPage() {
  const { t } = useTranslation();
  const [active, setActive] = useState("cocktails");

  const tabs = [
    { id: "cocktails", label: t("cat.cocktails") },
    { id: "mocktails", label: t("cat.mocktails") },
    { id: "shisha", label: t("cat.shisha") },
    { id: "food", label: t("cat.food") },
  ];

const scrollTo = (id: string) => {
  setActive(id);
  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbarHeight = 64;  // your navbar h-16
    const tabsHeight = 48;    // sticky tabs height
    const offset = navbarHeight + tabsHeight;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, 50); // small delay ensures layout is ready
};

  return (
    <div className="bg-[#0a0a0f]">

      {/* ── HERO ── */}
      <ParallaxSection img={bar} overlayOpacity={0.60} className="pt-40 pb-24 md:pt-52 md:pb-28 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,120,0.10)_0%,transparent_70%)] pointer-events-none" />
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] tracking-[0.4em] text-neon-pink mb-4"
        >
          — COCONUT BAR MALIA —
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl tracking-wider text-white px-4"
          style={{ textShadow: "0 0 60px rgba(255,45,120,0.4)" }}
        >
          {t("menuPage.title")}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 h-px w-20 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, #ff2d78, transparent)" }}
        />
      </ParallaxSection>

      {/* ── STICKY TABS ── */}
      <div
        className="sticky z-40 border-b"
        style={{
          top: 0,
          background: "rgba(10,10,15,0.92)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className="relative font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase px-5 py-5 transition-colors active:opacity-70"
                style={{ color: active === tab.id ? "#ff2d78" : "rgba(255,255,255,0.45)" }}
              >
                {tab.label}
                {active === tab.id && (
                  <motion.div
                    layoutId="tab-line"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(90deg, transparent, #ff2d78, transparent)" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── COCKTAILS ── */}
      <ParallaxSection img={barCocktail} overlayOpacity={0.84} className="py-20 md:py-28" id="cocktails">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <MenuSectionHeader
            eyebrow="SIGNATURE MIXES"
            title={t("cat.cocktails")}
            accent="#ff2d78"
          />
          <div>
            {cocktails.map((it) => (
              <MenuItem key={it.name} item={it} accent="#ff2d78" />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ── MOCKTAILS ── */}
      <ParallaxSection img={barNight} overlayOpacity={0.84} className="py-20 md:py-28" id="mocktails">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <MenuSectionHeader
            eyebrow="ALCOHOL FREE"
            title={t("cat.mocktails")}
            accent="#38bdf8"
          />
          <div>
            {mocktails.map((it) => (
              <MenuItem key={it.name} item={it} accent="#38bdf8" />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ── SHISHA ── */}
      <ParallaxSection img={barShisha} overlayOpacity={0.82} className="py-20 md:py-28" id="shisha">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <MenuSectionHeader
            eyebrow="PREMIUM FLAVOURS"
            title={t("cat.shisha")}
            accent="#f5c842"
            note={t("menuPage.shishaNote")}
          />
          <div>
            {shisha.map((it) => (
              <MenuItem key={it.name} item={it} accent="#f5c842" />
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ── FOOD ── */}
      <ParallaxSection img={barCrowd} overlayOpacity={0.86} className="py-20 md:py-28" id="food">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <MenuSectionHeader
            eyebrow="BITES & PLATES"
            title={t("cat.food")}
            accent="#c026d3"
          />
          <div>
            {food.map((it) => (
              <MenuItem key={it.name} item={it} accent="#c026d3" />
            ))}
          </div>
        </div>
      </ParallaxSection>

    </div>
  );
}