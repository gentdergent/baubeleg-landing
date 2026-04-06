import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-100 py-4">
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-gray-500">
        <Link href="/impressum" className="hover:text-gray-600">
          Impressum
        </Link>
        <span className="hidden sm:inline">&middot;</span>
        <Link href="/datenschutz" className="hover:text-gray-600">
          Datenschutz
        </Link>
        <span className="hidden sm:inline">&middot;</span>
        <Link href="/nutzungsbedingungen" className="hover:text-gray-600">
          Nutzungsbedingungen
        </Link>
      </div>
    </footer>
  );
}
