import { FlexContainer } from "@/components/ui";
import styled from "styled-components";

export const NextDaysContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: normal;
  column-gap: 16px;

  @media (max-width: 1300px) {
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 769px) {
    gap: 32px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DayWeatherCard = styled(FlexContainer)`
  justify-content: space-between;
  box-shadow: ${({ theme }) => `${theme.colors.primary.one} 0px 1px 2px 0px,
   ${theme.colors.secondary.three} 0px 2px 6px 2px`};
  border-radius: 8px;
  padding: 16px;
`;
