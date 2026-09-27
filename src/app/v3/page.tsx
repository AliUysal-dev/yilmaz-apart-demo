import Image from "next/image";
import type { Metadata } from "next";
import {
  Bath,
  BedDouble,
  Droplets,
  Flame,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Refrigerator,
  ShieldCheck,
  Sofa,
  Tv,
  UtensilsCrossed,
  WashingMachine,
  Wind,
} from "lucide-react";
import { SITE, TRUST_BADGES } from "@/lib/constants";
import { V3Header } from "./header";
import { V3StickyBar } from "./sticky-bar";

export const metadata: Metadata = {
  title: `${SITE.name} | Modern Minimal — v3`,
  description: SITE.motto,
};

const GALLERY = [
  {
    src: "/images/oda-salon-tv.jpg",
    alt: "Salon alanında televizyon ve oturma düzeni",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/oda-oturma-alani.jpg",
    alt: "Oda oturma alanı",
    span: "",
  },
  {
    src: "/images/oda-yatak-balkon.jpg",
    alt: "Yatak ve balkon yönü",
    span: "",
  },
  {
    src: "/images/mutfak-camasir-makinesi.jpg",
    alt: "Mutfak ve çamaşır makinesi",
    span: "sm:col-span-2",
  },
  {
    src: "/images/banyo-dusakabin.jpg",
    alt: "Duşakabinli banyo",
    span: "",
  },
  {
    src: "/images/oda-calisma.jpg",
    alt: "Çalışma ve yaşam alanı",
    span: "",
  },
  {
    src: "/images/mutfak-mini.jpg",
    alt: "Mutfak tezgah alanı",
    span: "",
  },
  {
    src: "/images/bina-giris.jpg",
    alt: "Bina girişi",
    span: "sm:col-span-2",
  },
] as const;

