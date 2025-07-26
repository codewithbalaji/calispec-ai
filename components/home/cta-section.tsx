"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Globe2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Digital Transformation <span className="text-blue-400">Begins Here</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Schedule a personalized demo with our product experts and see how Calispec.ai can help 
            your organization address its challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-400 text-black">
              Contact Sales
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-blue-400" />
              <span className="text-gray-300">contact@calispec.ai</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-blue-400" />
              <span className="text-gray-300">+91-7358779184</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Globe2 className="h-6 w-6 text-blue-400" />
              <span className="text-gray-300">www.calispec.ai</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}