import React, {
  useState,
  useReducer,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react"
import axios from "axios"
import { reducer } from "./reducer"
import {
  SHOW_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_MOVIES,
  GET_TV_SHOWS,
  GET_MOVIES_BEGIN,
  GET_MOVIES_ERROR,
  GET_TV_SHOWS_BEGIN,
  GET_TV_SHOWS_ERROR,
  GET_TRENDING_WEEKLY,
  GET_TRENDING_WEEKLY_ERROR,
  GET_TRENDING_WEEKLY_BEGIN,
} from "./actions"

const tmdbURL = "https://api.themoviedb.org/3/"
const apiKeyString = `?api_key=${process.env.REACT_APP_TMDB_KEY}`
const axiosMDB = axios.create({
  baseURL: tmdbURL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
})

const AppContext = createContext()

const defaultState = {
  movies: [],
  tvShows: [],
  trendingWeekly: [],
  isLoading: false,
  showSidebar: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const fetchMovies = async (url) => {
    try {
      const { data } = await axiosMDB.get(url, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      dispatch({ type: GET_MOVIES, payload: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  const fetchTVShows = async () => {
    try {
    } catch (err) {
      console.log(err.response)
    }
  }

  const fetchWeeklyTrending = async () => {
    dispatch({ type: GET_TRENDING_WEEKLY_BEGIN })
    try {
      const { data } = await axiosMDB.get(
        `${tmdbURL}/trending/all/week${apiKeyString}`
      )
      console.log(data)

      dispatch({ type: GET_TRENDING_WEEKLY, payload: data.results })
    } catch (err) {
      console.log(err.response)
      dispatch({ type: GET_TRENDING_WEEKLY_ERROR })
    }
  }

  const showSidebar = () => {
    dispatch({ type: SHOW_SIDEBAR })
  }

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchMovies,
        fetchTVShows,
        showSidebar,
        closeSidebar,
        fetchWeeklyTrending,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
