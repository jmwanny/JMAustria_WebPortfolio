import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const FACTS = [
  { icon: GraduationCap, label: "Education", value: "BSIT, PITA — 3rd Year" },
  { icon: MapPin, label: "Based in", value: "Albay, Philippines" },
  { icon: Target, label: "Focus", value: "Full Stack Web Dev" },
  { icon: Sparkles, label: "Currently learning", value: "AI Automation" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto ">
        <SectionHeading eyebrow="Portfolio" title="ABOUT ME" align="center" />

        <div className="grid lg:grid-cols-[1.0fr_1.1fr_1.0fr] gap-12 items-start">
          <div className="rounded-2xl border border-line bg-[#0c1119] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-panel/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-[11px] text-ink2">~/about.md</span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed text-ink2">
              <p className="text-cyan mb-3">$ cat about.md</p>
              <p>
                Hi, I'm <span className="text-white font-semibold">Juan Miguel Austria</span> — a third-year BSIT
                student with a strong passion for web and software development.
              </p>
              <p className="mt-4">
                I'm an aspiring full stack developer who enjoys creating clean, functional, and user-friendly
                digital experiences. Always eager to learn, improve my craft, and work on meaningful projects that
                solve real-world problems.
              </p>
              <p className="mt-4 text-white">
                Goal: become a well-rounded developer and contribute to impactful tech solutions.
              </p>
              <p className="mt-5 text-amber">
                Let's <span className="text-white font-semibold">BUILD</span> something that matters
                <span className="animate-blink">_</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/Jm_About_Pic.png" alt="Juan Austria's picture" className="w-full max-w-[500px]" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-line bg-surface/60 p-5 flex flex-col gap-3 hover:border-cyan/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-dim border border-cyan/30 grid place-items-center text-cyan">
                  <f.icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink2 mb-1">{f.label}</p>
                  <p className="text-sm font-semibold text-white">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
