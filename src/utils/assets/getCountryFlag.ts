export const getCountryFlag = (countryCode: string) => {
  const baseUrl = import.meta.env.VITE_WEATHER_COUNTRY_BASE_URL;

  return `${baseUrl}/${countryCode.toLowerCase()}.svg`;
};
