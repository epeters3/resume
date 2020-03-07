import React from "react";

import { H2, H3, P } from "./common";

const Education = ({ degree, major, gpa, gdate, inst, bullets }) => {
  gdate = new Date(gdate).getFullYear();
  return (
    <>
      <H3 style={{ display: "inline" }}>
        {degree} {major}
      </H3>
      <span>
        , {gdate} - {inst}, GPA: {gpa.toFixed(2)}
      </span>
      <P>{bullets.reduce((acc, bullet) => (acc += bullet + ". "), "")}</P>
    </>
  );
};

const EducationSection = ({ educations = [], blacklistIds = [] }) => (
  <>
    <H2>Education</H2>
    {educations
      .filter(education => !blacklistIds.includes(education.id))
      .map(education => (
        <Education key={education.id} {...education} />
      ))}
  </>
);

export default EducationSection;
