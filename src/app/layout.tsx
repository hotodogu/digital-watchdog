import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalwatchdog.ayonyuan.com"),
  title: { default: "Digital Watchdog", template: "%s | Digital Watchdog" },
  description:
    "An educational project exploring common scams, phishing tactics and practical online safety.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
