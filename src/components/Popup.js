import React, { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed w-full h-full flex justify-center items-center z-[999] left-0 top-0">
          <div className="bg-[#4e4f6a] rounded relative p-36">
            <span
              className="absolute h-[50px] cursor-pointer right-2.5 top-2.5 "
              onClick={closeModal}
            >
              <i className="fa fa-close text-2xl"></i>
            </span>
            <p className="w-full bg-quaternary font-bold p-3 mb-3 text-2xl text-center">
              {" "}
              THE CHAT HAS ENDED
            </p>
            <p className="w-full bg-quaternary font-bold p-3 mb-3 text-2xl text-center">
              {" "}
              HOPE YOU ENJOYED CHATTING US
            </p>
            <span className=" font-bold p-3 mb-3 text-2xl text-center">
              {" "}
              FOR CHATTING US AGAIN
            </span>
            <span
              onClick={refreshPage}
              className="  cursor-pointer text-green-600 underline font-bold p-3 mb-3 text-2xl text-center"
            >
              {" "}
              CLICK HERE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
