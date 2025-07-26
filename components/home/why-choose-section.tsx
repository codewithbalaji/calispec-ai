"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, Zap } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: AlertTriangle,
      title: "Risk Reduction",
      description: "Reduces the risk of missed calibrations, failed audits, and production stoppages.",
      color: "text-red-600"
    },
    {
      icon: Users,
      title: "Peace of Mind",
      description: "Manufacturers don't just buy software. They buy peace of mind through complete control.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Quick Adoption",
      description: "No per-user licensing and intuitive UI ensure frictionless adoption across teams.",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Manufacturers <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Purpose-built for plants that can't afford downtime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon className={`h-16 w-16 ${feature.color} mx-auto mb-6`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}