let input = prompt('What would you like to do?')
//arrays - things to do 
const todo = ['buy milk', 'bake cookies', 'do laundries', 'vaccuum floor', 'clean toilet'];
while (input !== 'quit' && input !== 'q') {
    input = prompt('What would you like to do?')
}
console.log("Ok quit the app!")