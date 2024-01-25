import { useContext } from "react";
import * as S from "./styles";
import {
  AppSettingsContext,
  IThemeOption,
} from "@/contexts/AppSettingsContext";
import { BadgeSwitch, FlexContainer, Spacing, Text } from "..";
import { WeatherContext } from "@/contexts/WeatherContext";
import { getCountryFlag } from "@/utils/assets/getCountryFlag";
import { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setTheme, theme } = useContext(AppSettingsContext);
  const { currentCityWeather, setCurrentCityWeather, setWeatherForecast } =
    useContext(WeatherContext);
  const navigate = useNavigate();
  const themeVars = useTheme();

  const backToHome = () => {
    setCurrentCityWeather({ data: null, loading: false });
    setWeatherForecast({ data: null, loading: false });
    navigate("/");
  };

  return (
    <S.HeaderContainer>
      {currentCityWeather?.data?.name ? (
        <FlexContainer gap="8px" alignItems="center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            cursor="pointer"
            onClick={backToHome}
          />
          <Spacing mLeft="xxxs" />
          <img
            height="32px"
            src={getCountryFlag(currentCityWeather?.data?.sys?.country)}
          />
          <Text
            as="h1"
            variant="h3"
            weight="semiBold"
            color={themeVars.colors.secondary.one}
            data-testid="city-name"
          >
            {currentCityWeather?.data?.name}
          </Text>
        </FlexContainer>
      ) : (
        <FlexContainer />
      )}
      <FlexContainer
        direction="column"
        gap="8px"
        alignItems="center"
        justifyContent="center"
      >
        <BadgeSwitch
          direction="row"
          onChange={(opt: { label: string; value: IThemeOption }) =>
            setTheme(opt?.value)
          }
          value={theme}
          options={[
            { label: <FontAwesomeIcon icon={faMoon} />, value: "dark" },
            { label: <FontAwesomeIcon icon={faSun} />, value: "light" },
          ]}
        />
        <Text
          as="h1"
          variant="labelSmall"
          weight="semiBold"
          color={themeVars.colors.secondary.two}
        >
          Choose a theme
        </Text>
      </FlexContainer>
    </S.HeaderContainer>
  );
}
