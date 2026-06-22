import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Sparkles, HandHeart, BookOpen, Globe as Globe2, Hammer, Users, Compass, Search, Hop as HomeIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About NOUL | Cultural Craft Center',
  description:
    'NOUL is a Cultural Craft Center inspired by the traditional weaving loom, preserving local handicrafts while creating a contemporary cultural destination in Marsa Matrouh.',
}

const mission = [
  {
    Icon: HandHeart,
    title: 'Preserve traditional weaving crafts',
    text: 'Safeguarding techniques passed down through generations of Egyptian artisans.',
  },
  {
    Icon: Sparkles,
    title: 'Support local artisans',
    text: 'Providing studios, markets, and a stage for craftspeople to thrive.',
  },
  {
    Icon: BookOpen,
    title: 'Educate future generations',
    text: 'Courses, workshops, and research that keep heritage alive and evolving.',
  },
  {
    Icon: Globe2,
    title: 'Promote cultural tourism',
    text: 'Inviting the world to experience the living culture of Marsa Matrouh.',
  },
]

const audiences = [
  { Icon: Hammer, title: 'Artisans', text: 'Professional craftsmen and textile makers.' },
  { Icon: Compass, title: 'Students', text: 'Architecture, design, and art students.' },
  { Icon: Globe2, title: 'Tourists', text: 'Visitors interested in Egyptian heritage.' },
  { Icon: Search, title: 'Researchers', text: 'Researchers and cultural enthusiasts.' },
  { Icon: HomeIcon, title: 'Local Community', text: 'Residents joining workshops and events.' },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="About NOUL"
        description="A cultural craft center inspired by the traditional weaving loom — Noul."
        image="/images/IMPORTANT_THIS_IS_A_POST-PRODUCTION_202606162340.jpeg"
        imageAlt="Aerial render of NOUL Cultural Craft Center in Marsa Matrouh"
      />

      {/* About NOUL editorial */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Our Story
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
              Woven from heritage, built for tomorrow.
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              NOUL is a Cultural Craft Center inspired by the traditional weaving
              loom (Noul). The project aims to preserve local handicrafts while
              creating a contemporary cultural destination in Marsa Matrouh.
            </p>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Every thread tells a story. NOUL gathers those stories under one
              roof — a place where the rhythm of the loom meets contemporary
              architecture, education, and community life.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/ChatGPT_Image_Jun_16,_2026,_10_48_31_PM.png"
              alt="NOUL Cultural Craft Center — architectural site master plan"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="weave-texture bg-secondary/40 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Our Mission
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
              Four commitments at the heart of NOUL
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {mission.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                className="flex gap-5 rounded-sm border border-border bg-card p-7 transition-shadow hover:shadow-lg"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <span className="font-serif text-sm text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-normal text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who NOUL serves */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Community
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
            Who NOUL serves
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary"
            >
              <Icon className="size-7 text-primary" />
              <h3 className="mt-6 font-serif text-2xl font-normal text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image storytelling */}
      <section className="bg-foreground py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_50)]">
              The Project
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-background lg:text-5xl">
              A curated visual story
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative overflow-hidden rounded-sm lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto">
              <Image
                src="/images/IMPORTANT_THIS_IS_NOT_AN_202606162331.jpeg"
                alt="NOUL Cultural Craft Center at golden hour — aerial view"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/IMPORTANT_THIS_IS_A_NIGHT_202606162335_(1).jpeg"
                alt="NOUL campus illuminated at night from above"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/ChatGPT_Image_Jun_21,_2026,_07_52_56_AM.png"
                alt="NOUL Cultural Craft Center — alternate aerial"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
