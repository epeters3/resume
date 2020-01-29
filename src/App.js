import React from "react";
import styled from "styled-components";

import ExperienceSection from "./components/experience";
import Header from "./components/header";
import ContactBar from "./components/contact-bar";

import experiences from "./data/experiences.json";

const Main = styled.main`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 800px;
`;

function App() {
  return (
    <Main>
      <Header />
      <ExperienceSection experiences={experiences} blacklistIds={[]} />
      <hr></hr>
      <ContactBar />
    </Main>
  );
}

export default App;
