import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const toggle = () => {
    const next = i18n.language === "en" ? "gr" : "en";
    i18n.changeLanguage(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };
  const isEN = i18n.language === "en";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="font-mono text-xs tracking-widest border border-white/20 px-3 py-1.5 rounded-full hover:border-neon-pink hover:text-neon-pink transition-colors"
    >
      {isEN ? "🇬🇧 EN" : "🇬🇷 GR"}
    </button>
  );
}
