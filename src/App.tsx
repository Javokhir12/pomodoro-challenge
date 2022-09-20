import "./App.css";
import { Options, SettingsButton, Timer } from "./components";
import styled, { createGlobalStyle } from "styled-components";
import { useAppContext } from "./context/app-context";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.font};
    background-color: ${(props) => props.theme.bg};
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
  font-size: 2.7rem;
`;

function App() {
  const { state } = useAppContext();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading>pomodoro</Heading>
        <Options />
        <Timer
          startingTimeInSecs={state[state.activeTimer]}
          key={state.activeTimer}
        />
        <SettingsButton />
      </Container>
    </>
  );
}

export default App;
