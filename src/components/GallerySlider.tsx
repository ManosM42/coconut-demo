import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const slides = [
  { title: "Friday Night", grad: "from-[#ff2d78] via-[#c026d3] to-[#0a0a0f]" },
  { title: "Poolside Sunset", grad: "from-[#f5c842] via-[#ff2d78] to-[#0a0a0f]" },
  { title: "Cocktail Hour", grad: "from-[#38bdf8] via-[#c026d3] to-[#0a0a0f]" },
  { title: "Shisha Lounge", grad: "from-[#f5c842] via-[#c026d3] to-[#0a0a0f]" },
  { title: "DJ Set", grad: "from-[#c026d3] via-[#ff2d78] to-[#0a0a0f]" },
  { title: "After Hours", grad: "from-[#38bdf8] via-[#ff2d78] to-[#0a0a0f]" },
  { title: "Open Air", grad: "from-[#ff2d78] via-[#38bdf8] to-[#0a0a0f]" },
  { title: "Tropical Vibes", grad: "from-[#c026d3] via-[#f5c842] to-[#0a0a0f]" },
];

export function GallerySlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-5">
        {slides.map((s, i) => (
          <div key={i} className="shrink-0 basis-[80%] md:basis-[40%] lg:basis-[32%]">
            <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br ${s.grad}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
              <div className="absolute inset-0 grain" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-mono text-[10px] tracking-[0.3em] text-neon-pink mb-1">0{i + 1}</p>
                <h3 className="font-display text-3xl tracking-wider text-white">{s.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
