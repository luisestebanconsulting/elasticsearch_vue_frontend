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
    <textarea id="url_list" name="url_list">http://www.news.com.au/travel/travel-updates/incidents/disruptive-passenger-grounds-flight-after-storming-cockpit/news-story/5949c1e9542df41fb89e6cdcdc16b615
http://www.smh.com.au/sport/tennis/an-open-letter-from-martina-navratilova-to-margaret-court-arena-20170601-gwhuyx.html
http://www.smh.com.au/nsw/premier-gladys-berejiklian-announces-housing-affordability-reforms-20170601-gwi0jn.html
http://www.news.com.au/technology/environment/trump-pulls-us-out-of-paris-climate-agreement/news-story/f5c30a07c595a10a81d67611d0515a0a
</textarea>
  </section>
</template>

<script>
  module.exports = {
    data: function(){
      return {
      }
    },
    props: ['name'],
    computed:{
        list(){
            return $("#url_list").val();
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
