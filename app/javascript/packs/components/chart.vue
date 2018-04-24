<!--
  app/javascript/packs/components/chart.vue    - Chart output component
  
    Luis Esteban    24 April 2018
      created


Implements a time interval input component.

Props:
  - scale: the scalar part of the interval
  - units: the time base multiplied by the scale for the interval
-->


<template>
  <section>
    <label>{{name || 'Chart'}}</label>
    <p id="chart_output"></p>
  </section>
</template>

<script>
  module.exports = {
    props: ['name'],
  }
</script>

<style scoped>
  section {
    background-color:       #f7fff7;
  }
</style>
