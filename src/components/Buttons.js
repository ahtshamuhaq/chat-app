import React from "react";
import "./../App.css";

const Buttons = (props) => {
  const handleSubmit = (e) => {
    props.addButton.multiSelect === true
      ? props.handleAddButton(props.items.name)
      : props.onClick(props.items.name);
  };
  const handleChange = () => {
    props.setDisabled(false);
    props.setResponse("");
  };

  return (
    <div>
      <button
        className=" buttons bg-primary p-4 mr-3  break-words mb-4 rounded-full text-black "
        onClick={
          props.addButton.multiSelect === false && props.items.required === true
            ? handleChange
            : handleSubmit
        }
      >
        {props.items.name}
      </button>
    </div>
  );
};

export default Buttons;
