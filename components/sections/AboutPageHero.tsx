import Image from "next/image";
import VideoHero from "@/components/ui/VideoHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { LetsTalkButton } from "@/components/layout/Header";

// Design specs (all widths equal, heights differ, per-corner radii):
// Photo 1 (top-left):    230 h  — tl+br rounded, border 3.34px
// Photo 2 (top-right):   174 h  — br only rounded,  border 3.34px
// Photo 3 (bottom-left): 230 h  — br+bl rounded,    border 4.45px
// Photo 4 (bottom-right):291 h  — tr+bl rounded,    border 3.34px

const photos = [
  {
    src: "/about-photo-1.jpg",
    alt: "OudTech team at a tech event",
    // aspect matches 241×230
    heightClass: "h-[172px] sm:h-[200px] lg:h-[230px]",
    style: {
      borderTopLeftRadius: "44px",
      borderBottomRightRadius: "44px",
      border: "3px solid rgb(255,255,255)",
    },
  },
  {
    src: "/about-photo-2.jpg",
    alt: "OudTech tech skills programme participants",
    // aspect matches 241×174  (shorter top-right)
    heightClass: "h-[130px] sm:h-[152px] lg:h-[174px]",
    style: {
      borderBottomRightRadius: "44px",
      border: "3px solid rgb(255,255,255)",
    },
  },
  {
    src: "/about-photo-3.jpg",
    alt: "OudTech founder speaking at an event",
    // aspect matches 241×230
    heightClass: "h-[172px] sm:h-[200px] lg:h-[230px]",
    style: {
      borderBottomRightRadius: "44px",
      borderBottomLeftRadius: "44px",
      border: "4px solid rgb(255,255,255)",
    },
  },
  {
    src: "/about-photo-4.jpg",
    alt: "OudTech academy student working on laptop",
    // aspect matches 241×291  (portrait — tallest)
    heightClass: "h-[218px] sm:h-[254px] lg:h-[291px]",
    style: {
      borderTopRightRadius: "44px",
      borderBottomLeftRadius: "44px",
      border: "3px solid rgb(255,255,255)",
    },
  },
];

export default function AboutPageHero() {
  return (
    <section className="relative min-h-screen" aria-label="About Oudtech hero">
      <VideoHero src="/videos/hero.MP4" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 lg:px-12 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: copy ── */}
          <div>
            <RevealOnScroll direction="up" delay={0.2} threshold={0}>
              <h1 className="mt-4 text-[28px] font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px]">
                Empower your Business
                <br />
                With{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #ffffff 0%, #979797 100%)",
                  }}
                >
                  Digital Solutions
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.35} threshold={0}>
              <p className="mt-6 max-w-md text-base leading-7 text-[#8B8F94]">
                Oud-Technologies is a product-driven technology company building
                practical digital solutions. We focus on product design, user
                experience, and real-world problem solving, operating at the
                intersection of design and engineering.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.5} threshold={0}>
              <div className="mt-10">
                <LetsTalkButton href="#contact" />
              </div>
            </RevealOnScroll>
          </div>

          {/* ── Right: two independent flex columns — no row-height forcing ── */}
          <RevealOnScroll direction="up" delay={0.3} threshold={0}>
            <div className="flex gap-3 sm:gap-4">
              {/* Left column: photo 1 + photo 3 */}
              <div className="flex flex-1 flex-col gap-3 sm:gap-4">
                {[photos[0], photos[2]].map((photo, i) => (
                  <div
                    key={photo.src}
                    className={`overflow-hidden bg-neutral-800 ${photo.heightClass}`}
                    style={photo.style}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={483}
                      height={582}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 38vw, 290px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
              {/* Right column: photo 2 + photo 4 — stack directly, no forced row gap */}
              <div className="flex flex-1 flex-col gap-3 sm:gap-4">
                {[photos[1], photos[3]].map((photo) => (
                  <div
                    key={photo.src}
                    className={`overflow-hidden bg-neutral-800 ${photo.heightClass}`}
                    style={photo.style}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={483}
                      height={582}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 38vw, 290px"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
