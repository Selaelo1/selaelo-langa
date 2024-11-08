import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
