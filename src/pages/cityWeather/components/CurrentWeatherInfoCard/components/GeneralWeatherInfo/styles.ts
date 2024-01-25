import { FlexContainer } from "@/components/ui";
import styled from "styled-components";

export const GeneralWeatherInfoContainer = styled(FlexContainer)`
  width: 100%;
  border-radius: 24px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
