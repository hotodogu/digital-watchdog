import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalwatchdog.ayonyuan.com"),
  title: { default: "Digital Watchdog", template: "%s | Digital Watchdog" },
  description: "Digital Watchdog — an EST project. Website coming soon.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
