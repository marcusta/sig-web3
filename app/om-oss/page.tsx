import { PageHeader } from '@/components/ui/PageHeader';
import { MapPin, Mail, Phone, Car, ExternalLink, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Om oss"
        subtitle="Sweden Indoor Golf - Linköpings bästa inomhushall."
      />
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Vision */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Vår vision</h2>
              <p className="text-slate-300 leading-relaxed">
                Vi vill erbjuda den bästa tränings- och spelupplevelsen för golfare året runt.
                Med marknadens bästa simulatorer i en trivsam miljö skapar vi förutsättningar
                för både seriös träning och roligt spel med kompisarna.
              </p>
            </div>

            {/* Facility */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Anläggningen</h2>
              <p className="text-slate-300 leading-relaxed">
                Vår lokal på Industrigatan 5 är nyrenoverad och anpassad för inomhusgolf.
                Vi har rymliga bås, bra ventilation och en relaxavdelning där man kan ta en fika.
              </p>
            </div>

            {/* How to find us */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Hitta till oss</h2>
                </div>
              </div>
              <p className="text-slate-300 mb-6">
                Vi delar lokaler med PDL Alfa. Adressen är <span className="text-white font-semibold">Industrigatan 5</span>.
              </p>

              <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Car size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Parkering</h3>
                    <p className="text-slate-300 text-sm">
                      När du parkerat anmäler du din registreringsskylt på en pekplatta precis innanför dörren
                      och har då <span className="text-white font-semibold">3 timmar gratis parkering</span>.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="https://g.page/swedenindoorgolf?share"
                target="_blank"
                className="inline-flex items-center gap-2 bg-primary text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Öppna i Google Maps
                <ExternalLink size={16} />
              </Link>
            </div>

            {/* Contact info */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Kontakt</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin size={18} className="text-primary" />
                    <span>Industrigatan 5, 582 77 Linköping</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone size={18} className="text-primary" />
                    <span>Matchi Booking: +46 10-405 88 00</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail size={18} className="text-primary" />
                    <a href="mailto:info@swedenindoorgolf.se" className="text-primary hover:underline">
                      info@swedenindoorgolf.se
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact persons */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Kontaktpersoner</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Christian Bremer</h3>
                  <a href="mailto:christian.bremer@swedenindoorgolf.se" className="text-primary hover:underline text-sm">
                    christian.bremer@swedenindoorgolf.se
                  </a>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Johan Jigerström</h3>
                  <a href="mailto:johan.jigerstrom@swedenindoorgolf.se" className="text-primary hover:underline text-sm">
                    johan.jigerstrom@swedenindoorgolf.se
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
