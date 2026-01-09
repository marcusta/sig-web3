import { PageHeader } from "@/components/ui/PageHeader";
import { HelpCircle, MessageCircle, Info } from "lucide-react";
import Link from "next/link";

export default function HjalpPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Hjälp Center"
        subtitle="Hur kan vi stå till tjänst?"
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Support */}
            <Link href="/support" className="group">
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full hover:border-primary/50 transition-all hover:bg-slate-800/80">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Support</h2>
                <p className="text-slate-400 mb-6">
                  Behöver du komma i kontakt med oss? Skicka ett meddelande så hjälper vi dig så fort vi kan.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2">
                  KONTAKTA OSS &rarr;
                </span>
              </div>
            </Link>

            {/* FAQ */}
            <Link href="/faq" className="group">
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full hover:border-primary/50 transition-all hover:bg-slate-800/80">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Vanliga frågor</h2>
                <p className="text-slate-400 mb-6">
                  Hitta svar på de vanligaste frågorna om bokning, utrustning, öppettider och mer.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2">
                  LÄS FAQ &rarr;
                </span>
              </div>
            </Link>

            {/* Om oss */}
            <Link href="/om-oss" className="group">
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full hover:border-primary/50 transition-all hover:bg-slate-800/80">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Info className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Om oss</h2>
                <p className="text-slate-400 mb-6">
                  Läs mer om Sweden Indoor Golf, vår vision och personerna bakom anläggningen.
                </p>
                <span className="text-primary font-bold text-sm flex items-center gap-2">
                  LÄS MER &rarr;
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
