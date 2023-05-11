import React from "react";

const Buttons = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClick(props.items.name);
  };
  return (
    <div className="   ">
      <button
        className=" bg-blue p-4 break-words mb-4 text-white ml-3"
        onClick={handleSubmit}
      >
        {props.items.name}
      </button>
    </div>
  );
};

export default Buttons;
