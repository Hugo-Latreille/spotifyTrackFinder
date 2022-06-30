import {
  SET_ACCESS_TOKEN,
  SET_SEARCH_RESULTS,
  SET_SEARCH_VALUE,
  SUBMIT_SEARCH,
} from "./actions";
import trackSearch from "src/data/track_search";

export const initialState = {
  searchValue: "",
  submitSearch: "",
  accessToken: "",
  searchResults: trackSearch,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.value,
      };
    case SUBMIT_SEARCH:
      return {
        ...state,
        searchValue: "",
        submitSearch: state.searchValue,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
