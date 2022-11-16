import styled from "styled-components"
import { navLinks } from "../../utils/links"

const Sidebar = ({ className }) => {
  return <SidebarWrapper className={className}>Sidebar</SidebarWrapper>
}

const SidebarWrapper = styled.aside`
  display: none;
  position: absolute;
  
  &.active {
    display: block;
  }
`

export default Sidebar
