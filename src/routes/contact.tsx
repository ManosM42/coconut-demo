import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MapEmbed } from "@/components/MapEmbed";

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

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

// TikTok icon (not in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/coconutmalia/",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/CoconutMalia/",
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    href: "https://www.tiktok.com/@coconutmalia",
  },
];

function Contact() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: MapPin, title: t("contact.location"),
      body: <>Malia Beach Road, Malia 70007<br />Crete, Greece</>,
    },
    {
      icon: Phone, title: t("contact.phone"),
      body: <a href="tel:+30000000000" className="hover:text-neon-pink">+30 XXX XXX XXXX</a>,
    },
    {
      icon: Mail, title: t("contact.email"),
      body: <a href="mailto:info@coconutbarmalia.com" className="hover:text-neon-pink">info@coconutbarmalia.com</a>,
    },
    {
      icon: Clock, title: t("contact.hours"),
      body: <>Mon–Thu: 19:00 – 02:00<br />Fri–Sat: 19:00 – 04:00<br />Sun: 19:00 – 02:00</>,
    },
  ];

  return (
    <>
      <section className="relative pt-40 pb-12 text-center grain overflow-hidden">
        <div className="absolute inset-0 bg-radial-pink" />
        <motion.h1 {...fadeUp} className="relative font-display text-6xl md:text-8xl tracking-wider text-glow-pink">
          {t("contact.title")}
        </motion.h1>
        <p className="relative font-serif italic text-white/70 mt-4">We'd love to host your night.</p>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-8">
          <div className="grid sm:grid-cols-2 gap-5 content-start">
            {cards.map(({ icon: Icon, title, body }, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:border-neon-pink/40 transition-all">
                <Icon className="w-7 h-7 text-neon-pink mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl tracking-wider mb-2">{title}</h3>
                <div className="text-sm text-white/70 leading-relaxed">{body}</div>
              </motion.div>
            ))}

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="glass rounded-2xl p-6 sm:col-span-2 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/60">Follow</span>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-full border border-white/20 hover:border-neon-pink hover:glow-pink-sm hover:text-neon-pink transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp}>
            <MapEmbed className="h-full min-h-[500px]" />
          </motion.div>
        </div>
      </section>
    </>
  );
}