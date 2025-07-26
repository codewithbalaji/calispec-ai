import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Calispec.ai - Reimagining Gauge Management for Modern Manufacturing',
  description: 'Next-generation SaaS platform for managing gauges, calibration events, inspection processes, and metrology studies. Built for Industry 4.0 with AI predictions and full traceability.',
  keywords: 'gauge management, calibration, metrology, manufacturing, Industry 4.0, MSA, quality control',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}