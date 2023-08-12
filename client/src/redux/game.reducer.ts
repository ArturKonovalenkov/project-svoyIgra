import { AnyAction } from "@reduxjs/toolkit";
import { ADD_GAME, END_GAME } from "./type.redux";

export type GameStateType = {
  solvedQuests: Array<number>;
  points: number;
  time: number;
};

const initState: GameStateType = {
  solvedQuests: [],
  points: 0,
  time: 0,
};

const GameReducer = (state = initState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_GAME:
      return {
        ...state,
        solvedQuests: [...state.solvedQuests, payload.questId],
        points: state.points + payload.points,
        time: state.time + payload.time,
      };
    case END_GAME:
      return { solvedQuests: [], points: 0, time: 0 };
    default:
      return state;
  }
};

export default GameReducer;
