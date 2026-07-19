import { Trophy, Award, Users, ShieldCheck, GraduationCap, HeartHandshake, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { achievements } from "../data.js";

const TYPE_META = {
  competition: { icon: Trophy, color: "#ffb454" },
  certification: { icon: GraduationCap, color: "#00eaff" },
  mentorship: { icon: Users, color: "#c084fc" },
  volunteer: { icon: HeartHandshake, color: "#34d399" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Track Record"
          title="ACHIEVEMENTS & EXPERIENCE"
          subtitle="Competitions, certifications, mentorships, and community work outside the classroom."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[11px] sm:left-[13px] top-2 bottom-2 w-px bg-line" />

          <div className="flex flex-col gap-8">
            {achievements.map((a, i) => {
              const meta = TYPE_META[a.type] ?? TYPE_META.competition;
              const Icon = meta.icon;
              return (
                <div key={a.title + i} className="relative">
                  <span
                    className="absolute -left-8 sm:-left-10 top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 grid place-items-center bg-ink"
                    style={{ borderColor: meta.color, color: meta.color }}
                  >
                    <Icon size={13} />
                  </span>

                  <div className="rounded-2xl border border-line bg-surface/60 p-5 sm:p-6 hover:border-white/20 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-white font-bold font-display text-lg leading-tight">{a.title}</h3>
                        <p className="font-mono text-[11px] text-ink2 mt-1">{a.org}{a.date ? ` · ${a.date}` : ""}</p>
                      </div>
                      <Award size={16} style={{ color: meta.color }} className="shrink-0 mt-1" />
                    </div>

                    <p className="text-sm text-ink2 leading-relaxed mt-3">{a.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {a.badges.map((b) => (
                        <span
                          key={b}
                          className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-full border"
                          style={{ color: meta.color, borderColor: meta.color + "55", background: meta.color + "12" }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    {a.link && (
                      
                       <a href={a.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:underline underline-offset-4"
                      >
                        Verify Certificate <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}