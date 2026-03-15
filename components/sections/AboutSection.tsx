import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AboutSection() {
  const r = 44;
  const circ = +(2 * Math.PI * r).toFixed(2);
  const arc = +(circ * 0.83).toFixed(2);

  return (
    <section
      id="about"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* ── Full-width title row ── */}
        <div className="mb-8 flex items-center justify-between">
          {/* 1. "About Us" slides in from the left */}
          <RevealOnScroll direction="right" delay={0} threshold={0}>
            <h2 className="text-3xl font-medium text-[#0F1010] md:text-4xl lg:text-5xl">
              About Us
            </h2>
          </RevealOnScroll>

          {/* 2. Badge slides in from the right */}
          <RevealOnScroll direction="left" delay={0.12} threshold={0}>
            <div
              className="inline-flex items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5"
              style={{ backgroundColor: "#F1F5F9" }}
            >
              <span className="text-sm font-medium text-neutral-800">
                ABOUT US
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
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid items-center gap-8 lg:gap-16 lg:grid-cols-2">
          {/* Left: image + floating cards */}
          <div className="relative pt-4 pb-2 md:pb-10 md:pl-2 md:pr-10 md:pt-10">
            {/* 3. Main image slides up */}
            <RevealOnScroll direction="up" delay={0.25} threshold={0}>
              <div className="overflow-hidden rounded-3xl bg-neutral-200/60">
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

            {/* 4. Satisfaction card slides up */}
            <RevealOnScroll
              direction="up"
              delay={0.45}
              threshold={0}
              className="absolute -right-2 bottom-4 w-36 md:bottom-20 md:right-0 md:w-44"
            >
              <div
                className="rounded-2xl bg-white px-4 py-5"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.13)" }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative h-32 w-32">
                    <svg
                      viewBox="0 0 100 100"
                      className="h-full w-full -rotate-90"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r={r}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="6"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r={r}
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={`${arc} ${circ}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-bold text-[#064ADF]">
                        99.9%
                      </span>
                      <span className="mt-0.5 text-center text-[11px] leading-tight text-[#064ADF]">
                        Clients
                        <br />
                        satisfaction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* 5. Search prompt card slides in from the left */}
            <RevealOnScroll
              direction="right"
              delay={0.6}
              threshold={0}
              className="absolute -left-2 top-4 w-48 md:-left-8 md:top-20 md:w-60"
            >
              <div
                className="rounded-2xl bg-white px-5 py-4"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.13)" }}
              >
                <p className="text-center text-sm font-semibold leading-snug text-[#0F1010]">
                  What software do you
                  <br />
                  want to build?
                </p>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-[#064ADF] px-3 py-2">
                  <span className="flex-1 text-sm text-white">
                    FinTech App?
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: headline + body */}
          <div className="lg:pl-6">
            {/* 6a. Heading slides in from left */}
            <RevealOnScroll direction="right" delay={0.3} threshold={0}>
              <h2
                id="about-heading"
                className="text-2xl font-bold leading-[1.2] tracking-tight text-[#0F1010] md:text-3xl lg:text-4xl"
              >
                At OudTech, our story is one of passion, creativity, and a
                relentless pursuit of excellence.
              </h2>
            </RevealOnScroll>

            {/* 6b. Body text slides in from left */}
            <RevealOnScroll direction="right" delay={0.45} threshold={0}>
              <p className="mt-6 text-base font-medium leading-7 text-[#696F77]">
                Oud-Technologies is a product-driven technology company building
                practical Digital solutions. We focus on product design, user
                experience, and real-world problem solving, operating at the
                intersection of software development and innovation across
                fintech, rentals, emergency services, and e-commerce.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
