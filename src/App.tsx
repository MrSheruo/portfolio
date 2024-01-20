import IntroSection from "./layout/IntroSection";
import PageHeader from "./layout/PageHeader";
import AboutMeSection from "./layout/AboutMeSection";
import "./app.css";
import ExperienceSection from "./layout/ExperienceSection";
import Projects from "./layout/Projects";
import Services from "./layout/Services";
import ContactMe from "./layout/ContactMe";
import Skills from "./layout/Skills";
export default function App() {
  return (
    <div>
      <PageHeader />
      <main className="flex flex-col gap-16">
        <IntroSection />
        <AboutMeSection />
        <Skills />
        <Services />
        <Projects />
        <ExperienceSection />
        <ContactMe />
      </main>
    </div>
  );
}
