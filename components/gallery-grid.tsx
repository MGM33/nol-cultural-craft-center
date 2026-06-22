'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ALL_GALLERY_IMAGES } from '@/lib/images'

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

const items: Item[] = ALL_GALLERY_IMAGES.map((img) => ({
  src: img.src,
  alt: img.alt,
  category: img.category,
  size: img.size,
}))

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
