import React from "react";

const Buttons = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClick(props.items.name);
  };
  return (
    <div>
      <button
        className=" buttons bg-blue p-4 mr-3 break-words mb-4  text-white "
        onClick={handleSubmit}
      >
        {props.items.name}
      </button>
    </div>
  );
};

export default Buttons;
