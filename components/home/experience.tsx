import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const experiences = [
  {
    title: 'Weaving Workshops',
    text: 'Learn traditional techniques on the loom alongside master artisans.',
    image: '/images/workshop-interior.png',
  },
  {
    title: 'Exhibitions',
    text: 'Permanent and rotating displays celebrating local textile heritage.',
    image: '/images/exhibition.png',
  },
  {
    title: 'Cultural Events',
    text: 'Festivals, performances and gatherings throughout the year.',
    image: '/images/theater.png',
  },
  {
    title: 'Artisan Market',
    text: 'Handmade textiles and crafts created by the local community.',
    image: '/images/craft-market.png',
  },
]

export function HomeExperience() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            The Experience
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
            What visitors discover at NOUL
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-foreground"
        >
          All Services
          <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((item) => (
          <Link
            key={item.title}
            href="/services"
            className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-sm"
          >
            <Image
              src={item.image || '/placeholder.svg'}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
            <div className="relative p-6">
              <h3 className="font-serif text-2xl font-normal text-background">
                {item.title}
              </h3>
              <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-background/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                {item.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
