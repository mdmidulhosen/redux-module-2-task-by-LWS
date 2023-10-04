import { legacy_createStore } from "redux";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = legacy_createStore(RootReducer, composeWithDevTools())

export default store