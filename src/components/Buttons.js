import React from "react";

const Buttons = (props) => {
  return (
    <div className="   ">
      <div className="rounded-full bg-blue p-3 break-words text-white ml-3">
        {props.items.name}
        {console.log("check items", props.items.name, props.index)}
      </div>
    </div>
  );
};

export default Buttons;
