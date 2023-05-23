import React from "react";

const Textbox = (props) => {
  const last = () => {
    props.handleLastResponse(props.response);
    props.setResponse("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.i === 10
      ? last(props.response)
      : props.handleResponse(props.question, props.response);
    props.setResponse("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && props.i === 10) {
      last(props.response);
    } else if (event.key === "Enter") {
      props.handleResponse(props.question, props.response);
      props.setResponse("");
    }
  };
  return (
    <div className="buttonIn">
      <input
        className="bg-quaternary text-white  px-4 py-2 rounded-3xl w-full mt-16 input"
        type="text"
        onKeyDown={handleKeyDown}
        disabled={props.disabled}
        value={props.response}
        onChange={(e) => props.setResponse(e.target.value)}
      />
      <button
        className="  butto "
        onClick={handleSubmit}
        disabled={props.i > 10 || props.response.length === 0 ? true : false}
      >
        <i className="fa fa-send" style={{ fontSize: "24px" }}></i>
      </button>{" "}
    </div>
  );
};
export default Textbox;
