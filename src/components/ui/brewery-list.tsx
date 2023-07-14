import React from 'react'
import BrewerySearch from './brewery-search'
import BreweryCard from './brewery-card'

function BreweryList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <BrewerySearch />
      </div>
      <div>
        <BreweryCard
          name="(405) Brewing Co"
          type="Micro"
          address="1716 Topeka St, Norman, Oklahoma, United States"
          url="http://www.runningdogsbrewery.com"
        />
      </div>
    </div>
  )
}

export default BreweryList
