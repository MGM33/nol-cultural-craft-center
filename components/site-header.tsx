'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NolLogo } from '@/components/nol-logo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/tickets', label: 'Tickets' },
  { href: '/location', label: 'Location' },
  { href: '/gallery', label: 'Gallery & Virtual Tour' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  // transparent only on home hero when not scrolled
  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'border-b border-border/60 bg-background/80 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className={cn(
            'transition-colors',
            transparent ? 'text-background' : 'text-foreground',
          )}
          aria-label="NOL Cultural Craft Center home"
        >
          <NolLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-[0.8rem] font-medium uppercase tracking-[0.15em] transition-colors',
                  transparent
                    ? 'text-background/80 hover:text-background'
                    : 'text-muted-foreground hover:text-foreground',
                  active && (transparent ? 'text-background' : 'text-foreground'),
                )}
              >
                {link.label}
                {active && (
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px w-full',
                      transparent ? 'bg-background' : 'bg-primary',
                    )}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/tickets"
            className={cn(
              'inline-flex items-center rounded-sm px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.15em] transition-colors',
              transparent
                ? 'bg-background text-foreground hover:bg-background/90'
                : 'bg-primary text-primary-foreground hover:bg-primary/90',
            )}
          >
            Book Tickets
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex items-center justify-center p-2 lg:hidden',
            transparent ? 'text-background' : 'text-foreground',
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-5 py-4"
            aria-label="Mobile"
          >
            {links.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'border-b border-border/50 py-3.5 text-sm font-medium uppercase tracking-[0.12em] last:border-0',
                    active ? 'text-primary' : 'text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/tickets"
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-primary-foreground"
            >
              Book Tickets
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
