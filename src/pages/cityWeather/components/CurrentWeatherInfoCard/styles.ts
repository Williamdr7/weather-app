import { FlexContainer } from "@/components/ui";
import styled from "styled-components";

export const WeatherInfoContainer = styled(FlexContainer)`
  width: 100%;
  display: grid;
  grid-template-columns: 24fr 1fr 24fr;
  border-radius: 24px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Divider = styled.div`
  margin: auto;
  border: 1px solid ${({ theme }) => theme.colors.primary.one};
  width: 1px;
  height: 100%;
`;
