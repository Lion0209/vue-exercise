<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <input v-model="logomsg">
    <br>
    <mycomponent v-bind:logo="logomsg"></mycomponent>
    <div>
      <p>{{total}}</p>
      <hr>
      <p>{{$router.name}}</p>
      <buttoncounter v-on:increment="incrementTotal"></buttoncounter>
      <buttoncounter v-on:increment="incrementTotal"></buttoncounter>

    </div>
  </div>

</template>

<script>
import mycomponent from './components/my-component' 
import buttoncounter from './components/button-counter'
import router from './router'

export default {
  name: 'App',
  data(){
    return{
      logomsg:'主页测试一下',
      total:0,
    }
  },
  methods:{
    incrementTotal:function(){
      console.log(this.total)
      this.total+=1
      
    }
  },
  components:{
    mycomponent,
    buttoncounter,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #070707;
  margin-top: 60px;
}
</style>
