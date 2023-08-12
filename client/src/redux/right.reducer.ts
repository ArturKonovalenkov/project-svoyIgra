import { AnyAction } from "@reduxjs/toolkit";
import { RIGHT_ANSWER } from "./type.redux";

export type RightType = {
  rightAnswer: string;
};

const initState: RightType = {
  rightAnswer: "",
};

const RightReducer = (state = initState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case RIGHT_ANSWER:
      return {
        ...state,
        rightAnswer: payload,
      };
    default:
      return state;
  }
};

export default RightReducer;
