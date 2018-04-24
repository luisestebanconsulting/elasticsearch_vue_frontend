/*
  app/assets/javascripts/main.js      - Create Vue and assign to main
    
    Luis Esteban    24 April 2018
      created

*/

import Vue from 'vue/dist/vue.esm'

import App from '../app.vue'
Vue.component('app',            App);


// ---- Components ----
var Components = Components || {};
window.components = Components;

import DateTime     from '../packs/components/datetime.vue'
import SearchButton from '../packs/components/search_button.vue'
import Interval     from '../packs/components/interval.vue'
import UrlList      from '../packs/components/url_list.vue'
import Chart        from '../packs/components/chart.vue'

Vue.component('datetime',       DateTime);
Vue.component('search-button',  SearchButton);
Vue.component('interval',       Interval);
Vue.component('url-list',       UrlList);
Vue.component('chart',          Chart);


// ---- Main ----
(function(){
  'use strict'
  
  $(function(){
    var main_vue = new Vue({
      data: {
        data:   'data from app/javascript/packs/main.js file, for whole app',
      },
      el:    'main',
    });
  });
})();
