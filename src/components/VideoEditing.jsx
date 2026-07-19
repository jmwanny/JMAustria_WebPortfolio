import { Film, PlayCircle } from "lucide-react";
import { videos } from "../data.js";

export default function VideoEditing() {
  return (
    <section className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-dim border border-cyan/30 grid place-items-center text-cyan">
            <Film size={20} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            VIDEO EDITING PROJECTS
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 font-mono text-xs text-ink2 mt-1">
            <p>
              Tool: <span className="text-cyan">CapCut</span>
            </p>
            <p>
              Role: <span className="text-cyan">Video Editor — Group Projects</span>
            </p>
          </div>
          <p className="max-w-xl text-sm text-ink2 leading-relaxed">
            As part of school activities, I edited group video projects using CapCut — applying transitions, text
            overlays, music syncing, and basic visual effects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line bg-surface/60 overflow-hidden flex flex-col">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={v.embed}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h4 className="text-white font-bold text-sm">Project: {v.title}</h4>
                <p className="text-xs text-ink2 leading-relaxed">{v.desc}</p>
                <a
                  href={v.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-cyan text-ink hover:bg-cyan-soft transition-colors"
                >
                  <PlayCircle size={14} /> Preview Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
