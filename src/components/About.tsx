import { motion } from "framer-motion";
import { Code2, Terminal, Database } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-600">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a self-taught Full Stack Developer who transitioned from
            accounting, bringing a unique blend of analytical thinking and
            creative problem-solving to web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-purple-400/10 rounded-lg w-fit">
                  <Code2 className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground">
                  Crafting responsive and intuitive user interfaces using modern
                  frameworks and best practices.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-purple-400/10 rounded-lg w-fit">
                  <Terminal className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Backend Development
                </h3>
                <p className="text-muted-foreground">
                  Building robust server-side applications with Node.js and
                  Express.js.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="relative overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-purple-400/10 rounded-lg w-fit">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Database Management
                </h3>
                <p className="text-muted-foreground">
                  Designing and implementing efficient database solutions with
                  MongoDB.
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
