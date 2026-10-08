import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, MousePointer2 } from "lucide-react";
import { Icon, TextLink } from "@/components/ui";
import { guides } from "@/content/site";
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> ONLINE SAFETY, MADE UNDERSTANDABLE
            </p>
            <h1>
              A little knowledge.
              <br />A safer <span>digital life.</span>
            </h1>
            <p className="lede">
              Scams can happen to anyone. Learn how to recognise the warning
              signs, protect what matters and know where to turn.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/scams/">
                Explore common scams <ArrowRight size={18} />
              </Link>
              <Link className="button secondary" href="/stay-safe/">
                Build safer habits
              </Link>
            </div>
            <p className="hero-note">
              <Check size={15} aria-hidden="true" /> Plain-language guides{" "}
              <span>·</span> Trusted Australian sources
            </p>
          </div>
          <div className="hero-art">
            <div className="art-grid" />
            <div className="art-label">
              <ShieldCheck size={18} aria-hidden="true" /> A moment to check
              makes a difference
            </div>
            <div className="message-preview">
              <div className="message-top">
                <span className="message-avatar">
                  <Icon name="mail" />
                </span>
                <div>
                  <strong>Account security</strong>
                  <small>Fictional learning example</small>
                </div>
                <span className="message-time">now</span>
              </div>
              <p>
                Your account will be suspended.
                <br />
                Verify your details immediately.
              </p>
              <span className="fake-link">account-check.example</span>
              <div className="warning-tag">
                01 <span>Unexpected urgency? Pause and check.</span>
              </div>
            </div>
            <div className="shield-orbit">
              <ShieldCheck size={61} strokeWidth={1.35} aria-hidden="true" />
            </div>
            <div className="art-caption">
              <MousePointer2 size={18} aria-hidden="true" /> Don’t let pressure
              make the decision.
            </div>
          </div>
        </div>
      </section>
      <div className="pathways container">
        {[
          {
            icon: "book",
            title: "Spot the warning signs",
            text: "Understand the tactics behind common scams.",
            href: "/scams/",
          },
          {
            icon: "shield",
            title: "Strengthen your everyday safety",
            text: "Small changes that help protect your accounts.",
            href: "/stay-safe/",
          },
          {
            icon: "help",
            title: "Already shared something?",
            text: "Find practical next steps and reputable support.",
            href: "/get-help/",
          },
        ].map((item) => (
          <Link className="pathway" href={item.href} key={item.title}>
            <span className="icon-box">
              <Icon name={item.icon} />
            </span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">RECOGNISE THE PATTERNS</p>
            <h2>Familiar situations. Hidden risks.</h2>
            <p>
              Look beyond the message to understand what’s being asked of you.
            </p>
          </div>
          <TextLink href="/scams/">All scam guides</TextLink>
        </div>
        <div className="card-grid">
          {guides.map((guide, i) => (
            <Link
              className="guide-card"
              href={`/scams/${guide.slug}/`}
              key={guide.slug}
            >
              <div className={`card-art tone-${i}`}>
                <Icon name={guide.icon} size={50} />
                <span>0{i + 1}</span>
              </div>
              <div className="card-body">
                <p className="eyebrow">{guide.category}</p>
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <span className="text-link">
                  Read the guide <ArrowRight size={17} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="habits-section">
        <div className="container">
          <p className="eyebrow">BEFORE YOU CLICK, PAY OR REPLY</p>
          <h2>Give yourself a moment.</h2>
          <div className="steps-grid">
            {[
              [
                "01",
                "Pause",
                "Urgency is a reason to slow down. Take time before acting on an unexpected request.",
              ],
              [
                "02",
                "Check independently",
                "Open the official app or use contact details you already trust. Ask someone if you’re unsure.",
              ],
              [
                "03",
                "Protect your information",
                "Keep passwords and sign-in codes private. Seek help quickly if you’ve shared money or details.",
              ],
            ].map(([number, title, text]) => (
              <div key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <TextLink href="/stay-safe/">Explore safer online habits</TextLink>
        </div>
      </section>
      <section className="section container bottom-grid">
        <div>
          <p className="eyebrow">CONTINUE LEARNING</p>
          <h2>
            Good information.
            <br />
            Reliable places to go.
          </h2>
          <p className="section-copy">
            We bring the basics together and point you towards established
            Australian services for more detailed information.
          </p>
          <TextLink href="/resources/">Find trusted resources</TextLink>
        </div>
        <div className="pamphlet-panel">
          <Icon name="book" size={32} />
          <h3>From pamphlet to practical knowledge.</h3>
          <p>
            Read our group’s online safety pamphlet for a handy overview of
            scam awareness and safer online habits.
          </p>
          <a
            href="/documents/digital-watchdog-online-safety-pamphlet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the pamphlet (PDF, 782 KB) ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
