import { motion } from "framer-motion";
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Skunkworks Africa",
    role: "Lead Developer",
    period: "January 2025 - Present",
    location: "South Africa",
    type: "Conglomerate",
    description: "Leading technical innovation across Skunkworks Digital, Skunkworks Academy, and LMS platforms. Driving R&D in AI, cloud, and scalable architectures.",
    achievements: [
      "Spearheaded cross-functional engineering teams across multiple business units",
      "Enhanced LMS with AI-driven learning and offline access for African markets",
      "Designed high-performance digital platforms with cybersecurity best practices",
      "Mentored developers and aligned tech execution with business goals"
    ],
    technologies: ["Angular 18", "MongoDB", ".NET", "RESTful APIs", "Adobe Experience Manager (AEM) 6.x"],
    current: true
  },
  {
    id: 2,
    company: "CityStays",
    role: "Full Stack Developer",
    period: "2023-2024",
    location: "Remote",
    type: "Travel Platform",
    description: "Designed and developed a comprehensive travel platform enabling users to book stays, rent cars, flights, and event tickets.",
    achievements: [
      "Built user profiles for hosts and travelers with advanced matching algorithms",
      "Implemented search and booking functionality with real-time availability",
      "Integrated secure payment gateway with fraud detection",
      "Developed car rental and flight booking integrations with major providers"
    ],
    technologies: ["Angular 18", "MongoDB", ".NET", "RESTful APIs", "Payment APIs"],
    current: false
  },
  {
    id: 3,
    company: "SecureBank",
    role: "Frontend Developer",
    period: "2021-2023",
    location: "Remote",
    type: "FinTech",
    description: "Developed a secure banking app with innovative dual PIN code functionality for enhanced security and user protection.",
    achievements: [
      "Implemented dual PIN system (normal and under duress) for emergency situations",
      "Built comprehensive account management and transaction tracking",
      "Developed real-time fund transfer and payment processing",
      "Created advanced security measures and alert systems"
    ],
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Security APIs"],
    current: false
  }
];

const education = [
  {
    institution: "ALX Africa",
    degree: "Professional Foundations",
    year: "2024",
    type: "certification"
  },
  {
    institution: "ALX Africa", 
    degree: "Backend Development",
    year: "2022-2023",
    type: "certification"
  },
  {
    institution: "SheCodes",
    degree: "Frontend Development",
    year: "2021",
    type: "certification"
  },
  {
    institution: "SheCodes",
    degree: "Intro to Artificial Intelligence",
    year: "2023",
    type: "certification"
  },
  {
    institution: "Boston City Campus",
    degree: "BCom in Accounting",
    year: "2016-2020",
    type: "degree"
  }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-background relative scroll-mt-16">
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
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From accounting to leading technical innovation - my path to becoming 
            a Full Stack Developer and Technical Leader
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <TrendingUp className="mr-3 h-6 w-6 text-primary" />
              Professional Experience
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className={`
                      absolute left-6 w-4 h-4 rounded-full border-2 
                      ${exp.current 
                        ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                        : 'bg-accent border-accent'
                      }
                    `}></div>
                    
                    {/* Content */}
                    <div className="ml-16 terminal-window hover-lift">
                      <div className="terminal-header">
                        <div className="terminal-dot red"></div>
                        <div className="terminal-dot yellow"></div>
                        <div className="terminal-dot green"></div>
                        <span className="text-sm text-muted-foreground ml-4">
                          {exp.company.toLowerCase().replace(/\s+/g, '-')}.experience
                        </span>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground">
                              {exp.role}
                            </h4>
                            <p className="text-lg text-primary font-medium">
                              {exp.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {exp.type}
                            </p>
                          </div>
                          
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center mt-1">
                              <MapPin className="mr-1 h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>
                        
                        <div className="space-y-2">
                          <h5 className="font-medium text-foreground">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2">▸</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border border-border"
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
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Award className="mr-3 h-6 w-6 text-accent" />
              Education & Certifications
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="terminal-window"
                >
                  <div className="p-4 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">
                          {edu.degree}
                        </h4>
                        <p className="text-accent text-sm">
                          {edu.institution}
                        </p>
                      </div>
                      <span className={`
                        px-2 py-1 text-xs rounded
                        ${edu.type === 'degree' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-accent/20 text-accent'
                        }
                      `}>
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 terminal-window"
            >
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-sm text-muted-foreground ml-4">skills.summary</span>
              </div>
              
              <div className="p-6 space-y-4">
                <h4 className="font-semibold text-foreground">Core Strengths</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Leadership</span>
                    <span className="text-primary">Expert</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Full-Stack Development</span>
                    <span className="text-primary">Expert</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">System Architecture</span>
                    <span className="text-accent">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AI Integration</span>
                    <span className="text-accent">Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Mentoring</span>
                    <span className="text-primary">Expert</span>
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