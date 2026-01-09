import { PageHeader } from "@/components/ui/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader 
        title="Integritetspolicy" 
      />
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-invert prose-slate">
            <p>
              Vi värnar om din personliga integritet. Denna policy beskriver hur vi samlar in och använder personuppgifter.
            </p>
            <h3>Insamling av information</h3>
            <p>
              Vi samlar in information från dig när du bokar en tid via MATCHi, kontaktar oss via formulär eller e-post.
            </p>
            <h3>Användning av information</h3>
            <p>
              Den information vi samlar in används för att:
            </p>
            <ul>
                <li>Administrera din bokning och ge tillträde till lokalen</li>
                <li>Förbättra vår kundservice</li>
                <li>Kontakta dig via e-post eller telefon</li>
            </ul>
             <p>
              Vi säljer, handlar, eller på annat sätt överför, inte personligt identifierbar information till utomstående parter.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
