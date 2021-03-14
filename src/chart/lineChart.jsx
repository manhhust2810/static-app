import React, { useEffect, useRef } from "react";
import {
  select,
  scaleLinear,
  scaleBand,
  axisLeft,
  max,
  axisBottom,
  line
  // extent,
} from "d3";
import { data } from "./data/dataLineChart";

const margin = {
  top: 40,
  bottom: 20,
  left: 50,
  right: 40,
};

const canvasHeight = 400;
const canvasWidth = 900;

function LineChart() {
  const svgRef = useRef();

  function drawBarChar(svgCanvas) {
    const xScale = scaleBand()
      .domain(data.map((d) => d.stock))
      .range([0, canvasWidth - margin.left - margin.right]);

    const yScale = scaleLinear()
      .domain([0, max(data, (d) => d.sale)])
      .range([canvasHeight - margin.top - margin.bottom, 0]);

    const g = svgCanvas
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    g.append("g")
      .call(axisBottom(xScale))
      .attr(
        "transform",
        `translate(0, ${canvasHeight - margin.top - margin.bottom})`
      );

    g.append("g").call(axisLeft(yScale));
    g.append("text").attr("y", -10).text("Line Chart");

    g.append("path")
      .datum(data)
      .attr("transform", `translate(45, 0)`)
      .attr("fill", "none")
      .transition()
      .duration(500)
      .attr("stroke", "#1F568B")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        line()
          .x((d) => xScale(d.stock))
          .y((d) => yScale(d.sale))
      );
  }

  useEffect(() => {
    // draw canvas
    const svgCanvas = select(svgRef.current)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .attr("margin", 10)
      .style("border", "1px solid black");

    drawBarChar(svgCanvas);
    return () => {
      // remove canvas
      svgCanvas.remove();
    };
  }, [data]);

  return (
    <div className="flex-container">
      <div
        ref={svgRef}
        style={{
          marginLeft: 10,
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
        }}
        className="flex-item"
      ></div>
    </div>
  );
}

export default LineChart;
