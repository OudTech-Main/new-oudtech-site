import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const founders = [
  {
    name: "David Okwudiri U.",
    role: "Founder & Creative Director",
    image: "/founder-david.png",
  },
  {
    name: "Gospel C. Amanze",
    role: "Co-Founder/Operations Manager",
    image: "/founder-gospel.png",
  },
  {
    name: "ThankGod Ogbonna J.",
    role: "Co-Founder/Product Manager",
    image: "/founder-thankgod.png",
  },
];

export default function AboutTeamSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <RevealOnScroll direction="up" delay={0.1} threshold={0}>
          <h2
            id="team-heading"
            className="text-4xl font-medium leading-[1.12] tracking-tight text-[#0F1010] md:text-5xl lg:text-[52px]"
          >
            Make some noise for our talented founders
          </h2>
          <p className="mt-4 text-sm text-[#696F77] md:text-base">
            Get to know the people that get it all done.
          </p>
        </RevealOnScroll>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {founders.map((founder, i) => (
            <RevealOnScroll
              key={founder.name}
              direction="up"
              delay={0.15 + i * 0.1}
              threshold={0}
            >
              <div>
                {/* Photo */}
                <div className="overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={540}
                    height={520}
                    className="h-[340px] w-full object-cover object-top sm:h-[380px] lg:h-[400px]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Info */}
                <div className="mt-5">
                  <p className="text-lg font-medium text-[#0F1010]">
                    {founder.name}
                  </p>
                  <p className="mt-1 text-sm text-[#696F77]">{founder.role}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
