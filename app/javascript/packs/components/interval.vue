<!--
  app/javascript/packs/components/interval.vue    - Time interval input component
  
    Luis Esteban    24 April 2018
      created


Implements a time interval input component.

Props:
  - scale: the scalar part of the interval
  - units: the time base multiplied by the scale for the interval
-->

<template>
  <section>
    <label>
      Scale<br>
      <input id="scale" type="number" name="scale" v-model="selected_scale">
    </label>
    <label>
      Units<br>
      <select id="units" name="units"
        v-model="selected_units"
        @input="event => { $emit('input', event.target.value) }"
      >
        <option v-for="unit in units_sorted" :value="unit">{{unit_names[unit]}}</option>
      </select>
    </label>
  </section>
</template>

<script>
  module.exports = {
    data(){
      return {
        selected_scale:   14,
        selected_units:   'd',
        units_sorted:     ['m','s','min','h','d','w','mon','y'],
        unit_names: {
          m:    'milliseconds',
          s:    'seconds',
          min:  'minutes',
          h:    'hours',
          d:    'days',
          w:    'weeks',
          mon:  'months',
          y:    'years'
        },
      }
    },
    computed:{
        interval(){
            return this.selected_scale + this.selected_units;
        },
    },
    props: ['scale','units'],
    mounted(){
      if (this.scale != null) { this.selected_scale = this.scale; }
      if (this.units != null) { this.selected_units = this.units; }
      window.components['interval'] = this;
    },
    watch: {
      selected_scale: {
        handler(new_value) {
          this.selected_scale = new_value;
        },
      },
      selected_units: {
        handler(new_value) {
          this.selected_units = new_value;
        },
      },
    }
  }
</script>

<style scoped>
  section {
    text-align:             center;
    background-color:       #fff7f0;
    display:                flex;
    flex-direction:         row;
    justify-content:        center;
    align-content:          center;
    align-self:             flex-end;
    margin:                 1ex;
  }
  
  section input[type="number"]  {
    text-align:             right;
  }
</style>
