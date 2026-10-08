import { PageIntro, External } from "@/components/ui";
export const metadata = { title: "Get help" };
export default function Help() {
  return (
    <main id="main-content" className="container section">
      <PageIntro
        eyebrow="PAUSE. TAKE ACTION. FIND SUPPORT."
        title="Think you’ve been scammed?"
      >
        Scams can happen to anyone. You deserve support, not blame. Start with
        the action that matches your situation, then use the external services
        below.
      </PageIntro>
      <div className="urgent-panel">
        <h2>Money or bank details involved?</h2>
        <p>
          Contact your bank or card provider immediately. Use its official app,
          the number on your card or a known official website. Ask it to secure
          your account and stop transactions where possible.
        </p>
        <p>
          <strong>
            Do not use contact details from the suspicious message.
          </strong>{" "}
          Recovery is not guaranteed, but acting promptly can help limit further
          harm.
        </p>
      </div>
      <div className="help-grid">
        {[
          {
            n: "01",
            title: "Shared a password or sign-in code?",
            text: "From a device you trust, use the service’s official recovery process and change affected passwords. Change reused passwords elsewhere, review active sessions and turn on MFA.",
            url: "https://www.cyber.gov.au/report-and-recover",
            label: "Find account recovery guidance",
          },
          {
            n: "02",
            title: "Shared identity or personal information?",
            text: "Contact IDCARE for guidance on identity misuse and a response plan. Contact the relevant document issuer if identity documents are involved.",
            url: "https://www.idcare.org/",
            label: "Get support from IDCARE",
          },
          {
            n: "03",
            title: "Installed software or granted remote access?",
            text: "Stop interacting with the caller. Use another trusted device to contact your bank if needed, and seek qualified technical help to secure the affected device.",
            url: "https://www.cyber.gov.au/report-and-recover",
            label: "Find cyber recovery information",
          },
          {
            n: "04",
            title: "Report what happened",
            text: "Report suspicious scam activity to Scamwatch. For cybercrime involving stolen money or information, use the reporting pathways at Cyber.gov.au. Reporting and immediate account protection are separate steps.",
            url: "https://www.scamwatch.gov.au/report-a-scam",
            label: "Report to Scamwatch",
          },
        ].map((item) => (
          <section className="help-card" key={item.n}>
            <span className="step-number">{item.n}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <External href={item.url}>{item.label}</External>
          </section>
        ))}
      </div>
      <aside className="callout">
        <h2>Support beyond the immediate incident</h2>
        <p>
          Talk with someone you trust. If the financial impact is making it
          difficult to manage debts or living costs, free financial counselling
          information is available.
        </p>
        <External href="https://ndh.org.au/">
          Visit the National Debt Helpline
        </External>
        <p className="muted">
          Be cautious of anyone promising to recover lost money for an upfront
          fee. This can be another scam.
        </p>
      </aside>
      <div className="source-note">
        <External href="https://www.scamwatch.gov.au/types-of-scams/phishing-scams">
          Read Scamwatch’s response guidance
        </External>
        <External href="https://www.cyber.gov.au/report-and-recover">
          Report cybercrime and find recovery guidance
        </External>
        <p>
          Sources checked 8 October 2026. Digital Watchdog does not accept scam
          reports or provide case support. If someone is in immediate danger in
          Australia, call 000.
        </p>
      </div>
    </main>
  );
}
