import React, { useState } from "react";

const Textbox = (props) => {
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleResponse(props.question, response);
    setResponse("");
    console.log(props.index, props.i);
  };
  return (
    <div className="buttonIn">
      <input
        className="bg-[#4C4B51] px-2 py-4 rounded-3xl w-full mt-16 input"
        type="text"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <button
        className="  butto "
        onClick={handleSubmit}
        disabled={props.i === 10 ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mr-3 mt-2 mb-4"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </button>
    </div>
  );
};

export default Textbox;
