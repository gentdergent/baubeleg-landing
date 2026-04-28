import Image from "next/image";
import {
  FileText,
  ClipboardList,
  AlertTriangle,
  Clock,
  Users,
  Truck,
  Mic,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  X,
  Shield,
  MapPin,
  Scale,
} from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn, HoverLift } from "@/components/marketing/motion-wrapper";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { Footer } from "@/components/layout/footer";

const APP_URL = "https://app.baubeleg.de";

// ─── Data ────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  "Nachträge gehen in WhatsApp-Chats unter — und damit potenziell mehrere Tausend Euro pro Auftrag verloren",
  "Excel-Tabellen auf dem Büro-PC — auf der Baustelle hast du nichts",
  "Handschriftliche Rapporte werden unleserlich oder gehen verloren",
  "Behinderungen werden zu spät gemeldet — Anspruch verfallen, Geld weg",
  "Stundenlohnzettel fehlen beim GU-Abschluss — du arbeitest umsonst",
  "Freitag 16 Uhr: Der GU sagt 'war so vereinbart.' Du hast keinen Nachweis.",
];

const SECONDARY_FEATURES = [
  {
    icon: ClipboardList,
    title: "Tagesrapporte",
    description:
      "Arbeitsleistung pro Tag erfassen und lückenlos nachweisen — rechtssicher und schnell.",
  },
  {
    icon: Users,
    title: "Mitarbeiter verwalten",
    description:
      "Team per Einladungslink zur Baustelle zuordnen — kein App-Account nötig für Mitarbeiter.",
  },
  {
    icon: Truck,
    title: "Fahrzeuge & Fuhrpark",
    description:
      "Fahrzeuge zentral verwalten und Einsätze den Baustellen zuordnen.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Baustelle anlegen",
    description:
      "GU-Daten hinterlegen, Mitarbeiter per Link einladen — in unter 3 Minuten startklar.",
  },
  {
    number: "02",
    title: "Beleg erstellen",
    description:
      "Nachtrag, Rapport oder Stundenlohnzettel direkt auf dem Handy ausfüllen — auch per Sprache.",
  },
  {
    number: "03",
    title: "An GU senden",
    description:
      "PDF automatisch generiert, per E-Mail an den GU — Nachweis gesichert, Anspruch gesichert.",
  },
];

