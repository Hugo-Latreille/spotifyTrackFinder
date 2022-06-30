import axios from "axios";

const APImiddleware = (store) => (next) => async (action) => {
  // if (action.type === GET_DATA) {
  //   next(action);
  // } else {
  //   next(action);
  // }
  next(action);
};

export default APImiddleware;
