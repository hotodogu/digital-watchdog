import { resources } from "@/content/site";
import { External, PageIntro } from "@/components/ui";
export const metadata = { title: "Trusted resources" };
export default function Resources() {
  return (
    <main id="main-content" className="container section">
      <PageIntro
        eyebrow="KEEP LEARNING. FIND THE RIGHT HELP."
        title="Trusted places to go next."
      >
        Established Australian services offer more detailed information,
        learning and support. These are external resources, not Digital Watchdog
        partners.
      </PageIntro>
      <div className="resource-grid">
        {resources.map((r) => (
          <section className="resource-card" key={r.name}>
            <p className="eyebrow">{r.category}</p>
            <h2>{r.name}</h2>
            <p>{r.description}</p>
            <External href={r.url}>Visit {r.name}</External>
            <small>{new URL(r.url).hostname}</small>
          </section>
        ))}
      </div>
      <aside className="callout">
        <h2>How we choose our sources</h2>
        <p>
          We prioritise Australian government guidance and established
          independent support services. Links explain a topic or provide a clear
          next step. Inclusion does not imply affiliation or endorsement.
        </p>
        <p>
          Sources checked 8 October 2026. External websites can change, and
          their own privacy policies and service conditions apply.
        </p>
      </aside>
    </main>
  );
}
