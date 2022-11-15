import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
const navLinks = [
  { url: "home", name: "home" },
  { url: "movies", name: "movies" },
  { url: "tv", name: "tv shows" },
  { url: "random", name: "surprise me" },
]

const Navigator = () => {
  return (
    <NavWrapper>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Cozy Up</NavLink>
          </li>
          {navLinks.map((link, idx) => {
            const { url, name } = link

            return (
              <li key={idx}>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "yellow" : "green",
                    }
                  }}
                  to={`${url}`}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </NavWrapper>
  )
}

const NavWrapper = styled.header`
  nav {
    ul {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    nav {
      ul {
        display: flex;
        font-size: 1.8rem;
        gap: 2rem;

        a {
          color: hsl(var(--clr-white));
          text-decoration: none;
          text-transform: capitalize;
        }
      }
    }
  }
`

export default Navigator
