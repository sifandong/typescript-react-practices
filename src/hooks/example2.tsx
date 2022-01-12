import React, { Fragment, FunctionComponent, ReactElement } from "react";
import { useReducer } from "react";

enum ActionType {
  Increase = "INCREASE",
  Decrease = "DECREASE",
}
interface IAction {
  type: ActionType;
  payload: number;
}
const increaseAction: IAction = {
  type: ActionType.Increase,
  payload: 1,
};

const decreaseAction: IAction = {
  type: ActionType.Decrease,
  payload: 1,
};

interface IState{
    count: number
}
const initialState: IState = {
    count: 0
}

function countReducer(prevState: IState, action: IAction): IState {
  switch (action.type) {
    case ActionType.Increase:
      return { 
          ...prevState,
          count: prevState.count + action.payload,
      };
    case ActionType.Decrease:
      return { 
          ...prevState,
          count: prevState.count - action.payload,
       };
    default:
      return prevState;
  }
}

const Counter2: FunctionComponent = (): ReactElement => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const handleClickPlus = () => {
    dispatch(increaseAction);
  };
  const handleClickSub = () => {
    dispatch(decreaseAction);
  };
  return (
    <>
      <h2>You clicked {state.count} times</h2>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickSub}>-</button>
    </>
  );
};

export default Counter2;
