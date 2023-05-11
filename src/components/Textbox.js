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
    <div className="flex justify-start">
      <input
        className="bg-pink flex justify-start px-2 py-4 rounded-3xl w-2/3 mt-16"
        type="text"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <button
        className=" text-white font-bold mt-16 ml-6  "
        onClick={handleSubmit}
        disabled={props.i === 10 ? true : false}
      >
        Send
      </button>
    </div>
  );
};

export default Textbox;
