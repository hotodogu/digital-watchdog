import { disclaimer } from "@/content/site";
import { PageIntro, TextLink, External } from "@/components/ui";
export const metadata = { title: "About this project" };
export default function About() {
  return (
    <main id="main-content" className="container section">
      <PageIntro
        eyebrow="PREVENTION · INFORMATION · CONNECTION"
        title="A project with a practical purpose."
      >
        Digital Watchdog is a group educational project about recognising scams,
        building safer online habits and making reputable information easier to
        find.
      </PageIntro>
      <div className="article-grid">
        <article>
          <section className="article-section">
            <h2>Why we made it</h2>
            <p>
              Online safety information can feel overwhelming, especially when
              you are unsure where to start. Our project brings together
              plain-language explanations, fictional examples and links to
              established services.
            </p>
            <p>
              The website complements our group’s pamphlet, providing room to
              explore common scams and phishing tactics in more detail. It is
              intended for adults of different ages and levels of digital
              confidence, including family members helping someone else.
            </p>
          </section>
          <section className="article-section">
            <h2>What you’ll find here</h2>
            <ul className="check-list">
              <li>
                Common scam tactics and warning signs, explained through
                examples.
              </li>
              <li>
                Practical habits for protecting accounts, devices and personal
                information.
              </li>
              <li>
                External pathways for reporting, recovery and further learning.
              </li>
            </ul>
            <TextLink href="/scams/">Start with the scam guides</TextLink>
          </section>
          <section className="article-section">
            <h2>Our research approach</h2>
            <p>
              The team explored existing scam-awareness resources, communication
              needs and ways to connect a pamphlet with more detailed online
              learning. Public guidance is checked against reputable sources and
              linked alongside the relevant content.
            </p>
            <p>
              The website does not scan messages, evaluate live links or certify
              businesses. Examples are fictional and cannot cover every scam. No
              funding, partnership or service delivery is claimed.
            </p>
            <TextLink href="/resources/">Explore our sources</TextLink>
          </section>
          <section className="article-section">
            <h2>Privacy and accessibility</h2>
            <p>
              This version has no accounts, submission forms or analytics added
              by the project. Checklist selections stay in the page and are not
              stored by us. The hosting provider may process technical
              connection data under its own policies.
            </p>
            <p>
              We use keyboard-accessible links, clear headings, responsive
              layouts and text explanations alongside graphics. External links
              open in the same tab so you remain in control.
            </p>
          </section>
          <section className="article-section">
            <h2>Graphics and credits</h2>
            <p>
              Our visual graphics use free open-source Lucide icons and CSS
              illustrations. We do not display third-party service logos as
              endorsements.
            </p>
            <External href="https://lucide.dev/license">
              Lucide icon licences
            </External>
          </section>
        </article>
        <aside className="article-aside">
          <div className="callout" id="disclaimer">
            <p className="eyebrow">PLEASE READ</p>
            <h2>Educational project only</h2>
            <p>{disclaimer}</p>
          </div>
          <div className="aside-note">
            <h3>Project pamphlet</h3>
            <p>
              The pamphlet is being developed. A downloadable copy will be added
              once it is ready.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
