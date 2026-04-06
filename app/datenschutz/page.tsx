import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DatenschutzPage() {
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
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 text-sm leading-relaxed text-gray-700">
        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            1. Verantwortlicher
          </h2>
          <p>
            Tigon Automation Muratovic & Cungu GbR
            <br />
            Gartenstraße 50, 70563 Stuttgart
            <br />
            E-Mail: kontakt@tigonautomation.de
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            2. Verarbeitungszwecke
          </h2>
          <p>
            Wir verarbeiten personenbezogene Daten ausschließlich zum Zweck der
            Erstellung und des Versands von Baubeleganmeldungen gemäß VOB/B.
            Dies umfasst:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Projektdaten (Name, Adresse des Bauvorhabens)</li>
            <li>Kontaktdaten des Generalunternehmers (Firma, Name, E-Mail, Telefon)</li>
            <li>Leistungsbeschreibungen und Kalkulationsdaten</li>
            <li>Baustellenfotos</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            3. Rechtsgrundlagen
          </h2>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der ordnungsgemäßen Abwicklung von
            Bauprojekten).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            4. Auftragsverarbeiter
          </h2>
          <p>Wir setzen folgende Dienstleister ein:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Supabase Inc.</strong> — Datenbank und Dateispeicher
              (Serverstandort: Frankfurt am Main, EU). Auftragsverarbeitungsvertrag
              (DPA) liegt vor.
            </li>
            <li>
              <strong>Hetzner Online GmbH</strong> — Hosting der Webanwendung
              (Serverstandort: Deutschland, EU). DPA liegt vor.
            </li>
            <li>
              <strong>Resend Inc.</strong> — E-Mail-Versand. DPA liegt vor.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            5. Drittlandtransfer
          </h2>
          <p>
            Soweit Daten in die USA übermittelt werden, erfolgt dies auf
            Grundlage des EU-US Data Privacy Framework (Angemessenheitsbeschluss
            der EU-Kommission).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            6. Ihre Rechte
          </h2>
          <p>
            Sie haben gemäß Art. 15–21 DSGVO das Recht auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Richten Sie Anfragen an:
            kontakt@tigonautomation.de
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            7. Aufsichtsbehörde
          </h2>
          <p>
            Zuständige Aufsichtsbehörde ist der Landesbeauftragte für den
            Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI
            BW), Lautenschlagerstraße 20, 70173 Stuttgart.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            8. Hinweis zu Baustellenfotos
          </h2>
          <p>
            Bitte achten Sie darauf, dass hochgeladene Baustellenfotos keine
            erkennbaren Personen enthalten. Sollte dies unvermeidbar sein,
            stellen Sie sicher, dass die betroffenen Personen der Aufnahme
            zugestimmt haben.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
