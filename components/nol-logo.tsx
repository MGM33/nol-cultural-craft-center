import { cn } from '@/lib/utils'

export function NolLogo({
  className,
  showArabic = true,
}: {
  className?: string
  showArabic?: boolean
}) {
  return (
    <span className={cn('flex items-baseline gap-2 leading-none', className)}>
      <span className="font-serif text-2xl font-semibold tracking-[0.25em] uppercase">
        Nol
      </span>
      {showArabic && (
        <span className="font-serif text-lg opacity-70" aria-hidden="true">
          النول
        </span>
      )}
    </span>
  )
}
