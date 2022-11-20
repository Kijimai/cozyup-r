import React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const MovieLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default MovieLayout
