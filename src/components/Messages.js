import React from "react";

const Messages = (props) => {
  return (
    <div>
      {props.responses.map((response) => (
        <div key={response.question}>
          <p className={props.questionClass}>{response.question}</p>
          {console.log("this is question", response.question)}
          <p className={props.answerClass}>{response.response}</p>
          {console.log("this is answer", response.response)}
        </div>
      ))}
      {/*  */}
    </div>
  );
};

export default Messages;
