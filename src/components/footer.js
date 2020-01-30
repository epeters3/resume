import React from "react";
import styled from "styled-components";

import Code from "./common/code"

import reactIcon from "../icons/react.png";

const Foot = styled.footer`
  background-color: ${p => p.theme.dark};
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${p => p.theme.size.md} ${p => p.theme.size.xl};
`;

const Img = styled.img`
  margin-left: ${p => p.theme.size.sm};
  height: ${p => p.theme.size.lg};
  width: ${p => p.theme.size.lg};

`;

const Footer = () => (
  <Foot>
    <Code>This resume was coded in React.js</Code>
    <Img
      src={reactIcon}
      alt="React.js logo"
    />
  </Foot>
);

export default Footer;
