import styled, { keyframes } from "styled-components";

export type SkeletonWrapperStyledProps = {
  borderRadius?: number;
  height: number;
  width: number;
};

export const SkeletonWrapper = styled.div<SkeletonWrapperStyledProps>`
  overflow: hidden;

  width: ${({ width }) => (width ? `${width}px` : `fit-content`)};
  height: ${({ height }) => (height ? `${height}px` : `fit-content`)};

  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "4px"};
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const skeletoning = keyframes`
  from {
    background-position: top right;
  }

  to {
    background-position: top left;
  }
`;

export const Skeleton = styled.div`
  background: ${({ theme }) => theme.colors.primary.one}
    linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary.two} 8%,
      ${({ theme }) => theme.colors.primary.three} 18%,
      ${({ theme }) => theme.colors.primary.two} 33%
    )
    no-repeat;
  animation: ${skeletoning} forwards infinite ease-in-out,
    ${fadein} 0.02s forwards;
`;
