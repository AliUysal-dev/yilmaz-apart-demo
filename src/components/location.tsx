import { MapPin, Navigation, Star } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export function Location() {
  return (
    <section id="konum" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.06em] text-accent uppercase">
            Konum
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Bahçelievler&apos;de merkezi adres
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Üniversiteye ve günlük ihtiyaç noktalarına yakın, ulaşımı kolay bir
            konumdayız.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-6 lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/bina-ana-gorunum.jpg"
                  alt="Apart binası dış görünüm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-border bg-surface p-5">
                <div className="flex gap-3">
                  <MapPin
                    className="mt-0.5 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {SITE.address}
                    </p>
                    <p className="mt-1 text-sm text-muted">{SITE.addressNote}</p>
                    <p className="mt-1 text-sm text-muted">{SITE.city}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <a
                    href={SITE.googleShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    <Navigation className="size-4" aria-hidden="true" />
                    Google Haritalar&apos;da aç
                  </a>
                  <a
                    href={SITE.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    <Star className="size-4" aria-hidden="true" />
                    Google&apos;da yorum yaz
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                Çevre ve ulaşım
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-muted">
                <li>Tarım İl Müdürlüğü Lojmanları karşısı — kolay tarif</li>
                <li>Market, eczane ve toplu taşıma duraklarına yürüyüş mesafesi</li>
                <li>Isparta şehir merkezine ve kampüs güzergahına yakın konum</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-border bg-stone-100">
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
        </div>
      </div>
    </section>
  );
}
