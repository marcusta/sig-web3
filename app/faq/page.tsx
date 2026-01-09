'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Book, Shield, Trophy, Globe, Map, Users, Zap, BarChart3, Wrench, Building2, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const faqCategories = [
  {
    id: 'getting-started',
    title: 'Kom igång',
    icon: UserCheck,
    items: [
      {
        question: "Jag har aldrig spelat golf förut, kan jag ändå prova?",
        answer: "Absolut! Många av våra besökare är helt nya på golf. Simulatorn är ett perfekt sätt att prova på golf i en trygg miljö. Vi rekommenderar att börja med Practice-läget på driving range för att vänja dig vid att slå bollen."
      },
      {
        question: "Behöver jag egna golfklubbor?",
        answer: "Ja, du behöver ta med egna golfklubbor. Vi har tyvärr inte utlåning av klubbor för tillfället. Om du är nybörjare och inte har egna klubbor, kontakta oss på info@swedenindoorgolf.se så kan vi hjälpa dig komma i kontakt med lokala golfaffärer."
      },
      {
        question: "Inför ditt besök hos oss",
        answer: "Kom 15 minuter innan utsatt starttid för att ha tid att värma upp. Du behöver simulatorpeggar, som finns att köpa i shoppen eller i vår kiosk. ANVÄND en ny omarkerad VIT boll och rena skor för inomhusgolf, samt såklart dina egna golfklubbor!"
      },
      {
        question: "Hur lång tid tar det att spela 18 hål?",
        answer: "En stor fördel med indoor golf är hastigheten! En runda på 18 hål tar vanligtvis 45-60 minuter beroende på antal spelare och om ni använder auto-putt eller puttar manuellt. Perfekt för den som har ont om tid!"
      },
      {
        question: "Hur många kan spela samtidigt?",
        answer: "Vi har 8 simulatorer med plats för upp till 4 spelare per simulator. Det innebär att vi kan ta emot upp till 32 spelare samtidigt i hela anläggningen."
      },
      {
        question: "Vad är skillnaden mellan Practice och att spela en bana?",
        answer: "I Practice-läget tränar du på driving range där du kan slå hur många bollar du vill mot olika mål och se detaljerad data för varje slag. När du spelar en bana (Local Match) spelar du en komplett golfrunda med 18 hål där varje slag räknas och du får ett totalt score."
      }
    ]
  },
  {
    id: 'booking-pricing',
    title: 'Bokning & Priser',
    icon: HelpCircle,
    items: [
      {
        question: "Hur bokar jag en tid?",
        answer: "Du bokar enkelt via vårt bokningssystem MATCHi. Gå till www.matchi.se/facilities/swedenindoorgolf eller ring 010-405 88 00. Du kan boka upp till 14 dagar i förväg som icke-medlem, och längre om du är medlem."
      },
      {
        question: "Vad kostar det att spela?",
        answer: "Priser varierar beroende på tid och dag. Se vår fullständiga prislista på /prislista-sidan. Vi erbjuder både klippkort, medlemskap och timbokning. Medlemmar får rabatterade priser."
      },
      {
        question: "Bokningsregler",
        answer: "Avbokning med återbetalning är generellt möjligt fram till sex timmar innan bokad tid. Vid avbokning av tid som betalats med bank-, betal- eller kreditkort tas en avbokningsavgift på 12,50 SEK ut. Sena bokningar (inom 6 timmar före starttid) är ej återbetalningsbara."
      },
      {
        question: "Kan jag ändra min bokning?",
        answer: "Ja, du kan ändra din bokning via MATCHi upp till 6 timmar innan starttid. Logga in på ditt konto och hantera dina bokningar där. Vid frågor, kontakta oss på 010-405 88 00."
      },
      {
        question: "Vad händer om jag kommer för sent?",
        answer: "Din bokade tid börjar räknas oavsett när du kommer. Om du är sen, förkortas din speltid motsvarande. Vi rekommenderar att komma 15 minuter innan för att hinna förbereda dig i lugn och ro."
      },
      {
        question: "Spela samma tid varje vecka?",
        answer: "Vill du ha samma tid varje vecka antingen själv eller om ni är ett golfgäng eller företag är det självklart möjligt. Kontakta johan.asklund@swedenindoorgolf.se med hur ofta och vilken dag/tid ni önskar spela så återkommer vi med offert."
      },
      {
        question: "Hyr hallen för event",
        answer: "Hyr hela hallen eller flera simulatorer för ett event hos oss. Vi har även avdelare så att ni kan avdela ett antal banor till endast er. Kostar inte mer än ordinarie pris per timme. För större event kontakta oss för mer info och offert på info@swedenindoorgolf.se"
      }
    ]
  },
  {
    id: 'membership',
    title: 'Medlemskap',
    icon: Users,
    items: [
      {
        question: "Vilka medlemskap finns?",
        answer: "Vi erbjuder flera olika medlemskapsalternativ anpassade efter hur mycket du spelar. Se alla våra medlemskap och priser på vår prislista (/prislista). Medlemmar får rabatterade timpriser och kan boka längre i förväg."
      },
      {
        question: "Vad ingår i medlemskapet?",
        answer: "Som medlem får du rabatterade priser på all speltid, möjlighet att boka längre i förväg än icke-medlemmar, samt tillgång till våra medlemstävlingar och community. Vissa medlemskap inkluderar även ett visst antal timmar per månad."
      },
      {
        question: "Hur blir jag medlem?",
        answer: "Du kan teckna medlemskap direkt via vårt bokningssystem MATCHi eller kontakta oss på info@swedenindoorgolf.se. Medlemskapet aktiveras direkt efter betalning."
      },
      {
        question: "Kan jag prova innan jag blir medlem?",
        answer: "Absolut! Du kan boka och spela som icke-medlem först för att testa anläggningen. Många väljer att bli medlemmar efter att ha provat på och insett hur mycket de använder faciliteterna."
      },
      {
        question: "Friskvårdsbidrag",
        answer: "Sedan 2018 är användning av golfsimulator klassat som friskvård. Det innebär att du kan använda ditt friskvårdsbidrag för att spela hos oss. Hör med din arbetsgivare för mer information. Om du önskar underlag för friskvårdsbidrag, maila oss på info@swedenindoorgolf.se"
      },
      {
        question: "Företagsmedlemskap",
        answer: "Vi har särskilda företagspaket för företag som vill erbjuda sina anställda golf som friskvård eller teambuilding. Kontakta oss för mer information på info@swedenindoorgolf.se"
      }
    ]
  },
  {
    id: 'play-practice',
    title: 'Spela & Träna',
    icon: Trophy,
    items: [
      {
        question: "Vilka spellägen finns?",
        answer: "GSPRO erbjuder flera lägen:\n• LOCAL MATCH - Spela en komplett bana med 1-4 spelare\n• PRACTICE - Driving range, träna på bana, eller skills challenge\n• TOURNAMENTS - Delta i klubbtävlingar eller onlinetävlingar\n• ONLINE MATCH - Spela head-to-head mot spelare var som helst i världen"
      },
      {
        question: "Hur fungerar putting?",
        answer: "När du når greenen har du tre alternativ: 1) Putta IRL på vår ~50 kvm stora puttyta, 2) Låt datorn beräkna automatiskt (Auto Putt), eller 3) Putta manuellt på simulatorn. Du kan välja puttmetod innan varje runda startar."
      },
      {
        question: "Kan barn spela?",
        answer: "Ja! Golf är en sport för alla åldrar. Vi rekommenderar att barn under 12 år har en vuxen med sig som kan hjälpa till med tekniken och säkerheten. Kom ihåg att barnen behöver egna klubbor i rätt storlek."
      },
      {
        question: "SimulatorGolfTour (SGT) - Onlinetävlingar",
        answer: "SimulatorGolfTour (SGT) är plattformen vi använder för onlinetävlingar. För att komma igång, registrera dig på simulatorgolftour.com/register. Du hittar guider och YouTube-tutorials på SGT Getting Started: simulatorgolftour.com/getting-started. För HobbyTouren Indoor, se vår tävlingssida för mer information."
      },
      {
        question: "Vilka golfbanor kan jag spela?",
        answer: "Vi har för närvarande över 630 banor att välja mellan. Exempel på kända banor är Augusta National (Georgia Golf Club i GSPRO) och St Andrews Old Course (The Old Course i GSPRO). En fullständig lista finns på simulatorgolftour.com/courses/"
      },
      {
        question: "Hur startar jag en runda?",
        answer: "Välj LOCAL MATCH från huvudmenyn, välj bana och tee, lägg till spelare, sätt matchinställningar (puttning, väder, mulligans), och tryck Start. Detaljerade instruktioner finns på vår Support-sida under 'Spela en Runda'."
      }
    ]
  },
  {
    id: 'data-analysis',
    title: 'Data & Analys',
    icon: BarChart3,
    items: [
      {
        question: "Vilken data får jag se?",
        answer: "GCQuad mäter omfattande bolldata (hastighet, spin, launch angle, carry) och klubbdata (klubbhastighet, slag vinkel, träffpunkt). I Practice-läge kan du visa upp till 24 olika mätvärden samtidigt. Se alla databrickor och deras betydelse på vår Support-sida."
      },
      {
        question: "Vad betyder Ball Speed, Carry, Spin?",
        answer: "Ball Speed = bollens hastighet direkt efter träff. Carry = luftfärden bollen färdas. Back Spin = bollens rotation bakåt i RPM. Side Spin = sidorotation. Smash Factor = förhållandet bollhastighet/klubbhastighet (effektivitet). För alla 23 databrickor, se Support-sidan under 'Förstå Data'."
      },
      {
        question: "Behöver jag Club Markers för att se data?",
        answer: "NEJ! För bolldata (som är det viktigaste) behövs INGA club markers. Du kan spela banor och se bollens hastighet, spin, carry, etc. Club markers behövs endast om du vill ha detaljerad KLUBB-data som klubbhastighet, träffvinkel, och träffpunkt på bladet."
      },
      {
        question: "Hur sparar jag min träningsdata?",
        answer: "GSPRO inkluderar kostnadsfria konton i en molntjänst där alla dina slag sparas automatiskt. Du kan logga in och analysera din historik, jämföra prestationer över tid, och dela data med en tränare."
      },
      {
        question: "Kan jag få coachning eller lektioner?",
        answer: "Kontakta oss på info@swedenindoorgolf.se för information om tillgängliga coacher och instruktörer som kan hjälpa dig analysera din data och förbättra ditt spel."
      },
      {
        question: "Vad är Skills Challenge?",
        answer: "Skills Challenge är precisionsövningar där du utmanas att träffa specifika mål - till exempel närmast flagga eller längsta drive. Perfekt för att tävla mot dig själv eller vänner och utveckla specifika delar av ditt spel."
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Felsökning',
    icon: Wrench,
    items: [
      {
        question: "Simulatorn registrerar inte mitt slag",
        answer: "1) Kontrollera att det står SLÅ (inte INGEN BOLL) på skärmen. 2) Se till att det bara finns EN boll i den svarta rutan och inga andra föremål i det rödmarkerade området. 3) Om det står READY men inget händer, täck över alla fyra kamerorna på GCQuad i några sekunder för att återställa vitbalansen. Fullständig felsökningsguide finns på Support-sidan."
      },
      {
        question: "Det står 'INGEN BOLL' fast bollen ligger rätt",
        answer: "Tryck på Windows-symbolen och starta om datorn. Vänta tills GSPro-menyn visas på skärmen innan du fortsätter. Om problemet kvarstår, kontrollera att bollen är VIT och omarkerad, samt att den ligger exakt i den svarta rutan."
      },
      {
        question: "Skärmen är frusen eller datorn har kraschat",
        answer: "Tryck på Windows-symbolen och starta om datorn. Vänta tills GSPro-menyn visas helt innan du börjar spela igen. Om problemet uppstår upprepade gånger, kontakta oss direkt."
      },
      {
        question: "Bollen flyger fel väg eller konstigt",
        answer: "1) Kontrollera att du använder en VIT omarkerad boll. 2) Se till att inga föremål (klubbor, väskor, etc.) ligger i det rödmarkerade området. 3) Kontrollera i spelarlistan att rätt spelare är vald och att höger/vänster-inställningen stämmer. 4) På matta 1-2 och 4-8: undvik att stå i den vita rutan."
      },
      {
        question: "Vem kontaktar jag vid tekniska problem?",
        answer: "Om du inte kan lösa problemet själv med vår felsökningsguide: 1) Under bemannade tider (mån-ons 14-20): kontakta personalen i hallen direkt. 2) För akuta ärenden: se anslagstavlan i hallen för jourtelefonnummer. 3) För icke-akuta frågor: maila info@swedenindoorgolf.se"
      },
      {
        question: "Problemet löste sig inte - vad gör jag?",
        answer: "Om inget fungerar: boka en annan simulator/bana och fortsätt spela där. Meddela oss via info@swedenindoorgolf.se så kompenserar vi dig för den extra bokningen eller ger dig en ny tid. Ta gärna skärmbild/foto av felet om möjligt."
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
        answer: "Club Markers är små reflekterande klistermärken som sätts på klubbladen. De gör att GCQuad-kamerorna kan mäta detaljerad klubbdata (klubbhastighet, träffvinkel, träffpunkt). OBS: Du behöver INTE club markers för att spela banor - bolldata fungerar utan dem!"
      },
      {
        question: "Måste jag ha Club Markers?",
        answer: "NEJ! För bolldata (hastighet, carry, spin, etc.) och för att spela banor behövs INGA club markers. Club markers behövs endast om du vill ha avancerad klubbdata för träning och club fitting - till exempel klubbhastighet, anfallsvinkel, och var på bladet du träffar bollen."
      },
      {
        question: "Hur köper jag Club Markers?",
        answer: "Du köper Club Markers via vårt bokningssystem MATCHi på matchi.se/facilities/swedenindoorgolf. Ett set räcker till 14+ klubbor (4 markeringar per klubba). När du köpt dem kvitterar du ut dem i hallen under bemannade tider (måndag-onsdag, 14-20)."
      },
      {
        question: "Hur mycket kostar Club Markers?",
        answer: "Se aktuellt pris i MATCHi-bokningssystemet under 'Produkter' eller kontakta oss på info@swedenindoorgolf.se. Ett set räcker till hela ditt klubbset (14+ klubbor)."
      },
      {
        question: "Hur applicerar jag Club Markers?",
        answer: "Du behöver 4 markeringar per klubba. Placeringen varierar beroende på klubbtyp:\n• Driver/Woods/Hybrid - se bild på Support-sidan\n• Järn/Wedge - se bild på Support-sidan\n• Putter - se bild på Support-sidan\n\nDetaljerade instruktioner med bilder finns på vår Support-sida under 'Avancerat > Club Markers'."
      }
    ]
  },
  {
    id: 'facility',
    title: 'Anläggningen',
    icon: Building2,
    items: [
      {
        question: "Var ligger anläggningen?",
        answer: "Sweden Indoor Golf\nIndustrigatan 5\n582 77 Linköping\n\nVi ligger i Linköping med god tillgänglighet både med bil och kollektivtrafik."
      },
      {
        question: "Finns det parkering?",
        answer: "Kontakta oss på info@swedenindoorgolf.se för information om parkeringsmöjligheter i området."
      },
      {
        question: "Vilka faciliteter finns på plats?",
        answer: "Vi har 8 simulatorer, en ~50 kvm puttyta för manuell puttning, kiosk där du kan köpa simulatorpeggar och dryck. Kontakta oss för mer detaljerad information om våra faciliteter."
      },
      {
        question: "Kan jag köpa mat och dryck?",
        answer: "Vi har en kiosk med dryck och snacks. För större events eller grupper kan vi diskutera cateringalternativ - kontakta info@swedenindoorgolf.se."
      }
    ]
  },
  {
    id: 'technology',
    title: 'Teknik & Utrustning',
    icon: Globe,
    items: [
      {
        question: "GCQuad & GCFalcon - våra launch monitors",
        answer: "Med GCQuads & GCFalconHawks oöverträffade exakthet, kan vi med bestämdhet påstå att vi kan ta med golfen inomhus och fortfarande erbjuda ett trovärdigt alternativ till det verkliga spelet utomhus. Tekniken bygger på 4 stycken höghastighetskameror som var och en tar 10 000 bilder per sekund. Det är sannolikt den mest avancerade mätutrustningen på marknaden."
      },
      {
        question: "Hur exakt är mätningen?",
        answer: "GCQuad har precision inom 0,5 meter på 150 meters avstånd. Systemet använder fyra höghastighetskameror som tar 10 000 bilder per sekund för att spåra både bollen och klubban. Detta ger extremt exakta mätningar av både bollbana och klubbrörelse."
      },
      {
        question: "GSPRO software",
        answer: "GSPRO är marknadsledande mjukvara för golf simulator. Den använder GCQuads data för analys och visualisering. Den innehåller virtuella kopior av några av världens toppbanor, spelappar med utmaningar, skills games och onlinetävlingar. Läs mer om GSPRO på vår Support-sida."
      },
      {
        question: "Varför måste jag använda vita bollar?",
        answer: "GCQuads höghastighetskameror är optimerade för att spåra vita bollar mot den mörka bakgrunden. Färgade eller markerade bollar kan störa kamerornas förmåga att korrekt läsa bollens rotation och hastighet. Använd alltid nya, vita, omarkerade bollar för bästa resultat."
      },
      {
        question: "Hur fungerar indoor golf?",
        answer: "Du slår från en utslagsmatta in i en duk ca 2 meter framför dig. 4 höghastighetskameror som tar 10 000 bilder/sekund fotograferar bollen och klubban. Data beräknas och visas på en 23\" pekskärm med precision inom 0,5 meter på 150 meters avstånd.\n\nNär du når greenen puttar du antingen IRL på vår ~50 kvm puttyta eller låter datorn beräkna antalet puttar (Auto Putt)."
      },
      {
        question: "Vad händer om jag missar bollen helt?",
        answer: "Om du svingar men missar bollen helt (en 'air shot'), registrerar systemet detta som ett slag som räknas i ditt score om du spelar en runda. På driving range påverkar det inte din träning - slå bara nästa boll."
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
      },
      {
        question: "Kontakta oss",
        answer: "E-post: info@swedenindoorgolf.se\nBokning: 010-405 88 00 (MATCHi)\nAdress: Industrigatan 5, 582 77 Linköping\n\nFör frågor om bokningar, medlemskap, event eller teknisk support - hör av dig!"
      }
    ]
  },
  {
    id: 'legal',
    title: 'Integritet & Policy',
    icon: Shield,
    items: [
      {
        question: "Cookies",
        answer: "Vi använder cookies för att förbättra din upplevelse, för statistik och marknadsföring. Information som samlas in är anonym och innehåller inga personuppgifter."
      },
      {
        question: "Integritetspolicy",
        answer: "Vi behandlar dina personuppgifter i enlighet med GDPR. Vi samlar in uppgifter för att fullfölja köpeavtal och förbättra vår service. Vi delar INTE vidare personuppgifter till annonsörer i kommersiella syften. För fullständig integritetspolicy, se /integritetspolicy."
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
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="bg-slate-950 min-h-screen">
      <PageHeader
        title="FAQ"
        subtitle="Här hittar du svar på de vanligaste frågorna om vår anläggning, teknik och bokning."
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />

      <section className="py-12 md:py-20">
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
                        <div className="bg-slate-800 rounded-xl overflow-hidden">
                          <div className="p-3 border-b border-slate-700">
                            <p className="text-white text-sm font-semibold text-center">Driver, Woods & Hybrid</p>
                          </div>
                          <Image
                            src={`${basePath}/support/club-marker-woods.png`}
                            alt="Club marker placement for woods"
                            width={400}
                            height={500}
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="bg-slate-800 rounded-xl overflow-hidden">
                          <div className="p-3 border-b border-slate-700">
                            <p className="text-white text-sm font-semibold text-center">Järn & Wedge</p>
                          </div>
                          <Image
                            src={`${basePath}/support/club-marker-iron.png`}
                            alt="Club marker placement for irons"
                            width={400}
                            height={500}
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="bg-slate-800 rounded-xl overflow-hidden">
                          <div className="p-3 border-b border-slate-700">
                            <p className="text-white text-sm font-semibold text-center">Putter</p>
                          </div>
                          <Image
                            src={`${basePath}/support/club-marker-putter.png`}
                            alt="Club marker placement for putter"
                            width={400}
                            height={500}
                            className="w-full h-auto"
                          />
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
