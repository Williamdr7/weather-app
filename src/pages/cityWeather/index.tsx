import * as S from "./styles";
import CurrentWeatherInfoCard from "./components/CurrentWeatherInfoCard";
import { WeatherContext } from "@/contexts/WeatherContext";
import { useCallback, useContext, useEffect } from "react";
import { getWeatherByCity } from "@/services/getWeatherByCity";
import { useParams } from "react-router-dom";
import NextDaysWeatherForecast from "./components/NextDaysWeatherForecast";
import { Card, FlexContainer } from "@/components/ui";

export default function CityWeather() {
  const { city } = useParams();
  const { currentCityWeather, setCurrentCityWeather } =
    useContext(WeatherContext);

  const fetchCityWeather = useCallback(async () => {
    setCurrentCityWeather((prev) => ({ ...prev, loading: true }));
    const response = await getWeatherByCity(city);

    if (response) {
      setCurrentCityWeather((prev) => ({
        ...prev,
        data: response?.data,
        loading: true,
      }));
    }
  }, [city, setCurrentCityWeather]);

  useEffect(() => {
    if (city !== currentCityWeather?.data?.name) {
      fetchCityWeather();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <>
      <FlexContainer width="100%" alignItems="center" justifyContent="center">
        <S.CityWeatherContent>
          {currentCityWeather?.data?.name ? (
            <>
              <CurrentWeatherInfoCard />
            </>
          ) : currentCityWeather.loading ? (
            <Card direction="column" mY="xs">
              <S.CustomSkeleton width="100%" height={425} />
            </Card>
          ) : null}
          <NextDaysWeatherForecast />
        </S.CityWeatherContent>
      </FlexContainer>
    </>
  );
}
