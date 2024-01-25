import { IColor } from "../types/color";

export const DarkColors: IColor = {
  primary: {
    one: "#0F1035",
    two: "#365486",
    three: "#afafaf",
    four: "#e5e5e5",
  },

  secondary: {
    one: "#7FC7D9",
    two: "#e5e5e5",
    three: "#afafaf",
    four: "#777777",
    five: "#4b4b4b",
  },

  commom: {
    info: "#1cb0f6",
    danger: "#ff4b4b",
    warning: "#ffc800",
    orange: "#ff9600",
    purple: "#ce82ff",
    "dark-blue": "#2b70c9",
  },
};

export const LightColors: IColor = {
  primary: {
    one: "#e3f1ff",
    two: "#fff",
    three: "#afafaf",
    four: "#777777",
    five: "#4b4b4b",
  },
  secondary: {
    one: "#0F1035",
    two: "#365486",
    three: "#afafaf",
    four: "#e5e5e5",
  },

  commom: {
    info: "#1cb0f6",
    danger: "#ff4b4b",
    warning: "#ffc800",
    orange: "#ff9600",
    purple: "#ce82ff",
    "dark-blue": "#2b70c9",
  },
};

export type TColor = "one" | "two" | "three" | "success" | "danger" | "warning";
