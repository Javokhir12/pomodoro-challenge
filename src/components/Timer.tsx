import styled from "styled-components";
import { useEffect, useState } from "react";
import { formatTime } from "../utils";
import { Progress } from "antd";

const StyledOuterCircle = styled.div`
  width: 21rem;
  height: 21rem;
  background-color: #121063;
  color: white;
  margin: 1rem auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export interface StyledInnerCircleProps {
//   readonly widthPercent: number;
// }
//
// const StyledInnerCircle = styled(StyledOuterCircle)<StyledInnerCircleProps>`
//   // height: ${(props) => props.widthPercent}%;
//   height: 88%;
//   width: 88%;
//   flex-direction: column;
//   border: 0.65rem solid tomato;
// `;

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
    background: tomato;
    border-radius: 0.7rem;
    padding: 0.4rem 0.9rem;
  }
`;

function Timer({ startingTime = 2 * 60 }: { startingTime: number }) {
  const [remainingTime, setRemainingTime] = useState(startingTime);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingTime((time) => (time > 0 ? time - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledOuterCircle>
      <Progress
        type="circle"
        percent={(1 - remainingTime / startingTime) * 100}
        format={() => (
          <>
            <StyledTime>{formatTime(remainingTime)}</StyledTime>
            <StyledPauseButton>Pause</StyledPauseButton>
          </>
        )}
        width={290}
        strokeColor="tomato"
        trailColor="#121063"
        strokeWidth={3}
      />
    </StyledOuterCircle>
  );
}

export default Timer;
