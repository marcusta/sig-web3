'use client';

import { Contact } from '@/components/home/Contact';
import { PageHeader } from '@/components/ui/PageHeader';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

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
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Kontaktinformation</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">E-post</h3>
                      <a href="mailto:info@swedenindoorgolf.se" className="text-slate-400 hover:text-primary transition-colors">
                        info@swedenindoorgolf.se
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Bokning</h3>
                      <a href="tel:010-405 88 00" className="text-slate-400 hover:text-primary transition-colors">
                        010-405 88 00 (MATCHi)
                      </a>
                      <p className="text-slate-500 text-sm mt-1">För akuta ärenden i hallen, se anslagstavlan för jourtelefonnummer</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Adress</h3>
                      <p className="text-slate-400">
                        Sweden Indoor Golf<br />
                        Industrigatan 5<br />
                        582 77 Linköping
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Bemannade tider</h3>
                      <p className="text-slate-400">
                        Måndag - Onsdag: 14:00 - 20:00
                      </p>
                      <p className="text-slate-500 text-sm mt-1">Anläggningen är öppen dygnet runt för bokade tider</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
                  <h3 className="text-white font-bold mb-3">Snabba svar</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    För svar på vanliga frågor, se vår FAQ-sida eller Support-sida:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/faq"
                      className="px-4 py-2 bg-slate-800 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      FAQ
                    </a>
                    <a
                      href="/support"
                      className="px-4 py-2 bg-slate-800 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Skicka ett meddelande</h2>
                <p className="text-slate-400 mb-8">
                  Fyll i formuläret så återkommer vi till dig så snart vi kan.
                </p>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
