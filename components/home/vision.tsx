import Image from 'next/image'

export function HomeVision() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/weaving-loom.png"
              alt="Artisan weaving on a traditional wooden loom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden aspect-square w-44 overflow-hidden rounded-sm border-4 border-background lg:block">
            <Image
              src="/images/textile-texture.png"
              alt="Detail of handwoven textile threads"
              fill
              className="object-cover"
              sizes="176px"
            />
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Our Vision
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
            A living home for craft, culture and community.
          </h2>
          <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
            NOUL is a cultural craft center located in Marsa Matrouh, dedicated
            to preserving and revitalizing traditional textile weaving heritage.
            The project creates a vibrant environment where artisans, visitors,
            students, and tourists can connect through learning, production,
            exhibition, and cultural experiences.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <p className="font-serif text-4xl font-light text-primary">2025</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Cultural landmark established
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl font-light text-primary">النول</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Inspired by the weaving loom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
