import { Award, BadgeCheck, Code2, Gamepad2, Cloud, BrainCircuit, Medal } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { certificates } from "../data.js";

const OTHER_CERTS = [
  {
    section: "Web Development & Design",
    items: [
      {
        icon: Code2,
        title: "Responsive Web Design Certification",
        meta: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/jmaustria/responsive-web-design",
      },
    ],
  },
  {
    section: "Specialized Development & Career Insights",
    items: [
      { icon: BadgeCheck, title: "UI/UX Design & IT Careers", meta: "Certificate" },
      { icon: Gamepad2, title: "Game Development Basics", meta: "Certificate" },
    ],
  },
  {
    section: "Emerging Technologies & Innovation",
    items: [
      { icon: Cloud, title: "Cloud Computing & Coding", meta: "Certificate" },
      { icon: BrainCircuit, title: "AI for Productivity & Mindset", meta: "Certificate" },
    ],
  },
];

export default function Certificates() {
  const track = [...certificates, ...certificates];

  return (
    <section id="certificates" className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Credentials"
          title="COURSE & CERTIFICATION"
          subtitle="A robust IT skill set cultivated through active learning and practical application — web development, digital competencies, AI, and specialized software."
        />

        <div>
          <h3 className="text-center text-white font-bold text-sm tracking-wide mb-6">
            Practical Experience &amp; Digital Competencies
          </h3>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
              {track.map((c, i) => (
                <div
                  key={c.title + i}
                  className="w-64 shrink-0 rounded-2xl border border-line bg-surface/60 p-5 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-dim border border-cyan/30 grid place-items-center text-cyan">
                    <Award size={18} />
                  </div>
                  <p className="text-sm font-semibold text-white leading-snug">{c.title}</p>
                  <p className="font-mono text-[11px] text-ink2">{c.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-14">
          {OTHER_CERTS.map((group) => (
            <div key={group.section}>
              <h3 className="text-center text-white font-bold text-sm mb-6">{group.section}</h3>
              <div className="flex flex-wrap gap-5 justify-center">
                {group.items.map((it) => (
                  <div
                    key={it.title}
                    className="w-72 rounded-2xl border border-line bg-surface/60 p-5 flex flex-col gap-3 hover:border-cyan/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-dim border border-cyan/30 grid place-items-center text-cyan">
                      <it.icon size={18} />
                    </div>
                    <p className="text-sm font-semibold text-white leading-snug">{it.title}</p>
                    <p className="font-mono text-[11px] text-ink2">{it.meta}</p>
                    {it.link && (
                      <a
                        href={it.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex w-fit items-center gap-1 text-xs font-semibold text-cyan border border-cyan/40 rounded-lg px-3 py-1.5 hover:bg-cyan hover:text-ink transition-colors"
                      >
                        Verify Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-center text-white font-bold text-sm mb-6">
              Athletic Achievements &amp; Transferable Skills
            </h3>
            <div className="flex justify-center">
              <div className="w-80 rounded-2xl border border-amber/40 bg-gradient-to-br from-[#1a1408] to-surface p-6 flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-dim border border-amber/40 grid place-items-center text-amber">
                  <Medal size={22} />
                </div>
                <p className="text-white font-bold text-sm">Palarong Bicol 2024</p>
                <p className="text-ink2 text-xs leading-relaxed">
                  Arnis Gold Medalist &amp; Champion
                  <br />
                  Palarong Pambansa Qualifier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
