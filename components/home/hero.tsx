import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NolLogo } from '@/components/nol-logo'
import { IMAGES } from '@/lib/images'

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src={IMAGES.goldenHourAerial}
        alt="Aerial render of NOUL Cultural Craft Center at golden hour, Marsa Matrouh"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/80" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-32 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4 text-background">
            <NolLogo className="text-background" />
            <span className="h-px w-12 bg-background/40" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-background/80">
              Marsa Matrouh · Egypt
            </span>
          </div>

          <h1 className="text-balance font-serif text-5xl font-light leading-[1.04] text-background sm:text-6xl lg:text-7xl">
            NOUL Cultural Craft Center
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/90 lg:text-xl">
            Preserving heritage through weaving, culture and creativity.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore NOUL
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-background/40 bg-background/5 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-background backdrop-blur-sm transition-colors hover:bg-background/15"
            >
              View Services
            </Link>
            <Link
              href="/tickets"
              className="inline-flex items-center gap-2 rounded-sm px-2 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-background underline-offset-8 transition-all hover:underline"
            >
              Book Tickets
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-background/70 lg:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-background/40" />
      </div>
    </section>
  )
}
