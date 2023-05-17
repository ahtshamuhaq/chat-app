import React from "react";
import "../App.css";
import Buttons from "./Buttons";
import Dropdown from "./Dropdown";

const Messages = ({
  i,
  questions,
  item,
  handlesResponse,
  handleCountryResponse,
  response,
  setResponse,
  question,
  addButton,
  handleResponse,
  handleAddButton,
}) => {
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
