import {
  LOAD_MORE,
  LOAD_MORE_SUCCESS,
  SET_ACCESS_TOKEN,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TYPE,
  SET_SEARCH_VALUE,
  SUBMIT_SEARCH,
} from "./actions";
import trackSearch from "src/data/track_search";

export const initialState = {
  searchValue: "",
  submitSearch: "",
  accessToken: "",
  searchResults: trackSearch,
  searchOffset: 0,
  searchType: "",
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
        searchOffset: 0,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.value,
      };
    case SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.value.pathname === "/tracks" ? "track" : "artist",
      };
    case LOAD_MORE:
      return {
        ...state,
        searchOffset: state.searchOffset + 20,
      };
    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          tracks: {
            ...state.searchResults.tracks,
            items: [
              ...state.searchResults.tracks.items,
              ...action.data.tracks.items,
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
