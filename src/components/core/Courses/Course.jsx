import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import SearchBox from "../../common/SearchBox";
import { department } from "../../../Data/Department";

const Course = () => {
  const { Department } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const dept = department.find((d) => d.name === Department);
    if (dept) {
      setSubjects(dept.subjects);
    }
  }, [Department]);

  // Filter subjects based on search query
  const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-200">
      {/* Department Header */}
      <div className="h-24 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center text-3xl md:text-5xl font-semibold flex items-center justify-center shadow-lg">
        {Department}
      </div>

      {/* Search Box */}
      <div className="md:w-5/12 w-9/12 flex justify-center mx-auto mt-8">
        <SearchBox
          onSearch={setSearchQuery}
          placeholder="Search for subjects..."
          className="w-full px-6 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Subject Cards Grid */}
      <div className="w-10/12 mx-auto m-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSubjects.map((subject, index) => (
            <CourseCard key={index} Department={Department} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
