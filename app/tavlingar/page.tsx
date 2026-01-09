import { PageHeader } from '@/components/ui/PageHeader';
import { Trophy, Calendar, Users, Mail, ExternalLink, CreditCard, Info } from 'lucide-react';
import Link from 'next/link';

export default function CompetitionsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      <PageHeader
        title="Tävlingar"
        subtitle="Utmana dig själv och andra i våra tävlingar."
        backgroundImage={`${basePath}/hero-bg.jpg`}
      />

      {/* HobbyTouren Indoor Section */}
      <section className="py-12 md:py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">

            <div className="mb-16">
              <div className="flex items-start gap-4 mb-8">
                <Trophy size={32} className="text-primary shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">HobbyTouren Indoor</h2>
                  <p className="text-primary font-semibold text-lg">
                    Tävla i inomhusgolf!
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6 mb-8">
                <p className="text-white font-semibold text-lg">
                  HobbyTouren Indoor är för dig som gillar att tävla i golf samt umgås i trevligt sällskap!
                </p>
              </div>

              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Öppen för alla hcp-klasser. Spela när det passar dig och registrera resultatet.
                Du spelar med tourbollar i sval, vädersäker miljö och får exakt data på varje slag.
              </p>

              {/* Important Notice */}
              <div className="border-l-4 border-blue-500 pl-6 mb-10">
                <p className="text-blue-200 font-medium">
                  <strong className="text-white">Viktigt:</strong> För att spela i våra klubbtävlingar behöver du INTE betala någon medlemsavgift på SimulatorGolfTour.com.
                  Du registrerar ett gratis konto och kan sedan delta i lokala tävlingar hos oss.
                </p>
              </div>

              {/* PART 1: Registration - One time setup */}
              <div className="mb-12 pb-12 border-b border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Users size={28} className="text-primary" />
                  Registrering och anmälan (engångsregistrering)
                </h3>

                <h4 className="text-white font-semibold mb-3">Steg 1: Registrera dig på SimulatorGolfTour</h4>
                <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-6 ml-2">
                  <li>Gå till <a href="https://simulatorgolftour.com" target="_blank" className="text-primary hover:underline">simulatorgolftour.com</a></li>
                  <li>Klicka på profilikonen i övre högra hörnet och välj &quot;Sign Up&quot;</li>
                  <li>Fyll i dina uppgifter och välj ett <strong className="text-white">användarnamn (username)</strong></li>
                </ol>

                {/* Critical Info Box */}
                <div className="border-l-4 border-red-500 pl-6 mb-8 bg-red-950/20 py-4">
                  <p className="text-red-200 font-bold mb-3">
                    MYCKET VIKTIGT - Spara denna information:
                  </p>
                  <ul className="text-red-200 space-y-2">
                    <li>✓ Ditt <strong>USERNAME</strong> (användarnamn) - detta är skiftlägeskänsligt (STORA/små bokstäver)</li>
                    <li>✓ Din <strong>SGT UID</strong> (unikt ID-nummer) - får du efter registrering</li>
                    <li>✓ Båda dessa behövs för att koppla ditt konto till GSPro</li>
                  </ul>
                </div>

                <h4 className="text-white font-semibold mb-3">Steg 2: Anmäl dig till HobbyTouren</h4>
                <p className="text-slate-300 mb-4">
                  Maila ditt <strong className="text-white">USERNAME</strong> till <a href="mailto:fredrik@lundberg.one" className="text-primary hover:underline">fredrik@lundberg.one</a> så blir du inlagd i tävlingen.
                  Du måste vara registrerad hos Fredrik innan du kan spela.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://simulatorgolftour.com/register"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-primary text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Registrera dig på SGT
                    <ExternalLink size={16} />
                  </Link>
                  <Link
                    href="https://simulatorgolftour.com/tour/1708"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                  >
                    Se HobbyTouren
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>

              {/* PART 2: Playing - Every time */}
              <div className="mb-12 pb-12 border-b border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Trophy size={28} className="text-primary" />
                  Spela tävling (görs varje gång du spelar)
                </h3>

                <h4 className="text-white font-semibold mb-3">Steg 1: Koppla ditt SGT-konto i GSPro</h4>
                <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-6 ml-2">
                  <li>Öppna GSPro på simulatorn</li>
                  <li>Gå till <strong className="text-white">Settings</strong> (inställningar)</li>
                  <li>Välj fliken <strong className="text-white">Players</strong></li>
                  <li>Lägg till eller redigera din spelarprofil</li>
                  <li>Fyll i:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li><strong className="text-white">Player Name:</strong> Måste matcha ditt SGT username EXAKT (skiftlägeskänsligt!)</li>
                      <li><strong className="text-white">SGT UID:</strong> Ditt unika ID från SimulatorGolfTour</li>
                    </ul>
                  </li>
                  <li>Spara inställningarna</li>
                </ol>

                <h4 className="text-white font-semibold mb-3">Steg 2: Starta tävlingen</h4>
                <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-4 ml-2">
                  <li>På GSPros startsida, klicka på den stora knappen <strong className="text-white">&quot;Tournaments&quot;</strong></li>
                  <li>Välj rätt användare i användarväljaren (den med ditt kopplade SGT-konto)</li>
                  <li>I listan av tävlingar som dyker upp, välj HobbyTouren Indoor</li>
                  <li>Spela och njut!</li>
                </ol>
              </div>

              {/* Classes and Fees */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Info size={24} className="text-primary" />
                    Klasser
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-semibold text-lg">Herrar (2 klasser)</p>
                      <p className="text-slate-400">Scratch och Netto (med hcp). Man deltar automatiskt i båda klasserna.</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">Damer (1 klass)</p>
                      <p className="text-slate-400">Netto-klass</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <CreditCard size={24} className="text-primary" />
                    Anmälningsavgift
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-slate-300 text-lg">Herrar</span>
                        <span className="text-white font-bold text-xl">100 kr</span>
                      </div>
                      <p className="text-slate-500 text-sm">(50 kr scratch + 50 kr netto)</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-slate-300 text-lg">Damer</span>
                        <span className="text-white font-bold text-xl">50 kr</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-slate-400">
                        Swisha till Sweden Indoor Golf AB<br />
                        <span className="text-white font-mono text-lg">123 196 97 32</span><br />
                        <span className="text-sm">Ange &quot;HT&quot; som meddelande</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trophies */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Trophy size={24} className="text-primary" />
                  Vandringspokaler
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Major Master</p>
                    <p className="text-slate-400">Bäst på alla 3 majors totalt</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">HobbyTouren Indoor Leaderboard</p>
                    <p className="text-slate-400">Bäst totalt på alla veckotävlingar + livetävlingar</p>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">Fredex Cup</p>
                    <p className="text-slate-400">Vinnaren av 18-hålstävlingen i v11 (avslutningstävlingen)</p>
                  </div>
                </div>
              </div>

              {/* Troubleshooting */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Vanliga problem</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-semibold text-lg mb-2">Jag ser inte tävlingen i GSPro</p>
                    <p className="text-slate-300 mb-2">Kontrollera att:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                      <li>Din Player Name i GSPro matchar ditt SGT username EXAKT (inklusive STORA/små bokstäver)</li>
                      <li>Du har fyllt i korrekt SGT UID i Players-inställningarna</li>
                      <li>Du är inlagd i tävlingen (maila fredrik@lundberg.one om du är osäker)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg mb-2">Mitt resultat registrerades inte</p>
                    <p className="text-slate-300">Detta beror oftast på att Player Name och SGT username inte matchar exakt. Dubbelkolla skiftläget på alla bokstäver.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* H40+ Scratch Indoor Section */}
            <div className="pt-16 border-t-2 border-slate-800">
              <div className="flex items-start gap-4 mb-8">
                <Trophy size={32} className="text-primary shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">H40+ Scratch Indoor</h2>
                  <p className="text-primary font-semibold text-lg">
                    Seriespel för alla klubbar inom Östergötland
                  </p>
                </div>
              </div>

              <p className="text-slate-300 mb-6">
                En tävling för dig som är 40+ (född 1965-1986). Spelas under vintersäsongen med finalspel på våren.
                Undantag för äldre spelare kan göras. Representanter från: Landeryd, Linköping, Norrköping/Söderköping, Mjölby GK, Vreta.
              </p>

              {/* Format */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Format 2025-2026</h3>
                <ul className="text-slate-300 space-y-2 text-lg">
                  <li>• 3-mannalag med 1 singel och 1 shamble</li>
                  <li>• Om endast 2 spelare: spela 2 singlar, en räknas som shamble-resultat</li>
                  <li>• Spelare kan variera mellan olika lag i samma klubb för att bilda fulltaliga lag</li>
                </ul>
              </div>

              {/* Simulator Instructions */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-white mb-4">Kort instruktion simulatorgolf</h3>
                <div className="space-y-4 text-slate-300">
                  <p>Vi spelar med puttning men med 10-8 foot gimmiecirkel.</p>
                  <p>Stimpen är alltid 11 vilket är det lägsta som det brukar vara på simulatorgolf men det är mycket snabbare än vanliga svenska greener.</p>

                  <div>
                    <p className="text-white font-semibold mb-2">Lie (läge på bollen)</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li><span className="text-white">Fairway:</span> Bollen ligger bra och man får full effekt av klubban</li>
                      <li><span className="text-white">Semi-rough:</span> Lite reducerad spinn</li>
                      <li><span className="text-white">Rough:</span> Mer reducerad spinn, man kan inte räkna med fullt avstånd</li>
                      <li><span className="text-white">Deep Rough:</span> Rejält reducerad spinn och avstånd</li>
                      <li><span className="text-white">Fairway Bunker:</span> Som fairway men svårare att hitta rätt läge</li>
                      <li><span className="text-white">Green Bunker:</span> Mycket spinn, kräver rätt teknik</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-white font-semibold mb-2">Lutning</p>
                    <p className="text-sm">
                      Lutning påverkar bollflykten mycket. 4-5 grader upp eller ner är som en klubba extra eller mindre.
                      Lutning höger/vänster påverkar också mycket - 8 graders lutning höger på ett 100m slag kan vara 15m i sidled,
                      så man kan behöva sikta bredvid green om man slår ett &quot;rakt slag&quot;.
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  Spelschema 2025-2026
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 text-slate-400">Datum</th>
                        <th className="text-left py-2 text-slate-400">Bana</th>
                        <th className="text-left py-2 text-slate-400">Tid</th>
                        <th className="text-left py-2 text-slate-400">Info</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-slate-800">
                        <td className="py-2">2025-11-16</td>
                        <td className="py-2">Portrush</td>
                        <td className="py-2">18:20</td>
                        <td className="py-2 text-slate-500">Fairways: Normal, Stimp: 11</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2">2025-12-07</td>
                        <td className="py-2">Bethpage Black</td>
                        <td className="py-2">18:20</td>
                        <td className="py-2 text-slate-500">Fairways: Soft, Stimp: 11</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2">2026-01-25</td>
                        <td className="py-2">Quail Hollow Club</td>
                        <td className="py-2">18:20</td>
                        <td className="py-2 text-slate-500">Fairways: Normal, Stimp: 11</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2">2026-02-08</td>
                        <td className="py-2">Spyglass Hill</td>
                        <td className="py-2">18:20</td>
                        <td className="py-2 text-slate-500">Fairways: Normal, Stimp: 11</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2">2026-03-01</td>
                        <td className="py-2">Pebble Beach</td>
                        <td className="py-2">18:20</td>
                        <td className="py-2 text-slate-500">Fairways: Normal, Stimp: 11</td>
                      </tr>
                      <tr className="bg-primary/10">
                        <td className="py-2 font-semibold text-primary">2026-03-15</td>
                        <td className="py-2 font-semibold text-primary">TPC Sawgrass</td>
                        <td className="py-2">18:20</td>
                        <td className="py-2 text-primary">FINAL - Dubbla poäng!</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fee */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <CreditCard size={20} className="text-primary" />
                  Avgift
                </h3>
                <p className="text-slate-300 mb-3">
                  100 kr/deltagare/omgång som även ger dig 100 kr i värdekort för framtida bokningar.
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  Anmälningsavgift betalas via MATCHi (Bläddra ner och välj värdekort: &quot;Anmälningsavgift H40 Scratch Indoor&quot;)
                </p>
                <Link
                  href="https://www.matchi.se/facilities/swedenindoorgolf"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-primary text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Betala via MATCHi
                  <ExternalLink size={16} />
                </Link>
              </div>

              {/* Registration */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-white mb-4">Anmälan</h3>
                <p className="text-slate-300">
                  Anmälan sker till tävlingsansvarig Christian Bremer senast <span className="text-white font-semibold">13:00 onsdagen</span> före tävlingsdagen.
                </p>
              </div>

              {/* Contacts */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Mail size={20} className="text-primary" />
                  Kontaktpersoner
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white font-semibold">Tävlingsansvarig</p>
                    <p className="text-slate-300">Christian Bremer, Linköpings GK</p>
                    <a href="mailto:christian@cicd.se" className="text-primary hover:underline text-sm">christian@cicd.se</a>
                    <p className="text-slate-400 text-sm">0736001982</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Landeryd</p>
                    <p className="text-slate-300">Tomas Björn</p>
                    <a href="mailto:tomasbjorn2@gmail.com" className="text-primary hover:underline text-sm">tomasbjorn2@gmail.com</a>
                    <p className="text-slate-300 mt-1">Johan Gradvall</p>
                    <a href="mailto:jgradvall@mac.se" className="text-primary hover:underline text-sm">jgradvall@mac.se</a>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Linköping</p>
                    <p className="text-slate-300">Christian Cleber</p>
                    <a href="mailto:cleberlinvallen@gmail.com" className="text-primary hover:underline text-sm">cleberlinvallen@gmail.com</a>
                    <p className="text-slate-300 mt-1">Johan Lindström</p>
                    <a href="mailto:johanlindstrom99@gmail.com" className="text-primary hover:underline text-sm">johanlindstrom99@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Norrköping/Söderköping</p>
                    <p className="text-slate-300">Johan Petersson</p>
                    <a href="mailto:johan.o.petersson@telia.com" className="text-primary hover:underline text-sm">johan.o.petersson@telia.com</a>
                    <p className="text-slate-300 mt-1">Ulf Bergh</p>
                    <a href="mailto:ulf.bergh@norrkoping.se" className="text-primary hover:underline text-sm">ulf.bergh@norrkoping.se</a>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mjölby GK</p>
                    <p className="text-slate-300">Dennis Hansson</p>
                    <a href="mailto:dennis.g.hansson@hotmail.com" className="text-primary hover:underline text-sm">dennis.g.hansson@hotmail.com</a>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Vreta</p>
                    <p className="text-slate-300">Stig Hellholm</p>
                    <a href="mailto:stig@hellholm.se" className="text-primary hover:underline text-sm">stig@hellholm.se</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
