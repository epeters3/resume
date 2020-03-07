import React from "react";

import { H2, H3, WithLink, P } from "./common";

const Project = ({ title, descr, url }) => (
  <>
    <H3>{url ? <WithLink href={url}>{title}</WithLink> : title}</H3>
    <P>{descr}</P>
  </>
);

const ProjectsSection = ({ projects }) => (
  <>
    <H2>Projects</H2>
    {projects.map(({ title, descr, url }) => (
      <Project key={title} title={title} descr={descr} url={url} />
    ))}
  </>
);

export default ProjectsSection;
