<!--
  app/javascript/packs/components/url_list.vue    - URL list input component
  
    Luis Esteban    24 April 2018
      created


Implements a URL list input component.

Props:
  - name: (unused)
-->

<template>
  <section>
    <label for="url_list">
      URL List
    </label><br>
    <textarea id="url_list" name="url_list" v-model="text"></textarea>
  </section>
</template>

<script>
  module.exports = {
    data: function(){
      return {
        text:     '',
      }
    },
    props: ['name'],
    computed:{
        list(){
            return this.text;
        },
    },
    mounted(){
      if (this.scale != null) { this.selected_scale = this.scale; }
      if (this.units != null) { this.selected_units = this.units; }
      window.components['url_list'] = this;
    },
  }
</script>

<style scoped>
  section {
    background-color:       #ddeeff;
  }
  
  section textarea  {
    height:                 12em;
    width:                  calc(100% - 3ex);
    margin:                 1ex;
  }
</style>
