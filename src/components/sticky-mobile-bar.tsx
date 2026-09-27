import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          <Phone className="size-4" aria-hidden="true" />
          Hemen Ara
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-whatsapp text-sm font-semibold text-white transition-colors hover:bg-whatsapp-hover"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
