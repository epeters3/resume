import React from "react";
import styled from "styled-components";

import { H1 } from "./common";

const Callout = styled.p`
  position: relative;
  background-color: whitesmoke;
  border-radius: ${p => p.theme.size.sm};
  border: ${p => p.theme.size.xs} solid whitesmoke;
  padding: ${p => p.theme.size.sm} ${p => p.theme.size.md};
  font-style: italic;
  font-weight: normal;
  margin: 0;
  display: inline-block;
  box-shadow: 5px 5px 10px -1px rgba(184, 184, 184, 1);
  &:after {
    content: "";
    position: absolute;
    top: -${p => p.theme.size.md};
    left: ${p => p.theme.size.xl};
    border-left: ${p => p.theme.size.md} solid transparent;
    border-right: ${p => p.theme.size.md} solid transparent;
    border-bottom: ${p => p.theme.size.md} solid whitesmoke;
  }
`;

const Header = () => (
  <header>
    <H1>Evan Peterson</H1>
    <Callout>
      &quot;Seeking opportunities to build products & leadership in Data Science
      & Machine Learning.&quot;
    </Callout>
  </header>
);

export default Header;
