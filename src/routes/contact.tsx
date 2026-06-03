import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { MapEmbed } from "@/components/MapEmbed";
import bar from "@/assets/bar-interior.jpg";
import barNight from "@/assets/bar-night.jpg";
import barCrowd from "@/assets/bar-crowd.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Coconut Bar Malia" },
      { name: "description", content: "Find Coconut Bar Malia on Malia Beach Road, Crete. Phone, email, opening hours and map." },
      { property: "og:title", content: "Contact — Coconut Bar Malia" },
      { property: "og:description", content: "Reach out, find directions and opening hours." },
    ],
  }),
  component: Contact,
});

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const fadeUp = {
  initial: { opacity: 0, y: isMobile ? 14 : 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: isMobile ? 0.4 : 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

/* ─── TikTok icon ──────────────────────────────────────────── */
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

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

/* ─── Info row ─────────────────────────────────────────────── */
function InfoRow({
  icon: Icon,
  label,
  children,
  accent = "#ff2d78",
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="flex items-start gap-4 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5"
        style={{ background: `${accent}18`, boxShadow: `0 0 16px ${accent}30` }}
      >
        <Icon size={18} style={{ color: accent }} strokeWidth={1.5} />
      </div>
      <div>
        <p className="font-mono text-[9px] tracking-[0.25em] text-white/35 mb-1">{label}</p>
        <div className="text-sm text-white/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Contact() {
  const { t } = useTranslation();

  const socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/coconutmalia/",
      icon: Instagram,
      color: "#ff2d78",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/CoconutMalia/",
      icon: Facebook,
      color: "#38bdf8",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@coconutmalia",
      icon: TikTokIcon,
      color: "#c026d3",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@CoconutBarMalia",
      icon: Youtube,
      color: "#f5c842",
    },
  ];

  return (
    <div className="bg-[#0a0a0f]">

      {/* ── HERO ── */}
      <ParallaxSection img={bar} overlayOpacity={0.60} className="pt-40 pb-24 md:pt-52 md:pb-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,120,0.12)_0%,transparent_70%)] pointer-events-none" />
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] tracking-[0.4em] text-neon-pink mb-4"
        >
          MALIA · CRETE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl tracking-wider text-white px-4"
          style={{ textShadow: "0 0 60px rgba(255,45,120,0.45)" }}
        >
          {t("contact.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-serif italic text-white/60 mt-5 text-lg"
        >
          We'd love to host your night.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-8 h-px w-20 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, #ff2d78, transparent)" }}
        />
      </ParallaxSection>

      {/* ── CONTACT INFO + MAP ── */}
      <ParallaxSection img={barNight} overlayOpacity={0.84} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — info */}
          <motion.div {...fadeUp}>
            <p className="font-mono text-[10px] tracking-[0.35em] text-neon-pink mb-6">GET IN TOUCH</p>

            <InfoRow icon={MapPin} label="LOCATION" accent="#ff2d78">
              Malia Beach Road, Malia 70007<br />Crete, Greece
            </InfoRow>

            <InfoRow icon={Phone} label="PHONE" accent="#38bdf8">
              <a href="tel:+30000000000" className="hover:text-neon-pink transition-colors">
                +30 XXX XXX XXXX
              </a>
            </InfoRow>

            <InfoRow icon={Mail} label="EMAIL" accent="#c026d3">
              <a href="mailto:info@coconutbarmalia.com" className="hover:text-neon-pink transition-colors break-all">
                info@coconutbarmalia.com
              </a>
            </InfoRow>

            <InfoRow icon={Clock} label="OPENING HOURS" accent="#f5c842">
              <div className="space-y-1">
                <div className="flex justify-between gap-8">
                  <span className="text-white/50">Mon – Thu</span>
                  <span className="font-mono text-xs" style={{ color: "#f5c842" }}>19:00 – 02:00</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-white/50">Fri – Sat</span>
                  <span className="font-mono text-xs" style={{ color: "#f5c842" }}>19:00 – 04:00</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="text-white/50">Sunday</span>
                  <span className="font-mono text-xs" style={{ color: "#f5c842" }}>19:00 – 02:00</span>
                </div>
              </div>
            </InfoRow>

            {/* Socials */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <p className="font-mono text-[9px] tracking-[0.25em] text-white/35 mb-4">FOLLOW US</p>
              <div className="flex gap-3">
                {socials.map(({ label, href, icon: Icon, color }) => (
                  
                  <a  key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}35`,
                    }}
                    onMouseEnter={(e) => {
                      if (isMobile) return;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}50`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${color}80`;
                    }}
                    onMouseLeave={(e) => {
                      if (isMobile) return;
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.borderColor = `${color}35`;
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — map */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: isMobile ? 0 : 0.15 }}
            className="overflow-hidden rounded-2xl"
            style={{
              boxShadow: "0 0 0 1px rgba(255,45,120,0.2), 0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            <MapEmbed className="h-[420px] md:h-[560px]" />
          </motion.div>
        </div>
      </ParallaxSection>

      {/* ── VISIT US CTA ── */}
      <ParallaxSection img={barCrowd} overlayOpacity={0.72} className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-5 md:px-10 text-center">
          <motion.p {...fadeUp} className="font-mono text-[10px] tracking-[0.35em] text-neon-pink mb-4">
            THE NIGHT AWAITS
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl tracking-wider text-white mb-6"
            style={{ textShadow: "0 0 40px rgba(255,45,120,0.3)" }}
          >
            Come Find Us
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="font-serif italic text-white/60 text-lg mb-10"
          >
            Every night is a different story. Make yours at Coconut Bar.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4"
          >
            
            <a  href="https://maps.app.goo.gl/uWS4iLkirsxdmP1k8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs tracking-[0.2em] uppercase transition-all active:scale-95"
              style={{
                background: "linear-gradient(135deg, #ff2d78, #c026d3)",
                color: "white",
                boxShadow: "0 4px 24px rgba(255,45,120,0.35)",
              }}
              onMouseEnter={(e) => {
                if (isMobile) return;
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 32px rgba(255,45,120,0.55)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                if (isMobile) return;
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,45,120,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <MapPin size={14} />
              Get Directions
            </a>
            
            <a  href="tel:+30000000000"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs tracking-[0.2em] uppercase transition-all active:scale-95"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
              }}
              onMouseEnter={(e) => {
                if (isMobile) return;
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,45,120,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#ff2d78";
              }}
              onMouseLeave={(e) => {
                if (isMobile) return;
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
              }}
            >
              <Phone size={14} />
              Call Us
            </a>
          </motion.div>
        </div>
      </ParallaxSection>

    </div>
  );
}