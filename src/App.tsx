import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { TerminalHero } from "./components/TerminalHero";
import { TechStackGrid } from "./components/TechStackGrid";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { ProjectsShowcase } from "./components/ProjectsShowcase";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <TerminalHero />
          <About />
          <TechStackGrid />
          <ExperienceTimeline />
          <Services />
          <ProjectsShowcase />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
