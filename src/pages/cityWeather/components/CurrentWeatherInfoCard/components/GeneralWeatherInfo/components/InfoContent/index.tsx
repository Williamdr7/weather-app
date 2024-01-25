import { FlexContainer, Spacing, Text } from "@/components/ui";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import * as S from "./styles";

type InfoContentProps = {
  icon?: IconProp;
  label: string;
  value: string;
  color?: string;
  customIcon?: ReactNode;
  dataTestId?: string;
};

export default function InfoContent({
  icon,
  label,
  value,
  color,
  customIcon,
  dataTestId,
}: InfoContentProps) {
  const theme = useTheme();

  return (
    <S.WeatherInfoContainer data-testid={dataTestId}>
      <Spacing>
        <Text
          as="span"
          variant="labelSmall"
          weight="semiBold"
          color={theme.colors.secondary.two}
        >
          {label}
        </Text>
        <Spacing mTop="nano" />
        <Text
          as="span"
          variant="labelSmall"
          weight="semiBold"
          color={theme.colors.secondary.two}
        >
          {value}
        </Text>
      </Spacing>
      <FlexContainer width="50px" justifyContent="center">
        {!customIcon ? (
          <FontAwesomeIcon
            icon={icon}
            color={color || theme.colors.commom.info}
            size="2x"
          />
        ) : (
          customIcon
        )}
      </FlexContainer>
    </S.WeatherInfoContainer>
  );
}
