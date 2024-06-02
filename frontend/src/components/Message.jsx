import { useEffect, useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { HiXCircle } from "react-icons/hi2";
import { HiMiniCheckCircle } from "react-icons/hi2";

import bus from "./../../utils/bus";

function Message() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    bus.addListener("flash", ({ message, type }) => {
      setVisible(true);
      setMessage(message);
      setType(type);

      setTimeout(() => {
        setVisible(false);
      }, 3000);
    });
  }, []);

  const getAlertStyles = () => {
    switch (type) {
      case "error":
        return "bg-red-600 text-red-200";
      case "success":
        return "bg-blue-800 text-blue-200";
      default:
        return "bg-gray-800 text-gray-400";
    }
  };

  const getIconStyles = () => {
    switch (type) {
      case "error":
        return "bg-red-600 text-red-200";
      case "success":
        return "bg-blue-800 text-blue-200";
      default:
        return "bg-gray-800 text-gray-400";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "error":
        return <HiXCircle className={getIconStyles()} />;
      case "success":
        return <HiMiniCheckCircle className={getIconStyles()} />;
      default:
        return <AiFillAlert className={getIconStyles()} />;
    }
  };

  return (
    visible && (
      <div className="flex justify-center">
        <div
          id="toast-default"
          className={`flex items-center absolute w-full max-w-xs p-4 rounded-lg shadow ${getAlertStyles()}`}
          role="alert"
        >
          <div
            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${getIconStyles()}`}
          >
            <div className="flex justify-center items-center text-center text-2xl">
              {getIcon()}
            </div>
            
          </div>
          <div className="ms-3 text-sm font-normal">{message}</div>
        </div>
      </div>
    )
  );
}

export default Message;
