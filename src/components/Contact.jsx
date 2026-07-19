import { useState } from "react";
import { ArrowRight, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { socials } from "../data.js";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons.jsx";

const ICONS = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Instagram: InstagramIcon, Facebook: FacebookIcon, X: XIcon };

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("idle");
      }
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Get in Touch" title="CONTACT ME" subtitle="Reach out via the form below, or connect through any of my socials." />

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            {socials.map((s) => {
              const Icon = ICONS[s.name];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-line bg-surface/60 px-5 py-4 hover:border-cyan/40 hover:translate-x-1 transition-all"
                >
                  <span className="w-11 h-11 rounded-xl bg-ink border border-line grid place-items-center text-cyan shrink-0">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm">{s.name}</p>
                    <p className="text-ink2 text-xs truncate">{s.blurb}</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-cyan shrink-0" />
                </a>
              );
            })}
          </div>

          <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
            <h3 className="text-white font-bold text-lg mb-6 font-display">✉ Send Me a Message</h3>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle2 size={40} className="text-cyan" />
                <p className="text-white font-semibold">Message sent</p>
                <p className="text-ink2 text-sm">Thanks for reaching out — I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs font-mono text-cyan underline underline-offset-4"
                >
                  send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="access_key" value="4503db1b-7fd6-49dc-afcb-cf654841af88" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-ink border border-line text-white text-sm placeholder:text-ink2 focus:border-cyan outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-ink border border-line text-white text-sm placeholder:text-ink2 focus:border-cyan outline-none transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-ink border border-line text-white text-sm placeholder:text-ink2 focus:border-cyan outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan text-ink font-bold text-sm hover:bg-cyan-soft transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"} <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
