import { GET_MOVIES, SHOW_SIDEBAR, CLOSE_SIDEBAR } from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    case SHOW_SIDEBAR:
      return { ...state, showSidebar: true }
    case CLOSE_SIDEBAR:
      return { ...state, showSidebar: false }
    default:
      return state
  }
}
