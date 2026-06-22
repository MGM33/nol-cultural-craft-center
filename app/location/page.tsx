import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visit Us | NOUL Cultural Craft Center',
  description:
    'Located near the northern coastal zone of Marsa Matrouh, NOUL Cultural Craft Center connects local heritage with contemporary creative industries. Find directions, hours, and contact details.',
}

const hours = [
  { day: 'Saturday – Thursday', time: '9:00 AM – 8:00 PM' },
  { day: 'Friday', time: '2:00 PM – 9:00 PM' },
]

export default function LocationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Find Us"
        title="Visit Us"
        description="Marsa Matrouh, Egypt — a cultural gateway on the Mediterranean coast."
        image="/images/IMPORTANT_THIS_IS_A_NIGHT_202606162335_(1).jpeg"
        imageAlt="NOUL Cultural Craft Center illuminated at night"
      />

      {/* Address + description */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Address
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
              Marsa Matrouh, Egypt
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Located near the northern coastal zone of Marsa Matrouh, the
              center serves as a cultural gateway connecting local heritage with
              contemporary creative industries.
            </p>

            <div className="mt-10 space-y-6 border-t border-border pt-10">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 text-foreground">
                    Northern Coastal Zone, Marsa Matrouh, Egypt
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:info@nolcenter.com"
                    className="mt-1 inline-block text-foreground transition-colors hover:text-primary"
                  >
                    info@nolcenter.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+20000000000"
                    className="mt-1 inline-block text-foreground transition-colors hover:text-primary"
                  >
                    +20 XXX XXX XXXX
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Map showing NOUL Cultural Craft Center in Marsa Matrouh"
              src="https://maps.google.com/maps?q=31.3528,27.2453&z=15&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Opening hours */}
      <section className="weave-texture bg-secondary/40 py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="mb-12 flex items-center gap-4">
            <Clock className="size-6 text-primary" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Opening Hours
            </p>
          </div>
          <div className="overflow-hidden rounded-sm border border-border bg-card">
            {hours.map((h, i) => (
              <div
                key={h.day}
                className={`flex items-center justify-between px-7 py-7 ${
                  i !== hours.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="font-serif text-2xl font-normal text-foreground">
                  {h.day}
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.12em] text-primary">
                  {h.time}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            We welcome individuals, families, students, and groups. For group
            visits and guided tours, please contact us in advance at{' '}
            <a
              href="mailto:info@nolcenter.com"
              className="text-primary underline-offset-4 hover:underline"
            >
              info@nolcenter.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
