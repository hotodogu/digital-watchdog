import { notFound } from "next/navigation";
import Link from "next/link";
import { guides } from "@/content/site";
import { External, PageIntro, TextLink } from "@/components/ui";
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: guides.find((g) => g.slug === slug)?.title ?? "Guide" };
}
export default async function Guide({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();
  return (
    <main id="main-content" className="container section">
      <Link href="/scams/" className="back-link">
        ← All scam guides
      </Link>
      <PageIntro eyebrow={guide.category} title={guide.title}>
        {guide.intro}
      </PageIntro>
      <div className="article-grid">
        <article>
          <section className="article-section">
            <h2>What might it look like?</h2>
            <div className="example">
              <p className="eyebrow">FICTIONAL EXAMPLE FOR LEARNING</p>
              <blockquote>{guide.example}</blockquote>
              <p>Example addresses are non-working and are not links.</p>
            </div>
          </section>
          <section className="article-section">
            <h2>Warning signs to notice</h2>
            <ol className="number-list">
              {guide.signs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="muted">
              A single sign does not prove a scam, and the absence of these
              signs does not prove safety.
            </p>
          </section>
          <section className="article-section">
            <h2>Why it can be convincing</h2>
            <p>{guide.why}</p>
          </section>
          <section className="article-section" id="actions">
            <h2>What should I do?</h2>
            <ul className="check-list">
              {guide.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
          <section className="article-section source-note">
            <h2>Keep learning</h2>
            <External href={guide.source}>
              Read the source guidance at Scamwatch
            </External>
            <p>
              Sources checked 8 October 2026. Scam tactics change; check the
              linked service for current information.
            </p>
          </section>
        </article>
        <aside className="article-aside">
          <div className="callout">
            <p className="eyebrow">TAKE THE NEXT STEP</p>
            <h2>Already responded?</h2>
            <p>
              If you’ve shared money, account details or personal information,
              act promptly. Help is available.
            </p>
            <TextLink href="/get-help/">Find next steps</TextLink>
          </div>
          <div className="aside-note">
            <h3>You don’t have to decide alone.</h3>
            <p>
              Take a break from the conversation and talk to someone you trust.
              Scams can happen to anyone.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
