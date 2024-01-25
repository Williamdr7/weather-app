import { styled } from "styled-components";

const heightOptions = {
  small: "24px",
  medium: "45px",
  large: "56px",
};

export const InputContainer = styled.div<{
  size: "small" | "medium" | "large";
  width?: string;
  hasError?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => (width ? width : "100%")};
  position: relative;

  input {
    width: 100%;
    height: ${({ size }) => heightOptions[size]};
    padding: 4px 16px;
    border-radius: 116px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.secondary.one};
    border: 1px solid
      ${({ theme, hasError }) =>
        hasError ? theme.colors.commom.danger : theme.colors.primary.one};
    background-color: ${({ theme }) => theme.colors.primary.two};
  }

  .input-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.primary.two};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary.one};
  }
`;
