import { initStore } from "./store";

export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

const configureStore = () => {
  const actions = {
    ADD: (state, payload) => ({ counter: state.counter + +payload.value }),
    SUBTRACT: (state, payload) => ({ counter: state.counter - +payload.value }),
  };

  initStore(actions, {
    counter: 0,
  });
};
export default configureStore;
