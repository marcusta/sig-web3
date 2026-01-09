import { PageHeader } from '@/components/ui/PageHeader';
import { Trophy } from 'lucide-react';

export default function CompetitionsPage() {
  return (
    <>
      <PageHeader 
        title="Tävlingar" 
        subtitle="Utmana dig själv och andra i våra tävlingar." 
      />
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid gap-8">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-lg text-primary">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">H40+ Indoor</h2>
                        <p className="text-slate-400 mb-4">
                            En tävling för dig som är 40+. Spelas under vintersäsongen med finalspel på våren.
                        </p>
                        <span className="text-sm font-semibold text-slate-500">Mer info kommer snart</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 rounded-lg text-primary">
                        <Trophy size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">HobbyTouren Indoor</h2>
                        <p className="text-slate-400 mb-4">
                            Öppen för alla hcp-klasser. Spela när det passar dig och registrera resultatet.
                        </p>
                         <span className="text-sm font-semibold text-slate-500">Mer info kommer snart</span>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
