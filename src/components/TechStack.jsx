import SectionHeading from "./SectionHeading.jsx";
import { techStack } from "../data.js";

export default function TechStack() {
  return (
    <section id="stack" className="py-24 sm:py-28 px-5 sm:px-8 relative">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none opacity-60" />
      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          eyebrow="Import { stack }"
          title="TECH STACK"
          subtitle="The languages, frameworks, and tools I reach for when turning an idea into a working product — from the interface down to the API."
        />

        <div className="rounded-2xl border border-line bg-[#0c1119] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-panel/60">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-[11px] text-ink2">stack.config.js</span>
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-8">
            {techStack.map((group) => (
              <div key={group.category} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase">
                  <span className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                  <span style={{ color: group.color }}>{group.category}</span>
                  <span className="text-ink2 normal-case tracking-normal">
                    /{group.items.length} {group.items.length === 1 ? "tool" : "tools"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <div
                      key={group.category + item.name}
                      className="group flex items-center gap-2.5 rounded-full border border-line bg-surface/70 pl-2.5 pr-4 py-2 hover:-translate-y-0.5 transition-all cursor-default"
                      style={{ "--ring": group.color }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = group.color + "80")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                    >
                      <span className="w-6 h-6 rounded-full bg-ink border border-line grid place-items-center overflow-hidden shrink-0">
                        <img src={item.icon} alt="" className="w-4 h-4 object-contain" loading="lazy" />
                      </span>
                      <span className="text-[13px] font-medium text-white whitespace-nowrap">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
