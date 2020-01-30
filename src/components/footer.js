import React from "react";
import styled from "styled-components";

import reactIcon from "../icons/react.png";

const Foot = styled.footer`
  background-color: ${p => p.theme.dark};
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 0.75rem;
  font-family: Consolas;
`;

const Footer = () => (
  <Foot>
    <span>Coded in React.js</span>
    <img
      src={reactIcon}
      alt="React.js logo"
      style={{ marginLeft: "0.5rem", height: "1.5rem", width: "1.5rem" }}
    />
  </Foot>
);

export default Footer;
