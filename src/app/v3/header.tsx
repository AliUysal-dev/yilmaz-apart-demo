"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function V3Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a
          href="#ust"
          className="text-sm font-semibold tracking-tight text-neutral-950"
        >
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Ana menü">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden items-center gap-2 rounded-xl bg-neutral-950 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Hemen Ara
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-neutral-200 text-neutral-950 md:hidden"
            aria-expanded={open}
            aria-controls="v3-mobile-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="v3-mobile-nav"
          className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden"
          aria-label="Mobil menü"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-950 hover:bg-neutral-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
