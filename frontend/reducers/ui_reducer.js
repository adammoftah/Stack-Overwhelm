import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM } from "../actions/search_actions";

const uiReducer = (state = { searchTerm: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { searchTerm: action.searchTerm };
    case CLEAR_SEARCH_TERM:
      return { searchTerm: null };
    default:
      return state;
  }
}


export default uiReducer;