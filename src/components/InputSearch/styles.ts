import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  height: 40px;

  > input {
    height: 100%;
    padding: 8px;
    background-color: ${(props) => props.theme.colors.white};
    color: gray;
    border: none;
  }

  > button {
    height: 100%;
    padding: 8px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
