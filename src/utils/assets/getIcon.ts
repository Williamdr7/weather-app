export const getIcon = (iconCode: string, size: string) => {
  const baseUrl = import.meta.env.VITE_WEATHER_ICON_BASE_URL;

  return `${baseUrl}/${iconCode}@${size}.png`;
};
