import Link from "next/link";
import { guides } from "@/content/site";
import { Icon, PageIntro, External } from "@/components/ui";
export const metadata = { title: "Common scams" };
export default function Scams() {
  return (
    <main id="main-content" className="container section">
      <PageIntro
        eyebrow="RECOGNISE THE PATTERNS"
        title="Common scams, explained."
      >
        Understand how scams work, what to look out for and what to do next.
        These guides are educational; they cannot determine whether a particular
        message or transaction is safe.
      </PageIntro>
      <div className="card-grid two-columns">
        {guides.map((g, i) => (
          <Link
            className="guide-card horizontal-card"
            href={`/scams/${g.slug}/`}
            key={g.slug}
          >
            <div className={`card-art tone-${i}`}>
              <Icon name={g.icon} size={42} />
            </div>
            <div className="card-body">
              <p className="eyebrow">{g.category}</p>
              <h2>{g.title}</h2>
              <p>{g.summary}</p>
              <span className="text-link">Read the guide →</span>
            </div>
          </Link>
        ))}
      </div>
      <aside className="callout">
        <h2>Not sure about something you received?</h2>
        <p>
          Service Victoria offers a guided check for common scam warning signs.
          No check can guarantee safety.
        </p>
        <External href="https://service.vic.gov.au/scamcheck">
          Open Scam Safe Check
        </External>
      </aside>
    </main>
  );
}
