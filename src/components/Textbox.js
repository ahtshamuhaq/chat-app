import React, { useState } from "react";
import Popup from "./Popup";

const Textbox = (props) => {
  const lastResponse = () => {
    props.handleLastResponse(props.response);
    props.setResponse("");
    setShowDiv(true);
  };
  const [showDiv, setShowDiv] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    props.i === 10
      ? lastResponse(props.response)
      : props.handleResponse(props.question, props.response);
    props.setResponse("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && props.i === 10) {
      lastResponse(props.response);
    } else if (event.key === "Enter") {
      props.handleResponse(props.question, props.response);
      props.setResponse("");
    }
  };
  return (
    <div>
      {showDiv ? (
        <Popup />
      ) : (
        <div className="w-full relative">
          <input
            className="bg-quaternary text-white  px-4 py-2 rounded-3xl  w-full h-[50px] m-0 p-4"
            type="text"
            onKeyDown={handleKeyDown}
            disabled={props.disabled}
            value={props.response}
            onChange={(e) => props.setResponse(e.target.value)}
          />
          <button
            className="  absolute cursor-pointer text-white bg-quaternary mr-4 mt-2.5 border-none right-0 top-0 "
            onClick={handleSubmit}
            disabled={
              props.i === 11 || props.response.length === 0 ? true : false
            }
          >
            <i className="fa fa-send text-xl"></i>
          </button>{" "}
        </div>
      )}
    </div>
  );
};
export default Textbox;
