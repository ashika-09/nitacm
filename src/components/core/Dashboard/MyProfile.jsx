import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fileUploadEndpoints } from "../../../services/apis";
import { apiConnector } from "../../../services/apiConnector";
import { deleteFile } from "../../../services/operations/profileAPI.js";
const { GET_USER_NOTES } = fileUploadEndpoints;

const MyProfile = () => {
  const [files, setFiles] = useState([]);
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    // Fetch user files
    const fetchUserFiles = async () => {
      try {
        const response = await apiConnector(
          "GET",
          `${GET_USER_NOTES}?userid=${user._id}`,
          { userid: user._id }
        );
        setFiles(response.data.notes);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUserFiles();
  }, [user]);

  const handleDelete = (fileId) => {
    deleteFile(fileId);
    setFiles((prevFiles) => prevFiles.filter((file) => file._id !== fileId));
  };

  const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleString("en-IN", options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-green-200 text-black p-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section - User Info */}
        <div className="w-full md:w-1/4 mx-auto flex flex-col items-center gap-6 justify-center md:block">
          <img
            src={user?.image}
            alt={user?.firstName}
            className="rounded-full w-40 h-40 object-cover shadow-xl hover:scale-110 transition-transform duration-300"
          />
          <div className="text-4xl font-bold text-gray-900">{`${user?.firstName} ${user?.lastName}`}</div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
            Edit Profile
          </button>
        </div>

        {/* Right Section - User's Files */}
        <div className="w-full md:w-3/4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {files.map((file) => (
              <div
                key={file._id}
                className="bg-gradient-to-r from-cyan-300 to-blue-400 text-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out"
              >
                <div className="text-xl font-semibold text-gray-900">
                  {file.subject}
                </div>
                <div className="text-md font-medium text-gray-700">
                  {file.firstName}
                </div>
                <div className="text-xs text-gray-600 mb-4">
                  {formatDate(file.uploadedAt)}
                </div>
                <button
                  onClick={() => handleDelete(file._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                >
                  Delete File
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
