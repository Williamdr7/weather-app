import FlexContainer from "@/components/ui/FlexContainer";
import styled from "styled-components";

export const HomeContainer = styled(FlexContainer)`
  width: 100%;
`;

export const HomeContent = styled.div`
  min-width: 80%;
  border-radius: 24px;
  padding: 16px;

  @media (max-width: 769px) {
    h1 {
      font-size: 32px;
      text-align: center;
    }
  }
`;

export const WheatherCardsContainer = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 8fr 4fr;
`;
