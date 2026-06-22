import Image from 'next/image'
import { cn } from '@/lib/utils'

export function NolLogo({
  className,
  showArabic = true,
}: {
  className?: string
  showArabic?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-3 leading-none', className)}>
      <span className="relative flex size-8 shrink-0 overflow-hidden rounded-sm border border-current/20">
        <Image
          src="/images/IMPORTANT_THIS_IS_NOT_AN_202606162331.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="32px"
          aria-hidden="true"
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
