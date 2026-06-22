'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { IMAGES } from '@/lib/images'

type Category =
  | 'All'
  | 'Exterior / Architecture'
  | 'Workshops & Craft Spaces'
  | 'Exhibition Areas'
  | 'Cultural Theater / Events'
  | 'Community & Visitor Experience'

type Item = {
  src: string
  alt: string
  category: Exclude<Category, 'All'>
  size?: 'tall' | 'wide' | 'normal'
}

const items: Item[] = [
  { src: IMAGES.goldenHourAerial, alt: 'NOUL at golden hour — aerial view', category: 'Exterior / Architecture', size: 'wide' },
  { src: IMAGES.nightAerial, alt: 'NOUL campus illuminated at night', category: 'Exterior / Architecture', size: 'tall' },
  { src: IMAGES.daytimeAerial, alt: 'NOUL Cultural Craft Center — daytime aerial', category: 'Exterior / Architecture', size: 'wide' },
  { src: IMAGES.alternateAerial, alt: 'NOUL campus — alternate aerial overview', category: 'Exterior / Architecture', size: 'tall' },
  { src: IMAGES.siteMasterPlan, alt: 'NOUL Cultural Craft Center — site master plan', category: 'Exterior / Architecture', size: 'wide' },
  { src: IMAGES.courtyard, alt: 'Interior courtyard with woven canopies', category: 'Exterior / Architecture' },
  { src: IMAGES.workshopInterior, alt: 'Weaving workshop interior', category: 'Workshops & Craft Spaces', size: 'tall' },
  { src: IMAGES.weavingLoom, alt: 'Artisan working a traditional loom', category: 'Workshops & Craft Spaces' },
  { src: IMAGES.textileTexture, alt: 'Detail of handwoven textile', category: 'Workshops & Craft Spaces' },
  { src: IMAGES.exhibition, alt: 'Craft exhibition hall', category: 'Exhibition Areas', size: 'wide' },
  { src: IMAGES.galleryHall, alt: 'Light-filled gallery atrium', category: 'Exhibition Areas', size: 'tall' },
  { src: IMAGES.theater, alt: 'Cultural theater and performance space', category: 'Cultural Theater / Events' },
  { src: IMAGES.craftMarket, alt: 'Artisan craft market courtyard', category: 'Cultural Theater / Events', size: 'wide' },
  { src: IMAGES.community, alt: 'Community weaving class', category: 'Community & Visitor Experience', size: 'tall' },
]

const categories: Category[] = [
  'All',
  'Exterior / Architecture',
  'Workshops & Craft Spaces',
  'Exhibition Areas',
  'Cultural Theater / Events',
  'Community & Visitor Experience',
]

export function GalleryGrid() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-sm border px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors',
              active === cat
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
        {filtered.map((item) => (
          <figure
            key={item.src + item.category}
            className={cn(
              'group relative overflow-hidden rounded-sm',
              item.size === 'tall' && 'row-span-2',
              item.size === 'wide' && 'col-span-2',
            )}
          >
            <Image
              src={item.src || '/placeholder.svg'}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <figcaption className="absolute bottom-0 left-0 p-5 text-sm text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