export default function V3Page() {
  return (
    <div className="min-h-full bg-zinc-50 text-neutral-950">
      <V3Header />

      <main className="pb-24 md:pb-0">
        {/* Hero bento */}
        <section id="ust" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8">
          <div className="grid gap-3 lg:grid-cols-12 lg:gap-3">
            <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-neutral-200 bg-white sm:min-h-[420px] lg:col-span-8 lg:min-h-[520px]">
              <Image
                src="/images/bina-ana-gorunum.jpg"
                alt="Yılmaz Kız Apart dış cephe görünümü"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between gap-8 rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 lg:col-span-4">
              <div>
                <p className="text-xs font-medium tracking-[0.08em] text-neutral-500 uppercase">
                  Isparta · {SITE.neighborhood}
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                  {SITE.name}
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  {SITE.motto}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#C2410C] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#9A3412]"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Ara — {SITE.phoneDisplay}
                </a>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-50"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp ile Yaz
                </a>
              </div>
            </div>
          </div>

          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm font-medium text-neutral-950"
              >
                <ShieldCheck
                  className="size-4 shrink-0 text-[#C2410C]"
                  aria-hidden="true"
                />
                {badge.label}
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section
          id="hakkimizda"
          className="scroll-mt-20 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        >
          <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-10">
            <p className="text-xs font-medium tracking-[0.08em] text-[#C2410C] uppercase">
              Hakkımızda
            </p>
            <div className="mt-4 grid gap-8 lg:grid-cols-12">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl lg:col-span-4">
                20 yıllık aile güveni
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-neutral-500 lg:col-span-8 sm:text-[15px]">
                <p className="text-neutral-800">
                  {SITE.name}, Isparta Bahçelievler&apos;de yaklaşık yirmi yıldır
                  kız öğrenciler için güvenli ve düzenli bir yaşam alanı
                  sunuyor.
                </p>
                <p>
                  Amacımız lüks vaatler değil; ailesinden uzakta okuyan
                  öğrenciler için sakin, temiz ve sorumluluk sahibi bir ikinci
                  ev ortamı oluşturmak. Kapımız her dönemde açık, iletişimimiz
                  doğrudan ve samimi.
                </p>
                <p>
                  Merkezi konumumuz sayesinde kampüs, market ve ulaşım
                  noktalarına yakınsınız. Odalarımız günlük ihtiyaçlara göre
                  donatılmış; ısıtma, sıcak su ve temel eşyalar hazır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities bento */}
        <section
          id="imkanlar"
          className="scroll-mt-20 mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16"
        >
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.08em] text-[#C2410C] uppercase">
              İmkanlar
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              Donanım ve yaşam kolaylıkları
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Odalar, mutfak ve banyolar temel ihtiyaçlarınızı karşılayacak
              şekilde hazırlanmıştır.
            </p>
          </div>

          <div className="grid auto-rows-[minmax(140px,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Featured: TV + çalışma */}
            <article className="relative min-h-[300px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 sm:col-span-2 lg:row-span-2 lg:min-h-[360px]">
              <Image
                src="/images/oda-salon-tv.jpg"
                alt="TV ve oturma alanı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-neutral-950/10"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-end p-5 sm:p-6 lg:min-h-[360px]">
                <div className="inline-flex size-9 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white">
                  <Tv className="size-4" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  TV ve çalışma alanı
                </h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-neutral-200">
                  LCD televizyon, çalışma/yemek masası ve oturma düzeni —
                  ders ve dinlenme aynı alanda.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["LCD TV", "Çalışma masası", "Oturma grubu"].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-white/25 bg-white/10 px-2.5 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Featured: Mutfak + çamaşır */}
            <article className="relative min-h-[300px] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 sm:col-span-2 lg:row-span-2 lg:min-h-[360px]">
              <Image
                src="/images/mutfak-camasir-makinesi.jpg"
                alt="Mutfak ve çamaşır makinesi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-neutral-950/10"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-end p-5 sm:p-6 lg:min-h-[360px]">
                <div className="inline-flex size-9 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white">
                  <WashingMachine className="size-4" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  Mutfak ve çamaşır
                </h3>
                <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-neutral-200">
                  Buzdolabı, 2&apos;li set üstü ocak, müstakil dolaplar ve
                  çamaşır makinesi.
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["Buzdolabı", "Ocak", "Çamaşır makinesi"].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-white/25 bg-white/10 px-2.5 py-1 text-xs font-medium text-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <AmenityCell
              icon={BedDouble}
              title="Bağımsız yatak"
              description="Tek kişilik yatak ve düzenli dinlenme alanı"
            />
            <AmenityCell
              icon={UtensilsCrossed}
              title="Çalışma & yemek"
              description="Ders ve yemek için uygun masa düzeni"
            />
            <AmenityCell
              icon={Sofa}
              title="Gardırop & oturma"
              description="Gardırop, oturma grubu veya çekyat"
            />
            <AmenityCell
              icon={Wind}
              title="Balkon"
              description="Havalandırma ve ferahlık için balkon"
            />
            <AmenityCell
              icon={Refrigerator}
              title="Mutfak donanımı"
              description="Tam boy veya mini buzdolabı, set üstü ocak"
            />
            <AmenityCell
              icon={Bath}
              title="Duşakabinli banyo"
              description="Sürgülü duşakabin ve havalandırma"
            />
            <AmenityCell
              icon={Droplets}
              title="7/24 sıcak su"
              description="Kesintisiz sıcak su ihtiyacı"
            />
            <AmenityCell
              icon={Flame}
              title="Merkezi ısınma"
              description="Kaloriferli merkezi ısınma sistemi"
            />
          </div>
        </section>

        {/* Gallery bento */}
        <section
          id="odalar"
          className="scroll-mt-20 mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16"
        >
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.08em] text-[#C2410C] uppercase">
              Yaşam alanları
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              Daire ve oda galerisi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Gerçek fotoğraflarla odalar, mutfak, banyo ve bina girişini
              inceleyebilirsiniz.
            </p>
          </div>

          <ul className="grid auto-rows-[180px] gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
            {GALLERY.map((item) => (
              <li
                key={item.src}
                className={`relative overflow-hidden rounded-xl border border-neutral-200 bg-white ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>

        {/* Location */}
        <section
          id="konum"
          className="scroll-mt-20 mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20"
        >
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.08em] text-[#C2410C] uppercase">
              Konum
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              Bahçelievler&apos;de merkezi adres
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Üniversiteye ve günlük ihtiyaç noktalarına yakın, ulaşımı kolay
              bir konumdayız.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/bina-ana-gorunum.jpg"
                    alt="Apart binası dış görünüm"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-neutral-200 p-5">
                  <div className="flex gap-3">
                    <MapPin
                      className="mt-0.5 size-5 shrink-0 text-[#C2410C]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-neutral-950">
                        {SITE.address}
                      </p>
                      <p className="mt-1 text-sm text-neutral-500">
                        {SITE.addressNote}
                      </p>
                      <p className="mt-1 text-sm text-neutral-500">{SITE.city}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={SITE.googleShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#C2410C] hover:text-[#9A3412]"
                    >
                      <Navigation className="size-4" aria-hidden="true" />
                      Google Haritalar&apos;da aç
                    </a>
                    <a
                      href={SITE.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#C2410C] hover:text-[#9A3412]"
                    >
                      Google&apos;da yorum yaz
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <h3 className="text-sm font-semibold text-neutral-950">
                  Çevre ve ulaşım
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-500">
                  <li>Tarım İl Müdürlüğü Lojmanları karşısı — kolay tarif</li>
                  <li>
                    Market, eczane ve toplu taşıma duraklarına yürüyüş mesafesi
                  </li>
                  <li>
                    Isparta şehir merkezine ve kampüs güzergahına yakın konum
                  </li>
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white lg:col-span-7">
              <iframe
                title="Yılmaz Kız Apart konum haritası"
                src={SITE.mapsEmbedUrl}
                className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-12">
          <div>
            <p className="text-base font-semibold text-neutral-950">{SITE.name}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500">
              {SITE.motto}
            </p>
          </div>
          <div className="grid gap-4 text-sm text-neutral-500 sm:grid-cols-2">
            <div>
              <p className="font-medium text-neutral-950">Adres</p>
              <p className="mt-1">{SITE.fullAddress}</p>
            </div>
            <div>
              <p className="font-medium text-neutral-950">İletişim</p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-1 inline-block hover:text-neutral-950"
              >
                {SITE.phoneDisplay}
              </a>
              <div className="mt-3 flex flex-col gap-1.5">
                <a
                  href={SITE.googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950"
                >
                  Google Haritalar
                </a>
                <a
                  href={SITE.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950"
                >
                  Google yorumları
                </a>
              </div>
            </div>
          </div>
          <p className="border-t border-neutral-200 pt-6 text-xs text-neutral-400">
            © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

      <V3StickyBar />
    </div>
  );
}

function AmenityCell({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white p-5">
      <span className="inline-flex size-9 items-center justify-center rounded-xl border border-neutral-200 bg-zinc-50 text-neutral-950">
        <Icon className="size-4" aria-hidden={true} />
      </span>
      <h3 className="mt-3 text-sm font-semibold text-neutral-950">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
        {description}
      </p>
    </article>
  );
}
