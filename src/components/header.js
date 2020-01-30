import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${p => p.theme.dark};
  font-family: ${p => p.theme.hFont};
`;

const Callout = styled.p`
  position: relative;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  border: 0.25rem solid whitesmoke;
  padding: 1rem;
  font-style: italic;
  font-size: 1.1rem;
  margin: 0.5rem 0;
  display: inline-block;
  &:after {
    content: "";
    position: absolute;
    top: -1rem;
    left: 2rem;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1rem solid whitesmoke;
  }
`;

const Header = () => (
  <header>
    <H1>Evan Peterson</H1>
    <Callout>
      Seeking Opportunities to Build Products & Leadership in Data Science &
      Machine Learning.
    </Callout>
  </header>
);

export default Header;
