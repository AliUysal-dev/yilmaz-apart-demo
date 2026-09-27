"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  category: "oda" | "mutfak" | "banyo" | "bina";
};

const GALLERY: GalleryItem[] = [
  {
    src: "/images/oda-salon-tv.jpg",
    alt: "Salon alanında televizyon ve oturma düzeni",
    category: "oda",
  },
  {
    src: "/images/oda-oturma-alani.jpg",
    alt: "Oda oturma alanı",
    category: "oda",
  },
  {
    src: "/images/oda-yatak-balkon.jpg",
    alt: "Yatak ve balkon yönü",
    category: "oda",
  },
  {
    src: "/images/oda-calisma.jpg",
    alt: "Çalışma ve yaşam alanı",
    category: "oda",
  },
  {
    src: "/images/oda-gardrop.jpg",
    alt: "Gardırop ve oda düzeni",
    category: "oda",
  },
  {
    src: "/images/oda-genel.jpg",
    alt: "Oda genel görünüm",
    category: "oda",
  },
  {
    src: "/images/mutfak-camasir-makinesi.jpg",
    alt: "Mutfak ve çamaşır makinesi",
    category: "mutfak",
  },
  {
    src: "/images/mutfak-mini.jpg",
    alt: "Mutfak tezgah ve dolap alanı",
    category: "mutfak",
  },
  {
    src: "/images/banyo-dusakabin.jpg",
    alt: "Duşakabinli banyo",
    category: "banyo",
  },
  {
    src: "/images/banyo-lavabo.jpg",
    alt: "Banyo lavabo alanı",
    category: "banyo",
  },
  {
    src: "/images/bina-ana-gorunum.jpg",
    alt: "Apart dış cephe",
    category: "bina",
  },
  {
    src: "/images/bina-giris.jpg",
    alt: "Bina girişi",
    category: "bina",
  },
];

const TABS = [
  { id: "tumu", label: "Tümü" },
  { id: "oda", label: "Odalar" },
  { id: "mutfak", label: "Mutfak" },
  { id: "banyo", label: "Banyo" },
  { id: "bina", label: "Bina" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function Gallery() {
  const [active, setActive] = useState<TabId>("tumu");

  const items =
    active === "tumu"
      ? GALLERY
      : GALLERY.filter((item) => item.category === active);

  return (
    <section
      id="odalar"
      className="scroll-mt-20 border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.06em] text-accent uppercase">
              Yaşam alanları
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Daire ve oda galerisi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Gerçek fotoğraflarla odalar, mutfak, banyo ve bina girişini
              inceleyebilirsiniz.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Galeri kategorileri"
            className="flex flex-wrap gap-2"
          >
            {TABS.map((tab) => {
              const selected = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={
                    selected
                      ? "rounded-lg border border-foreground bg-foreground px-3 py-1.5 text-sm font-medium text-white"
                      : "rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-stone-300 hover:text-foreground"
                  }
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-stone-100"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
