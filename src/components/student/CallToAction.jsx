import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
<div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
  <h1 className='text-xl md:text-4xl text-gray-800 font-semibold text-center'>Learn Without Limits. Live Without Boundaries.</h1>
  <p className='text-gray-500 sm:text-sm text-center'>Join thousands of learners worldwide and unlock your potential with our expert-led courses. Start your journey today!</p>
  {/* Add justify-center here to center the buttons horizontally */}
  <div className='flex items-center font-medium gap-6 mt-4 justify-center'> 
    <button className='px-10 py-3 rounded-md text-white bg-amber-600'>Get Started</button>
    <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="Arrow"/></button>
  </div>
</div>
  )
}

export default CallToAction
