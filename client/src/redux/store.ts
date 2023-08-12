import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user.reducer";
import GameReducer from "./game.reducer";
import RightReducer from "./right.reducer";

const store = configureStore({
  reducer: {
    UserReducer,
    GameReducer,
    RightReducer,
  },
});

export default store;
