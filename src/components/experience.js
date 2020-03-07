import React from "react";

import { H2, H3, P } from "./common";

const Experience = ({ title, inst, sdate, edate, bullets }) => {
  sdate = new Date(sdate).getFullYear();
  edate = edate === "Present" ? edate : new Date(edate).getFullYear();
  return (
    <>
      <H3 style={{ display: "inline" }}>{title}</H3>, {inst}/{" "}
      <i>{sdate === edate ? edate : `${sdate} - ${edate}`}</i>
      <P>{bullets.reduce((acc, bullet) => (acc += bullet + ". "), "")}</P>
    </>
  );
};

const ExperienceSection = ({ experiences, blacklistIds }) => (
  <>
    <H2>Experience</H2>
    {experiences
      .filter(experience => !blacklistIds.includes(experience.id))
      .map(experience => (
        <Experience key={experience.id} {...experience} />
      ))}
  </>
);

export default ExperienceSection;