const TRADES = [
  "Bodenleger",
  "Fliesenleger",
  "Maler",
  "Trockenbauer",
  "Estrichleger",
  "SHK-Betriebe",
  "Elektriker",
  "Dachdecker",
  "Zimmerer",
  "Schreiner",
  "Stuckateure",
  "Gerüstbauer",
  "Maurer",
  "Isolierer",
  "Metallbauer",
  "Glaser",
  "Pflasterer",
  "GaLa-Betriebe",
  "Heizungsinstallateure",
  "Sanitärinstallateure",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white text-slate-900">
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-badge-white.png"
              alt="BauBeleg"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-base font-bold tracking-tight text-white">
              BauBeleg
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/auth/login`}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Login
            </a>
            <a
              href={`${APP_URL}/auth/register`}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Kostenlos testen
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 min-h-[min(100dvh,860px)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/screenshots/hero-construction-site.png"
            alt=""
            fill
            priority
            className="object-cover object-[50%_60%]"
            sizes="100vw"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.82) 30%, rgba(2,6,23,0.55) 55%, rgba(2,6,23,0.30) 75%, rgba(2,6,23,0.15) 100%), linear-gradient(to top, rgba(2,6,23,0.40) 0%, rgba(2,6,23,0.0) 35%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-8">
            <FadeInUp>
              <div className="text-center lg:text-left">
                <h1 className="text-[1.7rem] font-extrabold leading-tight tracking-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.6)] sm:text-5xl">
                  Jeder Nachtrag den du nicht{" "}
                  <span className="text-orange-400">dokumentierst</span> ist Geld
                  das du verschenkst.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] lg:mx-0 mx-auto">
                  BauBeleg dokumentiert Nachträge, Behinderungen und Stundenlohn in
                  unter einer Minute — direkt auf der Baustelle. Entwickelt für VOB/B-Prozesse. Per Sprache
                  oder Tippen.
                </p>
                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start sm:justify-center">
                  <a
                    href={`${APP_URL}/auth/register`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-colors focus:outline-2 focus:outline-blue-300 focus:outline-offset-2 sm:w-auto"
                  >
                    Jetzt kostenlos testen
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={`${APP_URL}/auth/login`}
                    className="flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-100 hover:border-white/40 hover:bg-white/10 hover:text-white transition-colors focus:outline-2 focus:outline-blue-300 focus:outline-offset-2 sm:w-auto"
                  >
                    Login
                  </a>
                </div>
                <p className="mt-4 text-sm text-slate-400 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  Kein App Store. Keine Kreditkarte zum Testen.
                </p>
                <div className="mt-8 max-w-xl rounded-2xl border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm px-6 py-4 lg:mx-0 mx-auto">
                  <p className="text-sm font-semibold text-orange-300">
                    Erfahrungsberichte aus der Praxis zeigen: Viele Nachtragsansprüche kleiner Betriebe werden mangels Dokumentation nicht geltend gemacht.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <div className="min-w-0">
            <ScaleIn delay={0.2}>
              <div className="flex justify-center lg:mt-8 lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-blue-500/10 blur-2xl" />
                  <IPhoneMockup
                    model="15-pro"
                    color="space-black"
                    scale={0.62}
                    screenBg="#f8fafc"
                    shadow="0 24px 60px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4)"
                  >
                    <Image
                      src="/screenshots/app-preview-foto-versand.png"
                      alt="BauBeleg App — Foto & Versand: Nachtrag dokumentieren und per WhatsApp an den GU senden"
                      width={393}
                      height={852}
                      className="h-full w-full object-cover object-top"
                      priority
                    />
                  </IPhoneMockup>
                </div>
              </div>
            </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ────────────────────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-white px-4 py-4">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <span className="text-sm text-slate-600">DSGVO-konform</span>
          </div>
          <div className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <span className="text-sm text-slate-600">Serverstandort Deutschland</span>
          </div>
          <div className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <span className="text-sm text-slate-600">Für VOB/B-Prozesse</span>
          </div>
        </div>
      </section>

      {/* ── Problem ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <FadeInUp>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Kennst du das?
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Das passiert jeden Tag auf deutschen Baustellen
              </h2>
            </div>
          </FadeInUp>
          <StaggerContainer className="mt-10 grid gap-3 sm:grid-cols-2">
            {PROBLEMS.map((problem) => (
              <StaggerItem key={problem}>
                <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-white p-4 shadow-sm">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <X className="h-3 w-3 text-red-500" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium text-slate-700">{problem}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 px-6 py-6 text-center">
            <p className="text-base font-semibold text-orange-900">
              Das kostet <strong>dich</strong> Geld — und Ansprüche, die{" "}
              <strong>du</strong> nicht mehr einklagen kannst.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeInUp>
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Deine Werkzeuge auf der Baustelle
              </h2>
              <p className="mt-3 text-slate-500">
                Sechs Werkzeuge. Eine App. Kein Papierkram mehr.
              </p>
            </div>
          </FadeInUp>

          <div className="mt-12 flex flex-col gap-5">
            <FadeInUp>
              <div className="rounded-2xl border border-slate-100 border-l-4 border-l-orange-500 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                    Kernfunktion
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Nachträge in unter einer Minute
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Foto machen, per Sprache diktieren, Preis kalkulieren — PDF geht direkt
                  an den GU. VOB/B §2 verlangt Ankündigung vor Ausführung — BauBeleg erledigt das.
                </p>
                <p className="mt-3 text-sm font-semibold text-orange-700">
                  &rarr; Ein geretteter Nachtrag (&euro;3.000&ndash;10.000) zahlt die App für 5+ Jahre
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="rounded-2xl border border-slate-100 border-l-4 border-l-orange-500 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">
                    Einzigartig in dieser App
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Behinderungsanzeige — sofort melden
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Der GU blockiert dich? VOB/B §6 fordert unverzügliche Meldung — wer wartet, verliert den Anspruch. Mit BauBeleg in Sekunden erledigt.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="rounded-2xl border border-slate-100 border-l-4 border-l-blue-500 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Abrechnung
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Stundenlohnzettel mit digitaler Unterschrift
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Mitarbeiter, Stunden, Material erfassen. Bauleiter unterschreibt
                  digital. Sauber abgerechnet, dokumentiert nach branchenüblichen Anforderungen.
                </p>
              </div>
            </FadeInUp>
          </div>

          <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-3">
            {SECONDARY_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200/60">
                      <Icon className="h-4 w-4 text-slate-600" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl bg-slate-900 p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600">
                <Mic className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white">Voice-to-Text</p>
                <p className="mt-1 text-sm text-slate-400">
                  Belege per Sprache diktieren — keine Tipperei mit Arbeitshandschuhen.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl bg-slate-900 p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600">
                <Smartphone className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white">Kein App Store nötig</p>
                <p className="mt-1 text-sm text-slate-400">
                  BauBeleg direkt auf dem Handy-Startbildschirm installieren — Android
                  und iPhone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Gebaut für
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1.5">
            {TRADES.map((trade, i) => (
              <span key={trade} className="text-sm font-medium text-slate-600">
                {trade}{i < TRADES.length - 1 && <span className="ml-1.5 text-slate-300">&middot;</span>}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-base italic text-slate-700">
              &ldquo;Als Bodenleger verlierst du schnell den Überblick über Nachträge. Mit
              BauBeleg hab ich alles auf dem Handy — und der GU kann nichts mehr
              abstreiten.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-900">
              — Bodenleger, 8 Mitarbeiter, Stuttgart
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <FadeInUp>
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                In 3 Schritten startklar
              </h2>
              <p className="mt-3 text-slate-500">
                Keine Schulung. Kein IT-Experte. Einfach loslegen.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  {index < STEPS.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] top-6 hidden h-px w-full bg-blue-200 sm:block" />
                  )}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-md shadow-blue-600/20">
                      <span className="text-sm font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
            <p className="text-sm font-semibold tracking-wide text-slate-700">
              Foto &rarr; Sprache &rarr; PDF &rarr; Gesendet
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-24">
        <FadeInUp>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Image
                src="/logo-badge-white.png"
                alt="BauBeleg"
                width={56}
                height={56}
                className="h-14 w-14"
              />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Heute noch starten.
            </h2>
            <p className="mt-3 text-base font-medium text-orange-400">
              Dein erster Nachtrag ist in unter einer Minute dokumentiert.
            </p>
            <p className="mt-3 text-lg text-slate-300">
              Keine Kreditkarte. Keine Schulung. Einfach anmelden und loslegen.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`${APP_URL}/auth/register`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors focus:outline-2 focus:outline-blue-300 focus:outline-offset-2 sm:w-auto"
              >
                Jetzt kostenlos testen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`${APP_URL}/auth/login`}
                className="flex w-full items-center justify-center rounded-xl border border-slate-600 px-8 py-4 text-base font-semibold text-slate-200 hover:border-slate-400 hover:text-white transition-colors focus:outline-2 focus:outline-blue-300 focus:outline-offset-2 sm:w-auto"
              >
                Login
              </a>
            </div>
          </div>
        </FadeInUp>
      </section>

      <Footer />
    </div>
  );
}
