import React, { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeModal}>
              <i class="fa fa-close" style={{ fontSize: "24px" }}></i>
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
