const initialState = {
  projects: [],
  loading: false,
  error: false,
  searchPhrase: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PROJECTS_LOADED':
      return {
        ...state,
        projects: action.payload,
        loading: false
      };
    case 'PROJECTS_ERROR':
      return {
        ...state,
        error: true,
        loading: false
      };
    case 'PROJECTS_REQUESTED':
      return {
        ...state,
        loading: true
      };
    case 'SEARCH_SET':
      return {
        ...state,
        loading: false,
        searchPhrase: action.payload
      }
    default:
      return state;
  }
}

export default reducer;