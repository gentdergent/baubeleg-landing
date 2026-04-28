import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Zurück
      </Link>

      <h1 className="mb-6 text-2xl font-bold text-gray-900">Impressum</h1>

      <div className="space-y-4 text-base text-gray-700">
        <div>
          <p className="font-semibold">Angaben gemäß §5 TMG:</p>
          <p className="font-semibold">
            Tigon Automation Muratovic &amp; Cungu GbR
          </p>
          <p>Rechtsform: Gesellschaft bürgerlichen Rechts (GbR)</p>
          <p>Gartenstraße 50</p>
          <p>70563 Stuttgart</p>
          <p>Deutschland</p>
        </div>

        <div>
          <p className="font-semibold">Vertretungsberechtigte Gesellschafter:</p>
          <p>Edon Muratovic (einzelvertretungsberechtigt)</p>
          <p>Gent Cungu (einzelvertretungsberechtigt)</p>
        </div>

        <div>
          <p className="font-semibold">Kontakt:</p>
          <p>E-Mail: kontakt@tigonautomation.de</p>
        </div>

        <div>
          <p className="font-semibold">Umsatzsteuer:</p>
          <p>
            Gemäß §19 UStG wird keine Umsatzsteuer berechnet
            (Kleinunternehmerregelung).
          </p>
        </div>

        <div>
          <p className="font-semibold">
            Verantwortlich für den Inhalt nach §18 Abs. 2 MStV:
          </p>
          <p>Edon Muratovic</p>
          <p>Gartenstraße 50, 70563 Stuttgart</p>
        </div>

        <div>
          <p className="font-semibold">
            Online-Streitbeilegung / Verbraucherschlichtung:
          </p>
          <p>
            Die EU-Kommission stellt unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>{" "}
            eine Plattform zur Online-Streitbeilegung bereit. Wir sind nicht
            bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen (§36 VSBG).
          </p>
          <p className="mt-2">
            Hinweis: BauBeleg richtet sich ausschließlich an Unternehmer im
            Sinne von §14 BGB (B2B). Ein Widerrufsrecht nach §§312 ff. BGB
            besteht für Unternehmer nicht.
          </p>
        </div>

        <div className="pt-2 text-xs text-gray-400">Stand: 2026-04-28</div>
      </div>

      <Footer />
    </div>
  );
}
