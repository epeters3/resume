import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

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
  size: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  }
};

const show = {
  experience: true,
  education: true,
  skills: true,
  academics: true,
  projects: true
};

const Page = styled.div`
  max-width: 950px;
  min-height: 100vh;
`;

const Main = styled.main`
  background-color: white;
  padding: ${p => p.theme.size.lg} ${p => p.theme.size.xl}
    ${p => p.theme.size.md} ${p => p.theme.size.xl};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            </div>
            <div>
              {show.skills && <SkillsSection skills={skills} />}
              {show.academics && <AcademicsSection academics={academics} />}
              {show.projects && <ProjectsSection projects={projects} />}
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
