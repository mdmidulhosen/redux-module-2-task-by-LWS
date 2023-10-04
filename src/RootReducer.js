import { combineReducers } from "redux"
import reducer from "./redux/flight-booking/Reducer"
const RootReducer = combineReducers({
    reducer: reducer
})
export default RootReducer