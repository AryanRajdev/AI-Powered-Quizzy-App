import React from "react";

const CustomButton = ({ children, className, ...props }) => {
  return (
    <div>
      <button
        className={`${className} flex items-center gap-1 p-2 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
