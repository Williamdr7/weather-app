import styled from "styled-components";

export const CapitalsListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
