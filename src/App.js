import React from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import ExperienceSection from "./components/experience";
import EducationSection from "./components/education";
import SkillsSection from "./components/skill";
import AcademicsSection from "./components/academic";
import ProjectsSection from "./components/project";
import Header from "./components/header";
import ContactBar from "./components/contact-bar";
import Footer from "./components/footer";
import Split from "./components/split";

import experiences from "./data/experiences.json";
import educations from "./data/education.json";
import skills from "./data/skills.json";
import academics from "./data/academics.json";
import projects from "./data/projects.json";

const theme = {
  dark: "#262832",
  lessDark: "#313440",
  light: "white",
  lessLight: "whitesmoke",
  reactBlue: "#5fdafb",
  size: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  }
};

const GlobalStyle = createGlobalStyle`
  .dark {
    background-color: ${p => p.theme.lessDark};
    color: ${p => p.theme.light};
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "Dosis", sans-serif;
  }

  body {
    margin: 0;
    font-size: 14px;
    color: ${p => p.theme.dark};
    line-height: 20px;
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    background-color: ${p => p.theme.lessLight};
  }
`;

const show = {
  experience: true,
  education: true,
  skills: true,
  academics: true,
  projects: false
};

const Page = styled.div`
  max-width: 950px;
  min-height: 100vh;
`;

const Aside = styled.aside`
  background-color: ${p => p.theme.lessDark};
  color: ${p => p.theme.light};
  padding: ${p => p.theme.size.md};
  border-radius: ${p => p.theme.size.sm};
`;

const Main = styled.main`
  background-color: ${p => p.theme.light};
  padding: ${p => p.theme.size.lg} ${p => p.theme.size.xl}
    ${p => p.theme.size.md} ${p => p.theme.size.xl};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Main>
          <Header />
          <Split>
            <div>
              {show.experience && (
                <ExperienceSection
                  experiences={experiences}
                  blacklistIds={[]}
                />
              )}
              {show.education && (
                <EducationSection
                  educations={educations}
                  blacklistIds={["slcc"]}
                />
              )}
              {show.academics && <AcademicsSection academics={academics} />}
              {show.projects && <ProjectsSection projects={projects} />}
            </div>
            <div>
              <Aside>{show.skills && <SkillsSection skills={skills} />}</Aside>
            </div>
          </Split>
          <hr></hr>
          <ContactBar />
        </Main>
        <Footer />
      </Page>
    </ThemeProvider>
  );
}

export default App;
