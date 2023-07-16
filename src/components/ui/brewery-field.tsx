'use client'

import { cx } from 'class-variance-authority'

type BreweryFieldProps = {
  label: React.ReactNode
  labelIcon: React.ReactNode
  fieldValue: React.ReactNode
} & JSX.IntrinsicElements['div']
export default function BreweryField({
  label,
  labelIcon,
  fieldValue,
  className,
  ...attrs
}: BreweryFieldProps) {
  return (
    <div
      className={cx(
        'box-border flex w-full flex-col justify-between gap-2 rounded-lg border border-primary bg-white px-5 shadow-md',
        className ?? '',
      )}
      {...attrs}
    >
      <div className="relative flex items-center gap-1 overflow-hidden rounded-t-xl py-3 text-right text-2xl font-bold not-italic leading-[normal]  text-secondary-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:border after:border-t-muted after:content-['']">
        {labelIcon}
        <span>{label}</span>
      </div>
      <span className="text-detail">{fieldValue}</span>
    </div>
  )
}
