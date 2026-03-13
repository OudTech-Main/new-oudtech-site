import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ParallaxSection from "@/components/ui/ParallaxSection";
import Image from "next/image";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text column */}
          <div>
            <RevealOnScroll direction="left">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
                About Us
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="left" delay={0.15}>
              <h2
                id="about-heading"
                className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                We build things that last
              </h2>
            </RevealOnScroll>
            <RevealOnScroll direction="left" delay={0.25}>
              <p className="mt-6 text-lg leading-8 text-neutral-400">
                Oudtech is a technology studio founded on the belief that great
                software is the intersection of engineering rigour and thoughtful
                design. We partner with startups and enterprises alike to craft
                products people love to use.
              </p>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll direction="up" delay={0.35}>
              <dl className="mt-12 grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-sm text-neutral-400">{stat.label}</dt>
                    <dd className="mt-1 text-4xl font-bold text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </RevealOnScroll>
          </div>

          {/* Image column with subtle parallax */}
          <RevealOnScroll direction="right" delay={0.2} className="relative">
            <ParallaxSection
              speed={0.15}
              height="480px"
              className="rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about.jpg"
                alt="Our team collaborating in the office"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </ParallaxSection>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
