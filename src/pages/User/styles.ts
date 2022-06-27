import styled from "styled-components";

export const Container = styled.div`
  width: 980px;
  margin: 16px auto;

  @media (max-width: 1023px) {
    width: 90%;
  }

  .ul__userinformation--card {
    grid-template-columns: 2fr 1fr;
    align-items: center;

    @media (max-width: 767px) {
        grid-template-columns: none;
    }
  }
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  text-transform: capitalize;
  margin-bottom: 24px;
`;

export const LoadingText = styled.h2 `
  color: ${(props) => props.theme.colors.white};
  margin: 60px 0;
  text-align: center;
`