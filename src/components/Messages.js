import React from "react";
import "../App.css";
import Buttons from "./Buttons";
const Messages = (props) => {
  console.log();

  const isUserResponse = props.item.isUserResponse;
  return isUserResponse === false ? (
    <div>
      <div className={props.item.isUserResponse ? "answer" : "question"}>
        {props.item.answer}
      </div>
      {console.log(props.item)}
      <div className="flex w-1/2 justify-start mt-3 mb-3">
        {props.item.options.map((items, index) => {
          const controllType = props.item.options[index].controllType;
          return controllType === "BUTTON" ? (
            <div className=" ">
              {console.log("these are items", items)}
              <div className="">
                <Buttons items={items} index={index} />;
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  ) : (
    <>
      <div className={props.item.isUserResponse === true ? "answer" : ""}>
        {props.item.answer}
      </div>
      ;
    </>
  );
};

export default Messages;
