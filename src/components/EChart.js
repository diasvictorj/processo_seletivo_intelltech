import React, { useState, useRef, useEffect } from "react";
import echarts from "echarts";

function EChart() {
  const chart = useRef(null);
  const [chartElement, setChartElement] = useState(chart);

  useEffect(() => {}, []);

  return <div ref={chart}>EChart</div>;
}

export default EChart;
