import styled from "styled-components";

export const CityCardLinkContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.secondary.two};
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  height: 100px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary.two};

  .bg-image {
    border-radius: 0 8px 8px 0;
  }

  &:hover {
    scale: 1.1;
  }
`;

export const CityName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const CityCardCountryContainer = styled.div<{ src: string }>`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: calc(100%);
  background-image: url(${({ src }) => src});
  background-size: 100%;
  background-position: center;
`;
