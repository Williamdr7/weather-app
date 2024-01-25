import { ICityLink } from "@/types/cityLink";
import { getCountryFlag } from "@/utils/assets/getCountryFlag";
import { formatInTimeZone } from "date-fns-tz";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FlexContainer } from "@/components/ui";

export default function CityCardLink({ city }: { city: ICityLink }) {
  return (
    <Link data-testid="city-suggestion-link" to={`/${city.city}`}>
      <S.CityCardLinkContainer>
        <S.CityName>{city?.city}</S.CityName>
        <FlexContainer gap="8px">
          <FontAwesomeIcon icon={faClock} />
          <span>
            {formatInTimeZone(new Date(), city?.timezone, "hh:mm aaaaa'm'")}
          </span>
        </FlexContainer>

        <S.CityCardCountryContainer
          className="bg-image"
          src={getCountryFlag(city?.country)}
        />
      </S.CityCardLinkContainer>
    </Link>
  );
}
