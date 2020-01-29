import React from "react";
import styled from "styled-components";

const Callout = styled.p`
  position: relative;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-style: italic;
  margin: 0.5rem 0;
  display: inline-block;
  &:after {
    content: "";
    position: absolute;
    top: -0.75rem;
    left: 2rem;
    border-left: 0.75rem solid transparent;
    border-right: 0.75rem solid transparent;
    border-bottom: 0.75rem solid whitesmoke;
  }
`;

const Header = () => (
  <header>
    <h1>Evan Peterson</h1>
    <Callout>
      "Seeking Opportunities to Build Products & Leadership in Data Science &
      Machine Learning"
    </Callout>
  </header>
);

export default Header;
