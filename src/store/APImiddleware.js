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
        url: `https://api.spotify.com/v1/search?q=${state.searchValue}&type=track&limit=20&offset=0`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${state.accessToken}`,
          Authorization: `Bearer BQBQE1qskOKLQvkQ7YrOngiyL-pyxeRnIpFUVW9EpnmB406NCNBm8l2h6k9aejV74bJYkFr667uLuBtihJBp7bCVYM_ClJZ0uc86EwQ4QbH-RxDYWdmkF3WmTSEJEPSQMmU-Co6wJOd-44J3zzd0liUox0-ZQeBzydS_8HpW75Y`,
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
        url: `https://api.spotify.com/v1/search?q=${state.submitSearch}&type=track&limit=20&offset=${state.searchOffset}`,
        // url: state.searchResults.tracks.next,
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${state.accessToken}`,
          Authorization: `Bearer BQBQE1qskOKLQvkQ7YrOngiyL-pyxeRnIpFUVW9EpnmB406NCNBm8l2h6k9aejV74bJYkFr667uLuBtihJBp7bCVYM_ClJZ0uc86EwQ4QbH-RxDYWdmkF3WmTSEJEPSQMmU-Co6wJOd-44J3zzd0liUox0-ZQeBzydS_8HpW75Y`,
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
