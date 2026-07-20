import { useState, useEffect, useCallback } from "react";
import {
  Award,
  BadgeCheck,
  Code2,
  Gamepad2,
  Cloud,
  BrainCircuit,
  Medal,
  X,
} from "lucide-react";
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
          img: "/Certificates_Images/responsive-web-design.jpg"
      },
    ],
  },
  {
    section: "Specialized Development & Career Insights",
    items: [
      {
        icon: BadgeCheck,
        title: "UI/UX Design & IT Careers",
        meta: "Certificate",
        img: "/Certificates_Images/beyond-the-screen.jpg"
      },
      {
        icon: Gamepad2,
        title: "Game Development Basics",
        meta: "Certificate",
        img: "/Certificates_Images/game-dev.jpg"
      },
    ],
  },
  {
    section: "Emerging Technologies & Innovation",
    items: [
      {
        icon: Cloud,
        title: "Cloud Computing & Coding",
        meta: "Certificate",
        img: "/Certificates_Images/cloud-and-code.jpg"
      },
      {
        icon: BrainCircuit,
        title: "AI for Productivity & Mindset",
        meta: "Certificate",
        img: "/Certificates_Images/vibe-check.jpg"
      },
    ],
  },
];

export default function Certificates() {
  const track = [...certificates, ...certificates];
  const [preview, setPreview] = useState(null); // { img, title, meta }

  const closePreview = useCallback(() => setPreview(null), []);

  // Close on Escape key + lock body scroll while modal is open
  useEffect(() => {
    if (!preview) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closePreview();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [preview, closePreview]);

  const openPreview = (data) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPreview(data);
  };

  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Learning Journey"
          description="A collection of certifications, achievements, and practical experiences that showcase my continuous learning and commitment to technology."
        />

        {/* Marquee Certificates */}
        <div className="mt-14">
          <h3 className="text-center text-white font-bold text-sm tracking-wide mb-8">
            Practical Experience &amp; Digital Competencies
          </h3>

          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
              {track.map((c, i) => (
                <div
                  key={c.title + i}
                  className="w-80 shrink-0 rounded-2xl overflow-hidden border border-line bg-surface/80 backdrop-blur-sm shadow-lg hover:border-cyan/40 hover:shadow-cyan/10 hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Certificate Image */}
                  <button
                    type="button"
                    onClick={openPreview({ img: c.img, title: c.title, meta: c.meta })}
                    className="relative h-52 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 cursor-zoom-in group"
                  >
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-cyan-dim border border-cyan/30 grid place-items-center text-cyan shadow-lg">
                      <Award size={18} />
                    </div>
                  </button>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-base leading-snug min-h-[52px]">
                      {c.title}
                    </h4>

                    <p className="text-ink2 text-xs font-mono">
                      {c.meta}
                    </p>

                    {c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex w-fit items-center justify-center rounded-lg border border-cyan/40 px-4 py-2 text-xs font-semibold text-cyan hover:bg-cyan hover:text-slate-900 transition-all duration-300"
                      >
                        Verify Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Certificates */}
        <div className="mt-16 flex flex-col gap-14">
          {OTHER_CERTS.map((group) => (
            <div key={group.section}>
              <h3 className="text-center text-white font-bold text-sm mb-6">
                {group.section}
              </h3>

              <div className="flex flex-wrap justify-center gap-5">
                {group.items.map((it) => (
                 <div
                    key={it.title}
                    className="w-80 rounded-2xl overflow-hidden border border-line bg-surface/80 backdrop-blur-sm shadow-lg hover:border-cyan/40 hover:-translate-y-2 transition-all duration-300"
                  >
                       <button
                          type="button"
                          onClick={openPreview({ img: it.img, title: it.title, meta: it.meta })}
                          className="relative h-52 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 cursor-zoom-in group"
                        >
                        <img
                          src={it.img}
                          alt={it.title}
                          className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
                        />

                      <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-cyan-dim border border-cyan/30 grid place-items-center text-cyan">
                          <Award size={18} />
                        </div>
                      </button>

          <div className="p-5 flex flex-col gap-3">
                <h4 className="text-white font-semibold text-base min-h-[52px]">
                  {it.title}
                </h4>

                <p className="text-xs text-ink2 font-mono">
                  {it.meta}
                </p>

                {it.link && (
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex w-fit items-center justify-center rounded-lg border border-cyan/40 px-4 py-2 text-xs font-semibold text-cyan hover:bg-cyan hover:text-slate-900 transition-all duration-300"
                  >
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
                ))}
              </div>
            </div>
          ))}

          {/* Athletic Achievement */}
          <div>
  <h3 className="text-center text-white font-bold text-sm mb-6">
    Athletic Achievements &amp; Transferable Skills
  </h3>

  <div className="flex justify-center">
    <div className="rounded-2xl  overflow-hidden border border-amber/40 bg-gradient-to-br from-[#1a1408] to-surface shadow-lg hover:border-amber/60 hover:-translate-y-2 transition-all duration-300">

      {/* Image */}
      <div className="relative flex flex-col sm:flex-row  h-auto gap-5 bg-gradient-to-br from-[#1a1408] to-surface p-4 items-center justify-center">
        <button
          type="button"
          onClick={openPreview({
            img: "Certificates_Images/champion-arnis.png",
            title: "Palarong Bicol 2024",
            meta: "Arnis Gold Medalist & Champion",
          })}
          className="cursor-zoom-in group"
        >
          <img
            src="Certificates_Images/champion-arnis.png"
            alt="Palarong Bicol 2024 Arnis Achievement"
            className="w-full h-full max-w-[250px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </button>

        <button
          type="button"
          onClick={openPreview({
            img: "Certificates_Images/champion-arnis-2.png",
            title: "Palarong Bicol 2024",
            meta: "Arnis Gold Medalist & Champion",
          })}
          className="cursor-zoom-in group"
        >
          <img
            src="Certificates_Images/champion-arnis-2.png"
            alt="Palarong Bicol 2024 Arnis Achievement"
            className="w-full h-full  max-w-[250px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </button>

        {/* Medal Icon */}
        <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-amber-dim border border-amber/40 grid place-items-center text-amber shadow-lg">
          <Medal size={22} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 text-center">

        <h4 className="text-white font-bold text-base">
          Palarong Bicol 2024
        </h4>

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
      </div>

      {/* Image Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
        >
          <button
            type="button"
            onClick={closePreview}
            aria-label="Close preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-surface/90 border border-line grid place-items-center text-white hover:bg-cyan hover:text-slate-900 hover:border-cyan transition-all duration-200 z-10"
          >
            <X size={20} />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={preview.img}
              alt={preview.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-line shadow-2xl bg-surface/40"
            />

            <div className="text-center px-4">
              <h4 className="text-white font-semibold text-base sm:text-lg">
                {preview.title}
              </h4>
              {preview.meta && (
                <p className="text-ink2 text-xs sm:text-sm font-mono mt-1">
                  {preview.meta}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}