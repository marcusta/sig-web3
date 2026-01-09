'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 opacity-90" />
        {/* Placeholder for Hero Image - ideally a nice golf simulator shot */}
        <div 
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-bg.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary font-bold tracking-wider uppercase text-sm md:text-base"
          >
            Golf året runt på dina villkor
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight"
          >
            SPELA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">GOLF!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Du spelar med tourbollar i sval, vädersäker miljö och får exakt data på varje slag. 
            Perfekt för dig som vill hålla spelet skarpt under vintern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.matchi.se/facilities/swedenindoorgolf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-slate-950 text-lg font-bold rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              BOKA SPELTID <ArrowRight size={20} />
            </a>
            <a
              href="/om-oss"
              className="px-8 py-4 bg-slate-800 text-white text-lg font-bold rounded-lg hover:bg-slate-700 transition-all flex items-center justify-center"
            >
              Läs mer om oss
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
