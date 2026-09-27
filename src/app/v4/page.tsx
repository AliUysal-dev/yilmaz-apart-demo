import Image from "next/image";
import type { Metadata } from "next";
import {
  BadgeCheck,
  Bath,
  BedDouble,
  BookOpen,
  Droplets,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Refrigerator,
  Sofa,
  Tv,
  UtensilsCrossed,
  WashingMachine,
  Wind,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { V4StickyBar } from "./sticky-bar";

export const metadata: Metadata = {
  title: `${SITE.name} | Bahçelievler Listeleme — v4`,
  description: SITE.motto,
};

const MOSAIC = [
  {
    src: "/images/oda-salon-tv.jpg",
    alt: "Salon, televizyon ve oturma alanı",
  },
  {
    src: "/images/mutfak-camasir-makinesi.jpg",
    alt: "Mutfak ve çamaşır makinesi",
  },
  {
    src: "/images/oda-yatak-balkon.jpg",
    alt: "Yatak alanı ve balkon",
  },
  {
    src: "/images/banyo-dusakabin.jpg",
    alt: "Duşakabinli banyo",
  },
] as const;

const SALON = [
  { icon: Tv, label: "LCD televizyon" },
  { icon: UtensilsCrossed, label: "Çalışma masası" },
  { icon: Sofa, label: "Çekyat takımı" },
  { icon: BedDouble, label: "Baza yatak" },
  { icon: Wind, label: "Balkon" },
] as const;

const MUTFAK = [
  { icon: WashingMachine, label: "Çamaşır makinesi" },
  { icon: Refrigerator, label: "Buzdolabı" },
  { icon: Flame, label: "Set üstü ocak" },
  { icon: UtensilsCrossed, label: "Mutfak dolapları" },
] as const;

const KONFOR = [
  { icon: Bath, label: "Duşakabin banyo" },
  { icon: Flame, label: "Kaloriferli ısınma" },
  { icon: Droplets, label: "7/24 sıcak su" },
] as const;

export default function V4Page() {
  return (
    <div className="min-h-full bg-[#FAFAF9] text-stone-900">
      <main className="pb-24 lg:pb-16">
        {/* Listing header */}
        <header className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10">
          <h1 className="max-w-3xl text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl lg:text-[2rem] lg:leading-snug">
            Yılmaz Kız Apart — Bahçelievler&apos;de 20 Yıllık Güven ve Huzur
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-stone-600">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
              Isparta Bahçelievler
            </span>
            <span className="hidden text-stone-300 sm:inline" aria-hidden="true">
              •
            </span>
            <span>Tarım İl Müd. Lojmanları Karşısı</span>
            <span className="hidden text-stone-300 sm:inline" aria-hidden="true">
              •
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-2 py-0.5 text-xs font-medium text-stone-800">
              <BadgeCheck
                className="size-3.5 text-[#C2410C]"
                aria-hidden="true"
              />
              20 Yıllık Aile İşletmesi
            </span>
          </div>
        </header>

        {/* Photo mosaic — Airbnb style */}
        <section
          className="mx-auto mt-6 max-w-6xl px-4 sm:mt-8 sm:px-6"
          aria-label="Apart fotoğrafları"
        >
          <div className="grid gap-2 md:grid-cols-2 md:grid-rows-2 md:h-[420px] lg:h-[480px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto md:row-span-2 md:h-full">
              <Image
                src="/images/bina-ana-gorunum.jpg"
                alt="Yılmaz Kız Apart dış cephe — ana görsel"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 md:h-full">
              {MOSAIC.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative aspect-square overflow-hidden rounded-xl md:aspect-auto md:h-full ${
                    i === 1 ? "rounded-tr-xl" : ""
                  } ${i === 3 ? "rounded-br-xl" : ""}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two-column listing body */}
        <div className="mx-auto mt-10 grid max-w-6xl gap-10 px-4 sm:px-6 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          {/* Left column */}
          <div className="space-y-10 lg:col-span-7 xl:col-span-8">
            {/* Host / yönetim */}
            <section
              id="hakkimizda"
              className="scroll-mt-8 border-b border-stone-200 pb-10"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-semibold text-stone-800"
                  aria-hidden="true"
                >
                  YA
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-stone-900">
                    Ev sahibi / Yönetim
                  </h2>
                  <p className="mt-1 text-sm text-stone-500">
                    Yılmaz Apart · Isparta Bahçelievler
                  </p>
                </div>
              </div>

              <p className="mt-6 text-[15px] leading-relaxed text-stone-700">
                20 yıldır aile sıcaklığıyla hizmet veren Yılmaz Apart yönetimi.
                Amacımız lüks vaatler değil; ailesinden uzakta okuyan kız
                öğrenciler için sakin, temiz ve sorumluluk sahibi bir ikinci
                ev ortamı sunmak.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-stone-600">
                Kapımız her dönemde açık, iletişimimiz doğrudan ve samimi.
                Merkezi konumumuz sayesinde kampüs, market ve ulaşım
                noktalarına yakınsınız. Odalar günlük ihtiyaçlara göre
                donatılmış; ısıtma, sıcak su ve temel eşyalar hazır.
              </p>
            </section>

            {/* Features */}
            <section id="imkanlar" className="scroll-mt-8 space-y-8 border-b border-stone-200 pb-10">
              <h2 className="text-xl font-semibold text-stone-900">
                Daire özellikleri
              </h2>

              <FeatureBlock title="Salon & Yaşam" items={SALON} />
              <FeatureBlock title="Mutfak" items={MUTFAK} />
              <FeatureBlock title="Bina & Konfor" items={KONFOR} />
            </section>

            {/* Rules */}
            <section className="scroll-mt-8 space-y-4 border-b border-stone-200 pb-10">
              <h2 className="text-xl font-semibold text-stone-900">
                Kurallar ve bilgilendirme
              </h2>
              <ul className="space-y-3">
                {[
                  {
                    icon: BadgeCheck,
                    title: "Güvenli aile ortamı",
                    text: "Yaklaşık 20 yıllık aile işletmesi; kız öğrenci odaklı, güven ve düzen öncelikli.",
                  },
                  {
                    icon: BookOpen,
                    title: "Sessiz çalışma saatleri",
                    text: "Ders ve dinlenme düzenine saygı; ortak yaşamda sakin bir apart kültürü.",
                  },
                  {
                    icon: MapPin,
                    title: "Merkezi konum",
                    text: "Bahçelievler Mah. 109. Cadde No: 7 — Tarım İl Müdürlüğü Lojmanları karşısı.",
                  },
                ].map((rule) => {
                  const Icon = rule.icon;
                  return (
                    <li key={rule.title} className="flex gap-3">
                      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-700">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-stone-900">
                          {rule.title}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-stone-600">
                          {rule.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Map */}
            <section id="konum" className="scroll-mt-8 space-y-4">
              <h2 className="text-xl font-semibold text-stone-900">Konum</h2>
              <div className="flex gap-2 text-sm text-stone-600">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-[#C2410C]"
                  aria-hidden="true"
                />
                <p>{SITE.fullAddress}</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
                <iframe
                  title="Yılmaz Kız Apart konum haritası"
                  src={SITE.mapsEmbedUrl}
                  className="h-[280px] w-full border-0 sm:h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <a
                  href={SITE.googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-[#C2410C] hover:text-[#9A3412]"
                >
                  Google Haritalar&apos;da aç
                </a>
                <a
                  href={SITE.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-[#C2410C] hover:text-[#9A3412]"
                >
                  Google&apos;da yorum yaz
                </a>
              </div>
            </section>
          </div>

          {/* Right sticky contact card — desktop */}
          <aside className="hidden lg:col-span-5 xl:col-span-4 lg:block">
            <div className="lg:sticky lg:top-8">
              <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-stone-900">
                  İletişim & Danışma
                </h2>
                <p className="mt-1 text-sm text-stone-500">
                  Doğrudan yönetimle görüşün
                </p>

                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="mt-5 flex items-center gap-2 text-base font-semibold text-stone-900"
                >
                  <Phone className="size-4 text-[#C2410C]" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>

                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#C2410C] text-sm font-semibold text-white transition-colors hover:bg-[#9A3412]"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Hemen Ara
                  </a>
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#128C7E] text-sm font-semibold text-white transition-colors hover:bg-[#0E7368]"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp&apos;tan Bilgi Al
                  </a>
                </div>

                <div className="mt-4 flex flex-col gap-1.5 border-t border-stone-100 pt-4 text-center text-xs">
                  <a
                    href={SITE.googleShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-stone-600 hover:text-stone-900"
                  >
                    Google Haritalar
                  </a>
                  <a
                    href={SITE.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-stone-600 hover:text-stone-900"
                  >
                    Google&apos;da yorum yaz
                  </a>
                </div>

                <p className="mt-4 text-center text-xs leading-relaxed text-stone-500">
                  Komisyonsuz, doğrudan yönetimden kiralık.
                </p>
              </div>
            </div>
          </aside>

          {/* Mobile contact block (before sticky bar) */}
          <div className="lg:hidden">
            <div className="rounded-xl border border-stone-200 bg-white p-5">
              <h2 className="text-base font-semibold text-stone-900">
                İletişim & Danışma
              </h2>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-3 flex items-center gap-2 text-base font-semibold text-stone-900"
              >
                <Phone className="size-4 text-[#C2410C]" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
              <div className="mt-3 flex flex-col gap-1.5 text-sm">
                <a
                  href={SITE.googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C2410C]"
                >
                  Google Haritalar
                </a>
                <a
                  href={SITE.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#C2410C]"
                >
                  Google&apos;da yorum yaz
                </a>
              </div>
              <p className="mt-3 text-xs text-stone-500">
                Komisyonsuz, doğrudan yönetimden kiralık.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-sm font-semibold text-stone-900">{SITE.name}</p>
          <p className="mt-1 text-sm text-stone-500">{SITE.fullAddress}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500">
            <a
              href={SITE.googleShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900"
            >
              Google Haritalar
            </a>
            <a
              href={SITE.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900"
            >
              Google yorumları
            </a>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </footer>

      <V4StickyBar />
    </div>
  );
}

function FeatureBlock({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{
    icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
    label: string;
  }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.label}
              className="flex items-center gap-3 text-sm text-stone-700"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white">
                <Icon className="size-4 text-stone-700" aria-hidden={true} />
              </span>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
