import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  Zap,
  Layers,
  GitBranch,
  Globe,
  Shield,
  Cpu
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    technologies: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Angular 18", level: 85, icon: "🅰️" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 93, icon: "💛" }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-accent",
    bgColor: "bg-accent/10",
    technologies: [
      { name: "Node.js", level: 93, icon: "🟢" },
      { name: ".NET", level: 87, icon: "🔵" },
      { name: "Express.js", level: 90, icon: "🚀" },
      { name: "GraphQL", level: 82, icon: "🔗" },
      { name: "RESTful APIs", level: 95, icon: "🌐" }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    technologies: [
      { name: "MongoDB", level: 90, icon: "🍃" },
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "Redis", level: 75, icon: "🔴" },
      { name: "Firebase", level: 88, icon: "🔥" }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: Zap,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    technologies: [
      { name: "Git", level: 95, icon: "📝" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "AWS", level: 75, icon: "☁️" },
      { name: "Vite", level: 90, icon: "⚡" },
      { name: "AEM 6.x", level: 85, icon: "📄" }
    ]
  }
];

export function TechStackGrid() {
  return (
    <section id="tech-stack" className="py-20 bg-background relative scroll-mt-16">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Tech Stack & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern technologies and frameworks I use to build scalable, 
            high-performance applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="terminal-window hover-lift"
            >
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-sm text-muted-foreground ml-4">
                  {category.title.toLowerCase()}.tech
                </span>
              </div>
              
              <div className="p-6">
                <div className={`flex items-center space-x-3 mb-6 p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + techIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {tech.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${
                            category.color === 'text-primary' 
                              ? 'bg-gradient-to-r from-primary to-primary/70'
                              : category.color === 'text-accent'
                              ? 'bg-gradient-to-r from-accent to-accent/70'
                              : category.color === 'text-green-500'
                              ? 'bg-gradient-to-r from-green-500 to-green-400'
                              : 'bg-gradient-to-r from-amber-500 to-amber-400'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.1 + techIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { skill: "AI Integration", icon: "🤖", color: "border-primary" },
              { skill: "Microservices", icon: "🔧", color: "border-accent" },
              { skill: "Performance Optimization", icon: "⚡", color: "border-green-500" },
              { skill: "Code Review", icon: "👀", color: "border-amber-500" },
              { skill: "Team Leadership", icon: "👥", color: "border-primary" },
              { skill: "Agile/Scrum", icon: "🔄", color: "border-accent" },
              { skill: "CI/CD", icon: "🚀", color: "border-green-500" },
              { skill: "Testing", icon: "🧪", color: "border-amber-500" },
              { skill: "Security", icon: "🔒", color: "border-primary" },
              { skill: "Mobile Development", icon: "📱", color: "border-accent" }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-4 bg-card border-2 ${item.color} rounded-lg text-center hover:bg-card/80 transition-all cursor-default hover-lift`}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-foreground">
                  {item.skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}