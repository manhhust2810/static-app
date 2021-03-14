import React, { useEffect, useRef, useState } from 'react';
import { select } from 'd3'

function RaceChart() {
  const svgRef = useRef()
  const [scale, setScale] = useState(1)
  const [data, setData] = useState([3, 3, 5, 10, 12, 100])
  const canvasHeight = 400
  const canvasWidth = 900

  function drawBarChar(svgCanvas) {
    svgCanvas.selectAll('rect')
      .data(data).enter()
      .append('rect')
      .attr('width', 40)
      .attr('height', (dataPoint) => dataPoint * scale)
      .attr('fill', '#8C1515')
      .attr('x', (dataPoint, iteration) => iteration * 45)
      .attr('y', (dataPoint) => canvasHeight - dataPoint * scale)

    svgCanvas.selectAll('text')
      .data(data).enter()
      .append('text')
      .attr('x', (dataPoint, i) => i * 45 + 10)
      .attr('y', (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
      .text(dataPoint => dataPoint)
  }

  useEffect(() => {
    // draw canvas
    const svgCanvas = select(svgRef.current)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .attr('margin', 10)
      .style('border', '1px solid black')

    drawBarChar(svgCanvas)
    return () => {
      // remove canvas
      svgCanvas.remove()
    }
  }, [scale, data])

  return (
    <span>
      <div className="flex-container">
        <div 
          ref={svgRef} 
          style={{
          marginLeft: 10,
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column'
        }}
          className="flex-item"
        >
      </div>
    </div>
      <button onClick={() => setScale(scale + 1)}>
        Change scale
      </button>
    </span>
  );
}

export default RaceChart;
