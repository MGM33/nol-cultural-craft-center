import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import {
  Scissors,
  Frame,
  GraduationCap,
  Store,
  PartyPopper,
  Drama,
  Library,
} from 'lucide-react'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Our Services | NOUL Cultural Craft Center',
  description:
    'Weaving workshops, cultural exhibitions, educational programs, a craft market, cultural events, theater activities, and a library & research center at NOUL.',
}

const services = [
  {
    Icon: Scissors,
    title: 'Weaving Workshops',
    text: 'Hands-on training programs for traditional weaving techniques.',
  },
  {
    Icon: Frame,
    title: 'Cultural Exhibitions',
    text: 'Permanent and temporary exhibitions showcasing local crafts.',
  },
  {
    Icon: GraduationCap,
    title: 'Educational Programs',
    text: 'Training courses, seminars, and lectures.',
  },
  {
    Icon: Store,
    title: 'Craft Market',
    text: 'Selling handmade products created by local artisans.',
  },
  {
    Icon: PartyPopper,
    title: 'Cultural Events',
    text: 'Festivals, performances, and community gatherings.',
  },
  {
    Icon: Drama,
    title: 'Theater Activities',
    text: 'Cultural shows and educational presentations.',
  },
  {
    Icon: Library,
    title: 'Library & Research Center',
    text: 'Resources about crafts, textiles, and local heritage.',
  },
]

const activity = [
  { src: IMAGES.community, alt: 'Community weaving class in session' },
  { src: IMAGES.exhibition, alt: 'Craft exhibition hall' },
  { src: IMAGES.craftMarket, alt: 'Artisan craft market courtyard' },
  { src: IMAGES.theater, alt: 'Cultural theater performance space' },
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        description="From the loom to the stage — a full spectrum of cultural and creative experiences under one roof."
        image={IMAGES.workshopInterior}
        imageAlt="Weaving workshop interior at NOUL"
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              An Invitation
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
              Experiences crafted to inspire, teach and connect.
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              NOUL brings together learning, production, exhibition, and
              celebration. Whether you come to weave, to learn, to shop, or
              simply to wander, every space is designed to immerse you in the
              living craft of Marsa Matrouh.
            </p>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-sm">
            <Image
              src={IMAGES.courtyard}
              alt="Serene interior courtyard with woven shade canopies"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="weave-texture bg-secondary/40 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Services
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
              Everything you can experience at NOUL
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group flex flex-col rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-normal text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature experience */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-sm border border-border lg:grid-cols-2">
          <div className="relative min-h-[340px] lg:min-h-[520px]">
            <Image
              src={IMAGES.weavingLoom}
              alt="Artisan weaving on a traditional loom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-card p-10 lg:p-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Signature Experience
            </p>
            <h2 className="text-balance font-serif text-3xl font-light leading-[1.15] text-foreground lg:text-4xl">
              The Master Loom Residency
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              Spend a day beside a master weaver and create your own piece from
              raw fiber to finished textile. Our signature residency blends
              storytelling, technique, and quiet craftsmanship — a rare chance
              to slow down and work the loom as generations have before you.
            </p>
            <Link
              href="/tickets"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Reserve a Place
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Visual activity */}
      <section className="bg-foreground py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_50)]">
              Atmosphere
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-background lg:text-5xl">
              The life of the center
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activity.map((shot) => (
              <div
                key={shot.src}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm"
              >
                <Image
                  src={shot.src || '/placeholder.svg'}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
