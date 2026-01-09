import { PageHeader } from '@/components/ui/PageHeader';
import { Clock, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function OpeningHoursPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      <PageHeader
        title="Öppettider"
        subtitle="Vi har öppet alla dagar, året runt."
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />
      <section className="py-12 md:py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Main opening hours */}
            <div className="bg-slate-900 rounded-2xl p-12 border border-slate-800 flex flex-col items-center text-center mb-8">
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

            {/* Additional info */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Staffed hours */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Users size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Bemannade tider</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Vi har bemanning när golfshopen{' '}
                  <Link href="https://premiumgolf.se" target="_blank" className="text-primary hover:underline">
                    Premiumgolf.se
                  </Link>{' '}
                  är bemannad. Fråga i receptionen i entrén för hjälp.
                </p>
                <Link
                  href="/golfshop"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Se mer om golfshopen &rarr;
                </Link>
              </div>

              {/* FSX Live account */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <ExternalLink size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">FSX Live</h3>
                </div>
                <p className="text-slate-300 text-sm mb-4">
                  Skapa ett konto hos Foresight Sport innan du kommer till oss första gången
                  så är du redo när det är dags att slå ut.
                </p>
                <Link
                  href="https://performance.foresightsports.com/"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-primary text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm"
                >
                  Skapa konto
                  <ExternalLink size={14} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
