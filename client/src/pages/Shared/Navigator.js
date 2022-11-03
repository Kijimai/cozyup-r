import React from "react"
import { NavLink } from "react-router-dom"

const navLinks = ["home", "movies", "tv shows", "surprise me"]

const Navigator = () => {
  return (
    <header>
      <nav>
        {navLinks.map((link, idx) => {
          return (
            <NavLink
              key={idx}
              style={({ isActive }) => {
                return {
                  color: isActive ? "yellow" : "green",
                }
              }}
              to={`/${link}`}
            >
              {link}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
}

export default Navigator
