import React from "react";
import styled from "styled-components";

import { H2 } from "./common";
import ProgressBar from "./progress";

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: ${p => p.theme.size.xs};
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin: ${p => p.theme.size.xs} 0;
`;

const SkillH2 = styled(H2)`
  margin-top: ${p => (p.isFirst ? p.theme.size.sm : null)};
`;

const Skill = ({ name, rating }) => (
  <SkillContainer>
    <P>{name}</P>
    <ProgressBarContainer>
      <ProgressBar n={rating} />
    </ProgressBarContainer>
  </SkillContainer>
);

const SkillGroup = ({ isFirst, groupName, skills }) => (
  <>
    <SkillH2 isFirst={isFirst}>{groupName}</SkillH2>
    {isFirst ? (
      <i style={{ fontSize: "0.8rem" }}>(All scales are relative)</i>
    ) : null}
    {skills.map(({ name, rating }) => (
      <Skill key={name} name={name} rating={rating} />
    ))}
  </>
);

const SkillsSection = ({ skills }) => (
  <>
    {Object.keys(skills).map((gName, i) => (
      <SkillGroup
        isFirst={i === 0}
        key={gName}
        groupName={gName}
        skills={skills[gName]}
      />
    ))}
  </>
);

export default SkillsSection;
