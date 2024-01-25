import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  type: HTMLInputTypeAttribute;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  placeholder?: string;
  errorMessage?: string;
  name?: string;
  value?: string | number;
  loading?: boolean;
  width?: string;
  dataTestId?: string;
  hasError?: boolean;
  onSearch?: () => void;
};
