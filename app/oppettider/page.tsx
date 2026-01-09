import { PageHeader } from '@/components/ui/PageHeader';
import { Clock } from 'lucide-react';

export default function OpeningHoursPage() {
  return (
    <>
      <PageHeader 
        title="Öppettider" 
        subtitle="Vi har öppet alla dagar, året runt." 
      />
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            
            <div className="bg-slate-900 rounded-2xl p-12 border border-slate-800 flex flex-col items-center">
              <Clock size={64} className="text-primary mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Alla dagar</h2>
              <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-8">
                05 - 24
              </p>
              <p className="text-slate-300 leading-relaxed max-w-md">
                När du har bokat din tid via MATCHi får du en kod du använder för att 
                komma in i våra lokaler. Din bana tänds när det är din tur att lira.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
