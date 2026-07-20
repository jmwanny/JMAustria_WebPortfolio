import { useEffect, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { socials } from "../data.js";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons.jsx";

const ICONS = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Instagram: InstagramIcon, Facebook: FacebookIcon, X: XIcon };

const ROLES = ["Full Stack Developer", "React & Node.js Builder", "BSIT Student", "UI/UX Tinkerer"];

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setI((v) => v + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

function Avatar() {
  const [broken, setBroken] = useState(false);
  return (
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-10">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <div className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,#00eaff,#ffb454,#00eaff)] animate-[spin_6s_linear_infinite]" />
        <div className="absolute inset-0 rounded-full bg-ink" />
        <div className="absolute inset-[3px] rounded-full overflow-hidden border-2 border-ink bg-panel grid place-items-center">
          {!broken ? (
            <img
              src="/Jm_Suit.jpg"
              alt="Juan Miguel Austria"
              className="w-full h-full object-cover"
              onError={() => setBroken(true)}
            />
          ) : (
            <span className="font-display font-extrabold text-2xl text-cyan">JM</span>
          )}
        </div>
        <span className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-ink" />
      </div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(0,234,255,0.1)" }} />
      <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(255,180,84,0.1)" }} />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-[120px] lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-center lg:gap-y-0">

          {/* Left — text */}
          <div className="flex flex-col gap-5 lg:gap-6 text-center items-center lg:text-left lg:items-start">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 font-mono text-[11px] text-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              available for internship &amp; freelance work
            </div>

            <div>
              <p className="font-mono text-sm text-ink2 mb-2">Hi, I'm</p>
              <h1 className="font-display font-extrabold leading-[0.95] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                JUAN MIGUEL
                <br />
                <span className="text-gradient">AUSTRIA</span>
              </h1>
              <p className="font-mono text-xs text-amber mt-3 tracking-[0.2em]">@TECH1UAN</p>
            </div>

            <div className="h-7 font-mono text-sm lg:text-base text-ink2">
              <span className="text-white">{typed}</span>
              <span className="inline-block w-[2px] h-4 bg-cyan ml-1 align-middle animate-blink" />
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4 lg:mt-2">
              <a
                href="Docs/JM_Austria_CV_Coming_Soon.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan text-ink px-5 py-2.5 lg:py-3 text-sm font-bold hover:bg-cyan-soft transition-colors"
              >
                <Download size={15} /> Download CV
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-2.5 lg:py-3 text-sm font-semibold text-ink2 hover:text-white hover:border-cyan/50 transition-colors"
              >
                View Projects <ArrowDown size={14} />
              </a>
            </div>

            <div className="flex flex-col gap-2 lg:gap-3 items-center lg:items-start lg:mt-4">
              <p className="font-mono text-[11px] tracking-[0.25em] text-ink2 uppercase">my socials</p>
              <div className="flex gap-3">
                {socials.map((s) => {
                  const Icon = ICONS[s.name];
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl border border-line bg-surface/60 grid place-items-center text-ink2 hover:text-cyan hover:border-cyan/50 hover:-translate-y-0.5 transition-all"
                    >
                      <Icon size={15} className="lg:hidden" />
                      <Icon size={16} className="hidden lg:block" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — code card */}
          <div className="relative pt-14 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none lg:mx-0 lg:animate-floatY">
            <Avatar />
            <div className="absolute -inset-3 rounded-3xl blur-2xl" style={{ background: "linear-gradient(135deg, rgba(0,234,255,0.15), transparent, rgba(255,180,84,0.15))" }} />
            <div className="relative rounded-2xl border border-line bg-[#0c1119] shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-panel/60">
                <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-[11px] text-ink2">about.js</span>
              </div>
              <pre className="p-4 sm:p-5 lg:p-6 font-mono text-[11px] sm:text-[12.5px] lg:text-[13.5px] leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-[#8a97a8]">// profile summary</span>{"\n"}
                  <span className="text-[#c084fc]">const</span> <span className="text-[#5ff2ff]">developer</span> = {"{"}
                  {"\n"}  name: <span className="text-[#a5f3fc]">"Juan Miguel Austria"</span>,
                  {"\n"}  alias: <span className="text-[#a5f3fc]">"tech1uan"</span>,
                  {"\n"}  role: <span className="text-[#a5f3fc]">"Full Stack Developer"</span>,
                  {"\n"}  education: <span className="text-[#a5f3fc]">"BSIT, 2nd Year"</span>,
                  {"\n"}  stack: [<span className="text-[#a5f3fc]">"React"</span>, <span className="text-[#a5f3fc]">"Node.js"</span>, <span className="text-[#a5f3fc]">"Express"</span>],
                  {"\n"}  lovesToBuild: <span className="text-[#ffb454]">true</span>,
                  {"\n"}{"}"};
                  {"\n\n"}<span className="text-[#c084fc]">export default</span> developer;
                </code>
              </pre>
            </div>
            <div className="hidden lg:flex absolute -bottom-6 -left-6 items-center gap-2 rounded-xl border border-line bg-panel px-4 py-2.5 font-mono text-[11px] shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              status: <span className="text-cyan">online</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}