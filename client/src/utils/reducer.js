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
  GET_SINGLE_TV_BEGIN,
  GET_SINGLE_TV_ERROR,
  GET_SINGLE_TV_SHOW,
  GET_SINGLE_MOVIE_BEGIN,
  GET_SINGLE_MOVIE_ERROR,
  GET_SINGLE_MOVIE,
  GET_TV_SHOWS_BEGIN,
  GET_TV_SHOWS_ERROR,
} from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return { ...state, showSidebar: true }
    case CLOSE_SIDEBAR:
      return { ...state, showSidebar: false }
    case GET_TRENDING_WEEKLY_BEGIN:
      return { ...state, trendingWeekly: action.payload }
    case GET_TRENDING_WEEKLY:
      return { ...state }
    case GET_TRENDING_WEEKLY_ERROR:
      return { ...state }
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    case GET_MOVIES_BEGIN:
      return { ...state }
    case GET_MOVIES_ERROR:
      return { ...state }
    case GET_SINGLE_MOVIE_BEGIN:
      return { ...state }
    case GET_SINGLE_MOVIE:
      return { ...state }
    case GET_SINGLE_MOVIE_ERROR:
      return { ...state }
    case GET_SINGLE_TV_BEGIN:
      return { ...state }
    case GET_SINGLE_TV_SHOW:
      return { ...state }
    case GET_SINGLE_TV_ERROR:
      return { ...state }
    case GET_TV_SHOWS_BEGIN:
      return { ...state }
    case GET_TV_SHOWS:
      return { ...state }
    case GET_TV_SHOWS_ERROR:
      return { ...state }
    default:
      return state
  }
}
