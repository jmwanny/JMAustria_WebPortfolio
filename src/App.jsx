import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import VideoEditing from "./components/VideoEditing.jsx";
import Education from "./components/Education.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Achievements from "./components/Achievements.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white selection:bg-cyan selection:text-ink overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <VideoEditing />
        <Education />
        <Certificates />
        <Achievements/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
