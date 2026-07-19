import { ExternalLink, Download } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data.js";
import { GithubIcon } from "./SocialIcons.jsx";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="RECENT PROJECTS"
          subtitle="A collection of web applications and Java programs I've worked on, showcasing interactive UIs, responsive design, and modern frontend technologies."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-line bg-surface/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
            >
              <div
                className="h-36 relative flex items-end p-4 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${p.accent}22, #0d1117 70%)`,
                   backgroundImage: `${p.image}`,
                   backgroundSize: "cover",
                  backgroundPosition: "center ", // or "top 20px"
                   backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl opacity-40"
                  style={{ background: p.accent }}
                />
                <span
                  className="relative font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border"
                  style={{ color: p.accent, borderColor: p.accent + "55", background: "#0a0e14aa" }}
                >
                  {p.tag}
                </span>
              </div>

              <div className="flex flex-col flex-1 gap-3 p-5">
                <h3 className="text-white font-bold font-display text-lg">{p.title}</h3>
                <p className="text-sm text-ink2 flex-1 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md bg-ink border border-line text-ink2">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2.5 flex-wrap pt-2">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan text-ink hover:bg-cyan-soft transition-colors"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {p.download && (
                    <a
                      href={p.download}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan text-ink hover:bg-cyan-soft transition-colors"
                    >
                      <Download size={13} /> Download
                    </a>
                  )}
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-line text-ink2 hover:text-white hover:border-cyan/50 transition-colors"
                  >
                    <GithubIcon size={13} /> View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
