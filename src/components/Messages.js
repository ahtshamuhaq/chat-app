import React from "react";
import "../App.css";
import Buttons from "./Buttons";

const Messages = ({ item, handleResponse }) => {
  return !item.isUserResponse ? (
    <div>
      <div className={item.isUserResponse ? "answer" : "question"}>
        {item.answer}
      </div>
      {console.log("item.options", item)}
      <div className="flex w-1/2 justify-start mt-3 mb-3">
        {item.options &&
          item.options.map(
            (button, index) =>
              button.controllType === "BUTTON" && (
                <div className="">
                  <Buttons
                    items={button}
                    onClick={handleResponse}
                    index={index}
                  />
                </div>
              )
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
