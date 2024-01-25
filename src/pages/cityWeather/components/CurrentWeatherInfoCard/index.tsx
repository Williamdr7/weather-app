import * as S from "./styles";
import MainWeatherCard from "./components/MainWeatherCard";
import GeneralWeatherInfo from "./components/GeneralWeatherInfo";
import { Card, Spacing } from "@/components/ui";

export default function CurrentWeatherInfoCard() {
  return (
    <Spacing>
      <Card direction="column" mY="xs">
        <S.WeatherInfoContainer direction="column" gap="24px">
          <MainWeatherCard />
          <S.Divider />
          <GeneralWeatherInfo />
        </S.WeatherInfoContainer>
      </Card>
    </Spacing>
  );
}
