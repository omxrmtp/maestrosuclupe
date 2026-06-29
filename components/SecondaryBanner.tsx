import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function SecondaryBanner() {
  return (
    <section className="w-full bg-black">
      <Reveal>
        <picture className="block w-full">
          <source media="(min-width: 768px)" srcSet="/img/banners/secondary-desktop.webp" />
          <Image
            src="/img/banners/secondary-mobile.webp"
            alt="Banner promocional"
            width={1080}
            height={1920}
            className="block md:hidden w-full h-auto"
          />
          <Image
            src="/img/banners/secondary-desktop.webp"
            alt="Banner promocional"
            width={1920}
            height={1080}
            className="hidden md:block w-full h-auto"
          />
        </picture>
      </Reveal>
    </section>
  );
}
