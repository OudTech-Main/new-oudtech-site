import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { LetsTalkButton } from "@/components/layout/Header";

export default function ServicesPageHero() {
  return (
    <section className="relative min-h-screen" aria-label="Services hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/services-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-32 text-center lg:px-12 lg:pt-44">
        {/* Label */}
        <RevealOnScroll direction="up" delay={0.1} threshold={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-sm font-medium text-white/80">
              OUR SERVICES
            </span>
          </div>
        </RevealOnScroll>

        {/* Heading */}
        <RevealOnScroll direction="up" delay={0.2} threshold={0}>
          <h1 className="mt-6 max-w-3xl text-[28px] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]">
            Smart Solutions for{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffffff 0%, #979797 100%)",
              }}
            >
              Modern Businesses
            </span>
          </h1>
        </RevealOnScroll>

        {/* Description */}
        <RevealOnScroll direction="up" delay={0.35} threshold={0}>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#B6B9BC]">
            From product design to full-scale development, we deliver end-to-end
            digital solutions across fintech, rentals, emergency services, and
            e-commerce — built to solve real problems and drive measurable
            results.
          </p>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll direction="up" delay={0.5} threshold={0}>
          <div className="mt-10">
            <LetsTalkButton href="/contact" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
