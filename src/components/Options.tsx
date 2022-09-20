import styled from "styled-components";

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 20rem;
  background-color: #121063;
  border-radius: 1.5rem;
  padding: 0.3rem 0.35rem;
`;

const ListItem = styled.li`
  height: 100%;

  & > button {
    background: transparent;
    border: none;
    color: #94a3b8;
    padding: 0.75rem 1.2rem;
    border-radius: 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
      background: #ea580c;
      color: #f3f4f6;
    }
  }
`;

function Options() {
  return (
    <ListContainer>
      <ListItem>
        <button type="button">pomodoro</button>
      </ListItem>
      <ListItem>
        <button type="button" className="active">
          short break
        </button>
      </ListItem>
      <ListItem>
        <button type="button">long break</button>
      </ListItem>
    </ListContainer>
  );
}

export default Options;
