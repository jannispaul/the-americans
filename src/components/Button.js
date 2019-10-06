import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledButton = styled(Link)`
  display: inline-block;
  background: #ff8370;
  border: none;
  color: white;
  font-family: "SourceSansPro", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  /* text-transform: uppercase; */
  text-decoration: none;

  user-select: none;
  cursor: pointer;

  padding: 1rem 1.5rem;
  /* margin-bottom: var(--space-s); */

  /* width: 100%; */
  transform: translateY(0);
  transition: all var(--time-fast);

  @media (min-width: 500px) {
    width: auto;
  }

  :hover {
    color: white;
    background: #ff8370;
    transform: translateY(-1px);
    transition: all var(--time-fast);
  }
  :active {
    background: #ff8370;
    transform: translateY(1px);
  }
`

const Button = props => (
  <StyledButton
    fullwidth={props.fullwidth}
    primary={props.primary}
    to={props.to}
    type={props.type}
  >
    {props.children}
  </StyledButton>
)

export default Button
