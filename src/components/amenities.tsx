import {
  Bath,
  BedDouble,
  Droplets,
  Flame,
  Refrigerator,
  Sofa,
  Tv,
  UtensilsCrossed,
  Wind,
  WashingMachine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Amenity = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const AMENITIES: Amenity[] = [
  {
    title: "Bağımsız yatak",
    description: "Tek kişilik yatak ve düzenli dinlenme alanı",
    icon: BedDouble,
  },
  {
    title: "LCD televizyon",
    description: "Odalarda televizyon ile günlük konfor",
    icon: Tv,
  },
  {
    title: "Çalışma & yemek masası",
    description: "Ders ve yemek için uygun masa düzeni",
    icon: UtensilsCrossed,
  },
  {
    title: "Gardırop & oturma",
    description: "Gardırop, oturma grubu veya çekyat",
    icon: Sofa,
  },
  {
    title: "Balkon",
    description: "Havalandırma ve ferahlık için balkon",
    icon: Wind,
  },
  {
    title: "Mutfak donanımı",
    description: "Tam boy veya mini buzdolabı, 2’li set üstü ocak",
    icon: Refrigerator,
  },
  {
    title: "Çamaşır makinesi",
    description: "Müstakil mutfak dolapları ve çamaşır makinesi",
    icon: WashingMachine,
  },
  {
    title: "Duşakabinli banyo",
    description: "Sürgülü duşakabin ve havalandırma sistemi",
    icon: Bath,
  },
  {
    title: "7/24 sıcak su",
    description: "Kesintisiz sıcak su ihtiyacı",
    icon: Droplets,
  },
  {
    title: "Merkezi ısınma",
    description: "Kaloriferli merkezi ısınma sistemi",
    icon: Flame,
  },
];

export function Amenities() {
  return (
    <section
      id="imkanlar"
      className="scroll-mt-20 border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-[0.06em] text-accent uppercase">
            İmkanlar
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Donanım ve yaşam kolaylıkları
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Odalar, mutfak ve banyolar temel ihtiyaçlarınızı karşılayacak
            şekilde hazırlanmıştır. Aşağıdaki liste mevcut donanımı özetler.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="bg-surface p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-olive">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
