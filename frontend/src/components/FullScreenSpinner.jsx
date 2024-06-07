import React from "react";
import { IoPawSharp } from "react-icons/io5";

function FullScreenSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F8D629] z-50">
      <IoPawSharp className="text-5xl animate-spin text-[#002A48]" />
    </div>
  );
}

export default FullScreenSpinner;
