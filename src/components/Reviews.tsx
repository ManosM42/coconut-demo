const reviews = [
  {
    name: "Flóra M.",
    initials: "FM",
    text: "Always an amazing atmosphere, kind bartender, nice promoters and security guard. They even have a pole to dance on which is always so fun. Highly recommend — it's free even!",
  },
  {
    name: "Naiomi H.",
    initials: "NH",
    text: "Had so much fun here! Staff were brilliant, the vibe was great and music was good! Definitely recommend!",
  },
  {
    name: "Nicole T.",
    initials: "NT",
    text: "I've been to Coconut and it was amazing. Nice club, good music and the cocktails are very good!! Lots of fun! Will come back definitely.",
  },
  {
    name: "Gabby",
    initials: "GA",
    text: "I had such a good time here! Drinks were great and vibes were great. Also nice service.",
  },
  {
    name: "Stefanos P.",
    initials: "SP",
    text: "What a great party with some RnB bangers. Top place in Malia. Thank you!",
  },
  {
    name: "Adrian C.",
    initials: "AC",
    text: "Great club, nice music and amazing cocktails. The bartender Giorgios is very nice and will make you feel very welcomed!",
  },
  {
    name: "Chloe C.",
    initials: "CC",
    text: "Spent the night here and can't wait to come back! Drinks were really good and good prices too!",
  },
  {
    name: "Themis Ch.",
    initials: "TC",
    text: "It's a great lounge bar to start and finish your night and the service was pretty fast.",
  },
];

function ReviewCard({
  name,
  initials,
  text,
}: {
  name: string;
  initials: string;
  text: string;
}) {
  return (
    <div className="flex-none w-[300px] rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 relative overflow-hidden transition-colors duration-300 hover:border-neon-pink/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,45,120,0.06),transparent_60%)] pointer-events-none" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-gold text-[13px]">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[13.5px] leading-relaxed text-white/70 mb-5 min-h-[72px]">
        "{text}"
      </p>

      <div className="h-px bg-white/[0.08] mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center text-neon-pink text-[11px] font-medium flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-[13px] font-medium text-white">{name}</p>
          <p className="font-mono text-[9px] tracking-[0.15em] text-white/35 mt-0.5">
            GOOGLE REVIEW
          </p>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="w-full py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 px-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-neon-pink mb-3">
          WHAT THEY SAY
        </p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wider text-white text-glow-soft mb-3">
          Nights to Remember
        </h2>
        <p className="text-white/45 text-sm">Real reviews from real nights out</p>
      </div>

      {/* Rating badge */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-pink/30 bg-neon-pink/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-neon-pink">
            4.8 · GOOGLE REVIEWS
          </span>
        </div>
      </div>

      {/* Scrolling track */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0f] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-[#0a0a0f] to-transparent" />

        <div
          className="flex gap-5 w-max animate-reviews-scroll"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState =
              "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState =
              "running";
          }}
        >
          {doubled.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}