export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.payload }
    default:
      return state
  }
}
