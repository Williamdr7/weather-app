import { ReactNode } from "react";
import { Text } from "..";
import * as S from "./styles";

type BadgeProps = {
  variant: "primary" | "secondary" | "neutral";
  label: string | ReactNode;
  pointer?: boolean;
  onClick?: () => void;
  dataTestid?: string;
};

export default function Badge({
  variant,
  label,
  pointer,
  onClick,
  dataTestid,
}: BadgeProps) {
  return (
    <S.BadgeContainer
      data-testid={dataTestid}
      onClick={onClick}
      variant={variant}
      pointer={pointer}
    >
      <Text as="span" variant="labelSmall" weight="semiBold">
        {label}
      </Text>
    </S.BadgeContainer>
  );
}
