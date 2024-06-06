console.log('Vue-todolist')

const { createApp } = Vue

createApp({
data() {
    return {
        titolo: "Vue-todolist",
        todoList: [
            {
                content: "Lanciafiamme",
                done: false
            },
            {
                content: "Patate al forno",
                done: false
            },
            {
                content: "Hamburger vegano",
                done: false
            },
            {
                content: "Parrucca bionda",
                done: false
            },
            {
                content: "Shampoo per baffi",
                done: false
            },
        ]
    }
},
methods: {
    sbarratoInElenco : function(itemIndex) {
        this.todoList[itemIndex].done = !this.todoList[itemIndex].done;
    }
}
}).mount('#app')