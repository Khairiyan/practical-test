import { configureStore } from "@reduxjs/toolkit";
import barangReducer from "./slices/barangSlice";

const store = configureStore({
  reducer: {
    barang: barangReducer,
  },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("store change : ", store.getState());
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem("barang", serializedState);
});

export default store;
