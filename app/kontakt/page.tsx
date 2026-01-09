'use client';

import { Contact } from '@/components/home/Contact';
import { PageHeader } from '@/components/ui/PageHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function KontaktPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="bg-slate-950 min-h-screen">
      <PageHeader
        title="Kontakt"
        subtitle="Hör av dig till oss - vi hjälper dig gärna!"
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info Cards */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Kontaktinformation</h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">E-post</h3>
                    <a href="mailto:info@swedenindoorgolf.se" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      info@swedenindoorgolf.se
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Bokning</h3>
                    <a href="tel:010-405 88 00" className="text-slate-400 hover:text-primary transition-colors text-sm">
                      010-405 88 00 (MATCHi)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Adress</h3>
                    <p className="text-slate-400 text-sm">
                      Industrigatan 5<br />
                      582 77 Linköping
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Bemannade tider</h3>
                    <p className="text-slate-400 text-sm">
                      När golfshopen har öppet
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl text-center">
                <h3 className="text-white font-bold mb-3">Snabba svar</h3>
                <p className="text-slate-400 text-sm mb-4">
                  För svar på vanliga frågor, se vår FAQ-sida eller Support-sida:
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/faq"
                    className="px-4 py-2 bg-slate-800 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/support"
                    className="px-4 py-2 bg-slate-800 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Skicka ett meddelande</h2>
              <p className="text-slate-400 mb-8 text-center">
                Fyll i formuläret så återkommer vi till dig så snart vi kan.
              </p>
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
