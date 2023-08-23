import React, { useEffect, useState } from "react";
import { Tooltip, Treemap } from "recharts";

const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    let chartData = [];

    if (coinsData.lenght > 0) {
      for (let i = 0; i < 45; i++) {
        chartData.push({
          name:
            coinsData[i].symbol.toUpperCase() +
            " " +
            coinsData[i].market_cap_change_percentage_24h.toFixed(1) +
            "%",
          size: coinsData[i].market_cap,
          fill: null,
        });
      }
    }

    setDataArray(chartData);
  }, [coinsData]);

  const TreemapToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="global-chart">
      <Treemap
        width={730}
        height={181}
        data={dataArray}
        dataKey="size"
        stroke="rgb(51,51,51)"
        fill="black"
        aspectRatio="1"
      >
        <Tooltip content={<TreemapToolTip />} />
      </Treemap>
    </div>
  );
};

export default GlobalChart;
