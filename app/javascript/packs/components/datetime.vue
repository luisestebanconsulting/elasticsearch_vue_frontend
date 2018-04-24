<!--
  app/javascript/packs/components/datetime.vue    - Date with Time input component
  
    Luis Esteban    24 April 2018
      created


Implements a date and time input component.

Props:
  - name: name base for the two inputs (useful if there are more than one of these components.
  - date: initialise the date part
  - time: initialise the time part
-->

<template>
  <section>
    <label>{{name}}</label><br>
    <input
      type="date"
      :id="name.toLowerCase()+'_date'"
      :name="name.toLowerCase()+'_date'"
      :value="date_to_YYYYMMDD(selected_datetime)"
    >
    <input
      type="time"
      :id="name.toLowerCase()+'_time'"
      :name="name.toLowerCase()+'_time'"
      :value="date_to_HHMMSS(selected_datetime)"
    >
  </section>
</template>

<script>
  module.exports = {
    props: ['name','date','time'],
    data(){
      return {
        selected_datetime:  new Date(),
      }
    },
    mounted(){
      if (this.date != null) {
        this.selected_datetime = new Date(this.date);
      }
      if (this.time != null) {
        time = this.time.split(':');
        this.selected_datetime.setHours(
          parseInt("0"+time[0]),
          parseInt("0"+time[1]),
          parseInt("0"+time[2])
        );
      }
      window.components[this.name || 'datetime'] = this;
    },
    methods: {
      updateDate: function (target) {
        this.$emit('input', target.valueAsDate);
      },
      updateTime: function (target) {
        this.$emit('input', target.valueAsDate);
      },
      date_to_YYYYMMDD(date) {
        if (!date) { date = new Date(); }
        
        yyyy = ("000" +  date.getFullYear()).slice(-4);
        mm   = (  "0" + (date.getMonth()+1)).slice(-2);
        dd   = (  "0" +  date.getDate()    ).slice(-2);
        
        return [yyyy,mm,dd].join('-');
      },
      date_to_HHMMSS(date) {
        if (!date) { date = new Date(); }
        
        hh   = ("0"+date.getHours()  ).slice(-2);
        mm   = ("0"+date.getMinutes()).slice(-2);
        ss   = ("0"+date.getSeconds()).slice(-2);
        
        return [hh,mm,ss].join(':');
      },
    },
  }
</script>

<style scoped>
  section {
    flex:                   1;
    background-color:       #ffeedd;
    text-align:             center;
  }
</style>
