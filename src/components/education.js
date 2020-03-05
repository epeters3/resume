import React from "react";

import { H2, H4 } from "./common";

const Education = ({ degree, major, gpa, gdate, inst, bullets }) => {
  gdate = new Date(gdate).getFullYear();
  return (
    <div>
      <H4>
        {degree} {major}
      </H4>
      <span>
        , {gdate} - {inst}, GPA: {gpa.toFixed(2)}
      </span>
      <p>{bullets.reduce((acc, bullet) => (acc += bullet + ". "), "")}</p>
    </div>
  );
};

const EducationSection = ({ educations = [], blacklistIds = [] }) => (
  <div>
    <H2>Education</H2>
    {educations
      .filter(education => !blacklistIds.includes(education.id))
      .map(education => (
        <Education key={education.id} {...education} />
      ))}
  </div>
);

export default EducationSection;
