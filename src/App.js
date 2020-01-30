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
  hFont: "'Dosis', sans-serif",
  size: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  }
};

const Page = styled.div`
  max-width: 800px;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: white;
  padding: ${p => p.theme.size.lg} ${p => p.theme.size.xl} ${p => p.theme.size.md} ${p => p.theme.size.xl};
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
