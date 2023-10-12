import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function D3Test( { empData } ) {
  const chartRef = useRef();

  useEffect(() => {
        // Sample data
        // const data = [
        //     // 15 fake tasks
        //     { task: 'David', start: new Date('2023-10-01T08:00:00'), end: new Date('2023-10-01T12:00:00') },
        //     { task: 'Dillon', start: new Date('2023-10-01T14:00:00'), end: new Date('2023-10-01T16:00:00') },
        //     { task: 'Kade', start: new Date('2023-10-01T17:00:00'), end: new Date('2023-10-01T19:00:00') },
        //     { task: 'Jeremy', start: new Date('2023-10-01T08:00:00'), end: new Date('2023-10-01T14:00:00') },
        //     { task: 'Noah', start: new Date('2023-10-01T17:00:00'), end: new Date('2023-10-01T20:00:00') },
        //     { task: 'Dustin', start: new Date('2023-10-01T12:00:00'), end: new Date('2023-10-01T20:00:00') },
        //     { task: 'Connor', start: new Date('2023-10-01T12:00:00'), end: new Date('2023-10-01T16:00:00') },
        //     { task: 'Mcgregor', start: new Date('2023-10-01T12:00:00'), end: new Date('2023-10-01T14:00:00') },
        //     { task: 'Nate', start: new Date('2023-10-01T08:00:00'), end: new Date('2023-10-01T14:00:00') },
        //     { task: 'Diaz', start: new Date('2023-10-01T10:00:00'), end: new Date('2023-10-01T12:00:00') },
        //     { task: 'Three', start: new Date('2023-10-01T17:00:00'), end: new Date('2023-10-01T19:00:00') },
        //     // Add more tasks as needed
        // ];
        const data = empData.flatMap(employee => {
            const dataForEmployee = [];
            for (let i = 0; i < employee.startTimes.length; i++) {
              if (employee.startTimes[0] !== 'Off' && employee.endTimes[0] !== 'Off') {
                dataForEmployee.push({
                  task: employee.name,
                  start: new Date(`2023-10-01T${employee.startTimes[0]}:00`),
                  end: new Date(`2023-10-01T${employee.endTimes[0]}:00`),
                });
              }
            }
            return dataForEmployee;
          });


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
        const xScale = d3.scaleTime()
            .domain([d3.min(data, d => d.start), d3.max(data, d => d.end)])
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

export default D3Test;