import { useState } from "react";
import { GraduationCap, RotateCw } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data.js";

export default function Education() {
  const [flipped, setFlipped] = useState({});
  const toggle = (i) => setFlipped((f) => ({ ...f, [i]: !f[i] }));

  return (
    <section id="education" className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Background" title="EDUCATION" subtitle="College · Senior High School — click a card to flip it." />

        <div className="flex flex-wrap gap-8 justify-center [perspective:1200px]">
          {education.map((ed, i) => (
            <button
              key={ed.school}
              onClick={() => toggle(i)}
              className="relative w-[300px] h-[400px] text-left [transform-style:preserve-3d] transition-transform duration-700"
              style={{ transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              {/* Front */}
              <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border border-line bg-surface/70 p-7 flex flex-col items-center justify-center text-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink2 flex items-center gap-1">
                  <RotateCw size={11} /> tap for details
                </span>
                <div className="w-16 h-16 rounded-2xl bg-cyan-dim border border-cyan/30 grid place-items-center text-cyan mt-2">
                  <GraduationCap size={26} />
                </div>
                <h3 className="text-white font-bold text-base mt-2">{ed.school}</h3>
                <p className="text-ink2 text-xs">{ed.course}</p>
                <p className="text-cyan text-sm font-semibold">{ed.status}</p>
                <p className="text-ink2 text-xs">{ed.period}</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border border-cyan/40 p-7 flex flex-col items-center justify-center text-center gap-2 bg-gradient-to-br from-[#0d1117] to-[#131a26]"
                style={{ transform: "rotateY(180deg)" }}
              >
                <h4 className="font-display text-xl font-extrabold text-cyan mb-2">{ed.back.title}</h4>
                <div className="flex flex-col gap-1.5">
                  {ed.back.lines.map((l) => (
                    <p key={l} className="text-[13px] text-gray-300 leading-relaxed">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
