"use client";

import { motion } from "framer-motion";
import { CheckCircle, Factory, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built by Metrology Experts.<br />
            <span className="text-blue-600">Designed for Industry 4.0.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Calispec.ai is the digital evolution of three decades of precision metrology experience. 
            Developed by industry experts with international expertise working closely with OEMs and Tier 1 suppliers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We're Different</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-World Understanding</h4>
                  <p className="text-gray-600">Every feature reflects actual calibration pain points, audit pressures, and operational challenges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industry 4.0 Ready</h4>
                  <p className="text-gray-600">Futuristic solutions that put metrology systems at the center of operational excellence.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Expertise</h4>
                  <p className="text-gray-600">Built by professionals who understand the manufacturing arena's quality requirements.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <Factory className="h-16 w-16 mb-6 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Quality 4.0 Solution</h3>
              <p className="text-blue-100 mb-6">
                In this fast-changing world, where precision and technology are the hallmarks of our era, 
                Calispec.ai has developed Gauge Management Solutions aligning with Industry Quality 4.0.
              </p>
              <div className="flex items-center text-blue-100">
                <Target className="h-5 w-5 mr-2" />
                <span className="font-medium">Precision • Technology • Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}