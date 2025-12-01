import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import SerchBar from '../../components/student/SerchBar';
import CourseCard from '../../components/student/CourseCard';
import { assets } from '../../assets/assets';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../../components/student/Footer';

const CourseList = () => {
  const { allCourses } = useContext(AppContext);
  const navigate = useNavigate();
  const { input: urlInput } = useParams();

  const [input, setInput] = useState(urlInput || '');
  const [searchTerm, setSearchTerm] = useState(urlInput || '');
  const [filteredCourses, setFilteredCourses] = useState(allCourses || []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = allCourses.filter((item) =>
        (item.CourseTitle || item.courseTitle || '')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(allCourses);
    }
  }, [allCourses, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    navigate(`/course-list/${term}`);
  };

  const handleClear = () => {
    setSearchTerm('');
    setInput('');
    setFilteredCourses(allCourses);
    navigate('/course-list');
  };

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">Course List</h1>
            <p className="text-gray-500">
              <span className="text-orange-600 cursor-pointer" onClick={() => navigate('/')}>
                Home
              </span>{' '}
              / <span>Course List</span>
            </p>
          </div>

          <SerchBar input={input} setInput={setInput} onSearch={handleSearch} />
        </div>

        {searchTerm && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border rounded mt-8 -mb-8 text-gray-600">
            <p>{searchTerm}</p>
            <img
              src={assets.cross_icon}
              alt="clear"
              className="w-4 h-4 cursor-pointer"
              onClick={handleClear}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => <CourseCard key={index} course={course} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center mt-10">No courses found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseList;
