'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Book, Shield, Trophy, Globe, Map, User, Mail, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const faqCategories = [
  {
    id: 'general',
    title: 'Allmänt & Bokning',
    icon: HelpCircle,
    items: [
      {
        question: "Bokningsregler",
        answer: "Avbokning med återbetalning är generellt möjligt fram till sex timmar innan bokad tid. Vid avbokning av tid som betalats med bank-, betal- eller kreditkort tas en avbokningsavgift på 12,50 SEK ut. Sena bokningar (inom 6 timmar före starttid) är ej återbetalningsbara."
      },
      {
        question: "Inför ditt besök hos oss",
        answer: "Kom 15 minuter innan utsatt starttid för att ha tid att värma upp. Du behöver simulatorpeggar, som finns att köpa i shoppen eller i vår kiosk. ANVÄND en ny omarkerad VIT boll och rena skor för inomhusgolf, samt såklart dina egna golfklubbor!"
      },
      {
        question: "Spela samma tid varje vecka?",
        answer: "Vill du ha samma tid varje vecka antingen själv eller om ni är ett golfgäng eller företag är det självklart möjligt. Kontakta johan.asklund@swedenindoorgolf.se med hur ofta och vilken dag/tid ni önskar spela så återkommer vi med offert."
      },
      {
        question: "Hyr hallen",
        answer: "Hyr hela hallen eller flera simulatorer för ett event hos oss. Vi har även avdelare så att ni kan avdela ett antal banor till endast er. Kostar inte mer än ordinarie pris per timme. För större event kontakta oss för mer info och offert på info@swedenindoorgolf.se"
      },
      {
        question: "Företagare?",
        answer: "Vi har särskilda företagspaket. Kontakta oss för mer information på info@swedenindoorgolf.se"
      },
      {
        question: "Friskvårdsbidrag",
        answer: "Sedan 2018 är användning av golfsimulator klassat som friskvård. Det innebär att du kan använda ditt friskvårdsbidrag för att spela hos oss. Hör med din arbetsgivare för mer information. Om du önskar underlag för friskvårdsbidrag, maila oss på info@swedenindoorgolf.se"
      }
    ]
  },
  {
    id: 'technology',
    title: 'Teknik & Simulatorer',
    icon: Globe,
    items: [
      {
        question: "GCQuad & GCFalcon - våra launch monitors",
        answer: "Med GCQuads & GCFalconHawks oöverträffade exakthet, kan vi med bestämdhet påstå att vi kan ta med golfen inomhus och fortfarande erbjuda ett trovärdigt alternativ till det verkliga spelet utomhus. Tekniken bygger på 4 stycken höghastighetskameror som var och en tar 10 000 bilder per sekund. Det är sannolikt den mest avancerade mätutrustningen på marknaden."
      },
      {
        question: "GSPRO software",
        answer: "GSPRO är marknadsledande mjukvara för golf simulator. Den använder GCQuads data för analys och visualisering. Den innehåller virtuella kopior av några av världens toppbanor, spelappar med utmaningar, skills games och onlinetävlingar."
      },
      {
        question: "Golfbanor",
        answer: "Vi har för närvarande över 630 banor att välja mellan. Exempel på kända banor är Augusta National (Georgia Golf Club i GSPRO) och St Andrews Old Course (The Old Course i GSPRO). En fullständig lista finns på simulatorgolftour.com/courses/"
      },
      {
        question: "Spela golf inomhus - Hur går det till?",
        answer: "Du slår från en utslagsmatta in i en duk. Utrustningen fotograferar bollen och beräknar bollflykten med extrem precision. När du når greenen puttad du antingen IRL på vår puttyta eller låter datorn beräkna antalet puttar (Auto Putt)."
      }
    ]
  },
  {
    id: 'club-markers',
    title: 'Club Markers',
    icon: Map,
    items: [
      {
        question: "Vad är Club Markers?",
        answer: "För att få klubbdata (inte bara bolldata) behöver dina klubbor märkas upp med Club markers. Ett set räcker till 14+ klubbor. Du köper dessa via MATCHi och hämtar ut dem i hallen under bemannade tider (mån-ons 14-20)."
      }
    ]
  },
  {
    id: 'history',
    title: 'Om oss & Historia',
    icon: Book,
    items: [
      {
        question: "Vår historia",
        answer: "Sweden Indoor Golf AB bildades hösten 2018 av Johan Asklund och Johan Jigerström. Visionen var att lösa problemet med tillgänglighet under den mörka årstiden och tidsbrist i vardagen genom att erbjuda möjligheten att spela 18 hål på under en timme, året runt."
      },
      {
        question: "Klubbmästare - Sweden Indoor Golf Club",
        answer: "Brutto: 2023 Marcus Andersson, 2022 Marcus Andersson, 2021 Marcus Andersson, 2020 Johan Jigerström. Netto: 2021 Marcus Andersson, 2020 Mike Patterson."
      }
    ]
  },
  {
    id: 'legal',
    title: 'Policy & Cookies',
    icon: Shield,
    items: [
      {
        question: "Cookies",
        answer: "Vi använder cookies för att förbättra din upplevelse, för statistik och marknadsföring. Information som samlas in är anonym och innehåller inga personuppgifter."
      },
      {
        question: "Integritetspolicy",
        answer: "Vi behandlar dina personuppgifter i enlighet med GDPR. Vi samlar in uppgifter för att fullfölja köpeavtal och förbättra vår service. Vi delar INTE vidare personuppgifter till annonsörer i kommersiella syften."
      }
    ]
  }
];

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={cn(
          "text-lg font-semibold transition-colors",
          isOpen ? "text-primary" : "text-white group-hover:text-primary"
        )}>
          {question}
        </span>
        <ChevronDown className={cn(
          "text-slate-500 transition-transform duration-300",
          isOpen && "rotate-180 text-primary"
        )} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-slate-400 leading-relaxed whitespace-pre-wrap">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');

  return (
    <div className="bg-slate-950 min-h-screen">
      <PageHeader 
        title="FAQ" 
        subtitle="Här hittar du svar på de vanligaste frågorna om vår anläggning, teknik och bokning."
        backgroundImage="/hero-bg.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar / Categories */}
            <aside className="lg:w-1/3 xl:w-1/4">
              <div className="sticky top-24 space-y-2">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 ml-4">Kategorier</h3>
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all",
                      activeCategory === category.id 
                        ? "bg-primary text-slate-950 font-bold shadow-lg shadow-primary/20" 
                        : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    )}
                  >
                    <category.icon size={20} />
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Content Area */}
            <main className="lg:w-2/3 xl:w-3/4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12">
                {faqCategories.find(c => c.id === activeCategory)?.items.map((item, index) => (
                  <AccordionItem key={index} question={item.question} answer={item.answer} />
                ))}

                {activeCategory === 'club-markers' && (
                   <div className="mt-8 p-6 bg-slate-950 rounded-2xl border border-slate-800">
                      <p className="text-sm text-slate-400 mb-6 italic">
                        Instruktion för placering av Club Markers (Drivers, Järn & Putters).
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[4/5] bg-slate-800 rounded-xl animate-pulse flex items-center justify-center text-slate-500">
                          Diagram: Woods
                        </div>
                        <div className="aspect-[4/5] bg-slate-800 rounded-xl animate-pulse flex items-center justify-center text-slate-500">
                          Diagram: Järn
                        </div>
                        <div className="aspect-[4/5] bg-slate-800 rounded-xl animate-pulse flex items-center justify-center text-slate-500">
                          Diagram: Putter
                        </div>
                      </div>
                   </div>
                )}
              </div>

              {/* Contact CTA */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Hittar du inte det du letar efter?</h3>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  Vår support är öppen och hjälper dig gärna med frågor om bokningar, teknik eller medlemskap.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/support" 
                    className="px-8 py-3 bg-primary text-slate-950 font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/20"
                  >
                    Kontakta Support
                  </a>
                  <a 
                    href="mailto:info@swedenindoorgolf.se" 
                    className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-2"
                  >
                    <Mail size={18} />
                    Skicka E-post
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

