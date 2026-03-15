import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const capabilities = [
  "Strategic Planning",
  "Operational Excellence",
  "Market Expansion",
  "Risk Management",
];

const PinIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g clipPath="url(#clip0_826_3612)">
      <path
        d="M18.0398 2.4526C18.4833 2.29422 18.8845 2.25199 19.3092 2.31534C19.6682 2.36931 20.0765 2.5183 20.4237 2.64383C22.4733 3.38411 24.0665 4.97731 24.8079 7.02804C24.9335 7.37413 25.0825 7.78358 25.1364 8.14257C25.1998 8.56727 25.1576 8.9685 24.998 9.41196C24.6566 10.3634 23.8905 10.7881 23.047 11.2562L21.3834 12.1842C20.7827 12.5197 20.385 12.7415 20.1011 12.9374C19.8266 13.1275 19.748 13.2354 19.7151 13.2987C19.6987 13.3316 19.6459 13.4947 19.6588 14.0203C19.6729 14.5165 19.7362 15.1911 19.8289 16.1496C19.9779 17.6959 19.7222 19.2292 18.8294 20.6558C18.6792 20.8975 18.4891 21.2002 18.278 21.4254C18.0281 21.6917 17.7395 21.8806 17.3688 22.0308C16.9922 22.1833 16.6484 22.2455 16.2777 22.2291C15.9621 22.215 15.5996 22.1329 15.2981 22.0636C13.3447 21.6202 11.4688 20.5936 9.87676 19.2327L4.29004 24.8206C3.83132 25.2782 3.08869 25.2782 2.63115 24.8206C2.17243 24.3619 2.17243 23.6193 2.63115 23.1617L8.2167 17.575C6.8558 15.983 5.83043 14.1059 5.38814 12.1537C5.31892 11.8522 5.2368 11.4897 5.22272 11.1741C5.2063 10.8034 5.26848 10.4596 5.42216 10.0819C5.57233 9.71113 5.76004 9.42369 6.02636 9.17381C6.25278 8.96263 6.55547 8.77257 6.79714 8.62241C8.2038 7.74369 9.72308 7.47151 11.2576 7.6076C12.2384 7.69441 12.9294 7.75542 13.4374 7.76598C13.6885 7.77067 14.0064 7.79179 14.1718 7.70614C14.2328 7.67447 14.3396 7.59587 14.5308 7.31899C14.7267 7.03508 14.9496 6.6362 15.2863 6.03318L16.1944 4.40479C16.6637 3.56009 17.0884 2.79517 18.0398 2.4526Z"
        fill="#1D60F1"
      />
    </g>
    <defs>
      <clipPath id="clip0_826_3612">
        <rect
          width="22.8772"
          height="22.8772"
          fill="white"
          transform="translate(2.28711 2.28711)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default function AboutMissionSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-label="Our mission">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* ── Full-width headline ── */}
        <RevealOnScroll direction="up" delay={0.1}>
          <h2 className="max-w-3xl text-[26px] font-medium leading-[1.12] tracking-tight text-[#0F1010] sm:text-3xl md:text-4xl lg:text-[51px]">
            We are a technology team delivering smart, scalable software for
            modern businesses
          </h2>
        </RevealOnScroll>

        {/* ── Three-column body ── */}
        <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.6fr_1fr] lg:gap-8 lg:mt-16">
          {/* Col 1: body text + stat */}
          <div className="flex flex-col">
            <RevealOnScroll direction="up" delay={0.2}>
              <p className="max-w-[260px] text-sm leading-5 text-[#696F77] sm:max-w-none lg:text-base lg:leading-7">
                At Oudtech, we help businesses navigate complexity, unlock
                growth, and achieve lasting transformation with a team of
                experienced builders. We combine strategy and technology for
                immediate, measurable impact.
              </p>
            </RevealOnScroll>

            {/* Stat */}
            <RevealOnScroll
              direction="up"
              delay={0.35}
              className="mt-16 lg:mt-auto lg:pt-10"
            >
              <div className="flex items-stretch gap-4">
                <div className="w-[3px] flex-shrink-0 rounded-full bg-[#1D1EE3]" />
                <div>
                  <p className="text-5xl font-bold text-[#0F1010] lg:text-6xl">
                    150+
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#03030F]">
                    Successful Projects Delivered
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Col 2: center image */}
          <RevealOnScroll direction="up" delay={0.25}>
            <div className="overflow-hidden rounded-3xl bg-neutral-200/60">
              <Image
                src="/about-mission.png"
                alt="OudTech founder speaking at an event"
                width={760}
                height={620}
                className="h-[320px] w-full object-cover object-top lg:h-[420px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 600px"
              />
            </div>
          </RevealOnScroll>

          {/* Col 3: card + button — same width, pushed to bottom */}
          <div className="flex ml-10 md:ml-0 flex-col justify-end">
            {/* w-fit container: both children stretch to the card's natural width */}
            <div className="flex w-fit flex-col gap-6">
              <RevealOnScroll direction="up" delay={0.3}>
                <div className="rounded-2xl bg-[#FBF9F7] px-6 py-6">
                  <PinIcon />
                  <ul className="mt-4 space-y-3">
                    {capabilities.map((item) => (
                      <li key={item} className="text-sm text-[#03030F]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.45}>
                <a
                  href="#services"
                  className="flex w-full items-center justify-between gap-2 rounded-full bg-[#2563EB] py-1.5 pl-5 pr-1.5 transition-opacity hover:opacity-90"
                >
                  <span className="text-sm font-medium text-white">
                    SERVICE DETAILS
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
                        stroke="#0F1010"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
