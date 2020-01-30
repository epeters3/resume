import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  color: ${p => p.theme.dark};
  font-family: ${p => p.theme.hFont};
`;

const H3 = styled.h4`
  margin-bottom: 0.5rem;
  color: ${p => p.theme.lessDark};
`;

const LocDate = styled.p`
  margin: 0.5rem 0;
`;

const Ul = styled.ul`
  margin-top: 0.5rem;
`;

const Experience = ({ title, inst, city, state, sdate, edate, bullets }) => (
  <div>
    <H3>
      {title}, {inst}
    </H3>
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

const ExperienceSection = ({ experiences = [], blacklistIds = [] }) => (
  <div>
    <H2>Experience</H2>
    {experiences
      .filter(experience => !blacklistIds.includes(experience.id))
      .map(experience => (
        <Experience {...experience} />
      ))}
  </div>
);

export default ExperienceSection;
