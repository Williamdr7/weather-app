import styled, { keyframes } from "styled-components";

export type SpinnerStyledType = {
  size?: string;

  borderSize?: string;

  zIndex?: number;
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div<SpinnerStyledType>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 2)};

  div {
    position: absolute;
    width: ${({ size }) => size};
    height: ${({ size }) => size};

    border: ${({ borderSize, theme }) =>
      `${borderSize} solid ${theme.colors.secondary.two}`};
    border-radius: 500px;
    border-color: ${({ theme }) => theme.colors.secondary.two} transparent
      transparent transparent;

    margin: ${({ borderSize }) => borderSize};
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;
