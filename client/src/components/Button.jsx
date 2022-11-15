import styled from "styled-components"

const Button = ({ text, func, className }) => {
  return (
    <StyledButton className={className} onClick={func}>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: none;
  border-radius: 1rem;
  background-color: hsl(var(--clr-yelow));
  padding: 1rem 2rem;
  &:hover {
    outline: hsl(var(--clr-yellow));
    background-color: transparent;
  }
`

export default Button
