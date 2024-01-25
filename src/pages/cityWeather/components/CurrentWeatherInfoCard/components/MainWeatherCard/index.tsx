import { BadgeSwitch, FlexContainer, Spacing, Text } from "@/components/ui";
import { getIcon } from "@/utils/assets/getIcon";
import { useContext } from "react";
import * as S from "./styles";
import * as _ from "lodash";
import { format, fromUnixTime } from "date-fns";
import { IMeasureTypeOptions, WeatherContext } from "@/contexts/WeatherContext";
import { measureTypeOptions } from "@/utils/constants/measure";
import { useTheme } from "styled-components";

export default function MainWeatherCard() {
  const {
    currentCityWeather: { data },
    measureType,
    setMeasureType,
    getTempConvertedValue,
  } = useContext(WeatherContext);
  const theme = useTheme();

  return (
    <S.MainWeatherInfoContainer direction="column" justifyContent="center">
      <FlexContainer
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <FlexContainer alignItems="center" direction="column" gap="8px">
          <FlexContainer alignItems="center">
            <S.WeatherIcon src={getIcon(data?.weather[0]?.icon, "2x")} />
          </FlexContainer>
          <FlexContainer gap="8px" mTop="xs" alignItems="center">
            <Text
              weight="regular"
              as="span"
              variant="h2"
              fontSize="54px"
              color={theme.colors.secondary.two}
              data-testid="current-weather-temp"
            >
              {getTempConvertedValue(data?.main?.temp)}
            </Text>
            <Spacing mTop="pico" />
            <BadgeSwitch
              direction="column"
              onChange={(opt: { label: string; value: IMeasureTypeOptions }) =>
                setMeasureType(opt?.value)
              }
              value={measureType}
              dataTestId="measure-switch"
              options={measureTypeOptions}
            />
          </FlexContainer>
          <Spacing mTop="pico" />
          <Text
            weight="semiBold"
            as="span"
            variant="h4"
            color={theme.colors.secondary.two}
            data-testid="current-weather-description"
          >
            {_.capitalize(data.weather[0].description)}
          </Text>
          <Text
            weight="regular"
            as="span"
            variant="labelSmall"
            color={theme.colors.secondary.two}
          >
            {format(fromUnixTime(data?.dt), "iiii, dd MMM")}
          </Text>
        </FlexContainer>
      </FlexContainer>
    </S.MainWeatherInfoContainer>
  );
}
