import React from 'react'
import { dummyTestimonial, assets } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className="pb-14 px-4 md:px-0 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">Testimonials</h2>
      <p className="text-gray-500 md:text-lg text-center mt-3 max-w-2xl">
        This course changed my life! Highly recommend.
      </p>

      {/* Wrapper for horizontal scrolling/centering */}
      <div className="mt-14 w-full max-w-7xl mx-auto ml-10 mr-10">
        {/* Horizontal Flex container (The key change) */}
        <div className="flex space-x-8 overflow-x-auto justify-start md:justify-center">
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              // Set a fixed width for the card and ensure it doesn't shrink
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-80 flex flex-col flex-shrink-0 mr-2 ml-2"
            >
              {/* Header */}
              <div className="flex items-center gap-4 px-5 py-4 bg-gray-50">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="text-left">
                  <h3 className="text-lg font-medium text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                {/* Stars */}
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <img
                      className="h-5 w-5"
                      key={i}
                      src={i < testimonial.rating ? assets.star : assets.star_blank}
                      alt="Star"
                    />
                  ))}
                </div>
                {/* Feedback */}
                <p className="text-gray-500 mt-4 text-sm text-left">{testimonial.feedback}</p>
              </div>
              <a href='#' className='text-orange-500 underline px-5 mb-5 text-left'> Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection