import { SET_SEARCH_VALUE } from "./actions";

export const initialState = {
  searchValue: "",
  searchResults: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      console.log("coucou");
      return {
        ...state,
        searchValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
