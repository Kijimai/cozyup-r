import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { useGlobalContext } from "../../utils/context"

const Movies = () => {
  // const {
  //   fetchMovies,
  //   state: { movies },
  // } = useGlobalContext()

  // useEffect(() => {
  //   fetchMovies("all/day")
  // }, [])

  // if (!movies) {
  //   return <h2>No movies or tv shows found!</h2>
  // }

  // return (
  //   <div>
  //     {movies.map((movie) => {
  //       return <p>{movie.title}</p>
  //     })}
  //   </div>
  // )
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
}

Movies.defaultProps = {
  movies: [],
}

export default Movies
