import React from "react";
import "../App.css";
import Buttons from "./Buttons";
import Dropdown from "./Dropdown";

const Messages = ({ item, handleResponse, handleCountryResponse }) => {
  return !item.isUserResponse ? (
    <div>
      <div className={item.isUserResponse ? "answer" : "question"}>
        {item.answer}
      </div>
      <div className="grid grid-cols-3 w-1/2 buttongrid mt-3 mb-2">
        {item.options &&
          item.options.map((button, index) =>
            button.controllType === "BUTTON" ? (
              <div>
                <Buttons
                  items={button}
                  onClick={handleResponse}
                  index={index}
                />
              </div>
            ) : button.controllType === "DDL" ? (
              <div>
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
