import { PAGE, PAGE_ACTIVE } from "redux/types";

const initialState = {
  pageState: 0,
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case PAGE:
      return {
        ...state,
        ...action.payload,
      };
    case PAGE_ACTIVE:
      return {
        ...state,
        pageState: action.pageState,
      };
    default:
      return state;
  }
};

export default page;
