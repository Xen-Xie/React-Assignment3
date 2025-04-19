import React from 'react'
import SortButton from '../ReuseComponents/SortButton'
import FilterButton from '../ReuseComponents/FilterButton'

function ReviewArea() {
  return (
    <div className='max-w-5xl mx-3 xl:mx-auto md:mx-20 mt-8'>
        <div className='flex items-center gap-8'>
            <FilterButton />
            <SortButton className='border-1 rounded-full border-[#5E5E5E] bg-foreground'>
            <div>
          <img
            src="/GreySort.svg"
            alt="Sort Icon"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </div>
        <div className="text-sm sm:text-base text-[#5E5E5E] font-roboto">
          Sort
        </div>
            </SortButton>
        </div>
    </div>
  )
}

export default ReviewArea