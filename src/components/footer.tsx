import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-olive text-stone-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-14">
        <div>
          <p className="text-lg font-semibold text-white">{SITE.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-300">
            {SITE.motto}
          </p>
        </div>

        <div className="grid gap-4 text-sm text-stone-300 sm:grid-cols-2">
          <div>
            <p className="font-medium text-white">Adres</p>
            <p className="mt-1">{SITE.fullAddress}</p>
          </div>
          <div>
            <p className="font-medium text-white">İletişim</p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-1 inline-block transition-colors hover:text-white"
            >
              {SITE.phoneDisplay}
            </a>
            <div className="mt-3 flex flex-col gap-1.5">
              <a
                href={SITE.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Google Haritalar
              </a>
              <a
                href={SITE.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Google yorumları
              </a>
            </div>
          </div>
        </div>

        <p className="border-t border-white/10 pt-6 text-xs text-stone-400">
          © {year} {SITE.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
