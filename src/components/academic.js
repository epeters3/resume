import React from "react";

import { H2, Ul } from "./common";

const AcademicItem = ({ title, recognition }) => (
  <>
    <i>&quot;{title}&quot;</i>
    <Ul>
      {recognition.map(item => (
        <li key={item}>{item}</li>
      ))}
    </Ul>
  </>
);

const AcademicsSection = ({ academics }) => (
  <div>
    <H2>Academics</H2>
    {academics.map(({ title, recognition }) => (
      <AcademicItem key={title} title={title} recognition={recognition} />
    ))}
  </div>
);

export default AcademicsSection;
