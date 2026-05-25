import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.jpg";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}

const socials = [
  {
    icon: Instagram,
    href: "https://instagram.com/coconutbarmalia",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/CoconutMalia",
    label: "Facebook",
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@coconutmalia",
    label: "TikTok",
  },
];

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative border-t border-neon-pink/40 mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 flex flex-col items-center gap-7 text-center">
        <img src={logo} alt="Coconut Bar Malia" className="h-16 w-16 rounded-full ring-1 ring-white/10" />
        <div className="flex flex-wrap justify-center gap-6 font-mono text-xs tracking-[0.2em] uppercase text-white/70">
          <Link to="/" className="hover:text-neon-pink">{t("nav.home")}</Link>
          <Link to="/menu" className="hover:text-neon-pink">{t("nav.menu")}</Link>
          <Link to="/experience" className="hover:text-neon-pink">{t("nav.experience")}</Link>
          <Link to="/contact" className="hover:text-neon-pink">{t("nav.contact")}</Link>
        </div>
        <div className="flex gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass hover:glow-pink-sm hover:border-neon-pink/50 transition-all"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
          © 2026 Coconut Bar Malia. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
