export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const LOAD_MORE = "LOAD_MORE";
export const LOAD_MORE_API = "LOAD_MORE_API";
export const LOAD_MORE_SUCCESS = "LOAD_MORE_SUCCESS";
export const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";

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
export const loadMore = () => ({
  type: LOAD_MORE,
});
export const loadMoreAPI = () => ({
  type: LOAD_MORE_API,
});
export const loadMoreSuccess = (data) => ({
  type: LOAD_MORE_SUCCESS,
  data,
});
export const setSearchType = (value) => ({
  type: SET_SEARCH_TYPE,
  value,
});
