import React from "react";
import { useSelector } from "react-redux";

const Desktop = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="min-h-[calc(100vh-3.2rem)] flex flex-col justify-center items-center bg-gradient-to-br from-cyan-100 via-blue-200 to-blue-400 px-6 py-12">
      {/* Welcome Text */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent tracking-wide animate-fade-down">
          WELCOME, {user?.firstName?.toUpperCase()}!
        </h1>
      </div>

      {/* Subtitle Paragraph */}
      <div className="mt-16 md:mt-20 text-center max-w-2xl">
        <p className="text-lg md:text-2xl text-gray-700 font-medium leading-relaxed">
          We’re thrilled to have you here! Dive into a treasure trove of study
          notes shared by your peers and professors. Your contributions can make
          a big difference — upload your notes today and help the community
          thrive!
        </p>
      </div>
    </div>
  );
};

export default Desktop;
