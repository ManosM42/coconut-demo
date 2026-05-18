import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
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
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
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
