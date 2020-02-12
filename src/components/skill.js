import React from "react";
import styled from "styled-components";

import { H3 } from "./common";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > :not(:last-child):after {
    content: " |";
  }
`;

const Skill = styled.span`
  margin: ${p => p.theme.size.xs};
`;

const SkillGroup = ({ groupName, skillNames }) => (
  <>
    <H3>{groupName}</H3>
    <Container>
      {skillNames.map(name => (
        <Skill key={name}>{name}</Skill>
      ))}
    </Container>
  </>
);

const SkillsSection = ({ skills }) => (
  <div>
    {Object.keys(skills).map(gName => (
      <SkillGroup key={gName} groupName={gName} skillNames={skills[gName]} />
    ))}
  </div>
);

export default SkillsSection;
