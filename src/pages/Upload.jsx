import React from "react";
import Button from "../components/common/Button";

const Upload = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 px-6 py-12">
      {/* Blinking Notice */}
      <div className="text-center mb-8 animate-pulse">
        <p className="text-red-600 text-lg md:text-xl font-semibold">
          Preferably, upload files using a drive link for better accessibility.
        </p>
      </div>

      {/* Upload Info Text */}
      <div className="text-center mb-10">
        <p className="text-2xl font-semibold text-gray-800">
          Please choose how you want to upload your files:
        </p>
      </div>

      {/* Upload Options Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        <Button
          active={true}
          linkto={"/upload/uploadUsingDriveLink"}
          className="w-full p-10 text-xl rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg transition-all duration-300 font-semibold text-white"
        >
          Upload using Drive Link
        </Button>

        <Button
          active={true}
          linkto={"/upload/uploadLocalfile"}
          className="w-full p-10 text-xl rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 shadow-lg transition-all duration-300 font-semibold text-white"
        >
          Upload Local File
        </Button>
      </div>
    </div>
  );
};

export default Upload;
