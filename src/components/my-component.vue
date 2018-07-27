<template>
  <div>
    <button v-on:click= "add">{{counter}}</button>
  
    <header>
      <div id="logo" >{{logo}}</div>
      <button >{{logo}}</button>
      <ul >
        <li v-for="nav in navs">{{nav.li}}</li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name:'mycomponent',
  data(){
    return {
      counter:0,
      navs:[
        {li:'主页'},
        {li:'日志'},
        {li:'说说'},
        {li:'相册'},
      ]
    }
  },
  props:['logo'],
  methods:{
    add:function(){
      this.counter+=1
    }
  }
}
</script>