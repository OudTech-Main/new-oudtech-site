import Image from "next/image";

const images = [
  { src: "/gallery-1.png", alt: "Project showcase 1" },
  { src: "/gallery-2.png", alt: "Project showcase 2" },
  { src: "/gallery-3.png", alt: "Project showcase 3" },
  { src: "/gallery-4.png", alt: "Project showcase 4" },
  { src: "/gallery-5.png", alt: "Project showcase 5" },
];

export default function ServicesGalleryMarquee() {
  return (
    <section className="overflow-hidden bg-white py-16" aria-label="Project gallery">
      <div className="flex w-max animate-marquee gap-6">
        {/* Render twice for seamless loop */}
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="relative h-80 w-80 shrink-0 overflow-hidden rounded-2xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
