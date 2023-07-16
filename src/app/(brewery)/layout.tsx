import BreweryHeader from '@/components/core/brewery-header'
import LoaderUI from '@/components/ui/loader-ui'

export default function BreweryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-5 bg-slate-50">
      <BreweryHeader />
      <div className="box-border h-[calc(100vh-200px)]">
        <div className="m-auto h-full max-w-[1440px] px-[90px]">{children}</div>
      </div>
      <div className="h-[80px] w-full bg-primary"></div>
    </div>
  )
}
