import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/app.css"
import React from "react"
import SharedAppLayout from "./pages/Shared/SharedAppLayout"
import { MovieLayout, Error, Home, TvPage, Random } from "./pages/Index"
import { SingleMovie } from "./pages/Movies/moviesIndex"
import { useGlobalContext } from "./utils/context"

function App() {
  const { movies } = useGlobalContext()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedAppLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieLayout />}>
            <Route path=":id" element={<SingleMovie />} />
          </Route>
          <Route path="random" element={<Random />} />
          <Route path="tv" element={<TvPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
