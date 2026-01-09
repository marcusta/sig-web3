'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="py-12 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kontakta oss</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-slate-400 mt-4">
            Fyll i dina uppgifter nedan så hör vi av oss så fort som möjligt.
            </p>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-slate-950 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Namn <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    required 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Telefon</label>
                <input 
                    type="tel" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                required 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

             <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Företag</label>
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Meddelande <span className="text-red-500">*</span></label>
              <textarea 
                required 
                rows={4}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>

            <button 
                type="submit"
                className="w-full bg-primary text-slate-950 font-bold py-4 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
                SKICKA MEDDELANDE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
