import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: ${p => p.theme.size.xs};
  background-color: ${p => p.theme.light};
  width: 100%;
`;

const Progress = styled.div`
  height: ${p => p.theme.size.xs};
  background-color: ${p => p.theme.reactBlue};
  width: ${p => (p.n / 10) * 100}%;
`;

const ProgressBar = ({ n }) => (
  <Bar>
    <Progress n={n} />
  </Bar>
);

export default ProgressBar;
