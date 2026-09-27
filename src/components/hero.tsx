import Image from "next/image";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { SITE, TRUST_BADGES } from "@/lib/constants";

export function Hero() {
  return (
    <section id="ust" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/bina-ana-gorunum.jpg"
          alt="Yılmaz Kız Apart dış cephe görünümü"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/45 to-stone-950/25"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:min-h-[85vh]">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-sm font-medium tracking-[0.08em] text-stone-200 uppercase">
            Isparta · Bahçelievler
          </p>
          <h1 className="animate-fade-up delay-100 mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="animate-fade-up delay-200 mt-5 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
            {SITE.motto}
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              <Phone className="size-4" aria-hidden="true" />
              Ara — {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp ile Yaz
            </a>
          </div>
        </div>

        <ul className="animate-fade-in delay-300 mt-10 grid gap-3 border-t border-white/20 pt-8 sm:grid-cols-3">
          {TRUST_BADGES.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-2.5 text-sm font-medium text-stone-100"
            >
              <ShieldCheck
                className="size-4 shrink-0 text-orange-200"
                aria-hidden="true"
              />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
