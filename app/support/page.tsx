'use client';

import { Contact } from '@/components/home/Contact';
import { PageHeader } from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import { PlayCircle, AlertCircle, Info, FileText, ExternalLink, Settings, Download, Video, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const quickSteps = [
  {
    num: 1,
    text: 'Klicka på Practice → Driving Range'
  },
  {
    num: 2,
    text: 'Placera bollen i den svarta rutan, kontrollera att det bara finns EN boll och inga andra föremål i det rödmarkerade området'
  },
  {
    num: 3,
    text: 'Kontrollera att det står SLÅ i den GRÖNA rutan på skärmen och börja spela'
  },
  {
    num: 4,
    text: 'Om det står INGEN BOLL på skärmen, tryck på Windows-symbolen och starta om datorn. Vänta till GSPro menyn visas innan du fortsätter.'
  },
  {
    num: 5,
    text: 'Om det står READY men slag registreras inte – Täck över alla fyra kamerorna på GCQuad i några sekunder för att återställa vitbalansen.'
  },
  {
    num: 6,
    text: 'Om det inte fungerar boka en annan bana och fortsätt på den, meddela oss via mail, vi kompenserar dig för den extra bokningen.'
  }
];

const manuals = [
  {
    title: 'GSPro Quick Start V2',
    url: 'https://www.swedenindoorgolf.se/wp-content/uploads/2024/01/GSPro-Quick-Start-V2.pdf',
    type: 'PDF'
  },
  {
    title: 'GSPro Users Guide V2.0.2',
    url: 'https://www.swedenindoorgolf.se/wp-content/uploads/2024/01/GSPro-Users-Guide-V2.0.2-2.pdf',
    type: 'PDF'
  }
];

const youtubeVideos = [
  {
    title: 'Putting – speed, stimp and BLI',
    url: 'https://www.youtube.com/watch?v=EReyn_3JbwY&t=30s'
  },
  {
    title: 'Data tiles in a round',
    url: 'https://www.youtube.com/watch?v=j3_T5bL08ow&t=30s'
  },
  {
    title: 'Drop menu after a hazard',
    url: 'https://www.youtube.com/watch?v=erzjyNHt4KE&t=30s'
  },
  {
    title: 'Navigating in game',
    url: 'https://www.youtube.com/watch?v=7eJxh0vWMgU&t=30s'
  },
  {
    title: 'Instant replay',
    url: 'https://www.youtube.com/watch?v=ebP0Hzo7chk'
  },
  {
    title: 'Gimme circle and autoputt',
    url: 'https://www.youtube.com/watch?v=TsBnx4CpW2o&t=30s'
  }
];

const dataFields = [
  'Back Spin', 'Ball Speed', 'Carry (Game)', 'Carry (Raw)', 'Club AoA', 'Club Closure Rate',
  'Club Face H Impact', 'Club Face V Impact', 'Club Face To Path', 'Club Lie', 'Club Loft',
  'Club Path', 'Club Speed', 'Club Spin Loft', 'Descent Angle', 'Dist To Pin',
  'HLA – Horizontal Launch Angle', 'Offline (raw)', 'Peak Height', 'Side Spin',
  'Smash Factor', 'Total Length', 'VLA – Vertical Launch Angle'
];

export default function SupportPage() {
  const [selectedMat, setSelectedMat] = useState<'mat1-2' | 'mat3'>('mat1-2');

  return (
    <div className="bg-slate-950 min-h-screen">
      <PageHeader 
        title="Support" 
        subtitle="Här hittar du snabbhjälp, manualer och kontaktuppgifter för teknisk support."
        backgroundImage="/hero-bg.jpg"
      />

      {/* Quick Start Video Section */}
      <section className="py-20 border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <PlayCircle size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Quick Start Video</h2>
                <p className="text-slate-400">Se hur du kommer igång</p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
              <video 
                controls 
                className="w-full"
                poster="/support/mat-1-2.jpg"
              >
                <source src="/support/sig-start.mp4" type="video/mp4" />
                Din webbläsare stödjer inte videoformatet.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* FÖRSTA HJÄLPEN Section */}
      <section className="py-20 border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500">
                <AlertCircle size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">FÖRSTA HJÄLPEN ✓</h2>
                <p className="text-slate-400">Steg-för-steg guide</p>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              {quickSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold shrink-0">
                    {step.num}
                  </div>
                  <p className="text-slate-300 leading-relaxed mt-2">{step.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Mat Setup Images */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Bollplacering per matta</h3>
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSelectedMat('mat1-2')}
                  className={cn(
                    "px-6 py-3 rounded-xl font-medium transition-all",
                    selectedMat === 'mat1-2'
                      ? "bg-primary text-slate-950"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  )}
                >
                  Matta 1-2 och 4-8
                </button>
                <button
                  onClick={() => setSelectedMat('mat3')}
                  className={cn(
                    "px-6 py-3 rounded-xl font-medium transition-all",
                    selectedMat === 'mat3'
                      ? "bg-primary text-slate-950"
                      : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                  )}
                >
                  Matta 3
                </button>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                <Image
                  src={selectedMat === 'mat1-2' ? '/support/mat-1-2.jpg' : '/support/mat-3.jpg'}
                  alt={selectedMat === 'mat1-2' ? 'Matta 1-2 och 4-8' : 'Matta 3'}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Markers Section */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <ShoppingCart size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Club Markers ✓</h2>
                <p className="text-slate-400">För klubbdata behöver du märka upp dina klubbor</p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-12">
              <p className="text-slate-300 leading-relaxed mb-4">
                <a
                  href="https://www.matchi.se/facilities/swedenindoorgolf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Köp club markers här
                </a>
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Du köper dina club markers i vårt bokningssystem Matchi. För att få klubbdata behöver dina golfklubbor märkas upp med Club markers, 
                ett set räcker till +14 klubbor. Du behöver 4 st markeringar per klubba och instruktion hur de skall placeras på klubbladen finns nedan.
              </p>
              <p className="text-slate-300 leading-relaxed">
                När du har köpt dina club markers kvitterar du ut dem i hallen under bemannade tider (måndag - onsdag, 14 - 20).
              </p>
              <p className="text-slate-400 italic mt-4">
                OBS: För att få bolldata (spela banor) behövs inga club markers!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-800">
                  <h4 className="font-bold text-white text-center">Driver, Woods & Hybrid</h4>
                </div>
                <Image
                  src="/support/club-marker-woods.png"
                  alt="Club marker placement for woods"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-800">
                  <h4 className="font-bold text-white text-center">Järn & Wedge</h4>
                </div>
                <Image
                  src="/support/club-marker-iron.png"
                  alt="Club marker placement for irons"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-slate-800">
                  <h4 className="font-bold text-white text-center">Putter</h4>
                </div>
                <Image
                  src="/support/club-marker-putter.png"
                  alt="Club marker placement for putter"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GSPro Software Section */}
      <section className="py-20 border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Settings size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">GSPRO SOFTWARE</h2>
                <p className="text-slate-400">Marknadsledande mjukvara för golf simulator</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 mb-12">
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  GSPRO är marknadsledande mjukvara för golf simulator. GSPRO använder GCQuads data för analys och visualisering. 
                  Kanske världens just nu kraftfullaste kombination designad för professionella club fitting instruktörer och tränare.
                </p>
                <p>
                  Med komplett boll och klubbdata, många visualiseringslägen, enkelheten i användningen och det intuitiva gränssnittet 
                  ges även amatören möjlighet att analysera sitt spel. På köpet ingår även kostnadsfria konton i en molntjänst för 
                  datalagring av alla slag för analys av spelaren själv eller som underlag i samtal med en tränare.
                </p>
                <p>
                  GSPRO innehåller virtuella kopior av några av världens toppbanor, spelappar med olika utmaningar, "skills games" 
                  som närmst flagga och längsta drive. Sammantaget tas utmaningarna och nöjet till en ny nivå.
                </p>
                <p className="text-primary font-medium">
                  Träna på den virtuella rangen eller träna genom att delta i tävlingar online mot spelare i hela världen. 
                  All utrustning hos oss är uppkopplad på nätet så du får inte svårt att finna motstånd om kamraterna stannat hemma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manuals & Data Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Manuals */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <FileText className="text-primary" />
                GSPRO Manualer
              </h3>
              <div className="space-y-4">
                {manuals.map((manual, index) => (
                  <a
                    key={index}
                    href={manual.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-primary/30 hover:bg-slate-800 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-slate-950 transition-colors">
                        <Download size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{manual.title}</h4>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{manual.type} DOKUMENT</span>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-slate-600 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Data Fields */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Settings className="text-primary" />
                Data Brickor
              </h3>
              <p className="text-slate-400 mb-6">
                Vilka är dom viktigaste och vad betyder dom:
              </p>
              <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
                {dataFields.map((field, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-xs font-medium text-slate-400 hover:border-primary/20 hover:text-slate-300 transition-colors"
                  >
                    {field}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 border-b border-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Video size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">VIDEO CLIPS - YOUTUBE</h2>
                <p className="text-slate-400">Hjälpsamma tutorials</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-red-500/30 hover:bg-slate-800 transition-all group"
                >
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors shrink-0">
                    <PlayCircle size={24} className="text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors">
                      {video.title}
                    </h4>
                    <span className="text-xs text-slate-500">YouTube Tutorial</span>
                  </div>
                  <ExternalLink size={18} className="text-slate-600 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver du ytterligare hjälp?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Fyll i formuläret nedan så återkommer vi till dig så snart vi kan. 
            För akuta ärenden i hallen, se anslagstavlan för journummer.
          </p>
        </div>
        <Contact />
      </section>
    </div>
  );
}

