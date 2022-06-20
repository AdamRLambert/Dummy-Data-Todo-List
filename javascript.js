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
        }
]
    
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

for (let i = 0; i < arrayOfTodos.length; i++) {
   console.log (i)
  

    let toDos = document.getElementById("todo-list")

    let toDolist = document.createElement("li")

    let toDotextNode = document.createTextNode(arrayOfTodos[i].title)

    toDolist.appendChild(toDotextNode)

    toDos.appendChild(toDolist)
    }
}

function clearTodos() {

    const todos = document.getElementsByTagName ("ol")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < todos.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(todos[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    todos[i].innerHTML = null
  }  

}


function filterById () {

const num = document.getElementById ("number_input").value

const filteredArray = arrayOfTodos.filter(array => array.userId ==num) // and completed is false
   
for (let i = 0; filteredArray.length ; i++) {

    let toDos = document.getElementById("todo-list")

    let toDolist = document.createElement("li") 
    
    let toDotextNode = document.createTextNode(filteredArray[i].title)

    let userId = document.createTextNode(filteredArray[i].userId)
    
    toDolist.appendChild(toDotextNode)
    toDolist.appendChild(userId)
    toDos.appendChild(toDolist)
}

}

// new function to filer by UserID and completed
// fiterl array where the userDI equals Input num and compelted equals true
    
function filterByCompleted () {

    const num = document.getElementById ("number_input").value
    
    const filteredArray = arrayOfTodos.filter(array => array.userId ==num && array.completed ==true) 
       
    for (let i = 0; i < filteredArray.length ; i++) {
    
        let toDos = document.getElementById("todo-list")
    
        let toDolist = document.createElement("li") 
        
        let toDotextNode = document.createTextNode(filteredArray[i].title)
    
        toDolist.appendChild(toDotextNode)
    
        toDos.appendChild(toDolist)

    }

}