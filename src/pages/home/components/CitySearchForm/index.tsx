import useKeypress from "@/hooks/useKeyPress";
import { useContext } from "react";
import { FlexContainer, SearchInput } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { citySearchSchema } from "@/utils/schemas/citySearchSchema";
import { getWeatherByCity } from "@/services/getWeatherByCity";
import { WeatherContext } from "@/contexts/WeatherContext";

export default function CitySearchForm() {
  const { setCurrentCityWeather, currentCityWeather } =
    useContext(WeatherContext);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(citySearchSchema),
    mode: "onSubmit",
  });

  const handleSearch = async () => {
    const values = getValues();

    if (!Object.values(errors)?.length && values.city_name) {
      setCurrentCityWeather((prev) => ({ ...prev, loading: true }));
      const cityResponse = await getWeatherByCity(values.city_name);

      if (cityResponse.status === 200) {
        setCurrentCityWeather({
          loading: false,
          data: cityResponse?.data,
        });
        navigate(`/${values.city_name}`);
      } else {
        setCurrentCityWeather((prev) => ({ ...prev, loading: false }));
      }
    }
  };

  useKeypress("Enter", () => {
    handleSubmit(handleSearch);
  });

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <FlexContainer
        alignItems="center"
        gap="16px"
        width="100%"
        justifyContent="center"
      >
        <FlexContainer width="50%">
          <Controller
            name="city_name"
            control={control}
            render={({ field }) => (
              <SearchInput
                {...field}
                dataTestId="city-search-input"
                placeholder="Enter a city"
                loading={currentCityWeather?.loading}
                type="text"
                errorMessage={errors?.city_name?.message?.toString()}
                hasError={!!errors?.city_name?.message}
                onSearch={handleSubmit(handleSearch)}
              />
            )}
          />
        </FlexContainer>
      </FlexContainer>
    </form>
  );
}
