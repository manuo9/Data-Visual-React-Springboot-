import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';


function EntityDistributionChart() {
  const svgRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Spring Boot API
    axios.get('http://localhost:8080/data/findall')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      return; // Data is not available yet, so skip rendering the chart
    }
  
    const margin = { top: 20, right: 30, bottom: 9, left: 0 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
  
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`); // Center the pie chart
  
    // Prepare data for the pie chart
    const sectorData = d3.group(data, (d) => d.region);
    const sectorDataArray = Array.from(sectorData, ([key, value]) => ({ sector: key, count: value.length }));
    const pie = d3.pie().value((d) => d.count);
  
    // Define color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);
  
    // Create the pie chart slices
    const arcs = pie(sectorDataArray);
  
    // Create arcs for the pie chart
    const arc = d3.arc()
      .innerRadius(80)
      .outerRadius(Math.min(width, height) / 2-4 );
    
      svg.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));
    
    // Add labels to the pie chart
    svg.selectAll('text')
    .data(arcs)
    .enter()
    .append('text')
    .attr('fill', 'white')
    .attr('class', 'label')
    
    .attr('transform', (d) => {
      const pos = arc.centroid(d);
      // Move the label a bit further from the center
      pos[0] = pos[0] * 1.5;
      pos[1] = pos[1] * 1.5;
      return `translate(${pos})`;
    })
    
    .attr('dy', '0.35em')
    .text((d) => d.data.sector);
  }, [data]);
  

  return (
    <>
    <div className="title">
    <h1>Region Data</h1>
    </div>
    <br/>
    <br/>
    <div className="centered">
      <svg ref={svgRef}></svg>
    </div>
    </>
  );
}


 export default EntityDistributionChart;
