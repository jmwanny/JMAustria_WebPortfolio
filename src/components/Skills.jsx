import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data.js";

function Stars({ level }) {
  return (
    <div className="flex items-center gap-0.5 shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < level ? "fill-cyan text-cyan" : "text-line"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Portfolio" title="SKILLS" subtitle="A breakdown of my proficiency across languages, web technologies, design tools, and IDEs." />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skills.map((group) => (
            <div key={group.group} className="rounded-2xl border border-line bg-surface/60 p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <span className="text-cyan font-mono text-[11px] font-bold tracking-widest uppercase">
                  {group.group}
                </span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-line bg-ink px-3 py-2.5 hover:border-cyan/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img src={item.icon} alt="" className="w-5 h-5 object-contain shrink-0" loading="lazy" />
                      <span className="text-[13px] font-medium text-white truncate">{item.name}</span>
                    </div>
                    <Stars level={item.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
