import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  margin: 0 12px;

  > a {
    display: flex;
    flex-direction: column;

    > img {
      border-radius: 4px 4px 0 0;
      pointer-events: none;
    }
  }
`;

export const InformationsContainer = styled.div`
  padding: 12px;
  background-color: ${(props) => props.theme.colors.background.paper};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0 0 4px 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
