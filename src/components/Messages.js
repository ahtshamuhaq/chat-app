import React, { useEffect } from "react";
import "../App.css";
import Buttons from "./Buttons";
import Dropdown from "./Dropdown";

const Messages = ({
  i,
  questions,
  item,
  handlesResponse,
  handleCountryResponse,
  disabled,
  containerRef,
  scrollToBottom,
  setDisabled,
  addButton,
  handleResponse,
  setResponse,
  handleAddButton,
}) => {
  return !item.isUserResponse ? (
    <div>
      <div
        id="chat-container"
        ref={containerRef}
        className={item.isUserResponse ? "answer" : "question"}
      >
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
    </>
  );
};

export default Messages;
