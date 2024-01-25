import { weatherApi } from ".";
import { toast } from "react-toastify";

export const getWeatherForecastByCity = async (lat, lon) => {
  try {
    const response = await weatherApi.get(
      `/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WHEATHER_API_KEY
      }`
    );

    return response;
  } catch (err) {
    toast.error(err?.response?.data?.message);
  }
};
