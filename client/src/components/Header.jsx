import styled from "styled-components"
import movieStripBG from "../assets/film-strip-bg.jpg"
const Header = () => {
  return <HeaderWrapper>Content</HeaderWrapper>
}

const HeaderWrapper = styled.header`
  background-image: linear-gradient(
      hsl(var(--clr-black) / 0.7),
      hsl(var(--clr-black) / 0.7)
    ),
    url(${movieStripBG});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 40rem;
`

export default Header
