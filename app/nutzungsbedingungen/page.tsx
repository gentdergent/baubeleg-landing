import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NutzungsbedingungenPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Zurück
      </Link>

      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Nutzungsbedingungen
      </h1>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            1. Zweck der App
          </h2>
          <p>
            BauBeleg ist ein technisches Hilfsmittel zur Erstellung und
            zum Versand von Baubeleganmeldungen im Bauwesen. Sie ersetzt
            <strong> keine Rechtsberatung</strong>. Für die rechtliche
            Bewertung Ihrer Baubelegansprüche konsultieren Sie bitte einen
            Fachanwalt für Baurecht.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            2. Verantwortung des Nutzers
          </h2>
          <p>
            Der Nutzer ist für die Richtigkeit aller eingegebenen Daten
            verantwortlich. Vor dem Versand sollte der Baubeleg über die
            PDF-Vorschau geprüft werden.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            3. Haftungsausschluss
          </h2>
          <p>
            Die Tigon Automation Muratovic & Cungu GbR haftet nicht für die
            inhaltliche Richtigkeit der generierten Dokumente. Die App stellt
            Textbausteine und Berechnungsformeln zur Verfügung — die
            Verantwortung für den Inhalt liegt beim Nutzer.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            4. Versandwege
          </h2>
          <p>
            <strong>E-Mail:</strong> Der Versand per E-Mail erzeugt eine
            dokumentierbare Zustellung und ist der empfohlene Versandweg für
            rechtlich relevante Dokumente.
          </p>
          <p className="mt-2">
            <strong>WhatsApp:</strong> Der Versand über WhatsApp dient
            ausschließlich als zusätzliche Benachrichtigung. WhatsApp-Nachrichten
            haben keine rechtliche Zustellungswirkung im Sinne der VOB/B.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            5. Anwendbares Recht
          </h2>
          <p>
            Es gilt deutsches Recht. Gerichtsstand ist Stuttgart.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
