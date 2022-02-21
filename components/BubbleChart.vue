<template>
  <div class="chart flex justify-center" />
</template>

<script>
const d3 = require('d3')
export default {
  props: {
    technologies: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.drawBubbleChart()
  },
  methods: {
    drawBubbleChart () {
      const dataset = {
        children: this.technologies
      }

      const diameter = 800
      const color = d3.scaleOrdinal(d3.schemeCategory10)

      const bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(3)
      const svg = d3.select('.chart')
        .append('svg')
        .attr('width', diameter)
        .attr('height', diameter)
        .attr('class', 'bubble')
        .attr('class', '')

      const nodes = d3.hierarchy(dataset)
        .sum(function (d) { return d.responseCount })

      const node = svg.selectAll('.node')
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function (d) {
          return !d.children
        })
        .append('g')
        .attr('class', 'node')
        .attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')'
        })

      node.append('title')
        .text(function (d) {
          return d.facilityId
        })

      node.append('circle')
        .attr('r', function (d) {
          return d.r
        })
        .style('fill', function (d) {
          return color(d.facilityId)
        })

      node.append('text')
        .attr('dy', '.3em')
        .style('text-anchor', 'middle')
        .text(function (d) {
          return d.data.facilityId.substring(0, d.r / 3)
        })

      d3.select(self.frameElement)
        .style('height', diameter + 'px')
    }
  }
}
</script>
