import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto, className }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[14px] sm:text-[16px] px-6 py-3 rounded-full font-semibold
          ${
            active
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700"
              : "bg-gray-800 text-white hover:bg-gray-900"
          }
          transform hover:scale-95 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg
          ${className}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
