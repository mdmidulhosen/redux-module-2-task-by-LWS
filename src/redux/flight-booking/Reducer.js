import { BOOKED, DELETEITEM } from "./ActionTypes";
import { initialState } from "./initialState";

const nextBooking = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKED:
      return [
        ...state,
        {
          id: nextBooking(state),
          from: action.payload.from,
          to: action.payload.to,
          date: action.payload.date,
          guests: action.payload.guests,
          classType: action.payload.classType,
        },
      ];

    case DELETEITEM:
      const id = action.payload;
      return state.filter((data) => data.id !== id);

    default:
      return state;
  }
};
export default reducer;
