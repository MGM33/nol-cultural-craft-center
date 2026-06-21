import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { GalleryGrid } from '@/components/gallery-grid'
import { Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery & Virtual Tour | NOL Cultural Craft Center',
  description:
    'Explore the architecture, workshops, exhibitions, and cultural spaces of NOL through a curated image gallery and immersive virtual walkthrough.',
}

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Explore NOL"
        title="Gallery & Virtual Tour"
        description="Wander the architecture, workshops, exhibitions, and cultural spaces of NOL."
        image="/images/gallery-hall.png"
        imageAlt="Light-filled gallery atrium at NOL Cultural Craft Center"
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:py-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          An Exhibition Walkthrough
        </p>
        <h2 className="text-balance font-serif text-3xl font-light leading-[1.15] text-foreground lg:text-4xl">
          Experience the atmosphere of NOL before you arrive.
        </h2>
        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
          Explore the architecture, workshops, exhibitions, and cultural spaces
          of NOL through a curated collection of images and an immersive virtual
          walkthrough — a glimpse into a living home for craft and culture.
        </p>
      </section>

      {/* Curated gallery */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-28">
        <GalleryGrid />
      </section>

      {/* Virtual Tour */}
      <section className="bg-foreground py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_50)]">
              Virtual Tour
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-background lg:text-5xl">
              Step inside, from anywhere
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-background/75">
              Take an immersive 360° walkthrough of the center — from the
              sunlit courtyards to the weaving studios and exhibition halls.
            </p>
          </div>

          <div className="group relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/courtyard.png"
              alt="Preview of the NOL virtual tour starting in the courtyard"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <button
                type="button"
                aria-label="Start virtual tour"
                className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110"
              >
                <Play className="size-8 translate-x-0.5 fill-current" />
              </button>
              <span className="rounded-sm bg-background/90 px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-foreground">
                Start Virtual Tour
              </span>
            </div>
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-background/50">
            Interactive 360° walkthrough — coming soon
          </p>
        </div>
      </section>

      {/* Visual storytelling */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/exhibition.png"
              alt="Exhibition hall displaying handwoven crafts"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Storytelling
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
              Every space tells a story of the thread.
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              From the rhythmic geometry of the architecture to the quiet focus
              of the weaving studios, NOL is designed as a journey. Each room
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
                <p className="font-serif text-4xl font-light text-primary">360°</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Immersive virtual walkthrough
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
