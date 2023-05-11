import React from "react";

const Buttons = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleResponse", props.items.name);
    props.onClick(props.items.name);
  };
  return (
    <div className="   ">
      <button
        className="rounded-full bg-blue p-3 break-words text-white ml-3"
        onClick={handleSubmit}
      >
        {props.items.name}
        {console.log("check items", props.items.name, props.index)}
      </button>
    </div>
  );
};

export default Buttons;
