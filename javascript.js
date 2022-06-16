    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
        },
        {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
    
    
// start loop here 

for (let i = 0; arrayOfTodos.length ; i++) {
   console.log (i)
  

    let toDos = document.getElementById("todo-list")

    let toDolist = document.createElement("li")

    let toDotextNode = document.createTextNode(arrayOfTodos[i].title)

    toDolist.appendChild(toDotextNode)

    toDos.appendChild(toDolist)
    // }   endloop
    }

} //end fucntion
    
