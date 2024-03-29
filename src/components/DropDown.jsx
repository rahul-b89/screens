import React from "react";

function DropDown({
  title,
  name,
  register,
  errors,
  options,
  ...props
}) {
  return (
    <div className={`flex flex-col select-box-1 floating-label`}>
      

      <select
        id={name}
        className="p-2 rounded-md "
        {...register}
        {...props}
        style={{color: "#2D2D2D", borderColor: "#A1A1A1", fontSize: "14px", fontWeight:"500", lineHeight:"20px"  }}
      >
        {options ? (
            <>
            <option default className="hidden"></option>
          {options.map((ele, index) => (
            <option key={index} >
              {ele}
            </option>
          ))}
          </>
        ) : (
          <>
          <option default className="hidden"></option>
            <option>Option 1</option>
            <option>Option 2</option>
          </>
        )}
      </select>
      {errors[name] && (
      <span className="text-red-500">{errors[name].message}</span>)}
      <label
        htmlFor={name}
        className="relative top-3 left-3 bg-white max-w-max"
        style={{color:"#808080"}}
      >
        {title}
      </label>
    </div>
  );
}

export default DropDown;
