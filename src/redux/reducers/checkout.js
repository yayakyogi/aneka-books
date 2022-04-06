const { SAVE_CHECKOUT, CLEAR_CHECKOUT } = require("redux/types");

const initialState = {};

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHECKOUT:
      return {
        ...state,
        data: action.checkout,
      };

    case CLEAR_CHECKOUT:
      return {
        ...state,
        data: action.checkout,
      };

    default:
      return state;
  }
};

export default checkout;
