<!--
  app/javascript/packs/components/search_button.vue    - Search command trigger component
  
    Luis Esteban    24 April 2018
      created


Implements a button to trigger a search.
-->

<template>
  <section>
    <button @click="search">Search</button>
  </section>
</template>

<script>
  module.exports = {
    methods: {
      search: function(){
        console.log('SEARCH ...');
        console.log('  FROM     = ' + $('#from_date').val() + " " + $('#from_time').val());
        console.log('  TO       = ' + $('#to_date'  ).val() + " " + $('#to_time'  ).val());
        console.log('  INTERVAL = ' + $('#scale'    ).val() +       $('#units'    ).val());
        console.log('  URL_LIST = ' + $('#url_list' ).val());
        $('#chart_output').text(
          JSON.stringify({
            after:      window.components["From"].selected_datetime.toJSON(),
            before:     window.components["To"  ].selected_datetime.toJSON(),
            interval:   window.components["interval"].interval,
            urls:       window.components["url_list"].list,
          })
        );
      }
    }
  }
</script>

<style scoped>
  section {
    background-color:       #ffddee;
    width:                  100%;
    display:                flex;
    flex-direction:         row;
    justify-content:        flex-end;
  }
</style>
