import React, { useRef } from "react";

function InputBox ({
  title,
  name,
  type,
  className,
  category,
  field,
  errors,
  register,
  icon,
  ...props
}) 
{


  return (
    <div className={`border-2 border-solid p-2 rounded-md border-gray-400 flex flex-col ${className} floating-label`}>
      
     
          <input
            type={type}
            id={name}
            
            className={`text-base text-gray-800 `}
            {...register}
            {...props}
            placeholder=""
            style={{ color: "#2D2D2D", borderColor: "#A1A1A1", fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}
          />
          {errors[name] && (
            <span className="text-red-500">{errors[name].message}</span>
          )}
          <label
            htmlFor={name}
            className="relative top-3 left-3 bg-white max-w-max"
            style={{ color: "#808080", display: "inline", font: "12px", paddingRight: "12px" }}
          >
            {title}
          </label>
        
      
    </div>
  );
};

export default InputBox;
