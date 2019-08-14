var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");


while (input !== "quit") {
    // handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    // ask again for new input
    input = prompt("What would you like to do?");
}
console.log("Okay, you Quit the App");


function listTodos() {
    console.log("***********");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    })
    console.log("***********");
}

function addTodo() {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);
}

function deleteTodo() {
    var idx = prompt("Enter index of todo to delete");
    todos.splice(idx, 1);
    console.log("Deleted Todo");
}
