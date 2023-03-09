import { addToCart } from "./slices/cartSlice";
import { changeSearchFilter } from "./slices/filterSlice";
import { changeModalState } from "./slices/modalSlice";
import { setUser, logOutUser } from "./slices/userSlice";
import * as thunk from "./slices/thunk";


export const rootActions = {
  setUser,
  changeModalState,
  logOutUser,
  changeSearchFilter,
  addToCart,
  ...thunk,
};