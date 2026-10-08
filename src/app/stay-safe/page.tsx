import { safetyTips } from "@/content/site";
import { Icon, PageIntro, External } from "@/components/ui";
export const metadata = { title: "Stay safe online" };
export default function StaySafe() {
  return (
    <main id="main-content" className="container section">
      <PageIntro
        eyebrow="SMALL STEPS. STRONGER HABITS."
        title="Protect what matters."
      >
        You don’t need to be a technology expert to improve your online safety.
        Start with these everyday habits and work through them at your own pace.
      </PageIntro>
      <div className="safety-grid">
        {safetyTips.map((tip, i) => (
          <section className="safety-card" key={tip.title}>
            <div className="safety-top">
              <span className="icon-box">
                <Icon name={tip.icon} />
              </span>
              <span className="muted">0{i + 1}</span>
            </div>
            <h2>{tip.title}</h2>
            <p>{tip.text}</p>
          </section>
        ))}
      </div>
      <aside className="callout">
        <h2>Your everyday safety checklist</h2>
        <p>
          Use these checkboxes as a personal reminder. They are not saved or
          sent anywhere.
        </p>
        <div className="personal-checklist">
          {[
            "My important accounts have unique passwords or passkeys.",
            "I have enabled MFA where available.",
            "My devices and apps receive updates.",
            "I have a backup of important information.",
            "I know how to contact my bank independently.",
          ].map((item) => (
            <label key={item}>
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
        <p className="muted" style={{ marginTop: 24 }}>
          Use your browser’s Print option to keep a copy.
        </p>
      </aside>
      <div className="source-note">
        <External href="https://www.cyber.gov.au/">
          Explore security guidance at Cyber.gov.au
        </External>
        <p>
          Source: Australian Government cyber security guidance. Sources checked
          8 October 2026.
        </p>
      </div>
    </main>
  );
}
