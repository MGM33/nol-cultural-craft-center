import { Scissors, Frame, Drama, GraduationCap, Store } from 'lucide-react'

const items = [
  { Icon: Scissors, value: '12+', label: 'Workshops', note: 'Hands-on weaving studios' },
  { Icon: Frame, value: '4', label: 'Exhibition Spaces', note: 'Permanent & temporary' },
  { Icon: Drama, value: '1', label: 'Cultural Theater', note: 'Performances & talks' },
  { Icon: GraduationCap, value: '8', label: 'Educational Facilities', note: 'Courses & research' },
  { Icon: Store, value: '30+', label: 'Craft Market', note: 'Local artisan vendors' },
]

export function HomeHighlights() {
  return (
    <section className="weave-texture bg-secondary/40 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            The Center
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] text-foreground lg:text-5xl">
            Key components of NOUL
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {items.map(({ Icon, value, label, note }) => (
            <div
              key={label}
              className="group flex flex-col bg-card p-7 transition-colors hover:bg-primary"
            >
              <Icon className="size-7 text-primary transition-colors group-hover:text-primary-foreground" />
              <p className="mt-8 font-serif text-4xl font-light text-foreground transition-colors group-hover:text-primary-foreground">
                {value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-foreground transition-colors group-hover:text-primary-foreground">
                {label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
