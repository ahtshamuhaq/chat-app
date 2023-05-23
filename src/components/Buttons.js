import React from "react";
import "./../App.css";

const Buttons = (props) => {
  const handleSubmit = (e) => {
    if (!props.addButton.multiSelect && !props.items.required) {
      props.onClick(props.items.name);
      props.setResponse("");
    } else if (props.addButton.multiSelect === true) {
      props.handleAddButton(props.items.name);
    } else if (props.i > 9) {
      props.setDisabled(true);
    } else {
      props.onClick(props.items.name);
    }
  };
  const handleChange = () => {
    if (props.i > 9) {
      props.setDisabled(true);
    } else {
      props.setDisabled(false);
      props.setResponse("");
    }
  };

  return (
    <div>
      <button
        className=" buttons bg-primary p-4 mr-3 border-0 break-words mb-4 rounded-full text-black "
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
