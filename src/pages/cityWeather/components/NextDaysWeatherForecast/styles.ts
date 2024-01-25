import { Skeleton } from "@/components/ui";
import styled from "styled-components";

export const ChartsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CustomSkeleton = styled(Skeleton)<{ width: string }>`
  width: ${({ width }) => width} !important;
`;
