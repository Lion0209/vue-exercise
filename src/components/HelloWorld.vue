<template>
  <div class="hello" >
    <div >
      <ol> 
        <template v-for = "(todo,index) in todos">
        <li >
          {{ index }}-{{ todo }}
        </li>
        <li>
          huang
        </li>
        <br>
        </template>
      </ol>
    </div>

    <div id="app"> 
      <p>{{message}}</p>
      <input v-model="message">
    </div>
    <div>
      <ol>
        <li v-for = "(value,key,index) of values">
          {{index}}-{{key}}-{{value}}
        </li>
      </ol>
    </div>
    <div>
      <ol>
        <li v-for= "n of 10">
          {{n}}
        </li>
      </ol>
    </div>

    <div id="todo-list-example">
      <input v-model = "newTodoText" v-on:keyup.enter = "addNewTodo" placeholder="add new todo">
      <ul>
        <li is = "todo-item" v-for = "(todo,index) in todos" v-bind:title = "todo" v-on:remove = "todos.splice(index,1)"> 
        </li>
      </ul>
    </div>

    <div>
      <input type="checkbox" id="checkbox" v-model= "checked">
      <label for="checkbox">{{ checked }}</label>
    </div>

    <div>
      <input type="checkbox" id="jhon" value="Jhon" v-model="checkedNames">
      <label for="jhon">Jhon</label>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <p>checked names:{{checkedNames}}</p>
    </div>

    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <p>picked:{{picked}}</p>
    </div>

    <div>
      <select v-model="selected" >
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <br>
      <p>selected:{{selected}}</p>
    </div>

    <!-- 动态选项 -->
    <div>
      <select v-model="select">
        <option v-for="option of options" v-bind:value="option.value">
          {{option.text}}
        </option>
      </select>
        <p>Select:{{select}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message:'hello world',
      todos: [
        {text:'learn JS'},
        {text:'learn vue'},
        {text:'build something awesome'},
      ],
      values:{
        firstname:'huangfeihong',
        lastname:'huangfei',
        age:'30',
      },
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Mow the lawn',
      ],
      checked:false,
      checkedNames:[],
      picked:'',
      selected:'A',
      select:'A',
      options:[
        {text:'one',value:'A'},
        {text:'two',value:'B'},
        {text:'three',value:'C'},
      ]
    }
  },
  methods:{
    
    addNewTodo:function(){
      this.todos.push(this.newTodoText)
      this.newTodoText=''
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
