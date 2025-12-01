import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  // Ensure there is an id to navigate
  const courseId = course.id || course._id || null;

  if (!courseId) return null; // don't render card if no id

  return (
    <Link
      to={'/course-details/' + courseId}  // safe ID
      onClick={() => scrollTo(0, 0)}
      className="border border-orange-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img className="w-full" src={course.courseThumbnail} alt={course.courseTitle} />

      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">SHEHAN</p>

        <div className="flex items-center space-x-2 mt-2">
          <p>{calculateRating(course)}</p>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt="Star"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>

          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>

        <p className="text-base font-semibold text-orange-800 mt-2">
          {currency}
          {((course.coursePrice || 0) - ((course.discount || 0) * (course.coursePrice || 0)) / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
