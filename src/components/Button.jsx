import React from "react";
import { useStore } from "../store/store";
import classes from "./Button.module.css";
const Button = ({ title, amount, actionType }) => {

  const [_, dispatch] = useStore({ shouldListen: false });

  console.log("button");

  const onButtonClickHandler = () => {
    dispatch(actionType, { value: amount });
  };
  return (
    <button className={classes.button} onClick={onButtonClickHandler}>
      {title}
    </button>
  );
};

export default React.memo(Button);
