import styled from "styled-components";
import { FlexContainer } from "..";

export const BadgeContainer = styled(FlexContainer)<{
  variant: "primary" | "secondary" | "neutral";
  pointer?: boolean;
}>`
  height: 25px;
  padding: 0 16px;
  border-radius: 500px;
  background-color: ${({ theme, variant }) =>
    variant === "neutral" ? "transparent" : theme.colors.secondary.one};
  border: 1px solid
    ${({ theme, variant }) =>
      variant === "neutral" ? theme.colors.secondary.two : "transparent"};

  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme, variant }) =>
      variant === "neutral"
        ? theme.colors.secondary.two
        : theme.colors.primary.one};
  }
  &:hover {
    cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
  }
`;
