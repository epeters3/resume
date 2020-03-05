import styled from "styled-components";
import React from "react";

import link from "../icons/link.png";

export const Code = styled.code`
  font-size: 0.75rem;
  font-family: Consolas, monaco, monospace;
`;

export const H1 = styled.h1`
  color: ${p => p.theme.dark};
`;

export const H2 = styled.h2`
  color: ${p => p.theme.dark};
  margin: ${p => p.theme.size.lg} 0 ${p => p.theme.size.md} 0;
`;

export const H3 = styled.h3`
  color: ${p => p.theme.dark};
  margin: ${p => p.theme.size.md} 0 ${p => p.theme.size.sm} 0;
`;

export const H4 = styled.h4`
  color: ${p => p.theme.lessDark};
  display: inline;
`;

export const Ul = styled.ul`
  margin-top: ${p => p.theme.size.sm};
`;

export const Icon = styled.img`
  height: ${p => p.theme.size.md};
`;

export const WithLink = ({ children, href, ...props }) => (
  <a
    href={href}
    style={{
      display: "flex",
      alignItems: "center",
      color: "inherit",
      textDecoration: "none"
    }}
  >
    {children}&nbsp;
    <Icon {...props} src={link} />
  </a>
);
