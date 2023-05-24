import React from "react";
import "./../App.css";

const Buttons = (props) => {
  const handleSubmit = (e) => {
    const isDisabled = props.i === 10;
    if (isDisabled) {
      alert("CHAT IS ALREADY ENDED");
      props.setDisabled(true);
    } else if (!props.addButton.multiSelect && !props.items.required) {
      props.onClick(props.items.name);
      props.setResponse("");
    } else if (props.addButton.multiSelect === true) {
      props.handleAddButton(props.items.name);
    } else {
      props.onClick(props.items.name);
    }
  };
  const handleChange = () => {
    if (props.i === 10) {
      props.setDisabled(true);
    } else {
      props.setDisabled(false);
      props.setResponse("");
    }
  };

  return (
    <div>
      <button
        className=" bg-primary p-4 mr-3 w-fit border-0 break-words mb-4 rounded-full text-black "
        onClick={
          !props.addButton.multiSelect && props.items.required
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
