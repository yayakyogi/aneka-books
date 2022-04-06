import axios from "axios";
import { PAGE, PAGE_ACTIVE } from "redux/types";

export const fetchPage = (url, page) => (dispatch) => {
  return axios
    .get(`https://www.googleapis.com/books/v1${url}`)
    .then((response) => {
      dispatch({
        type: PAGE,
        payload: {
          [page]: response.data,
        },
      });
      return response.data;
    });
};

export const changePage = (value) => (dispatch) => {
  return dispatch({
    type: PAGE_ACTIVE,
    pageState: value,
  });
};
