import { Skeleton } from "@/components/ui";
import styled from "styled-components";

export const CityWeatherContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  padding: 16px;
`;

export const CustomSkeleton = styled(Skeleton)<{ width: string }>`
  width: ${({ width }) => width} !important;
`;
