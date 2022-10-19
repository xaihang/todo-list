let input = prompt('What would you like to do?')
//list (arrays) - things to do 
const todos = ['buy milk', 'bake cookies', 'do laundries', 'vaccuum floor', 'clean toilet'];
//conditional statement (while loop) keep running code until "quit or q" is entered
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************')
        //print the to existing todos list 
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('****************')

        //new list - if you want to add new todos, this condition will add `newtodos` to the existing 
    } else if (input === 'new') {
        const newTodos = prompt('What is the new todo?');
        todos.push(newTodos);
        console.log(`${newTodos} added to the list`);


        //delete todos 
    } else if (input === 'delete') {
        const indexStr = prompt('Enter an index to delete:');
        const index = parseInt(indexStr);
        const deleted = todos.splice(index, 1);
        console.log(`Deleted: ${deleted[0]}`);
    }
    input = prompt('What would you like to do?')
}
console.log("Ok quit the app!")