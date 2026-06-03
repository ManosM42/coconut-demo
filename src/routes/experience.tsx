import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Palmtree, Headphones, Sunset, Instagram, Facebook, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import bar from "@/assets/bar-interior.jpg";
import barNight from "@/assets/bar-night.jpg";
import barCrowd from "@/assets/bar-crowd.jpg";

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

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const fadeUp = {
  initial: { opacity: 0, y: isMobile ? 14 : 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: isMobile ? 0.45 : 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ─── TikTok icon (not in lucide) ─────────────────────────── */
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

/* ─── Parallax Section ─────────────────────────────────────── */
function ParallaxSection({
  img,
  children,
  className = "",
  overlayOpacity = 0.78,
}: {
  img: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["-12%", "12%"]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, backgroundImage: `url(${img})`, willChange: isMobile ? "auto" : "transform" }}
        className="absolute inset-[-15%] bg-cover bg-center"
      />
      <div className="absolute inset-0" style={{ background: `rgba(10,10,15,${overlayOpacity})` }} />
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

function Experience() {
  const { t } = useTranslation();

  const highlights = [
    { icon: Palmtree, t: t("exp.h1"), d: t("exp.h1d") },
    { icon: Headphones, t: t("exp.h2"), d: t("exp.h2d") },
    { icon: Sunset, t: t("exp.h3"), d: t("exp.h3d") },
  ];

  const socials = [
    {
      label: "Instagram",
      handle: "@coconutmalia",
      href: "https://www.instagram.com/coconutmalia/",
      icon: Instagram,
      color: "#ff2d78",
      glow: "rgba(255,45,120,0.35)",
      border: "rgba(255,45,120,0.3)",
    },
    {
      label: "Facebook",
      handle: "CoconutMalia",
      href: "https://www.facebook.com/CoconutMalia/",
      icon: Facebook,
      color: "#38bdf8",
      glow: "rgba(56,189,248,0.35)",
      border: "rgba(56,189,248,0.3)",
    },
    {
      label: "TikTok",
      handle: "@coconutmalia",
      href: "https://www.tiktok.com/@coconutmalia",
      icon: TikTokIcon,
      color: "#c026d3",
      glow: "rgba(192,38,211,0.35)",
      border: "rgba(192,38,211,0.3)",
    },
    {
      label: "YouTube",
      handle: "@CoconutBarMalia",
      href: "https://www.youtube.com/@CoconutBarMalia",
      icon: Youtube,
      color: "#f5c842",
      glow: "rgba(245,200,66,0.35)",
      border: "rgba(245,200,66,0.3)",
    },
  ];

  return (
    <div className="bg-[#0a0a0f]">

      {/* ── HERO ── */}
      <ParallaxSection img={bar} overlayOpacity={0.60} className="pt-40 pb-24 md:pt-52 md:pb-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,120,0.12)_0%,transparent_70%)] pointer-events-none" />
        <motion.p
          {...fadeUp}
          className="font-mono text-[10px] tracking-[0.4em] text-neon-pink mb-4"
        >
          MALIA · CRETE
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="font-display text-5xl md:text-8xl lg:text-9xl tracking-wider text-white px-4"
          style={{ textShadow: "0 0 60px rgba(255,45,120,0.4)" }}
        >
          {t("exp.title")}
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="font-serif italic text-white/70 mt-6 text-lg md:text-xl max-w-xl mx-auto px-5"
        >
          "{t("hero.sub")}"
        </motion.p>
      </ParallaxSection>

      {/* ── ABOUT — bar-interior ── */}
      <ParallaxSection img={bar} overlayOpacity={0.82} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...fadeUp} className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 0 0 1.5px rgba(255,45,120,0.4), 0 0 40px rgba(255,45,120,0.15)" }}
            >
              <img
                src={bar}
                alt="Coconut Bar interior"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: isMobile ? 0 : 0.15 }}>
            <p className="font-mono text-xs tracking-[0.3em] text-neon-pink mb-4">
              — {t("exp.about").toUpperCase()} —
            </p>
            <h2 className="font-display text-3xl md:text-5xl tracking-wider mb-6 text-white">
              A NIGHT UNDER NEON PALMS
            </h2>
            <div className="space-y-5 text-white/75 leading-relaxed">
              <p>{t("exp.p1")}</p>
              <p>{t("exp.p2")}</p>
              <p className="font-serif italic text-white/90">{t("exp.p3")}</p>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* ── HIGHLIGHTS — bar-night ── */}
      <ParallaxSection img={barNight} overlayOpacity={0.78} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map(({ icon: Icon, t: title, d }, i) => (
            <motion.div
              key={i} {...fadeUp}
              transition={{ ...fadeUp.transition, delay: isMobile ? 0 : i * 0.1 }}
              className="rounded-2xl p-8 text-center transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Icon
                className="mx-auto mb-5 text-neon-pink"
                strokeWidth={1.4}
                style={{ width: "44px", height: "44px" }}
              />
              <h3 className="font-display text-2xl tracking-wider mb-3 text-white">{title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>

      {/* ── SOCIAL MEDIA — bar-crowd ── */}
      <ParallaxSection img={barCrowd} overlayOpacity={0.80} className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-mono text-[10px] tracking-[0.3em] text-neon-pink mb-3">FOLLOW US</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-wider text-white mb-3">
              {t("exp.follow")}
            </h2>
            <p className="text-white/45 text-sm">Stay in the loop — follow us everywhere</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map(({ label, handle, href, icon: Icon, color, glow, border }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: isMobile ? 0 : i * 0.08 }}
                className="group flex items-center gap-5 rounded-2xl p-6 transition-all duration-300 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${border}`,
                }}
                whileHover={isMobile ? {} : {
                  scale: 1.02,
                  boxShadow: `0 0 30px ${glow}`,
                }}
              >
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${color === "#ff2d78" ? "255,45,120" : color === "#38bdf8" ? "56,189,248" : color === "#c026d3" ? "192,38,211" : "245,200,66"},0.15)`,
                    boxShadow: `0 0 20px ${glow}`,
                  }}
                >
                  <Icon size={26} style={{ color }} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-display text-xl tracking-wider text-white">{label}</p>
                  <p className="font-mono text-xs text-white/45 mt-0.5 truncate">{handle}</p>
                </div>

                {/* Arrow */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  style={{ background: `${glow}` }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* ── HOURS — bar-night ── */}
      <ParallaxSection img={barNight} overlayOpacity={0.85} className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-5 md:px-10">
          <motion.div
            {...fadeUp}
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,45,120,0.2)",
              boxShadow: "0 0 40px rgba(255,45,120,0.08)",
            }}
          >
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-8 text-white">
              {t("exp.hours")}
            </h2>
            <ul className="space-y-4 font-mono text-sm">
              {[
                { label: t("hours.weekday"), time: "19:00 – 02:00" },
                { label: t("hours.fri"), time: "19:00 – 04:00" },
                { label: t("hours.sun"), time: "19:00 – 02:00" },
              ].map(({ label, time }) => (
                <li
                  key={label}
                  className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-white/70">{label}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--neon-pink)", textShadow: "0 0 12px rgba(255,45,120,0.5)" }}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ParallaxSection>

    </div>
  );
}