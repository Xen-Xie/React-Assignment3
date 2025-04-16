import { Button } from '@heroui/react'
import React from 'react'

function FeedBackArea() {
  return (
    <div className='bg-[#F2F2F2] w-full mt-6 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-[150px] px-3 sm:px-7 py-7 xl:mx-[110px]'>
            <div className='space-y-5 sm:space-y-8 xl:space-y-15 mx-2 sm:mx-8 order-2 sm:order-1'>
                <h1 className='font-extrabold text-[#1E1E1E] text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h1>
                <p className='text-[#5E5E5E] text-base sm:text-medium font-roboto leading-tight'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                <div className='text-center sm:text-start'>
                <Button className='px-6 font-roboto bg-[#1E1E1E] text-foreground rounded-full'>Explore MyFeedback business</Button>
                </div>
                
            </div>
            <div className='order-1 sm:order-2 mx-0 xl:mx-20'>
                <img src="Feedback.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default FeedBackArea