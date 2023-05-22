import React, { useEffect, useRef } from "react";
import "../App.css";
import Buttons from "./Buttons";
import Dropdown from "./Dropdown";

const Messages = ({
  item,
  handlesResponse,
  handleCountryResponse,
  setDisabled,
  addButton,
  setResponse,
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
      <div className={item.isUserResponse ? "answer" : "question"}>
        {item.answer}
      </div>
      <div className="flex flex-wrap  buttongrid mt-3 mb-2">
        {item.options &&
          item.options.map((button, index) =>
            button.controllType === "BUTTON" ? (
              <div>
                <Buttons
                  items={button}
                  onClick={handlesResponse}
                  setDisabled={setDisabled}
                  setResponse={setResponse}
                  index={index}
                  addButton={addButton}
                  handleAddButton={handleAddButton}
                />
              </div>
            ) : button.controllType === "DDL" ? (
              <div className="text-black border-0 w-1/2 ">
                <Dropdown selectCountry={handleCountryResponse} />
              </div>
            ) : null
          )}
      </div>
    </div>
  ) : (
    <>
      <div className={item.isUserResponse ? "answer" : ""}>{item.answer}</div>
      <div style={{ float: "left", clear: "both" }}>
        <div ref={messagesEndRef}></div>
      </div>
    </>
  );
};

export default Messages;
