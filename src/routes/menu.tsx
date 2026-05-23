import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  { name: "Soft Drinks (Coke, Sprite, Fanta)", price: "€3" },
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
  { name: "Mezze Platter", desc: "hummus, pita, olives", price: "€10" },
  { name: "Loaded Fries", desc: "cheese, jalapeños, sour cream", price: "€8" },
  { name: "Chicken Wings", desc: "6pcs, BBQ or buffalo", price: "€10" },
  { name: "Caprese Skewers", price: "€8" },
  { name: "Dessert of the Day", price: "ask staff" },
];

const ShishaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M24 6c-2 4 1 6 0 9s-3 3-2 6" strokeLinecap="round" />
    <ellipse cx="24" cy="22" rx="3" ry="2" />
    <path d="M21 24v8M27 24v8" />
    <path d="M16 32h16l-2 8H18z" />
    <path d="M32 28h6c2 0 3 2 1 3l-5 2" strokeLinecap="round" />
  </svg>
);

function MenuPage() {
  const { t } = useTranslation();
  const tabs = [
    { id: "cocktails", label: t("cat.cocktails") },
    { id: "mocktails", label: t("cat.mocktails") },
    { id: "shisha", label: t("cat.shisha") },
    { id: "food", label: t("cat.food") },
  ];
  const [active, setActive] = useState("cocktails");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const accentClass: Record<string, string> = {
    "neon-pink": "text-neon-pink",
    "neon-blue": "text-neon-blue",
    "neon-violet": "text-neon-violet",
    gold: "text-gold",
  };
  const renderCard = (it: Item, accent = "neon-pink") => (
    <div className="glass rounded-2xl p-6 hover:-translate-y-1 hover:border-neon-pink/40 hover:glow-pink-sm transition-all group">
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-display text-2xl tracking-wider leading-tight">{it.name}</h3>
        <span className={`font-mono text-sm whitespace-nowrap ${accentClass[accent]}`}>{it.price}</span>
      </div>
      {it.desc && <p className="text-sm text-white/65 font-serif italic">{it.desc}</p>}
    </div>
  );

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-36 pb-16 text-center grain overflow-hidden">
        <div className="absolute inset-0 bg-radial-pink" />
        <div className="relative">
          <p className="font-mono text-[10px] tracking-[0.4em] text-neon-pink mb-3">— COCONUT BAR MALIA —</p>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider text-glow-pink">{t("menuPage.title")}</h1>
          <div className="w-24 h-px bg-neon-pink mx-auto mt-6 glow-pink-sm" />
        </div>
      </section>

      {/* TABS */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-lg border-y border-white/5">
        <div className="max-w-5xl mx-auto px-5 overflow-x-auto">
          <div className="flex gap-2 md:gap-8 justify-start md:justify-center min-w-max py-4">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => scrollTo(tab.id)}
                className={`relative font-mono text-xs tracking-[0.2em] uppercase px-3 py-2 transition-colors ${
                  active === tab.id ? "text-neon-pink" : "text-white/60 hover:text-white"
                }`}>
                {tab.label}
                {active === tab.id && (
                  <motion.div layoutId="tab-underline" className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-neon-pink glow-pink-sm" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 space-y-24">
        {/* COCKTAILS */}
        <section id="cocktails">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-10 text-center">{t("cat.cocktails")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cocktails.map((it) => <div key={it.name}>{renderCard(it)}</div>)}
          </div>
        </section>

        {/* MOCKTAILS */}
        <section id="mocktails">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-10 text-center">{t("cat.mocktails")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mocktails.map((it) => <div key={it.name}>{renderCard(it, "neon-blue")}</div>)}
          </div>
        </section>

        {/* SHISHA */}
        <section id="shisha">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-3 text-center text-gold">{t("cat.shisha")}</h2>
          <p className="text-center text-white/55 text-sm font-serif italic mb-10">{t("menuPage.shishaNote")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shisha.map((it) => (
              <div key={it.name} className="glass rounded-2xl p-6 border-gold/20 hover:border-gold/60 hover:glow-gold transition-all">
                <div className="flex items-center justify-between mb-3">
                  <ShishaIcon />
                  <span className="font-mono text-sm text-gold">{it.price}</span>
                </div>
                <h3 className="font-display text-2xl tracking-wider">{it.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* FOOD */}
        <section id="food">
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-10 text-center">{t("cat.food")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {food.map((it) => <div key={it.name}>{renderCard(it, "neon-violet")}</div>)}
          </div>
        </section>
      </div>
    </>
  );
}
