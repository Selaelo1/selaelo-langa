import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  Database,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Import images from src/assets
import medmapImg from "../assets/medmap.jpeg";
import enlightenSmilesImg from "../assets/enlighten-smiles.jpeg";
import finiosImg from "../assets/finios.jpg";
import chanuablockImg from "../assets/chanuablock.jpg";
import securebankImg from "../assets/secure-bank.jpg";
import citystaysImg from "../assets/citystays1.jpg";

const projects = [
  {
    id: 1,
    title: "MedMap",
    description:
      "A healthcare navigation platform that helps patients find nearby medical facilities, book appointments, and access telemedicine services. Features real-time availability tracking, doctor profiles, and integrated ambulance dispatch for emergencies.",
    image: medmapImg,
    tags: ["React", "Node.js", "MongoDB", "Google Maps API", "WebSocket"],
    category: "Full Stack",
    demoUrl: "https://medmap.co.za/",
    githubUrl: null,
    featured: true,
    stats: {
      facilities: "15K+",
      responseTime: "<5 min",
      rating: "4.8/5",
    },
  },
  {
    id: 2,
    title: "Enlighten Smiles",
    description:
      "A modern dental practice management platform offering online appointment scheduling, patient records, treatment planning, and teledentistry consultations. Streamlines clinic operations with automated reminders and digital payment integration.",
    image: enlightenSmilesImg,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    category: "E-commerce",
    demoUrl: "https://patient.enlightensmiles.com/",
    githubUrl: null,
    featured: true,
    stats: {
      patients: "5K+",
      appointments: "20K+",
      satisfaction: "4.9/5",
    },
  },
  {
    id: 3,
    title: "FiniOS",
    description:
      "A powerful financial integration OS that consolidates all your financial platforms into one unified dashboard. Gain real-time insights into your financial standing with automated tracking, AI-driven analytics, and secure bank-grade synchronization across accounts, investments, and expenses.",
    image: finiosImg,
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "AI/ML"],
    category: "Full Stack",
    demoUrl: "https://finios.netlify.app",
    githubUrl: "https://github.com/Selaelo1/finios",
    featured: true,
    stats: {
      security: "256-bit Encryption",
      syncSpeed: "Real-time Updates",
      integrations: "50+ Platforms",
      uptime: "99.99% Reliability",
      userSatisfaction: "4.9/5",
    },
  },
  {
    id: 4,
    title: "Chanua Block",
    description:
      "A tokenized investment platform unlocking African economic opportunities—from wine farms to cocoa harvests and real estate—with micro-investments starting at just R100. Securely trade asset-backed tokens, track ROI, and empower local businesses through blockchain transparency.",
    image: chanuablockImg,
    tags: ["Blockchain", "Solidity", "React", "Node.js", "Web3.js"],
    category: "Web3",
    demoUrl: "https://chinuablock.netlify.app",
    githubUrl: "https://github.com/Selaelo1/chinua-block",
    featured: true,
    stats: {
      minInvestment: "R100 Tokens",
      assets: "Wine, Cocoa, Property",
      blockchain: "Ethereum/Polygon",
      apy: "8-15% Avg Returns",
      userGrowth: "10K+ Investors",
    },
  },
  {
    id: 5,
    title: "SecureBank",
    description:
      "An innovative banking app with dual-PIN security system, featuring a distress PIN for emergency situations, along with standard banking functionalities and real-time fraud detection. Use 12345 for normal banking and 99999 for duress mode.",
    image: securebankImg,
    tags: ["React", "Node.js", "MySQL", "JWT", "Security"],
    category: "Security",
    demoUrl: "https://securbank.netlify.app",
    githubUrl: "https://github.com/Selaelo1/secure-bank",
    featured: true,
    stats: {
      security: "Bank-grade",
      transactions: "50K+",
      uptime: "99.99%",
    },
  },
  {
    id: 6,
    title: "CityStays Travel Platform",
    description:
      "All-in-one travel platform combining accommodation bookings, flights, car rentals, and event tickets in a seamless experience with AI-powered recommendations.",
    image: citystaysImg,
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "API Integration"],
    category: "E-commerce",
    demoUrl: "https://citystays.netlify.app",
    githubUrl: "https://github.com/Selaelo1/citystays",
    featured: true,
    stats: {
      bookings: "25K+",
      countries: "50+",
      satisfaction: "4.9/5",
    },
  },
];

const categories = ["All", "Full Stack", "Security", "E-commerce"];

const categoryIcons = {
  All: Globe,
  "Full Stack": Code,
  Security: Database,
  "E-commerce": Smartphone,
  Mobile: Smartphone,
};

export function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-background relative scroll-mt-16"
    >
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world applications that showcase my expertise in building
            scalable, user-centric solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = categoryIcons[category];
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground neon-blue"
                      : "border-border hover:border-primary"
                  }
                  transition-all duration-300
                `}
              >
                <IconComponent className="mr-2 h-4 w-4" />
                {category}
              </Button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="terminal-window hover-lift cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="terminal-header">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                  <span className="text-sm text-muted-foreground ml-4">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                  </span>
                </div>

                <div className="block">
                  {/* Project Image */}
                  <div className="relative overflow-hidden w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />

                    {/* Overlay on hover */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-background/90 flex items-center justify-center space-x-4"
                        >
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                            asChild
                          >
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                              asChild
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                Code
                              </a>
                            </Button>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4 w-full">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button size="lg" className="btn-primary" asChild>
            <a
              href="https://github.com/Selaelo1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}