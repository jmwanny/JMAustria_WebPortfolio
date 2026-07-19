// Devicon CDN base for tech logos
const dic = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const techStack = [
  {
    category: "Frontend",
    color: "#00eaff",
    items: [
      { name: "React", icon: dic("react") },
      { name: "JavaScript", icon: dic("javascript") },
      { name: "HTML5", icon: dic("html5") },
      { name: "CSS3", icon: dic("css3") },
      { name: "Tailwind CSS", icon: dic("tailwindcss", "plain") },
    ],
  },
  {
    category: "Backend",
    color: "#ffb454",
    items: [
      { name: "Node.js", icon: dic("nodejs") },
      { name: "Express.js", icon: dic("express", "original-wordmark") },
      { name: "MySQL", icon: dic("mysql") },
    ],
  },
  {
    category: "AI & Automation",
    color: "#34d399",
    items: [
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/ffffff" },
      { name: "Make", icon: "https://cdn.simpleicons.org/make/ffffff" },
      { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/ffffff" },
      { name: "OpenAI API", icon: "https://cdn.simpleicons.org/openai/ffffff" },
    ],
  },
  {
    category: "Languages",
    color: "#7dd3fc",
    items: [
      { name: "Java", icon: dic("java") },
      { name: "C++", icon: dic("cplusplus") },
      { name: "JavaScript", icon: dic("javascript") },
    ],
  },
  {
    category: "Tools & Design",
    color: "#c084fc",
    items: [
      { name: "VS Code", icon: dic("vscode") },
      { name: "Git", icon: dic("git") },
      { name: "Figma", icon: dic("figma") },
    ],
  },
];

export const skills = [
  {
    group: "Programming Languages",
    items: [
      { name: "C++", level: 3, icon: dic("cplusplus") },
      { name: "Java", level: 4, icon: dic("java") },
      { name: "JavaScript", level: 5, icon: dic("javascript") },
    ],
  },
  {
    group: "Web Technologies",
    items: [
      { name: "HTML", level: 5, icon: dic("html5") },
      { name: "CSS", level: 5, icon: dic("css3") },
      { name: "Tailwind CSS", level: 5, icon: dic("tailwindcss", "plain") },
      { name: "React", level: 5, icon: dic("react") },
      { name: "Node.js", level: 5, icon: dic("nodejs") },
      { name: "MySQL", level: 5, icon: dic("mysql") },
    ],
  },
  {
    group: "AI & Automation",
    items: [
      { name: "n8n", level: 4, icon: "https://cdn.simpleicons.org/n8n/ffffff" },
      { name: "Make", level: 4, icon: "https://cdn.simpleicons.org/make/ffffff" },
      { name: "Zapier", level: 3, icon: "https://cdn.simpleicons.org/zapier/ffffff" },
    ],
  },
  {
    group: "Design & Editing",
    items: [
      { name: "Canva", level: 4, icon: dic("canva") },
      { name: "Figma", level: 4, icon: dic("figma") },
    ],
  },
  {
    group: "Dev Tools / IDEs",
    items: [
      { name: "VS Code", level: 5, icon: dic("vscode") },
      { name: "IntelliJ IDEA", level: 4, icon: dic("intellij") },
      { name: "Eclipse", level: 3, icon: dic("eclipse") },
    ],
  },
];

export const projects = [
  {
    title: "Araw Mo!",
    tag: "Weather App",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Interactive weather app with 7-day forecasts, dynamic day/night themes, ambient background music, and PWA support.",
      image:"url('/ProjectsImages/gastoo-project.png')",
    demo: "https://araw-mo-weather-app.vercel.app/",
    code: "https://github.com/tech1uan/ArawMo-Weather-App-",
    accent: "#00eaff",
  },
  {
    title: "GASTOO!",
    tag: "Expense Tracker",
    tags: ["HTML", "Tailwind", "JavaScript"],
    desc: "Responsive expense tracker with balance management and visual spending analytics.",
    image:"url('/ProjectsImages/gastoo-project.png')",
    demo: "https://gastoo-intro-web-page.vercel.app/",
    code: "https://github.com/tech1uan/EyeGasto-",
    accent: "#ffb454",
  },
  {
    title: "Basic Banking App",
    tag: "Desktop App",
    tags: ["Java", "Swing"],
    desc: "Desktop banking application with MPIN login, balance checks, and deposit / withdraw functionality.",
    image:"url('/ProjectsImages/gastoo-project.png')",
    download: "BasicBankApp (JAR)/BasicBankApp.jar",
    code: "https://github.com/tech1uan/Basic_BankingAPP",
    accent: "#7dd3fc",
  },
  {
    title: "Tic Tac Toe",
    tag: "Desktop Game",
    tags: ["Java", "OOP", "JavaFX"],
    desc: "Desktop Tic Tac Toe with PvP and PvAI modes, selectable difficulty, background music, and a clean interface.",
    image:"url('/ProjectsImages/gastoo-project.png')",
    code: "https://github.com/tech1uan/1tech_tic-tac-toe-java",
    accent: "#c084fc",
  },
  {
    title: "Albay Tourism Website",
    tag: "School Project",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Clean Albay Tourism website built as a final project for Web Technologies, from vanilla HTML, CSS and JS.",
      image:"url('/ProjectsImages/gastoo-project.png')",
    demo: "https://tech1uan.github.io/Albay-Tourism-Website-School-Project-Purposes-/",
    code: "https://github.com/tech1uan/Albay-Tourism-Website-School-Project-Purposes-",
    accent: "#34d399",
  },
];

export const videos = [
  {
    title: "Golden Ours",
    desc: "A love story through the dreams of schizophrenia — Gen Bio & Oral Communication.",
    embed: "https://www.youtube.com/embed/kZXi6VwZEMQ?rel=0",
    link: "https://youtu.be/kZXi6VwZEMQ?si=3DtSHmU3PI5MgCeY",
  },
  {
    title: "Tara, Time Travel Tayo!",
    desc: "A short vlog for Readings in Philippine History showing local cultural heritage.",
    embed: "https://www.youtube.com/embed/Ohe5wzeNkFk?rel=0",
    link: "https://youtu.be/Ohe5wzeNkFk?si=HZ-hvgE_QkXHIDGP",
  },
];

export const education = [
  {
    school: "Polytechnic Institute of Tabaco",
    course: "BS in Information Technology",
    status: "2nd Year Student",
    period: "2024 – Present",
    back: { title: "GWA", lines: ["First Year: 1.0", "Second Year: 1.0", "Third Year: Soon", "Fourth Year: Soon"] },
  },
  {
    school: "San Jose National High School",
    course: "SHS Strand: STEM",
    status: "Graduated",
    period: "2022 – 2024",
    back: {
      title: "Achievements",
      lines: [
        "Grade 11 – With Honors",
        "Grade 12 – With High Honors",
        "Work Immersion Awardee (DICT)",
        "Outstanding Performance – ARNIS",
        "Palarong Pambansa Athlete – ARNIS",
      ],
    },
  },
];

export const certificates = [
  { title: "DICT Basic Digital Literacy Training", meta: "40 hrs · Work Immersion" },
  { title: "DICT Work Immersion", meta: "80 hrs" },
  { title: "Work Immersion Awardee", meta: "DICT Program" },
  { title: "AIDEASDICT Hackathon, Naga City", meta: "Certificate of Participation · 2025" },
];

export const achievements = [
  {
    title: "AIDEASDICT Hackathon",
    org: "DICT · Naga City",
    date: "2025",
    type: "competition",
    badges: ["Top 10 Finalist"],
    desc: "Competed in a regional AI/DICT-backed hackathon in Naga City, advancing to the top 10 out of the full field of teams.",
  },
  {
    title: "Philippine Startup Challenge",
    org: "National Competition",
    type: "competition",
    badges: ["Top Finalist", "4th Runner-up", "Best Logo Design", "Best Video Pitch"],
    desc: "Reached the top finalists nationally and placed 4th Runner-up. Also won Best Logo Design and Best Video Pitch — the pitch video was shot and edited by me.",
  },
  {
    title: "Responsive Web Design Certification",
    org: "freeCodeCamp",
    type: "certification",
    badges: ["Certified"],
    desc: "Completed freeCodeCamp's Responsive Web Design certification, covering HTML, CSS, Flexbox, Grid, and accessibility fundamentals.",
    link: "https://www.freecodecamp.org/certification/jmaustria/responsive-web-design",
  },
  {
    title: "Startup Mentor",
    org: "Polytechnic Institute of Tabaco (PITA)",
    type: "mentorship",
    badges: ["Champion", "2nd Runner-up"],
    desc: "Mentored student teams for a school-run startup program. Teams under my mentorship placed Champion and 2nd Runner-up.",
  },
  {
    title: "Tech Volunteer",
    org: "DevCon (Developers Connect)",
    type: "volunteer",
    badges: ["Volunteer"],
    desc: "Volunteered on the technical/operations side of DevCon community events, supporting sessions and on-ground logistics.",
  },
  {
    title: "CLICKCONEX 2026",
    org: "National IT Event · Naga City",
    type: "volunteer",
    badges: ["VIP Handler"],
    desc: "Attended CLICKCONEX 2026, a major national IT event in Naga City, and was assigned to handle a VIP guest throughout the event.",
  },
  {
    title: "DevCon x Sui Codecamp",
    org: "Ligao City",
    type: "mentorship",
    badges: ["Mentor"],
    desc: "Served as a mentor at the DevCon x Sui Codecamp bootcamp in Ligao City, guiding participants through blockchain/web dev fundamentals.",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/jmwanny", handle: "jmwanny", blurb: "Explore my code & projects" },
  { name: "Facebook", url: "https://www.facebook.com/juanmiguel.austria.5", handle: "juanmiguel.austria", blurb: "Stay updated & connect with me" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/juan-miguel-austria-917583375", handle: "juan-miguel-austria", blurb: "Connect with me professionally" },
  { name: "Instagram", url: "https://www.instagram.com/astrwnnyy_", handle: "astrwnnyy_", blurb: "Follow my visual journey" },
  { name: "X", url: "https://x.com/wannytw_", handle: "wannytw_", blurb: "Follow my thoughts on tech & coding" },
];
