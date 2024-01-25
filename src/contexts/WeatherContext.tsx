import { getWeatherForecastByCity } from "@/services/getWeatherForecastByCity";
import { measureTypeOptions } from "@/utils/constants/measure";
import { celsiusToFarenheit } from "@/utils/numbers/celsiusToFarenheit";
import { format, fromUnixTime } from "date-fns";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface IWeather {
  name: string;
  clouds: {
    all: number;
  };
  timezone: number;
  rain?: {
    "3h": number;
  };
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  dt: number;
}

type CityWeatherData = {
  data: IWeather;
  loading: boolean;
};

type ForecastWeatherData = {
  data: { day: string; data: IWeather[] }[];
  loading: boolean;
};

export type IMeasureTypeOptions = "celsius" | "farenheit";

interface WeatherContextType {
  currentCityWeather: CityWeatherData;
  setCurrentCityWeather: Dispatch<SetStateAction<CityWeatherData>>;
  measureType: IMeasureTypeOptions;
  setMeasureType: Dispatch<SetStateAction<IMeasureTypeOptions>>;
  getTempConvertedValue: (
    value: number,
    options?: { showMeasure: boolean }
  ) => string;
  weatherForecast: ForecastWeatherData;
  setWeatherForecast: Dispatch<SetStateAction<ForecastWeatherData>>;
}

interface WeatherContextProps {
  children: ReactNode;
}

export const WeatherContext = createContext({} as WeatherContextType);

export function WeatherContextProvider({ children }: WeatherContextProps) {
  const [weatherForecast, setWeatherForecast] = useState<ForecastWeatherData>({
    data: null,
    loading: false,
  });
  const [currentCityWeather, setCurrentCityWeather] = useState<CityWeatherData>(
    {
      data: null,
      loading: false,
    }
  );
  const [measureType, setMeasureType] =
    useState<IMeasureTypeOptions>("celsius");

  const getTempConvertedValue = useCallback(
    (value: number, options?: { showMeasure: boolean }) => {
      const currentMeasure = measureTypeOptions?.find(
        (i) => i?.value === measureType
      )?.label;
      return measureType === "celsius"
        ? `${value.toFixed(0)}${options?.showMeasure ? currentMeasure : "°"}`
        : `${celsiusToFarenheit(value).toFixed()}${
            options?.showMeasure ? currentMeasure : "°"
          }`;
    },
    [measureType]
  );

  const fetchForecastByCity = useCallback(
    async (coords: { lat: number; lon: number }) => {
      setWeatherForecast((prev) => ({ ...prev, loading: true }));
      const response = await getWeatherForecastByCity(coords.lat, coords.lon);

      if (response) {
        const dtList: string[] = [];
        const forecastFinalData: { day: string; data: IWeather[] }[] = [];

        response?.data?.list?.forEach((info) => {
          const day = format(fromUnixTime(info?.dt), "EEEE");
          if (!dtList?.find((dt) => dt === day)) {
            dtList.push(day);
          }
        });

        dtList?.forEach((dt) => {
          const dtItems = response?.data?.list?.filter(
            (item) => format(fromUnixTime(item?.dt), "EEEE") === dt
          );
          forecastFinalData.push({
            day: dt,
            data: dtItems,
          });
        });

        setWeatherForecast({
          data: forecastFinalData,
          loading: false,
        });
      }
      setWeatherForecast((prev) => ({ ...prev, loading: false }));
    },
    []
  );

  useEffect(() => {
    if (currentCityWeather?.data?.coord) {
      fetchForecastByCity(currentCityWeather?.data?.coord);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCityWeather?.data]);

  return (
    <WeatherContext.Provider
      value={{
        currentCityWeather,
        setCurrentCityWeather,
        measureType,
        setMeasureType,
        getTempConvertedValue,
        weatherForecast,
        setWeatherForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
