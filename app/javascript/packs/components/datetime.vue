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
      v-model="selected_date"
    >
    <input
      type="time"
      :id="name.toLowerCase()+'_time'"
      :name="name.toLowerCase()+'_time'"
      v-model="selected_time"
    >
  </section>
</template>

      :value="date_to_YYYYMMDD(selected_datetime)"
      :value="date_to_HHMMSS(selected_datetime)"
<script>
  module.exports = {
    props: ['name','date','time'],
    data(){
      return {
        selected_date:      null,
        selected_time:      null,
        selected_datetime:  new Date(),
      }
    },
    computed:{
      as_milliseconds(){
        this.combine();
        offset = this.selected_datetime.getTimezoneOffset() * 60 * 1000;  // minutes to milliseconds
        return   this.selected_datetime.getTime() - offset;               // zoneless
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
      this.separate();
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
      combine(){
        this.selected_datetime = new Date(this.selected_date);
        time = this.selected_time.split(':');
        this.selected_datetime.setHours(
          parseInt("0"+time[0]),
          parseInt("0"+time[1]),
          parseInt("0"+time[2])
        );
      },
      separate(){
        this.selected_date = this.date_to_YYYYMMDD(this.selected_datetime);
        this.selected_time = this.date_to_HHMMSS(this.selected_datetime);
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
