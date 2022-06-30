import axios from "axios";
import { setSearchResults, SUBMIT_SEARCH } from "./actions";

const APImiddleware = (store) => (next) => async (action) => {
  const state = store.getState();

  if (action.type === SUBMIT_SEARCH) {
    try {
      const config = {
        method: "get",
        url: `https://api.spotify.com/v1/search?q=${state.searchValue}&type=track`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.accessToken}`,
        },
      };

      const { data } = await axios(config);

      store.dispatch(setSearchResults(data));

      next(action);
    } catch (error) {
      console.log(error);
    }
  } else {
    next(action);
  }
};

export default APImiddleware;
