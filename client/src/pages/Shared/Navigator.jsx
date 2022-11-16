import React from "react"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"
import { navLinks } from "../../utils/links"
import { useGlobalContext } from "../../utils/context"
const Navigator = () => {
  const { showSidebar } = useGlobalContext()

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
                  end
                  style={({ isActive }) => {
                    return {
                      color: isActive
                        ? "hsl(var(--clr-yellow))"
                        : "hsl(var(--clr-white))",
                    }
                  }}
                  to={`${url}`}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
          <li className="menu">
            <button onClick={showSidebar}>
              <GiHamburgerMenu />
            </button>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  )
}

const NavWrapper = styled.header`
  padding: 2rem 4rem;
  background-color: hsl(var(--clr-black) / 0.7);

  nav {
    max-width: 111rem;
    margin: 0 auto;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .site-name {
        font-size: 3rem;

        a {
          color: hsl(var(--clr-white));
          text-decoration: none;
          font-family: "Lobster", sans-serif;
        }
      }

      .link-item {
        display: none;
      }

      .menu {
        display: block;

        button {
          background-color: transparent;
          border: none;

          svg {
            height: 4rem;
            width: 4rem;
            fill: hsl(var(--clr-white));
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    nav {
      ul {
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

        .menu {
          display: none;
        }
      }
    }
  }
`

export default Navigator
