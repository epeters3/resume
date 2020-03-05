import React from "react";

import { H2, H3 } from "./common";

const Experience = ({ title, inst, sdate, edate, bullets }) => {
  sdate = new Date(sdate).getFullYear();
  edate = edate === "Present" ? edate : new Date(edate).getFullYear();
  return (
    <div>
      <H3>{title}</H3>
      <b>{inst}</b> / <i>{sdate === edate ? edate : `${sdate} - ${edate}`}</i>
      <p>{bullets.reduce((acc, bullet) => (acc += bullet + ". "), "")}</p>
    </div>
  );
};

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
