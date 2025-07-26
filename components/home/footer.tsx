"use client";

import { Gauge } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Gauge className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">Calispec.ai</span>
          </div>
          <p className="text-sm">
            © 2024 Calispec.ai. All rights reserved. Reimagining gauge management for modern manufacturing.
          </p>
        </div>
      </div>
    </footer>
  );
}