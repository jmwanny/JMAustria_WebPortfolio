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
      { name: "Tailwind CSS", icon: dic("tailwindcss") },
    ],
  },
  {
    category: "Backend",
    color: "#ffb454",
    items: [
      { name: "Node.js", icon: dic("nodejs") },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff" },
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
      { name: "Tailwind CSS", level: 5, icon: dic("tailwindcss") },
      { name: "React", level: 4, icon: dic("react") },
      { name: "Node.js", level: 4, icon: dic("nodejs") },
     { name: "Express.js",level:5, icon: "https://cdn.simpleicons.org/express/ffffff" },
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
    image:"url('/ProjectsImages/araw-mo.png')",
    demo: "https://araw-mo-weather-app.vercel.app/",
    code: "https://github.com/tech1uan/ArawMo-Weather-App-",
    accent: "#00eaff",
  },
  {
    title: "GASTOO!",
    tag: "Expense Tracker",
    tags: ["HTML", "Tailwind", "JavaScript", "Express JS", "Node JS", "MySQL", "Gemini API","Web Push"],
    desc: "Responsive expense tracker featuring AI-driven smart spending insights",
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
    image:"url('/ProjectsImages/basic-banking-app.png')",
    download: "BasicBankApp (JAR)/BasicBankApp.jar",
    code: "https://github.com/tech1uan/Basic_BankingAPP",
    accent: "#7dd3fc",
  },
  {
    title: "Tic Tac Toe",
    tag: "Desktop Game",
    tags: ["Java", "OOP", "JavaFX"],
    desc: "Desktop Tic Tac Toe with PvP and PvAI modes, selectable difficulty, background music, and a clean interface.",
    image:"url('/ProjectsImages/tic-tac-toe.png')",
    code: "https://github.com/tech1uan/1tech_tic-tac-toe-java",
    accent: "#c084fc",
  },
  {
    title: "Albay Tourism Website",
    tag: "School Project",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Clean Albay Tourism website built as a final project for Web Technologies, from vanilla HTML, CSS and JS.",
      image:"url('/ProjectsImages/albay-tourism.png')",
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
 {
  title: "PSC X Award-Winning Video Pitch",
  desc: "The official startup pitch presentation for AgriPITA at the Philippine Startup Challenge 10. Edited and produced by Juan Miguel Austria, securing the Best Video Pitch Award and a 4th Runner-Up regional finish.",
  embed: "https://www.youtube.com/embed/lhS-OqF39o4?rel=0",
  link: "https://www.youtube.com/watch?v=lhS-OqF39o4",
}
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
  { title: "DICT Basic Digital Literacy Training", meta: "40 hrs · Work Immersion", img: "/Certificates_Images/digital-literacy.png" },
  { title: "DICT Work Immersion", meta: "80 hrs", img: "/Certificates_Images/dict-work-immersion.png" },
  { title: "Work Immersion Awardee", meta: "DICT Program", img: "/Certificates_Images/work-immersion-award.jpg" },
  { 
    title: "4th Runner-Up — Regional Startup Challenge", 
    meta: "Philippine Startup Challenge 10 (Bicol Region) · 2025",
    desc: "Placed 4th Runner-Up out of hundreds of strong teams across the region in an intensive startup pitching competition.",
    img: "/Certificates_Images/dict-work-immersion.png"
  },
  { 
    title: "Best Logo Design", 
    meta: "PSC X Philippine Startup Challenge 10 · 2025",
    desc: "Awarded the top visual design recognition for creating the most outstanding and impactful startup brand identity.",
     img: "/Certificates_Images/best-logo.jpeg"
  },
  { 
    title: "Best Video Presentation", 
    meta: "PSC X Philippine Startup Challenge 10 · 2025",
    desc: "Independently edited and produced the award-winning video showcase used for the final competitive pitch.",
     img: "/Certificates_Images/best-video.jpeg"
  },
  { 
    title: "AIDEASDICT Hackathon Participant", 
    meta: "Certificate of Participation (Naga City) · 2025",
    desc: "Collaborated in a fast-paced environment to build and pitch innovative tech solutions.",
     img: "/Certificates_Images/aideas-hackathon-cert.jpg"
  },
  { 
    title: "Event Head & Organizer", 
    meta: "PITA Computer Studies Society · 2026",
    desc: "Spearheaded management for the PITA IT Week 2026 celebration, orchestrating the Beyond Code Seminar, Project Nexus Colloquium, and PITA Startup 2.",
     img: "/Certificates_Images/event-head.jpg"
  },
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
    title: "Philippine Startup Challenge X",
    org: "Regional Competition",
    type: "competition",
    badges: ["Top Finalist", "4th Runner-up", "Best Logo Design", "Best Video Pitch"],
    desc: "Reached the top finalists regionally and placed 4th Runner-up. Also won Best Logo Design and Best Video Pitch — the pitch video was shot and edited by me.",
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
    title: "2nd Year Batch Representative",
    org: "PITA Computer Studies Society",
    type: "leadership",
    badges: ["Student Liaison"],
    desc: "Served as the primary representative to connect the student body, efficiently disseminating organizational updates and fostering unity across the batch.",
  },
];

export const socials = [
  { name: "GitHub", url: "https://github.com/jmwanny", handle: "jmwanny", blurb: "Explore my code & projects" },
  { name: "Facebook", url: "https://www.facebook.com/juanmiguel.austria.5", handle: "juanmiguel.austria", blurb: "Stay updated & connect with me" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/juan-miguel-austria-917583375", handle: "juan-miguel-austria", blurb: "Connect with me professionally" },
  { name: "Instagram", url: "https://www.instagram.com/astrwnnyy_", handle: "astrwnnyy_", blurb: "Follow my visual journey" },
  { name: "X", url: "https://x.com/wannytw_", handle: "wannytw_", blurb: "Follow my thoughts on tech & coding" },
];
