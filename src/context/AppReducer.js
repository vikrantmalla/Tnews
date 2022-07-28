export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_NEWS":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.news,
        nbPages: action.payload.pages,
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    case "PREV_PAGE":
      let pageNumDec = state.page - 1;
      if (pageNumDec <= 0) {
        pageNumDec = 0;
      }
      return {
        ...state,
        page: pageNumDec,
      };
    case "REMOVE_NEWS":
      return {
        ...state,
        hits: state.hits.filter((cur) => {
          return cur.objectID !== action.payload;
        }),
      };
    default:
      return state;
  }
};
