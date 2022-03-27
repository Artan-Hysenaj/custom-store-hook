import React from "react";
import { useStore } from "../store/store";
import { ADD, SUBTRACT } from "../store/counter-store";
import Button from "./Button";
import classes from "./Counter.module.css";
const Counter = (props) => {
  const state = useStore()[0];

  console.log("Counter");

  return (
    <section className={classes.counter}>
      <h1>Counter: {state.counter}</h1>
      <div>
        <Button title="ADD 1" amount="1" actionType={ADD} />
        <Button title="SUBTRACT 1" amount="1" actionType={SUBTRACT} />
      </div>
      <div>
        <Button title="ADD 5" amount="5" actionType={ADD} />
        <Button title="SUBTRACT 5" amount="5" actionType={SUBTRACT} />
      </div>
    </section>
  );
};

export default Counter;
