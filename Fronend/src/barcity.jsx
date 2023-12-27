import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios'; // Import Axios
import  '/src/assets/css/barcity.css';

function BarChart() {
  const svgRef = useRef();
  const [data, setData] = useState([]); // State to store fetched data

  useEffect(() => {
    // Fetch data from your Spring Boot API
    axios.get('http://localhost:8080/data/findall')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once on component mount

  useEffect(() => {
    if (!data || data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 40, left: 100 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(data.map((d) => d.city))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.relevance)])
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);
      

    svg.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);
      


      svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((d) => d.relevance)
      .attr('dy', '-3em') // Use 'dy' to adjust the vertical position
      .attr('text-anchor', 'middle')

      .style('fill', 'black');
      
      svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.city))
      .attr('y', (d) => yScale(d.relevance))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.relevance))
      .attr('fill', 'steelblue');
  }, [data]);

  return (
    <>
    <div className="title">
    <h1>City-Relevance Data</h1>
    </div>

    <div className="centered">
      <svg ref={svgRef}></svg>
    </div>
    </>
  );
}

export default BarChart;
