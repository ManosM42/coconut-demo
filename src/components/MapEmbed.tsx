export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-neon-pink/40 glow-pink ${className}`}>
      <iframe
        title="Coconut Bar Malia location"
        src="https://maps.google.com/maps?q=Malia+Crete+Greece&output=embed&z=15"
        className="w-full h-full min-h-[360px] block"
        style={{ filter: "invert(92%) hue-rotate(180deg) saturate(0.8)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
