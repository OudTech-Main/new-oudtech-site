import VideoHero from "@/components/ui/VideoHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TypewriterText from "@/components/ui/TypewriterText";
import { LetsTalkButton } from "@/components/layout/Header";

const cards = [
  {
    title: "Technology",
    description: "Powering the digital world.",
  },
  {
    title: "Innovation",
    description: "Creating what's next.",
  },
  {
    title: "Trust",
    description: "Build on transparency and reliability.",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center"
      aria-label="Hero"
    >
      <VideoHero src="/videos/hero.MP4" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-32 text-center text-white sm:pt-36 md:pt-44 lg:pt-52">
        {/* Headline */}
        <RevealOnScroll direction="up" delay={0.1}>
          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-[57px]">
            Building Simple Ideas
            <br />
            <span className="text-white">into </span>
            <TypewriterText
              text="Powerful Solutions"
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ffffff 0%, #979797 100%)",
              }}
            />
          </h1>
        </RevealOnScroll>

        {/* Subtext */}
        <RevealOnScroll direction="up" delay={0.25}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#8B8F94]">
            Oud Technologies is a product-driven technology company building
            practical digital solutions. We focus on product design, user
            experience, and real-world problem solving, operating at the
            intersection of design and engineering.
          </p>
        </RevealOnScroll>

        {/* CTA */}
        <RevealOnScroll direction="up" delay={0.4}>
          <div className="mt-10 flex justify-center">
            <LetsTalkButton href="/contact" />
          </div>
        </RevealOnScroll>

        {/* Cards */}
        <RevealOnScroll direction="up" delay={0.55}>
          <div className="mt-16 grid grid-cols-1 gap-4 pb-20 sm:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 text-left backdrop-blur-md"
                style={{
                  backgroundColor: "#15141433",
                  border: "1px solid #242424",
                }}
              >
                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#8B8F94]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
