import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import ExperienceSection from "./components/experience";
import EducationSection from "./components/education"
import Header from "./components/header";
import ContactBar from "./components/contact-bar";
import Footer from "./components/footer";

import experiences from "./data/experiences.json";
import educations from "./data/education.json";

const theme = {
  dark: "#262832",
  lessDark: "#313440",
  hFont: "'Dosis', sans-serif"
};

const Page = styled.div`
  max-width: 800px;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: white;
  padding: 2rem 2rem 1rem 2rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Main>
          <Header />
          <ExperienceSection experiences={experiences} blacklistIds={[]} />
          <EducationSection educations={educations} blacklistIds={["slcc"]} />
          <hr></hr>
          <ContactBar />
        </Main>
        <Footer />
      </Page>
    </ThemeProvider >
  );
}

export default App;
