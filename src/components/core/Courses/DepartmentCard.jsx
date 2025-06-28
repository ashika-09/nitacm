import React, { useState } from "react";
import { department } from "../../../Data/Department";
import Button from "../../common/Button";
import SearchBox from "../../common/SearchBox";

const DepartmentCard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on the search query
  const filteredCourses = department.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-10">
      {/* Search Box */}
      <div className="md:w-5/12 w-9/12 flex justify-center mx-auto">
        <SearchBox
          onSearch={setSearchQuery}
          placeholder="Search Departments"
          className="p-4 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Department Cards */}
      <div className="md:w-10/12 w-9/12 mx-auto my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="flex justify-center items-center border-2 border-gray-300 rounded-xl w-full md:h-72 h-64 flex-col shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {/* Department Name */}
              <div className="w-full md:h-48 h-40 bg-gradient-to-b from-cyan-400 to-blue-500 flex justify-center items-center rounded-t-xl text-white font-semibold text-2xl text-center px-4">
                {course.name}
              </div>

              {/* Select Department Button */}
              <div className="w-full md:h-24 h-20 bg-[#EDF4FB] flex justify-center items-center rounded-b-lg">
                <Button
                  active={false}
                  linkto={`/courses/${course.name}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                >
                  Select Department
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
