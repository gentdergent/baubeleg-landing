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
          <p className="font-semibold">
            Tigon Automation Muratovic & Cungu GbR
          </p>
          <p>Gartenstraße 50</p>
          <p>70563 Stuttgart</p>
        </div>

        <div>
          <p className="font-semibold">Vertreten durch:</p>
          <p>Edon Muratovic & Gent Cungu</p>
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
      </div>

      <Footer />
    </div>
  );
}
