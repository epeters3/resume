import React from "react";
import styled from "styled-components";

import ExperienceSection from "./components/experience";
import Header from "./components/header";
import ContactBar from "./components/contact-bar";
import Footer from "./components/footer";

import experiences from "./data/experiences.json";

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
    <Page>
      <Main>
        <Header />
        <ExperienceSection experiences={experiences} blacklistIds={[]} />
        <hr></hr>
        <ContactBar />
      </Main>
      <Footer />
    </Page>
  );
}

export default App;
