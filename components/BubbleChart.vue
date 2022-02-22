<template>
  <div id="bubble-chart" class="chart flex justify-center" />
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
      // set the dimensions and margins of the graph
      const divwdth = document.getElementById('bubble-chart').offsetWidth
      const width = divwdth
      const height = 1000

      // append the svg object to the body of the page
      const svg = d3.select('.chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      // create dummy data -> just one element per circle
      const data = this.technologies

      // Initialize the circle: all located at the center of the svg area
      const node = svg.append('g')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', width / 10)
        .attr('cx', width / 2)
        .attr('cy', height / 2)
        .style('fill', '#19d3a2')
        .style('fill-opacity', 0.3)
        .attr('stroke', '#b3a2c8')
        .style('stroke-width', 4)
        .call(d3.drag() // call specific function when circle is dragged
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended))

      // Features of the forces applied to the nodes:
      const simulation = d3.forceSimulation()
        .force('center', d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
        .force('charge', d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
        .force('collide', d3.forceCollide().strength(0.01).radius(width / 10).iterations(10)) // Force that avoids circle overlapping

      // Apply these forces to the nodes and update their positions.
      // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
      simulation
        .nodes(data)
        .on('tick', function (d) {
          node
            .attr('cx', function (d) { return d.x })
            .attr('cy', function (d) { return d.y })
        })

      // What happens when a circle is dragged?
      function dragstarted (d) {
        if (!d3.event.active) { simulation.alphaTarget(0.03).restart() }
        d.fx = d.x
        d.fy = d.y
      }
      function dragged (d) {
        d.fx = d3.event.x
        d.fy = d3.event.y
      }
      function dragended (d) {
        if (!d3.event.active) { simulation.alphaTarget(0.03) }
        d.fx = null
        d.fy = null
      }
    }
  }
}
</script>
