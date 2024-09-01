import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3';
import { hexbin as d3Hexbin } from 'd3-hexbin';
import { Colors } from '../themes/Colors';

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
const HexbinChart = ({ data, width, height, radius }: HexbinChartProps) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    function truncateLabel(title: string, maxLength = 10) {
        if (title.length > maxLength) {
            return title.slice(0, maxLength) + '...';
        }
        return title;
    }

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();
        const centerX = width / 3;
        const centerY = height / 3;

        const points = data.map((_, index) => ({
            x: centerX + (index % 3) * radius * 1.5,
            y: centerY + Math.floor(index / 3) * radius * 1.5,
            ...data[index],
        }));

        const hexbin = d3Hexbin<any>()
            .x(d => d.x)
            .y(d => d.y)
            .radius(radius)
            .extent([[0, 0], [width, height]]);

        const bins = hexbin(points);
        const getColor = (d: DataItem) => {
            if (d.yes) return Colors.greenPrimary;
            if (d.perhaps) return Colors.yellowPrimary;
            if (d.no) return Colors.redPrimary;
            return '#ccc';
        };

        svg
            .append('g')
            .selectAll('path')
            .data(bins)
            .enter()
            .append('path')
            .attr('margin', d => '4px')
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .attr('fill', d => getColor(d[0]))
            .attr('d', d => hexbin.hexagon(0))
            .transition()
            .duration(1000)
            .attr('d', hexbin.hexagon(radius))
            .style('cursor', 'pointer');

        const tooltip = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('padding', '5px')
            .style('background', 'rgba(0, 0, 0, 0.7)')
            .style('color', 'white')
            .style('border-radius', '4px')
            .style('pointer-events', 'none')
            .style('opacity', 0)
            .style('cursor', 'pointer');
        
        svg
            .append('g')
            .selectAll('text')
            .data(bins)
            .enter()
            .append('text')
            .attr('transform', d => `translate(${d.x},${d.y})`)
            .attr('text-anchor', 'middle')
            .attr('dy', '.15em')
            .style('fill', 'white')
            .style('font-size', '12px')
            .style('cursor', 'pointer')
            .text(d => truncateLabel(d[0]?.title))
            .on('mouseover', function (event, d) {
                tooltip.style('opacity', 1)
                    .text(d[0]?.label)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 10) + 'px');
            })
            .on('mousemove', function (event) {
                tooltip.style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 10) + 'px');
            })
            .on('mouseout', function () {
                tooltip.style('opacity', 0);
            });
    }, [data, height, radius, width]);

    return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default HexbinChart;
