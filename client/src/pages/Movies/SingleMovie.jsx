import React from "react"
import { useParams } from "react-router-dom"
const SingleMovie = () => {
  const { id } = useParams()

  return (
    <div>
      <h2>SingleMovie: {id}</h2>
    </div>
  )
}

export default SingleMovie
