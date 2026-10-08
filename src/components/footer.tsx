import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { disclaimer } from "@/content/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="footer-brand">
              <ShieldCheck size={23} aria-hidden="true" /> Digital Watchdog
            </span>
            <p>Practical knowledge for a safer digital life.</p>
          </div>
          <div className="footer-links">
            <Link href="/about/">About this project</Link>
            <Link href="/resources/">Sources & resources</Link>
            <Link href="/get-help/">Find support</Link>
          </div>
        </div>
        <p className="footer-disclaimer">
          <strong>Educational project only. </strong>
          {disclaimer}
        </p>
        <div className="footer-bottom">
          <span>Digital Watchdog · Group educational project</span>
          <span>
            Icons:{" "}
            <a href="https://lucide.dev/license">Lucide · ISC & MIT licences</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
