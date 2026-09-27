import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function V4StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href="tel:05447804478"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-stone-900 text-sm font-semibold text-white"
        >
          <Phone className="size-4" aria-hidden="true" />
          Hemen Ara
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#128C7E] text-sm font-semibold text-white"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
