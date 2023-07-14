import BreweryHeader from '@/components/core/brewery-header'

export default function BreweryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <BreweryHeader />
      <div className="m-auto box-border max-w-[1440px] py-5">{children}</div>
    </div>
  )
}
