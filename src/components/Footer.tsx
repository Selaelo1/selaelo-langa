import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6">
            <a
              href="https://github.com/Selaelo1"
              className="text-gray-400 hover:text-purple-400"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="www.linkedin.com/in/selaelo-langa"
              className="text-gray-400 hover:text-purple-400"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8">
            <p className="text-center text-base text-gray-400">
              © {new Date().getFullYear()} Selaelo Langa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
