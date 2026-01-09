import { PageHeader } from "@/components/ui/PageHeader";
import { Shield, Camera, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Integritetspolicy"
      />
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">

            {/* Introduction */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Personuppgiftsansvarig</h2>
                  <p className="text-slate-400">Sweden Indoor Golf AB (org.nr 559168-8816)</p>
                </div>
              </div>
              <p className="text-slate-300">
                Sweden Indoor Golf AB är ansvarig för hanteringen av personuppgifter och denna integritetspolicy
                förklarar hur vi behandlar och skyddar dina personuppgifter i enlighet med Dataskyddsförordningen,
                GDPR, och annan gällande svensk dataskyddslagstiftning.
              </p>
            </div>

            {/* Main content */}
            <div className="prose prose-invert prose-slate max-w-none">

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Insamling och lagring av uppgifter</h3>
              <p className="text-slate-300 mb-4">
                Vi samlar in och lagrar uppgifter som du själv lämnar till oss:
              </p>
              <ul className="text-slate-300 space-y-1 mb-4 list-disc list-inside">
                <li>Namn och adress</li>
                <li>Personnummer</li>
                <li>Mobilnummer och e-post</li>
                <li>Information om hur du vill bli kontaktad (via e-post och/eller sms/telefon)</li>
              </ul>
              <p className="text-slate-300 mb-4">
                Vi samlar även in information kring köp av tjänster och varor, pris, datum och butik/webb,
                returer (avbokningar) och eventuell kontakt med kundtjänst samt deltagande i evenemang,
                tävling, konferens eller liknande.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Lagringstid</h3>
              <p className="text-slate-300 mb-4">
                Vi lagrar dina uppgifter så länge du är kund till oss. Vi kommer inte att lagra dina uppgifter
                under längre tid än vad som är nödvändigt för att uppfylla våra skyldigheter mot dig eller så
                länge vi är skyldiga enligt lag att bevara dina uppgifter. Därefter kommer vi att radera våra
                uppgifter om dig.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Dina rättigheter</h3>
              <p className="text-slate-300 mb-4">
                På sätt och begränsat till vad som föreskrivs i lag kan du:
              </p>
              <ul className="text-slate-300 space-y-1 mb-4 list-disc list-inside">
                <li>Begära borttagning, rättelse eller ändring av dina personuppgifter</li>
                <li>Neka till behandling av dina personuppgifter</li>
                <li>Begränsa användning och utlämnande av personuppgifter</li>
                <li>Få överfört (porterat) de personuppgifter du lämnat till oss</li>
                <li>Återkalla eventuella samtycken till behandling av dina personuppgifter</li>
              </ul>
              <p className="text-slate-400 text-sm mb-4">
                Observera att i vissa fall kan vi inte ta bort dina personuppgifter utan att samtidigt ta bort
                ditt användarkonto för bokning av våra tjänster.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Rättslig grund</h3>
              <p className="text-slate-300 mb-4">
                Den rättsliga grunden för behandling av personuppgifterna är att vi skall kunna fullgöra vår
                del av köpeavtal. Personuppgiftsbehandling med stöd av en intresseavvägning föreligger för att
                kunna erbjuda en bättre kundupplevelse samt för att ge personligt anpassade erbjudanden och
                annan relevant information samt fullgod service och kommunikation.
              </p>
              <p className="text-slate-300 mb-4">
                Vår strävan är att ständigt försöka göra förbättringar för våra kunder och i det syftet,
                analyserar vi hur kunderna använder våra tjänster (t.ex användningsfrekvens och deltagande
                vid olika event, tävlingar etc.).
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Delning av personuppgifter</h3>
              <p className="text-slate-300 mb-4">
                Sweden Indoor Golf delar INTE vidare personuppgifter till annonsörer & dylikt i kommersiella
                syften. Däremot kan de komma att lämnas ut till tredje part om detta krävs för att tillhandahålla
                tjänster till dig.
              </p>
              <p className="text-slate-300 mb-4">
                Vi anlitar MATCHi AB (556871-6129) som är plattformsleverantör av system för tidsbokning,
                kundregister, fakturering etc. MATCHi har en egen integritetspolicy med mer utförlig information
                om hur personuppgifterna lagras och skyddas mot obehörig åtkomst i överensstämmelse med
                dataskyddsförordningen.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-4">Externa länkar</h3>
              <p className="text-slate-300 mb-4">
                På vår hemsida kan det förekomma länkar till externa hemsidor. Dessa omfattas inte av denna
                policy och Sweden Indoor Golf tar inget ansvar för dessa hemsidors integritetspolicy. Dessa
                länkar är endast avsedda att underlätta. Likaledes tas inget ansvar för hanteringen av
                personuppgifter i sociala medier eller applikationer för smartphones och tablets utan Sweden
                Indoor Golf hänvisar till respektive kontos integritetspolicy (t.ex Performance fitting,
                Golf Gamebook, Facebook, m.fl.).
              </p>
            </div>

            {/* Camera surveillance */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 my-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <Camera size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Kamerabevakning</h3>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                För att förhöja säkerheten och förebygga brott så bevakar vi våra lokaler med hjälp av kameror.
                Det innebär att om du besöker våra lokaler kan du komma att filmas av sådan utrustning.
              </p>
              <p className="text-slate-300 mb-4">
                Vi använder sådana bilder för att kunna erbjuda en säkrare och tryggare miljö för alla som
                besöker oss, samt för att skydda vår egendom. Förfarandet är en intresseavvägning.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li><span className="text-white font-semibold">Åtkomst:</span> Tillgången till bilderna är begränsad till behörig personal hos Sweden Indoor Golf.</li>
                  <li><span className="text-white font-semibold">Lagringstid:</span> Informationen sparas i 2 veckor och raderas sedan.</li>
                  <li><span className="text-white font-semibold">Information:</span> Vi har skyltar där du informeras om att området är kamerabevakat.</li>
                </ul>
              </div>
            </div>

            {/* Contact and complaints */}
            <div className="prose prose-invert prose-slate max-w-none">
              <h3 className="text-xl font-bold text-white mt-8 mb-4">Frågor och klagomål</h3>
              <p className="text-slate-300 mb-4">
                Har du frågor om hur vi hanterar dina personuppgifter, vill rätta, radera eller om du vill
                portera dina uppgifter kontaktar du oss på{' '}
                <a href="mailto:info@swedenindoorgolf.se" className="text-primary hover:underline">
                  info@swedenindoorgolf.se
                </a>.
              </p>
              <p className="text-slate-300 mb-4">
                När det gäller hantering av personuppgifter kan du även tala med Datainspektionen,{' '}
                <Link href="https://www.datainspektionen.se/" target="_blank" className="text-primary hover:underline inline-flex items-center gap-1">
                  datainspektionen.se
                  <ExternalLink size={14} />
                </Link>
                , som är tillsynsmyndighet för denna hantering.
              </p>
              <p className="text-slate-300 mb-4">
                Om du anser att vi behandlar dina personuppgifter i strid med gällande regelverk ber vi dig
                att snarast anmäla detta till oss. Du har möjlighet att vända dig till Datainspektionen om
                du har klagomål på vår personuppgiftsbehandling.
              </p>
            </div>

            {/* Company info */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Kontaktuppgifter</h3>
                </div>
              </div>
              <div className="text-slate-300 space-y-1">
                <p className="font-semibold text-white">Sweden Indoor Golf AB</p>
                <p>Organisationsnummer: 556060-9058</p>
                <p>Repslagaregatan 39</p>
                <p>582 22 Linköping</p>
                <p>
                  E-post:{' '}
                  <a href="mailto:info@swedenindoorgolf.se" className="text-primary hover:underline">
                    info@swedenindoorgolf.se
                  </a>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm">
                  Denna policy kan komma att uppdateras. Den senaste uppdaterade versionen av
                  integritetspolicyn hittar du alltid på denna sida.
                </p>
                <p className="text-slate-500 text-sm mt-2 italic">
                  Senast uppdaterad 2021-11-22.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
