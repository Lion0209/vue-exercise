<template>
  <div>
    <button v-on:click="increment">{{counter}}</button>
  </div>
</template>
<script>
  export default {
    name:'buttoncounter',
    data:function(){
      return {
        counter:0,
      }
    },
    methods:{
      increment:function(){
        this.counter+=1
        this.$emit('increment')
        // console.log(this.counter)
      }
    }
  }
</script>