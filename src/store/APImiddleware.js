import axios from "axios";
import {
  loadMoreSuccess,
  LOAD_MORE_API,
  setSearchResults,
  SUBMIT_SEARCH,
} from "./actions";

const APImiddleware = (store) => (next) => async (action) => {
  const state = store.getState();

  if (action.type === SUBMIT_SEARCH) {
    try {
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/search?q=${state.searchValue}&type=${state.searchType}&limit=20&offset=0`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${state.accessToken}`,
          Authorization: `Bearer BQBHzGiX0Hcmzr96HNnubv2SNtwGQShEkObfBRym51bQ1UvtzQAVAHImm0yd-V3iFEBbXh6XIp0LToB8ZlL3g8PaUhYgv8qLNBxNRO-_4spgoEidCocytVNyNkAmRHsFEeOor9o9DjUxNywfBIF8RdWWDnuePAWETP0SS2le94g`,
        },
      };

      const { data } = await axios(config);
      console.log(data);

      store.dispatch(setSearchResults(data));

      next(action);
    } catch (error) {
      console.log(error);
    }
  } else if (action.type === LOAD_MORE_API) {
    try {
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/search?q=${state.submitSearch}&type=${state.searchType}&limit=20&offset=${state.searchOffset}`,
        // url: state.searchResults.tracks.next,
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${state.accessToken}`,
          Authorization: `Bearer BQBHzGiX0Hcmzr96HNnubv2SNtwGQShEkObfBRym51bQ1UvtzQAVAHImm0yd-V3iFEBbXh6XIp0LToB8ZlL3g8PaUhYgv8qLNBxNRO-_4spgoEidCocytVNyNkAmRHsFEeOor9o9DjUxNywfBIF8RdWWDnuePAWETP0SS2le94g`,
        },
      };
      const { data } = await axios(config);
      store.dispatch(loadMoreSuccess(data));
    } catch (error) {
      console.error(error);
    }
  } else {
    next(action);
  }
};

export default APImiddleware;
