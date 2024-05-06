const initialState = {
  companySelected: {
    content: [],
  },
  searchWork: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PREF":
      return {
        ...state,
        companySelected: {
          ...state.companySelected,
          content: [...state.companySelected.content, action.payload],
        },
      };
    case "SEARCH":
      return {
        ...state,
        searchWork: {
          ...state.searchWork,
          content: [action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
