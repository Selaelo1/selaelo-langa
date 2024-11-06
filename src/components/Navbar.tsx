import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <ThemeToggle />
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block hover:text-purple-400 transition-colors py-2"
            >
              About
            </a>
            <a
              href="#experience"
              className="block hover:text-purple-400 transition-colors py-2"
            >
              Experience
            </a>
            <a
              href="#services"
              className="block hover:text-purple-400 transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#projects"
              className="block hover:text-purple-400 transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="block hover:text-purple-400 transition-colors py-2"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="block hover:text-purple-400 transition-colors py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
