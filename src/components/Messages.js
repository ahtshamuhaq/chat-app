import React from "react";
import "../App.css";
const Messages = (props) => {
  return (
    <div>
      <>
        <div>
          <div key={props.responses.index}>
            <p className={props.item.question ? "question" : "qh"}>
              {props.item.question}
            </p>
            {console.log(
              "this is index of question",
              props.question,
              props.index
            )}
            <p className={props.item.response ? "answer" : "ah"}>
              {props.item.response}
            </p>{" "}
          </div>
        </div>
      </>
    </div>
  );
};

export default Messages;
