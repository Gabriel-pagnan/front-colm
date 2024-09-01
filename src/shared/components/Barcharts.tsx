import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type DataItem = {
    yes: boolean;
    perhaps: boolean;
    no: boolean;
    id: number;
};

interface HexbinChartProps {
    data: DataItem[];
    width: number;
    height: number;
    radius: number;
}

const StackedBarChart = ({ data, width, height }: HexbinChartProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };

        svg.selectAll('*').remove();

        const processedData = data.map(d => ({
            id: d.id,
            yes: d.yes ? 1 : 0,
            no: d.no ? 1 : 0,
            perhaps: d.perhaps ? 1 : 0,
        }));

        const xScale = d3
            .scaleBand()
            .domain(processedData.map((d) => `Q${d.id}`))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const yScale = d3
            .scaleLinear()
            .domain([0, 1])
            .nice()
            .range([height - margin.bottom, margin.top]);

        const colorScale = d3
            .scaleOrdinal()
            .domain(['yes', 'no', 'perhaps'])
            .range(['#82ca9d', '#ff6666', '#ffd700']);

        const stackedData = d3.stack().keys(['yes', 'no', 'perhaps'])(processedData);

        const xAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) =>
            g.attr('transform', `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(xScale).tickSizeOuter(0));

        const yAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) =>
            g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(yScale));

        svg.append('g').call(xAxis);
        svg.append('g').call(yAxis);

        // Draw bars
        svg
            .append('g')
            .selectAll('g')
            .data(stackedData)
            .join('g')
            .attr('fill', ['#82ca9d', '#ff6666', '#ffd700'])
            .selectAll('rect')
            .data((d) => d)
            .join('rect')
            .attr('x', 1)
            .attr('y', (d) => yScale(d[1]))
            .attr('height', (d) => yScale(d[0]) - yScale(d[1]))
            .attr('width', xScale.bandwidth());

        // Add legend
        svg
            .append('g')
            .attr('transform', `translate(${width - margin.right - 100},${margin.top})`)
            .selectAll('g')
            .data(['yes', 'no', 'perhaps'])
            .join('g')
            .attr('transform', (d, i) => `translate(0,${i * 20})`)
            .call((g) => {
                g.append('rect').attr('width', 19).attr('height', 19).attr('fill', ['#82ca9d', '#ff6666', '#ffd700']);
                g.append('text')
                    .attr('x', 24)
                    .attr('y', 9.5)
                    .attr('dy', '0.32em')
                    .text((d) => d)
                    .attr('fill', 'black');
            });
    }, [data, width, height]);

    return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default StackedBarChart;