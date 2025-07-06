import React from "react";

const CustomTextArea = ({id = "custom-input",value,onChange,className = "",...props}) => {
    
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
        className={`${className} w-full border p-1 rounded-md resize-none`}
        rows={3}
        {...props}
      />
    </div>
  );
};

export default CustomTextArea;
