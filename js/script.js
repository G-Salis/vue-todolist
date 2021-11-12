
const app = new Vue({
  el:'#app',

  data: {
    todoList: [
      {
        text: 'Pulire i piatti',
        done: false,
      },

      {
        text: 'comprare il pigiama',
        done: false,
      },

      {
        text: 'Rasarsi i capelli',
        done: false,
      },
    ],
    
    stringToDo:{

      toDo:'',
      error: false


    },
    
    error: false

  },
  
})