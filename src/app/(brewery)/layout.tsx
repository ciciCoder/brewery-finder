import BreweryHeader from '@/components/core/brewery-header'

export default function BreweryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <BreweryHeader />
      <div className="box-border h-[calc(100vh-80px)] overflow-y-auto py-5">
        <div className="m-auto max-w-[1440px] px-[90px]">{children}</div>
      </div>
    </div>
  )
}
