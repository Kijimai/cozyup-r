import {
  SHOW_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_MOVIES,
  GET_MOVIES_BEGIN,
  GET_MOVIES_ERROR,
  GET_TRENDING_WEEKLY,
  GET_TRENDING_WEEKLY_BEGIN,
  GET_TRENDING_WEEKLY_ERROR,
  GET_TV_SHOWS,
  GET_TV_SHOWS_BEGIN,
  GET_TV_SHOWS_ERROR,
} from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    case SHOW_SIDEBAR:
      return { ...state, showSidebar: true }
    case CLOSE_SIDEBAR:
      return { ...state, showSidebar: false }
    case GET_TRENDING_WEEKLY_BEGIN:
      return { ...state, trendingWeekly: action.payload }
    case GET_TRENDING_WEEKLY:
      return { ...state }
    default:
      return state
  }
}
