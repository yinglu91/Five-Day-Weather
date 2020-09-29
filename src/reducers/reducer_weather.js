import { FETCH_WEATHER } from '../actions';

export default (state = [], action) => {
  console.log(('Action received', action));
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; // [latest city, city, ..., early city]
    default:
      return state;
  }
};
