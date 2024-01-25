import { ReactNode } from "react";
import { Badge, FlexContainer } from "..";

type BadgeSwitchProps = {
  onChange: (value: { label: string | ReactNode; value: string }) => void;
  value: string;
  options: {
    label: string | ReactNode;
    value: string;
  }[];
  direction?: "column" | "row";
  dataTestId?: string;
};

export default function BadgeSwitch({
  onChange,
  value,
  options,
  direction,
  dataTestId,
}: BadgeSwitchProps) {
  return (
    <FlexContainer gap="8px" direction={direction}>
      {options?.length
        ? options?.map((opt) => (
            <Badge
              pointer
              onClick={() => onChange(opt)}
              variant={value === opt?.value ? "primary" : "neutral"}
              label={opt?.label}
              dataTestid={`${dataTestId}-opt-${opt.value}`}
            />
          ))
        : null}
    </FlexContainer>
  );
}
