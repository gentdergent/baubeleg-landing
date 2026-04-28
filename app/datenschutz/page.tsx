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
            Tigon Automation Muratovic &amp; Cungu GbR
            <br />
            Vertretungsberechtigte Gesellschafter: Edon Muratovic, Gent Cungu
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
            Erstellung und des Versands von Baudokumentation gemäß VOB/B
            (Nachträge, Behinderungsanzeigen, Stundenlohnzettel, Tagesrapporte).
            Dies umfasst:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Projektdaten (Name, Adresse des Bauvorhabens)</li>
            <li>
              Kontaktdaten des Generalunternehmers (Firma, Name, E-Mail,
              Telefon)
            </li>
            <li>Leistungsbeschreibungen und Kalkulationsdaten</li>
            <li>Baustellenfotos</li>
            <li>
              Optional: Sprachaufnahmen (Voice-to-Text) zur schnelleren
              Belegeingabe
            </li>
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
            Bauprojekten). Für technisch notwendige Cookies (Session) gilt §25
            Abs. 2 Nr. 2 TTDSG.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            4. Auftragsverarbeiter
          </h2>
          <p>Wir setzen folgende Dienstleister ein:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Hetzner Online GmbH</strong> — Hosting der Webanwendung,
              Datenbank (PostgreSQL) und Dateispeicher (MinIO; Baustellenfotos,
              Projektdokumente). Serverstandort: Deutschland, EU.
              Auftragsverarbeitungsvertrag (AVV) liegt vor.
            </li>
            <li>
              <strong>Sendinblue GmbH (Brevo)</strong> — Transaktionaler
              E-Mail-Versand (z.B. Bestätigungen, Behinderungsanzeigen).
              Serverstandort: EU. AVV liegt vor.
            </li>
            <li>
              <strong>Sentry Inc.</strong> (San Francisco, USA) —
              Fehlerprotokollierung und Performance-Monitoring der
              Webanwendung. AVV liegt vor. Datenübermittlung in die USA auf
              Basis von Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2
              lit. c DSGVO. Personenbezogene Daten (PII) werden in den
              Sentry-Sendings deaktiviert.
            </li>
            <li>
              <strong>Mistral AI SAS</strong> (Paris, Frankreich) — Verarbeitung
              optionaler Sprachdiktate (Voice-to-Text) für die Belegeingabe.
              Serverstandort: EU. AVV liegt vor.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            5. Drittlandtransfer
          </h2>
          <p>
            Eine Datenübermittlung in ein Drittland (USA) erfolgt ausschließlich
            an Sentry Inc. zum Zweck des Fehler-Monitorings auf Basis der
            Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c DSGVO. Alle
            anderen Auftragsverarbeiter (Hetzner, Brevo, Mistral AI)
            verarbeiten Daten ausschließlich innerhalb der EU.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            6. Server-Logfiles und Session-Cookies
          </h2>
          <p>
            Beim Aufruf der Website werden vom Server automatisch Logfiles
            erfasst (IP-Adresse, Zeitstempel, aufgerufene Seite, User-Agent).
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an Sicherheit und Stabilität). Speicherdauer: 7 Tage.
          </p>
          <p className="mt-2">
            Im eingeloggten App-Bereich werden technisch notwendige
            Session-Cookies (HttpOnly, Secure) für die Authentifizierung
            gesetzt. Diese sind für die Funktion der App zwingend erforderlich
            und bedürfen keiner gesonderten Einwilligung (§25 Abs. 2 Nr. 2
            TTDSG). Es findet kein Tracking, keine Reichweitenmessung und keine
            Werbe-Profilbildung statt.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            7. Speicherdauer
          </h2>
          <p>
            Wir speichern personenbezogene Daten nur solange, wie dies für die
            jeweiligen Verarbeitungszwecke erforderlich ist:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Projektdaten und Belege: Dauer der aktiven Nutzung sowie 6 Monate
              nach Account-Kündigung
            </li>
            <li>
              Steuerlich relevante Unterlagen: 10 Jahre gemäß §147 AO / §257
              HGB
            </li>
            <li>Server-Logfiles: 7 Tage</li>
            <li>
              Sentry-Fehlerberichte: 90 Tage (automatische Löschung durch
              Sentry)
            </li>
            <li>
              Sprachaufnahmen: nur transient während der Verarbeitung; werden
              nach Transkription nicht gespeichert
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            8. Ihre Rechte
          </h2>
          <p>
            Sie haben gemäß Art. 15–21 DSGVO das Recht auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Anfragen richten Sie bitte
            an: kontakt@tigonautomation.de
          </p>
          <p className="mt-2">
            In der App selbst stehen Ihnen unter „Einstellungen“ ein
            Datenexport (Art. 20 DSGVO) sowie eine vollständige Account-Löschung
            (Art. 17 DSGVO) zur Verfügung.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            9. Beschwerderecht bei der Aufsichtsbehörde
          </h2>
          <p>
            Sie haben das Recht, sich jederzeit bei der für uns zuständigen
            Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO):
          </p>
          <p className="mt-2">
            Landesbeauftragter für den Datenschutz und die Informationsfreiheit
            Baden-Württemberg (LfDI BW)
            <br />
            Lautenschlagerstraße 20, 70173 Stuttgart
            <br />
            poststelle@lfdi.bwl.de
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-gray-900">
            10. Hinweis zu Baustellenfotos
          </h2>
          <p>
            Bitte achten Sie darauf, dass hochgeladene Baustellenfotos keine
            erkennbaren Personen enthalten. Sollte dies unvermeidbar sein,
            stellen Sie sicher, dass die betroffenen Personen der Aufnahme und
            Speicherung zugestimmt haben.
          </p>
        </section>

        <p className="pt-2 text-xs text-gray-400">Stand: 2026-04-28</p>
      </div>

      <Footer />
    </div>
  );
}
