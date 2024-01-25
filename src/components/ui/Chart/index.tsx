import { Card, Text } from "@/components/ui";
import { WeatherContext } from "@/contexts/WeatherContext";
import ReactECharts from "echarts-for-react";
import { useContext } from "react";
import { useTheme } from "styled-components";

interface ChartProps {
  series: {
    name: string;
    type: string;
    emphasis: {
      focus: string;
    };
    data: Array<number | string>;
  }[];
  xAxisData: string[];
  magicTypes;
  title?: string;
}

export default function Chart({
  series,
  xAxisData,
  magicTypes,
  title,
}: ChartProps) {
  const { weatherForecast } = useContext(WeatherContext);
  const theme = useTheme();

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: series?.map((serie) => serie.name),
      textStyle: {
        color: theme.colors.secondary.two,
      },
    },
    color: [theme.colors.commom.warning, theme.colors.commom.info],
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        magicType: { show: magicTypes?.length > 1, type: [magicTypes] },
      },
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: xAxisData,
        axisLabel: {
          color: theme?.colors?.secondary.two,
        },
        nameTruncate: {
          maxWidth: 5,
        },
        splitLine: {
          lineStyle: {
            opacity: 0.1,
            show: false,
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          lineStyle: {
            opacity: 0.1,
            show: false,
          },
        },
        axisLabel: {
          color: theme.colors.secondary.two,
        },
      },
    ],
    series: series?.map((serie) => ({
      ...serie,
      itemStyle: {
        formatter: `{value} %`,
        borderRadius: [16, 16, 16, 16],
      },
      symbol: "diamond",

      labelLine: {
        type: "dashed",
      },
    })),
  };

  return (
    <Card pXY="xxxs" direction="column">
      <Text
        as="span"
        variant="labelMedium"
        weight="semiBold"
        color={theme.colors.secondary.two}
      >
        {title}
      </Text>
      {weatherForecast?.data?.length ? (
        <ReactECharts
          option={option}
          style={{ width: "100%", height: "250px" }}
        />
      ) : (
        ""
      )}
    </Card>
  );
}
