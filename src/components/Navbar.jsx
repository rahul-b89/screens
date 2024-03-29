import React from "react";
import Button from "./Button";

export default function Navbar({ title, className, buttonStyle, btnTitle }) {
  return (
    <div className="flex flex-row justify-between items-center border-1 border-black border-solid mt-8">
      <div className="flex flex-row gap-2 ml-4">
        <div>&larr;</div>
        <div className="font-medium">{title}</div>
      </div>
      <Button
        title={btnTitle}
        className="p-2 border-1 border-solid border-black rounded-md pt-0 pb-0"
        style={buttonStyle} // Apply the button style here
      />
    </div>
  );
}