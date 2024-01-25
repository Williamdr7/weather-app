import * as S from "./styles";
import CitySearchForm from "./components/CitySearchForm";
import CapitalsList from "./components/CitiesLinkList";
import { FlexContainer, Spacing, Text } from "@/components/ui";
import { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();

  return (
    <S.HomeContainer alignItems="center" justifyContent="center">
      <S.HomeContent>
        <FlexContainer alignItems="center" justifyContent="center" mY="xs">
          <Text
            weight="bold"
            as="h1"
            variant="h1"
            color={theme.colors.secondary.two}
            data-testid="home-title"
          >
            Type or choose a city to know weather
          </Text>
        </FlexContainer>
        <CitySearchForm />
        <Spacing mTop="xs" />
        <CapitalsList />
      </S.HomeContent>
    </S.HomeContainer>
  );
}
