import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.primary.two};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  top: 0;

  @media (max-width: 769px) {
    img {
      height: 20px;
    }
    h1 {
      font-size: 14px;
    }
  }
`;
