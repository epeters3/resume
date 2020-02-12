import React from "react";
import styled from "styled-components";

import { H2, H4, Ul } from "./common";

const LocDate = styled.p`
  margin: ${p => p.theme.size.sm} 0;
`;

const Experience = ({ title, inst, city, state, sdate, edate, bullets }) => (
  <div>
    <H4>{title}</H4>
    <span>, {inst}</span>

    <LocDate>
      {city}, {state}: {sdate} - {edate}
    </LocDate>
    <Ul>
      {bullets.map(bullet => (
        <li key={bullet}>{bullet}</li>
      ))}
    </Ul>
  </div>
);

const ExperienceSection = ({ experiences, blacklistIds }) => (
  <div>
    <H2>Experience</H2>
    {experiences
      .filter(experience => !blacklistIds.includes(experience.id))
      .map(experience => (
        <Experience key={experience.id} {...experience} />
      ))}
  </div>
);

export default ExperienceSection;
