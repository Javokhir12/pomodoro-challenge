import styled from "styled-components";
import { useEffect, useState } from "react";
import { formatTime } from "../utils";
import { Progress } from "antd";
import { useAppThemeContext } from "../context/app-theme-provider";
import { useAppContext } from "../context/app-context";
import { setTimerStatus } from "../context/actions";

const StyledOuterCircle = styled.div`
  width: 21rem;
  height: 21rem;
  background-color: ${(props) => props.theme.bgDark};
  color: white;
  margin: 1rem auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTime = styled.h1`
  font-size: 4.75rem;
  margin-top: 2rem;
  margin-bottom: 2.2rem;
  color: white;
`;

const StyledPauseButton = styled.button`
  letter-spacing: 0.7rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  transition: all 100ms ease-in-out;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.primaryColor};
    border-radius: 0.7rem;
    padding: 0.4rem 0.9rem;
  }
`;

function Timer({
  startingTimeInSecs = 2 * 60,
}: {
  startingTimeInSecs: number;
}) {
  const [remainingTime, setRemainingTime] = useState(startingTimeInSecs);
  const [paused, setPaused] = useState(true);
  const {
    theme: { primaryColor },
  } = useAppThemeContext();
  const { dispatch } = useAppContext();

  useEffect(() => {
    if (!paused) {
      const intervalId = window.setInterval(() => {
        setRemainingTime((time) => (time > 0 ? time - 1 : 0));
      }, 1000);

      dispatch(setTimerStatus(true));

      return () => window.clearInterval(intervalId);
    }

    dispatch(setTimerStatus(false));
  }, [paused]);

  function togglePause(): void {
    setPaused((state) => !state);
  }

  return (
    <StyledOuterCircle>
      <Progress
        type="circle"
        percent={(1 - remainingTime / startingTimeInSecs) * 100}
        format={() => (
          <>
            <StyledTime>{formatTime(remainingTime)}</StyledTime>
            <StyledPauseButton onClick={togglePause}>
              {paused ? "Start" : "Stop"}
            </StyledPauseButton>
          </>
        )}
        width={290}
        strokeColor={primaryColor}
        trailColor="#121063"
        strokeWidth={3}
      />
    </StyledOuterCircle>
  );
}

export default Timer;
