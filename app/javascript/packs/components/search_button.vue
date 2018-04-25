<!--
  app/javascript/packs/components/search_button.vue    - Search command trigger component
  
    Luis Esteban    24 April 2018
      created


Implements a button to trigger a search.

The search query is packaged from the input components and
the results are passed to the histogram chart to be rendered.
-->

<template>
  <section>
    <label id="search_spinner" style="display: none;">Searching ...</label>
    <button @click="search">Search</button>
  </section>
</template>

<script>
  module.exports = {
    methods: {
      search: function(){
        // ---- Send Search Query ----
        $('#search_spinner').show();
        window.components.histogram.clear();
        
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
          window.components.histogram.render(results);
          $('#search_spinner').hide();
        }).catch(function (error) {
          // ---- Display Query Error ----
          window.components.histogram.error(error);
          $('#search_spinner').hide();
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
    align-items:            center;
  }
</style>
