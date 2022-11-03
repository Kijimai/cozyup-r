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
}

const ACTIONS = {
  GET_MOVIES: "GET_MOVIES",
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
      dispatch({ type: ACTIONS.GET_MOVIES, payload: data })
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <AppContext.Provider value={{ state, fetchMovies }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
