import styled from "styled-components";
import { FlexContainer } from "..";

export const CardContainer = styled(FlexContainer)`
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.primary.two};
`;
