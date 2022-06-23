import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.background.paper};
  margin-top: 20px;

  @media (max-width: 767px) {
    padding: 12px 0;
    flex-direction: column;
    justify-content: center;
    gap:10px;
  }

  > img {
    width: 30%;

    @media (max-width: 767px) {
      width: 60%;
    }
  }

  .form_input_search-stalk {
    height: 30px;

    > input {
      border-radius: 10px 0 0 10px;
    }

    > button {
      border-radius: 0 10px 10px 0;
    }
  }
`;

export const LeftPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 25%;
  @media (max-width: 767px) {
    width: 95%;
    align-items:center ;
  }
`;

export const Text = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: 2.25rem;
  font-weight: 400;

  @media (max-width: 767px) {
    text-align:center ;
  }
`;
