import "./App.css";
import { Options, SettingsButton, Timer } from "./components";
import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

interface GlobalStyleProps {
  readonly currentTheme: keyof DefaultTheme;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    font-family: ${(props) => props.theme[props.currentTheme]};
  }
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: #f3f4f6ff;
`;

function App() {
  return (
    <>
      <GlobalStyle currentTheme="tomato" />
      <Container>
        <Heading>pomodoro</Heading>
        <Options />
        <Timer />
        <SettingsButton />
      </Container>
    </>
  );
}

export default App;
