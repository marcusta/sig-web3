import { PageHeader } from "@/components/ui/PageHeader";
import { Check, Clock, User, Users } from "lucide-react";

export default function PrislistaPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Prislista"
        subtitle="Spela golf året runt på dina villkor"
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Intro description */}
          <div className="text-center mb-16">
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Du spelar med tourbollar i sval, vädersäker miljö och får exakt data på varje slag.
              Perfekt för dig som vill hålla spelet skarpt under vintern till nästa säsong.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Weekday Pricing */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Måndag - Fredag</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-300">05:00 - 16:00</span>
                  <span className="text-xl font-bold text-primary">250 kr/h</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-300">16:00 - 21:00</span>
                  <span className="text-xl font-bold text-primary">350 kr/h</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-300">21:00 - 24:00</span>
                  <span className="text-xl font-bold text-primary">250 kr/h</span>
                </div>
              </div>
            </div>

            {/* Weekend Pricing */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Lördag - Söndag</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-300">05:00 - 10:00</span>
                  <span className="text-xl font-bold text-primary">250 kr/h</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-300">10:00 - 18:00</span>
                  <span className="text-xl font-bold text-primary">350 kr/h</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-300">18:00 - 24:00</span>
                  <span className="text-xl font-bold text-primary">250 kr/h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-20">
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Priserna avser hyra av simulator per timme, oavsett antal spelare (max 4).
            </p>
            <a
              href="https://www.matchi.se/facilities/swedenindoorgolf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-slate-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              BOKA NU VIA MATCHI
            </a>
          </div>

          {/* Memberships & Deals */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Greenfeemedlem */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Greenfeemedlem</h3>
                <p className="text-slate-400 text-sm">Vårt mest populära medlemskap!</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-300">
                    <strong className="text-white block mb-1">Small - 1.000 kr/säsong</strong>
                    Low: 120 kr/h | Prime: 190 kr/h
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-300">
                    <strong className="text-white block mb-1">Medium - 2.000 kr/säsong</strong>
                    Low: 80 kr/h | Prime: 120 kr/h
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-300">
                    <strong className="text-white block mb-1">Large - 4.000 kr/säsong</strong>
                    Low: 40 kr/h | Prime: 80 kr/h
                  </div>
                </li>
              </ul>

              <div className="text-xs text-slate-500 mb-6">
                <p>Prime-time = Vardagar 16-21 + Helger 10-18</p>
                <p>Low-time = All övrig tid</p>
              </div>

              <a
                href="https://www.matchi.se/facilities/membership/swedenindoorgolf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 border border-primary text-primary font-semibold rounded hover:bg-primary hover:text-slate-950 transition-colors"
              >
                BLI GREENFEEMEDLEM
              </a>
            </div>

            {/* Guldkort */}
            <div className="bg-gradient-to-br from-yellow-900/30 to-slate-900 p-8 rounded-2xl border border-yellow-500/30 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Users className="w-32 h-32" />
              </div>
              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">Guldkort</h3>
                <p className="text-slate-400 text-sm">Spela obegränsat!</p>
              </div>

              <div className="flex-1 relative z-10">
                <div className="text-4xl font-bold text-white mb-2">3.000 kr<span className="text-lg text-slate-400 font-normal">/mån</span></div>
                <p className="text-slate-300 mb-6">
                  Spela hur mycket du vill. Ingen bindningstid. Gäller 30 dagar åt gången.
                </p>
                
                <ul className="space-y-3 mb-8">
                   <li className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-primary" />
                    Obegränsat spel
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-primary" />
                    Ingen bindningstid
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-primary" />
                    Förlängs automatiskt
                  </li>
                </ul>
              </div>

              <a
                href="https://www.matchi.se/facilities/membership/swedenindoorgolf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 bg-yellow-500 text-slate-900 font-bold rounded hover:bg-yellow-400 transition-colors relative z-10"
              >
                KÖP GULDKORT
              </a>
            </div>

            {/* Klippkort & Student */}
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold mb-4 text-primary">Klippkort & Bagskåp</h3>
                <ul className="space-y-2 text-sm text-slate-300 mb-4">
                  <li className="flex justify-between"><span>1000 kr</span> <span className="text-white font-semibold flex items-center gap-1">1150 kr <span className="text-xs text-slate-500">krediter</span></span></li>
                  <li className="flex justify-between"><span>2000 kr</span> <span className="text-white font-semibold flex items-center gap-1">2500 kr <span className="text-xs text-slate-500">krediter</span></span></li>
                   <li className="flex justify-between"><span>3000 kr</span> <span className="text-white font-semibold flex items-center gap-1">4000 kr <span className="text-xs text-slate-500">krediter</span></span></li>
                  <li className="flex justify-between"><span>5000 kr</span> <span className="text-white font-semibold flex items-center gap-1">7500 kr <span className="text-xs text-slate-500">krediter</span></span></li>
                </ul>
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-sm text-slate-300 flex justify-between items-center">
                    <span className="max-w-[150px]">Bagskåp (t.o.m 2026-06-30)</span>
                    <span className="text-white font-semibold">700 kr</span>
                  </p>
                </div>
                 <a
                  href="https://www.matchi.se/facilities/swedenindoorgolf#coupon_33559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm py-2 mt-4 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors"
                >
                  Köp Klippkort/Bagskåp
                </a>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold mb-2 text-primary">Junior / Student / Senior</h3>
                <p className="text-2xl font-bold text-white mb-2">2.500 kr<span className="text-sm text-slate-400 font-normal">/säsong</span></p>
                 <div className="text-sm text-slate-300 mb-4">
                  <p className="flex justify-between"><span>Low-time:</span> <span className="text-white">50 kr/h</span></p>
                  <p className="flex justify-between"><span>Prime-time:</span> <span className="text-white">100 kr/h</span></p>
                   <p className="text-xs text-slate-500 mt-2">Gäller till 1/10 2026. För dig under 21, student eller 65+.</p>
                </div>
                <a
                  href="https://www.matchi.se/facilities/membership/swedenindoorgolf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm py-2 border border-slate-600 rounded hover:bg-slate-800 transition-colors"
                >
                  Bli Medlem
                </a>
              </div>
            </div>
          </div>
          
           <div className="mt-16 p-8 bg-slate-900/30 rounded-2xl border border-slate-800/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              Om Medlemskap
            </h3>
            <div className="prose prose-invert text-slate-300 max-w-none">
              <p className="mb-4">
                Vi tycker det är roligt när man spelar flera tillsammans på samma bana – golf är ju allra bäst i gott sällskap!
                Vi vill samtidigt förtydliga att alla medlemskap är personliga.
              </p>
              <p className="mb-4">
                Om ni är flera som spelar ihop behöver ni därför dela upp tiden på flera bokningar. Till exempel: om ni är två personer som spelar i 1 timme tillsammans ska ni boka och betala för 30 minuter var.
                På det sättet blir det rättvist och fungerar bra för alla medlemmar.
              </p>
               <p>
                Alla medlemskap förlängs automatiskt om de inte sägs upp 1 mån i förväg via mail till info@swedenindoorgolf.se
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
