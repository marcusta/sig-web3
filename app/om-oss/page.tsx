import { PageHeader } from '@/components/ui/PageHeader';

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="Om oss" 
        subtitle="Sweden Indoor Golf - Linköpings bästa inomhushall." 
      />
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8 text-slate-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-white">Vår vision</h2>
            <p>
              Vi vill erbjuda den bästa tränings- och spelupplevelsen för golfare året runt. 
              Med marknadens bästa simulatorer i en trivsam miljö skapar vi förutsättningar 
              för både seriös träning och roligt spel med kompisarna.
            </p>
            
            <h2 className="text-2xl font-bold text-white">Anläggningen</h2>
            <p>
              Vår lokal på Industrigatan 5 är nyrenoverad och anpassad för inomhusgolf. 
              Vi har rymliga bås, bra ventilation och en relaxavdelning där man kan ta en fika.
            </p>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-8">
                <h3 className="text-white font-bold mb-2">Hitta hit</h3>
                <p>Industrigatan 5, 582 77 Linköping</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
