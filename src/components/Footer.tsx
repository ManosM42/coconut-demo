import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.jpg";

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
          {[Instagram, Facebook, Music2].map((Icon, i) => (
            <a key={i} href="https://instagram.com/coconutbarmalia" target="_blank" rel="noopener noreferrer"
               className="p-2.5 rounded-full glass hover:glow-pink-sm hover:border-neon-pink/50 transition-all"
               aria-label="Social link">
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
