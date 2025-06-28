import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendFeedback } from "../../services/operations/feedbackFormAPI.js";

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    contactNo: "",
    Subject: "",
    message: "",
  });

  const { Name, email, contactNo, Subject, message } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(sendFeedback(Name, email, contactNo, Subject, message, navigate));
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        className="w-full max-w-lg bg-white border-2 border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-300"
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-8">
          Send Us Your Feedback
        </h2>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name <sup className="text-pink-600">*</sup>
          </label>
          <input
            required
            type="text"
            name="Name"
            value={Name}
            onChange={handleOnChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none text-gray-700"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <sup className="text-pink-600">*</sup>
          </label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none text-gray-700"
            placeholder="example@email.com"
          />
        </div>

        {/* Contact No */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Contact No.
          </label>
          <input
            type="text"
            name="contactNo"
            value={contactNo}
            onChange={handleOnChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none text-gray-700"
            placeholder="9876543210"
          />
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Subject <sup className="text-pink-600">*</sup>
          </label>
          <input
            required
            type="text"
            name="Subject"
            value={Subject}
            onChange={handleOnChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none text-gray-700"
            placeholder="Subject of your message"
          />
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message <sup className="text-pink-600">*</sup>
          </label>
          <textarea
            required
            name="message"
            value={message}
            onChange={handleOnChange}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none text-gray-700 resize-none"
            rows="4"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-full font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          Send Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
