import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 80;
const BASE = "/src/frames/Ice_block_falling_into_glass_202605172216_";

function pad(n: number) {
  return String(n).padStart(3, "0");
}

function getFrameSrc(index: number) {
  return `${BASE}${pad(index)}.jpg`;
}

export function IceDropAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef({ frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load all frames
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    function drawFrame(index: number) {
      const img = framesRef.current[index];
      if (!img || !ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function onLoad() {
      loadedCount++;
      if (loadedCount === FRAME_COUNT) {
        // Set canvas size from first frame
        const first = images[0];
        canvas.width = first.naturalWidth;
        canvas.height = first.naturalHeight;
        framesRef.current = images;
        drawFrame(0);

        // GSAP ScrollTrigger scrub
        gsap.to(currentFrameRef.current, {
          frame: FRAME_COUNT - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",   // starts when top of section hits bottom of viewport
            end: "bottom center",  // ends halfway through the section
            scrub: 0.5,            // smooth 0.5s lag behind scroll
          },
          onUpdate() {
            drawFrame(Math.round(currentFrameRef.current.frame));
          },
        });
      }
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = onLoad;
      images.push(img);
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="w-full max-w-2xl mx-auto rounded-2xl"
        style={{ aspectRatio: "16/9" }}
      />
    </div>
  );
}