import { ADD_TO_PREF, DELETE_TO_PREF } from "../actions";

const initialState = {
  content: [],
};

const favoriteCompanyReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PREF:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case DELETE_TO_PREF:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteCompanyReduce;
