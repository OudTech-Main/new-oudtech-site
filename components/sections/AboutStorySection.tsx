import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AboutStorySection() {
  return (
    <section className="bg-white py-8 lg:py-28" aria-labelledby="story-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: image */}
          <RevealOnScroll direction="up" delay={0.1} threshold={0}>
            <div className="overflow-hidden rounded-2xl bg-neutral-200/60">
              <Image
                src="/story-img.png"
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
              <p className="mt-6 text-base leading-5 text-[#696F77] lg:text-xl lg:leading-7">
                <span className="lg:hidden leading-snug">
                   It all started with a desire to create something meaningful—to help businesses bring their ideas to life through technology.
                  <br></br>
                  Over time, that passion has grown into a commitment to delivering solutions that truly make a difference. We work closely with our clients, understanding their vision and transforming it into digital products that are simple, effective, and impactful.
                  <br></br>
                  For us, it’s not just about building software,it’s about building relationships, creating value, and being part of our clients’ success stories.
                </span>
                <span className="hidden lg:inline">
                  It all started with a desire to create something meaningful—to help businesses bring their ideas to life through technology.
                  <br></br>
                  Over time, that passion has grown into a commitment to delivering solutions that truly make a difference. We work closely with our clients, understanding their vision and transforming it into digital products that are simple, effective, and impactful.
                  <br></br>
                  For us, it’s not just about building software,it’s about building relationships, creating value, and being part of our clients’ success stories.
                </span>
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
