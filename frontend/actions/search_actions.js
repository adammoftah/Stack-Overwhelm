export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const CLEAR_SEARCH_TERM = "CLEAR_SEARCH_TERM";

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM,
});
