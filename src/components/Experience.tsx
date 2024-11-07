import { motion } from "framer-motion";
import { TIMELINE_EVENTS } from "../lib/constants";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-600">
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From accounting to coding, here's my path to becoming a Full Stack
            Developer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-gray-600 md:-translate-x-px" />

          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-start md:items-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-lg mt-6 md:mt-0" />

                <div className={`w-full pl-12 md:w-5/12 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right md:ml-auto"
                    : "md:pl-8 md:mr-auto"
                }`}>
                  <div className="p-6 bg-card rounded-lg shadow-lg border hover:border-purple-400 transition-colors">
                    <span className="text-purple-400 font-bold">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}