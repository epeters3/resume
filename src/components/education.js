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

const Ul = styled.ul`
  margin-top: 0.5rem;
`;

const Education = ({ degree, major, gpa, gdate, inst, bullets }) => (
    <div>
        <H3>
            {degree} {major}, {inst}
        </H3>
        <Ul>
            {bullets.map(bullet => (
                <li key={bullet}>{bullet}</li>
            ))}
        </Ul>
    </div>
);

const EducationSection = ({ educations = [], blacklistIds = [] }) => (
    <div>
        <H2>Education</H2>
        {educations
            .filter(education => !blacklistIds.includes(education.id))
            .map(education => (
                <Education {...education} />
            ))}
    </div>
);

export default EducationSection;
