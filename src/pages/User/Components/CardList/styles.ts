import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background.paper};
  border-radius: 4px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  > li {
    > a {
      height: 100%;
      display: block;
      > img {
        width: 100%;
      }
    }
  }
`;
