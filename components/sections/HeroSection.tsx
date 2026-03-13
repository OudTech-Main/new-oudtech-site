import VideoHero from "@/components/ui/VideoHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function HeroSection() {
  return (
    <section
      id="hero"
      // Fixed height prevents CLS regardless of video load time
      className="relative flex h-screen min-h-[600px] items-center justify-center"
      aria-label="Hero"
    >
      {/* Background video with parallax */}
      <VideoHero
        src="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
      />

      {/* Hero copy */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <RevealOnScroll direction="up" delay={0.1}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Welcome to Oudtech
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.25}>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Technology Built for{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              Tomorrow
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.4}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
            We design and engineer scalable digital products that help ambitious
            companies move faster and reach further.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.55}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#services"
              className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </RevealOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
