import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: ${(props) => props.theme.colors.background.main};

  .search_results_container {
    width: 90%;
    .slick_carousel {
      margin: -12px;
    }
  }

  .search_results_item {
    margin: 12px;
  }
`;
