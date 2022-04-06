import { SAVE_CHECKOUT, CLEAR_CHECKOUT } from "redux/types";

export const saveCheckout = (data) => (dispatch) => {
  return dispatch({
    type: SAVE_CHECKOUT,
    checkout: data,
  });
};

export const clearCheckout = (dispatch) => {
  return dispatch({
    type: CLEAR_CHECKOUT,
    checkout: {},
  });
};
