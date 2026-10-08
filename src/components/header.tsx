"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck } from "lucide-react";
const links = [
  ["/scams/", "Common scams"],
  ["/stay-safe/", "Stay safe online"],
  ["/resources/", "Resources"],
  ["/about/", "About the project"],
];
export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className="project-notice">
        <div className="container">
          <strong>Educational project only</strong>
          <span>
            {" "}
            · Not a real organisation. No affiliation or endorsement.
          </span>
          <Link href="/about/#disclaimer">
            Learn more <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Digital Watchdog home">
            <span className="brand-icon">
              <ShieldCheck aria-hidden="true" size={28} />
            </span>
            <span>
              digital<span className="brand-light">watchdog</span>
              <small>KNOW MORE. STAY SAFER.</small>
            </span>
          </Link>
          <nav aria-label="Main navigation">
            {links.map(([url, label]) => (
              <Link
                key={url}
                href={url}
                aria-current={
                  pathname.startsWith(url.slice(0, -1)) ? "page" : undefined
                }
              >
                {label}
              </Link>
            ))}
            <Link
              className="help-button"
              href="/get-help/"
              aria-current={
                pathname.startsWith("/get-help") ? "page" : undefined
              }
            >
              Get help <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
