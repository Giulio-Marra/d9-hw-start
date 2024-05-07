import { GET_WORK } from "../actions";

const initialState = {
  jobs: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORK:
      return {
        ...state,
        jobs: action.payload.jobs,
      };
    default:
      return state;
  }
};

export default jobsReducer;
