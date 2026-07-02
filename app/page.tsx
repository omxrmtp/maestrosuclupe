import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { SecondaryBanner } from "@/components/SecondaryBanner";
import { Contact } from "@/components/Contact";
import { PaymentMethods } from "@/components/PaymentMethods";
import { HomeFaq } from "@/components/HomeFaq";
import { Footer } from "@/components/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { PromoPopup } from "@/components/PromoPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <SecondaryBanner />
        <Contact />
        <PaymentMethods />
        <HomeFaq />
      </main>
      <Footer />
      <FloatingWidget />
      <PromoPopup />
    </>
  );
}
