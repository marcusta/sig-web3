'use client';

import { Contact } from '@/components/home/Contact';
import { PageHeader } from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import { PlayCircle, AlertCircle, FileText, ExternalLink, Settings, Download, Video, ShoppingCart, Users, Flag, Gamepad2, Target, Keyboard, BarChart3, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const quickSteps = [
  {
    num: 1,
    text: 'Starta genom att klicka på Practice → Driving Range'
  },
  {
    num: 2,
    text: 'Placera bollen i den svarta rutan, kontrollera att det bara finns EN boll och inga andra föremål i det rödmarkerade området, se bilderna nedan för matta 1-2 och 4-8, samt matta 3.'
  },
  {
    num: 3,
    text: 'Kontrollera att det står SLÅ i den GRÖNA rutan på skärmen och börja spela. Om det står INGEN BOLL på skärmen gå vidare till punkt 4.'
  },
  {
    num: 4,
    text: 'Tryck på Windows-symbolen och starta om datorn. Vänta till GSPro menyn visas på skärm innan du fortsätter.'
  },
  {
    num: 5,
    text: 'Om det står READY i den GRÖNA rutan men slag registreras inte – Täck över alla fyra kamerorna på GCQuad, se den GULA rutan i bild 1, i några sekunder för att återställa vitbalansen. Detta kan inträffa när du ställer dig i vita rutan med vita skor eller motsvarande. Tips: undvik att stå/gå i den vita rutan, det gäller endast matta 1-2 och 4-8.'
  },
  {
    num: 6,
    text: 'Om det inte fungerar boka en annan bana och fortsätt på den, meddela oss via mail, vi kompenserar dig för den extra bokningen.'
  }
];

const slaEttSlagTips = [
  'Placera bollen, se Första hjälpen nedan',
  'SLÅ och INGEN BOLL se Första hjälpen nedan',
  'Sikta parallellt efter mattan som är placerad rakt mot duken'
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
  { name: 'Back Spin', description: 'Mäter bollens rotation bakåt i varv per minut (RPM).' },
  { name: 'Ball Speed', description: 'Mäter bollens hastighet direkt efter träffen.' },
  { name: 'Carry (Game)', description: 'Den totala luftfärden bollen färdas, inkluderat alla faktorer i spelet som väder, vind och höjdskillnader.' },
  { name: 'Carry (Raw)', description: 'Luftfärden bollen skulle haft på en helt plan yta utan vind.' },
  { name: 'Club AoA (Angle of Attack)', description: 'Den vertikala vinkeln som klubbhuvudet rör sig mot bollen vid träff (uppåt/nedåt).' },
  { name: 'Club Closure Rate', description: 'Hastigheten som klubbhuvudet vrider sig vid träffen.' },
  { name: 'Club Face H Impact', description: 'Den horisontella träffpunkten på klubbladet (tå eller häl).' },
  { name: 'Club Face V Impact', description: 'Den vertikala träffpunkten på klubbladet (högt eller lågt).' },
  { name: 'Club FaceToPath', description: 'Visar hur öppet eller stängt klubbladet är i förhållande till din svingbana.' },
  { name: 'Club Lie', description: 'Vinkeln mellan klubbladet och marken i träffögonblicket.' },
  { name: 'Club Loft', description: 'Den faktiska vertikala vinkeln på klubbladet vid träffen.' },
  { name: 'Club Path', description: 'Den horisontella riktningen som klubbhuvudet rör sig precis före träffen (utifrån-in eller inifrån-ut).' },
  { name: 'Club Speed', description: 'Klubbhuvudets hastighet vid träffögonblicket.' },
  { name: 'Club Spin Loft', description: 'Skillnaden mellan den dynamiska loften och anfallsvinkeln (AoA).' },
  { name: 'Descent Angle', description: 'Vinkeln som bollen faller med när den landar.' },
  { name: 'Dist To Pin', description: 'Avståndet från bollens nuvarande position till hålet.' },
  { name: 'HLA (Horizontal Launch Angle)', description: 'Vilken riktning bollen startar åt horisontellt (höger/vänster).' },
  { name: 'Offline (Raw)', description: 'Hur långt från det tänkta målet bollen landar (i sidled).' },
  { name: 'Peak Height', description: 'Den högsta höjden bollen når under sin luftfärd.' },
  { name: 'Side Spin', description: 'Mäter bollens sidorotation (skruv åt vänster eller höger) i RPM.' },
  { name: 'Smash Factor', description: 'Förhållandet mellan bollhastighet och klubbhastighet (visar hur effektiv träffen är).' },
  { name: 'Total Length', description: 'Det totala avståndet från där bollen slogs till där den stannar helt.' },
  { name: 'VLA (Vertical Launch Angle)', description: 'Den initiala vinkeln bollen startar uppåt med.' }
];

const playerInstructions = [
  { title: 'Lägg till spelare', description: 'Tryck på "+"-knappen i nedre vänstra hörnet av menyn "Players Settings". Du kan lägga till upp till 8 lokala spelare.' },
  { title: 'Ta bort spelare', description: 'Använd "X" eller minus-ikonen vid spelarprofilen i listan.' },
  { title: 'Höger/Vänster', description: 'För varje spelare kan du välja om de spelar höger- eller vänsterhänt. På bana 3 (vår multiswipe-bana) är detta extra viktigt för att launch monitorn ska läsa rätt.' },
  { title: 'Turordning', description: 'En stjärna (*) bredvid ett namn i spelarlistan betyder att spelaren redan har slagit sitt slag. Du kan klicka på valfritt namn i listan för att hoppa till den spelarens tur.' }
];

const startRoundSteps = [
  {
    title: 'Välj Bana',
    description: 'Bläddra genom biblioteket av världsberömda banor.'
  },
  {
    title: 'Matchinställningar',
    items: [
      { label: 'Tee', text: 'Välj tee baserat på din önskade svårighetsgrad/längd.' },
      { label: 'Puttning', text: 'Välj mellan Auto-putt (datorn avgör baserat på avstånd), Gimme circle (hålet räknas som sänkt inom en viss radie, t.ex. 2-3 meter), eller Manuell puttning.' }
    ]
  },
  {
    title: 'Mulligans',
    description: 'Kan aktiveras i inställningarna om man vill kunna ta om ett slag (använd CTRL + M).'
  },
  {
    title: 'Väder & Förhållanden',
    description: 'Du kan ställa in vindstyrka, hårdhet på fairways och hastighet på greenerna (Stimp).'
  }
];

const gameplayShortcuts = [
  { category: 'Genvägar (Viktigt!)', items: [
    { key: 'TAB', description: 'Se en fullständig lista över alla tangentbordsgenvägar direkt på skärmen.' }
  ]},
  { category: 'Sikta & Kamera', items: [
    { key: 'A', description: 'Återställ siktet mot det rekommenderade målet.' },
    { key: 'F3', description: 'Växla mellan boll, siktpunkt och hålet.' },
    { key: 'F5', description: 'Free Look - flyga fritt (använd W/A/S/D + högerklick).' },
    { key: 'R', description: 'Öppna "Range Finder" (avståndsmätare).' }
  ]},
  { category: 'Minikartan', items: [
    { key: 'Q', description: 'Zooma in på minikartan.' },
    { key: 'W', description: 'Zooma ut på minikartan.' },
    { key: 'S', description: 'Ändra storlek på kartan.' },
    { key: 'Y', description: 'Se höjdkurvor (slope) på greenen (Heatmap).' }
  ]}
];

const liePaverkan = [
  { title: 'Uppför/Nedför', description: 'Påverkar bollens höjd och längd.' },
  { title: 'Sido-lutning', description: 'Om det står "Left" betyder det att bollen ligger under fötterna och tenderar att starta åt vänster.' }
];

const trainingModes = [
  {
    title: 'Driving Range',
    items: [
      'Välj olika målflaggor genom att klicka på dem eller ändra avståndet manuellt.',
      'Se din slagstatistik i listform för att identifiera mönster i din träning.'
    ]
  },
  {
    title: 'Practice on Course',
    items: [
      'Gör det möjligt att träna på specifika slag var som helst på en bana.',
      'Byt hål: Hoppa mellan olika hål för att träna specifika situationer.',
      'Flytta bollen: Klicka på marken eller kartan för att placera bollen precis där du vill träna.'
    ]
  },
  {
    title: 'Skills Challenge',
    items: [
      'Utmana dig själv i precisionsövningar mot flaggan.'
    ]
  }
];

const advancedDataInfo = [
  { title: 'Practice', description: 'I rangeläge kan du visa upp till 24 olika mätvärden samtidigt.' },
  { title: 'Spel', description: 'Under en vanlig runda visas upp till 12 mätvärden.' },
  { title: 'Viktiga värden', items: [
    { label: 'HLA (Horizontal Launch Angle)', text: 'Vilket håll bollen startar åt (höger/vänster).' },
    { label: 'VLA (Vertical Launch Angle)', text: 'Bollens startvinkel i höjdled.' },
    { label: 'Smash Factor', text: 'Effektiviteten i träffen (Bollhastighet / Klubbhastighet).' },
    { label: 'Spin Axis', text: 'Bollens skruvaxel (bestämmer om det är en Draw/Fade/Hook/Slice).' },
    { label: 'Carry', text: 'Hur långt bollen flyger i luften.' }
  ]}
];

const quickNavLinks = [
  { id: 'practice', label: 'Träna på Rangen', icon: Target },
  { id: 'play-round', label: 'Spela en Runda', icon: Flag },
  { id: 'compete', label: 'Tävla & Utmaningar', icon: Trophy },
  { id: 'troubleshooting', label: 'Felsökning', icon: AlertCircle },
  { id: 'understand-data', label: 'Förstå Data', icon: BarChart3 },
  { id: 'advanced', label: 'Avancerat', icon: Settings }
];

export default function SupportPage() {
  const [selectedMat, setSelectedMat] = useState<'mat1-2' | 'mat3'>('mat1-2');
  const [expandedDataField, setExpandedDataField] = useState<number | null>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; // Account for header (80px) + sticky nav height (~100px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <PageHeader
        title="Support"
        subtitle="Här hittar du snabbhjälp, manualer och kontaktuppgifter för teknisk support."
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />

      {/* Sticky Quick Navigation */}
      <div className="sticky top-20 z-40 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-slate-400 mb-3 font-medium">Vad vill du göra?</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {quickNavLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:border-primary/30 hover:text-primary transition-all"
                >
                  <link.icon size={16} className="shrink-0" />
                  <span className="truncate">{link.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TRÄNA PÅ RANGEN */}
      <section id="practice" className="py-20 border-b border-slate-900 scroll-mt-44">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
                <Target size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Träna på Rangen</h2>
                <p className="text-slate-400 text-lg">Kom igång med driving range och träningslägen</p>
              </div>
            </div>

            {/* Quick Start Video */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <PlayCircle className="text-primary" size={28} />
                Quick Start Video
              </h3>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
                <video
                  controls
                  className="w-full"
                  poster={`${basePath}/support/mat-1-2.jpg`}
                  preload="metadata"
                  playsInline
                >
                  <source src={`${basePath}/support/sig-start.mp4`} type="video/mp4" />
                  Din webbläsare stödjer inte videoformatet.
                </video>
              </div>
            </div>

            {/* Slå ett slag */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6">Slå ett slag</h3>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
                <ul className="space-y-4">
                  {slaEttSlagTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-300">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Träningslägen */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Träningslägen</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trainingModes.map((mode, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-bold text-white mb-4">{mode.title}</h4>
                    <ul className="space-y-2">
                      {mode.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPELA EN RUNDA */}
      <section id="play-round" className="py-20 bg-slate-900/30 border-b border-slate-900 scroll-mt-44">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
                <Flag size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Spela en Runda</h2>
                <p className="text-slate-400 text-lg">Allt du behöver veta för att spela en hel bana</p>
              </div>
            </div>

            {/* Spelare - Lägga till/Ta bort */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="text-primary" size={28} />
                Spelare - Lägga till/Ta bort
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {playerInstructions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <h4 className="font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Starta en runda */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6">Starta en runda</h3>
              <div className="space-y-6">
                {startRoundSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold shrink-0 text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-2">{step.title}</h4>
                        {step.description && (
                          <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                        )}
                        {step.items && (
                          <ul className="space-y-2 mt-2">
                            {step.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-slate-400 text-sm leading-relaxed">
                                <span className="text-primary font-medium">{item.label}:</span> {item.text}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Under spelet - Kontroller */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Keyboard className="text-primary" size={28} />
                Under spelet - Kontroller
              </h3>
              <div className="space-y-8 mb-12">
                {gameplayShortcuts.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h4 className="text-lg font-bold text-white mb-4">{category.category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-primary/30 transition-colors"
                        >
                          <kbd className="px-3 py-2 bg-slate-800 rounded-lg text-primary font-mono font-bold text-sm min-w-[60px] text-center">
                            {item.key}
                          </kbd>
                          <span className="text-slate-400 text-sm">{item.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Lie & Påverkan */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
                <h4 className="text-lg font-bold text-white mb-4">Lie & Påverkan</h4>
                <p className="text-slate-400 text-sm mb-4">Information om hur bollen ligger finns längst ner på minikartan.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {liePaverkan.map((item, index) => (
                    <div key={index} className="bg-slate-950/50 rounded-xl p-4">
                      <h5 className="font-medium text-primary mb-1">{item.title}</h5>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-slate-950/50 rounded-xl p-4">
                  <h5 className="font-medium text-primary mb-1">Puttning</h5>
                  <p className="text-slate-400 text-sm">Använd heatmap (Y) för att läsa greenen. Siktet justeras med musen eller piltangenterna.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TÄVLA & UTMANINGAR */}
      <section id="compete" className="py-20 border-b border-slate-900 scroll-mt-44">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500">
                <Trophy size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Tävla & Utmaningar</h2>
                <p className="text-slate-400 text-lg">Tournaments, challenges och online-matcher</p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
              <Trophy size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Tävlingslägen i GSPro</h3>
              <div className="space-y-4 text-slate-300 text-left max-w-2xl mx-auto">
                <p><strong className="text-primary">TOURNAMENTS:</strong> Delta i klubbtävlingar eller onlinetävlingar mot spelare globalt.</p>
                <p><strong className="text-primary">ONLINE MATCH:</strong> Spela head-to-head i realtid mot spelare var som helst i världen.</p>
                <p><strong className="text-primary">SKILLS CHALLENGE:</strong> Utmana dig själv i precisionsövningar som närmast flagga och längsta drive.</p>
              </div>
              <div className="mt-8">
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-slate-950 font-bold rounded-xl hover:bg-yellow-400 transition-colors"
                >
                  Läs mer i FAQ
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FELSÖKNING */}
      <section id="troubleshooting" className="py-20 bg-slate-900/30 border-b border-slate-900 scroll-mt-44">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500">
                <AlertCircle size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Felsökning</h2>
                <p className="text-slate-400 text-lg">När något inte fungerar som det ska</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/20 to-slate-950 border-2 border-red-900/30 rounded-3xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertCircle className="text-red-500" size={28} />
                FÖRSTA HJÄLPEN ✓
              </h3>
              <div className="space-y-6">
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
            </div>

            {/* Mat Setup Images */}
            <div>
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
                  src={selectedMat === 'mat1-2' ? `${basePath}/support/mat-1-2.jpg` : `${basePath}/support/mat-3.jpg`}
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

      {/* FÖRSTÅ DATA */}
      <section id="understand-data" className="py-20 border-b border-slate-900 scroll-mt-44">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
                <BarChart3 size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Förstå Data</h2>
                <p className="text-slate-400 text-lg">Vad betyder alla siffror och värden?</p>
              </div>
            </div>

            {/* Data Brickor */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6">Data Brickor</h3>
              <p className="text-slate-400 mb-6">
                Vilka är dom viktigaste och vad betyder dom? Klicka för att se beskrivningar.
              </p>
              <div className="space-y-3">
                {dataFields.map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-primary/30 transition-colors cursor-pointer"
                    onClick={() => setExpandedDataField(expandedDataField === index ? null : index)}
                  >
                    <div className="flex items-center justify-between p-4">
                      <span className="font-medium text-white">{field.name}</span>
                      <span className={cn(
                        "text-slate-500 transition-transform",
                        expandedDataField === index && "rotate-180"
                      )}>▼</span>
                    </div>
                    {expandedDataField === index && (
                      <div className="px-4 pb-4 pt-0">
                        <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800 pt-4">
                          {field.description}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Avancerade Datarutan */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Avancerade Datarutan (Data Tiles)</h3>
              <p className="text-slate-400 mb-6">
                Datarutorna visar din sving- och bolldata efter varje slag.
              </p>
              <div className="space-y-6">
                {advancedDataInfo.map((section, index) => (
                  <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                    <h4 className="font-bold text-white mb-3">{section.title}</h4>
                    {section.description && (
                      <p className="text-slate-400 text-sm">{section.description}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-2 mt-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-slate-400 text-sm">
                            <span className="text-primary font-medium">{item.label}:</span> {item.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANCERAT */}
      <section id="advanced" className="py-20 bg-slate-900/30 border-b border-slate-900 scroll-mt-44">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500">
                <Settings size={32} />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Avancerat</h2>
                <p className="text-slate-400 text-lg">För dig som vill gå djupare</p>
              </div>
            </div>

            {/* Club Markers */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <ShoppingCart className="text-primary" size={28} />
                Club Markers ✓
              </h3>
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mb-8">
                <p className="text-slate-300 leading-relaxed mb-4">
                  <a
                    href="https://www.matchi.se/facilities/swedenindoorgolf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-slate-950 px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Köp club markers
                    <ExternalLink size={16} />
                  </a>
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Du köper dina club markers i vårt bokningssystem Matchi. För att få klubbdata behöver dina golfklubbor märkas upp med Club markers,
                  ett set räcker till +14 klubbor. Du behöver 4 st markeringar per klubba och instruktion hur de skall placeras på klubbladen finns nedan.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  När du har köpt dina club markers kvitterar du ut dem i hallen under bemannade tider (måndag - onsdag, 14 - 20).
                </p>
                <p className="text-primary font-medium mt-4">
                  OBS: För att få bolldata (spela banor) behövs inga club markers!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                  <div className="p-4 border-b border-slate-800">
                    <h4 className="font-bold text-white text-center">Driver, Fairway woods & Hybrid</h4>
                  </div>
                  <Image
                    src={`${basePath}/support/club-marker-woods.png`}
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
                    src={`${basePath}/support/club-marker-iron.png`}
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
                    src={`${basePath}/support/club-marker-putter.png`}
                    alt="Club marker placement for putter"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* GSPro Software */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6">Manual GSPro</h3>
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 mb-8">
                <h4 className="text-xl font-bold text-white mb-6">GSPRO SOFTWARE - ALLMÄNT</h4>
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
                    som närmst flagga och längsta drive. Sammantaget tas utmaningarna och nöjet till en ny nivå. Att flytta spelet inomhus känns plötsligt fullkomligt självklart.
                  </p>
                  <p className="text-primary font-medium">
                    Träna på den virtuella rangen eller träna genom att delta i tävlingar online mot spelare i hela världen.
                    All utrustning hos oss är uppkopplad på nätet så du får inte svårt att finna motstånd om kamraterna stannat hemma.
                  </p>
                  <p className="text-slate-400 italic">
                    Vem vet, möjligen blir du kvar inomhus i sommar...
                  </p>
                </div>
              </div>

              {/* GSPRO Manuals */}
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="text-primary" size={24} />
                GSPRO Manualer
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <h5 className="font-bold text-white">{manual.title}</h5>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{manual.type} DOKUMENT</span>
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-slate-600 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* YouTube Videos */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Video className="text-primary" size={28} />
                Video Clips - YouTube
              </h3>
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
