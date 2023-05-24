import React, { useEffect, useRef } from "react";
import "../App.css";
import Buttons from "./Buttons";
import Dropdown from "./Dropdown";

const Messages = ({
  item,
  handlesResponse,
  i,
  handleCountryResponse,
  setDisabled,
  addButton,
  setResponse,
  questions,
  handleAddButton,
}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  });
  return !item.isUserResponse ? (
    <div>
      <div
        className={
          item.isUserResponse
            ? "bg-quinary2 w-4/5 ml-auto px-2.5 py-5 rounded-[1.125rem_1.125rem_0_1.125rem] break-words sm:w-3/5 lg:w-1/2"
            : "bg-secondary w-4/5 px-2.5 py-5 rounded-[1.125rem_1.125rem_1.125rem_0] break-words sm:w-3/5 lg:w-1/2"
        }
      >
        {item.answer}
      </div>
      <div className="flex flex-wrap  w-full mt-3 mb-2">
        {item.options &&
          item.options.map((button, index) =>
            button.controllType === "BUTTON" ? (
              <div>
                <Buttons
                  items={button}
                  onClick={handlesResponse}
                  setDisabled={setDisabled}
                  setResponse={setResponse}
                  i={i}
                  questions={questions}
                  index={index}
                  addButton={addButton}
                  handleAddButton={handleAddButton}
                />
              </div>
            ) : button.controllType === "DDL" ? (
              <div className="text-black border-0 w-4/5 sm:w-3/5 lg:w-1/2">
                <Dropdown selectCountry={handleCountryResponse} i={i} />
              </div>
            ) : null
          )}
      </div>
    </div>
  ) : (
    <>
      <div
        className={
          item.isUserResponse
            ? "bg-quinary2 w-4/5 ml-auto px-2.5 py-5 rounded-[1.125rem_1.125rem_0_1.125rem] break-words sm:w-3/5 lg:w-1/2"
            : ""
        }
      >
        {item.answer}
      </div>
      <div className="mb-6 float-left clear-both">
        <div ref={messagesEndRef}></div>
      </div>
    </>
  );
};

export default Messages;
