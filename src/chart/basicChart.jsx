import React, { useEffect, useRef, useState, useCallback } from "react";
import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom } from "d3";
// import { data } from "./data/dataBasicChart";

function BasicChart() {
  const svgRef = useRef();
  const [data, setData] = useState([
    {
      stock: "stock1",
      sale: 1000,
    },
    {
      stock: "stock2",
      sale: 2000,
    },
    {
      stock: "stock3",
      sale: 300,
    },
    {
      stock: "stock4",
      sale: 1283,
    },
    {
      stock: "stock5",
      sale: 429,
    },
    {
      stock: "stock6",
      sale: 120,
    },
    {
      stock: "stock7",
      sale: 630,
    },
    {
      stock: "stock8",
      sale: 9041,
    },
    {
      stock: "stock9",
      sale: 1280,
    },
  ]);

  const canvasHeight = 400;
  const canvasWidth = 900;
  const margin = {
    top: 40,
    bottom: 20,
    left: 50,
    right: 40,
  };

  const drawBarChar = useCallback(
    (svgCanvas) => {
      const xScale = scaleLinear()
        .domain([0, max(data, (d) => d.sale)])
        .range([0, canvasWidth - margin.left - margin.right]);

      const yScale = scaleBand()
        .domain(data.map((d) => d.stock))
        .range([0, canvasHeight - margin.top - margin.bottom])
        .padding(0.1);

      const g = svgCanvas
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

      g.append("g").call(axisLeft(yScale));
      g.append("g")
        .call(
          axisBottom(xScale).tickSize(
            -(canvasHeight - margin.top - margin.bottom)
          )
        )
        .attr(
          "transform",
          `translate(0, ${canvasHeight - margin.top - margin.bottom})`
        );

      g.selectAll("rect")
        .append("rect")
        .data(data)
        .join("rect")
        .attr("fill", "#1F568B")
        .attr("y", (d) => yScale(d.stock))
        .attr("height", yScale.bandwidth());

      g.selectAll("rect")
        .transition()
        .duration(500)
        .attr("width", (d, i) => xScale(d.sale));

      g.append("text").attr("y", -10).text("Basic chart");
    },
    [data, margin]
  );

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
  }, [drawBarChar]);

  return (
    <div>
      <div
        ref={svgRef}
        style={{
          marginLeft: 10,
          marginTop: 10,
        }}
      ></div>
      <button
        onClick={() =>
          setData(
            data.map((d) => {
              return {
                stock: d.stock,
                sale: d.sale + 500,
              };
            })
          )
        }
      >
        Increase data for basic chart
      </button>
    </div>
  );
}

export default BasicChart;
