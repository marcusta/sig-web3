'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const images = [
  `${basePath}/gallery-1.jpg`,
  `${basePath}/gallery-2.jpg`,
  `${basePath}/gallery-3.jpg`,
  `${basePath}/hero-bg.jpg`,
];

export function Gallery() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Svårslagen miljö</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Våra lokaler är designade för att ge dig den bästa golfupplevelsen inomhus.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                  <Image 
                    src={src} 
                    alt={`Gallery image ${index + 1}`}
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  /> 
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
