import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initialState";

const modalSlice = createSlice({
  name: "modalOpen",
  initialState: initState.modalOpen,
  reducers: {
    changeModalState(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const modalOpenReducer = modalSlice.reducer;
export const { changeModalState } = modalSlice.actions;
export const getModalSelector = (state) => state.modalOpen;
