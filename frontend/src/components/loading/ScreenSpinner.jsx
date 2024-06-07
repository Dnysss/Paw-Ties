import React from "react";
import { IoPawSharp } from "react-icons/io5";

function ScreenSpinner() {
  return (
    <div className="flex items-center justify-center bg-white z-50">
      <IoPawSharp className="text-3xl animate-spin text-[#002A48]" />
    </div>
  );
}

export default ScreenSpinner;
