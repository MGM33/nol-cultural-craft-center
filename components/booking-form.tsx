'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'

const ticketTypes = [
  'Egyptian Adult — 50 EGP',
  'Egyptian Student — 25 EGP',
  'Foreign Adult — 200 EGP',
  'Foreign Student — 100 EGP',
  'Children — Free',
]

const fieldClass =
  'mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary'
const labelClass =
  'text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground'

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-border bg-card p-12 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="size-7" />
        </div>
        <h3 className="mt-6 font-serif text-3xl font-light text-foreground">
          Your visit is reserved
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for booking with NOUL. A confirmation will be sent to your
          email with the details of your visit. We look forward to welcoming you.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-sm border border-border px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
        >
          Book Another Visit
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-border bg-card p-7 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="nationality" className={labelClass}>
            Nationality
          </label>
          <input
            id="nationality"
            name="nationality"
            type="text"
            required
            placeholder="e.g. Egyptian"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="ticketType" className={labelClass}>
            Ticket Type
          </label>
          <select id="ticketType" name="ticketType" required className={fieldClass}>
            <option value="" disabled>
              Select a ticket type
            </option>
            {ticketTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className={labelClass}>
            Number of Tickets
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            min={1}
            defaultValue={1}
            required
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="visitDate" className={labelClass}>
            Visit Date
          </label>
          <input
            id="visitDate"
            name="visitDate"
            type="date"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-sm bg-primary px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Book Now
      </button>
    </form>
  )
}
