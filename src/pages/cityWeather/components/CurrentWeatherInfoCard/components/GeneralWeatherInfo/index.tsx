import * as S from "./styles";
import {
  faCloud,
  faDroplet,
  faTemperatureArrowUp,
  faTemperatureQuarter,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import InfoContent from "./components/InfoContent";
import { faTemperatureArrowDown } from "@fortawesome/free-solid-svg-icons/faTemperatureArrowDown";
import { useContext } from "react";
import { WeatherContext } from "@/contexts/WeatherContext";
import { useTheme } from "styled-components";
import { Sunrise, Sunset } from "@/components/icons";
import { format, fromUnixTime } from "date-fns";

export default function GeneralWeatherInfo() {
  const theme = useTheme();
  const {
    getTempConvertedValue,
    currentCityWeather: { data },
  } = useContext(WeatherContext);

  return (
    <S.GeneralWeatherInfoContainer direction="column" gap="24px">
      <InfoContent
        label="Max temp."
        dataTestId="current-weather-max-temp"
        color={theme.colors.commom.warning}
        icon={faTemperatureArrowUp}
        value={getTempConvertedValue(data.main.temp_max, {
          showMeasure: true,
        })}
      />
      <InfoContent
        label="Min temp."
        dataTestId="current-weather-min-temp"
        icon={faTemperatureArrowDown}
        color={theme.colors.commom.info}
        value={getTempConvertedValue(data.main.temp_min, {
          showMeasure: true,
        })}
      />
      <InfoContent
        label="Feels like"
        dataTestId="current-weather-feels-like"
        color={theme.colors.commom.warning}
        icon={faTemperatureQuarter}
        value={getTempConvertedValue(data.main.feels_like, {
          showMeasure: true,
        })}
      />

      <InfoContent
        label="Wind speed"
        dataTestId="current-weather-wind-speed"
        icon={faWind}
        value={`${data.wind.speed.toFixed()} km/h`}
      />
      <InfoContent
        label="Clouds"
        dataTestId="current-weather-clouds"
        color={theme.colors.commom.warning}
        icon={faCloud}
        value={data.clouds?.all.toString()}
      />
      <InfoContent
        label="Humidity"
        dataTestId="current-weather-humidity"
        icon={faDroplet}
        value={`${data.main.humidity.toFixed()}%`}
      />
      <InfoContent
        label="Sunrise"
        dataTestId="current-weather-sunrise"
        customIcon={<Sunrise />}
        value={format(fromUnixTime(data?.sys?.sunrise), "hh:mm aaaaa'm'")}
      />
      <InfoContent
        label="Sunset"
        dataTestId="current-weather-sunset"
        customIcon={<Sunset />}
        value={format(fromUnixTime(data?.sys?.sunset), "hh:mm aaaaa'm'")}
      />
    </S.GeneralWeatherInfoContainer>
  );
}
