import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Mail,
  Phone,
  ShoppingBag,
  Users,
  KeyRound,
  RefreshCw,
  FolderCheck,
  LockKeyhole,
  BookOpen,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
const icons: Record<string, LucideIcon> = {
  mail: Mail,
  phone: Phone,
  shopping: ShoppingBag,
  users: Users,
  key: KeyRound,
  shield: ShieldCheck,
  refresh: RefreshCw,
  folder: FolderCheck,
  lock: LockKeyhole,
  book: BookOpen,
  help: LifeBuoy,
};
export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const Graphic = icons[name] ?? ShieldCheck;
  return <Graphic size={size} aria-hidden="true" strokeWidth={1.7} />;
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function External({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="text-link" href={href}>
      {children}
      <ExternalLink size={16} aria-hidden="true" />
      <span className="sr-only"> (external website)</span>
    </a>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{children}</p>
    </div>
  );
}
