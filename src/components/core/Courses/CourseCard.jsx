import React from "react";
import Button from "../../common/Button";

const CourseCard = (props) => {
  const { subject, Department } = props;

  return (
    <div className="border-2 border-gray-300 bg-white rounded-xl flex flex-col justify-between items-center md:w-full w-11/12 mx-auto h-64 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Upper Part */}
      <div className="w-full md:h-40 h-32 bg-gradient-to-b from-cyan-400 to-blue-500 flex justify-center items-center text-white font-semibold text-2xl rounded-t-xl text-center">
        {subject}
      </div>

      {/* Lower Part */}
      <div className="w-full md:h-24 h-20 bg-[#EDF4FB] flex flex-col justify-center items-center rounded-b-xl p-4">
        <Button
          active={false}
          linkto={`/courses/${Department}/subjectNotes/${subject}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Access Course
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
