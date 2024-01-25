import styled from "styled-components";

export const WeatherInfoContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-shadow: ${({ theme }) => `${theme.colors.primary.one} 0px 1px 2px 0px,
   ${theme.colors.secondary.three} 0px 2px 6px 2px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;
