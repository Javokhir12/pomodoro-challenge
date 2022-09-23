import styled from "styled-components";
import { useAppContext } from "../context/app-context";
import { NotificationType, Timers } from "../types";
import { setCurrentTimer } from "../context/actions";
import { getActiveTimerClass, openNotificationWithIcon } from "../utils";
import { Modal } from "antd";
import { useState } from "react";

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

const timersNotificationData: {
  [key: string]: {
    type: NotificationType;
    title: string;
  };
} = {
  [Timers.POMODORO]: {
    type: "info",
    title: "Time to focus!",
  },
  [Timers.SHORT_BREAK]: {
    type: "success",
    title: "Time for a break!",
  },
  [Timers.LONG_BREAK]: {
    type: "success",
    title: "Time for a break!",
  },
};

function Header() {
  const {
    dispatch,
    state: { activeTimer, isRunning },
  } = useAppContext();
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(activeTimer);

  const handleSwitch = (
    timerType: Timers,
    type: NotificationType,
    title: string,
    description: string = ""
  ) => {
    dispatch(setCurrentTimer(timerType));
    openNotificationWithIcon(type, title, description);
  };

  const onConfirm = () => {
    const { type, title } = timersNotificationData[timer];

    setOpen(false);
    handleSwitch(timer, type, title);
  };

  const onCancel = () => setOpen(false);

  const handleTimerChange = (timerType: Timers) => {
    if (timerType === activeTimer) return;

    if (isRunning) {
      setTimer(timerType);
      setOpen(true);
      return;
    }

    const { type, title } = timersNotificationData[timerType];
    handleSwitch(timerType, type, title);
  };

  return (
    <>
      <ListContainer>
        <ListItem>
          <button
            type="button"
            className={getActiveTimerClass(activeTimer, Timers.POMODORO)}
            onClick={() => handleTimerChange(Timers.POMODORO)}
          >
            pomodoro
          </button>
        </ListItem>
        <ListItem>
          <button
            type="button"
            className={getActiveTimerClass(activeTimer, Timers.SHORT_BREAK)}
            onClick={() => handleTimerChange(Timers.SHORT_BREAK)}
          >
            short break
          </button>
        </ListItem>
        <ListItem>
          <button
            type="button"
            className={getActiveTimerClass(activeTimer, Timers.LONG_BREAK)}
            onClick={() => handleTimerChange(Timers.LONG_BREAK)}
          >
            long break
          </button>
        </ListItem>
      </ListContainer>
      <Modal
        title={"Timer is running"}
        open={open}
        onOk={onConfirm}
        onCancel={onCancel}
      >
        Are you sure you want to switch?
      </Modal>
    </>
  );
}

export default Header;
