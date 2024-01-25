import { Chart, FlexContainer, Spacing } from "@/components/ui";
import { WeatherContext } from "@/contexts/WeatherContext";
import { format, fromUnixTime } from "date-fns";
import { useContext } from "react";
import * as S from "./styles";
import * as _ from "lodash";

import NextDaysWeatherCard from "./components/NextDaysWeatherCard";

export default function NextDaysWeatherForecast() {
  const { weatherForecast } = useContext(WeatherContext);

  return (
    <>
      {weatherForecast?.data?.length ? (
        <FlexContainer direction="column" gap="32px">
          <NextDaysWeatherCard />
          <S.ChartsRow>
            <Chart
              title="Rain - Next hours"
              magicTypes={["bar"]}
              xAxisData={[
                ...weatherForecast.data[0].data,
                ...weatherForecast.data[1].data,
                ...weatherForecast.data[2].data,
              ]?.map((dayInfo) =>
                format(fromUnixTime(dayInfo.dt), "hh:mm aaaaa'm'")
              )}
              series={[
                {
                  name: "Rain",
                  type: "bar",
                  emphasis: {
                    focus: "series",
                  },
                  data: [
                    ...weatherForecast.data[0].data,
                    ...weatherForecast.data[1].data,
                    ...weatherForecast.data[2].data,
                  ]?.map((dayInfo) =>
                    dayInfo.rain
                      ? (dayInfo.rain["3h"] * 10).toFixed(2)
                      : "Não informado"
                  ),
                },
              ]}
            />

            <Chart
              title="Temperature - Next hours"
              magicTypes={["bar", "line"]}
              xAxisData={[
                ...weatherForecast.data[0].data,
                ...weatherForecast.data[1].data,
              ].map((dayInfo) =>
                format(fromUnixTime(dayInfo.dt), "MM/dd hh:mm aaaaa'm'")
              )}
              series={[
                {
                  name: "Temp",
                  type: "line",
                  emphasis: {
                    focus: "series",
                  },
                  data: [
                    ...weatherForecast.data[0].data,
                    ...weatherForecast.data[1].data,
                  ]?.map((dayInfo) => (dayInfo.main?.temp - 273.15).toFixed(2)),
                },
              ]}
            />
            <Chart
              title="Temperature - Next 5 days"
              magicTypes={["bar", "line"]}
              xAxisData={weatherForecast?.data?.map((i) => i?.day)}
              series={[
                {
                  name: "Max temp.",
                  type: "line",

                  emphasis: {
                    focus: "series",
                  },
                  data: weatherForecast?.data?.map((dayInfo) =>
                    (
                      _.max(dayInfo.data?.map((i) => i?.main?.temp_max)) -
                      273.15
                    ).toFixed(2)
                  ),
                },
                {
                  name: "Min temp.",
                  type: "line",

                  emphasis: {
                    focus: "series",
                  },
                  data: weatherForecast?.data?.map((dayInfo) =>
                    (
                      _.min(dayInfo.data?.map((i) => i?.main?.temp_min)) -
                      273.15
                    ).toFixed(2)
                  ),
                },
              ]}
            />
            <Chart
              title="Humidity - Next 5 days"
              magicTypes={["bar", "line"]}
              xAxisData={weatherForecast?.data?.map((i) => i?.day)}
              series={[
                {
                  name: "Humidity",
                  type: "line",

                  emphasis: {
                    focus: "series",
                  },
                  data: weatherForecast?.data?.map((dayInfo) =>
                    dayInfo.data[0]?.main?.humidity.toFixed(2)
                  ),
                },
              ]}
            />
          </S.ChartsRow>
        </FlexContainer>
      ) : weatherForecast.loading ? (
        <>
          <S.CustomSkeleton width="100%" height={200} />
          <Spacing mTop="xs" />
          <S.ChartsRow>
            <S.CustomSkeleton width="100%" height={300} />
            <S.CustomSkeleton width="100%" height={300} />
          </S.ChartsRow>
        </>
      ) : null}
    </>
  );
}
