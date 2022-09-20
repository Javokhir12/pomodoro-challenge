import styled from "styled-components";
import { useAppContext } from "../context/app-context";
import { NotificationType, Timers } from "../types";
import { setCurrentTimer } from "../context/actions";
import { getActiveTimerClass, openNotificationWithIcon } from "../utils";

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 20rem;
  background-color: ${(props) => props.theme.bgDark};
  border-radius: 1.5rem;
  padding: 0.3rem 0.35rem;
`;

const ListItem = styled.li`
  height: 100%;

  & > button {
    background: transparent;
    border: none;
    color: #94a3b8;
    padding: 0.7rem 1.1rem;
    border-radius: 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
      background: ${(props) => props.theme.primaryColor};
      color: #f3f4f6;
    }
  }
`;

function Options() {
  const {
    dispatch,
    state: { activeTimer },
  } = useAppContext();

  const handleTimerChange = (
    timer: Timers,
    type: NotificationType,
    title: string,
    description: string = ""
  ) => {
    dispatch(setCurrentTimer(timer));
    openNotificationWithIcon(type, title, description);
  };

  return (
    <ListContainer>
      <ListItem>
        <button
          type="button"
          className={getActiveTimerClass(activeTimer, Timers.POMODORO)}
          onClick={() =>
            handleTimerChange(Timers.POMODORO, "info", "Time to focus!")
          }
        >
          pomodoro
        </button>
      </ListItem>
      <ListItem>
        <button
          type="button"
          className={getActiveTimerClass(activeTimer, Timers.SHORT_BREAK)}
          onClick={() =>
            handleTimerChange(
              Timers.SHORT_BREAK,
              "success",
              "Time for a break!"
            )
          }
        >
          short break
        </button>
      </ListItem>
      <ListItem>
        <button
          type="button"
          className={getActiveTimerClass(activeTimer, Timers.LONG_BREAK)}
          onClick={() =>
            handleTimerChange(Timers.LONG_BREAK, "success", "Time for a break!")
          }
        >
          long break
        </button>
      </ListItem>
    </ListContainer>
  );
}

export default Options;
