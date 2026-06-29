import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function PaymentMethods() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-3"
            style={{ color: "var(--accent-color)" }}
          >
            Métodos de pago aceptados
          </h2>
          <div className="section-divider" />
        </Reveal>
        <Reveal delay={100}>
          <div className="flex justify-center mt-8">
            <Image
              src="/img/payment-methods.png"
              alt="Métodos de pago aceptados"
              width={1200}
              height={200}
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
