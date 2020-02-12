import styled from "styled-components";

export const Code = styled.code`
  font-size: 0.75rem;
  font-family: Consolas, monaco, monospace;
`;

export const H2 = styled.h2`
  color: ${p => p.theme.dark};
  font-family: ${p => p.theme.hFont};
  margin: ${p => p.theme.size.lg} 0 ${p => p.theme.size.md} 0;
`;

export const H3 = styled.h3`
  color: ${p => p.theme.dark};
  font-family: ${p => p.theme.hFont};
  margin: ${p => p.theme.size.md} 0 ${p => p.theme.size.sm} 0;
`;

export const H4 = styled.h4`
  color: ${p => p.theme.lessDark};
  display: inline;
`;

export const Ul = styled.ul`
  margin-top: ${p => p.theme.size.sm};
`;
