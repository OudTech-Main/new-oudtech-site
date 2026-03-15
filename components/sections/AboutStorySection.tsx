import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AboutStorySection() {
  return (
    <section className="bg-white py-8 lg:py-28" aria-labelledby="story-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: image */}
          <RevealOnScroll direction="up" delay={0.1} threshold={0}>
            <div className="overflow-hidden bg-neutral-200/60">
              <Image
                src="/about-us.jpg"
                alt="OudTech team"
                width={680}
                height={460}
                className="h-[260px] w-full object-cover md:h-[350px] lg:h-[420px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 680px"
                priority
              />
            </div>
          </RevealOnScroll>

          {/* Right: story text */}
          <div className="lg:pl-6">
            <RevealOnScroll direction="right" delay={0.2} threshold={0}>
              <h2
                id="story-heading"
                className="text-[31.5px] leading-snug font-medium md:font-bold md:leading-[1.2] tracking-tight text-[#0F1010] md:text-3xl lg:text-4xl"
              >
                At OudTech, our story is one of passion, creativity, and a
                relentless pursuit of excellence.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={0.35} threshold={0}>
              <p className="mt-6 text-lg leading-5 text-[#696F77] lg:text-3xl lg:leading-7">
                <span className="lg:hidden leading-snug">
                  Oud-Technologies builds practical digital solutions focused on
                  product design and real-world problem solving.
                </span>
                <span className="hidden lg:inline">
                  Oud-Technologies is a product-driven technology company
                  building practical Digital solutions. We focus on product
                  design, user experience, and real-world problem solving,
                  operating at the intersection of software development and
                  innovation across fintech, rentals, emergency services, and
                  e-commerce.
                </span>
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
