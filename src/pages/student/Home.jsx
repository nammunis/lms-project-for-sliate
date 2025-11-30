import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSections from '../../components/student/CourseSections'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'


const Home = () => {
  return (
    <div className='flex flex-col item-center space-y-7 text-center'>
      <Hero/>
      <Companies/>
      <CourseSections/>
      <TestimonialsSection/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default Home
