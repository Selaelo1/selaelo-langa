import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-purple-900/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-600">
                Selaelo Langa
              </h1>

              <p className="text-xl sm:text-2xl mb-8 text-muted-foreground">
                Full Stack Developer | From Accounting to Coding
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#contact"
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="border border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </section>

          <About />
          <Experience />
          <Services />
          <Projects />
          <Blog />
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
