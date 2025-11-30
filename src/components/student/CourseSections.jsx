import React, { useContext } from 'react'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CourseSections = () => {
  const{allCourses}=useContext(AppContext);
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from best instructors</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3 mb-5'>Our instructors are industry experts with real-world experience.</p>

      <div className="
  grid 
  grid-cols-1           /* mobile: 2 columns (auto-fit look) */
  sm:grid-cols-2        /* small screens */
  md:grid-cols-3        /* tablets */
  lg:grid-cols-4        /* PC / laptops: force 4 columns */
  gap-5
  my-6
">

        {allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course} />)}

      </div>

      <Link to={"/course-list"} onClick={() => scrollTo(0, 0)}
       className="text-orange-500 border border-orange-500/30 px-10 py-2 rounded my-6">Show all courses</Link>

       
    </div>
  )
}

export default CourseSections
