import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import Image from "next/image";

export default function GolfshopPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Golfshop"
        subtitle="Premiumprodukter och expertis"
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Content Left */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Golfshop Premiumgolf.se</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Vi delar lokaler med golfshopen <a href="https://premiumgolf.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">premiumgolf.se</a>.
                  Välkommen in till golfshopen för köp av golfklubbor och tillbehör.
                </p>
                <p className="text-slate-300">
                    Premium Golf erbjuder ett brett sortiment av kvalitetsprodukter och professionell hjälp med utprovning.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-primary" />
                    Kontakt & Tjänster
                </h3>
                <p className="text-slate-400 mb-4">Undrar du något kring:</p>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                    <li className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2 rounded">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Golfklubbor
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2 rounded">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Verkstadsärenden
                    </li>
                    <li className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2 rounded">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Golflektioner
                    </li>
                     <li className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-2 rounded">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        Custom Fitting
                    </li>
                </ul>
                
                <div className="flex items-center gap-3 text-slate-300 mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:info@premiumgolf.se" className="hover:text-white transition-colors">info@premiumgolf.se</a>
                </div>
                 <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Se öppettider på <a href="https://premiumgolf.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">premiumgolf.se</a></span>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
                  <Image 
                    src={`${basePath}/premium-golf.png`}
                    alt="Premium Golf Shop"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                       <span className="inline-block px-3 py-1 bg-primary text-slate-900 text-xs font-bold rounded mb-2">PARTNER</span>
                       <h3 className="text-white font-bold text-xl">Premium Golf</h3>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
