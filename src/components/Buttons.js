import React from "react";

const Buttons = (props) => {
  return (
    <div className={props.buttonmain}>
      <div className={props.buttons}>1</div>
      <div className={props.buttons}> 2</div>
      <div className={props.buttons}> 3</div>
    </div>
  );
};

export default Buttons;
