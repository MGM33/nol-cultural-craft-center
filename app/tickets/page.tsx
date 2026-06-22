import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { BookingForm } from '@/components/booking-form'
import { Info, Clock, Ticket, Camera } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entrance Tickets | NOL Cultural Craft Center',
  description:
    'Book your visit to NOL Cultural Craft Center in Marsa Matrouh. View entrance ticket prices for adults, students, and children.',
}

const tickets = [
  { type: 'Egyptian Adult', price: '50', unit: 'EGP', note: 'General admission for Egyptian nationals.' },
  { type: 'Egyptian Student', price: '25', unit: 'EGP', note: 'Valid student ID required.', featured: true },
  { type: 'Foreign Adult', price: '200', unit: 'EGP', note: 'General admission for visitors.' },
  { type: 'Foreign Student', price: '100', unit: 'EGP', note: 'Valid student ID required.' },
  { type: 'Children', price: 'Free', unit: '', note: 'Ages 6 and under, accompanied by an adult.' },
]

const notes = [
  { Icon: Clock, text: 'Last entry is one hour before closing time.' },
  { Icon: Ticket, text: 'Tickets include access to all permanent exhibitions.' },
  { Icon: Camera, text: 'Photography is welcome in designated areas only.' },
  { Icon: Info, text: 'Workshops and the residency require separate reservations.' },
]

export default function TicketsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Plan Your Visit"
        title="Entrance Tickets"
        description="Choose your ticket and reserve your place at NOL Cultural Craft Center."
        image="/images/courtyard.png"
        imageAlt="Interior courtyard of NOL Cultural Craft Center"
      />

      {/* Pricing */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Admission
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
            Entrance ticket prices
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tickets.map((t) => (
            <div
              key={t.type}
              className={`relative flex flex-col rounded-sm border p-8 transition-shadow hover:shadow-lg ${
                t.featured
                  ? 'border-primary bg-card ring-1 ring-primary/30'
                  : 'border-border bg-card'
              }`}
            >
              {t.featured && (
                <span className="absolute right-6 top-6 rounded-sm bg-primary px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-primary-foreground">
                  Popular
                </span>
              )}
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t.type}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-light text-foreground">
                  {t.price}
                </span>
                {t.unit && (
                  <span className="text-sm font-medium uppercase tracking-[0.12em] text-primary">
                    {t.unit}
                  </span>
                )}
              </div>
              <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                {t.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section className="weave-texture bg-secondary/40 py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Reservation
            </p>
            <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
              Book Your Visit
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground">
              Reserve your tickets in advance to secure your preferred date.
              Fill in your details below and we&apos;ll confirm your visit by
              email.
            </p>

            <ul className="mt-10 space-y-5">
              {notes.map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="pt-2 text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  )
}
