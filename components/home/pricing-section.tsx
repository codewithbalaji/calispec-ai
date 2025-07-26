"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gauge, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plans and <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent. Scalable. Indian Market-Ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 text-center"
        >
          <Gauge className="h-20 w-20 text-blue-600 mx-auto mb-8" />
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Gauge-Based Pricing</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our pricing is based on the number of gauges managed — not per user — ensuring unlimited adoption 
            within your organization. Whether you manage 5,000 gauges or 50,000, our subscription tiers offer 
            flexibility and ease of operation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Small Scale</h4>
              <p className="text-gray-600">5,000 gauges</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border-2 border-blue-600">
              <h4 className="font-semibold text-gray-900 mb-2">Medium Scale</h4>
              <p className="text-gray-600">25,000 gauges</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise</h4>
              <p className="text-gray-600">50,000+ gauges</p>
            </div>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Get Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}