import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { department } from "../../../Data/Department";
import { fileUploadUsingDriveLink } from "../../../services/operations/uploadAPI";
import customStylesReactSelect from "./CustomStylesReactSelect";

const DriveLinkUploads = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const [departmentName, setDepartmentName] = useState("1st Year Department");
  const [departmentYear, setDepartmentYear] = useState("1st year");
  const [subjects, setSubjects] = useState([]);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    Department: departmentName,
    year: departmentYear,
    subject: "",
    driveLink: "",
  });

  const { firstName, lastName, subject, driveLink } = formData;

  useEffect(() => {
    const selectedDepartment = department.find(
      (dep) => dep.name === departmentName
    );
    if (selectedDepartment) {
      setSubjects(selectedDepartment.subjects);
      setFormData((prevData) => ({
        ...prevData,
        subject: "",
      }));
    }
  }, [departmentName]);

  const handleChangeInYear = (e) => {
    setDepartmentYear(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      year: e.target.value,
    }));
  };

  const handleChangeInDepartment = (e) => {
    setDepartmentName(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      Department: e.target.value,
    }));
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubjectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submitButton clicked for upload file  ", formData);
    try {
      dispatch(fileUploadUsingDriveLink(formData, token));
    } catch (error) {
      console.log("Error in file upload ", error.message);
    }
  };

  const subjectOptions = subjects.map((sub) => ({
    value: sub,
    label: sub,
  }));

  return (
    <div className="min-h-[calc(100vh-3.2rem)] flex w-8/12 mx-auto pt-16 mb-16 md:pt-32 bg-gradient-to-r from-indigo-100 via-indigo-50 to-white rounded-lg shadow-lg p-8">
      <form
        className="flex w-full flex-col gap-y-6 mt-4"
        encType="multipart/form-data"
        onSubmit={handleOnSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <label className="flex flex-col">
            <p className="mb-2 text-lg text-richblack-800">
              First Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </label>
          <label className="flex flex-col">
            <p className="mb-2 text-lg text-richblack-800">
              Last Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
          <label className="flex flex-col">
            <p className="mb-2 text-lg text-richblack-800">
              Department <sup className="text-pink-900">*</sup>
            </p>
            <select
              name="Department"
              value={departmentName}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={handleChangeInDepartment}
            >
              {department.map((course, index) => (
                <option key={index} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col">
            <p className="mb-2 text-lg text-richblack-800">
              Subject Name <sup className="text-pink-900">*</sup>
            </p>
            <Select
              name="subject"
              value={subjectOptions.find((option) => option.value === subject)}
              onChange={handleSubjectChange}
              options={subjectOptions}
              styles={customStylesReactSelect}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Select a subject"
              isClearable
            />
          </label>
        </div>

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
          <label className="flex flex-col">
            <p className="mb-2 text-lg text-richblack-800">
              Year <sup className="text-pink-900">*</sup>
            </p>
            <select
              name="year"
              value={departmentYear}
              onChange={handleChangeInYear}
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option>1st year</option>
              <option>2nd year</option>
              <option>3rd year</option>
              <option>4th year</option>
            </select>
          </label>

          <label className="flex flex-col">
            <p className="mb-2 text-lg text-richblack-800">
              Drive Link <sup className="text-pink-900">*</sup>
            </p>
            <input
              type="text"
              required
              name="driveLink"
              value={driveLink}
              onChange={handleOnChange}
              placeholder="Paste Drive Link here"
              className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default DriveLinkUploads;
