import React from "react";
import styled from "styled-components";

import { H2 } from "./common";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > :not(:last-child):after {
    content: " |";
  }
`;

const Skill = styled.span`
  margin: 0 ${p => p.theme.size.xs} 0 0;
`;

const SkillGroup = ({ groupName, skillNames }) => (
  <>
    <H2>{groupName}</H2>
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
