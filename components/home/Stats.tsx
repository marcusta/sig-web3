'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Stationer', value: 8, suffix: '' },
  { label: 'Banor', value: 2000, suffix: '+' },
  { label: 'Öppet', value: '05-24', isText: true },
];

function Counter({ from, to, duration }: { from: number; to: number; duration: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export function Stats() {
  return (
    <section className="py-12 md:py-20 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="text-5xl md:text-6xl font-black text-primary mb-2"
              >
                {stat.isText ? (
                    stat.value
                ) : (
                    <>
                        <Counter from={0} to={stat.value as number} duration={2} />
                        {stat.suffix}
                    </>
                )}
              </motion.div>
              <span className="text-slate-400 font-medium tracking-wider uppercase text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
