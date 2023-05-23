import React, { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-main">
          <div className="modal">
            <span className="close" onClick={closeModal}>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
