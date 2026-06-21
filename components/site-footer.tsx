import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { NolLogo } from '@/components/nol-logo'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/tickets', label: 'Tickets' },
  { href: '/location', label: 'Location' },
  { href: '/gallery', label: 'Gallery & Virtual Tour' },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <NolLogo className="text-background" />
            <p className="mt-5 text-sm leading-relaxed text-background/70">
              A cultural craft center in Marsa Matrouh dedicated to preserving
              and revitalizing traditional textile weaving heritage — connecting
              artisans, students, and visitors through learning, exhibition, and
              cultural experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: XIcon, label: 'X' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-sm border border-background/20 text-background/70 transition-colors hover:border-background/60 hover:text-background"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/80 transition-colors hover:text-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-background/50" />
                <span>Northern Coastal Zone, Marsa Matrouh, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-background/50" />
                <a
                  href="mailto:info@nolcenter.com"
                  className="transition-colors hover:text-background"
                >
                  info@nolcenter.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-background/50" />
                <a
                  href="tel:+20000000000"
                  className="transition-colors hover:text-background"
                >
                  +20 XXX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-7 text-xs text-background/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NOL Cultural Craft Center. All rights reserved.</p>
          <p className="tracking-[0.15em] uppercase">Marsa Matrouh · Egypt</p>
        </div>
      </div>
    </footer>
  )
}
