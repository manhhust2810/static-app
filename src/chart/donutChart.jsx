import React, { useEffect, useRef, useState } from 'react';
import {
  select,
  scaleLinear,
  scaleBand,
  axisLeft,
  max,
  axisBottom,
  pie,
  arc,
  scaleOrdinal
} from 'd3';
import { dataBrandComputer, dataBrandClothing } from './data/dataDonutChart';

const margin = {
  top: 20,
  bottom: 20,
  left: 50,
  right: 20
};

const canvasHeight = 500;
const canvasWidth = 900;
const height = 360;
const width = 360;
const radius = Math.min(width, height) / 2;
const donutWidth = 75;

function DonutChart() {
  const svgRef = useRef();

  function drawBarChar(svgCanvas) {
    const color = scaleOrdinal().range([
      '#5A39AC',
      '#DD98D6',
      '#E7C820',
      '#08B2B2'
    ]);
    const arcl = arc()
      .innerRadius(radius - donutWidth)
      .outerRadius(radius);
    const piece = pie().value(d => d.value);

    const path = svgCanvas
      .selectAll('path')
      .data(piece(dataBrandComputer))
      .enter()
      .append('path')
      .attr('d', arcl)
      .attr('fill', function (d, i) {
        return color(i);
      })
      .attr('transform', `translate(${canvasWidth / 4}, ${canvasHeight / 2})`);

    const g = svgCanvas
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    g.append('text')
      .attr('y', margin.top)
      .attr('x', margin.left)
      .text('Donut Chart');
    g.append('text')
      .attr('y', canvasHeight / 3)
      .attr('x', canvasWidth / 2)
      .text('Grade A');
    g.append('text')
      .attr('y', canvasHeight / 3 + 20)
      .attr('x', canvasWidth / 2)
      .text('Grade B');
  }

  useEffect(() => {
    // draw canvas
    const svgCanvas = select(svgRef.current)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .attr('margin', 10)
      .style('border', '1px solid black');

    drawBarChar(svgCanvas);
    return () => {
      // remove canvas
      svgCanvas.remove();
    };
  });

  function changeSelect(typeData) {
    console.log(typeData);
    if (typeData == 'compute') {
      const piece = pie()
        .value(function (d) {
          return d.value;
        })
        .sort(null)(dataBrandComputer);
      const width = 360;
      const height = 360;
      const radius = Math.min(width, height) / 2;
      const donutWidth = 75;
      const path = select(svgRef.current).selectAll('path').data(piece); // Compute the new angles
      const arcl = arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);
      path.transition().duration(500).attr('d', arcl); // redrawing the path with a smooth transition
    } else {
      const piece = pie()
        .value(function (d) {
          return d.value;
        })
        .sort(null)(dataBrandClothing);
      const width = 360;
      const height = 360;
      const radius = Math.min(width, height) / 2;
      const donutWidth = 75;
      const path = select(svgRef.current).selectAll('path').data(piece); // Compute the new angles
      const arcl = arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);
      path.transition().duration(500).attr('d', arcl); // redrawing the path with a smooth transition
    }
  }

  return (
    <div>
      <div
        ref={svgRef}
        style={{
          marginLeft: 10,
          marginTop: 60
        }}
      ></div>
      <div>
        <button id="compute" onClick={() => changeSelect('compute')}>
          Computer brand
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button id="clothing" onClick={() => changeSelect('clothing')}>
          Clothing brand
        </button>
      </div>
    </div>
  );
}

export default DonutChart;
