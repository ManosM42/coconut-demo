import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";
import logo from "@/assets/logo.jpg";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/experience", label: t("nav.experience") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Coconut Bar Malia home">
          <img src={logo} alt="Coconut Bar Malia" className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10" />
          <span className="font-display text-xl tracking-widest hidden sm:block">COCONUT</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="neon-underline font-mono text-xs tracking-[0.2em] uppercase text-white/85 hover:text-white"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <LanguageToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl animate-fade-in md:hidden">
          <div className="flex justify-end p-5">
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-16">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl tracking-widest"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
