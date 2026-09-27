import { About } from "@/components/about";
import { Amenities } from "@/components/amenities";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { StickyMobileBar } from "@/components/sticky-mobile-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
