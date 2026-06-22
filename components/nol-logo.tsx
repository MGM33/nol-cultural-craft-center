import Image from 'next/image'
import { cn } from '@/lib/utils'
import { IMAGES } from '@/lib/images'

export function NolLogo({
  className,
  showArabic = true,
}: {
  className?: string
  showArabic?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-3 leading-none', className)}>
      <span className="relative flex size-10 shrink-0 overflow-hidden rounded-sm">
        <Image
          src={IMAGES.logo}
          alt="NOUL Logo"
          fill
          className="object-contain"
          sizes="40px"
        />
      </span>
      <span className="flex items-baseline gap-2">
        <span className="font-serif text-2xl font-semibold tracking-[0.25em] uppercase">
          Noul
        </span>
        {showArabic && (
          <span className="font-serif text-lg opacity-70" aria-hidden="true">
            النول
          </span>
        )}
      </span>
    </span>
  )
}
