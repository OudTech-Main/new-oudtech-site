import RevealOnScroll from "@/components/ui/RevealOnScroll";

const services = [
  {
    icon: "✦",
    title: "Product Strategy",
    description:
      "We help you define the right product to build — from market research and roadmapping to go-to-market strategy.",
  },
  {
    icon: "◈",
    title: "UX & Design",
    description:
      "Pixel-perfect interfaces grounded in user research. We design systems that scale from MVP to millions of users.",
  },
  {
    icon: "⬡",
    title: "Full-Stack Engineering",
    description:
      "From Next.js frontends to distributed backends and cloud infrastructure, we ship production-grade code.",
  },
  {
    icon: "◎",
    title: "AI Integration",
    description:
      "We embed LLMs, computer vision, and predictive models into your product so you move faster than the competition.",
  },
  {
    icon: "▣",
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, Kubernetes clusters, and observability stacks — we make deployments boring (in the best way).",
  },
  {
    icon: "❖",
    title: "Performance Audits",
    description:
      "Core Web Vitals optimisation, SEO audits, and accessibility reviews to ensure your site ranks and converts.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-36 bg-neutral-900/50"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll direction="up" className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            End-to-end capability so you never need to stitch together multiple
            agencies.
          </p>
        </RevealOnScroll>

        {/* Grid */}
        <ul
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {services.map((service, i) => (
            <li key={service.title}>
              <RevealOnScroll direction="up" delay={0.1 * (i % 3)}>
                <article className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-colors hover:border-sky-500/50 hover:bg-neutral-800/60">
                  <span
                    className="text-3xl text-sky-400"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-400">
                    {service.description}
                  </p>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
