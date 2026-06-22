import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const shots = [
  { src: '/images/IMPORTANT_THIS_IS_A_POST-PRODUCTION_202606162340.jpeg', alt: 'NOUL Cultural Craft Center — daytime aerial', span: 'lg:col-span-2 lg:row-span-2' },
  { src: '/images/IMPORTANT_THIS_IS_A_NIGHT_202606162335_(1).jpeg', alt: 'NOUL campus illuminated at night' },
  { src: '/images/ChatGPT_Image_Jun_21,_2026,_07_52_56_AM.png', alt: 'NOUL campus aerial overview' },
  { src: '/images/ChatGPT_Image_Jun_16,_2026,_10_48_31_PM.png', alt: 'NOUL site master plan' },
  { src: '/images/gallery-hall.png', alt: 'Light-filled gallery atrium' },
]

export function HomeGalleryStrip() {
  return (
    <section className="bg-foreground py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[oklch(0.72_0.12_50)]">
              Gallery
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-background lg:text-5xl">
              A glimpse of the center
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-background"
          >
            View Gallery
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
          {shots.map((shot) => (
            <div
              key={shot.src}
              className={`group relative overflow-hidden rounded-sm ${shot.span ?? ''}`}
            >
              <Image
                src={shot.src || '/placeholder.svg'}
                alt={shot.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
