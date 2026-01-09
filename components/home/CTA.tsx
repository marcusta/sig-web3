'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-yellow-500 mix-blend-multiply opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6">
            TRÄNA SJÄLV ELLER UTMANA POLARNA
            </h2>
            <p className="text-slate-900 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Du bokar enkelt din bana via MATCHi. Skapa ett konto och boka din första tid direkt.
            </p>
            
            <a
            href="https://www.matchi.se/facilities/swedenindoorgolf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-950 text-white text-lg font-bold rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl"
            >
            BOKA NU <ArrowRight />
            </a>
        </motion.div>
      </div>
    </section>
  );
}
