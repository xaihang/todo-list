//list (arrays) - things todos
const todos = ['buy milk', 'bake cookies', 'do laundries', 'vaccuum floor', 'clean toilet'];

//while loop is in effective system will continue to prompt asking you what you want to do until you break it with 'q or quit` 
let input = prompt('What would you like to do?')

//conditional statement (while loop) keep running code until "quit or q" is entered
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************')

        //print the to existing todos list by using the for loop...loop over the arrays
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('****************')

        //new list - if you want to add new todos, this condition will prompt what you want to add, and then add `newtodos` to the existing todos list 
    } else if (input === 'new') {
        const newTodos = prompt('What is the new todo?');
        todos.push(newTodos);
        console.log(`${newTodos} added to the list`);


        //delete todos 
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an index to delete:'));
        if (!Number.isNaN(index)) {
            //splice method = will remove a certain part of an array
            const deleted = todos.splice(index, 1);
            console.log(`Deleted: ${deleted[0]}`);
        } else {
            console.log('Uknown index')
        }

    }
    input = prompt('What would you like to do?')
}
console.log("Ok quit the app!")