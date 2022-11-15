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
          <li className="site-name">
            <NavLink to="/">Cozy Up</NavLink>
          </li>
          {navLinks.map((link, idx) => {
            const { url, name } = link

            return (
              <li className="link-item" key={idx}>
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
  padding: 2rem;
  background-color: hsl(var(--clr-black) / 0.7);

  nav {
    ul {
      .site-name {
        font-size: 3rem;
      }

      .link-item {
        display: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    nav {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        gap: 2rem;

        .site-name {
          margin-right: auto;
        }

        .link-item {
          display: block;
        }

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
