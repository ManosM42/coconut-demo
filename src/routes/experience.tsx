import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Palmtree, Headphones, Sunset, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import bar from "@/assets/bar-interior.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — Coconut Bar Malia" },
      { name: "description", content: "The story, atmosphere and opening hours of Coconut Bar Malia in Crete." },
      { property: "og:title", content: "The Coconut Experience" },
      { property: "og:description", content: "White furniture, neon lights, and palm vibes in Malia, Crete." },
      { property: "og:image", content: bar },
    ],
  }),
  component: Experience,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Experience() {
  const { t } = useTranslation();
  const highlights = [
    { icon: Palmtree, t: t("exp.h1"), d: t("exp.h1d") },
    { icon: Headphones, t: t("exp.h2"), d: t("exp.h2d") },
    { icon: Sunset, t: t("exp.h3"), d: t("exp.h3d") },
  ];
  const grads = [
    "from-[#ff2d78] to-[#c026d3]",
    "from-[#c026d3] to-[#38bdf8]",
    "from-[#f5c842] to-[#ff2d78]",
    "from-[#38bdf8] to-[#c026d3]",
    "from-[#ff2d78] to-[#f5c842]",
    "from-[#c026d3] to-[#ff2d78]",
  ];

  return (
    <>
      <section className="relative pt-40 pb-20 text-center grain overflow-hidden">
        <div className="absolute inset-0 bg-radial-pink" />
        <motion.h1 {...fadeUp} className="relative font-display text-5xl md:text-8xl lg:text-9xl tracking-wider text-glow-pink px-4">
          {t("exp.title")}
        </motion.h1>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="rounded-2xl overflow-hidden border-2 border-neon-pink/50 glow-pink">
              <img src={bar} alt="Coconut Bar interior" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs tracking-[0.3em] text-neon-pink mb-4">— {t("exp.about").toUpperCase()} —</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-6">A NIGHT UNDER NEON PALMS</h2>
            <div className="space-y-5 text-white/75 leading-relaxed">
              <p>{t("exp.p1")}</p>
              <p>{t("exp.p2")}</p>
              <p className="font-serif italic text-white/90">{t("exp.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-3 gap-5">
          {highlights.map(({ icon: Icon, t: title, d }, i) => (
            <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-neon-pink/40 transition-all">
              <Icon className="w-10 h-10 text-neon-pink mb-5" strokeWidth={1.4} />
              <h3 className="font-display text-2xl tracking-wider mb-3">{title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-6xl tracking-wider">{t("exp.follow")}</h2>
            <a href="https://instagram.com/coconutbarmalia" target="_blank" rel="noopener noreferrer"
               className="inline-block mt-3 font-mono text-sm text-neon-pink hover:underline">@coconutbarmalia</a>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {grads.map((g, i) => (
              <motion.a key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                href="https://instagram.com/coconutbarmalia" target="_blank" rel="noopener noreferrer"
                className={`relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${g} group`}>
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-5 md:px-10">
          <motion.div {...fadeUp} className="glass rounded-2xl p-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-8">{t("exp.hours")}</h2>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">{t("hours.weekday")}</span>
                <span className="text-neon-pink">19:00 – 02:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">{t("hours.fri")}</span>
                <span className="text-neon-pink">19:00 – 04:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">{t("hours.sun")}</span>
                <span className="text-neon-pink">19:00 – 02:00</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
