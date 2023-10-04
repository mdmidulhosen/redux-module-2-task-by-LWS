import { BOOKED, DELETEITEM } from "./ActionTypes";

export const booked = (id, from, to, date, guests, classType) => {
  return {
    type: BOOKED,
    payload: {
    id,
    from,
    to,
    date,
    guests,
    classType,
    },
  };
};

export const deleteItem = (id) => {
  return{
    type: DELETEITEM,
    payload: id
  }
}
