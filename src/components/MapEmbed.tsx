export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-neon-pink/40 glow-pink ${className}`}>
      <iframe
        title="Coconut Bar Malia location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.16538904594054!2d25.46218616215155!3d35.28838925461565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a651ebb114013%3A0x31111a9a18b96dcf!2sCoconut%20Bar%20Malia!5e0!3m2!1sel!2sgr!4v1779108439748!5m2!1sel!2sgr"
        className="w-full h-full min-h-[360px] block"
        style={{ filter: "invert(92%) hue-rotate(180deg) saturate(0.8)" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
