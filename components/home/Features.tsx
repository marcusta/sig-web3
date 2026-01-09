'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy } from 'lucide-react';

const features = [
  {
    title: 'Boka hos MATCHi',
    description: 'Vi använder MATCHi för alla våra bokningar. Enkelt och smidigt.',
    icon: Calendar,
    link: 'https://www.matchi.se/facilities/swedenindoorgolf',
    cta: 'BOKA TID',
  },
  {
    title: 'Öppettider 05-24',
    description: 'Öppet varje dag. Få din kod vid bokning och spela när det passar dig.',
    icon: Clock,
    link: '/oppettider',
    cta: 'MERA INFO',
  },
  {
    title: 'Tävlingar',
    description: 'Vi arrangerar en mängd olika tävlingar under inomhus-säsongen.',
    icon: Trophy,
    link: '/tavlingar',
    cta: 'TÄVLA',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Utveckla din golf</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors group text-center"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon size={32} className="text-primary group-hover:text-slate-950 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 mb-8 min-h-[3rem]">{feature.description}</p>
              
              <a
                href={feature.link}
                className="inline-block px-6 py-2 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-primary hover:border-primary hover:text-slate-950 transition-all"
              >
                {feature.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
