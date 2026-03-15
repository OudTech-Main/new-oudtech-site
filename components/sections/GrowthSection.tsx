import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { playfairDisplay } from "@/lib/fonts";

const bullets = [
  "Schedule a Free Consultation",
  "Discover Custom Solutions",
  "Start Building Your Competitive Advantage",
];

export default function GrowthSection() {
  return (
    <section className="px-4 py-12 md:px-6 lg:py-16" aria-label="Growth CTA">
      <div className="mx-auto max-w-7xl lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-[#2563EB]">
          <div className="grid lg:grid-cols-2">
            {/* ── Left: copy ── */}
            <RevealOnScroll
              direction="up"
              className="flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20"
            >
              <h2 className="text-3xl font-medium leading-[1.15] text-white md:text-4xl lg:text-5xl">
                Visibility turns ideas
                <br />
                into measurable
                <br />
                business{" "}
                <em className={`${playfairDisplay.className} italic`}>
                  Growth.
                </em>
              </h2>

              {/* LET'S TALK button */}
              <a
                href="#contact"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white py-1.5 pl-5 pr-1.5 transition-opacity hover:opacity-90"
              >
                <span className="text-sm font-medium text-neutral-900">
                  LET&apos;S TALK
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#064ADF]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              {/* Bullet list */}
              <ul className="mt-10 space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="text-sm text-blue-100">
                    {item}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            {/* ── Right: image ── */}
            <RevealOnScroll
              direction="right"
              className="flex items-end justify-center px-6 py-10 lg:px-0 lg:pr-20 lg:py-16"
            >
              <div className="w-full overflow-hidden rounded-3xl bg-neutral-200/40">
                <Image
                  src="/growth.png"
                  alt="OudTech founder"
                  width={620}
                  height={520}
                  className="h-[300px] w-full object-cover object-top md:h-[400px] lg:h-[480px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
