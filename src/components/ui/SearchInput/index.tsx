import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputContainer } from "./styles";
import { InputProps } from "./types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import { FlexContainer, Spinner, Text } from "..";

export default function SearchInput({
  type,
  size,
  width,
  placeholder,
  dataTestId,
  hasError,
  loading,
  onSearch,
  errorMessage,
  ...props
}: InputProps) {
  const theme = useTheme();
  return (
    <FlexContainer direction="column" width="100%" gap="4px">
      <InputContainer
        hasError={hasError}
        data-testid={dataTestId}
        width={width}
        size={size || "medium"}
      >
        <input type={type} placeholder={placeholder} {...props} />

        {loading ? (
          <div className="input-icon">
            <Spinner size="24px" />
          </div>
        ) : (
          <FontAwesomeIcon
            data-testid="search-button"
            onClick={onSearch}
            className="input-icon"
            icon={faSearch}
            cursor="pointer"
            size="xl"
            color={theme.colors.secondary.one}
          />
        )}
      </InputContainer>
      <FlexContainer pLeft="nano">
        <Text
          data-testid="search-input-error-message"
          color={theme.colors.commom.danger}
          as="span"
          variant="labelExtraSmall"
          weight="regular"
        >
          {errorMessage}
        </Text>
      </FlexContainer>
    </FlexContainer>
  );
}
