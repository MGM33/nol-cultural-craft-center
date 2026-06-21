import Image from 'next/image'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-20">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8 lg:pb-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-background/80">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance font-serif text-5xl font-light leading-[1.05] text-background sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-background/85 lg:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
