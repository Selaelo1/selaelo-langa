import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "./ui/button";
import "../../public/assets/selaelo-profile.jpeg";

const commands = [
  "npm run selaelo",
  "Loading developer profile...",
  "Initializing skills matrix...",
  "Connecting to GitHub...",
  "Status: Available for collaboration 🚀",
];

const roles = [
  "Lead Developer",
  "Full-Stack Architect",
  "Technical Leader",
  "AI Integration Specialist",
  "System Modernizer",
];

export function TerminalHero() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentCommand < commands.length) {
      const command = commands[currentCommand];
      let index = 0;

      const typeInterval = setInterval(() => {
        setDisplayText(command.slice(0, index + 1));
        index++;

        if (index >= command.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentCommand((prev) => prev + 1);
            setDisplayText("");
          }, 1000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentCommand]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 terminal-window"
          >
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span className="text-sm text-muted-foreground ml-4">
                selaelo@dev:~$
              </span>
            </div>

            <div className="p-6 space-y-4 min-h-[350px]">
              {commands.slice(0, currentCommand).map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{cmd}</span>
                </motion.div>
              ))}

              {currentCommand < commands.length && (
                <div className="flex items-center space-x-2">
                  <span className="text-primary">$</span>
                  <span className="text-foreground">{displayText}</span>
                  <span className="terminal-cursor text-primary">|</span>
                </div>
              )}

              {!isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full status-online"></span>
                    <span className="text-green-500">System ready</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-blue-500">Skills matrix loaded</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-purple-500">
                      Ready for collaboration
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Profile Picture - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden lg:flex justify-center mb-8"
            >
              <div className="profile-container">
                <img
                  src="/assets/selaelo-profile.jpeg"
                  alt="Selaelo Langa"
                  className="profile-photo profile-glow w-48 h-48 object-cover rounded-full"
                />
                <div className="profile-status status-online"></div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-5xl font-bold gradient-text text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Selaelo Langa
              </motion.h1>

              <div className="text-lg sm:text-xl text-center lg:text-left">
                <span className="text-primary">const</span>{" "}
                <span className="syntax-function">developer</span> = {"{"}
                <br />
                <span className="ml-4">
                  role:{" "}
                  <span className="syntax-string">"{roles[currentRole]}"</span>,
                </span>
                <br />
                <span className="ml-4">
                  company:{" "}
                  <span className="syntax-string">"Skunkworks Africa"</span>,
                </span>
                <br />
                <span className="ml-4">
                  location:{" "}
                  <span className="syntax-string">"South Africa"</span>
                </span>
                <br />
                {"};"}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  South Africa
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-accent" />
                  Available for projects
                </div>
              </div>
            </div>

            <motion.p
              className="text-base text-muted-foreground max-w-2xl text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Elite Lead Developer & Full-Stack Architect specializing in
              high-performance web applications. Expert in React/Node.js with a
              passion for transforming legacy systems into modern, AI-enhanced
              platforms.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button size="lg" className="btn-primary" asChild>
                <a
                  href="/assets/Selaelo Langa.pdf"
                  download="Selaelo Langa.pdf"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="btn-primary"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    const navbarHeight = 80;
                    const elementPosition =
                      projectsSection.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a
                href="https://github.com/Selaelo1"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/selaelo-langa"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/selaelo.langa"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="mailto:selaelolanga@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover-lift"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
