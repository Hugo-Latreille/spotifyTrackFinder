export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  value,
});
export const setAccessToken = (value) => ({
  type: SET_ACCESS_TOKEN,
  value,
});

export const submitSearch = () => ({
  type: SUBMIT_SEARCH,
});

export const setSearchResults = (value) => ({
  type: SET_SEARCH_RESULTS,
  value,
});
