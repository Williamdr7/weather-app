import { Card, Spacing, FlexContainer, Text } from "@/components/ui";
import { getIcon } from "@/utils/assets/getIcon";
import { celsiusToFarenheit } from "@/utils/numbers/celsiusToFarenheit";
import {
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, fromUnixTime } from "date-fns";
import * as S from "./styles";
import { useContext } from "react";
import { WeatherContext } from "@/contexts/WeatherContext";
import { useTheme } from "styled-components";
import * as _ from "lodash";

export default function NextDaysWeatherCard() {
  const { weatherForecast, measureType } = useContext(WeatherContext);
  const theme = useTheme();

  return (
    <Card pXY="xxxs" width="100%">
      <Spacing width="100%">
        <Text
          as="h3"
          variant="labelMedium"
          weight="semiBold"
          color={theme.colors.secondary.two}
        >
          Next days forecast
        </Text>
        <S.NextDaysContainer>
          {weatherForecast?.data?.map((dayWeather, i) => {
            if (weatherForecast?.data?.length === 6 && i === 0) return;
            return (
              <S.DayWeatherCard data-testid={`weather-forecast-next-day-${i}`}>
                <FlexContainer direction="column" gap="20px">
                  <Text
                    as="span"
                    variant="labelMedium"
                    weight="regular"
                    color={theme.colors.secondary.two}
                  >
                    {format(
                      fromUnixTime(dayWeather?.data[0]?.dt),
                      "EEEE - MM/dd"
                    )}
                  </Text>
                  <FlexContainer direction="column" gap="8px">
                    <FlexContainer gap="8px">
                      <FontAwesomeIcon
                        icon={faTemperatureArrowUp}
                        color={theme.colors.commom.warning}
                      />
                      <Text
                        as="span"
                        variant="labelLarge"
                        weight="semiBold"
                        color={theme.colors.commom.warning}
                      >
                        {measureType === "celsius"
                          ? `${(
                              _.max(
                                dayWeather.data?.map((i) => i?.main?.temp_max)
                              ) - 273.15
                            ).toFixed(2)} °C`
                          : `${celsiusToFarenheit(
                              _.max(
                                dayWeather.data?.map((i) => i?.main?.temp_max)
                              ) - 273.15
                            ).toFixed(0)} °F`}
                      </Text>
                    </FlexContainer>
                    <FlexContainer gap="8px">
                      <FontAwesomeIcon
                        icon={faTemperatureArrowDown}
                        color={theme.colors.commom.info}
                      />
                      <Text
                        as="span"
                        variant="labelLarge"
                        weight="semiBold"
                        color={theme.colors.commom.info}
                      >
                        {measureType === "celsius"
                          ? `${(
                              _.min(
                                dayWeather.data?.map((i) => i?.main?.temp_min)
                              ) - 273.15
                            ).toFixed(2)} °C`
                          : `${celsiusToFarenheit(
                              _.min(
                                dayWeather.data?.map((i) => i?.main?.temp_min)
                              ) - 273.15
                            ).toFixed(0)} °F`}
                      </Text>
                    </FlexContainer>
                  </FlexContainer>
                  <Text
                    as="h2"
                    variant="labelMedium"
                    weight="regular"
                    color={theme.colors.secondary.two}
                  >
                    {_.capitalize(dayWeather?.data[0]?.weather[0]?.description)}
                  </Text>
                </FlexContainer>

                <img
                  src={getIcon(dayWeather.data[0]?.weather[0]?.icon, "2x")}
                />
              </S.DayWeatherCard>
            );
          })}
        </S.NextDaysContainer>
      </Spacing>
    </Card>
  );
}
