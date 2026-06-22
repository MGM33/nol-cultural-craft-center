import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeCta() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/facade-dusk.png"
        alt="NOL Cultural Craft Center illuminated at dusk"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center lg:py-36">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.78_0.12_50)]">
          Plan Your Visit
        </p>
        <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-background lg:text-6xl">
          Step into a story woven over generations.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/85">
          Discover the center, explore our services, wander the gallery, and
          book your tickets to experience NOL in person.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/tickets"
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Tickets
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-sm border border-background/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-colors hover:bg-background/10"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
