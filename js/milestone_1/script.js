// **MILESTONE 1**
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.
// **MILESTONE 2**
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// **MILESTONE 3**
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const app = new Vue({
  el:'#app',

  data: {
    toDoList: [
      {
        text: 'Pulire i piatti',
        done: false,
      },

      {
        text: 'Comprare il pigiama',
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
  methods: {
    insertItem(){
      this.toDoList.push(this.stringToDo);
                this.stringToDo = {
                    text: '',
                    done: false,
                };
                this.error = false;
    },

 
  }
})