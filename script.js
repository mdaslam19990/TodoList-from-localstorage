const getElement = id => {
    const input = document.getElementById(id);
    const inputValue = input.value;
    input.value = "";
    return inputValue;
}


const handleAddBtn = () => {
    const inputField = getElement("todo-text");
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    const id = Math.random().toString(23).slice(2);

    if(!getTodos){
        const setTodos = [
            {
                id,
                title: inputField,
                completed: false,
            }
        ]
        localStorage.setItem("todos", JSON.stringify(setTodos))
    }else {
        const todo = [
            ...getTodos,
            {
                id,
                title: inputField,
                completed: false,
            }
        ]
        localStorage.setItem("todos", JSON.stringify(todo))
    }
    console.log(getTodos)
render()
}


const render = () => {
    const todoList = document.getElementById("todo-list");
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    todoList.textContent = ""
    if(getTodos){
        getTodos?.forEach(todo => {
            const li = document.createElement("li");
            li.classList.add()
            li.innerHTML = `
                ${todo.title} 
                <button onclick="deleteTodos('${todo.id}')" class="bg-red-400 px-2 py-1 rounded-md">Delete</button>
            `
            todoList.appendChild(li)
        });
    }else{
        const li = document.createElement("li");
        li.innerText = "No data Found";
        todoList.appendChild(li)
    }

}

const removeBtn = () => {
    localStorage.removeItem("todos")
    render()
}


const deleteTodos = (id) => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    const remainingTodos = getTodos.filter(todo => todo.id !== id);
    if(remainingTodos.length){

        localStorage.setItem("todos", JSON.stringify(remainingTodos))
    }else{
        localStorage.removeItem("todos")
    }
    
    render()
}

render()