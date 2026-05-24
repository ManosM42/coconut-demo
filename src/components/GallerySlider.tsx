import { useEffect, useRef, useState, useCallback } from "react";
import slide1 from "@/assets/bar-crowd.jpg";
import slide2 from "@/assets/bar-interior.jpg";
import slide3 from "@/assets/bar-cocktail.jpg";
import slide4 from "@/assets/bar-shisha.jpg";
import slide5 from "@/assets/bar-night.jpg";

const slides = [
  { title: "Friday Night", image: slide1 },
  { title: "Interior", image: slide2 },
  { title: "Cocktail Hour", image: slide3 },
  { title: "Shisha Lounge", image: slide4 },
  { title: "Open Air", image: slide5 },
];

const N = slides.length;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

/** Returns the signed offset from current (negative = left, positive = right) */
function getOffset(index: number, current: number): number {
  const raw = mod(index - current, N);
  return raw > N / 2 ? raw - N : raw;
}

export function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(mod(idx, N));
      setTimeout(() => setAnimating(false), 680);
    },
    [animating]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance every 3 s (same as original)
  useEffect(() => {
    autoRef.current = setInterval(next, 3000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Compute per-slide CSS values
  function getStyle(i: number): React.CSSProperties {
    const pos = getOffset(i, current);
    const abs = Math.abs(pos);

    if (abs > 2) {
      return { opacity: 0, pointerEvents: "none", zIndex: 0 };
    }

    const tx = pos * 220;          // horizontal spread (px)
    const tz = -abs * 150;         // depth recession (px)
    const ry = -pos * 28;          // y-axis rotation (deg)
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : 0.65;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.42;
    const blur = abs === 0 ? 0 : abs === 1 ? 1 : 2.5;

    return {
      transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
      opacity,
      filter: blur ? `blur(${blur}px)` : undefined,
      zIndex: 10 - abs,
      pointerEvents: abs <= 1 ? "auto" : "none",
      transition: "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.65s ease, filter 0.65s ease",
      cursor: abs === 0 ? "default" : "pointer",
    };
  }

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      {/* 3D scene */}
      <div
        className="relative w-full"
        style={{ height: 420, perspective: "1100px", perspectiveOrigin: "50% 50%" }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
        }}
      >
        {slides.map((s, i) => {
          const pos = getOffset(i, current);
          const abs = Math.abs(pos);

          return (
            <div
              key={i}
              className="absolute"
              style={{
                width: 280,
                height: 370,
                left: "50%",
                top: "50%",
                marginLeft: -140,
                marginTop: -185,
                transformStyle: "preserve-3d",
                ...getStyle(i),
              }}
              onClick={() => abs > 0 && goTo(i)}
            >
              {/* Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Radial highlight overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
                {/* Grain */}
                <div className="absolute inset-0 grain" />
                {/* Bottom label */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-neon-pink mb-1">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-3xl tracking-wider text-white">
                    {s.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
        >
          ‹
        </button>

        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-neon-pink"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}

        <button
          aria-label="Next slide"
          onClick={next}
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}