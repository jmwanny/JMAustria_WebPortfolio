/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e14",
        surface: "#0f1520",
        panel: "#131a26",
        line: "#1f2937",
        cyan: {
          DEFAULT: "#00eaff",
          soft: "#5ff2ff",
          dim: "#0a3b42",
        },
        amber: {
          DEFAULT: "#ffb454",
          dim: "#4a3720",
        },
        ink2: "#8a97a8",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: { "0%,49%": { opacity: 1 }, "50%,100%": { opacity: 0 } },
        floatY: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floatY: "floatY 5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
