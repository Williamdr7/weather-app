import { citiesLinks } from "@/utils/constants/citiesLinks";
import CityCardLink from "../CityCardLink";
import * as S from "./styles";

export default function CapitalsList() {
  return (
    <S.CapitalsListContainer>
      {citiesLinks?.map((city) => (
        <CityCardLink city={city} />
      ))}
    </S.CapitalsListContainer>
  );
}
