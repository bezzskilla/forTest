import { REDUX_SINK } from "../utils/constants";

export const initState = {
  modalOpen: false,
  user: {},
  filter: {
    search: " ",
  },
  cart: [],
  score: 2,
};

export const getInitState = () => {
  const dataLS = window.localStorage.getItem(REDUX_SINK);
  return dataLS ? JSON.parse(dataLS) : initState;
};
