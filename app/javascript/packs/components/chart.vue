<!--
  app/javascript/packs/components/chart.vue    - Chart output component
  
    Luis Esteban    24 April 2018
      created


Implements a chart output component.

Props:
  - name: name of the chart
-->


<template>
  <section>
    <label>{{name || 'Chart'}}</label>
    <p :id="id+'_messages'"></p>
    <canvas :id="id"></canvas>
  </section>
</template>

<script>
  const chart_options = {
    responsive:   true,
    lineTension:  1,
    scales:       {
      yAxes:        [{
        ticks:        {
          beginAtZero:  true,
          padding:      12,
        }
      }]
    }
  };
  // Colours are RGB values to be inserted into an rgba() specification
  const chart_colors = [
    '90,191,121',
    '114,132,223',
    '99,55,184',
    '182,86,182',
    '164,50,46',
    '214,162,97',
    '121,90,191',
    '223,114,132',
    '184,99,55',
    '182,182,86',
    '46,164,50',
    '97,214,162',
  ];
  module.exports = {
    props: ['name'],
    data() {
      return {
        data:   null,
        chart:  null,
      }
    },
    computed:{
      id(){
          return this.name && this.name.toLowerCase() || 'chart_canvas';
      },
    },
    methods: {
      clear() {
        $('#'+this.id).hide();
        $('#'+this.id+"_messages").hide();
      },
      error(message){
        $('#'+this.id+"_messages").show();
        $('#'+this.id+"_messages").text(message);
      },
      render(data){
        $('#'+this.id).show();
        
        // -- Extract Labels --
        labels = data.map(function(interval){ return interval[0]; });
        
        // -- Extract URLs --
        urls = {}
        data.forEach(function(interval){
          for (var url in interval[2]) {
            urls[url] = [];
          }
        });
        
        // -- Extract Datasets --
        datasets = {};
        index    = 0;
        for (var url in urls) {
          datasets[url] = {
            label:            url,
            data:             [],
            backgroundColor:  'rgba(' + chart_colors[index] + ',.25)',
            borderColor:      'rgba(' + chart_colors[index] + ',.75)',
            borderWidth:      2,
          };
          index += 1;                     // cycle through colours
          index %= chart_colors.length;   // wrap around if necessary
        }
        data.forEach(function(interval){
          for (var url in urls) {
            datasets[url].data.push(interval[2][url] || 0);
          }
        });
        
        chart_datasets = []
        for (url in datasets) {
          chart_datasets.push(datasets[url]);
        }
        
        // -- Compose Chart Data --
        chart_data = {
          labels:     labels,
          datasets:   chart_datasets
        };
        
        // -- Create Chart --
        this.chart = new Chart($('#'+this.id), {
          type:     'line',
          data:     chart_data,
          options:  chart_options,
        });
      },
    },    
    mounted() {
      window.components[this.id] = this;
      this.clear();
    },
  }
</script>

<style scoped>
  section {
    background-color:       #f7fff7;
  }
</style>
