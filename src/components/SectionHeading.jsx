export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 mb-14 ${alignClass}`}>
      {eyebrow && (
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-cyan flex items-center gap-2">
          <span className="text-ink2">//</span> {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      <span className="block h-[3px] w-14 rounded-full bg-gradient-to-r from-cyan to-amber" />
      {subtitle && <p className="max-w-2xl text-ink2 text-sm sm:text-[15px] leading-relaxed">{subtitle}</p>}
    </div>
  );
}
