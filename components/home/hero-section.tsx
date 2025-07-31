"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  FileCheck,
  BarChart3,
  Clock
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15
    }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeInVariants} className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" />
              Next-Generation GMS Platform
            </Badge>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <motion.span variants={wordVariants} className="inline-block">
              Reimagining
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block">
              Gauge
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block text-blue-600">
              Management
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block">
              for
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block">
              Modern
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block">
              Manufacturing
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInVariants}
            className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Calispec.ai is a next-generation SaaS platform purpose-built for managing the entire lifecycle of
            gauges, calibration events, inspection processes, and metrology studies in a single, intelligent interface.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div variants={fadeInVariants}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-2xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-2">Full Traceability</h3>
                    <p className="text-sm text-gray-600">Complete audit trail from procurement to retirement</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    >
                      <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI Predictions</h3>
                    <p className="text-sm text-gray-600">Prevent failures with predictive analytics</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 }}
                    >
                      <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-2">Real-time Alerts</h3>
                    <p className="text-sm text-gray-600">Never miss a calibration deadline again</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}