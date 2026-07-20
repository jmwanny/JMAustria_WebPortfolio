import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const LINKS = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#certificates", label: "certificates" },
  { href: "#contact", label: "contact" },
{ href: "#achievements", label: "achievements" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [notification, setNotification] = useState("");


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function themeInit() {
    setNotification("☀️ Light mode is coming soon!");

    setTimeout(() => {
      setNotification("");
    }, 3000);
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-xl border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 p-1 rounded-lg bg-panel border border-line grid place-items-center font-mono text-cyan font-bold text-sm group-hover:border-cyan/60 transition-colors">
            <img src="/Jm_Logo.png" alt="JM Logo" />
          </span>
          <span className="font-mono text-xs text-ink2 hidden sm:inline">tech1uan.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-line bg-surface/60 px-1.5 py-1.5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] tracking-wide text-ink2 px-3 py-1.5 rounded-full hover:text-[#00EAFF] hover:bg-panel transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme (light mode coming soon)"
            onClick={() => themeInit()}
            className="w-9 h-9 rounded-full border border-line grid place-items-center text-ink2 hover:text-cyan hover:border-cyan/50 transition-colors"
          >
            {light ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 rounded-full border border-line grid place-items-center text-ink2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-ink/97 backdrop-blur-xl border-b border-line px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-ink2 hover:text-cyan py-2.5 border-b border-line/60 last:border-none"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {(
          <div
          className={`fixed top-20 left-1/2 -translate-x-1/2 
          bg-panel border border-cyan/40 
          text-cyan font-mono w-full max-w-[300px] text-[12px] sm:text-sm
          px-5 py-3 rounded-full shadow-lg
          backdrop-blur-xl transition-all duration-[300ms] ease-in
          ${
            notification
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          {notification}
        </div>
      )} 
    </header>
  );
}
