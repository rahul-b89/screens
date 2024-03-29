// Button.jsx
import React from "react";

function Button({ title, className, style }) {
  return (
    <div>
      <button className={`px-3 text-white ${className}`} style={style} type="submit">
        {title}
      </button>
    </div>
  );
}


export default Button;
