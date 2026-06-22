import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { IMAGES } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Gallery | NOUL Cultural Craft Center',
  description:
    'Explore the architecture, workshops, exhibitions, and cultural spaces of NOUL through a curated image gallery.',
}

const featuredImages = [
  {
    src: IMAGES.goldenHourAerial,
    alt: 'NOUL Cultural Craft Center — golden hour aerial',
    caption: 'Golden Hour',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: IMAGES.nightAerial,
    alt: 'NOUL campus illuminated at night',
    caption: 'Night',
    span: '',
  },
  {
    src: IMAGES.daytimeAerial,
    alt: 'NOUL Cultural Craft Center — daytime aerial',
    caption: 'Daytime Aerial',
    span: '',
  },
  {
    src: IMAGES.alternateAerial,
    alt: 'NOUL campus — alternate aerial overview',
    caption: 'Campus Overview',
    span: '',
  },
  {
    src: IMAGES.siteMasterPlan,
    alt: 'NOUL Cultural Craft Center — site master plan',
    caption: 'Site Master Plan',
    span: '',
  },
]

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Explore NOUL"
        title="Gallery"
        description="Wander the architecture, spaces, and cultural heart of NOUL Cultural Craft Center."
        image={IMAGES.daytimeAerial}
        imageAlt="Daytime aerial of NOUL Cultural Craft Center in Marsa Matrouh"
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:py-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          A Visual Exhibition
        </p>
        <h2 className="text-balance font-serif text-3xl font-light leading-[1.15] text-foreground lg:text-4xl">
          Experience the atmosphere of NOUL before you arrive.
        </h2>
        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
          A curated collection of architectural renders, spaces, and cultural
          moments — a glimpse into a living home for craft and culture on
          the Mediterranean coast.
        </p>
      </section>

      {/* Featured Project Renders */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_50)]">
              The Architecture
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-background lg:text-5xl">
              The NOUL Project
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-background/70">
              An architectural landmark on the northern coast of Egypt — woven from stone, light, and cultural purpose.
            </p>
          </div>

          <div className="grid auto-rows-[240px] grid-cols-2 gap-4 lg:auto-rows-[300px] lg:grid-cols-4">
            {featuredImages.map((img) => (
              <figure
                key={img.src}
                className={`group relative overflow-hidden rounded-sm ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-medium uppercase tracking-[0.15em] text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Curated gallery */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="mb-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Spaces & Experiences
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
            Inside the center
          </h2>
        </div>
        <GalleryGrid />
      </section>

      {/* Visual storytelling */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-sm border border-border lg:grid-cols-2">
          <div className="relative min-h-[340px] lg:min-h-[520px]">
            <Image
              src={IMAGES.goldenHourAerial}
              alt="NOUL Cultural Craft Center — aerial golden hour"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-card p-10 lg:p-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              The Vision
            </p>
            <h2 className="text-balance font-serif text-3xl font-light leading-[1.15] text-foreground lg:text-4xl">
              Every space tells a story of the thread.
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              From the rhythmic geometry of the architecture to the quiet focus
              of the weaving studios, NOUL is designed as a journey. Each room
              builds on the last — heritage, learning, creation, and
              celebration woven into a single continuous experience.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="font-serif text-4xl font-light text-primary">5</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Curated spaces to explore
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-light text-primary">∞</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Stories woven into the architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
