import styled from "styled-components";

export const Container = styled.div`
  margin: 10px auto 30px;
  background-color: ${(props) => props.theme.colors.background.dark_paper};
  padding: 12px;
  width: 95%;
  border-radius: 4px;

  @media (max-width: 767px) {
    width: 80%;
  }

  .slick_carousel {
    margin: 0 -12px;
    cursor: grab;

    :active {
      cursor: grabbing;
    }
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 16px;
`;
