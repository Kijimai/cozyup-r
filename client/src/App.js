import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/app.css"
import React from "react"
import Home from "./pages/Home/Home"
import Movies from "./pages/Movies/Movies"
import SharedAppLayout from "./pages/Shared/SharedAppLayout"
import { useGlobalContext } from "./utils/context"
function App() {
  const {
    state: { movies },
  } = useGlobalContext()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedAppLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
