import { ArrowUp, Mail, Phone } from "lucide-react";
import { socials } from "../data.js";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons.jsx";

const ICONS = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Instagram: InstagramIcon, Facebook: FacebookIcon, X: XIcon };

export default function Footer() {
  return (
    <footer className="border-t border-line py-14 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
        <span className="w-11 h-11 rounded-xl bg-panel border border-line grid place-items-center font-mono text-cyan font-bold">
          JM
        </span>

        <a href="#home" className="font-mono text-xs text-cyan inline-flex items-center gap-1.5 hover:underline underline-offset-4">
          <ArrowUp size={13} /> Back to top
        </a>

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
                className="w-9 h-9 rounded-lg border border-line grid place-items-center text-ink2 hover:text-cyan hover:border-cyan/50 transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>

        <div className="flex flex-col gap-1 font-mono text-xs text-ink2">
          <p className="flex items-center gap-1.5 justify-center">
            <Mail size={12} /> juanmiguelaus2@gmail.com
          </p>
          <p className="flex items-center gap-1.5 justify-center">
            <Phone size={12} /> +63 965 742 8033
          </p>
        </div>

        <div className="w-full pt-6 border-t border-line flex flex-col gap-1">
          <p className="text-xs text-gray-500">Designed by Juan Miguel Austria, an aspiring Web Developer</p>
          <p className="text-xs text-gray-600">© 2025 Juan Miguel Austria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
