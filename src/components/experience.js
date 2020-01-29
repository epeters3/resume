import React from "react";
import styled from "styled-components";

const Experience = ({ title, inst, city, state, sdate, edate, bullets }) => (
  <div>
    <h3>
      {title}, {inst}
    </h3>
    <p>
      {city}, {state}: {sdate} - {edate}
    </p>
    <ul>
      {bullets.map(bullet => (
        <li>{bullet}</li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = ({ experiences = [], blacklistIds = [] }) => (
  <div>
    <h2>Experience</h2>
    {experiences
      .filter(experience => !blacklistIds.includes(experience.id))
      .map(experience => (
        <Experience {...experience} />
      ))}
  </div>
);

export default ExperienceSection;
