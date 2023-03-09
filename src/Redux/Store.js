import { configureStore } from "@reduxjs/toolkit";
import { getInitState } from "./initialState";
import { REDUX_SINK } from "../utils/constants";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";
import { modalOpenReducer } from "./slices/modalSlice";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
    modalOpen: modalOpenReducer,
    cart: cartReducer,
  },
  preloadedState: getInitState(),
});

store.subscribe(() => {
  const currentState = store.getState();
  window.localStorage.setItem(REDUX_SINK, JSON.stringify(currentState));
});
