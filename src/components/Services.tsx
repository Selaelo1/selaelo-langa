import { motion } from "framer-motion";
import { SERVICES } from "../lib/constants";
import * as Icons from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { FC } from "react";

// Define the type for the IconComponent
type IconComponentType = FC<{ className?: string }>;

// Define the Services component
export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-gray-600">
            What I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            // Dynamically access the icon component
            const IconComponent = Icons[
              service.icon as keyof typeof Icons
            ] as IconComponentType;

            // If IconComponent is undefined, fallback to a default icon (e.g., 'AlertTriangle')
            if (!IconComponent) {
              console.error(`Icon not found: ${service.icon}`);
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:border-purple-400 transition-colors">
                    <CardContent className="p-6">
                      <div className="mb-4 p-3 bg-purple-400/10 rounded-lg w-fit">
                        <Icons.AlertTriangle className="h-6 w-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }

            // Render the valid icon component
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:border-purple-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-purple-400/10 rounded-lg w-fit">
                      <IconComponent className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
