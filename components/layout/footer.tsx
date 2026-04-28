import Image from "next/image";
import Link from "next/link";

const FOOTER_LINK_CLASS =
  "text-xs text-slate-400 hover:text-white transition-colors focus:outline-2 focus:outline-blue-300 focus:outline-offset-2";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-badge-white.png"
            alt="BauBeleg"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-sm font-semibold text-white">BauBeleg</span>
        </div>
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} BauBeleg. Alle Rechte vorbehalten.
        </p>
        <nav className="flex gap-5">
          <Link href="/impressum" className={FOOTER_LINK_CLASS}>
            Impressum
          </Link>
          <Link href="/datenschutz" className={FOOTER_LINK_CLASS}>
            Datenschutz
          </Link>
          <Link href="/nutzungsbedingungen" className={FOOTER_LINK_CLASS}>
            Nutzungsbedingungen
          </Link>
        </nav>
      </div>
    </footer>
  );
}
