import { SITE } from "@/lib/constants";

export function About() {
  return (
    <section
      id="hakkimizda"
      className="scroll-mt-20 border-b border-border bg-surface"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium tracking-[0.06em] text-accent uppercase">
            Hakkımızda
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            20 yıllık aile güveni
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-8 lg:pt-8">
          <p className="text-lg text-foreground">
            {SITE.name}, Isparta Bahçelievler&apos;de yaklaşık yirmi yıldır kız
            öğrenciler için güvenli ve düzenli bir yaşam alanı sunuyor.
          </p>
          <p>
            Amacımız lüks vaatler değil; ailesinden uzakta okuyan öğrenciler
            için sakin, temiz ve sorumluluk sahibi bir ikinci ev ortamı
            oluşturmak. Kapımız her dönemde açık, iletişimimiz doğrudan ve
            samimi.
          </p>
          <p>
            Merkezi konumumuz sayesinde kampüs, market ve ulaşım noktalarına
            yakınsınız. Odalarımız günlük ihtiyaçlara göre donatılmış; ısıtma,
            sıcak su ve temel eşyalar hazır.
          </p>
        </div>
      </div>
    </section>
  );
}
