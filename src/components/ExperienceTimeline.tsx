import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Skunkworks Africa (Conglomerate)",
    role: "Lead Frontend Developer",
    period: "January 2025 - Present",
    location: "South Africa",
    type: "Conglomerate",
    description:
      "Lead Frontend Developer specialising in Angular and React, focusing on frontend architecture, system scalability, and performance optimisation across multiple platforms and an EdTech LMS.",
    achievements: [
      "Lead frontend development across multiple platforms, owning architecture decisions for scalability and performance",
      "Lead agile engineering teams, mentor developers, and align tech execution with business goals",
      "Design high-performance digital platforms and mobile-friendly LMS with cybersecurity best practices",
      "Enhanced Skunkworks Academy's LMS with AI-driven learning, certifications, and offline access",
    ],
    technologies: [
      "Angular 18",
      "MongoDB",
      ".NET",
      "RESTful APIs",
      "Adobe Experience Manager (AEM) 6.x",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Enlighten Smiles",
    role: "Shopify Developer",
    period: "2023 - 2024",
    location: "Remote",
    type: "E-commerce / Healthcare",
    description:
      "Managed two e-commerce storefronts: consumer Shopify store for retail dental products and B2B portal for doctors purchasing professional teeth whitening systems.",
    achievements: [
      "Built and maintained two platforms with custom themes, navigation, and access controls",
      "Implemented role-based product visibility and pricing for doctors vs retail customers",
      "Integrated secure payment gateways and automated inventory sync between platforms",
      "Customised checkout logic per platform with different tax rules and shipping methods",
    ],
    technologies: [
      "Shopify Plus",
      "Shopify",
      "React",
      "JavaScript",
      "Klaviyo",
      "Liquid",
    ],
    current: false,
  },
  {
    id: 3,
    company: "SecureBank",
    role: "Frontend Developer",
    period: "2019-2023",
    location: "Remote",
    type: "FinTech",
    description:
      "Developed a secure banking app with dual PIN code functionality for enhanced security and user protection.",
    achievements: [
      "Implemented dual PIN system (normal and under duress) for emergency situations",
      "Built account management and transaction tracking features",
      "Developed real-time fund transfer and payment processing",
      "Created advanced security measures and alert systems",
    ],
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "RESTful APIs"],
    current: false,
  },
];

const education = [
  {
    institution: "ALX Africa",
    degree: "Professional Foundations",
    year: "2024",
    type: "certification",
  },
  {
    institution: "ALX Africa",
    degree: "Backend Development",
    year: "2022-2023",
    type: "certification",
  },
  {
    institution: "SheCodes",
    degree: "Frontend Development",
    year: "2021",
    type: "certification",
  },
  {
    institution: "SheCodes",
    degree: "Intro to Artificial Intelligence",
    year: "2023",
    type: "certification",
  },
  {
    institution: "Boston City Campus",
    degree: "BCom in Accounting",
    year: "2024",
    type: "degree",
  },
  {
    institution: "Vuleka SSB High School",
    degree: "National Senior Certificate",
    year: "2016-2020",
    type: "NSC",
  },
];

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-20 bg-background relative scroll-mt-16"
    >
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Professional Journey
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Lead Frontend Developer specialising in Angular and React, with
            expertise in frontend architecture, scalability, and performance
            optimisation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 flex items-center">
              <Briefcase className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary"></div>

              <div className="space-y-8 sm:space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline dot - hidden on mobile */}
                    <div
                      className={`
                      hidden lg:block absolute left-6 w-4 h-4 rounded-full border-2 
                      ${
                        exp.current
                          ? "bg-primary border-primary shadow-lg shadow-primary/50 animate-pulse"
                          : "bg-primary/50 border-primary/50"
                      }
                    `}
                    ></div>

                    {/* Content */}
                    <div className="lg:ml-16 terminal-window hover-lift">
                      <div className="terminal-header">
                        <div className="terminal-dot red"></div>
                        <div className="terminal-dot yellow"></div>
                        <div className="terminal-dot green"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-4 truncate max-w-[150px] sm:max-w-none">
                          {exp.company.toLowerCase().replace(/\s+/g, "-")}
                          .exp
                        </span>
                      </div>

                      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-3 sm:gap-4">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-base sm:text-xl font-semibold text-foreground">
                                {exp.role}
                              </h4>
                              {exp.current && (
                                <span className="px-2 py-0.5 sm:py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/50">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-base sm:text-lg text-primary font-medium mt-1">
                              {exp.company}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {exp.type}
                            </p>
                          </div>

                          <div className="text-left sm:text-right text-xs sm:text-sm text-muted-foreground">
                            <div className="flex items-center sm:justify-end">
                              <Calendar className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center mt-1 sm:justify-end">
                              <MapPin className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base text-foreground/80">
                          {exp.description}
                        </p>

                        <div className="space-y-2">
                          <h5 className="font-medium text-foreground text-sm sm:text-base">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-xs sm:text-sm text-foreground/70 flex items-start"
                              >
                                <span className="text-primary mr-2">▸</span>
                                <span className="flex-1">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 flex items-center">
              <Award className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Education & Certifications
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="terminal-window"
                >
                  <div className="p-3 sm:p-4 space-y-1 sm:space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-xs sm:text-sm">
                          {edu.degree}
                        </h4>
                        <p className="text-primary text-xs sm:text-sm mt-0.5 sm:mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary from CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-12 terminal-window"
            >
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-xs sm:text-sm text-muted-foreground ml-2 sm:ml-4">
                  skills.summary
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2 sm:mb-3">
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      REACT
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      ANGULAR 18
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      .NET
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      TYPESCRIPT
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      TAILWIND
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      BOOTSTRAP
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      NODE JS
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      KLAVIYO
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      LIQUID
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      SHOPIFY PLUS
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      SHOPLINE
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      RESTful APIs
                    </span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground text-sm sm:text-base mb-2 sm:mb-3">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      Component Architecture
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      State Management
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      Performance Optimisation
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      Responsive UI
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      Cross-functional Collaboration
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      Mentorship
                    </span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/5 text-foreground/80 text-[10px] sm:text-xs rounded border border-border">
                      Code Reviews
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}