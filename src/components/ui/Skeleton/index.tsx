import React from "react";
import * as S from "./styled";

type SkeletonProps = {
  className?: string;
  duration?: number;
} & S.SkeletonWrapperStyledProps;

const DEFAULT_DURATION_MS = 1600;
const DEFAULT_HEIGHT = 400;
const DEFAULT_WIDTH = 400;

export const Skeleton: React.FC<SkeletonProps> = ({
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  borderRadius,
}) => {
  const skeletonStyle = {
    backgroundSize: `500vw 100%`,
    animationDuration: `${(DEFAULT_DURATION_MS / 1000).toFixed(1)}s`,
  };
  const style = { ...skeletonStyle, ...{ height, width } };

  return (
    <S.SkeletonWrapper
      borderRadius={borderRadius}
      height={height}
      width={width}
    >
      <S.Skeleton style={style} />
    </S.SkeletonWrapper>
  );
};

export default Skeleton;
