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
        // ---- Send Search Query ----
        axios.post('http://localhost:3000/page_views',
          {
            urls:       window.components.url_list.list,
            after:      window.components.From.as_milliseconds,
            before:     window.components.To.as_milliseconds,
            interval:   window.components.interval.interval
          }
        ).then(function (response) {
          // ---- Display Query Results ----
          results = response.data;
          $('#chart_output').text(
            JSON.stringify(results)
          );
        }).catch(function (error) {
          console.log('ERROR');
          console.log(error);
        });
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
