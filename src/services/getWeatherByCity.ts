import { weatherApi } from ".";
import { toast } from "react-toastify";

export const getWeatherByCity = async (city) => {
  try {
    const response = await weatherApi.get(
      `/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_WHEATHER_API_KEY
      }`
    );

    return response;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return err?.response?.data?.message;
  }
};
