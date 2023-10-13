import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function D3Emp( { empData } ) {
  const chartRef = useRef();

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
useEffect(() => {

    const data = [];
    for (let i = 0; i < empData.startTimes.length; i++) {
        const startTime = new Date(`2023-10-01T${empData.startTimes[i]}:00`);
        const endTime = new Date(`2023-10-01T${empData.endTimes[i]}:00`);
        const dayOfWeek = days[i]; // Get the day of the week

        data.push({
            task: dayOfWeek,
            start: startTime,
            end: endTime,
        });
    }
    



        // Define chart dimensions and margins
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create an SVG element
        const svg = d3.select('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('background-color', 'lightgray')
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Define scales for x and y axes
        const minTime = new Date('2023-10-01T06:00:00'); // Replace with your desired minimum time
        const maxTime = new Date('2023-10-01T20:00:00'); // Replace with your desired maximum time
        
        const xScale = d3.scaleTime()
            .domain([minTime, maxTime])
            .range([0, width]);

        const yScale = d3.scaleBand()
            .domain(data.map(d => d.task))
            .range([0, height])
            .padding(0.1);

        // Create x and y axes
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        // Append x and y axes to the SVG
        svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);

        svg.append('g')
            .attr('class', 'y-axis')
            .call(yAxis);

        // Create a linear gradient
        svg.append('defs').append('linearGradient')
            .attr('id', 'bar-gradient')
            .attr('x1', '0%')
            .attr('y1', '0%')
            .attr('x2', '100%')
            .attr('y2', '0%')
            .selectAll('stop')
            .data([
                { offset: '0%', color: 'purple' },
                { offset: '100%', color: 'blue' },
            ])
            .enter().append('stop')
            .attr('offset', d => d.offset)
            .attr('stop-color', d => d.color);

        // Draw Gantt bars with the gradient fill
        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => xScale(d.start))
            .attr('y', d => yScale(d.task))
            .attr('width', d => xScale(d.end) - xScale(d.start))
            .attr('height', yScale.bandwidth())
            .attr('fill', 'url(#bar-gradient)');


    // D3 code here

    // Add your D3 visualization logic here
  }, []);

  return <svg ref={chartRef}></svg>;
}

export default D3Emp;