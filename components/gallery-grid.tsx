'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
  { src: '/images/hero-exterior.png', alt: 'Center exterior at golden hour', category: 'Exterior / Architecture', size: 'wide' },
  { src: '/images/aerial.png', alt: 'Aerial view of the campus', category: 'Exterior / Architecture', size: 'tall' },
  { src: '/images/facade-dusk.png', alt: 'Facade glowing at dusk', category: 'Exterior / Architecture' },
  { src: '/images/courtyard.png', alt: 'Interior courtyard with woven canopies', category: 'Exterior / Architecture' },
  { src: '/images/workshop-interior.png', alt: 'Weaving workshop interior', category: 'Workshops & Craft Spaces', size: 'tall' },
  { src: '/images/weaving-loom.png', alt: 'Artisan working a traditional loom', category: 'Workshops & Craft Spaces' },
  { src: '/images/textile-texture.png', alt: 'Detail of handwoven textile', category: 'Workshops & Craft Spaces' },
  { src: '/images/exhibition.png', alt: 'Craft exhibition hall', category: 'Exhibition Areas', size: 'wide' },
  { src: '/images/gallery-hall.png', alt: 'Light-filled gallery atrium', category: 'Exhibition Areas', size: 'tall' },
  { src: '/images/theater.png', alt: 'Cultural theater and performance space', category: 'Cultural Theater / Events' },
  { src: '/images/craft-market.png', alt: 'Artisan craft market courtyard', category: 'Cultural Theater / Events', size: 'wide' },
  { src: '/images/community.png', alt: 'Community weaving class', category: 'Community & Visitor Experience', size: 'tall' },
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
