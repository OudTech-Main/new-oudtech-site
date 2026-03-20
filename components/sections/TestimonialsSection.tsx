import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { instrumentSans } from "@/lib/fonts";

const QuoteIcon = () => (
  <svg
    width="34"
    height="26"
    viewBox="0 0 34 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-quote)">
      <path
        d="M3.05598 23.7591C1.14574 21.6831 0 19.4179 0 15.6429C0 9.03545 4.77509 3.1844 11.4604 0.163818L13.1795 2.6181C6.87645 6.01588 5.53959 10.3571 5.15734 13.1886C6.11195 12.6223 7.44982 12.4332 8.78669 12.6223C12.2249 12.9995 14.8986 15.6429 14.8986 19.2288C14.8986 20.9277 14.1351 22.6266 12.9884 23.9482C11.6515 25.2699 10.1235 25.8362 8.21331 25.8362C6.11195 25.8362 4.20272 24.8917 3.05598 23.7591ZM22.1573 23.7591C20.2471 21.6831 19.1014 19.4179 19.1014 15.6429C19.1014 9.03545 23.8764 3.1844 30.5618 0.163818L32.2809 2.6181C25.9778 6.01588 24.6409 10.3571 24.2587 13.1886C25.2133 12.6223 26.5512 12.4332 27.888 12.6223C31.3263 12.9995 34 15.6429 34 19.2288C34 20.9277 33.2365 22.6266 32.0898 23.9482C30.944 25.2699 29.2249 25.8362 27.3147 25.8362C25.2133 25.8362 23.3031 24.8917 22.1573 23.7591Z"
        fill="#03030F"
        fillOpacity="0.7"
      />
    </g>
    <defs>
      <clipPath id="clip-quote">
        <rect width="34" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const testimonials = [
  {
    quote:
      "They provided clarity where we had confusion, and structure where we had chaos. It's been one of the best investments we've made as a company.",
    name: "Elton Onyinyechi",
    role: "CEO, Yehchee",
    avatar: "/elton.jpeg",
    offset: false,
  },
  {
    quote:
      "Their strategic insight and hands-on approach helped us streamline operations and unlock new growth opportunities. We saw measurable results within months.",
    name: "Ugwu Arinze",
    role: "CEO, Bluske Ent.",
    avatar: "/arinze.PNG",
    offset: true,
  },
  {
    quote:
      "What impressed me most was their attention to detail and the way they kept us informed at every stage of the process. Regular updates and clear communication throughout.",
    name: "Jeffery Edwards",
    role: "CEO, TheeGodBrand",
    avatar: "/jeff.PNG",
    offset: false,
  },
  {
    quote:
      "The team's ability to translate complex technical challenges into clear, actionable solutions was remarkable. They delivered beyond our expectations.",
    name: "Melody Frank",
    role: "CEO, Zurirealm",
    avatar: "/melody.jpeg",
    offset: true,
  },
];

function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  offset,
}: (typeof testimonials)[0]) {
  return (
    <div className={`w-85 shrink-0 ${offset ? "mt-10" : ""}`}>
      <div className="rounded-2xl bg-[#F6F6F6] p-7">
        <QuoteIcon />
        <p
          className={`${instrumentSans.className} mt-5 text-sm leading-7 text-[#03030F]`}
        >
          {quote}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-3 px-1">
        <Image
          src={avatar}
          alt={name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
          sizes="44px"
        />
        <div>
          <p className="text-sm font-semibold text-neutral-900">{name}</p>
          <p className="text-xs text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  // Duplicate for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <section
      className="overflow-hidden bg-white py-16 lg:py-20"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <RevealOnScroll direction="up">
          <p className="text-sm font-medium text-[#A8A8A8] md:text-base">
            Testimonials
          </p>
          <h2 className="mt-2 text-4xl font-medium tracking-tight text-neutral-900 lg:text-5xl">
            What our clients say
          </h2>
        </RevealOnScroll>
      </div>

      {/* Marquee — full bleed, no px constraint */}
      <div className="relative mt-12 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24 lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24 lg:w-32" />

        <div className="marquee-track flex gap-5 pb-4">
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
