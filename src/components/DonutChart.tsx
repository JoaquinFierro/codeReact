import { useMemo } from "react";
import * as d3 from "d3";
import { animated, SpringValue, useSpring} from "react-spring";

import React from 'react';
import { Tooltip } from "react-tooltip";

type DataItem = {
  name: string;
  value?: number;
};

type DonutChartProps = {
  width: number;
  height: number;
  data: DataItem[];
};

const MARGIN = 30;

const colors = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
];

export const DonutChart = ({ width, height, data }: DonutChartProps) => {
  // Sort by alphabetical to maximise consistency between dataset
  const sortedData = data.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  const radius = Math.min(width, height) / 2 - MARGIN;

  const pie = useMemo(() => {
    const pieGenerator = d3
      .pie<any, DataItem>()
      .value((d) => d.value || 0)
      .sort(null); // Do not apply any sorting, respect the order of the provided dataset
    return pieGenerator(sortedData);
  }, [data]);

  const arcPathGenerator = d3.arc();

  const allPaths = pie.map((slice, i) => {

    const labelPosition = radius;
    return (
      <g key={slice.data.name}>
      <Slice
        key={slice.data.name}
        radius={radius}
        slice={slice}
        color={colors[i]}
      />

      </g>
    );
  });

  return (
    <svg width={width} height={height} style={{ display: "inline-block" }}>
      <g transform={`translate(${width / 2}, ${height / 2})`}>{allPaths}
      </g>
    </svg>
  );
};

type SliceProps = {
  color: string;
  radius: number;
  slice: d3.PieArcDatum<DataItem>;
};
const Slice = ({ slice, radius, color }: SliceProps) => {
  const arcPathGenerator = d3.arc();

  const springProps = useSpring({
    to: {
      pos: [slice.startAngle, slice.endAngle] as [number, number],
    },
  });
  const labelPosition = radius;

  return (
    <g>
    <animated.path
      d={springProps.pos.to((start, end) => {
        return arcPathGenerator({
          innerRadius: 40,
          outerRadius: radius,
          startAngle: start,
          endAngle: end,
        });
      })}
      fill={color}
    />
     <Tooltip>
     {slice.data.name}
     </Tooltip>

    {/* Agregar título para información adicional */}
    <title>{`${slice.data.name}: ${slice.data.value}`}</title>

  </g>

  
    
    // <animated.path
    //   d={springProps.pos.to((start, end) => {
    //     return arcPathGenerator({
    //       innerRadius: 40,
    //       outerRadius: radius,
    //       startAngle: start,
    //       endAngle: end,
    //     });
    //   })}
    //   fill={color}
    // />
  );
};

