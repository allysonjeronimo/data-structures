const LinkedList = require('./LinkedList')

const linkedList = new LinkedList()

linkedList.prepend(3)
linkedList.prepend(5)
linkedList.prepend(2)

console.log('Result: ', linkedList.toString())