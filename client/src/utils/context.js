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
  GET_MOVIES_ERROR,
  GET_TV_SHOWS_ERROR,
} from "./actions"

const tmdbURL = "https://api.themoviedb.org/3/trending/"

const axiosMDB = axios.create({
  baseURL: tmdbURL,
  headers: {
    "Content-Type": "application/json",
  },
})

const AppContext = createContext()

const defaultState = {
  movies: [],
  tvShows: [],
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

  const showSidebar = () => {
    dispatch({ type: SHOW_SIDEBAR })
  }

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR })
  }

  return (
    <AppContext.Provider
      value={{ ...state, fetchMovies, fetchTVShows, showSidebar, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
